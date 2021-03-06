let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0858-0254-6577
│ • DANA: 0858-0254-6577
│ • Gopay: 0858-0254-6577
│ • -: 08--
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/6285802546577
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
