import React, { useState } from 'react'

import {
  Container,
  NewModal,
  Title,
  CardsButtons,
  ButtonsFooter
} from './styles'
import { StepWizardChildProps } from 'react-step-wizard'
import 'animate.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Buttons } from './buttons'

import { ReactComponent as Desconto } from '../../assets/Desconto.svg'
import { ReactComponent as Carrinho } from '../../assets/Carrinho.svg'
import { ReactComponent as Clock } from '../../assets/Clock.svg'
import { ReactComponent as Entrega } from '../../assets/Entrega.svg'

interface Props extends Partial<StepWizardChildProps> {}

const PageOne: React.FC<Props> = Props => {
  const [startdate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [active, setActive] = useState(false)
  const [activetwo, setActivetwo] = useState(false)
  const [activethre, setActivethre] = useState(false)
  const [activefour, setActivefour] = useState(false)

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
          <h2>Data Inicial</h2>
          <a>
            <img src="/calenda.svg" />{' '}
          </a>
          <button>
            <DatePicker
              selected={startdate}
              onChange={date => setStartDate(date as Date)}
            ></DatePicker>{' '}
          </button>

          <a href="">
            <img src="/clock.svg" alt="img" />
          </a>
          <input type="time" />

          <button>
            <img src="/remove.svg" alt="" />
          </button>
        </div>

        <div>
          <h2>Data Final</h2>
          <a>
            <img src="/calenda.svg" />
          </a>
          <button>
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date as Date)}
            ></DatePicker>{' '}
          </button>

          <a href="">
            <img src="/clock.svg" alt="img" />
          </a>
          <input type="time" />

          <button>
            <img src="/remove.svg" alt="" />
          </button>
        </div>
      </NewModal>

      {/* Adicionando o map no CardButtons Falta Adicionar IsActived */}
      <div>
        {Buttons.ButtonsCards.map(() => (
          <CardsButtons>
            <button
              onClick={() => {
                setActive(true)
                if (active == true) {
                  setActive(false)
                }
              }}
              className={`${active ? 'actived' : ''}`}
            >
              <Desconto />
              Compre e ganhe<p>Compre duas peças e leve a treceira de gratis</p>
            </button>
            <button
              onClick={() => {
                setActivetwo(true)
                if (activetwo == true) {
                  setActivetwo(false)
                }
              }}
              className={`${activetwo ? 'actived' : ''}`}
            >
              <Carrinho />
              Descontos Progressivos<p>Lorem ipsum, dolor sit amet</p>
            </button>
            <button
              onClick={() => {
                setActivethre(true)
                if (activethre == true) {
                  setActivethre(false)
                }
              }}
              className={`${activethre ? 'actived' : ''}`}
            >
              <Clock />
              Descontos Valor Total<p>Lorem ipsum, dolor sit amet</p>
            </button>
            <button
              onClick={() => {
                setActivefour(true)
                if (activefour == true) {
                  setActivefour(false)
                }
              }}
              className={`${activefour ? 'actived' : ''}`}
            >
              <Entrega />
              Frete Gratis<p>Lorem ipsum, dolor sit amet</p>
            </button>
          </CardsButtons>
        ))}
      </div>
      <ButtonsFooter>
        <button onClick={Props.previousStep}>Cancelar</button>
        <button className="animate__bounceInUp" onClick={Props.nextStep}>
          Avançar
        </button>
      </ButtonsFooter>
    </Container>
  )
}

export default PageOne
