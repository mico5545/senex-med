import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="text-center pt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Manisa OSB için Dijital İş Birliği Platformu
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Fabrikalar arası <strong>makine & malzeme kiralama</strong>, fazla ürün <strong>satış</strong> ilanları
          ve OSB’ye dair güncel bilgiler – hepsi tek yerde.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/ilanlar" className="px-5 py-3 rounded-md bg-blue-600 text-white font-semibold">
            İlanları Gör
          </Link>
          <Link href="/fabrikalar" className="px-5 py-3 rounded-md border border-gray-300 dark:border-gray-700">
            Fabrikalara Göz At
          </Link>
        </div>
      </section>

      {/* ÖZELLİK KARTLARI */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "Makine & Malzeme Paylaşımı", d: "Kullanmadığın ekipmanı OSB içi kiraya ver." },
          { t: "Fazla Ürün Satışı", d: "Stok fazlası ya da hurda ürünlerini değerlendir." },
          { t: "Uzman & Servis Erişimi", d: "Bakım, kalibrasyon, otomasyon desteği bul." },
          { t: "OSB Bilgi Havuzu", d: "Harita, duyuru, prosedür ve dokümanlar." },
        ].map((x) => (
          <div key={x.t} className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{x.t}</h3>
            <p className="text-gray-600 dark:text-gray-300">{x.d}</p>
          </div>
        ))}
      </section>

      {/* HIZLI KISAYOLLAR */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/ilanlar" className="rounded-lg border p-5 hover:bg-white/60 dark:hover:bg-gray-800/60">
          🔎 İlan Ara / Filtrele
          <p className="text-sm opacity-70 mt-1">Kategoriye ve tipe göre bul</p>
        </Link>
        <Link href="/fabrikalar" className="rounded-lg border p-5 hover:bg-white/60 dark:hover:bg-gray-800/60">
          🏭 Fabrikalar Dizini
          <p className="text-sm opacity-70 mt-1">Sektör, yetenek, iletişim</p>
        </Link>
        <Link href="/osb" className="rounded-lg border p-5 hover:bg-white/60 dark:hover:bg-gray-800/60">
          🗺️ OSB Bilgileri
          <p className="text-sm opacity-70 mt-1">Harita, duyurular, prosedür</p>
        </Link>
      </section>
    </div>
  );
}
