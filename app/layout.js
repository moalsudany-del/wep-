import './globals.css';

export const metadata = {
  title: 'zim | AI Growth Engine',
  description: 'Luxury dark-mode growth OS for short-form video creators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
