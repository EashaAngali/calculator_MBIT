"use client"

import { Button } from "@/components/ui/button"
import type { Letter, Question } from "@/lib/mbti-data"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizScreenProps {
  question: Question
  index: number
  total: number
  selected: Letter | undefined
  onSelect: (letter: Letter) => void
  onBack: () => void
  onNext: () => void
  isLast: boolean
}

export function QuizScreen({
  question,
  index,
  total,
  selected,
  onSelect,
  onBack,
  onNext,
  isLast,
}: QuizScreenProps) {
  const progress = Math.round(((index + (selected ? 1 : 0)) / total) * 100)
  const options = [question.optionA, question.optionB]

  return (
    <section className="mx-auto flex min-h-svh max-w-2xl flex-col px-6 py-10 md:py-16">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>{progress}% complete</span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-balance text-2xl font-semibold leading-snug text-foreground md:text-3xl">
          {question.text}
        </h2>

        <fieldset className="mt-8 flex flex-col gap-4">
          <legend className="sr-only">{question.text}</legend>
          {options.map((option) => {
            const isSelected = selected === option.letter
            return (
              <button
                key={option.letter}
                type="button"
                onClick={() => onSelect(option.letter)}
                aria-pressed={isSelected}
                className={cn(
                  "flex items-center gap-4 rounded-2xl border-2 bg-card p-5 text-left transition-colors",
                  isSelected
                    ? "border-primary bg-accent"
                    : "border-border hover:border-primary/40 hover:bg-accent/50",
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/40",
                  )}
                >
                  {isSelected && <Check className="h-4 w-4" aria-hidden="true" />}
                </span>
                <span className="text-base font-medium leading-relaxed text-foreground">
                  {option.text}
                </span>
              </button>
            )
          })}
        </fieldset>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={onBack}
          disabled={index === 0}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!selected} className="gap-2 px-6">
          {isLast ? "See Results" : "Next"}
          {!isLast && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </Button>
      </div>
    </section>
  )
}
