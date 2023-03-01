import { EventProtocol } from "./EventProtocol";

export class QuizSubmitted implements EventProtocol {
  eventName = "QuizSubmitted";

  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly answers: { [id: string]: string },
  ){}
}