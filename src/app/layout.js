import { Poppins } from 'next/font/google';
import './globals.css';

const popins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Shubham Mistry',
  description: 'I am a Full Stack developer and this is my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  );
}
