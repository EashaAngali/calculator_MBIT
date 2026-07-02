"use client"

import { Button } from "@/components/ui/button"
import type { TypeProfile } from "@/lib/mbti-data"
import {
  Briefcase,
  RotateCcw,
  Share2,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

export interface AxisResult {
  left: { letter: string; label: string; percent: number }
  right: { letter: string; label: string; percent: number }
  winner: "left" | "right"
}

interface ResultScreenProps {
  profile: TypeProfile
  axes: AxisResult[]
  onRestart: () => void
}

export function ResultScreen({ profile, axes, onRestart }: ResultScreenProps) {
  const handleShare = async () => {
    const text = `I'm ${profile.code} — ${profile.name}! Discover your MBTI personality type.`
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "My MBTI Result", text })
        return
      } catch {
        // fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text)
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <header className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center md:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Your Personality Type
        </span>
        <p className="mt-6 font-mono text-5xl font-bold tracking-tight text-primary md:text-6xl">
          {profile.code}
        </p>
        <h1 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
          {profile.name}
        </h1>
        <p className="text-base font-medium text-muted-foreground">
          {profile.nickname}
        </p>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
      </header>

      <div className="mt-6 rounded-3xl border border-border bg-card p-8">
        <h2 className="text-lg font-semibold text-foreground">
          Your Dimension Breakdown
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {axes.map((axis) => {
            const leftWins = axis.winner === "left"
            const winPercent = leftWins ? axis.left.percent : axis.right.percent
            return (
              <div key={axis.left.letter + axis.right.letter}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span
                    className={
                      leftWins
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {axis.left.label} ({axis.left.letter})
                  </span>
                  <span
                    className={
                      !leftWins
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {axis.right.label} ({axis.right.letter})
                  </span>
                </div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{
                      width: `${leftWins ? axis.left.percent : 100 - axis.right.percent}%`,
                    }}
                  />
                </div>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                  {winPercent}% toward{" "}
                  {leftWins ? axis.left.letter : axis.right.letter}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
            Strengths
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {profile.strengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <TrendingDown
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
            Growth Areas
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {profile.weaknesses.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card p-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
          Recommended Career Paths
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.careers.map((career) => (
            <span
              key={career}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
            >
              {career}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card p-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Star className="h-5 w-5 text-primary" aria-hidden="true" />
          Famous {profile.code}s
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {profile.famous.join(" · ")}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button onClick={onRestart} variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Retake the Test
        </Button>
        <Button onClick={handleShare} className="gap-2">
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share My Result
        </Button>
      </div>
    </section>
  )
}
