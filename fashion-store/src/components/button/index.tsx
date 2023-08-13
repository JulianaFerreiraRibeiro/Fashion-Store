import { StyledButton } from "../../styles/button";

interface IButtonProps{
    text: string;
}

export const Button = ({text}: IButtonProps) => {
    return(
        <StyledButton>{text}</StyledButton>
    )
}