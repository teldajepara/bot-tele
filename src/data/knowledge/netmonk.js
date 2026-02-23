const path = require('path');

const netmonk = {
    keywords: [
        "netmonk",
        "netmonk prime",
        "netmonk hi",
        "monitoring jaringan",
        "network monitoring",
        "monitoring server",
        "web monitoring",
        "hsi telkom",
        "monitoring ftth"
    ],
    image: path.join(__dirname, "../../assets/images/netmonk/netmonk.jpg"),
    answer: `
*Netmonk*

Aplikasi monitoring infrastruktur IT terintegrasi yang memantau kesehatan jaringan, server, dan aplikasi secara real-time dalam satu dashboard untuk meningkatkan efektivitas dan efisiensi operasional bisnis Anda.

*Layanan Utama:*

1. *Netmonk Prime*
Solusi monitoring all-in-one untuk jaringan (SNMP), server, dan API/Web dalam satu platform.

2. *Netmonk Hi*
Aplikasi monitoring jaringan untuk mendeteksi status hidup/mati dan laporan performa SLA dari layanan broadband/FTTH (High Speed Internet) Telkom.
`,

    package_intro: `
*Produk Utama Netmonk*

Berikut adalah varian produk monitoring dari Netmonk:
`,
    terms: `
*Informasi Harga & Berlangganan Netmonk*

Harga Netmonk menggunakan skema berlangganan (subscription) berdasarkan jumlah perangkat/node yang dimonitor. Tersedia uji coba gratis (Free Trial) selama 14 hari.
`,
    packages: {
        prime: {
            name: "Netmonk Prime",
            slug: "netmonk_prime",
            image: path.join(__dirname, "../../assets/images/netmonk/netmonk_prime.jpg"),
            detail: `
*Netmonk Prime*

Platform monitoring komprehensif untuk infrastruktur IT perusahaan.
`,
            features: `
*Manfaat & Fitur Netmonk Prime:*

• Monitoring Router, Switch, & Server (CPU, RAM, Storage)
• Monitoring ketersediaan Website/API
• Notifikasi via WhatsApp, Telegram, & Email
• Laporan PDF otomatis sekali klik
`
        },
        hi: {
            name: "Netmonk Hi",
            slug: "netmonk_hi",
            image: path.join(__dirname, "../../assets/images/netmonk/netmonk_hi.jpg"),
            detail: `
*Netmonk Hi*

Aplikasi monitoring jaringan untuk mendeteksi status hidup/mati dan performa SLA pada layanan HSI (High Speed Internet) Telkom. Dirancang sebagai solusi atas tantangan pemantauan layanan yang kompleks dan tidak efisien.

*Target:* Pengguna layanan broadband/FTTH Telkom yang membutuhkan dokumen pelaporan pertanggungjawaban belanja IT.
`,
            features: `
*Fitur Utama Netmonk Hi:*

• *Seamless Login:* Akses instan dan aman menggunakan OTP via WhatsApp atau Email.

• *Real-time Dashboard:* Pantau status (Online, Offline, Unknown) dan total perangkat secara terpusat.

• *Historical Monitoring:* Grafik riwayat status, kualitas sinyal (Excellent/Fair), dan penggunaan bandwidth.

• *SLA Reporting:* Unduh laporan availability otomatis (Excel) untuk jam kerja maupun harian.

• *Proactive Reporting:* Ringkasan performa bulanan otomatis yang dikirim langsung ke WhatsApp.

• *Instant Alerting:* Notifikasi otomatis via Telegram atau Email saat terjadi kendala jaringan.
`,
        }
    }
};

module.exports = netmonk;