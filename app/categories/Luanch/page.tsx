import Image from 'next/image';

const tvLoungeImages = [
  "/tv1.jpg",
  "/tv2.jpg",
  "/tv3.jpg",
  "/tv4.jpg",
  "/tv5.jpg",
  "/tv6.jpg",
  "/tv7.jpg",
  "/tv9.jpg",
  "/tv10.jpg",
  "/tv11.jpg",
  "/tv13.jpg",
  "/tv15.png"
];

export default function TVLoungeCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">TV Lounge</h1>
      <p className="mb-6 text-[#5c4636]">
        Elegant TV lounge and living room woodwork, including TV units, wall panels, and decorative shelving. Designed for comfort and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tvLoungeImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`TV Lounge Image ${idx + 1}`}
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
