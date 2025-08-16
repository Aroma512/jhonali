'use client';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-8 text-center">Contact Us</h1>
      {/* Map for Al Saniya, Al Ain, Bengali Masjid, UAE placed below heading and above Contact Details */}
      <div className="flex flex-col items-center gap-8">
        <div className="w-full md:w-[600px] h-72 rounded-lg overflow-hidden border shadow-lg mb-4">
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
        <div className="text-[#3e2c23] text-center w-full max-w-md">
          <div className="space-y-6">
            <div>
              <div className="font-semibold flex items-center justify-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z"/>
                </svg>
                Contact Details:
              </div>
              <div>
                UAE, Al Ain, Al Saniya, Bengali Masjid
                <br />
                <span dir="rtl" className="block">الإمارات، العين، الصناعية، مسجد بنغالي</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://wa.me/971501524596"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] text-white rounded-lg font-semibold shadow hover:bg-[#128c7e] transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-1.003-.273-.136-.472-.198-.67.136-.198.334-.767 1.003-.94 1.206-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp +971 50 152 4596
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}