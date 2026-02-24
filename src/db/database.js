const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../bot.db');
const db = new sqlite3.Database(dbPath);

const defaultContents = [
    {
        key: 'eazy_cam_pricing',
        title: 'Eazy Cam Pricing',
        text: `*Harga Perangkat Eazy Cam*

• *EazyCam IP Camera Indoor:* ± Rp 448.400
• *EazyCam Duolink (Indoor + LAN Port):* ± Rp 435.000
• *EazyCam Outdoor PRO:* ± Rp 815.000
• *T3 Smart IP Camera Indoor:* ± Rp 385.440

*Paket HSI Bisnis + Eazy Cam*

Solusi internet bisnis sekaligus pemantauan keamanan:
• *Bundling Eazy 50 Mbps:* ± Rp 422.000 / bulan
• *Bundling Eazy 100 Mbps:* ± Rp 535.000 / bulan

_Harga dapat berubah sewaktu-waktu sesuai promo._

*Informasi Tambahan & Berlangganan*

1. Harga yang tertera belum termasuk PPN 11%.
2. Pembelian unit baru umumnya sudah termasuk gratis 1 bulan Cloud Recording.
3. Layanan Cloud bersifat perpanjangan otomatis.`
    },
    {
        key: 'eazy_cam_cloud_pricing',
        title: 'Eazy Cam Cloud Pricing',
        text: `*Voucher Cloud Recording*

Basic
• *7 Hari 1 Bulan* ± Rp 45.510
• *7 Hari 3 Bulan* ± Rp 137.307 
• *7 Hari 6 Bulan* ± Rp 273.615 
• *7 Hari 12 Bulan* ± Rp 545.898 

Plus
• *14 Hari 1 Bulan* ± Rp 64.380
• *14 Hari 3 Bulan* ± Rp 193.140 
• *14 Hari 6 Bulan* ± Rp 386.280 
• *14 Hari 12 Bulan* ± Rp 772.560 

Protect Plus
• *30 Hari 1 Bulan* ± Rp 106.560
• *30 Hari 3 Bulan* ± Rp 319.125 
• *30 Hari 6 Bulan* ± Rp 627.150 
• *30 Hari 12 Bulan* ± Rp 1.270.950 

_Harga dapat berubah sewaktu-waktu sesuai promo._`
    },
    {
        key: 'indibiz_paket_basic',
        title: 'IndiBiz Paket Basic',
        text: `*Daftar Harga Paket Basic*

• *50 Mbps:* Rp 320.000/bulan
• *75 Mbps:* Rp 365.000/bulan
• *100 Mbps:* Rp 440.000/bulan
• *150 Mbps:* Rp 540.000/bulan
• *200 Mbps:* Rp 675.000/bulan
• *300 Mbps:* Rp 950.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp 150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.`
    },
    {
        key: 'indibiz_paket_bisnis',
        title: 'IndiBiz Paket Bisnis',
        text: `*Daftar Harga Paket Bisnis*

• *50 Mbps:* Rp 355.000/bulan
• *75 Mbps:* Rp 415.000/bulan
• *100 Mbps:* Rp 535.000/bulan
• *150 Mbps:* Rp 620.000/bulan
• *200 Mbps:* Rp 790.000/bulan
• *300 Mbps:* Rp 1.130.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp 150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.`
    },
    {
        key: 'oca_interaction_lite',
        title: 'OCA Interaction Lite Pricing',
        text: `*Harga Paket Bundling IndiBiz x OCA Interaction Lite*

• *50 Mbps:* Rp 492.950/bulan
• *75 Mbps:* Rp 582.950/bulan
• *100 Mbps:* Rp 692.950/bulan
• *150 Mbps:* Rp 902.950/bulan

_Add-on OCA Interaction Lite Rp 108.000. Melalui order di SC-ONE dan My Indibiz._
_Biaya Pasang Baru (PSB) untuk Layanan Indibiz add-on sebesar Rp 0._

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, atau myIndibiz.
4. Komponen paket tidak dapat diorder terpisah (ala carte), hanya berlaku dalam penawaran bundling.`
    },
    {
        key: 'oca_blast_lite',
        title: 'OCA Blast Lite Pricing',
        text: `*Harga Paket Bundling IndiBiz x OCA Blast Lite*

HSI Bisnis (HSIE)
• *50 Mbps:* Rp 668.900/bulan
• *75 Mbps:* Rp 746.900/bulan
• *100 Mbps:* Rp 891.900/bulan
• *150 Mbps:* Rp 1.036.900/bulan
• *200 Mbps:* Rp 1.261.900/bulan
• *300 Mbps:* Rp 1.708.900/bulan

HSI Bisnis Basic (HSIEF)
• *50 Mbps:* Rp 623.900/bulan 
• *75 Mbps:* Rp 676.900/bulan 
• *100 Mbps:* Rp 781.900/bulan 
• *150 Mbps:* Rp 916.900/bulan 
• *200 Mbps:* Rp 1.094.900/bulan 
• *300 Mbps:* Rp 1.470.900/bulan 

_Add-on OCA Blast Lite Rp 263.000. Melalui order di SC-ONE and My Indibiz._

*Fitur Basic (Sudah Termasuk):*
50 Kuota & 5 Template (WhatsApp, SMS, Email), 1 Contact Group, dan 50MB Storage.

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, atau myIndibiz.
4. Komponen paket tidak dapat diorder terpisah (ala carte), hanya berlaku dalam penawaran bundling.`
    },
    {
        key: 'oca_breaker',
        title: 'OCA Breaker Pricing',
        text: `*Harga Layanan OCA Breaker*

• *Add-on Indibiz:* Rp 35.000 /bulan
• *OCA Dashboard:* Rp 50.000 /email/bulan
  _(Harga termasuk pajak: Rp 55.500 /bulan)_

*Mekanisme Layanan:*
1. Pengecekan pertama H+1 setelah aktivasi, hasil dikirim melalui email.
2. Pengecekan rutin dilakukan selama masa berlangganan.
3. Notifikasi kebocoran baru dikirim via Email (30 hari pertama) dan WhatsApp (seterusnya).`
    }
];

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contents (
        key TEXT PRIMARY KEY,
        title TEXT,
        text TEXT,
        image_path TEXT
    )`);

    db.get("SELECT COUNT(*) AS count FROM contents", (err, row) => {
        if (err) return console.error(err);
        if (row.count === 0) {
            const stmt = db.prepare("INSERT INTO contents (key, title, text) VALUES (?, ?, ?)");
            for (let i = 0; i < defaultContents.length; i++) {
                stmt.run(defaultContents[i].key, defaultContents[i].title, defaultContents[i].text);
            }
            stmt.finalize();
            console.log("Database initialized with default values.");
        }
    });
});

const getContent = (key) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT text, image_path FROM contents WHERE key = ?', [key], (err, row) => {
            if (err) reject(err);
            resolve(row ? row : null);
        });
    });
};

const setContent = (key, text, title) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE contents SET text = ?, title = ? WHERE key = ?', [text, title, key], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

const setImage = (key, imagePath) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE contents SET image_path = ? WHERE key = ?', [imagePath, key], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

const getAllContents = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM contents', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const closeDatabase = () => {
    return new Promise((resolve, reject) => {
        db.close((err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = {
    db,
    getContent,
    setContent,
    setImage,
    getAllContents,
    closeDatabase
};
