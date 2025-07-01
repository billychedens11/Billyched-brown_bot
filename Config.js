module.exports = {
  // 🔐 Sekirite & Twilio
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER || '+12678551962'
  },

  // 👑 Info sou mèt bot la
  owner: {
    name: '🤡Papi Brown👿NÉXOMORPH👹',
    numbers: ['50948464276', '50932920314'],
    github: 'https://github.com/billychedens11'
  },

  // 🤖 Bot Settings
  bot: {
    name: 'BILLYCHED-BROWN V5',
    version: '1.0.0',
    mode: 'private', // private | public
    sessionId: '50948464276',
    prefix: ['!', '.', '/'],
    autoReply: true,
    autoReact: false,
    autoRead: true
  },

  // 🛡️ Anti-feature Settings
  anti: {
    antiDelete: true,
    antiLink: true,
    antiLinkKick: true,
    welcome: true
  },

  // ⚙️ Menus & Plugins
  features: {
    enablePlugins: true,
    pluginCount: 306,
    categories: ['AI', 'Anime', 'Audio', 'Bible', 'Convert', 'Download', 'Fun', 'Group', 'Image', 'Logo', 'Music', 'Owner', 'Sticker', 'Search', 'System', 'Tools', 'Utility', 'Wallpaper']
  },

  // 🌐 External Links
  links: {
    githubRepo: 'https://github.com/billychedens11/Billyched-brown_bot',
    website: '',
    supportGroup: ''
  }
}
