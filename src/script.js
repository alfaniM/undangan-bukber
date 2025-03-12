document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgMusic');
  const openBtn = document.getElementById('openBtn');
  const confirmBtn = document.getElementById('confirmBtn'); // Tombol konfirmasi
  const musicToggle = document.getElementById('musicToggle');
  const introScreen = document.getElementById('introScreen');
  const invitation = document.getElementById('invitation');

  // Fungsi untuk autoplay musik
  function attemptAutoplay() {
    audio.volume = 0.5;
    audio.play().catch((error) => console.log('Autoplay blocked: ', error));
  }

  // Fungsi untuk memainkan musik
  function playMusic() {
    if (audio.paused) {
      audio.play().catch((error) => console.log('Playback error: ', error));
    }
  }

  // Fungsi untuk toggle musik
  function toggleMusic() {
    if (audio.paused) {
      audio.play().catch((error) => console.log('Playback error: ', error));
    } else {
      audio.pause();
    }
  }

  // Event untuk tombol "Open"
  openBtn.addEventListener('click', function () {
    gsap.to('#introScreen', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        introScreen.classList.add('d-none');
        invitation.classList.remove('d-none');
        gsap.from('#invitation', { opacity: 0, y: 50, duration: 1 });
        playMusic();
      },
    });
  });

  // Event untuk tombol konfirmasi kehadiran
  confirmBtn.addEventListener('click', function () {
    Swal.fire({
      title: 'Konfirmasi Kehadiran',
      text: 'Apakah kamu bisa hadir bukber?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Saya Bersedia 🙌',
      cancelButtonText: 'Maaf, Tidak Bisa 😢',
    }).then((result) => {
      let phone = '6281555784430'; // Nomor WhatsApp tujuan
      let message = '';

      if (result.isConfirmed) {
        message = '"Alfani ganteng manisku! Aku tentu aja datang, siap buka puasa bareng sambil menikmati senyum manismu! 🌸💕✨';
      } else {
        message = 'Maafkan aku, Tuan Ganteng Alfani! Aku berhalangan, tapi nanti kita gantinya hari lain ya? 😘✨';
      }

      let waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(waLink, '_blank');
    });
  });

  // Event untuk tombol musik
  musicToggle.addEventListener('click', toggleMusic);

  // Autoplay musik saat halaman dimuat
  attemptAutoplay();

  // Efek Particles.js untuk background
  // Efek Particles.js untuk background dengan ikon love
  particlesJS('particles-js', {
    particles: {
      number: { value: 40 },
      shape: {
        type: 'image',
        image: {
          src: 'https://cdn-icons-png.flaticon.com/512/833/833472.png', // Ganti dengan ikon love
          width: 100,
          height: 100,
        },
      },
      size: { value: 20 },
      move: { speed: 2, direction: 'bottom', out_mode: 'out' },
    },
  });
});
