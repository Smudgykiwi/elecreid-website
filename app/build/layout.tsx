// Build page gets its own layout no Nav or Footer
export default function BuildLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
