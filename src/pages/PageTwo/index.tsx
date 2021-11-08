import React, { useState } from 'react';
import ModalComponent from "../../components/Modelo/Modal"

import { Container, ButtonsFooter, NewModal, Produtos, Aviso, Title, BtnProdutos} from "./styles"
import { StepWizardChildProps } from 'react-step-wizard';

interface Props extends Partial<StepWizardChildProps> { }

const PageTwo: React.FC<Props> = (Props) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  } 
  
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>  

      <Title>
        <h1 >Criar Campanha</h1>
         </Title>
       <NewModal>

         <Produtos>
         <h1>Adicionar/excluir produtos</h1>
         <div className="btngap">
            <h2>Desconto</h2>
            <p onClick={openModal}>Adiconar Produtos</p>
           <BtnProdutos>
            <button>Produto 1</button>
            <button>Produto 2</button>
            </BtnProdutos>
          </div>

          <div>
            <h2>Excluir</h2>
            <p onClick={openModal}>Adiconar Produtos</p> 
            <BtnProdutos>
            <button>Produto 3</button>
            <button>Produto 4</button>
            </BtnProdutos>
        
          </div>
          </Produtos>
          <Aviso>
           <a><img src="aviso.svg"/>A regra dos produtos excluídos tem prioridade sobre a regra dos produtos incluídos. Se a coleção excluída contiver itens incluídos,
            então um desconto não será concedido a esses itens.</a>
          </Aviso>    
       </NewModal>

        <ButtonsFooter> 
         <button onClick={Props.previousStep}>Voltar</button> 
         <button onClick={Props.nextStep}>Avançar</button> 
       </ButtonsFooter> 
    
       <ModalComponent  modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </Container >
  )
}

export default PageTwo