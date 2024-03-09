import './tailwind.css';

export const metadata = {
  title: 'Splitter',
  description: 'Split your work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#282828' />
      </head>

      <body>{children}</body>
    </html>
  );
}
