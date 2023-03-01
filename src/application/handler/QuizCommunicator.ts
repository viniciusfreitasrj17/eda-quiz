import { QuizCorrected } from "../../domain/events/QuizCorrected";
import { MailerMemory } from "../../infra/services/MailerMemory";
import { MailerProtocol } from "../services/MailerProtocol";
import { HandlerProtocol } from "./HandlerProtocol";

export class QuizCommunicatorHandler implements HandlerProtocol {
  eventName = 'QuizCorrected';

  constructor(
    readonly mailer: MailerProtocol = new MailerMemory(),
  ){}

  async handle(event: QuizCorrected): Promise<void> {
    const message = `Hello ${event.name}, your quiz grade id ${event.grade}`
    await this.mailer.send(event.email, message)
  }

}