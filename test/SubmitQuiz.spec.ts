import { SubmitQuiz } from "../src/application/useCases/SubmitQuiz"
import { QuizCorrectorHandler } from "../src/application/handler/QuizCorrector"
import { MediatorMemory } from "../src/infra/mediator/MediatorMemory"
import { QuizRepositoryMemory } from "../src/infra/repository/QuizRepositoryMemory"
import { MailerMemory } from "../src/infra/services/MailerMemory"
import { QuizCommunicatorHandler } from "../src/application/handler/QuizCommunicator"

describe('SubmitQuiz Unit Test', () => {
  it('user should submit a quiz responded, it will calculate score and notification to user by mail', async () => {
    const mediator = new MediatorMemory()
    const quizRepository = new QuizRepositoryMemory()
    const quizCorrectorHandler = new QuizCorrectorHandler(quizRepository, mediator)
    mediator.register(quizCorrectorHandler)
    const mailer = new MailerMemory()
    const quizCommunicatorHandler = new QuizCommunicatorHandler(mailer)
    mediator.register(quizCommunicatorHandler)
    const submitQuiz = new SubmitQuiz(mediator)
    const input = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1,
      answers: {
        1: "a",
        2: "a",
      }
    }
    await submitQuiz.execute(input)
    expect(mailer.messages[0].message).toBe("Hello Jane Doe, your quiz grade id 100")
  })
})
