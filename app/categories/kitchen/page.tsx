import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const bedImages: (string | StaticImport)[] = [
  "/ki1.jpg",
  "/ki2.jpg",
  "/ki3.jpg",
  "/ki4.jpg",
  "/ki5.jpg",
  "/ki6.jpg",
  "/ki7.jpg",
  "/ki8.png",
  "/ki10.jpg",
  "/ki11.jpg",
  "/ki12.jpg",
  "/15 ki.jpg"
];

export default function KitchenCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Kitchen</h1>
      <p className="mb-6 text-[#5c4636]">
        Explore our range of luxury bed designs and bedroom solutions. Choose from classic, modern, or custom layouts for your dream bedroom.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bedImages.map((src, idx) => (
          <div key={typeof src === 'string' ? src : `bed-image-${idx}`} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Bed Image ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-56"
              // If images do not show, check that all files are in the /public directory and paths are correct
            />
          </div>
        ))}
      </div>
    </section>
  );
}
