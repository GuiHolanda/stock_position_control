"use client";

import { CustomHeader } from "../components/CustomHeader";
import { useGetPositionHistory } from "../shared/hooks/useGetPositionHistory";

export default function Page() {
  const { data } = useGetPositionHistory();

  return (
    <>
      <CustomHeader />
      <h1 className="bg-orange-800">Hello, Next.js!</h1>
    </>
  );
}
