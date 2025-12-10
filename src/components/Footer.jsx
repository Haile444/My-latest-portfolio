import React from "react";
import { Card } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="mt-10">
      <Card className="bg-gradient-to-r from-red-600 to-indigo-600 text-white text-center p-6 shadow-lg rounded-none">
        <p>
          © {new Date().getFullYear()} Hailemeskel Girum. All rights reserved.
        </p>
      </Card>
    </footer>
  );
}
