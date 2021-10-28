import React from 'react';

import { Container, Modal, Title, CardsButtons, ButtonsFooter } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> { }

const PageOne: React.FC<Props> = (Props) => {
  console.log(Props)
  return (
    
      <Container>
        <section>

          <Title>
          <h1 className="oi">Criar Campanha</h1>
          <input type="text" placeholder="Nome" />
          </Title>
        </section>

        <Modal>
          <div className="Date">
            <h2 >Data Inicial</h2>
            <button><img src="/calenda.svg" alt="img" /></button>
            <input type="text" />

            <a href=""><img src="/clock.svg" alt="img" /></a>
            <input type="text" />

            <button><img src="/remove.svg" alt="" /></button>
          </div>

          <div>
            <h2>Data Final</h2>
            <button><img src="/calenda.svg" alt="img" /></button>
            <input type="text" />

            <a href=""><img src="/clock.svg" alt="img" /></a>
            <input type="text" />

            <button><img src="/remove.svg" alt="" /></button>
          </div>
          </Modal>


          <CardsButtons>
            <button className="actived"><img src="/desconto.svg"/>Compre e ganhe<p>Compre duas peças e leve a treceira de gratis, leve a treceira de gratis</p></button>
            <button><img src="/NewClock.svg"/>Descontos Progressivos<p>Lorem ipsum, dolor sit amet, leve a treceira de gratis, leve a treceira de gratis</p></button>
            <button><img src="/Carrinho.svg" />Desconto Valor Total <p>Lorem ipsum, dolor sit amet, leve a treceira de gratis, leve a treceira de gratis</p></button>
            <button><img src="/entrega.svg" />Frete Gratis<p>Lorem ipsum, dolor sit amet,leve a treceira de gratis, </p></button>
          </CardsButtons>


        <ButtonsFooter>
          <button onClick={Props.previousStep}>Cancelar</button>
          <button onClick={Props.nextStep}>Avançar</button>
          </ButtonsFooter>
       

      </Container>
  
  )
}

export default PageOne
