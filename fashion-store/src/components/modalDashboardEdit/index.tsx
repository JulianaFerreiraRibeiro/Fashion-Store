import { useForm } from "react-hook-form";
import { Input } from "../input";
import { StyledCreateModalForm, StyledDivModal, StyledHeaderModal, StyledModal } from "./styles";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { TitleThree } from './../typography/index';
import CloseButton from "../../assets/close_button.svg";
import EditButton from "../../assets/edit_button.svg"
import { StyledButton } from "../../styles/button";

export interface IEditProduct {
  name?: string;
  price?: string;
  image?: string;
  description?: string;
}


export const ModalDashboardEdit = () => {
  const {register, handleSubmit} = useForm()
  const {handleEditProduct, setIsModalEditOpen, editIdProduct } = useContext(AdminContext)


  const submit = async (formData: IEditProduct) => {
    if(editIdProduct?.id){
      await handleEditProduct(editIdProduct?.id, formData)
    }
  }

  return (
    <StyledModal role="dialog">
      <StyledDivModal>
          <StyledHeaderModal>
              <TitleThree>EDITAR PRODUTO</TitleThree>
              <img src = {CloseButton} alt = "X de cor preta para fechar o modal" onClick={() => setIsModalEditOpen(false)}/>
          </StyledHeaderModal>
          <StyledCreateModalForm onSubmit={handleSubmit(submit)}>
            <Input placeholder="NOME" type = "text" register={register("name")} inputsize="big" defaultValue = {editIdProduct?.name}/>
            <Input placeholder="PREÇO (R$)" type = "number" register={register("price")} inputsize="big" defaultValue={editIdProduct?.price}/>
            <Input placeholder="IMAGEM (URL)" type = "text" register={register("image")} inputsize="big" defaultValue={editIdProduct?.image} />
            <textarea placeholder="DESCRIÇÃO RESUMIDA" {...register("description")} defaultValue={editIdProduct?.description}/>
            <StyledButton buttonsize="big" buttoncolor = "black"> <img src = {EditButton} alt = "círculo branco com um sinal de + branco para adicionar produtos"/>EDITAR PRODUTO</StyledButton>
          </StyledCreateModalForm>
      </StyledDivModal>
    </StyledModal>
  );
};