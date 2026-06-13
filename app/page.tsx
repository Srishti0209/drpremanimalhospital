// app/page.tsx — Sprint 1 verification page

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center space-y-6">

        <h1 className="font-display text-4xl font-semibold text-primary">
          Dr. Prem&apos;s Animal Hospital
        </h1>

        <p className="font-sans text-muted text-lg">
          Sprint 1 complete — theme and structure ready
        </p>

        {/* Colour swatches */}
        <div className="flex gap-3 justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-md bg-primary" />
            <span className="text-xs font-sans text-muted">#10327f</span>
            <span className="text-xs font-sans text-muted">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-md bg-primary-dark" />
            <span className="text-xs font-sans text-muted">#0a2160</span>
            <span className="text-xs font-sans text-muted">primary-dark</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-md bg-accent" />
            <span className="text-xs font-sans text-muted">#5AB22E</span>
            <span className="text-xs font-sans text-muted">accent</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-md bg-accent-dark" />
            <span className="text-xs font-sans text-muted">#3A8010</span>
            <span className="text-xs font-sans text-muted">accent-dark</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-md bg-cream-2 border border-border" />
            <span className="text-xs font-sans text-muted">#edf0f8</span>
            <span className="text-xs font-sans text-muted">cream-2</span>
          </div>
        </div>

        {/* Font check */}
        <div className="space-y-2 pt-4 border-t border-border">
          <p className="font-display text-2xl text-primary">
            Bricolage Grotesque — Display font
          </p>
          <p className="font-sans text-base text-muted">
            Inter — Body font for all regular text
          </p>
        </div>

        {/* Shadow check */}
        <div className="flex gap-4 justify-center pt-4">
          <div className="w-24 h-12 rounded-md bg-white shadow-brand flex items-center justify-center">
            <span className="text-xs text-muted">shadow-brand</span>
          </div>
          <div className="w-24 h-12 rounded-md bg-white shadow-brand-lg flex items-center justify-center">
            <span className="text-xs text-muted">shadow-brand-lg</span>
          </div>
        </div>

      </div>
    </div>
  )
}