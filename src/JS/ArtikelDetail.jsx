import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../CSS/ArtikelDetail.css';

const ArtikelDetail = () => {
  const { id } = useParams();
  const artikelId = id || "1";

  const dataArtikel = {
    "1": {
      kategori: "Budaya & Sejarah",
      judul: "Batik Garudeya: Menelusuri Jejak Arsitektur Candi Kidal Menjadi Ranah Estetika Warisan Baru Malang",
      penulis: "Redaksi Jurnal Budaya Aralista",
      tanggal: "18 Mei 2026",
      views: "2,840 Dilihat",
      gambar: "/Image/Artikel1.png",
      caption: "Foto: Dokumentasi pengembangan relief Garudeya dari struktur Candi Kidal ke guratan malam kain tradisional.",
      isi: (
        <>
          <p className="lead-paragraph">
            Ranah industri kreatif tekstil nusantara kembali diguncang oleh lahirnya sebuah mahakarya ornamen kontemporer yang sarat akan nilai historis monumental. Resmi diperkenalkan sebagai ikon supremasi kebudayaan baru pada medio 2023, Batik Garudeya berhasil memikat perhatian para kolektor dan sosiolog budaya nasional. Motif ini tidak lahir dari ruang hampa; ia merupakan hasil ekstraksi visual dari keagungan relief fabel purba yang terpahat pada kaki Candi Kidal, sebuah situs suci peninggalan era kejayaan Kerajaan Singasari yang terletak di Kabupaten Malang.
          </p>
          <p>
            Secara anatomis, perwujudan Garudeya dalam sehelai kain digambarkan memiliki struktur tubuh manusia namun bermahkotakan kepala burung elang yang gagah berani, lengkap dengan bentangan sayap kokoh, juntaian ekor, serta cakar yang mencengkeram kuat. Dalam esensi mitologi Hindu kuno, Garudeya dikisahkan sebagai kendaraan sakral (wahana) Dewa Wisnu yang melambangkan pengorbanan tanpa batas, keteguhan prinsip, dan keberanian absolut saat berjuang membebaskan sang ibu dari belenggu perbudakan keji. Manifestasi filosofis inilah yang kemudian diangkat ke atas lembaran katun dan sutra, menjadikannya sebuah simbol pembebasan spiritual dan kekuatan jiwa bagi siapa saja yang mengenakannya.
          </p>
          <p>
            Aktor intelektual di balik lahirnya goresan estetis ini adalah Sumiarsih, seorang maestro pengrajin batik otentik asal Kecamatan Tumpang, Kabupaten Malang. Dalam wawancara eksklusif, ia mengungkapkan bahwa proses perancangan visual ini tidak sekadar mengandalkan intuisi seni individual semata, melainkan melalui jalinan riset kolaboratif yang melibatkan kajian akademis mendalam dari Fakultas Ilmu Budaya Universitas Brawijaya. Melalui fasilitasi intensif oleh Badan Penelitian dan Pengembangan Daerah (Balitbang) Kabupaten Malang, setiap proporsi sayap dan guratan paruh burung disesuaikan secara presisi demi menjaga otentisitas historis kuno agar tidak melenceng dari pakem artefak aslinya.
          </p>
          <p>
            Perjuangan administratif selama hampir dua tahun akhirnya membuahkan hasil manis ketika Batik Garudeya secara resmi memperoleh hak paten dari Direktorat Jenderal Kekayaan Intelektual pada akhir tahun 2023. Langkah hukum ini menjadi batas penanda krusial yang menegaskan kekayaan komunal Malang agar terhindar dari klaim sepihak. Momentum kelulusan paten ini disambut agresif oleh Ketua Dekranasda Kabupaten Malang, Hj. Anis Zaida Sanusi, yang langsung mengonsolidasikan seluruh elemen birokrasi dan pelaku usaha kecil untuk menjadikan karya agung ini sebagai ujung tombak kebangkitan ekonomi kreatif pasca-pandemi di wilayah administrasi Jawa Timur.
          </p>
          <p>
            Dampak sosial dari peluncuran ini segera bergaung kencang kala peragaan busana teatrikal digelar megah di Pendapa Agung Kabupaten Malang pada akhir November lalu. Sebanyak 12 variasi sub-motif Garudeya dipamerkan ke hadapan publik, memperlihatkan fleksibilitas rancang busana yang menawan, mulai dari potongan kemeja formal berstruktur tegas untuk pria hingga paduan rok asimetris hitam berhias tumpal Garudeya yang anggun untuk wanita. Eksperimen visual ini mematahkan stigma kuno bahwa batik bermotif candi cenderung kaku, sekaligus membuktikan bahwa nilai-nilai purbakala mampu bertransformasi menjadi tren gaya hidup metropolitan modern yang dinamis.
          </p>
          <p>
            Menatap proyeksi masa depan, pemerintah daerah bersama jaringan Aralista telah menyusun rencana strategis berskala makro untuk mengintegrasikan motif ini ke dalam roda ekonomi massal. Dengan potensi serapan pasar yang melibatkan lebih dari 300 pengrajin lokal tersebar di puluhan kecamatan, Batik Garudeya kini diwajibkan menjadi seragam identitas resmi bagi sekitar 18 ribu Aparatur Sipil Negara (ASN) serta jajaran murid sekolah di seluruh kabupaten. Tidak berhenti di situ, komoditas ini tengah dipersiapkan sebagai cinderamata diplomatik utama bagi delegasi internasional, mengukuhkan posisi Malang bukan hanya sebagai destinasi wisata alam, melainkan sebagai episentrum inovasi tekstil berbasis sejarah di era globalisasi.
          </p>
        </>
      ),
      tags: ["Batik Garudeya", "Candi Kidal", "Inovasi Budaya", "Malang Kreatif"]
    },
    "2": {
      kategori: "Budaya & Tradisi",
      judul: "Batik Tugu Malang: Menjaga Memori Sejarah Kota Melalui Simbolisme Kebanggaan Rakyat Bumi Arema",
      penulis: "Tim Jurnalis Aralista Edukasi",
      tanggal: "10 Mei 2026",
      views: "3,120 Dilihat",
      gambar: "/Image/Artikel2.png",
      caption: "Foto: Mahakarya Batik Tugu Malang dengan sapuan warna soga alam yang berani dan pola arsitektur ikonis.",
      isi: (
        <>
          <p className="lead-paragraph">
            Batik Tugu Malang merupakan bagian dari tradisi Batik Malangan yang dikenal dengan warna cerah, motif besar, dan karakter visual berani. Motif ini terinspirasi dari Tugu Malang, monumen bersejarah yang menjadi simbol perjuangan dan persatuan masyarakat kota. Dengan mengabadikan ikon kota dalam bentuk batik, masyarakat Malang menegaskan identitas lokal yang kuat.
          </p>
          <p>
            Selain Tugu, Batik Malangan juga sering mengangkat simbol lain seperti singa, bunga teratai, topeng Malang, dan arca Candi Singosari. Keseluruhan motif ini dikenal sebagai Malang Kucecwara, yang telah dipatenkan sebagai warisan budaya. Filosofinya mencakup semangat pantang menyerah, kejayaan, kesuburan, dan introspeksi diri. Batik Tugu Malang menjadi salah satu representasi paling populer karena langsung menghubungkan masyarakat dengan ikon kota.
          </p>
          <p>
            Keunikan Batik Tugu Malang terletak pada detail ornamen yang menyerupai arsitektur tugu. Garis-garis geometris dan sulur tanaman yang mengelilinginya melambangkan kehidupan yang terus tumbuh di sekitar pusat kota. Dengan demikian, batik ini bukan sekadar kain, melainkan narasi visual tentang dinamika masyarakat Malang yang terus berkembang.
          </p>
          <p>
            Dari perspektif sosial, Batik Tugu Malang memperkuat rasa kebersamaan. Kehadirannya dalam acara resmi maupun keseharian menunjukkan bahwa batik mampu menjadi jembatan antara tradisi dan modernitas. Generasi muda pun semakin tertarik mengenakan batik karena merasa terhubung dengan cerita di balik motifnya.
          </p>
          <p>
            Secara ekonomi, Batik Tugu Malang membuka peluang bagi pengrajin lokal untuk memperluas pasar. Dengan promosi yang tepat, motif ini berpotensi menjadi produk unggulan daerah yang mampu bersaing di tingkat nasional. Dukungan pemerintah daerah terhadap pengrajin batik juga menjadi faktor penting dalam menjaga keberlanjutan produksi.
          </p>
          <p>
            Batik Tugu Malang adalah bukti nyata bahwa setiap daerah memiliki cerita unik yang layak diabadikan. Dengan mengangkat ikon kota sebagai motif batik, Malang berhasil menegaskan posisinya sebagai pusat budaya yang tidak hanya melestarikan tradisi, tetapi juga menciptakan identitas baru yang relevan di era modern.
          </p>
        </>
      ),
      tags: ["Batik Malangan", "Tugu Malang", "Malang Kucecwara", "Warisan Budaya"]
    },
    "3": {
      kategori: "Info Industri",
      judul: "Langkah Strategis Perusahaan Mekar Sari: Sukses Mengantongi Sertifikasi TKDN Kementerian Perindustrian",
      penulis: "Redaksi Bisnis & Industri Aralista",
      tanggal: "02 Mei 2026",
      views: "1,740 Dilihat",
      gambar: "/Image/Sertifikat.png",
      caption: "Foto: Dokumen legalitas penjaminan mutu industri komponen dalam negeri untuk memperkuat daya saing pasar tekstil nasional.",
      isi: (
        <>
          <p className="lead-paragraph">
            Sebagai perusahaan yang berakar pada industri kreatif lokal, kami di Mekar Sari merasa bangga atas pencapaian terbaru berupa sertifikat resmi dari Kementerian Perindustrian. Sertifikat ini terkait dengan Tingkat Komponen Dalam Negeri (TKDN), yang menjadi bukti nyata bahwa produk kami memenuhi standar penggunaan komponen lokal dalam setiap proses produksi. Bagi kami, pencapaian ini bukan sekadar dokumen administratif, melainkan pengakuan atas komitmen yang telah lama kami jalankan.
          </p>
          <p>
            Kami percaya bahwa TKDN adalah instrumen penting dalam kebijakan industri nasional. With sertifikat ini, Mekar Sari menunjukkan dukungan penuh terhadap program pemerintah untuk meningkatkan daya saing produk lokal sekaligus mengurangi ketergantungan pada impor. Sertifikat ini memperkuat posisi kami sebagai perusahaan yang tidak hanya berorientasi pada keuntungan, tetapi juga pada kontribusi nyata bagi pembangunan ekonomi bangsa.
          </p>
          <p>
            Pencapaian ini juga berdampak langsung pada hubungan kami dengan konsumen dan mitra bisnis. Produk bersertifikat TKDN lebih mudah masuk dalam pengadaan barang/jasa pemerintah, sehingga membuka peluang pasar yang lebih luas. Hal ini menjadi keuntungan strategis bagi kami dalam memperluas jangkauan bisnis, sekaligus memberikan jaminan mutu yang diakui secara nasional kepada pelanggan.
          </p>
          <p>
            Namun, bagi kami sertifikat ini bukanlah titik akhir. Justru menjadi dorongan untuk terus berinovasi. Kami berkomitmen menghadirkan produk yang tidak hanya berkualitas tinggi, tetapi juga ramah lingkungan. Langkah ini sejalan dengan tren global yang menekankan pentingnya keberlanjutan dalam industri kreatif. Kami ingin memastikan bahwa setiap produk Mekar Sari tidak hanya memenuhi kebutuhan konsumen, tetapi juga menjaga kelestarian lingkungan.
          </p>
          <p>
            Keberhasilan ini kami harapkan dapat menjadi inspirasi bagi pelaku usaha lain. Dengan fokus pada inovasi dan kualitas, kami percaya perusahaan lokal mampu bersaing di pasar internasional. Sertifikat TKDN yang kami raih adalah simbol komitmen terhadap kualitas, keberlanjutan, dan keberpihakan pada produk dalam negeri.
          </p>
          <p>
            Secara keseluruhan, pencapaian ini menegaskan bahwa industri lokal memiliki potensi besar untuk berkembang. Dengan dukungan regulasi pemerintah dan komitmen perusahaan terhadap kualitas, kami yakin produk Indonesia dapat bersaing di pasar global tanpa kehilangan identitas lokalnya. Bagi Mekar Sari, sertifikat ini adalah langkah maju menuju masa depan yang lebih berdaya saing, berkelanjutan, dan membanggakan.
          </p>
        </>
      ),
      tags: ["Sertifikasi TKDN", "Kementerian Perindustrian", "Mutu Tekstil", "Mitra Mekar Sari"]
    }
  };

  // Mengambil item data artikel berdasarkan parameter URL, jika tidak ada fallback ke artikel nomor "1"
  const artikel = dataArtikel[artikelId] || dataArtikel["1"];

  return (
    <div className="artikel-detail-wrapper">
      {/* Global Navigation Header Component */}
      <Header />

      {/* Main Content Area */}
      <main className="artikel-detail-main">
        <div className="artikel-container-box">
          
          {/* Back Navigation Button */}
          <div className="back-navigation">
            <Link to="/edukasi" className="back-link">
              <i className="fas fa-arrow-left"></i> Kembali ke Edukasi
            </Link>
          </div>

          {/* Article Header Metadata */}
          <header className="artikel-header-section">
            <span className="artikel-category-tag">{artikel.kategori}</span>
            <h1 className="artikel-main-title">{artikel.judul}</h1>
            
            <div className="artikel-meta-info">
              <div className="meta-author">
                <i className="fas fa-user-circle"></i>
                <span>Oleh: {artikel.penulis}</span>
              </div>
              <div className="meta-divider">•</div>
              <div className="meta-date">
                <i className="far fa-calendar-alt"></i>
                <span>{artikel.tanggal}</span>
              </div>
              <div className="meta-divider">•</div>
              <div className="meta-views">
                <i className="far fa-eye"></i>
                <span>{artikel.views}</span>
              </div>
            </div>
          </header>

          {/* Featured Image Block */}
          <div className="artikel-featured-image-wrapper">
            <img 
              src={artikel.gambar} 
              alt={artikel.judul} 
              className="artikel-main-img"
            />
            <figcaption className="img-caption">{artikel.caption}</figcaption>
          </div>

          {/* Dynamic Render Article Body */}
          <article className="artikel-content-body">
            {artikel.isi}
          </article>

          {/* Article Footer Interface, Tags & Social Media Share */}
          <footer className="artikel-footer-tags">
            <div className="tags-container">
              <span className="tag-label">Tags:</span>
              {artikel.tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
              ))}
            </div>

            <div className="share-buttons">
                {/* Bagikan ke Facebook */}
                <button 
                    onClick={() => {
                    window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, 
                        '_blank', 
                        'noopener,noreferrer,width=600,height=400'
                    );
                    }} 
                    className="share-btn fb"
                    style={{ border: 'none', cursor: 'pointer' }}
                    title="Bagikan ke Facebook"
                >
                    <i className="fab fa-facebook-f"></i>
                </button>

                {/* Bagikan ke X / Twitter */}
                <button 
                    onClick={() => {
                    window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(artikel.judul)}`, 
                        '_blank', 
                        'noopener,noreferrer,width=600,height=400'
                    );
                    }} 
                    className="share-btn tw"
                    style={{ border: 'none', cursor: 'pointer' }}
                    title="Bagikan ke X"
                >
                    <i className="fab fa-twitter"></i>
                </button>

                {/* Bagikan ke WhatsApp */}
                <button 
                    onClick={() => {
                    window.open(
                        `https://api.whatsapp.com/send?text=${encodeURIComponent(artikel.judul + ' ' + window.location.href)}`, 
                        '_blank', 
                        'noopener,noreferrer,width=600,height=400'
                    );
                    }} 
                    className="share-btn wa"
                    style={{ border: 'none', cursor: 'pointer' }}
                    title="Bagikan ke WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i>
                </button>

                {/* Salin Tautan ke Clipboard */}
                <button 
                    onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Tautan artikel berhasil disalin!");
                    }} 
                    className="share-btn ln"
                    style={{ border: 'none', cursor: 'pointer' }}
                    title="Salin Tautan"
                >
                    <i className="fas fa-link"></i>
                </button>
            </div>
          </footer>

        </div>
      </main>

      {/* Global Footer Component */}
      <Footer />
    </div>
  );
};

export default ArtikelDetail;