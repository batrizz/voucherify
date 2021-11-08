import { useState } from "react";
import Modal from "react-modal";

import { Container, Hr, ButtonsFooter } from "./styles";
import { StepWizardChildProps } from 'react-step-wizard';

interface Props {
  modalIsOpen: boolean;
  closeModal(): void;
}
interface Props extends Partial<StepWizardChildProps> {}

export default function Modelo(props: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "50rem",
      height: "30rem",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <div className="topo">
          <button>Todos os produtos</button>
          <button className="btn2">Selecione coleção</button>

          
            <button onClick={props.closeModal}>X</button>
        </div>
        <Hr />
        <form>
        <div><input type="checkbox" /> <label>Produto</label></div><Hr />
         <div><input type="checkbox" /> <label>Produto 1</label></div><Hr />
         <div><input type="checkbox" /> <label>Produto 2</label></div><Hr />
         <div> <input type="checkbox" /> <label>Produto 3</label></div><Hr />
         <div> <input type="checkbox" /> <label>Produto 4</label></div><Hr />
         <div><input type="checkbox" /> <label>Produto 5</label></div><Hr />
        </form>

        <div>
          <p>0 produtos selecionados</p>
        </div>
        <Hr />
        <ButtonsFooter>
          <button onClick={props.closeModal} >Cancelar</button>
          <button>Selecionado</button>
        </ButtonsFooter>
      </Container>
    </Modal>
  );
}
