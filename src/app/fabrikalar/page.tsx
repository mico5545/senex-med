"use client";

import React, { useMemo, useState, useEffect } from "react";
import { FABRIKALAR } from "../../../data/fabrikalar";


export default function FabrikalarPage(): JSX.Element {
  const [q, setQ] = useState("");
  const [sektor, setSektor] = useState("");

  // URL'den ?sektor= parametresini oku
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const s = url.searchParams.get("sektor");
      if (s) setSektor(s);
    }
  }, []);

  const sektorler = useMemo(
    () => Array.from(new Set(FABRIKALAR.map((f) => f.sektor))),
    []
  );

  const list = useMemo(() => {
    return FABRIKALAR.filter((f) => {
      const okQ =
        !q ||
        f.ad.toLowerCase().includes(q.toLowerCase()) ||
        f.yetenekler.join(" ").toLowerCase().includes(q.toLowerCase());
      const okSektor = !sektor || f.sektor === sektor;
      return okQ && okSektor;
    });
  }, [q, sektor]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fabrikalar</h1>

      {/* Filtreler */}
      <div className="grid sm:grid-cols-3 gap-3">
        <input
          placeholder="Ara: fabrika adı / yetenek"
          className="border rounded px-3 py-2 bg-white dark:bg-gray-800"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2 bg-white dark:bg-gray-800"
          value={sektor}
          onChange={(e) => setSektor(e.target.value)}
        >
          <option value="">Tüm Sektörler</option>
          {sektorler.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button
          onClick={() => { setQ(""); setSektor(""); }}
          className="border rounded px-3 py-2 hover:bg-white/60 dark:hover:bg-gray-800/60"
        >
          Sıfırla
        </button>
      </div>

      {/* Liste */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((f) => (
          <div key={f.id} className="rounded-lg border p-5 bg-white dark:bg-gray-800">
            <h3 className="text-lg font-semibold">{f.ad}</h3>
            <p className="text-sm opacity-80">{f.sektor} • {f.konum}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {f.yetenekler.map((y) => (
                <span key={y} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">
                  {y}
                </span>
              ))}
            </div>
            {f.iletisim && <p className="mt-2 text-sm">İletişim: {f.iletisim}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
