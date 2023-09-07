import { ReactNode } from 'react';
import { StyledTitleFour, StyledTitleOne, StyledTitleThree, StyledTitleTwo, SyledParagraph } from './../../styles/typography';

interface ITypographyProps{
    children: ReactNode;
    className?: string;
    onClick?: any
}

export const TitleOne = ({children}: ITypographyProps) => {
    return (
        <StyledTitleOne>
            {children}
        </StyledTitleOne>
    )
}

export const TitleTwo = ({children}: ITypographyProps) => {
    return (
        <StyledTitleTwo>
            {children}
        </StyledTitleTwo>
    )
}

export const TitleThree = ({children}: ITypographyProps) => {
    return (
        <StyledTitleThree>
            {children}
        </StyledTitleThree>
    )
}

export const TitleFour = ({children}: ITypographyProps) => {
    return (
        <StyledTitleFour>
            {children}
        </StyledTitleFour>
    )
}

export const Paragraph = ({children, className, onClick}: ITypographyProps) => {
    return (
        <SyledParagraph className={className} onClick={onClick}>
            {children}
        </SyledParagraph>
    )
}