import Logo from "../../components/UI/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <div className="max-w-md lg:w-2/5 shadow-md rounded px-10 py-8 mx-auto mb-auto mt-32">
        <div className="flex -ms-8 mb-8">
          <Logo width={256} height={64} />
        </div>

        {children}
      </div>
    </div>
  );
}
