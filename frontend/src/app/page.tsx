"use client";

import { useGetPositionHistory } from "../hooks/useGetPositionHistory";

export default function Page() {
  const { data } = useGetPositionHistory();
  console.log("data", data);

  return <h1 className="bg-orange-800">Hello, Next.js!</h1>;
}
