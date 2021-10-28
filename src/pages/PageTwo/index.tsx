import React from 'react';

import { Container, ButtonsFooter, Modal, Produtos, Aviso, Options, Title} from "./styles"
import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> { }

const PageTwo: React.FC<Props> = (Props) => {
  return (
    <Container>  
      <Title>
        <h1 >Criar Campanha</h1>
         </Title>
       <Modal>
        
         <Produtos>
         <h1>Adicionar/excluir produtos</h1>
         <div className="btngap">
            <h2>Desconto<button className="btnlink"><p>Adicionar Produto</p></button></h2>
            <button>Produto 1</button>
            <button>Produto 2</button>
          </div>

          <div>
            <h2>Excluir<button className="btnlink2"><p>Adicionar Produtos</p></button></h2>
            <button>Produto 3</button>
            <button>Produto 4</button>
        
          </div>
          </Produtos>
          <Aviso>
           <a><img src="aviso.svg"/>A regra dos produtos excluídos tem prioridade sobre a regra dos produtos incluídos. Se a coleção excluída contiver itens incluídos,
            então um desconto não será concedido a esses itens.</a>
          </Aviso>    
       </Modal>

       <ButtonsFooter>
        <button onClick={Props.previousStep}>Voltar</button>
        <button onClick={Props.nextStep}>Avançar</button>
      </ButtonsFooter>

    </Container>
  )
}

export default PageTwo