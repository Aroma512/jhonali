import Image from 'next/image';

const launchImages = [
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

export default function LaunchCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Launch</h1>
      <p className="mb-6 text-[#5c4636]">
        Elegant launch and living room woodwork, including TV units, wall panels, and decorative shelving. Designed for comfort and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {launchImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Launch Image ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-56"
            />
          </div>
        ))}
      </div>
      {/* Location Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-[#3e2c23] mb-2 flex items-center justify-center gap-2">
          <span role="img" aria-label="location">📍</span>
          Our Location
        </h2>
        <p className="text-[#5c4636]">
          UAE AL Alain AL saniya Bengali Masjid
        </p>
      </div>
    </section>
  );
}