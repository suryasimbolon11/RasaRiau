// ===== tailwind-config.js : pengaturan tema Tailwind =====
// Mendaftarkan warna oranye (fire) dan font serif (display & body).

tailwind.config = {
  theme: {
    extend: {
      colors: { fire: '#FF5B00' },
      fontFamily: {
        display: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
        body: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif']
      }
    }
  }
}
