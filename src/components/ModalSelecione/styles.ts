import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-color);

  p{
    font-family: "Poppins";
    font-size: 0.8rem;
    font-weight: 550;
    color: var(--text-gray);

  }

  > .topo{
    display: flex ;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    flex-direction: row;
    margin-left: 2rem;
    margin-bottom:-0.5rem ;

    button{
      width: 10rem;
      height: 2.5rem;
      background-color: var(--background-color);
      border: solid var(--color-button);
     
      border-radius: 10px;
      color: var(--text-black);
      cursor: pointer;
      font-family: "Poppins";
      font-weight: 550;
      
        & + .btn2{
          margin-left: -24rem;
          background-color: var( --color-button);
          border: solid var(--color-button);
          color: var(--text-color);
          cursor: pointer;
         
          & + button {
            width: 2.5rem;
            background-color: var(--button-close);
            color: var(--text-color);
            border: none;
            cursor: pointer;

          }
        }
     } 
  }

  form{
      display: flex;
      flex-direction: column;
      padding: 0.4rem;
      font-family: "Poppins";
      color: var(--text-gray);
      font-weight: 550;
        
      label{
        margin: 1rem;
      }
    }
`

export const Hr = styled.div`
  margin: 10px 0;
  border: 0;
	border-top: 1px solid var(--color-linha);
`
   
export const ButtonsFooter = styled.div`
   display: flex;
   gap:2rem;
   justify-content: center;
   button{
          font-family: "Poppins";
          width: 9rem;
          height: 3rem;
          font-size: 1rem;
          font-weight: 600;
       
          border-radius: 5px ;
         
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
          background-color: #FFFFFF;

          border: 1px solid rgba(0, 0, 0, 0.2);
          
          & + button {
            background: rgba(92, 95, 254, 0.2);
             color: var(--color-button);
             border: none;
          }
       }
`;   

export const Selected = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 2rem;
  flex-direction: column;
  margin-top: 2rem;
  font-family: "Poppins";
  padding-bottom: 10.7rem;


  >h2{
    font-size: 1.2rem;
    font-weight: 550;
    padding-bottom: 1.3rem;
  }

  > label {
    font-size: 1rem;
  }

  >input{
    width: 5rem;
  }
`