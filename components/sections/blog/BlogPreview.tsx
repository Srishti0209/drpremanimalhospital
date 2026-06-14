import Link from 'next/link'

const COPY = {
  sectionLabel: "From the doctor's desk",
  heading:      'Notes & advice for animal owners',
  allArticles:  'All articles',
} as const

interface BlogPreviewPost {
  slug:        string
  category:    string
  title:       string
  excerpt:     string
  imageBg:     string
  imageStroke: string
  iconPath:    string
}

const POSTS: BlogPreviewPost[] = [
  {
    slug:        'monsoon-cattle-health',
    category:    'Cattle care',
    title:       'Monsoon health: protecting your cattle in the rains',
    excerpt:     'Foot rot, parasites and feed spoilage rise sharply in the wet season. Here\'s how to stay ahead.',
    imageBg:     'linear-gradient(135deg,#E7EEF7,#D6E4F2)',
    imageStroke: '#1E4E8C',
    iconPath:    'M12 2s7 3 7 9a7 7 0 0 1-14 0c0-6 7-9 7-9Z',
  },
  {
    slug:        'puppy-vaccination-schedule',
    category:    'Pet wellness',
    title:       'A simple vaccination schedule for new puppies',
    excerpt:     "When to start, what to give, and why timing matters in your puppy's first year.",
    imageBg:     'linear-gradient(135deg,#EAF3E2,#DCEFCD)',
    imageStroke: '#3C7A1E',
    iconPath:    'm18 2 4 4-9.5 9.5-4.5 1 1-4.5L18 2Z',
  },
  {
    slug:        'blood-test-explained',
    category:    'Diagnostics',
    title:       'What a blood test really tells us about your animal',
    excerpt:     'Reading between the numbers — how lab work guides faster, safer treatment.',
    imageBg:     'linear-gradient(135deg,#F4EEE2,#ECE0CB)',
    imageStroke: '#9C8B6E',
    iconPath:    'M9 3h6M10 3v6.5L5.2 17a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3',
  },
]

export function BlogPreview() {
  return (
    <section aria-labelledby="blog-preview-heading" className="bg-cream">
      <div className="max-w-container mx-auto px-10 py-[76px]">

        {/* Header */}
        <div className="flex items-end justify-between mb-[40px] flex-wrap gap-4">
          <div>
            <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-[10px]">
              {COPY.sectionLabel}
            </p>
            <h2
              id="blog-preview-heading"
              className="font-display font-[500] text-[38px] text-primary tracking-[-0.5px]"
            >
              {COPY.heading}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-[9px] font-sans text-[15px] font-bold text-primary border-b-2 border-accent pb-1 hover:text-accent-dark motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            {COPY.allArticles}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4C9A2A" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map(({ slug, category, title, excerpt, imageBg, imageStroke, iconPath }) => (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                className="block bg-white border border-[#EFE7D7] rounded-2xl overflow-hidden hover:border-[#CFE0BC] shadow-card motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {/* Gradient image placeholder */}
                <div
                  className="h-[160px] flex items-center justify-center"
                  style={{ background: imageBg }}
                  aria-hidden="true"
                >
                  <svg
                    width="46" height="46" viewBox="0 0 24 24"
                    fill="none"
                    stroke={imageStroke}
                    strokeWidth="1.4"
                  >
                    <path d={iconPath} />
                  </svg>
                </div>
                <div className="p-[22px]">
                  <p className="font-sans text-[12px] font-bold text-accent uppercase tracking-[1px] mb-[9px]">
                    {category}
                  </p>
                  <h3 className="font-display text-[19px] font-semibold text-primary leading-[1.3] mb-[9px]">
                    {title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-muted leading-[1.6]">
                    {excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
