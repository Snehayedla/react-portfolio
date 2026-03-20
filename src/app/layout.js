import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Sneha Yedla | Java Full Stack Developer",
  description:
    "Portfolio of Sneha Yedla — Java Full Stack Developer with expertise in Spring Boot, React.js, Next.js, and Data Science. Open to full-time opportunities.",
  keywords: [
    "Java Full Stack Developer",
    "Spring Boot",
    "React.js",
    "Next.js",
    "Sneha Yedla",
    "Portfolio",
    "Hyderabad",
  ],
  authors: [{ name: "Sneha Yedla" }],
  openGraph: {
    title: "Sneha Yedla | Java Full Stack Developer",
    description:
      "Portfolio of Sneha Yedla — Java Full Stack Developer specializing in Spring Boot, React.js, and Data Science.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#0a0a0f] text-white`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
