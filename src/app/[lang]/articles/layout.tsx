type Props = {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <main className="w-full bg-zinc-50">
      <div className="max-w-7xl mx-auto bg-white py-24">
        {children}
      </div>
    </main>
  )
}