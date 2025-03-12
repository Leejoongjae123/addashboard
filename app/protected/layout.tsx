import { ReactNode } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-[100vw] h-full flex flex-col items-center bg-white">
      {children}
    </div>
  );
} 