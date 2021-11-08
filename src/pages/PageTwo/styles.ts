import styled from 'styled-components'


export const Container = styled.div `
   
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: #E5E5E5;
   height:100vh;

   overflow-y: auto;
`;


export const Title = styled.div`
 h1{
      margin-left: -33rem;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      color: #113B63;
      padding: 18rem 0 2rem 0;
   }
     
`

export const ButtonsFooter = styled.div`
     display: flex;
     gap: 2rem;
     margin-left: -45rem;
     margin-bottom: 5rem;


     button{

          font-family: "Poppins";
          font-weight: 500;  
          width: 9rem;
          height: 3rem;
          font-size: 1rem;
       
          border-radius: 5px ;
         
          cursor: pointer;
          background-color: #FFFFFF;
          margin-top: 3.5rem;

          color: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.2);
          
          & + button {
             background-color: #5C5FFE;
             background: rgba(92, 95, 254, 0.2);
             color: #5C5FFE;
             border: none;
             opacity: 100%;
          }
       }
`

export const NewModal = styled.div`
  padding:1.5rem 0 0 2rem;
  background: #fff;
  height:35rem;
  width: 45rem;
  align-items: center;
  margin-left: -21rem;
  border-radius: 15px;
 

  h1{
     font-size:1.5rem;
      font-family: "Poppins";
      font-weight: 500;
   }
  .container{
   display:flex;
   gap:5rem;

   h2{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 1.2rem;
      padding-top: 2rem;
    }
  }
`;

export const Produtos = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    gap: 1.5rem;

    font-family: "Poppins";
    margin-left: 0.125rem;
    margin-top: -2rem;

   a{
      text-decoration: none;
   }
    p{ 
       color: var(--color-button);
       font-size: 0.85rem;
       margin-left: 25rem;
       padding-left: 7rem;
       cursor: pointer;
      
     }

     
    h1{
       margin-top: 3rem;
       font-size: 1.5rem;
       padding-bottom: 1rem;
       color: #113B63;
    }

    h2{color: #113B63;
       font-weight: 500;
    }


    button{
       width: 6rem;
       height: 2.5rem;
       font-weight: 600;
       cursor: pointer;
      
       background-color: #5C5FFE;
       color: #5C5FFE;
       background: rgba(92, 95, 254, 0.1);
       border: 1.5px solid rgba(92, 95, 254, 0.4);
       box-sizing: border-box;
       border-radius: 10px;

       &.btnlink{
          font-weight: 500;
          padding-left: 29.325rem;
          background: none;
          cursor: pointer;
          border: none;
          color: #5C5FFE;
          

          p{ 
             font-size: 0.85rem;
          }
       }

       &.btnlink2{
         font-weight: 700;
         padding-left: 31rem;
          background: none;
          cursor: pointer;
          border: none;
          color: #5C5FFE;

          p{   
             font-size: 0.85rem;
             
          }
       }
    }
`

export const Aviso = styled.div `
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: #F2994A;
   background: rgba(242, 153, 74, 0.1);
   border-radius: 10px;
   padding: 2rem;
   color: #F2994A;
   width: 40rem;
   margin-top: 3rem;
   margin-bottom: 3rem;

   img{
      display: flex;
      margin-left: -1rem;
      margin-right: 1rem;
      width: 3rem;
   }

   a{
      font-family: "Poppins";
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 550;
   }
`


export const BtnProdutos = styled.div `
  display: flex;
  gap: 1.5rem;
  margin-top: -0.1rem;
`
