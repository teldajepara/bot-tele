const path = require('path');

const netmonk = {
    keywords: [
        "netmonk",
        "netmonk prime",
        "monitoring jaringan",
        "network monitoring",
        "monitoring server",
        "web monitoring",
        "it infrastructure monitoring",
        "telkom indonesia"
    ],
    image: path.join(__dirname, "../../assets/images/netmonk/netmonk.jpg"),
    answer: `
*Netmonk*

Aplikasi monitoring infrastruktur IT terintegrasi yang memantau kesehatan jaringan, server, dan aplikasi secara real-time dalam satu dashboard untuk meningkatkan efektivitas dan efisiensi operasional bisnis Anda.

*Layanan Utama:*

1. *Netmonk Prime*
Solusi monitoring all-in-one yang komprehensif untuk jaringan (SNMP), server, dan API/Web dalam satu platform.

2. *Netmonk Hi*
Aplikasi monitoring jaringan khusus untuk layanan broadband/FTTH (High Speed Internet) Telkom dengan fitur laporan SLA otomatis.
`,

    packages: {
        prime: {
            name: "Netmonk Prime",
            slug: "netmonk_prime",
            image: path.join(__dirname, "../../assets/images/netmonk/netmonk_prime.jpg"),
            detail: `
*Netmonk Prime*

Platform monitoring komprehensif yang bersifat proactive dan preventive maintenance untuk seluruh infrastruktur IT perusahaan (Jaringan, Server, dan Web/API).

*Target:* Perusahaan atau organisasi skala kecil hingga besar yang memiliki infrastruktur IT kompleks dan membutuhkan visibilitas menyeluruh dalam satu dashboard (One tool, all purposes).
`,
            features: `
*Fitur Utama Netmonk Prime:*

• *3-in-1 Monitoring:* Pantau Jaringan, Server, dan Web/API secara terpusat dalam satu dashboard.

• *Predictive Dashboard:* Visualisasi real-time status perangkat dan analisis prediksi penggunaan resource di masa depan.

• *Proactive Alerting:* Notifikasi otomatis via WhatsApp, Telegram, dan Email saat terdeteksi anomali atau overload resource.

• *Reporting Automation:* Hasilkan laporan performa infrastruktur format PDF otomatis hanya dengan satu klik.

• *MONA (AI Assistant):* Asisten interaktif untuk rangkuman aktivitas, analisis insiden, dan rekomendasi solusi cepat.

• *Web/API Analysis:* Pantau response time dan uptime secara mendalam untuk menjaga kualitas layanan digital.

• *User Management:* Kendali hak akses pengguna yang fleksibel untuk keamanan operasional monitoring.
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
`
        }
    }
};

module.exports = netmonk;