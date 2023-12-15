"use client";

import { supabase } from "@/utils/supabase";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(supabase);
  }, []); 

  return (
    <div>
      <p>sdadasd</p>
    </div>
  );
}
