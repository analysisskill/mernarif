import "./globals.css";

export const metadata = {
  title: "TurboArifff - All Apps",
  description: "All apps in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
