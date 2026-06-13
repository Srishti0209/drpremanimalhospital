export function ErrorMessage({
  id,
  message,
}: {
  id: string
  message: string
}) {
  return (
    <p
      id={id}
      role="alert"
      className="text-destructive text-sm mt-1 flex items-center gap-1"
    >
      <span aria-hidden="true">⚠</span>
      {message}
    </p>
  )
}