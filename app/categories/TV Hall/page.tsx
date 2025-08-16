import Image from 'next/image';

const tvHallImages = [
  "/images/tv1.jpg",
  "/images/tv2.jpg",
  "/images/tv3.jpg",
  "/images/tv4.jpg",
  "/images/tv5.jpg",
  "/images/tv6.jpg",
  "/images/tv7.jpg",
  "/images/tv8.jpg",
  "/images/tv9.jpg",
  "/images/tv10.jpg",
  "/images/tv11.jpg",
  "/images/tv13.jpg",
  "/images/tv15.png"
];

export default function TVHallCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">TV Hall</h1>
      <p className="mb-6 text-[#5c4636]">
        Modern TV hall and living room woodwork, including TV units, wall panels, and decorative shelving. Designed for comfort and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tvHallImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`TV Hall Image ${idx + 1}`}
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
