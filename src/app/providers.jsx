'use client';

import { ThemeProvider } from './ThemeContext';
import LoadingScreen from '@/components/LoadingScreen';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LoadingScreen />
      {children}
    </ThemeProvider>
  );
}