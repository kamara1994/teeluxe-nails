import "./globals.css";

export const metadata = {
  title: "TEELUXE Nails",
  description: "Girly glitter luxury nail studio",
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
