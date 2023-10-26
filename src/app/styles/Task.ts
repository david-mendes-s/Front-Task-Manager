import styled from "styled-components";


export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);

   gap: 10px;
   padding: 20px;
`;

export const Task = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    background: #0e0a20;
    
    /* color: #585D62; */
    color: #fff;
    width: 100%;
    max-width: 300px;   
    height: 350px;

    padding: 10px 0px;

    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

   
`;

export const ContentTask = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 15px;
    
`;

export const Title = styled.h3`
        width: 100%;
    
        font-weight: 600;
        font-size: 22px;
        color: #fff;
    
`;

export const GroupButton = styled.div`
    display: flex;
    gap: 10px;
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;



export const AddTodoList = styled.div`

    margin-top: 10px;
    padding: 10px 15px;
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;

    div {
        border-radius: 8px;
        border: 1px solid #585D62;
        width: 100%;
        height: 40px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        
        padding: 0px 15px;

        input {
            width: 100%;
            height: 40px;
            color: #fff;
            
            border: 0;
            outline: 0;
            background: transparent;
            
            &::placeholder {
                color: #585D62;
                font-size: 14px;
            }

            margin-right: 12px;
        
        }

        button{
            background: transparent;
            border: 0;
            cursor: pointer;
            
        }
    }
`;


export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 300px;
    border-radius: 8px 8px 0 0;
    padding: 0px 15px;

    position: fixed;
    z-index: 100;
    bottom: 0;

    background: #325BFF;

    div {
        margin-top: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input {
        width: 100%;
        height: 40px;
        color: #fff;
        border: 0;
        outline: 0;
        background: transparent;
        
        &::placeholder {
            color: #fff;
            font-size: 14px;
        }
    
    }

    button{
        background: #325BFF;
        border: 0;
        cursor: pointer;
    }

    
`

export const TodoList = styled.div`
    margin-top: 30px;
    padding: 0px;
    width: 90%;

    height: 180px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px; /* Largura da barra de rolagem */
      }

      /* Estilizando o trilho da barra de rolagem */
      &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Cor de fundo do trilho */
      }

      /* Estilizando o polegar da barra de rolagem */
      &::-webkit-scrollbar-thumb {
        background-color: #325BFF; /* Cor do polegar */
        border-radius: 5px;
      }

      /* Estilizando o polegar da barra de rolagem quando houver hover */
      &::-webkit-scrollbar-thumb:hover {
        background-color: #5237E9; /* Cor do polegar ao passar o mouse */
      }
    
`;

export const Description = styled.div`
    padding: 0px 15px;
    width: 100%;
    font-size: 12px;
    color: #585D62;

`;

export const Text = styled.p`
    width: 90%;
    margin-left: 15px;

    
`;

export const InputSubTask = styled.input`
  
`;

export const SubTask = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 14px;
    cursor: pointer;
    

    p.active {
        text-decoration: line-through;
        
    }

    div.active {
        background: #eaeaea;

        div {
            border: 2px solid #080519;
            background: #fff;
        }
    }

`;

export const Item = styled.div`
    border: 1px solid #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;

   div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    
   }
`;

export const ContainerModal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    width: 100%;
    /* background: red; */
    color: #585D62;
    padding-right: 20px;
    

    h3 {
        font-size: 32px;
    }

    p {
        font-size: 14px;
    }

    ul {
        list-style: none;
        margin-top: 24px;
        border: 1px solid #eaeaea;
        border-radius: 8px;
        padding: 20px;

        height: 180px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 5px; /* Largura da barra de rolagem */
        }

      /* Estilizando o trilho da barra de rolagem */
      &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Cor de fundo do trilho */
      }

      /* Estilizando o polegar da barra de rolagem */
      &::-webkit-scrollbar-thumb {
        background-color: #325BFF; /* Cor do polegar */
        border-radius: 5px;
      }

      /* Estilizando o polegar da barra de rolagem quando houver hover */
      &::-webkit-scrollbar-thumb:hover {
        background-color: #5237E9; /* Cor do polegar ao passar o mouse */
      }

        li {
            display: flex;
            align-items: center;
            margin-top: 8px;
            cursor: pointer;

            p.activeDark {
                text-decoration: line-through;
            }

            div.activeDark {
                background: #585D62;
            }

            div{ 
                border: 1px solid #585D62;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                padding: 0;
            }

            p{
                width: 90%;
                margin-left: 8px;
            }
        }
    }

    div.addItem {
        display: flex;
        align-items: center;
        padding: 5px 10px;

        border: 1px solid #eaeaea;
        border-radius: 6px;

        margin-top: 12px;
        width: 100%;

        input{
            width: 100%;
            padding: 5px;
            border: 0;
        }

        button {
            background: transparent;
            border: 0;
            cursor: pointer;
            margin-top: 5px;
        }
    }
  }

  
`;

export const Form = styled.div`
     width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-left: 1px solid #eaeaea;

    padding: 20px;

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        margin-bottom: 10px;
    }

    button {
        width: 100%;
        background: #325BFF;
        border: 0;
        cursor: pointer;
        padding: 10px;
        border-radius: 6px;
        font-weight: 600;
        color: #fff;
    }

`

export const CloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: 0;
    cursor: pointer;
`;