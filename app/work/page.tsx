'use client';
import Image from 'next/image';
import { useState } from 'react';

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

const bedImages = [
  '/images/bed2.jpg',
  '/images/bed3.jpg',
  '/images/bed4.jpg',
  '/images/bed5.jpg',
  '/images/bed6.jpg',
  '/images/bed7.jpg',
  '/images/bed8.jpg',
  '/images/bed9.png',
  '/images/bed10.jpg',
  '/images/bed11.jpg',
  '/images/bed13.jpg',
  '/images/beddd.jpg',
  '/images/bed_custom1.jpg',
  '/images/bed_custom2.jpg',
  '/images/bed_custom3.jpg',
  '/images/bed_custom4.jpg',
  '/images/bed_custom5.jpg',
  '/images/bed_custom6.jpg',
  '/images/bed_custom7.jpg',
  // Add cupboard images here
  '/images/cup 2.png',
  '/images/cup4.png',
  '/images/cup1.png',
  '/images/cup3.jpg',
  '/images/cup5.png',
  '/images/cup6.jpg',
  '/images/cup7.jpg',
  '/images/cup8.jpg',
  '/images/cup9.jpg',
  '/images/cup10.jpg',
  '/images/cup11.jpg',
  '/images/cup12.jpg',
  '/images/cupboard1.jpg',
  // Add TV images here
  '/images/tv 8.jpg',
  '/images/tv1.jpg',
  '/images/tv2.jpg',
  '/images/tv3.jpg',
  '/images/tv4.jpg',
  '/images/tv5.jpg',
  '/images/tv6.jpg',
  '/images/tv7.jpg',
  '/images/tv8.jpg',
  '/images/tv9.jpg',
  '/images/tv10.jpg',
  '/images/tv11.jpg',
  '/images/tv13.jpg',
  '/images/tv15.png',
  '/beds/bed1.jpg',
  '/beds/bed3.jpg',
  '/beds/bed4.jpg',
  '/beds/bed5.jpg',
  '/beds/bed6.jpg',
  '/beds/bed7.jpg',
  '/beds/bed8.jpg',
  '/beds/bed9.jpg',
  '/beds/bed10.jpg',
  '/beds/bed11.jpg',
  '/beds/bed12.jpg',
  '/images/ki1.jpg',
  '/images/ki2.jpg',
  '/images/ki3.jpg',
  '/images/ki4.jpg',
  '/images/ki5.jpg',
  '/images/ki6.jpg',
  '/images/ki7.jpg',
  '/images/ki8.png',
  '/images/ki10.jpg',
  '/images/ki11.jpg',
  '/images/ki12.jpg',
  '/images/kitchen1.jpg',
  '/images/cupboard2.jpg',
  '/images/bed 12.jpg', // newly added image
];

// If you have other work images, add them here as well:
const otherWorkImages = Array.from({ length: 50 }, (_, i) => `/work/work${i + 1}.jpg`);

const images = [
  ...bedImages,
  ...salonImages,
  ...otherWorkImages,
].filter(Boolean); // Remove any blank/empty image paths

export default function WorkPage() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-8 text-center">Our Work</h1>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <button
            key={src + idx}
            className="focus:outline-none"
            onClick={() => setModalImg(src)}
            style={{ display: src ? undefined : 'none' }}
          >
            <Image
              src={src}
              alt={`Work ${idx + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-56"
              onError={e => (e.currentTarget.parentElement!.style.display = 'none')}
            />
          </button>
        ))}
      </div>
      {modalImg && (
        <div className="lightbox-overlay" onClick={() => setModalImg(null)}>
          <div className="relative">
            <Image src={modalImg} alt="Work Large" width={900} height={700} className="rounded-lg max-h-[80vh] object-contain" />
            <button
              className="absolute top-2 right-2 text-3xl text-white bg-black/50 rounded-full px-3 py-1"
              onClick={() => setModalImg(null)}
              aria-label="Close"
            >×</button>
          </div>
        </div>
      )}
    </div>
  );
}
