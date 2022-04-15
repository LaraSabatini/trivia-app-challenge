import styled from "styled-components"
import theme from "theme/index"

const ResultsContainer = styled.div`
  background-color: ${theme.colors.white};
  width: 30%;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export {
    ResultsContainer,
    Content,
}
