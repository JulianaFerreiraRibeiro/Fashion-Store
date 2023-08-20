import { useForm } from "react-hook-form";
import { StyledButton } from "../../styles/button";
import { Input } from "../input";
import { StyledCreateModalForm, StyledDivModal, StyledHeaderModal, StyledModal } from "./styles";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";
import AddButton from "../../assets/add_button.svg"
import CloseButton from "../../assets/close_button.svg"
import { Paragraph, TitleThree } from "../typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./createSchema";


export interface ICreateProducts {
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ModalDashboardCreate = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<ICreateProducts>({
    resolver: zodResolver(schema)
  })
  const {handleCreateProduct, setIsModalCreateOpen} = useContext(AdminContext)

  const submit = async (formData: ICreateProducts) => {
    await handleCreateProduct(formData)
    reset()
  }

  return (
    <StyledModal role="dialog">
      <StyledDivModal>
          <StyledHeaderModal>
              <TitleThree>NOVO PRODUTO</TitleThree>
              <img src = {CloseButton} alt = "X de cor preta para fechar o modal" onClick={() => setIsModalCreateOpen(false)}/>
          </StyledHeaderModal>
          <StyledCreateModalForm onSubmit={handleSubmit(submit)}>
            <Input placeholder="NOME" type = "text" register={register("name")} inputsize="big" error={errors.name?.message}/>
            <Input placeholder="PREÇO (R$)" type = "number" register={register("price")} inputsize="big" error={errors.price?.message}/>
            <Input placeholder="IMAGEM (URL)" type = "text" register={register("image")} inputsize="big" error = {errors.image?.message}/>
            <textarea placeholder="DESCRIÇÃO RESUMIDA" {...register("description")}/>
            <Paragraph>{errors.description?.message}</Paragraph>
            <StyledButton buttonsize="big" buttoncolor = "black"> <img src = {AddButton} alt = "círculo branco com um sinal de + branco para adicionar produtos"/>NOVO PRODUTO</StyledButton>
          </StyledCreateModalForm>
      </StyledDivModal>
    </StyledModal>
  );
};