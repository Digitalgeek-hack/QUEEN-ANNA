let handler = async (m, { conn, text, usedPrefix, command }) => {
  //To get sender's name
   let name = m.pushName || conn.getName(m.sender);
  
  // Define the content
  let mainImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Main image URL
  let smallImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Small image URL
  let smallText = "I'M Alive Now"; // Small text
  let mainText = "𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰"; // Main text
  let audioUrl = "https://github.com/toge012345/QUEEN-ANNA/blob/main/Assets/ALIVE.mp3"; // Audio URL
  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`, // Replace with the desired display name
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  };

  let doc = {
    audio: {
      url: audioUrl
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰",
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: smallText,
        body: mainText,
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://github.com/toge012345/QUEEN-ANNA',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  // Send the message
  await conn.sendMessage(m.chat, doc, { quoted: con });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
