import styled from 'styled-components';

export const Container = styled.div`
  background: #e5e5e5;
  height:100vh;
  color:rgba(17, 59, 99, 0.8);

  font-family: "Poppins";
`;
export const Title = styled.div`
  h1{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      color: #113B63;
      padding: 3.5rem 0 2rem 0;
  }
`;
export const Modal = styled.div`

  padding:1.5rem 0 0 2rem;
  background: #fff;
  height:20rem;
  width: 45rem;
  align-items: center;
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
    form{
       display: flex;
       flex-direction: row;
       margin-top: 10rem;
       margin-left: -34rem;
    }
  }

`;

export const ButtonsFooter = styled.div`
   display: flex;
   gap:2rem;

 button{
          font-family: "Poppins";
          width: 9rem;
          height: 3rem;
          font-size: 1rem;
          font-weight: 550;
       
          border-radius: 5px ;
         
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
          background-color: #FFFFFF;
          margin-top: 3.5rem;

          border: 1px solid rgba(0, 0, 0, 0.2);
          
          & + button {
             background-color: rgba(92, 95, 254, 1);
             color: rgba(255, 255, 255, 1);
             border: none;
          }
       }
`;