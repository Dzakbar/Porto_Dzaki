import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Porto Dzaki - Portfolio',
  description: 'Fullstack Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
