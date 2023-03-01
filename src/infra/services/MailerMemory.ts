import { MailerProtocol } from "../../application/services/MailerProtocol";

export interface Message {
  recipient: string,
  message: string,
}

export class MailerMemory implements MailerProtocol {
  messages: Array<Message>

  constructor(){
    this.messages = []
  }
  async send(recipient: string, message: string): Promise<void> {
    this.messages.push({ recipient, message })
  }
}
