import React from 'react';

import { Container, ButtonsFooter, Modal } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> {}

const PageFour: React.FC<Props> = (Props) => {
  console.log(Props)
    return(
        <Container>

          <Modal>
            <h1>Resumo</h1>

            <div>
              <h2>Tipo</h2>
              <input type="text"  placeholder="avaçado"/>

              <h2>Produtos Incluidos</h2>
              <input type="text"  placeholder="10"/>
            </div>

            <div>
              <h2>Contagem de regras</h2>
              <input type="text"  placeholder="3"/>

              <div>
              <h2>Produtos Fora</h2>
              <input type="text"  placeholder="5"/>
              </div>
             </div>

           <div>
              <h2>Contexto</h2>
              <input type="text"  placeholder="uso geral"/>
            </div>
         

           

           
       
          
            <ButtonsFooter>
          <button onClick={Props.previousStep}>Cancelar</button>
          <button onClick={Props.nextStep}>Avançar</button>
          </ButtonsFooter>

          </Modal>

         
        </Container>
    )
}

export default PageFour