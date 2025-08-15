import React from 'react';

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {children}
    </div>
  );
}
