const { Markup } = require("telegraf");

// Helper: Send text or photo (clearing previous message if needed)
const replyWithMediaOrText = async (ctx, content, buttons, image = null) => {
    try {
        const isPhotoMessage = ctx.callbackQuery?.message?.photo;

        if (image) {
            const media = image.startsWith("http") ? { url: image } : { source: image };

            // If the previous message was a photo, we can EDIT it directly (Smooth Transition!)
            if (isPhotoMessage) {
                await ctx.editMessageMedia(
                    {
                        type: 'photo',
                        media: media,
                        caption: content,
                        parse_mode: "Markdown"
                    },
                    Markup.inlineKeyboard(buttons)
                );
            } else {
                // If switching from text to photo, we must send a new photo message
                // Deleting first then sending is cleaner but loses "transition" feel
                await ctx.replyWithPhoto(
                    media,
                    {
                        caption: content,
                        parse_mode: "Markdown",
                        ...Markup.inlineKeyboard(buttons),
                    }
                );
                await ctx.deleteMessage().catch(() => { });
            }
        } else {
            // If the target is TEXT-only
            if (isPhotoMessage) {
                // Moving from Photo -> Text
                // Telegram DOES NOT support editing a Photo message into a Text message directly.
                // We MUST delete and send new text.
                await ctx.deleteMessage();
                await ctx.reply(content, {
                    parse_mode: "Markdown",
                    disable_web_page_preview: true,
                    ...Markup.inlineKeyboard(buttons),
                });
            } else {
                // Text -> Text (Smooth Edit)
                await ctx.editMessageText(content, {
                    parse_mode: "Markdown",
                    disable_web_page_preview: true,
                    ...Markup.inlineKeyboard(buttons),
                });
            }
        }
    } catch (error) {
        console.error("Error in replyWithMediaOrText:", error);
        // Ultimate fallback if editing fails (e.g. message too old)
        try {
            await ctx.reply(content, {
                parse_mode: "Markdown",
                disable_web_page_preview: true,
                ...Markup.inlineKeyboard(buttons),
            });
        } catch (e) {
            console.error("Fallback failed", e);
        }
    }
};

module.exports = {
    replyWithMediaOrText,
};
