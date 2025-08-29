"use client";
import { ILANLAR } from "../../../data/ilanlar";

export default function KiralikIlanlarPage() {
  const list = ILANLAR.filter(i => i.tip === "kiralik");
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Kiralık İlanlar</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(i => (
          <div key={i.id} className="rounded-lg border p-5 bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold">{i.baslik}</h3>
            <p className="text-sm opacity-80">{i.kategori} • {i.firma} • {i.konum}</p>
            {i.fiyat && <p className="mt-2 font-semibold">{i.fiyat.toLocaleString("tr-TR")} ₺ {i.birim ? `/${i.birim}` : ""}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
