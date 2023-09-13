import React from 'react'
import { CardBody, ContainerCover, DrawContainer, DrawTitle } from './style'

const DrawCard = ({draw}) => {
  return (
    <DrawContainer>
        <ContainerCover img={draw.linkImg} />
        <CardBody>
          <DrawTitle>
            {draw.title}
          </DrawTitle>
        </CardBody>
    </DrawContainer>
  )
}

export default DrawCard