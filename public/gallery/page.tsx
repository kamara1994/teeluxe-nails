import Image from "next/image";
import Header from "../../app/components/Header";

const photos = [
  "/gallery/acrylic-01.jpg",
  "/gallery/acrylic-02.jpg",
  "/gallery/gel-01.jpg",
  "/gallery/gel-02.jpg",
  "/gallery/presson-01.jpg",
  "/gallery/presson-02.jpg",
];

export default function Gallery() {
  return (
    <main className="page">
      <Header />

      <section className="section">
        <h1 className="sectionTitle">GALLERY</h1>
        <p className="sectionText">Add your best sets here. This is what makes the website look luxury.</p>

        <div className="galleryGrid">
          {photos.map((src) => (
            <div key={src} className="galleryCard">
              <Image src={src} alt="Nail style" width={900} height={900} className="galleryImg" />
            </div>
          ))}
        </div>

        <p className="smallNote" style={{ marginTop: 18 }}>
          Put your images inside <b>public/gallery/</b> and update the list in <b>app/gallery/page.tsx</b>.
        </p>
      </section>
    </main>
  );
}
