interface EksplorLayoutProps {
  children: React.ReactNode
}
const EksplorLayout = ({ children }: EksplorLayoutProps) => {
  return (
    <div className="flex flex-col gap-8 pt-14 sm:gap-11">
      <h1 className="text-5xl font-bold">Eksplor</h1>
      {children}
    </div>
  )
}
export default EksplorLayout
