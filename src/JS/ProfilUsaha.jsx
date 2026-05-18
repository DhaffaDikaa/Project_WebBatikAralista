import React from 'react';
import '../CSS/style.css';        
import '../CSS/ProfilUsaha.css';  
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const ProfilUsaha = () => {
  return (
    <div className="profil-page-wrapper">
      {/* Komponen Header Global */}
      <Header />

      {/* ================= HERO BANNER (Menggunakan Tag IMG) ================= */}
      <div className="top-batik-banner-container">
        <img 
          src="/Image/BGPU1.png" 
          alt="Batik Pattern Hero Banner" 
          className="top-batik-img"
        />
      </div>

      {/* ================= SECTION: TENTANG ARALISTA ================= */}
      <section className="tentang-aralista-section">
        <div className="tentang-grid-container">
          
          {/* 1. KOLOM KIRI: JUDUL */}
          <div className="tentang-left-title">
            <h2>Tentang Aralista</h2>
          </div>

          {/* 2. KOLOM TENGAH: GARIS PEMISAH */}
          <div className="vertical-divider-container">
            <img 
              src="/Image/pembatas.png" 
              alt="Garis Pembatas Batik" 
              className="vertical-divider-img" 
            />
          </div>

          {/* 3. KOLOM KANAN: CARD DESKRIPSI KREM */}
          <div className="tentang-right-card">
            <p>
              Aralista merupakan UMKM Batik lokal yang berdiri pada tahun 2018. 
              Aralista menghadirkan perpaduan budaya tradisional dengan sentuhan 
              modern melalui koleksi kain berkualitas, elegan, dan nyaman digunakan 
              dalam berbagai gaya masa kini. Aralista menuangkan luapan emosi serta 
              pikiran pada kain yang kami produksi sehingga dapat memberikan kain 
              yang berkualitas untuk Anda.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION: PENGHARGAAN ================= */}
      <section className="penghargaan-section">
        <div className="penghargaan-container">
          <div className="penghargaan-text-side">
            <h2>Penghargaan</h2>
            <p>
              Batik Aralista yang diproduksi oleh Perusahaan Mekar Sejati memperoleh 
              sertifikat pada tahun 2022 sebagai perusahaan yang memproduksi dan 
              memperdagangkan batik tulis secara konsisten.
            </p>
            <button 
              className="btn-pelajari-lanjut"
              onClick={() => {
                document.getElementById('target-proses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className="penghargaan-img-side">
            <img src="/Image/Sertifikat.png" alt="Sertifikat Penghargaan Aralista" />
          </div>
        </div>
      </section>

      {/* ================= SECTION: SERTIFIKASI ICONS ================= */}
      <section className="sertifikasi-icons-section">
        <div className="icons-container">
          <div className="icon-item">
            <img src="/Image/Halal.png" alt="Halal Indonesia" />
            <p>Halal</p>
          </div>
          <div className="icon-item">
            <img src="/Image/Lokal.png" alt="Karya UMKM Lokal" />
            <p>Karya UMKM Lokal</p>
          </div>
          <div className="icon-item">
            <img src="/Image/Fleksibel.png" alt="Halal" />
            <p>Elegan dan Fleksibel</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION: PROSES DIBALIK BATIK ================= */}
      <section id="target-proses" className="proses-batik-section">
        <div className="proses-header">
          <h2>Proses Dibalik Batik Aralista</h2>
          <p>Bagaimana kami menghasilkan batik yang terbaik untuk Anda</p>
        </div>
        
        <div className="proses-cards-grid">
          <div className="proses-card">
            <div className="proses-img-wrapper">
              <img src="/Image/gifA.gif" alt="Proses Ngecap" />
            </div>
            <h3>Ngecap</h3>
            <p>Pemberian pola batik menggunakan stempel perunggu yang berisi lelehan malam.</p>
          </div>

          <div className="proses-card">
            <div className="proses-img-wrapper">
              <img src="/Image/gifB.gif" alt="Proses Nyolet" />
            </div>
            <h3>Nyolet</h3>
            <p>Memberi warna pola batik dengan menggunakan kuas.</p>
          </div>

          <div className="proses-card">
            <div className="proses-img-wrapper">
              <img src="/Image/gifC.gif" alt="Proses Nyelup" />
            </div>
            <h3>Nyelup</h3>
            <p>Perendaman tekstil batik dalam larutan pewarna.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION: GREEN PASTURE DIVIDER ================= */}
      <section className="green-grass-divider">
        <img src="/Image/rumput.png" alt="Grass Landscape Divider" className="grass-img" />
      </section>

      {/* Komponen Footer Global */}
      <Footer />
    </div>
  );
};

export default ProfilUsaha;