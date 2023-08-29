import React from 'react'
import { SpotlightAuthor, SpotlightInfoContainer } from '.'

const Info = ({nome, edicao}) => {
  return (
    <SpotlightInfoContainer>
        <SpotlightAuthor>
            Autor: <b>{nome}</b>
        </SpotlightAuthor>
        <SpotlightAuthor>
            Edição: <b>{edicao}</b>
        </SpotlightAuthor>
    </SpotlightInfoContainer>
  )
}

export default Info