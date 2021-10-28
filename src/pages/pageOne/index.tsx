import React from 'react';

import { Container, Input, Modal, Title, CardsButtons, ButtonsFooter } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> { }

const PageOne: React.FC<Props> = (Props) => {
  console.log(Props)
  return (
    
      <Container>
        <section>

          <Title>
          <h1 className="oi">Criar Campanha</h1>
          <Input  placeholder="Nome">Nome</Input>

          </Title>
        <section>

        <Modal>
          <div>
            <h2 >Data Inicial</h2>
            <a><img src="" alt="img" /></a>
            <input type="text" />

            <a href=""><img src="" alt="img" /></a>
            <input type="text" />

            <button>remove</button>
          </div>

          <div>
            <h2>Data Final</h2>
            <a><img src="" alt="img" /></a>
            <input type="text" />

            <a href=""><img src="" alt="img" /></a>
            <input type="text" />

            <button>remove</button>
          </div>
          </Modal>

        </section>


          <CardsButtons>
          <a><img src="" alt="" /></a>
          <a><img src="" alt="" /></a>
          <a><img src="" alt="" /></a>
          <a><img src="" alt="" /></a>
          </CardsButtons>


        <ButtonsFooter>
          <button onClick={Props.previousStep}>Cancelar</button>
          <button onClick={Props.nextStep}>Avançar</button>
          </ButtonsFooter>
        </section>
       

      </Container>
  
  )
}

export default PageOne
