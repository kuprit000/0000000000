let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0822-7966-2097
│ • DANA: 0822-7966-2097
│ • Gopay: 0822-7966-2097
│ • -: 08--
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/62857-5877-9973
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
