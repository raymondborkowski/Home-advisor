interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-850 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg sm:text-xl leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
