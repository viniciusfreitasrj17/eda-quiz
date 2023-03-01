import { EventProtocol } from "../../domain/events/EventProtocol";
import { HandlerProtocol } from "../handler/HandlerProtocol";

export interface MediatorProtocol {
  register(handler: HandlerProtocol): void;
  publish(event: EventProtocol): void
}