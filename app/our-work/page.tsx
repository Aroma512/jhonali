import Image from 'next/image';

const launchImages = [
  "/images/tv1.jpg",
  "/images/tv2.jpg",
  "/images/tv3.jpg",
  "/images/tv4.jpg",
  "/images/tv5.jpg",
  "/images/tv6.jpg",
  "/images/tv7.jpg",
  "/images/tv9.jpg",
  "/images/tv10.jpg",
  "/images/tv11.jpg",
  "/images/tv13.jpg",
  "/images/tv15.png"
];

const cupboardImages = [
  "/images/cup 2.png",
  "/images/cup 2.jpg",
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

// Only include images that actually exist in your public/images folder.
// Remove/comment out any image paths that do not have a real image file to avoid empty spaces.
const workImages = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
  "/images/work5.jpg",
  "/images/work6.jpg",
  "/images/work7.jpg",
  "/images/work8.jpg",
  "/images/work9.jpg",
  "/images/work10.jpg",
  "/images/work11.jpg",
  "/images/ourwork1.jpg",
  "/images/ourwork2.jpg",
  "/images/ourwork3.jpg",
  "/images/ourwork4.jpg",
  "/images/ourwork5.jpg",
  "/images/ourwork6.jpg",
  "/images/ourwork7.jpg",
  "/images/ourwork8.jpg",
  "/images/ourwork9.jpg",
  "/images/ourwork10.jpg",
  "/images/ourwork11.jpg",
  "/images/ourwork12.jpg",
  "/images/ourwork13.jpg",
  "/images/ourwork14.jpg",
  "/images/ourwork15.jpg",
  "/images/ki6.jpg",
  "/images/14bed.jpg",
  "/images/bed8.jpg",
  "/images/tv 8.jpg",
  "/images/bed2.jpg" // Added bed2.jpg to the work images
  // Remove any path from this list if the image does not exist in /public/images/
];

export default function OurWork() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Our Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {launchImages
          .filter(src => !!src) // Remove any empty or undefined entries
          .map((src, idx) => (
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
        {cupboardImages
          .filter(src => !!src)
          .map((src, idx) => (
            <div key={src} className="rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Cupboard Image ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
            </div>
        ))}
        {workImages
          .filter(src => !!src)
          .map((src, idx) => (
            <div key={src} className="rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Work Image ${idx + 1}`}
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