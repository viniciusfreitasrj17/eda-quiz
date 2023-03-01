import { QuizRepositoryProtocol } from "../../domain/repositories/QuizRepositoryProtocol"
import { MailerMemory } from "../../infra/services/MailerMemory"
import { MailerProtocol } from "../services/MailerProtocol"

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
    readonly mailer: MailerProtocol = new MailerMemory(),
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
    const message = `Hello ${input.name}, your quiz grade id ${grade}`
    await this.mailer.send(input.email, message)
    return { grade }
  }
}