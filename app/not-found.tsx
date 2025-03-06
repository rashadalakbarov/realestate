import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-7xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-gray-900">
            Oops! Səhifə tapılmadı
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Axtardığınız səhifə mövcud deyil vəya daşınmış olabilər.
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-6">
            <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Ana Səhifə
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Texniki Dəstək <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
  )
}

export default NotFound