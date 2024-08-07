import { Inter, Geologica } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
  title: "Zomato Clone",
  description: "For Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.className} ${geologica.className}`}>{children}</body>
    </html>
  );
}
