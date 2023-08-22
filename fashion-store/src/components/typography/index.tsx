import { ReactNode } from 'react';
import { StyledTitleOne, StyledTitleThree, StyledTitleTwo, SyledParagraph } from './../../styles/typography';

interface ITypographyProps{
    children: ReactNode;
    className?: string;
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

export const Paragraph = ({children, className}: ITypographyProps) => {
    return (
        <SyledParagraph className={className}>
            {children}
        </SyledParagraph>
    )
}