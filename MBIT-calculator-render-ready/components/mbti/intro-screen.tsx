"use client"

import { Button } from "@/components/ui/button"
import { Brain, Clock, ListChecks, Sparkles } from "lucide-react"

interface IntroScreenProps {
  onStart: () => void
  questionCount: number
}

const highlights = [
  {
    icon: ListChecks,
    title: "12 Questions",
    description: "Carefully balanced across all four personality dimensions.",
  },
  {
    icon: Clock,
    title: "3–5 Minutes",
    description: "Quick to complete, with no sign-up required to see results.",
  },
  {
    icon: Sparkles,
    title: "Full Profile",
    description: "Strengths, growth areas, careers, and famous examples.",
  },
]

export function IntroScreen({ onStart, questionCount }: IntroScreenProps) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center md:py-24">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-accent-foreground">
        <Brain className="h-4 w-4" aria-hidden="true" />
        Professional Personality Assessment
      </span>

      <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
        Discover Your MBTI Personality Type
      </h1>

      <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Answer {questionCount} simple questions and get an in-depth breakdown of
        your personality — your natural strengths, growth areas, and the career
        paths that fit you best.
      </p>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-foreground">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>

      <Button size="lg" className="mt-10 px-8 text-base" onClick={onStart}>
        Start the Test
      </Button>

      <p className="mt-4 text-sm text-muted-foreground">
        Free • No account needed • Instant results
      </p>
    </section>
  )
}
