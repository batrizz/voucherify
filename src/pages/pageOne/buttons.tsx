
import { CardsButtons } from  "./styles"
import Desconto from "../../assets/Desconto.svg"
import Carrinho from "../../assets/Carrinho.svg"
import Clock from "../../assets/Clock.svg"
import Entrega from "../../assets/Entrega.svg"

export  const  Buttons = {
     ButtonsCards: [
            <CardsButtons>
            '<button className="actived"><Desconto />Compre e ganhe<p>Compre duas peças e leve a treceira de gratis</p></button>',
            '<button><Clock />Descontos Progressivos<p>Lorem ipsum, dolor sit amet</p></button>',
            '<button><Carrinho />Descontos Valor Total<p>Lorem ipsum, dolor sit amet</p></button>',
            '<button><Entrega />Frete Gratis<p>Lorem ipsum, dolor sit amet</p></button>',
          </CardsButtons>
      ]
    }
