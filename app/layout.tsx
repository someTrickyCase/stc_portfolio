import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin", "cyrillic"],
});

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "someTrickyCase",
    description: "Personal developer portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
