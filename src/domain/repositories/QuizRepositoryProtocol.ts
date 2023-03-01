import { Quiz } from "../entity/Quiz";

export interface QuizRepositoryProtocol {
  get(id: number): Promise<Quiz>
}
