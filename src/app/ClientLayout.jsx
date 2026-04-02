'use client';

import Header from '../components/Header';

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}