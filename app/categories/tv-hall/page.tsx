import Image from 'next/image';

export default function TVHallCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">TV Hall</h1>
      <p className="mb-6 text-[#5c4636]">
        Elegant TV hall and living room woodwork, including TV units, wall panels, and decorative shelving. Designed for comfort and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Image src="/categories/launch1.jpg" alt="TV Hall 1" width={500} height={350} className="rounded-lg object-cover" />
        <Image src="/categories/launch2.jpg" alt="TV Hall 2" width={500} height={350} className="rounded-lg object-cover" />
      </div>
    </section>
  );
}