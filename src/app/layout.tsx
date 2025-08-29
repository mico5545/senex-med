import "./globals.css";
import Nav from "@/components/Nav"; // Nav bileşenini ayrı components/Nav.tsx dosyasında saklıyoruz

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* NAVBAR */}
        <Nav />

        {/* SAYFA İÇERİĞİ */}
        <main className="container mx-auto px-4 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-200 dark:bg-gray-800 mt-16">
          <div className="container mx-auto px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Senex Med • Manisa OSB Dijital Platformu</p>
            <p className="opacity-70">Fabrikalar arası kiralama • Satış • İş birliği</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
