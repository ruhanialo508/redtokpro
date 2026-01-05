import "./globals.css";

export const metadata = {
  title: "RedTok",
  description: "Short video platform prototype"
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
