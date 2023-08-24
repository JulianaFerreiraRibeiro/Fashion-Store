import { Paragraph, TitleThree } from "../typography";
import { StyledDivModal, StyledHeaderModal, StyledModal, StyledProductList } from "./style";
import CloseModalButton from "../../assets/close_button.svg"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartProductCard } from './../cartProductCard/index';

export const ModalCart = () => {
    const {setIsCartModalOpen, cartList} = useContext(UserContext)
  return (
    <StyledModal role="dialog">
      <StyledDivModal>
       <StyledHeaderModal>
            <TitleThree>CARRINHO</TitleThree>
            <img src ={CloseModalButton} onClick={() => setIsCartModalOpen(false)}/>
        </StyledHeaderModal>   
        <section>
            <StyledProductList>
                {cartList.map((product) => {
                  return  <CartProductCard key = {product.id} product={product}/>
                })}
            </StyledProductList>
        </section>
        <section>
          <Paragraph>TOTAL R$0</Paragraph>
        </section>
      </StyledDivModal>
    </StyledModal>
  );
};