// src/app/clientes/page.tsx
"use client";

import NavBar from "../../../components/NavBar";
import VoiceTest from "../../../components/VoiceTest";

export default function ClientesPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/h6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
            <br />
            <br />

      <div className="pt-16 flex items-center justify-center">
        <VoiceTest />
      </div>
    </div>
  );
}
