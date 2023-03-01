import { EventProtocol } from "./EventProtocol";

export class QuizCorrected implements EventProtocol {
  eventName = "QuizCorrected";

  constructor(
    readonly name: string,
    readonly email: string,
    readonly grade: number,
  ){}
}