const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const eazyData = require("../../../data/knowledge/eazy");

const showEazyMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Harga", "btn_eazy_pricing")],
        [Markup.button.callback("Voucher Cloud Recording", "btn_eazy_cloud")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.answer,
        buttons,
        eazyData.image
    );
};

const showEazyPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.pricing,
        buttons,
        eazyData.image
    );
};


const showEazyCloudPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.cloud_pricing,
        buttons,
        eazyData.image
    );
};

module.exports = {
    showEazyMenu,
    showEazyPricing,
    showEazyCloudPricing
};
