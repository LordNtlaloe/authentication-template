import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
