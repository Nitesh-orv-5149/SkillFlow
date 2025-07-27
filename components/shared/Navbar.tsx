export default function Navbar() {

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  return (
    <nav className="flex items-center justify-between gap-10 bg-cyan-600/50 rounded-full px-4 py-2 w-[70vw] backdrop-blur-sm ">
      <h2 className="text-xl font-extrabold border-2 rounded-full px-2">SF</h2>
      <div className="flex gap-10">
      {navItems.map((item) => (
        <a className="hover:underline hover:text-cyan-300 transition-all" key={item.name} href={item.href}>{item.name}</a>
      ))}
      </div>
      <button className="bg-blue-300 hover:bg-blue-100 text-black font-bold transition-all px-4 py-1 rounded-full">Get Started</button>
    </nav>
  )
}