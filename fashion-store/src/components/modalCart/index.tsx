import { TitleThree } from "../typography";
import { StyledDivModal, StyledModal } from "./style";
import CloseModalButton from "../../assets/close_button.svg"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const ModalCart = () => {
    const {setIsCartModalOpen, cartList} = useContext(UserContext)
  return (
    <StyledModal role="dialog">
      <StyledDivModal>
       <header>
            <TitleThree>CARRINHO</TitleThree>
            <img src ={CloseModalButton} onClick={() => setIsCartModalOpen(false)}/>
        </header>   
        <section>
            <ul>
                {cartList.map((product) => {
                  return  <h1>Oi</h1>
                })}
            </ul>
        </section>
      </StyledDivModal>
    </StyledModal>
  );
};