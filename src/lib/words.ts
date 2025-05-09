import { WORDS } from '../constants/wordlist'
import { SPECIAL_WORDS } from '../constants/wordlistSpecial'
import { VALID_GUESSES } from '../constants/validGuesses'
import { isTodaySunday } from '../util/dateUtils'

export const isWordInWordList = (word: string) => {
  if (!isTodaySunday()) {
    return (
      WORDS.includes(word.toLowerCase()) ||
      VALID_GUESSES.includes(word.toLowerCase())
    )
  } else {
    return true
  }
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  const epochMs = new Date('May 9, 2025 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000

  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const isSunday = isTodaySunday()
  const sundaysPassed = countSundaysSinceEpoch(epochMs, now)

  
  if (isSunday) {
    // Count how many Sundays have passed since epoch
    const sundayWord =
      SPECIAL_WORDS[sundaysPassed % SPECIAL_WORDS.length].toUpperCase()

    return {
      solution: sundayWord,
      solutionIndex: sundaysPassed,
      tomorrow: nextday,
    }
  }

  const indexAdj = index - sundaysPassed
  
  return {
    solution: WORDS[indexAdj % WORDS.length].toUpperCase(),
    solutionIndex: indexAdj,
    tomorrow: nextday,
  }
}

function countSundaysSinceEpoch(epochMs: number, nowMs: number): number {
  const msInDay = 86400000
  let count = 0

  for (let time = epochMs; time <= nowMs; time += msInDay) {
    const date = new Date(time)
    if (date.getDay() === 0) {
      count++
    }
  }

  return count - 1 // subtract 1 if you don't want to count today unless it's complete
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
