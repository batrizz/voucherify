import styled from 'styled-components'


export const Container = styled.div `
  
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;
 

   height: 100vh;
   padding: 2rem;
   background-color: #E5E5E5;

   
   overflow-y: auto;
`;

export const Title = styled.div`
   margin-left: 1rem;

   h1{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      margin-bottom: 2rem;
      margin-left: -2rem;
      margin-top: 15rem;
   }
  input{
   font-family: "Poppins";
   font-size: 1.5rem;
   font-weight: 200; 
   border: none;
          
   border-bottom: 2px solid #5C5FFE;
   width: 22rem;
   margin-bottom: 2rem;
   background-color: #E5E5E5;

   outline: none;
  }   
`;


export const NewModal = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1.5rem;

   width: 45rem;
  
   border-radius: 15px;
   background-color: #FFFFFF;
   padding: 2rem;
   padding-bottom: 2.5rem;

   h2{
      font-size: 1.5rem;
      font-family: "Poppins";
       font-weight: 400;
       margin-bottom:2rem;
   }

   input{
      font-family: "Poppins";
          font-size: 1rem;
          font-weight: 400;
          border: none;
          outline: none;
          
          border-bottom: 2px solid #5C5FFE;
   }

   button{
      border: none;
      background: none;
      cursor: pointer;
   }

   input{
      width: 15rem;
   }

  

`


export const CardsButtons = styled.div`
      width: 45rem;
      display: flex;
      margin-top: 1.5rem;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;

      button{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         font-family: "Poppins";
         color: white;
         background-color: #FFFFFF;
         color: #113B63;
         width: 12.5rem;
         height: 12.25rem;
         padding: 0.95rem;
         border-radius: 15px;
         font-size: 0.85rem;
         border: none;
         cursor: pointer;

         &.actived {
            background-color: #5C5FFE;
            color: #FFFFFF;

            
         }
      } 

      p{
         font-size: 0.6rem;
      }
`;


export const ButtonsFooter = styled.div`

     display: flex;
     gap: 2rem;
     button{
        
          width: 9rem;
          height: 3rem;
          font-size: 1rem;
       
          border-radius: 3px;
          border: none;
          cursor: pointer;
          color: #000000;
          background-color: #FFFFFF;
          margin-top: 3.5rem;

          & + button {
             background-color: #5C5FFE;
             background: rgba(92, 95, 254, 0.2);
             color: #5C5FFE;
          }
       }
`

