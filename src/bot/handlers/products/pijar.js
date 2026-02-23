const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const pijarData = require("../../../data/knowledge/pijar");

const showPijarMenu = async (ctx) => {
    await ctx.answerCbQuery();

    const buttons = [
        [Markup.button.callback("Keunggulan Utama", "btn_pijar_keunggulan")],
        [Markup.button.callback("Tahap Implementasi", "btn_pijar_implementasi")],
        [Markup.button.callback("Jejak Sukses", "btn_pijar_sukses")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        pijarData.answer,
        buttons,
        pijarData.image
    );
};

const showPijarDetail = async (ctx, key) => {
    const text = pijarData[key];
    if (!text) return ctx.answerCbQuery("Detail tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_pijar")],
        [Markup.button.callback("Menu Awal", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, text, buttons, pijarData[`${key}_image`] || null);
};

module.exports = {
    showPijarMenu,
    showPijarDetail
};
