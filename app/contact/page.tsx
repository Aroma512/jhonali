'use client';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-[#3e2c23] mb-2 text-center tracking-tight drop-shadow">
        Get in Touch
      </h1>
      <p className="text-lg text-[#5c4636] mb-8 text-center max-w-xl mx-auto">
        We’d love to hear from you! Reach out for project inquiries, quotes, or any questions. Our team is ready to help you transform your space.
      </p>

      {/* Decorative divider */}
      <div className="flex justify-center mb-8">
        <span className="inline-block w-24 h-1 rounded bg-gradient-to-r from-[#bfa181] via-[#fff9f2] to-[#bfa181]" />
        </div>

        {/* Map */}
        <div className="flex justify-center mb-10">
        <div className="w-full md:w-[500px] h-64 rounded-2xl overflow-hidden border-2 border-[#bfa181] shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Al+Saniya+Bengali+Masjid,+Al+Ain,+UAE&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jhonali Decor Master Location"
          />
        </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white/90 rounded-2xl shadow-xl border border-[#f5eee6] p-8 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[#bfa181] text-2xl font-bold">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.72 11.06a2.5 2.5 0 10-3.54 3.54l.71.7a2.5 2.5 0 003.54-3.54l-.71-.7z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.75 6.75A9.97 9.97 0 0112 2c2.21 0 4.26.72 5.92 1.94M21.25 17.25A9.97 9.97 0 0112 22c-2.21 0-4.26-.72-5.92-1.94" />
            </svg>
            Contact Details
          </div>
          <div className="text-[#3e2c23] text-lg font-medium">
            UAE, Al Ain, Al Saniya, Bengali Masjid
            <br />
            <span dir="rtl" className="block text-base text-[#bfa181]">الإمارات، العين، الصناعية، مسجد بنغالي</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-2">
          <a
            href="https://wa.me/971501524596"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#25d366] text-white rounded-full font-bold text-lg shadow hover:bg-[#128c7e] transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-1.003-.273-.136-.472-.198-.67.136-.198.334-.767 1.003-.94 1.206-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            WhatsApp: +971 50 152 4596
          </a>
        </div>
        </div>
    </div>
  );
}