import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import profilePic from "../assets/profile.jpg";
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto text-center max-w-4xl flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>

        {/* Profile / Avatar */}
        <Avatar className="w-32 h-32 mb-4">

          <img src={profilePic} alt="Hailemeskel Girum" />
        </Avatar>

        {/* Description Card */}
        <Card className="p-6 bg-white shadow-lg text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            I’m a passionate Fullstack Developer with extensive experience
            building high-impact web applications. I have worked in
            license-based systems such as the Petroleum & Energy website,
            enterprise solutions like Lucy ERP (payroll, finance, and business
            processes), and land management platforms including appointment and
            property systems. I specialize in Angular, React, ASP.NET, and SQL
            Server, delivering scalable, user-friendly, and enterprise-ready
            solutions.
          </p>
        </Card>
      </div>
    </section>
  );
}
