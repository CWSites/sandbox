import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
