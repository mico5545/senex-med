export default function OsbPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Manisa OSB Bilgileri</h1>

      <section className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg border p-5 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Hakkında</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Manisa Organize Sanayi Bölgesi; farklı sanayi kollarında faaliyet gösteren yüzlerce işletmeye ev sahipliği yapan,
            Ege Bölgesi’nin önemli üretim merkezlerinden biridir. Bu sayfada genel tanıtım, duyurular ve faydalı bağlantılar yer alır.
          </p>
        </div>
        <div className="rounded-lg border p-5 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sık Başlıklar</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Ulaşım ve Lojistik Avantajları</li>
            <li>İdari Prosedürler ve Formlar</li>
            <li>Enerji, Su, Atık Yönetimi</li>
            <li>Acil Durum İletişim ve Güvenlik</li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border p-5 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Harita (Temsili)</h2>
        <div className="aspect-video w-full rounded bg-gray-200 dark:bg-gray-700 grid place-items-center">
          <span className="opacity-70">Buraya interaktif harita/iframe eklenebilir</span>
        </div>
      </section>
    </div>
  );
}
