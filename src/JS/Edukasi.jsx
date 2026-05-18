import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";
import "../CSS/Edukasi.css";

const Edukasi = () => {
  const navigate = useNavigate(); 

  const wawasanData = {
    sejarah: {
      title: "Sejarah Batik",
      slides: [
        {
          imgSrc: "/Image/K11.png",
          alt: "Sejarah Batik - Halaman 1",
        },
        {
          imgSrc: "/Image/K12.png",
          alt: "Sejarah Batik - Halaman 2",
        },
        {
          imgSrc: "/Image/K13.png",
          alt: "Sejarah Batik - Halaman 3",
        },
        {
          imgSrc: "/Image/K14.png",
          alt: "Sejarah Batik - Halaman 4",
        }
      ]
    },
    perawatan: {
      title: "Perawatan Kain Batik",
      slides: [
        {
          imgSrc: "/Image/K21.png",
          alt: "Perawatan Batik - Halaman 1",
        },
        {
          imgSrc: "/Image/K22.png",
          alt: "Perawatan Batik - Halaman 2",
        },
        {
          imgSrc: "/Image/K23.png",
          alt: "Perawatan Batik - Halaman 3",
        },
        {
          imgSrc: "/Image/K24.png",
          alt: "Perawatan Batik - Halaman 4",
        },
        {
          imgSrc: "/Image/K25.png",
          alt: "Perawatan Batik - Halaman 5",
        }
      ]
    }
  };

  const [activeCategory, setActiveCategory] = useState("sejarah");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlides = wawasanData[activeCategory].slides;

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
    setCurrentSlideIndex(0); 
  };

  const nextSlide = () => {
    if (currentSlideIndex < currentSlides.length - 1) {
      setCurrentSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="edukasi-page-wrapper">
      <Header />

      <main className="edukasi-main-content">
        
        {/* ================= SECTION 1: SUDUT WAWASAN ================= */}
        <section className="wawasan-hero-container">
          <div className="wawasan-header">
            <h1>Sudut Wawasan</h1>
          </div>

          <div className="komik-section-header">
            <h2>Komik Aralista</h2>
          </div>

          <div className="wawasan-flex-layout">
            
            {/* Sidebar Kiri */}
            <div className="wawasan-sidebar-menu">
              <div 
                className={`menu-item-card ${activeCategory === "sejarah" ? "active" : ""}`}
                onClick={() => handleCategoryChange("sejarah")}
              >
                <div className="thumb-wrapper">
                  <img src="/Image/SideK1.png" alt="Sejarah Batik" />
                </div>
                <span>Sejarah Batik</span>
              </div>
              
              <div 
                className={`menu-item-card ${activeCategory === "perawatan" ? "active" : ""}`}
                onClick={() => handleCategoryChange("perawatan")}
              >
                <div className="thumb-wrapper">
                  <img src="/Image/SideK2.png" alt="Perawatan Kain Batik" />
                </div>
                <span>Perawatan Kain Batik</span>
              </div>
            </div>

            {/* Viewport Slider Kanan */}
            <div className="wawasan-slider-viewport">
              <img 
                src={currentSlides[currentSlideIndex].imgSrc} 
                alt={currentSlides[currentSlideIndex]?.alt} 
                className="slider-img-main" 
              />
              
              {currentSlideIndex > 0 && (
                <button className="nav-arrow left" onClick={prevSlide}>&#10094;</button>
              )}
              
              {currentSlideIndex < currentSlides.length - 1 && (
                <button className="nav-arrow right" onClick={nextSlide}>&#10095;</button>
              )}
              
              <div className="slide-counter-badge">
                {currentSlideIndex + 1} / {currentSlides.length}
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: AREA ARTIKEL ================= */}
        <section className="artikel-section-wrapper">
          <div className="artikel-title-header">
            <h2>Artikel</h2>
          </div>

          <div className="artikel-flex-grid">
            
            {/* KARTU ARTIKEL 1 */}
            <div className="artikel-card-modular">
              <div className="card-header-title">
                <h3>Batik Garudeya: Sejarah dan Makna Dibalik Motif</h3>
              </div>
              <div className="card-visual-wrapper">
                <div className="visual-img-container">
                  <img src="/Image/Artikel1.png" alt="Batik Garudeya" />
                </div>
              </div>
              <div className="card-body-desc">
                <p>Yuk kenali lebih jauh Batik Garudeya yang diluncurkan pada tahun 2023.</p>
                <div className="card-footer-action">
                  <span className="artikel-date">15 Mei 2026</span>
                  {/* Diarahkan menuju /artikel/1 */}
                  <button 
                    className="read-article-btn"
                    onClick={() => navigate("/artikel/1")}
                  >
                    Baca Artikel
                  </button>
                </div>
              </div>
            </div>

            {/* KARTU ARTIKEL 2 */}
            <div className="artikel-card-modular">
              <div className="card-header-title">
                <h3>Batik Tugu Malang: Sejarah dan Makna Dibalik Motif</h3>
              </div>
              <div className="card-visual-wrapper">
                <div className="visual-img-container">
                  <img src="/Image/Artikel2.png" alt="Batik Tugu Malang" />
                </div>
              </div>
              <div className="card-body-desc">
                <p>Yuk kenali lebih jauh terkait sejarah dan makna dibalik Batik Tugu Malang yang iconic.</p>
                <div className="card-footer-action">
                  <span className="artikel-date">10 Mei 2026</span>
                  {/* Diarahkan menuju /artikel/2 */}
                  <button 
                    className="read-article-btn"
                    onClick={() => navigate("/artikel/2")}
                  >
                    Baca Artikel
                  </button>
                </div>
              </div>
            </div>

            {/* KARTU ARTIKEL 3 */}
            <div className="artikel-card-modular">
              <div className="card-header-title">
                <h3>Perusahaan Mekar Sari Memperoleh Sertifikat ...</h3>
              </div>
              <div className="card-visual-wrapper">
                <div className="visual-img-container">
                  <img src="/Image/Sertifikat.png" alt="Sertifikat Mekar Sari" />
                </div>
              </div>
              <div className="card-body-desc">
                <p>Perusahaan Mekar Sari memperoleh sertifikat dari Kementrian Industri.</p>
                <div className="card-footer-action">
                  <span className="artikel-date">02 Mei 2026</span>
                  {/* Diarahkan menuju /artikel/3 */}
                  <button 
                    className="read-article-btn"
                    onClick={() => navigate("/artikel/3")}
                  >
                    Baca Artikel
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bottom-pembatas-section">
          <div className="pembatas-ornament-bg"></div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Edukasi;