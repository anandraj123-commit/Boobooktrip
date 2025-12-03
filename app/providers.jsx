"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


export default function Providers({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // loader duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
