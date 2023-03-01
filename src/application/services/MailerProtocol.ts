export interface MailerProtocol {
  send(recipient: string, message: string): Promise<void>;
}