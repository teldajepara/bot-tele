const path = require('path');

const indibiz = {
    keywords: ["indibiz", "wifi bisnis", "internet bisnis", "umkm"],
    image: path.join(__dirname, "../../assets/images/indibiz.jpg"),
    answer: `
*IndiBiz (Solusi Bisnis)*

Layanan internet & solusi digital dari Telkom Indonesia khusus untuk mendukung operasional bisnis UMKM hingga korporasi besar.

*Keunggulan IndiBiz:*
• Internet Cepat dan Stabil Tanpa FUP
• Harga Terjangkau & Pilihan Paket
• Support teknis prioritas
• Bundling solusi digital (CCTV, Kasir, CRM)
`,
    package_intro: `
*Pilihan Paket IndiBiz*

1️⃣ *Paket Basic*
Solusi internet hemat untuk usaha kecil & rintisan. Khusus untuk pelanggan Small Medium Enterprise (SME)

2️⃣ *Paket Bisnis*
Internet prioritas untuk performa bisnis makin melesat. Cocok untuk perusahaan/bisnis yang membutuhkan performa tinggi.
`,
    terms: `
*Syarat & Ketentuan IndiBiz*

1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp 150.000 dan dibayarkan di awal saat instalasi pemasangan di lokasi anda.
`,
    packages: {
        basic: {
            name: "Paket Basic",
            slug: "ib_basic",
            detail: `
*Daftar Harga Paket Basic*

• *50 Mbps:* Rp320.000/bulan
• *75 Mbps:* Rp365.000/bulan
• *100 Mbps:* Rp440.000/bulan
• *150 Mbps:* Rp540.000/bulan
• *200 Mbps:* Rp675.000/bulan
• *300 Mbps:* Rp950.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        },
        business: {
            name: "Paket Bisnis",
            slug: "ib_business",
            detail: `
*Daftar Harga Paket Bisnis*

• *50 Mbps:* Rp355.000/bulan
• *75 Mbps:* Rp415.000/bulan
• *100 Mbps:* Rp535.000/bulan
• *150 Mbps:* Rp620.000/bulan
• *200 Mbps:* Rp790.000/bulan
• *300 Mbps:* Rp1.130.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        }
    }
};

module.exports = indibiz;
