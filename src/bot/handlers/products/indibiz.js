const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const path = require("path");
const indibizData = require("../../../data/knowledge/indibiz");
const db = require("../../../db/database");
const showIndibizMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(indibizData.packages.basic.name, "btn_ib_basic")],
        [Markup.button.callback(indibizData.packages.business.name, "btn_ib_business")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.answer,
        buttons,
        indibizData.image
    );
};

const showIndibizPackageDetail = async (ctx, key) => {
    const pkg = indibizData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();

    let detailText = pkg.detail;
    let imageData = pkg.image;

    if (key === 'basic') {
        const dbData = await db.getContent('indibiz_paket_basic');
        if (dbData) {
            detailText = dbData.text || detailText;
            if (dbData.image_path) imageData = path.join(__dirname, '../../../public' + dbData.image_path);
        }
    } else if (key === 'business') {
        const dbData = await db.getContent('indibiz_paket_bisnis');
        if (dbData) {
            detailText = dbData.text || detailText;
            if (dbData.image_path) imageData = path.join(__dirname, '../../../public' + dbData.image_path);
        }
    }

    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_indibiz")],
        [Markup.button.callback("Menu Awal", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, detailText, buttons, imageData);
};

module.exports = {
    showIndibizMenu,
    showIndibizPackageDetail
};
