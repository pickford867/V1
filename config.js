/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'BF39D349845E',
}

// Other
global.owner = ['6283806211924','6285722156367']
global.premium = ['6283806211924]
global.packname = 'Hisoka Morrow'
global.author = 'PICK FORD'
global.sessionName = 'session'
global.prefa = ['/','!','.','#',',','_']
global.sp = '⭔'
global.mess = {
    success: 'Anjay berhasil:V',
    admin: ' Awokwokwowk Bukan Admin :V...Fitur Khusus Admin Group!',
    botAdmin: 'Ngotak Lah babi Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Lu Siapa Gua Ajg? Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Lu Bukan Bot Babi... Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading Tod...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
