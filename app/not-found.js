"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')", 
        // Beautiful holiday/beach trip theme
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        color: "white",
        textShadow: "0px 3px 12px rgba(0,0,0,0.8)",
        backdropFilter: "blur(3px)",
      }}
    >
      <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "15px" }}>
        Page Not Found
      </h1>

      <p style={{ fontSize: "1.3rem" }}>
        Redirecting to home...
      </p>
    </div>
  );
}
