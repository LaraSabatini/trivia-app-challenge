import React, { useContext, useEffect } from 'react'
import { SurveyContext } from "contexts/surveyContext"
import { AppContext } from "contexts/appContext"
import getBalance from "services/getBalance.service"
import theme from "theme/index"
import token from "tokens/QUIZ.json"
import { QuestionsInterface, AnswersSelectedInterface } from "interfaces/surveyInterfaces"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { ResultsContainer, Content, Send, Answer } from "./styles"
import { Title } from "../QuestionContainer/styles"

const Results = () => {
  const {
    checkResults,
    questions,
    answersSelected,
    setAnswersSelected,
  } = useContext(SurveyContext)

  const {
    account,
  } = useContext(AppContext)

  const checkIfAllQuestionsHaveBeenAnswered = () => {
    if (questions.length !== answersSelected.length) {
      const idsOfQuestions = questions.map((question: QuestionsInterface) => question.id)
        const idsOfAnswers = answersSelected.map((answer: AnswersSelectedInterface) => answer.question_id)
        const answersToAdd = idsOfQuestions.filter((id: number) => !idsOfAnswers.includes(id))

        const newArrayOfAnswers = answersSelected
        for (let i = 0; i < answersToAdd.length; i++) {
            newArrayOfAnswers.push({
              question_id: answersToAdd[i],
              answer_id: 0,
              value: false,
              text: "Without answer"
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

  const sendResults = async () => {
    // console.log("enviando")
    const res = await getBalance(token.address, account[0])
    // setBalance(res.result)
    console.log(res)
    
  }


  return (
    <ResultsContainer>
      <Title>Results:</Title>
         <Content>
           {answersSelected.map((answer: AnswersSelectedInterface) =>
              <Answer>
                {answer.value ? <CheckCircleOutlined style={{ color: `${theme.colors.green}` }} /> : <CloseCircleOutlined style={{ color: `${theme.colors.red}` }} />}
                <p>
                  {answer.text}
                </p>
              </Answer>
            )}
         </Content>
         <Send type="button" onClick={sendResults}>SUBMIT</Send>
    </ResultsContainer>
  )
}

export default Results