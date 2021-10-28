import styled from 'styled-components'


export const Container = styled.div `
  
   display: flex;
   justify-content: center;
   align-items: center;

   height: 100vh;
   background-color: #E5E5E5;

   margin-left: -25rem;

    
   section{
      margin-top: 1rem;
   }

   form{
      display: flex;
      align-items: center;
      justify-content: space-around;
      
      
   }
    
    ul{
       

      
    }
`;

export const Input = styled.div `
          font-size: 1rem;
          border: none;
          border-bottom: 2px solid #5C5FFE;
          width: 20rem;
`;

export const Modal = styled.div `
   width: 40rem;
   height: 10rem;
   border-radius: 15px;
   background-color: #FFFFFF;
   margin-left: 1rem;

   h2{
      font-size: 1.5rem;
   }
`

export const Title = styled.div`
   font-size: 1.5rem;
   margin-left: 1rem;
   
   h1{
      margin-bottom: 2rem;
      margin-left: -3rem;
   }

   
`;


export const CardsButtons = styled.div `
      display: flex;
      margin: 5rem;
      align-items: center;
      justify-content: space-around;

      a{
         background-color: black;
         width: 5rem;
         height: 5rem;
      }
      
`;

export const ButtonsFooter = styled.div`
     button{
          width: 7rem;
          height: 2rem;
          font-size: 1rem;
          margin: 0 15px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          color: #000000;
          background-color: #FFFFFF;

          & + button {
             background-color: #5C5FFE;
             background: rgba(92, 95, 254, 0.2);
             color: #5C5FFE;
          }
       }
`

