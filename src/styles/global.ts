
import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }

  :root{
    
  }

  .wizard {
    display: flex;

    width: 100%;

    > div {
      width: 100%;
    }

    .nav {
      background-color: #E5E5E5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-width: 15rem;
      
     
        
         button{
           font-family: "Poppins";
           font-size: 1rem ;
           font-weight: 700;
           margin-left: 5rem;
           display:flex;
           justify-content: center;
           flex-direction: column;
           align-items: center;

           width: 4rem;
           height: 4rem;
           border-radius: 50px;

           background-color: #FFFFFF;
           color: #5C5FFE;
           border: none;

           
         }
    }
  }

`