import "../globals.css";

export const metadata = {
  title: "Next News",
  description: "A News Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
