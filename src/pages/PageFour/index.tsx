import React from 'react';

import { Container } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> {}

const PageFour: React.FC<Props> = (Props) => {
  console.log(Props)
    return(
        <Container>
          <h1>Pagina Four</h1>
          <button onClick={Props.nextStep}>Avançar</button>
          <button onClick={Props.previousStep}>Voltar</button>
        </Container>
    )
}

export default PageFour