import React, { useContext, useEffect } from 'react'
import Web3 from "web3"
import token from "tokens/QUIZ.json"
import { SurveyContext } from "contexts/surveyContext"
import { AppContext } from "contexts/appContext"
import submit from "services/submitAnswers.service"
import getContract from "services/getContract.service"
import generateId from "services/generateId.service"
import getBalance from "services/getBalance.service"
import theme from "theme/index"
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
    setBalance,
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
    const ABI = await getContract(token.address)
    const parsedABI = JSON.parse(ABI.result)
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3001/');
    const contract = new web3.eth.Contract(parsedABI, token.address)
    
    const id = generateId(5)
    
    const answers = answersSelected.map((answer: AnswersSelectedInterface) => `${answer.answer_id}`)

    submit(contract, id, answers, account[0])
      .then(async (res: any) => {
        const newBalance = await getBalance(token.address, account[0])
        const divide = 100000000000000000
        setBalance(newBalance.result / (10 * divide))
      })
      .catch((err: any) => {
        console.log("Transaction Denied", err)
        location.reload()
      })
  }


  return (
    <ResultsContainer>
      <Title>Results:</Title>
         <Content>
           {answersSelected.map((answer: AnswersSelectedInterface) =>
              <Answer key={answer.answer_id}>
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