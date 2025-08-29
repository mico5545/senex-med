"use client";

import { useMemo, useState, ChangeEvent } from "react";
import { ILANLAR } from "../../data/ilanlar";

export default function IlanlarPage() {
  const [q, setQ] = useState("");
  const [tip, setTip] = useState<"" | "kiralik" | "satis">("");
  const [kat, setKat] = useState("");

  const kategoriler = useMemo(
    () => Array.from(new Set(ILANLAR.map((i) => i.kategori))),
    []
  );

  const list = useMemo(() => {
    return ILANLAR.filter((i) => {
      const okQ = !q || i.baslik.toLowerCase().includes(q.toLowerCase());
      const okTip = !tip || i.tip === tip;
      const okKat = !kat || i.kategori === kat;
      return okQ && okTip && okKat;
    });
  }, [q, tip, kat]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">İlanlar</h1>

      {/* FİLTRELER */}
      <div className="grid sm:grid-cols-4 gap-3">
        <input
          placeholder="Ara: CNC, forklift, sac..."
          className="border rounded px-3 py-2 bg-white dark:bg-gray-800"
          value={q}
         onChange={(e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}

        />
        <select
          className="border rounded px-3 py-2 bg-white dark:bg-gray-800"
          value={tip}
         onChange={(e: ChangeEvent<HTMLSelectElement>) =>
           setTip(e.target.value as "" | "kiralik" | "satis")
         }

        >
          <option value="">Tüm Tipler</option>
          <option value="kiralik">Kiralık</option>
          <option value="satis">Satış</option>
        </select>
        <select
          className="border rounded px-3 py-2 bg-white dark:bg-gray-800"
          value={kat}
         onChange={(e: ChangeEvent<HTMLSelectElement>) => setKat(e.target.value)}

        >
          <option value="">Tüm Kategoriler</option>
          {kategoriler.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
        <button
          onClick={() => { setQ(""); setTip(""); setKat(""); }}
          className="border rounded px-3 py-2 hover:bg-white/60 dark:hover:bg-gray-800/60"
        >
          Sıfırla
        </button>
      </div>

      {/* LİSTE */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((i) => (
          <div key={i.id} className="rounded-lg border p-5 bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold">{i.baslik}</h3>
            <p className="text-sm opacity-80">{i.tip === "kiralik" ? "Kiralık" : "Satış"} • {i.kategori}</p>
            <p className="mt-1 text-sm opacity-80">{i.firma} • {i.konum}</p>
            {i.fiyat && (
              <p className="mt-2 font-semibold">
                {i.fiyat.toLocaleString("tr-TR")} ₺ {i.birim ? `/${i.birim}` : ""}
              </p>
            )}
            <button className="mt-3 px-3 py-2 rounded border hover:bg-white/60 dark:hover:bg-gray-700/60 text-sm">
              Detay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
