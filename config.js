global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." // command prefix
global.ownNumb = "6281346214917" // bot owner // owner name
global.ownName = "FRMNZZ STORE" // isi nama kalian
global.ownSc = `FrmnzzHost` //ini gausah di ubah

// GLOBAL MESS - Gausah Di apa²in Tar Eror
global.mess = {
     delay: '4000', // Set Jeda Atur Di sini 1000 = 1 detik
     owner: 'Maaf\n*Cuman Owner yang bisa🥲*',
     group: "khusus di dalam group",
     inf: "-"
}
// BATAS GLOBAL MESS
global.thumb = require('fs').readFileSync("./image/thumb.png")
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

// BASE SCRIPT BY Luky-Botz
// NO ENC BISA BUY 
// NO RECONNECT
// TX TO Alpha05 
// MODULE BAILEYS WHISKEY

// OWNER
// wa.me/6281272768139