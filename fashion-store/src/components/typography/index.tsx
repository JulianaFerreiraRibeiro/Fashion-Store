import { ReactNode } from 'react';
import { StyledTitleOne, StyledTitleTwo, SyledParagraph } from './../../styles/typography';

interface ITypographyProps{
    children: ReactNode;
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

export const Paragraph = ({children}: ITypographyProps) => {
    return (
        <SyledParagraph>
            {children}
        </SyledParagraph>
    )
}