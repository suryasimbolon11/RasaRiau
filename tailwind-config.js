// ===== tailwind-config.js : pengaturan tema Tailwind =====
// Mendaftarkan palet Melayu (leaf = hijau tua, gold = kuning emas, cream = krem) dan font serif (display & body).

tailwind.config = {
  theme: {
    extend: {
      colors: {
        leaf: '#0F3D2E',   // hijau tua
        gold: '#F2B705',   // kuning emas
        cream: '#FFF8E7'   // krem
      },
      fontFamily: {
        display: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
        body: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif']
      }
    }
  }
}
