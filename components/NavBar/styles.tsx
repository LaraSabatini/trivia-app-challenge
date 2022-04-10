import styled from "styled-components"
import theme from "theme/index"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  padding: 30px;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-end;
  @media screen and (max-width: 730px) {
    gap: 10px;
  }
`

const Title = styled.h1`
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.title};
  margin: 0;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`

const ImageContainer = styled.div`
  width: 112px;
  height: 112px;
  background: ${theme.colors.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 450px) {
    width: 35px;
    height: 35px;
  }
`

const Connect = styled.button`
  border-radius: 5px;
  outline: none;
  background: ${theme.colors.orange_light};
  font-family: ${theme.fontFamily};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${theme.colors.orange};
  }

  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin: 0;
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    img {
      width: 28px;
      height: 28px;
    }
    padding: 5px 10px;
    p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 410px) {
    p {
      display: none;
    }
  }
`

export { Navigation, Title, ImageContainer, LogoContainer, Connect }
