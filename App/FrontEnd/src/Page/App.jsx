"use client";

import { useEffect } from "react";


export default function App({value}) {
  useEffect(() => {
    console.log(process.env.myRuntimeEnvVar)
  },[])
  return (
    <section>
      This is Home Page {process.env.NEXT_PUBLIC_APP_NAME}
    </section>
  );
}
