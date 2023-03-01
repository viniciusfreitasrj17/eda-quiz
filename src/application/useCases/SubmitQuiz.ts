import { QuizSubmitted } from "../../domain/events/QuisSumitted"
import { MediatorMemory } from "../../infra/mediator/MediatorMemory"
import { MediatorProtocol } from "../mediator/MediatorProtocol"

export interface SubmitQuizInput {
  id: number,
  name: string,
  email: string,
  answers: { [id: string]:string },
}

export class SubmitQuiz {
  constructor(
    readonly mediator: MediatorProtocol = new MediatorMemory(),
  ){}

  async execute(input: SubmitQuizInput): Promise<void> {
    const event = new QuizSubmitted(input.id, input.name, input.email, input.answers)
    this.mediator.publish(event)
  }
}