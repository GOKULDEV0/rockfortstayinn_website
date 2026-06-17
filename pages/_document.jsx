import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Rockfort Stay Inn offers premium service apartments at Hirondini Park, Oragadam, Chennai. Flexible 1-to-3 room bookings with shared hall and kitchen." />
        <meta name="keywords" content="service apartments Chennai, service apartments Oragadam, Rockfort Stay Inn, corporate stay Chennai, short stay Oragadam, furnished apartments Oragadam" />
        <meta name="author" content="Rockfort Stay Inn" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rockfortstayinn.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rockfort Stay Inn | Luxury Service Apartments Chennai" />
        <meta property="og:description" content="Premium service apartments at Hirondini Park, Oragadam. Flexible 1 to 3 bedroom stays for corporate professionals and families." />
        <meta property="og:url" content="https://www.rockfortstayinn.com/" />
        <meta property="og:site_name" content="Rockfort Stay Inn" />
        <meta property="og:image" content="https://www.rockfortstayinn.com/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rockfort Stay Inn | Luxury Service Apartments Chennai" />
        <meta name="twitter:description" content="Premium service apartments at Hirondini Park, Oragadam, Chennai." />
        <meta name="twitter:image" content="https://www.rockfortstayinn.com/og-image.jpg" />
        
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Rockfort Stay Inn",
              "description": "Premium service apartments at Hirondini Park, Oragadam, Chennai offering flexible 1, 2, or 3 bedroom bookings with shared amenities.",
              "url": "https://www.rockfortstayinn.com",
              "telephone": "+918220757067",
              "email": "karthik@rockfortstayinn.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hirondini Park, Oragadam",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "602105",
                "addressCountry": "IN"
              },
              "priceRange": "₹₹",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Fully Furnished", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
