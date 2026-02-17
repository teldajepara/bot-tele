const { Markup } = require("telegraf");
const {
    findAnswer,
    findKnowledge,
} = require("../../services/knowledgeService");
const indihomeData = require("../../data/knowledge/indihome");
const indibizData = require("../../data/knowledge/indibiz");

// Helper: Send text or photo (clearing previous message if needed)
const replyWithMediaOrText = async (ctx, content, buttons, image = null) => {
    try {
        // If image is provided, delete previous message and send new photo message
        if (image) {
            await ctx.deleteMessage().catch(() => { }); // Delete previous text menu
            const media = image.startsWith("http") ? { url: image } : { source: image };
            await ctx.replyWithPhoto(
                media,
                {
                    caption: content,
                    parse_mode: "Markdown",
                    ...Markup.inlineKeyboard(buttons),
                }
            );
        } else {
            // If no image, try to edit existing message
            try {
                // Check if current message has photo, if so, delete and send text
                if (ctx.callbackQuery.message.photo) {
                    await ctx.deleteMessage();
                    throw new Error("Switching from photo to text");
                }
                await ctx.editMessageText(content, {
                    parse_mode: "Markdown",
                    ...Markup.inlineKeyboard(buttons),
                });
            } catch (err) {
                // Fallback: Send new text message (e.g. if switching from photo or edit expired)
                await ctx.reply(content, {
                    parse_mode: "Markdown",
                    ...Markup.inlineKeyboard(buttons),
                });
            }
        }
    } catch (error) {
        console.error("Error in replyWithMediaOrText:", error);
        // Ultimate fallback
        await ctx.reply(content, {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard(buttons),
        });
    }
};

// Reusable function to handle product selection (generic)
const handleProduct = async (ctx, productName) => {
    const data = findKnowledge(productName);

    if (data) {
        await ctx.answerCbQuery();
        const buttons = [[Markup.button.callback("⬅ Kembali ke Menu", "btn_back")]];
        await replyWithMediaOrText(ctx, data.answer, buttons, data.image);
    } else {
        await ctx.answerCbQuery("Data tidak ditemukan.");
    }
};

/**
 * INDIHOME HANDLERS
 */

// 1. Menu Utama IndiHome (Pengertian Umum)
const showIndihomeMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Pilihan Paket", "btn_ih_packages")],
        [Markup.button.callback("Syarat & Ketentuan", "btn_ih_terms")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    // Pass image from indihomeData (if any)
    await replyWithMediaOrText(
        ctx,
        indihomeData.answer,
        buttons,
        indihomeData.image
    );
};

// 2. Menu Pilihan Paket (Penjelasan Jenis Paket)
const showIndihomePackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [
            Markup.button.callback(
                indihomeData.packages.internet_only.name,
                "btn_ih_internet_only"
            ),
        ],
        [
            Markup.button.callback(
                indihomeData.packages.netflix.name,
                "btn_ih_netflix"
            ),
        ],
        [
            Markup.button.callback(
                indihomeData.packages.dynamic.name,
                "btn_ih_dynamic"
            ),
        ],
        [Markup.button.callback("⬅ Kembali ke IndiHome", "btn_indihome")],
    ];

    // Disini tidak pakai gambar, jadi image=null
    await replyWithMediaOrText(
        ctx,
        indihomeData.package_intro,
        buttons,
        null // null means use text-only (edit if possible)
    );
};

// 3. Menu Syarat & Ketentuan
const showIndihomeTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiHome", "btn_indihome")],
    ];

    await replyWithMediaOrText(ctx, indihomeData.terms, buttons, null);
};

// 4. Detail Paket (Daftar Harga)
const showIndihomePackageDetail = async (ctx, key) => {
    const pkg = indihomeData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Paket", "btn_ih_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

/**
 * INDIBIZ HANDLERS
 */

// 1. Menu Utama IndiBiz
const showIndibizMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Pilihan Paket", "btn_ib_packages")],
        [Markup.button.callback("Syarat & Ketentuan", "btn_ib_terms")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.answer,
        buttons,
        indibizData.image
    );
};

// 2. Menu Pilihan Paket IndiBiz
const showIndibizPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [
            Markup.button.callback(
                indibizData.packages.basic.name,
                "btn_ib_basic"
            ),
        ],
        [
            Markup.button.callback(
                indibizData.packages.business.name,
                "btn_ib_business"
            ),
        ],
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.package_intro,
        buttons,
        null
    );
};

// 3. Menu Syarat & Ketentuan IndiBiz
const showIndibizTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
    ];

    await replyWithMediaOrText(ctx, indibizData.terms, buttons, null);
};

// 4. Detail Paket IndiBiz
const showIndibizPackageDetail = async (ctx, key) => {
    const pkg = indibizData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Paket", "btn_ib_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

module.exports = (bot) => {
    // Action Handlers (Main Menu)
    bot.action("btn_indihome", (ctx) => showIndihomeMenu(ctx));
    bot.action("btn_indibiz", (ctx) => showIndibizMenu(ctx));
    bot.action("btn_pijar", (ctx) => handleProduct(ctx, "pijar"));

    // IndiHome Submenus
    bot.action("btn_ih_packages", (ctx) => showIndihomePackageTypes(ctx));
    bot.action("btn_ih_terms", (ctx) => showIndihomeTerms(ctx));

    // IndiHome Package Details
    bot.action("btn_ih_internet_only", (ctx) =>
        showIndihomePackageDetail(ctx, "internet_only")
    );
    bot.action("btn_ih_netflix", (ctx) =>
        showIndihomePackageDetail(ctx, "netflix")
    );
    bot.action("btn_ih_dynamic", (ctx) =>
        showIndihomePackageDetail(ctx, "dynamic")
    );

    // IndiBiz Submenus
    bot.action("btn_ib_packages", (ctx) => showIndibizPackageTypes(ctx));
    bot.action("btn_ib_terms", (ctx) => showIndibizTerms(ctx));

    // IndiBiz Package Details
    bot.action("btn_ib_basic", (ctx) =>
        showIndibizPackageDetail(ctx, "basic")
    );
    bot.action("btn_ib_business", (ctx) =>
        showIndibizPackageDetail(ctx, "business")
    );

    // Back Button (Main Menu)
    bot.action("btn_back", async (ctx) => {
        const buttons = [
            [Markup.button.callback("IndiHome", "btn_indihome")],
            [Markup.button.callback("IndiBiz", "btn_indibiz")],
            [Markup.button.callback("Pijar Sekolah", "btn_pijar")],
        ];
        await replyWithMediaOrText(
            ctx,
            "📦 *Silakan pilih layanan yang ingin Anda ketahui:*",
            buttons
        );
    });
};
