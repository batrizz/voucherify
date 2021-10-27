import React from 'react';

import { Container } from "./styles"

import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> { }

const PageOne: React.FC<Props> = (Props) => {
  console.log(Props)
  return (
    
      <Container>
        <section>
          <h1 className={`oi`}>Criar Campanha</h1>
          <input type="text" placeholder="Nome"></input>

          <div>
            <h2 className="dfsdf">Data Inicial</h2>
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

          <form>
            <div>
              <h2>Compre e ganhe</h2>
              <p>Compre duas peças e leve a terceira de graça</p>
            </div>

            <div>
              <img src="" alt="img" />
              <h2>Compre e ganhe</h2>
              <p>Compre duas peças e leve a terceira de graça</p>
            </div>

            <div>
              <img src="" alt="img" />
              <h2>Compre e ganhe</h2>
              <p>Compre duas peças e leve a terceira de graça</p>
            </div>

            <div>
              <img src="" alt="img" />
              <h2>Compre e ganhe</h2>
              <p>Compre duas peças e leve a terceira de graça</p>
            </div>
          </form>


          <button onClick={Props.previousStep}>Voltar</button>
        <button onClick={Props.nextStep}>Avançar</button>
        </section>
       

      </Container>
  
  )
}

export default PageOne
