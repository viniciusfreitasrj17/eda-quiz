import { SubmitQuiz } from "../src/application/useCases/SubmitQuiz"
import { QuizRepositoryMemory } from "../src/infra/repository/QuizRepositoryMemory"

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
})
