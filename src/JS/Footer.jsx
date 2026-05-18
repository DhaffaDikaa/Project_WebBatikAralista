import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* CONTAINER */}
      <div className="footer-container">
        {/* ================= LEFT ================= */}
        <div className="footer-left">
          {/* TITLE */}
          <div className="footer-title">
            <h2>Temukan keindahan budaya</h2>
            <span>dalam setiap helai batik Aralista!</span>
          </div>

          {/* MENU GROUP */}
          <div className="footer-menu-group">
            {/* MENU 1 */}
            <div className="footer-menu">
              <h3>Jelajahi</h3>
              <a href="index.html">Beranda</a>
              <a href="katalog.html">Katalog</a>
              <a href="edukasi.html">Edukasi</a>
              <a href="profil.html">Profil Usaha</a>
              <a href="kontak.html">Kontak</a>
            </div>

            {/* MENU 2 */}
            <div className="footer-menu2">
              <h3>Layanan Pelanggan</h3>
              <a href="#">Pengembalian dan Penukaran</a>
              <a href="#">Pelacakan Pesanan</a>
              <a href="#">Panduan Ukuran</a>
              <a href="#">Instruksi Perawatan Produk</a>
            </div>

            {/* MENU 3 */}
            <div className="footer-menu3">
              <h3>Alamat</h3>
              <p>
                Jl. Sumber Maron,<br />
                Karangsuko, Pagelaran,<br />
                Malang, Jawa Timur,<br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        {/* Pembungkus ini otomatis mengambil aturan .footer-right dari style.css 
            yang memberikan ruang koordinat agar backdrop-filter di bawahnya aktif */}
        <div className="footer-right">
          {/* TITLE */}
          <h3 className="footer-contact-title">Hubungi Kami</h3>

          {/* FORM */}
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            {/* EMAIL & KIRIM BUTTON */}
            <div className="input-email">
              <input type="email" placeholder="Masukkan Email" required />
              <button type="submit">Kirim</button>
            </div>

            {/* TEXTAREA */}
            <textarea placeholder="Ceritakan kesan & pesan untuk Aralista!"></textarea>
          </form>

          {/* SOCIAL */}
          <div className="footer-social">
            <h3>Ikuti Kami</h3>
            <div className="social-links">
              {/* INSTAGRAM */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
                <span>aralista_batik</span>
              </a>

              {/* PHONE */}
              <a href="tel:+6285755022686" className="phone-link">
                <i className="fas fa-phone"></i>
                <span>+62 857-5502-2686</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LINE ================= */}
      <div className="footer-line"></div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <p>© 2026 Aralista. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="footer-bottom-links">
          <a href="#">Privasi</a>
          <a href="#">Syarat dan Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;