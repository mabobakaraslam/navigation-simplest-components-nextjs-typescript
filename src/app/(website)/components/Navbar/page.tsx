// File: Navbar/page.tsx located in app-name/src/app/(website)/componenet/Navbar/

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "green", color: "white", padding: "5px", display: "flex", gap: "15px" }}>
      <Link href="/">Home</Link>
      <a href="/diary">Diary</a>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  )
}