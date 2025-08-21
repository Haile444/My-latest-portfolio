import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-indigo-600 text-white text-center p-6 mt-10">
      <p>© {new Date().getFullYear()} Hailemeskel Girum. All rights reserved.</p>
    </footer>
  );
}
