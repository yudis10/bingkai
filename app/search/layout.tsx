interface EksplorLayoutProps {
  children: React.ReactNode
}
const EksplorLayout = ({ children }: EksplorLayoutProps) => {
  return (
    <div className="flex flex-col gap-7 pt-7 sm:gap-11 md:pt-14">
      <h1 className="text-xl font-bold md:text-5xl">Hasil Pencarian</h1>
      {children}
    </div>
  )
}
export default EksplorLayout
