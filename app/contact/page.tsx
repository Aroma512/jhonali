'use client';

import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-8 text-center">Contact Us</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full md:w-[600px] h-72 rounded-lg overflow-hidden border">
          <iframe
            src="https://maps.google.com/maps?q=25.12881,55.76413&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jhonali Decor Master Location"
          ></iframe>
        </div>
        <div className="text-[#3e2c23] text-center">
          <div className="font-semibold">Address:</div>
          <div>
            UAE, Al Saniya City, Bengali Masjid
            <br />
            <span dir="rtl" className="block">الإمارات، العين، الصناعية، مسجد بنغالي</span>
          </div>
          <div className="mt-2 font-semibold">Phone / WhatsApp:</div>
          <div>
            <a href="https://wa.me/971501524596" className="underline text-[#25d366] font-bold" target="_blank" rel="noopener">
              +971 50 152 4596
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://wa.me/971501524596"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#25d366] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#128c7e] transition"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


