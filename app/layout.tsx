export const metadata = {
  title: "Jorge Isoreo",
  description: "Professional Handholder",
  icons: {
    icon: "/favicon.svg",
  },
};
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { getClient } from "./sanity/client";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const commissionedSeries = await getClient().fetch(
    `*[_type == "series" && category=="commission"]{title,slug}`
  );
  const personalSeries = await getClient().fetch(
    `*[_type == "series" && category=="personal"]{title,slug}`
  );
  const folkloricoSeries = await getClient().fetch(
    `*[_type == "series" && category=="folklorico"]{title,slug}`
  );
  return (
    <html lang="en">
      <body>
        <Navbar
          personalOptions={personalSeries}
          commissionedOptions={commissionedSeries}
          folkloricoOptions={folkloricoSeries}
        />
        {children}
      </body>
    </html>
  );
}
