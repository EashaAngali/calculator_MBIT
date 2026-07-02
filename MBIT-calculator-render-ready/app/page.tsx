"use client"

import { useMemo, useState } from "react"
import { IntroScreen } from "@/components/mbti/intro-screen"
import { QuizScreen } from "@/components/mbti/quiz-screen"
import { ResultScreen, type AxisResult } from "@/components/mbti/result-screen"
import {
  questions,
  typeProfiles,
  type Dimension,
  type Letter,
} from "@/lib/mbti-data"

type Stage = "intro" | "quiz" | "result"

const axisMeta: Record<
  Dimension,
  {
    left: { letter: Letter; label: string }
    right: { letter: Letter; label: string }
  }
> = {
  EI: {
    left: { letter: "E", label: "Extraversion" },
    right: { letter: "I", label: "Introversion" },
  },
  SN: {
    left: { letter: "S", label: "Sensing" },
    right: { letter: "N", label: "Intuition" },
  },
  TF: {
    left: { letter: "T", label: "Thinking" },
    right: { letter: "F", label: "Feeling" },
  },
  JP: {
    left: { letter: "J", label: "Judging" },
    right: { letter: "P", label: "Perceiving" },
  },
}

const axisOrder: Dimension[] = ["EI", "SN", "TF", "JP"]

export default function Page() {
  const [stage, setStage] = useState<Stage>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, Letter>>({})

  const { code, axes } = useMemo(() => {
    const counts: Record<Letter, number> = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    }
    for (const q of questions) {
      const answer = answers[q.id]
      if (answer) counts[answer] += 1
    }

    const resultAxes: AxisResult[] = axisOrder.map((dim) => {
      const meta = axisMeta[dim]
      const leftCount = counts[meta.left.letter]
      const rightCount = counts[meta.right.letter]
      const total = leftCount + rightCount || 1
      const leftPercent = Math.round((leftCount / total) * 100)
      const rightPercent = 100 - leftPercent
      // Ties resolve to the left letter (standard convention).
      const winner: "left" | "right" =
        leftCount >= rightCount ? "left" : "right"
      return {
        left: { ...meta.left, percent: leftPercent },
        right: { ...meta.right, percent: rightPercent },
        winner,
      }
    })

    const typeCode = resultAxes
      .map((a) => (a.winner === "left" ? a.left.letter : a.right.letter))
      .join("")

    return { code: typeCode, axes: resultAxes }
  }, [answers])

  const handleSelect = (letter: Letter) => {
    setAnswers((prev) => ({ ...prev, [questions[current].id]: letter }))
  }

  const handleNext = () => {
    if (current === questions.length - 1) {
      setStage("result")
      window.scrollTo({ top: 0 })
      return
    }
    setCurrent((c) => c + 1)
    window.scrollTo({ top: 0 })
  }

  const handleBack = () => {
    setCurrent((c) => Math.max(0, c - 1))
    window.scrollTo({ top: 0 })
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrent(0)
    setStage("intro")
    window.scrollTo({ top: 0 })
  }

  if (stage === "intro") {
    return (
      <main className="min-h-svh bg-background">
        <IntroScreen
          questionCount={questions.length}
          onStart={() => setStage("quiz")}
        />
      </main>
    )
  }

  if (stage === "result") {
    return (
      <main className="min-h-svh bg-background">
        <ResultScreen
          profile={typeProfiles[code]}
          axes={axes}
          onRestart={handleRestart}
        />
      </main>
    )
  }

  const question = questions[current]

  return (
    <main className="min-h-svh bg-background">
      <QuizScreen
        question={question}
        index={current}
        total={questions.length}
        selected={answers[question.id]}
        onSelect={handleSelect}
        onBack={handleBack}
        onNext={handleNext}
        isLast={current === questions.length - 1}
      />
    </main>
  )
}
