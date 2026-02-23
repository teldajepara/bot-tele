const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const netmonkData = require("../../../data/knowledge/netmonk");

const showNetmonkMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(netmonkData.packages.prime.name, "btn_netmonk_prime")],
        [Markup.button.callback(netmonkData.packages.hi.name, "btn_netmonk_hi")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        netmonkData.answer,
        buttons,
        netmonkData.image
    );
};

const showNetmonkPackageDetail = async (ctx, key) => {
    const pkg = netmonkData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [];
    if (pkg.features) {
        buttons.push([Markup.button.callback(`Detail Fitur`, `btn_netmonk_feat_${key}`)]);
    }
    buttons.push(
        [Markup.button.callback("⬅ Kembali", "btn_netmonk")]
    );
    await replyWithMediaOrText(ctx, pkg.detail, buttons, pkg.image || null);
};

const showNetmonkPackageFeatures = async (ctx, key) => {
    const pkg = netmonkData.packages[key];
    if (!pkg || !pkg.features) return ctx.answerCbQuery("Fitur tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", `btn_netmonk_${key}`)],
        [Markup.button.callback("Kembali ke Netmonk", "btn_netmonk")],
    ];
    await replyWithMediaOrText(ctx, pkg.features, buttons, pkg.image || null);
};



module.exports = {
    showNetmonkMenu,
    showNetmonkPackageDetail,
    showNetmonkPackageFeatures
};
