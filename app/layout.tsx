export const metadata = {
  title: "Fotista",
  description: "Professional Handholder",
  icons: {
    icon: "/favicon.svg",
  },
};
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/Navbar";
import { getClient } from "./sanity/client";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectsSeries = await getClient().fetch(
    `*[_type == "collection"]{title,slug}`
  );
  const personalSeries = await getClient().fetch(
    `*[_type == "series" && category=="personal"]{title,slug}`
  );
  const daysSeries = await getClient().fetch(
    `*[_type == "series" && category=="daysofmylives"]{title,slug}`
  );
  const folkloricoSeries = await getClient().fetch(
    `*[_type == "series" && category=="folklorico"]{title,slug}`
  );
  return (
    <html lang="en">
      <body>
        <Navbar
          personalOptions={personalSeries}
          projectsOptions={projectsSeries}
          daysOptions={daysSeries}
          folkloricoOptions={folkloricoSeries}
        />
        {children}
      </body>
    </html>
  );
}
