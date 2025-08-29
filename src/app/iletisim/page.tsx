"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [ok, setOk] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOk(true); // MVP: sadece başarı mesajı göster
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">İletişim</h1>
      <p className="text-gray-600 dark:text-gray-300">
        OSB duyuruları, ilan desteği veya önerileriniz için bize yazın.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="Ad Soyad" required />
        <input type="email" className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="E-posta" required />
        <textarea rows={5} className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="Mesajınız" required />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Gönder</button>
      </form>

      {ok && (
        <div className="p-3 rounded bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
          Teşekkürler! Mesajınız alındı (MVP demo).
        </div>
      )}
    </div>
  );
}
