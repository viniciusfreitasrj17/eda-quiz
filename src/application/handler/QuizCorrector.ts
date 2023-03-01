import { QuizSubmitted } from "../../domain/events/QuisSumitted";
import { QuizCorrected } from "../../domain/events/QuizCorrected";
import { QuizRepositoryProtocol } from "../../domain/repositories/QuizRepositoryProtocol";
import { MediatorMemory } from "../../infra/mediator/MediatorMemory";
import { MediatorProtocol } from "../mediator/MediatorProtocol";
import { HandlerProtocol } from "./HandlerProtocol";

export class QuizCorrectorHandler implements HandlerProtocol {
  eventName = "QuizSubmitted";

  constructor(
    readonly quizRepository: QuizRepositoryProtocol,
    readonly mediator: MediatorProtocol = new MediatorMemory(),
  ){}

  async handle(event: QuizSubmitted): Promise<void> {
    const quiz = await this.quizRepository.get(event.id)
    let correctAnswers = 0
    for (const question of quiz.questions) {
      if (event.answers[question.id] === question.correctAnswers) {
        correctAnswers++
      }
    }
    const grade = (correctAnswers/quiz.questions.length) * 100
    const quizCorrected = new QuizCorrected(event.name, event.email, grade)
    this.mediator.publish(quizCorrected)
  }
}