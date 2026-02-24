const path = require('path');

const indibiz = {
    keywords: ["indibiz", "wifi bisnis", "internet bisnis", "umkm"],
    image: path.join(__dirname, "../../assets/images/indibiz/indibiz.jpg"),
    answer: `
*IndiBiz*

Layanan internet dari Telkom Indonesia yang dirancang khusus untuk kebutuhan bisnis dan usaha kecil menengah (UKM). Dengan IndiBiz, pelaku usaha bisa mendapatkan koneksi internet yang andal, cepat, dan stabil untuk mendukung operasional sehari-hari.

*Keunggulan IndiBiz:*
• Internet High Speed **Tanpa FUP** (Tanpa batasan kuota).
• Koneksi prioritas yang lebih stabil untuk bisnis.
• Support teknis prioritas melalui channel khusus.
• Bundling solusi digital.

*Pilihan Paket:*
1. *Paket Basic*: Solusi internet hemat tanpa FUP untuk usaha rintisan/SME.
Rasio Kecepatan 1:2 (Upload:Download)
2. *Paket Bisnis*: Internet dengan performa lebih tinggi dan stabil untuk kebutuhan operasional intensif.
Rasio Kecepatan 1:1 (Upload:Download)
`,

    packages: {
        basic: {
            name: "Paket Basic",
            slug: "ib_basic",
            image: path.join(__dirname, "../../assets/images/indibiz/basic.jpg"),
            detail: ""
        },
        business: {
            name: "Paket Bisnis",
            slug: "ib_business",
            image: path.join(__dirname, "../../assets/images/indibiz/bisnis.jpg"),
            detail: ""
        }
    }
};

module.exports = indibiz;
