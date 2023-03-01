import { Questions, Quiz } from "../src/domain/entity/Quiz"

describe('Quiz Unit Test', () => {
  it('Should create a quiz', () => {
    const questions: Questions[] = [{
      id: 1,
      description: 'Do you like javascript?',
      answers: [{
        id: 'a',
        description: 'Yes'
      }, {
        id: 'b',
        description: 'No'
      }],
      correctAnswers: 'a'
    }, {
      id: 1,
      description: 'Typescript is better then javascript?',
      answers: [{
        id: 'a',
        description: 'Yes'
      }, {
        id: 'b',
        description: 'No'
      }],
      correctAnswers: 'a'
    }]

    const quiz = new Quiz(1, questions)
    expect(quiz.id).toBe(1)
    expect(quiz.questions[0].id).toBe(1)
    expect(quiz.questions).toHaveLength(2)
  })
})
