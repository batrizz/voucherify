import React from 'react'

import { Container, ButtonsFooter, Modal, Title } from './styles'

import { StepWizardChildProps } from 'react-step-wizard'

interface Props extends Partial<StepWizardChildProps> {}

const PageFour: React.FC<Props> = Props => {
  console.log(Props)
  return (
    <Container>
      <Title>
        <h1 className="oi">Criar Campanha</h1>
      </Title>
      <Modal>
        <h1>Resumo</h1>

        <div className="container">
          <div>
            <h2>Tipo</h2>
            <p>Avançado</p>

            <h2>Produtos Incluidos</h2>
            <p> 10 </p>
          </div>

          <div>
            <h2>Contagem de regras</h2>
            <p> 3 </p>

            <div>
              <h2>Produtos Fora</h2>
              <p> 5 </p>
            </div>
          </div>
        <form>
          <div>
            <h2>Contexto</h2>
            <p>Uso Geral</p>
          </div>
          </form>
        </div>
      </Modal>
      <ButtonsFooter>
        <button onClick={Props.previousStep}>Voltar</button>
        <button onClick={Props.nextStep}>Salvar</button>
      </ButtonsFooter>
    </Container>
  )
}

export default PageFour
