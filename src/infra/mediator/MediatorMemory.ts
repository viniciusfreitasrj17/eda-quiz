import { HandlerProtocol } from "../../application/handler/HandlerProtocol"
import { MediatorProtocol } from "../../application/mediator/MediatorProtocol"
import { EventProtocol } from "../../domain/events/EventProtocol"

export class MediatorMemory implements MediatorProtocol {
  handlers: Array<HandlerProtocol>

  constructor(){
    this.handlers = []
  }

  register(handler: HandlerProtocol) {
    this.handlers.push(handler)
  }

  publish(event:EventProtocol) {
    for (const handler of this.handlers) {
      if (handler.eventName === event.eventName) {
        handler.handle(event)
      }
    }
  }
}