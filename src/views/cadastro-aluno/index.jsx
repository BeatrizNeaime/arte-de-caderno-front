import React from 'react'
import { ContentContainer, ImgContainer, PageContainer } from '../../styles/sharedStyles'
import NavBoot from '../../Components/Navbar'
import FormCadastroEstudante from '../../Components/FormCadastroEstudante'

const CadastroAlunoView = ({user}) => {
  return (
    <PageContainer>
        <ImgContainer img={require('../../assets/img/op-background.png')} >
            <NavBoot/>
            <ContentContainer>
                <FormCadastroEstudante user={user} />
            </ContentContainer>
        </ImgContainer>
    </PageContainer>
  )
}

export default CadastroAlunoView