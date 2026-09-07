import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "BioNexus Biotech",
  description: "BioNexus Biotech is redefining the future of health through cutting-edge science and breakthrough innovations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
