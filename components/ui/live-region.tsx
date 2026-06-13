type Politeness = 'polite' | 'assertive'

export function LiveRegion({
  children,
  politeness = 'polite',
}: {
  children: React.ReactNode
  politeness?: Politeness
}) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {children}
    </div>
  )
}