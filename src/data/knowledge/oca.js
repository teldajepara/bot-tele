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
`,
            pricing: `
*Estimasi Harga Netmonk Prime:*

• Mulai dari *Rp 156.000 / bulan* (tergantung jumlah perangkat/node)
`
        },
        hi: {
            name: "Netmonk Hi",
            slug: "netmonk_hi",
            image: path.join(__dirname, "../../assets/images/netmonk/netmonk_hi.jpg"),
            detail: `
*Netmonk Hi*

Produk unggulan Netmonk berupa aplikasi monitoring jaringan untuk mendeteksi status hidup/mati dan performa SLA pada layanan HSI (High Speed Internet) Telkom. Dirancang sebagai solusi atas tantangan pemantauan layanan yang kompleks dan tidak efisien.

*Target:* Pengguna layanan broadband/FTTH Telkom yang membutuhkan dokumen pelaporan pertanggungjawaban belanja IT.
`,
            features: `
*Fitur Modul Netmonk Hi:*

• *Seamless Login:* Masuk aplikasi dengan mudah dan aman menggunakan metode One-Time Password (OTP) via Email atau WhatsApp tanpa kredensial tambahan.

• *Dashboard Real-time:* Menampilkan chart status internet (Online, Offline, Unknown), total nomor internet yang dipantau, dan detail pembaruan data terakhir.

• *Internet Status View:* Grafik historis status internet dan nilai SLA (availability) yang dapat disesuaikan berdasarkan periode waktu tertentu.

• *Internet Quality:* Grafik historis kualitas internet (Excellent & Fair) dengan indikator visual untuk mendeteksi kualitas sinyal yang lemah.

• *Reporting Availability:* Download laporan otomatis format Excel untuk SLA Jam Kerja (active hours) dan SLA Harian (all hours).

• *Traffic & Bandwidth:* Grafik historis penggunaan data (download & upload) untuk membantu analisis performa jaringan dan pengambilan keputusan.

• *Proactive Reporting:* Laporan ringkasan bulanan otomatis melalui WhatsApp yang mencakup jumlah nomor internet dan persentase ketersediaan.

• *Alerting:* Notifikasi otomatis via Telegram Group atau Email jika perangkat terdeteksi mati atau kembali hidup.
`,
            pricing: `
*Manfaat Fitur Netmonk HI Bagi User:*

1. *Status Availability:* Bukti penggunaan sebagai bahan evaluasi atau audit.
2. *Traffic & Bandwidth:* Analisis penggunaan dan okupansi bandwidth pada jam tertentu.
3. *Internet Quality:* Menjaga kualitas internet tetap dalam kondisi 'Excellent'.
4. *Reporting:* Mempercepat pembuatan laporan berbasis Excel.
5. *Alert Notification:* Mempercepat penanganan kendala jaringan.

*Harga:* Umumnya tersedia sebagai *add-on* atau *bundling* paket Indibiz. Hubungi sales untuk detail harga spesifik.
`
        }
    }
};

module.exports = netmonk;