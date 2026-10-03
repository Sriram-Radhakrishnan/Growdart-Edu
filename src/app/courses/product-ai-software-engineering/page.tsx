import type { Metadata } from "next";
import { EngineeringCourse } from "@/components/engineering-course";

export const metadata: Metadata = {
  title: "Product & AI Software Engineering | Grow Dart",
  description: "A 6 month program to learn design, development, testing, and deployment with AI in your engineering workflow.",
};

export default function Page() { return <EngineeringCourse />; }
