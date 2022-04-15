import React, { useContext, useEffect } from 'react'
import { SurveyContext } from "contexts/surveyContext"
import theme from "theme/index"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { ResultsContainer, Content } from "./styles"
import { Title } from "../QuestionContainer/styles"

const Results = () => {
  const {
    checkResults,
    questions,
    answersSelected,
    setAnswersSelected,
  } = useContext(SurveyContext)

  // se mapea questions para las preguntas
  // se mapea answers selected para las respuestas

  const checkIfAllQuestionsHaveBeenAnswered = () => {
    if (questions.length !== answersSelected.length) {
      const idsOfQuestions = questions.map((question: {text: string
        image: string
        lifetimeSeconds: number
        id: number
        options: {
          text: string
          value: boolean
          id: number
        }[]}) => question.id)
        const idsOfAnswers = answersSelected.map((answer: {question_id: number
          answer_id: number
          value: boolean}) => answer.question_id)
        const answersToAdd = idsOfQuestions.filter((id: number) => !idsOfAnswers.includes(id))

        const newArrayOfAnswers = answersSelected
        for (let i = 0; i < answersToAdd.length; i++) {
            newArrayOfAnswers.push({
              question_id: answersToAdd[i],
              answer_id: 0,
              value: false,
            })
        }
        setAnswersSelected(newArrayOfAnswers)
    }
  }

  useEffect(() => {
    if (checkResults) {
      checkIfAllQuestionsHaveBeenAnswered()
    }
  }, [checkResults])

  return (
    <ResultsContainer>
      <Title>Results:</Title>
         <Content>
           {questions.map((question: {text: string
              image: string
              lifetimeSeconds: number
              id: number
              options: {
                text: string
                value: boolean
                id: number
              }[]}) => {
                <>
                  <p>
                    {/* {answer.value ? <CheckCircleOutlined style={{color:`${theme.colors.green}`}} /> : <CloseCircleOutlined style={{color:`${theme.colors.red}`}} />} */}
                  </p>
                </>
          })}
         </Content>
    </ResultsContainer>
  )
}

export default Results