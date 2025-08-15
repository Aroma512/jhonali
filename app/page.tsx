'use client';

import React from "react";

export default function Home() {
  return (
    <div>
      {/* Animation keyframes for feature icons */}
      <style>
        {`
          @keyframes float-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes float-down {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(12px); }
          }
          @keyframes float-left {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-12px); }
          }
          @keyframes float-right {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(12px); }
          }
          .animate-float-up {
            animation: float-up 2s ease-in-out infinite;
          }
          .animate-float-down {
            animation: float-down 2s ease-in-out infinite;
          }
          .animate-float-left {
            animation: float-left 2s ease-in-out infinite;
          }
          .animate-float-right {
            animation: float-right 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Hero Section with wood decor home background */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-hero-wood overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#3e2c23]/60 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fff9f2] drop-shadow-lg mb-4">
            Jhonali Carpenter <span dir="rtl" className="ml-2">نجار جون علي</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#bfa181] mb-6">
            Crafting Modern Interiors with Wood Elegance
          </h2>
          <p className="max-w-xl mx-auto text-[#fff9f2] text-base md:text-lg mb-8">
            Transform your space with premium woodwork. From custom cupboards and kitchens to luxury beds and saloons, we deliver modern, elegant interiors across UAE.
          </p>
          {/* WhatsApp Call to Action Button */}
          <a
            href="https://wa.me/971501524596"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#25d366] text-white rounded shadow hover:bg-[#128c7e] font-semibold transition text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-1.003-.273-.136-.472-.198-.67.136-.198.334-.767 1.003-.94 1.206-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.768.463 3.484 1.342 4.993L2 22l5.124-1.342A9.956 9.956 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.182c-1.662 0-3.28-.432-4.68-1.25l-.334-.194-3.04.796.812-2.963-.213-.343A8.183 8.183 0 0 1 3.818 12c0-4.514 3.672-8.182 8.186-8.182 4.514 0 8.182 3.668 8.182 8.182 0 4.514-3.668 8.182-8.182 8.182z"/>            </svg>
            WhatsApp Now
          </a>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#3e2c23]">
          Jhonali Carpenter <span dir="rtl" className="ml-2">نجار جون علي</span>
        </h3>
        <p className="text-[#5c4636] mb-6">
          With years of experience in interior woodwork, we specialize in crafting bespoke furniture and decor for homes, offices, and commercial spaces. Our team combines traditional craftsmanship with modern design to create spaces that inspire.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Feature icon="🪑" title="Custom Furniture" animationClass="animate-float-up" />
          <Feature icon="🏠" title="Home & Office Solutions" animationClass="animate-float-down" />
          <Feature icon="🎨" title="Modern Designs" animationClass="animate-float-left" />
          <Feature icon="🛠️" title="Expert Craftsmanship" animationClass="animate-float-right" />
        </div>
      </section>
    </div>
  );
}

// Feature component with animationClass prop
function Feature({
  icon,
  title,
  animationClass = "",
}: {
  icon: string;
  title: string;
  animationClass?: string;
}) {
  return (
    <div className="flex flex-col items-center bg-[#fff] rounded-lg shadow p-4 w-40">
      <span className={`text-3xl mb-2 ${animationClass}`}>{icon}</span>
      <span className="font-medium text-[#3e2c23]">{title}</span>
    </div>
  );
}
