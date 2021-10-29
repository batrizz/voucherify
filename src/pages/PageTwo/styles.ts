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
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      margin-bottom: 2rem;
      margin-left: -34rem;
      padding-top: 15rem;
   }
     
`

export const ButtonsFooter = styled.div`

     display: flex;
     gap: 2rem;
     margin-left: -45rem;
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

          border: none;
          
          & + button {
             background-color: #5C5FFE;
             background: rgba(92, 95, 254, 0.2);
             color: #5C5FFE;
             border: none;
          }
       }
`

export const Modal = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   align-items: center;
   background-color: #FFFFFF;

   width: 55rem;
   height: 55rem;
   border-radius: 1px;

   margin-left: -10rem;
   border-radius: 15px;
 

   h1{
      font-family: "Poppins";
      font-weight: 400;
   }

   h2{
      font-family: "Poppins";
      font-weight: 300;
      font-size: 1rem;
    }

`

export const Produtos = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 1.5rem;

    font-family: "Poppins";
    font-weight: 200;
    margin-left: 1rem;
    margin-top: -2rem;

   a{
      text-decoration: none;
   }
    p{ 
       font-size: 0.85rem;
       margin-left: 25rem;
       padding-left: 18rem;
      
     }

     
    h1{
       margin-top: 3rem;
       font-size: 1.5rem;
       font-weight: 500;
       padding-bottom: 1rem;
       color: #113B63;
    }

    h2{color: #113B63;
       font-weight: 500;
    }


    button{
       width: 6rem;
       height: 2.5rem;
       font-weight: 950;
       cursor: pointer;
      
       background-color: #5C5FFE;
       color: #5C5FFE;
       background: rgba(92, 95, 254, 0.1);
       border: 2px solid rgba(92, 95, 254, 0.4);
       box-sizing: border-box;
       border-radius: 10px;

       &.btnlink{
          font-weight: 700;
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
   width: 52rem;
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
      font-size: 1.2rem;
      font-weight: 550;
   }
`

export const Options = styled.div `

`

export const BtnProdutos = styled.div `
  display: flex;
  gap: 1rem;
  margin-top: -0.1rem;
`
