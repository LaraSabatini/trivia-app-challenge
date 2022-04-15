/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useEffect, useContext, useState } from "react"
import { PlainContentContext } from "contexts/plainContentContext"
import { SurveyContext } from "contexts/surveyContext"
import { AnswerInterface } from "interfaces/surveyInterfaces"
import Results from "components/ResultsCard"
import {
  Card,
  CardContainer,
  Title,
  ImageContainer,
  LeftContainer,
  OptionsContainer,
  Option,
  Timer,
} from "./styles"

function QuestionContainer() {
  const {
    setQuestions,
    questions,
    answersSelected,
    setCurrentQuestion,
    currentQuestion,
    setAnswersSelected,
    setCheckResults,
  } = useContext(SurveyContext)
  const { plainContent } = useContext(PlainContentContext)
  const [answered, setAnswered] = useState<boolean>(false)
  const [renderTime, setRenderTime] = useState<string>("")
  const [idsSelected, setIdsSelected] = useState<number[]>([])

  useEffect(() => {
    setQuestions(plainContent.questions)
    setCurrentQuestion(0)
    setAnswered(false)
    setCheckResults(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectAnswer = (answer: AnswerInterface) => {
    if (!answered) {
      setAnswersSelected([
        ...answersSelected,
        {
          question_id: questions[currentQuestion].id,
          answer_id: answer.id,
          value: answer.value,
          text: answer.text
        },
      ])
      setIdsSelected([...idsSelected, answer.id])
    }
    setAnswered(true)
  }

  useEffect(() => {
    if (questions.length > 0 && currentQuestion < questions.length) {
      setAnswered(false)
      let time = questions[currentQuestion].lifetimeSeconds
      const updateCountDown = setInterval(() => {
        time--
        if (time < 0 && currentQuestion < questions.length) {
          setCurrentQuestion(currentQuestion + 1)
          const newTime = currentQuestion + 1
          time = newTime
          clearInterval(updateCountDown)
        } else {
          setRenderTime(`${time}`)
        }
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, currentQuestion])

  useEffect(() => {
     if (currentQuestion === questions.length) {
       setCheckResults(true)
     }
  }, [currentQuestion])

  return (
    <CardContainer>
      {currentQuestion <= questions.length - 1 ? (
        <Card>
          <LeftContainer>
            {questions.length > 0 && (
              <Title>{questions[currentQuestion].text}</Title>
            )}
            <OptionsContainer>
              {questions.length > 0 &&
                questions[currentQuestion].options.map(
                  (answer: AnswerInterface) => (
                    <Option
                      key={answer.id}
                      onClick={() => selectAnswer(answer)}
                      isCorrect={answer.value}
                      answered={answered}
                      selected={idsSelected.indexOf(answer.id) !== -1}
                    >
                      {answer.text}
                    </Option>
                  ),
                )}
            </OptionsContainer>
            <Timer>
              <p>
                Time left:
                <span>{renderTime}</span>
              </p>
            </Timer>
          </LeftContainer>
          <ImageContainer>
            <img
              alt={questions[currentQuestion].text}
              src={questions[currentQuestion].image}
            />
          </ImageContainer>
        </Card>
      ) : (
        <Results/>
      )}
    </CardContainer>
  )
}

export default QuestionContainer
