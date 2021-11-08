
import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }

  :root{
    --background-color: #FFFFFF;

    --color-button: #5C5FFE;
    --button-close: #E96379;
    --text-color: #FFFFFF;
    --color-linha: #EFEFEF;
    --text-gray: #113B63; 
    --text-black: #000000;
  
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   
    
  }

  .wizard {
    display: flex;

    width: 100%;

    animation-duration: 2s;

    > div {
      animation-duration: 2s;
      width: 100%;

      z-index: 0;
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

           background-color: #0000001A;
           color: #0000004D;
           border: 1px solid #0000001A;

           &.active {
            background-color: #FFFFFF;
            color: #5C5FFE;
            border: 1px solid #00000033;
           }
           &.actived {
            background-color: #5C5FFE;
           color: #fff;
           }
         }
    }
  }

`