import Image from 'next/image';


export default function BedsCategory() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-4">Beds</h1>
      <p className="mb-6 text-[#5c4636]">
        Modern beds with custom headboards, storage, and luxury finishes. We blend comfort and style for your bedroom sanctuary.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Removed Bed 1 and Bed 2 images */}
        {/* Bed 3 and onward */}
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed2.jpg"
            alt="Bed 3"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed3.jpg"
            alt="Bed 4"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed4.jpg"
            alt="Bed 5"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed5.jpg"
            alt="Bed 6"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed6.jpg"
            alt="Bed 7"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed7.jpg"
            alt="Bed 8"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed8.jpg"
            alt="Bed 9"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed9.png"
            alt="Bed 10"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed10.jpg"
            alt="Bed 11"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed11.jpg"
            alt="Bed 12"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/bed13.jpg"
            alt="Bed 13"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
        <div className="rounded-lg overflow-hidden w-full" style={{height: 300, maxWidth: 400, margin: '0 auto'}}>
          <Image
            src="/images/beddd.jpg"
            alt="Bed"
            width={400}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
      </div>
    </section>
  );
}
