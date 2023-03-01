import { SubmitQuiz } from "../src/application/useCases/SubmitQuiz"
import { QuizRepositoryMemory } from "../src/infra/repository/QuizRepositoryMemory"
import { MailerMemory } from "../src/infra/services/MailerMemory"

describe('SubmitQuiz Unit Test', () => {
  it('user should submit a quiz responded', async () => {
    const quizRepository = new QuizRepositoryMemory()
    const submitQuiz = new SubmitQuiz(quizRepository)
    const input = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1,
      answers: {
        1: "a",
        2: "a",
      }
    }
    const output = await submitQuiz.execute(input)
    expect(output.grade).toBe(100)
  })

  it('user should submit a quiz responded, it will calculate score and notification to user by mail', async () => {
    const mailer = new MailerMemory()
    const quizRepository = new QuizRepositoryMemory()
    const submitQuiz = new SubmitQuiz(quizRepository, mailer)
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
