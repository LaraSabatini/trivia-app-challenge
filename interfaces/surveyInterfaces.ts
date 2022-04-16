export interface QuestionsInterface {
  text: string
  image: string
  lifetimeSeconds: number
  id: number
  options: {
    text: string
    value: boolean
    id: number
  }[]
}

export interface AnswersSelectedInterface {
  question_id: number
  answer_id: number
  value: boolean
  text: string
}

export interface AnswerInterface {
  value: boolean
  text: string
  id: number
}
