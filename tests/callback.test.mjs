import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync('src/app/api/callback/route.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
const courses = ['AI-Native Product Engineer', 'Data & AI Powered Analyst', 'AI Product Designer & Builder'];
const valid = { name: 'Test learner', email: 'learner@example.com', phone: '+919876543210', course: courses[0], qualification: 'UG', description: 'Learning product engineering' };

function load(sendMail) {
  const exports = {};
  const env = { SMTP_HOST: 'smtp.example.com', SMTP_PORT: '587', SMTP_USER: 'test', SMTP_PASS: 'test', SMTP_FROM: 'Grow Dart <hi@growdart.com>' };
  const dependencies = name => name === 'nodemailer' ? { createTransport: () => ({ sendMail, close() {} }) } : { cohortCourses: courses };
  new Function('require', 'exports', 'process', compiled)(dependencies, exports, { env });
  return { post: exports.POST, env };
}
function request(body = valid, origin = 'http://localhost:3000') {
  return new Request('http://localhost:3000/api/callback', { method: 'POST', headers: { 'Content-Type': 'application/json', origin }, body: JSON.stringify(body) });
}

test('sends validated details to the fixed inbox with the learner as reply-to', async () => {
  let message;
  const { post } = load(async mail => { message = mail; return { accepted: ['hi@growdart.com'] }; });
  assert.equal((await post(request())).status, 200);
  assert.equal(message.to, 'hi@growdart.com');
  assert.equal(message.replyTo, valid.email);
  assert.equal(message.from, 'Grow Dart <hi@growdart.com>');
  for (const value of Object.values(valid)) assert.ok(message.text.includes(value));
});
test('rejects invalid fields and cross-origin requests without sending', async () => {
  const { post } = load(async () => { assert.fail('must not send'); });
  for (const field of [{ email: 'invalid' }, { course: 'Other' }, { qualification: 'Other' }, { phone: '-------' }, { name: 'Name\nInjected' }]) {
    assert.equal((await post(request({ ...valid, ...field }))).status, 400);
  }
  assert.equal((await post(request(valid, 'https://other.example'))).status, 403);
});
test('missing configuration and SMTP failure cannot report success', async () => {
  const missing = load(async () => { assert.fail('must not send'); });
  delete missing.env.SMTP_PASS;
  assert.equal((await missing.post(request())).status, 503);
  const failed = load(async () => { throw new Error('private SMTP details'); });
  const response = await failed.post(request());
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes('private SMTP details'));
  const rejected = load(async () => ({ accepted: [] }));
  assert.equal((await rejected.post(request())).status, 502);
});
test('organization enquiries require a description without course or qualification', async () => {
  let message;
  const { post } = load(async mail => { message = mail; return { accepted: ['hi@growdart.com'] }; });
  for (const category of ['institution', 'corporate']) {
    const body = { name: valid.name, email: valid.email, phone: valid.phone, category, description: 'Custom technical training' };
    assert.equal((await post(request(body))).status, 200);
    assert.ok(message.text.includes(category));
    assert.ok(message.text.includes('Requirement description:\nCustom technical training'));
    assert.ok(!message.text.includes('Qualification:'));
    assert.ok(!message.text.includes('Course:'));
    assert.equal((await post(request({ ...body, description: ' ' }))).status, 400);
  }
});
