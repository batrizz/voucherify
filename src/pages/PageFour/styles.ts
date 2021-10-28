import styled from 'styled-components'


export const Container = styled.div `

   display: flex;
   justify-content: center;
   align-items: center;

   background-color: #E5E5E5;

   height:100vh;
`;

export const ButtonsFooter = styled.div`

     display: flex;
     gap: 2rem;
     margin-left: -25rem;
     margin-bottom: 5rem;
     button{
          width: 9rem;
          height: 3rem;
          font-size: 1rem;
       
          border-radius: 5px ;
         
          cursor: pointer;
          color: #000000;
          background-color: #FFFFFF;
          margin-top: 3.5rem;

          & + button {
             background-color: #5C5FFE;
             background: rgba(92, 95, 254, 0.2);
             color: #5C5FFE;
             border: none;
          }
       }
`

export const Modal = styled.div `
   display: flex;
   justify-content: center;
   flex-direction: column;



`