import React from 'react';

const services = [
  "Table",
  "Door",
  "Cupboard",
  "Windows",
  "Decoring walls",
  "TV Hall",
  "Kitchen",
  "Chairs",
  "Bed room decore",
  "Saloon",
  "Office",
];

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-[#3e2c23] mb-8 text-center">Our Services</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-[#bfa181] text-[#3e2c23] text-left text-lg">Service</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={service} className={idx % 2 ? "bg-[#f5eee6]" : ""}>
                <td className="py-3 px-6">{service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
