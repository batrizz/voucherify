import React from 'react';

import { Container } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> {}

const PageFive: React.FC<Props> = (Props) => {
  console.log(Props)
    return(
        <Container>
          <h1>Pagina Five</h1>
          <button onClick={Props.nextStep}>Avançar</button>
        </Container>
    )
}

export default PageFive