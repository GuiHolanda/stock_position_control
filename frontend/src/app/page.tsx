import { CustomHeader } from "../components/CustomHeader";

export default async function Page() {
  return (
    <>
      <CustomHeader />
      <h1 className="bg-slate-700 h-96">Hello, Next.js</h1>
    </>
  );
}
