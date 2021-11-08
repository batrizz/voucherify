import React, { useState } from "react";

import { Container, NewModal, Title, CardsButtons, ButtonsFooter } from "./styles"
import { StepWizardChildProps } from 'react-step-wizard';
import 'animate.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Buttons } from './buttons'



import Desconto from "../../assets/Desconto.svg"
import Carrinho from "../../assets/Carrinho.svg"
import Clock from "../../assets/Clock.svg"
import Entrega from "../../assets/Entrega.svg"



interface Props extends Partial<StepWizardChildProps> { }

const PageOne: React.FC<Props> = (Props) => {

  const [startdate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [active, setActive] = useState(false);
  const [activetwo, setActivetwo] = useState(false);
  const [activetree, setActivetree] = useState(false);
  const [activefour, setActivefour] = useState(false);
  

  return (
    <Container>
      <section>

        <Title>
          <h1 className="oi">Criar Campanha</h1>
          <input type="text" placeholder="Nome" />
        </Title>
      </section>

      <NewModal>
        <div className="Date">
          <h2 >Data Inicial</h2>
          <a><img src="/calenda.svg" /> </a>
          <button><DatePicker selected={startdate} onChange={(date) => setStartDate((date as Date))} ></DatePicker> </button>

          <a href=""><img src="/clock.svg" alt="img" /></a>
          <input type="time" />

          <button><img src="/remove.svg" alt="" /></button>
        </div>

        <div>
          <h2>Data Final</h2>
          <a><img src="/calenda.svg" /></a>
          <button><DatePicker selected={endDate} onChange={(date) => setEndDate((date as Date))} ></DatePicker> </button>

          <a href=""><img src="/clock.svg" alt="img" /></a>
          <input type="time" />

          <button><img src="/remove.svg" alt="" /></button>
        </div>
      </NewModal>

  {/* Adicionando o map no CardButtons Falta Adicionar IsActived */}
      <div>{Buttons.ButtonsCards.map(() => (
      <CardsButtons>
      <button onClick={()=> {setActive(true)}} className={`${active ? 'actived' : ''}`}><img src={Desconto} />Compre e ganhe<p>Compre duas peças e leve a treceira de gratis</p></button>
      <button onClick={()=> {setActivetwo(true)}} className={`${activetwo ? 'actived' : ''}`}><img src={Carrinho} />Descontos Progressivos<p>Lorem ipsum, dolor sit amet</p></button>
      <button onClick={()=> {setActivetree(true)}} className={`${activetree ? 'actived' : ''}`}><img src={Clock} />Descontos Valor Total<p>Lorem ipsum, dolor sit amet</p></button>
      <button onClick={()=> {setActivefour(true)}} className={`${activefour ? 'actived' : ''}`}><img src={Entrega}/>Frete Gratis<p>Lorem ipsum, dolor sit amet</p></button>
    </CardsButtons>
    ))
    }</div>
      <ButtonsFooter>
        <button  onClick={Props.previousStep}>Cancelar</button>
        <button className="animate__bounceInUp" onClick={Props.nextStep}>Avançar</button>
      </ButtonsFooter>
    </Container>
  )
}

export default PageOne
