import Link from 'next/link'

const navigation = [
  {
    value: 'dashboard',
    label: 'Dashboard',
  },
  {
    value: 'projects',
    label: 'Projects',
  },
]

const Sidebar = () => {
  return (
    <aside className="fixed top-14 bottom-0 w-60 overflow-y-scroll bg-primary">
      <ul className="h-full w-full text-white">
        {navigation.map((menu) => (
          <li key={menu.value} className="w-full h-auto p-4 hover:bg-sky-900">
            <Link href={`/studio/${menu.value}`} className="flex  w-full h-full group">
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
