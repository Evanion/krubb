import type { LayoutProps } from "@krubb/types";

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Krubb</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
