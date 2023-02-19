const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

module.exports = {
  ai_teams:{
    chat_bot_pm : false,
    chat_bot_group : false,
    bgm_bot : false,
    auto_reaction : false,
    pm_block: false,
    call_block: true
   },
  profile: {
    ownerName: "DarkWinzo",
    ownerNumb: "94766541056",
    botName: "Queen-MD",
    OWNER_NUMBER: "DarkWinzo",
    OWNER_NAME: "DarkWinzo",
    PREFIX: "."
    },
  reply: {
    notFound: "This Command not created. it was creating",
    success: "Done ✓",
    admin: "This Feature Is Only For Admin!",
    botAdmin: "Bot Must Be Admin First!",
    owner: "This Feature Is Only For Owner!",
    group: "Feature Used Only For Groups!",
    private: "Features Used Only For Private Chat!",
    bot: "This Feature Is Only For Bot",
    wait: "In process...",
    linkm: "Where is the link?",
    error: "Error!!",
    endLimit: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
    ban: "You have been banned by the owner, if you want to be unbanned, chat owner.",
    nsfw: "The nsfw feature has not been activated, please contact the admin to activate",
    banChat: "The bot was banned in this group, please contact the owner to unban",
  },
  setting: {
    langCode: 'EN', // only 2 laguages |:- SI || EN
    blockchat: [], // Your Jid
  },
};
