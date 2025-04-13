import React from 'react'
import { FiBell } from 'react-icons/fi'
import { FiZap } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSolidZap } from 'react-icons/bi'

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
  },
  {
    name: 'Payments',
    href: '/',
  },
  {
    name: 'Customers',
    href: '/',
  },
  {
    name: 'Reports',
    href: '/',
  },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <BiSolidZap className="h-8 w-8 text-orange-500" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    i === 1
                      ? 'text-orange-500'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <FiBell className="h-6 w-6" />
            </button>
            <div className="ml-3">
              <Image
                className="h-8 w-8 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="User avatar"
                width={32}
                height={32}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav