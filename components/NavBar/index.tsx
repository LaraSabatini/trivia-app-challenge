import React, {useContext} from 'react'
import { PlainContentContext } from "contexts/plainContentContext"
import { Navigation, Title, ImageContainer } from "./styles"

const NavBar = () => {
  const { plainContent } = useContext(PlainContentContext)
  
  return (
    <Navigation>
      <ImageContainer>
        <img src={plainContent?.image} alt="Logo" />
      </ImageContainer>
      <Title>{plainContent?.title}</Title>
    </Navigation>
  )
}

export default NavBar