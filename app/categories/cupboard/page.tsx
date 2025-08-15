import Image from 'next/image';

// Removed duplicate "cup 2" images
const cupboardImages = [
  "/images/cup 2.png",
  // Removed "/images/cup 2.jpg" which was causing the duplicate
  "/images/cup 4.png",
  "/images/cup1.png",
  "/images/cup3.jpg",
  "/images/cup5.jpg", 
  "/images/cup6.jpg",
  "/images/cup7.jpg",
  "/images/cup8.jpg",
  "/images/cup9.jpg",
  "/images/cup10.jpg",
  "/images/cup11.jpg",
  "/images/cup12.jpg"
];

export default function CupboardCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Cupboard</h1>
      <p className="mb-6 text-[#5c4636]">
        Stylish and functional cupboard designs for your home. Our custom cupboards combine elegant aesthetics with practical storage solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cupboardImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Cupboard Design ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-56"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
