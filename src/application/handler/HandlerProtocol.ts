import { EventProtocol } from "../../domain/events/EventProtocol";

export interface HandlerProtocol {
  eventName: string;
  handle(event: EventProtocol): Promise<void>;
}
