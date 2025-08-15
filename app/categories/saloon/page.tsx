import Image from 'next/image';

const salonImages = [
  '/salon1.jpg',    // 1
  '/salon3.jpg',    // 2
  '/salon4.jpg',    // 3
  '/salon5.jpg',    // 4
  '/salon6.jpg',    // 5
  '/salon7.jpg',    // 6
  '/salon8.jpg',    // 7
  '/salon9.jpg',    // 8
  '/salon10.jpg',   // 9
  '/salon11.jpg',   // 10
  '/salon12.jpg',   // 11
  '/salon14.jpg',   // 12
];

export default function SalonCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Salon</h1>
      <p className="mb-6 text-[#5c4636]">
        Premium salon interiors with custom woodwork for reception, styling stations, and waiting areas. Impress your clients with a modern, inviting space.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {salonImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Salon Image ${idx + 1}`}
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
