import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', path: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.sleekwebdesigns.com${item.path}`
    }))
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <nav
        className="bg-gray-50 border-b border-gray-200"
        aria-label="Breadcrumb"
      >
        <div className="container-custom py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-4 h-4 text-gray-400 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}

                  {isLast ? (
                    <span
                      className="text-gray-700 font-medium"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
