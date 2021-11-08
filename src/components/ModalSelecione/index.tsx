

import { Container, Hr, ButtonsFooter, Selected } from "./styles";
import Modal from "react-modal";
import { StepWizardChildProps } from 'react-step-wizard';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {data, customStyles} from '../CustomStyles/data'


interface Props {
  modalIsOpenSelect: boolean;
  closeModalSelect(): void;
}

interface Props extends Partial<StepWizardChildProps> { }

function ModalSelecione(props: Props) {

  const animatedComponents = makeAnimated();
  
  return (
    <Modal
      isOpen={props.modalIsOpenSelect}
      onRequestClose={props.closeModalSelect}
      overlayClassName="overlay"
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <div className="topo">
          <button onClick={props.closeModalSelect} >Todos os produtos</button>
          <button className="btn2">Selecione coleção</button>

          <button onClick={props.closeModalSelect}>X</button>
        </div>

        <Hr />
        <Selected>
          <h2>Selecione uma coleção</h2>
          <label>coleção</label>
          <div>
            <Select 
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={data}
            />
          </div>
        </Selected>
        <Hr />
        <ButtonsFooter>
          <button onClick={props.closeModalSelect} >Cancelar</button>
          <button>Selecionado</button>
        </ButtonsFooter>
      </Container>
    </Modal>

    
  );
}


export default ModalSelecione;
