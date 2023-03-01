import { QuizRepositoryProtocol } from "../../domain/repositories/QuizRepositoryProtocol"

export interface SubmitQuizInput {
  id: number,
  name: string,
  email: string,
  answers: { [id: string]:string },
}

export interface SubmitQuizOutput {
  grade: number
}

export class SubmitQuiz {
  constructor(
    readonly quizRepository: QuizRepositoryProtocol,
  ){}

  async execute(input: SubmitQuizInput): Promise<SubmitQuizOutput> {
    const quiz = await this.quizRepository.get(input.id)
    let correctAnswers = 0
    for (const question of quiz.questions) {
      if (input.answers[question.id] === question.correctAnswers) {
        correctAnswers++
      }
    }
    const grade = (correctAnswers/quiz.questions.length) * 100
    return { grade }
  }
}