export type Factory = {
  id: string;
  ad: string;
  sektor: string;
  yetenekler: string[];
  konum: string;     // ilçe/OSB bilgisi
  iletisim?: string; // opsiyonel
};

export const FABRIKALAR: Factory[] = [
  {
    id: "F001",
    ad: "Ege Metal A.Ş.",
    sektor: "Metal İşleme",
    yetenekler: ["CNC torna", "Lazer kesim", "Kaynak"],
    konum: "Manisa OSB - 1. Kısım",
    iletisim: "0236 000 00 00",
  },
  {
    id: "F002",
    ad: "ABC Plastik",
    sektor: "Plastik Enjeksiyon",
    yetenekler: ["Enjeksiyon", "Kalıp üretimi"],
    konum: "Manisa OSB - 2. Kısım",
  },
  {
    id: "F003",
    ad: "Gediz Tekstil",
    sektor: "Tekstil",
    yetenekler: ["Örme", "Baskı", "Dikim"],
    konum: "Manisa OSB - 3. Kısım",
  },
  {
    id: "F004",
    ad: "Manisa Otomotiv Parça",
    sektor: "Otomotiv Yan Sanayi",
    yetenekler: ["Pres", "Montaj", "Kalite kontrol"],
    konum: "Manisa OSB - 1. Kısım",
  },
  {
    id: "F005",
    ad: "Spil Elektronik",
    sektor: "Elektronik",
    yetenekler: ["PCB montaj", "Test & doğrulama"],
    konum: "Manisa OSB - 4. Kısım",
  },
  {
    id: "F006",
    ad: "Mavi Cam",
    sektor: "Cam",
    yetenekler: ["Kesim", "Temper", "Lamine"],
    konum: "Manisa OSB - 2. Kısım",
  },
];
