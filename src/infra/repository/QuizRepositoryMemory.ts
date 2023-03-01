import { Quiz } from "../../domain/entity/Quiz";
import { QuizRepositoryProtocol } from "../../domain/repositories/QuizRepositoryProtocol";

export class QuizRepositoryMemory implements QuizRepositoryProtocol {
  quizzes: Array<Quiz>;

  constructor(){
    this.quizzes = [{
      id: 1,
      questions: [{
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
        id: 2,
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
    }]
  }

  async get(id: number): Promise<Quiz> {
    const quiz = this.quizzes.find(q => q.id === id)
    if (!quiz) throw new Error("Quiz not found")
    return quiz
  }
}