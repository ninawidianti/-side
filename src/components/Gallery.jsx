import React, { useState } from "react";
import gallery1 from "../assets/Gallery1.jpg";
import gallery2 from "../assets/Gallery2.jpg";
// import gallery3 from "../assets/Gallery3.jpg";
// import gallery4 from "../assets/Gallery4.jpg";
// import gallery5 from "../assets/Gallery5.jpg";
import gallery6 from "../assets/Gallery6.jpg";
import gallery7 from "../assets/Gallery7.jpg";
import gallery8 from "../assets/Gallery8.jpg";
import gallery9 from "../assets/Gallery9.jpg";

const photos = [
  {
    src: gallery6,
    alt: "Gallery 1",
    date: "14 Desember 2024",
    location: "Silokek",
    story:
      "So I took this pic at the Bat Cave, Silokek Geopark, Sijunjung. Didn’t get to see the bats tho, they usually show up later in the afternoon. The main reason I came here was for a project actually — but hey, it turned out pretty cool, right?",
  },
  {
    src: gallery7,
    alt: "Gallery 1",
    date: "14 Desember 2024",
    location: "Silokek",
    story:
      "",
  },
  {
    src: gallery8,
    alt: "Gallery 1",
    date: "14 Desember 2024",
    location: "Silokek",
    story:
      "",
  },
  {
    src: gallery9,
    alt: "Gallery 1",
    date: "03 Oktober 2025",
    location: "Jalan",
    story:
      "",
  },
  {
    src: gallery1,
    alt: "Gallery 1",
    date: "03 Oktober 2025",
    location: "Danau Diatas",
    story:
      "",
  },
  {
    src: gallery2,
    alt: "Gallery 2",
    date: "03 Oktober 2025",
    location: "Alahan Panjang",
    story:
      "",
  },
  // {
  //   src: "/photos/gallery3.jpg",
  //   alt: "Gallery 3",
  //   date: "9 Juli 2024",
  //   location: "Danau Singkarak",
  //   story:
  //     "Air yang tenang, memantulkan gunung dengan sempurna. Setiap klik terasa seperti mencuri waktu dari keindahan yang diam.",
  // },
  // {
  //   src: "/photos/gallery4.jpg",
  //   alt: "Gallery 4",
  //   date: "20 Agustus 2024",
  //   location: "Lembah Harau",
  //   story:
  //     "Di balik tebing tinggi dan pepohonan rimbun, sinar matahari menembus lembut — seperti mengingatkan bahwa keindahan sering tersembunyi di tempat sunyi.",
  // },
  // {
  //   src: "/photos/gallery5.jpg",
  //   alt: "Gallery 5",
  //   date: "20 Agustus 2024",
  //   location: "Lembah Harau",
  //   story:
  //     "Di balik tebing tinggi dan pepohonan rimbun, sinar matahari menembus lembut — seperti mengingatkan bahwa keindahan sering tersembunyi di tempat sunyi.",
  // },
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery side</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelected(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="gallery-info">
              <h3>{photo.date}</h3>
              <p>{photo.location}</p>
              <span>{photo.story.slice(0, 60)}...</span>
            </div>
          </div>
        ))}
      </div>

      {/* === Popup Modal === */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
            <div className="modal-text">
              <h3>{selected.date}</h3>
              <p className="loc">{selected.location}</p>
              <p>{selected.story}</p>
            </div>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
