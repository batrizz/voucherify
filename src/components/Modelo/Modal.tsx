
import Modal from "react-modal";

import { Container, Hr, ButtonsFooter } from "./styles";
import { StepWizardChildProps } from 'react-step-wizard';
import ModalComponentSelect from '../ModalSelecione'
import { useState } from "react";
import { customStyles } from '../CustomStyles/data'

interface Props {
  modalIsOpen: boolean;
  closeModal(): void;
}

interface Props extends Partial<StepWizardChildProps> { }

export default function Modelo(props: Props) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      overlayClassName="overlay"
      contentLabel="Example Modal"
    >
      <Container>
        <div className="topo">
          <button>Todos os produtos</button>
          <button className="btn2"
            onClick={openModal}
          >Selecione coleção</button>

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
      <ModalComponentSelect modalIsOpenSelect={modalIsOpen} closeModalSelect={closeModal} />
    </Modal>
  );
}
