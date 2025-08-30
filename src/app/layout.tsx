import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhiskAway Pets",
  description: "International pet-move checklists and concierge support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKXCBXG8');`
        }} />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YPC7HW6ENN"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YPC7HW6ENN');`
        }} />

        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1156076456374747');
fbq('track', 'PageView');`
        }} />
        <noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=1156076456374747&ev=PageView&noscript=1"
/></noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-screen bg-orange-50 text-neutral-900" suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKXCBXG8"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <header className="border-b bg-white shadow-sm">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/images/WhiskAwayPets_with_text_transparent.png" alt="WhiskAway Pets" className="h-10" />
            </a>
            <nav className="text-sm space-x-6">
              <a className="hover:text-orange-600 transition-colors" href="/intake">Get Started</a>
              <a className="hover:text-orange-600 transition-colors" href="/services">Services</a>
              <a className="hover:text-orange-600 transition-colors" href="/resources">Resources</a>
              <a className="hover:text-orange-600 transition-colors" href="/about">About</a>
              <a className="hover:text-orange-600 transition-colors" href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500">
            © WhiskAway Pets — Stressless international moves for your pets.
          </div>
        </footer>
      </body>
    </html>
  );
}