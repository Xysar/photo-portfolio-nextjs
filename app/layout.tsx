export const metadata = {
  title: "Jorge Isoreo",
  description: "Professional Handholder",
  icons: {
    icon: "/favicon.svg",
  },
};
import "./globals.css";

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
