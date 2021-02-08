let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @itz.dapaa
➥ YouTube:
https://youtube.com/channel/UCkj2-38IrIoyFcoUwMzZ93g


╠═〘 DONASI 〙 ═
╠➥ Tsel: 0822-7966-2097
╠➥ DANA: 0822-7966-2097
╠➥ Gopay: 0822-7966-2097
║>Request? Wa.me/62857-5877-9973
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

