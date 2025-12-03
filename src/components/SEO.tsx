import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  schema?: object
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/Sleek Web Designs logo.svg',
  url,
  type = 'website',
  schema
}: SEOProps) {
  const siteName = 'Sleek Web Designs'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const canonicalUrl = url || `${window.location.origin}${window.location.pathname}`
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
