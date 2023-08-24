import { Paragraph, TitleThree } from "../typography";
import { StyledDivModal, StyledHeaderModal, StyledModal, StyledProductList, StyledProductTotal } from "./style";
import CloseModalButton from "../../assets/close_button.svg"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartProductCard } from './../cartProductCard/index';

export const ModalCart = () => {
  const {setIsCartModalOpen, cartList} = useContext(UserContext)
  
  const productsTotal = cartList.reduce((acc, product) => {
    return acc + Number(product.price)
  }, 0)

  const formattedPrice = productsTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
        <StyledProductTotal>
          <Paragraph>TOTAL <span>{formattedPrice}</span></Paragraph>
        </StyledProductTotal>
      </StyledDivModal>
    </StyledModal>
  );
};