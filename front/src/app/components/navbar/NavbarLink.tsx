import Link from "next/link"

const menuLinks = [
  {
    label: 'Home',
    path: '/home'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Products',
    path: '/products'
  }
]

export const NavbarLink = () => {
  return (
    <nav className="hidden xl:flex gap-4 font-bold lg:ml-48 xl:ml-80 mr-3">
      {
       menuLinks.map( item => (
        <Link key={item.label}
          href={item.path}
          className="text-neutral-400 hover:text-slate-900"
        >
          {item.label}
        </Link>
       ) )
      }
    </nav>
  )
}
