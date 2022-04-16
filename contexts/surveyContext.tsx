import { createContext, useState } from "react"
import { QuestionsInterface, AnswersSelectedInterface } from "interfaces/surveyInterfaces"

export const SurveyContext = createContext({
  currentQuestion: null,
  setCurrentQuestion: null,
  surveyView: null,
  setSurveyView: null,
  questions: null,
  setQuestions: null,
  answersSelected: null,
  setAnswersSelected: null,
  checkResults: null,
  setCheckResults: null,
})

function SurveyProvider({ children }) {
  const [surveyView, setSurveyView] = useState<boolean>(false)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [questions, setQuestions] = useState<QuestionsInterface[]>([])

  const [answersSelected, setAnswersSelected] = useState<AnswersSelectedInterface[]>([])

  const [checkResults, setCheckResults] = useState<boolean>(false)

  return (
    <SurveyContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        currentQuestion,
        setCurrentQuestion,
        surveyView,
        setSurveyView,
        questions,
        setQuestions,
        answersSelected,
        setAnswersSelected,
        checkResults,
        setCheckResults,
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
}

export default SurveyProvider
