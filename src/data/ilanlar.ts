export type Ilan = {
  id: string;
  baslik: string;
  tip: "kiralik" | "satis";
  kategori: string;
  fiyat?: number; // opsiyonel
  birim?: string; // ör: "gün", "adet", "ton"
  firma: string;
  konum: string; // OSB kısmı
};

export const ILANLAR: Ilan[] = [
  {
    id: "I001",
    baslik: "CNC Torna (Fanuc) – Saatlik Kiralık",
    tip: "kiralik",
    kategori: "Makine",
    fiyat: 1200,
    birim: "saat",
    firma: "Ege Metal A.Ş.",
    konum: "Manisa OSB - 1. Kısım",
  },
  {
    id: "I002",
    baslik: "Plastik Enjeksiyon Makinesi – Günlük",
    tip: "kiralik",
    kategori: "Makine",
    fiyat: 9000,
    birim: "gün",
    firma: "ABC Plastik",
    konum: "Manisa OSB - 2. Kısım",
  },
  {
    id: "I003",
    baslik: "Stok Fazlası Çelik Sac (2mm)",
    tip: "satis",
    kategori: "Hammadde",
    fiyat: 14500,
    birim: "ton",
    firma: "Manisa Otomotiv Parça",
    konum: "Manisa OSB - 1. Kısım",
  },
  {
    id: "I004",
    baslik: "PCB Montaj Hattı – Aylık Kiralık",
    tip: "kiralik",
    kategori: "Hat/Atölye",
    fiyat: 350000,
    birim: "ay",
    firma: "Spil Elektronik",
    konum: "Manisa OSB - 4. Kısım",
  },
  {
    id: "I005",
    baslik: "Hurda Cam – Toplu Satış",
    tip: "satis",
    kategori: "Hurda",
    fiyat: 1200,
    birim: "ton",
    firma: "Mavi Cam",
    konum: "Manisa OSB - 2. Kısım",
  },
  {
    id: "I006",
    baslik: "Dikiş Makinesi Parkuru (20 adet)",
    tip: "kiralik",
    kategori: "Makine",
    fiyat: 25000,
    birim: "gün",
    firma: "Gediz Tekstil",
    konum: "Manisa OSB - 3. Kısım",
  },
  {
    id: "I007",
    baslik: "Kalıp Çeliği – Satış",
    tip: "satis",
    kategori: "Hammadde",
    fiyat: 22000,
    birim: "ton",
    firma: "Ege Metal A.Ş.",
    konum: "Manisa OSB - 1. Kısım",
  },
  {
    id: "I008",
    baslik: "Forklift – Günlük Kiralık",
    tip: "kiralik",
    kategori: "Ekipman",
    fiyat: 3500,
    birim: "gün",
    firma: "Manisa Otomotiv Parça",
    konum: "Manisa OSB - 1. Kısım",
  },
];
