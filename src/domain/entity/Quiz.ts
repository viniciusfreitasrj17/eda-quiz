export interface Questions {
  id: number, 
  description: string, 
  answers: Array<{ id: string, description: string }>, 
  correctAnswers: string
}

export class Quiz {
  constructor(
    readonly id: number,
    readonly questions: Array<Questions>
  ){}
}