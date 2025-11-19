import { Helmet } from 'react-helmet-async'

const SEOData = ({
  title,
  description,
  keywords,
  ogImage = '/Asset_ICON.png',
  url,
  structuredData,
  robots = "index, follow",
  type = "website"
}) => {
  const baseUrl = 'https://icon-entertainmentz.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOData