// Styled elements for the Card go here
import styled from "styled-components";

import { CardContainer, SectionParagraph, SectionSubheading } from "~/components";

export const StyledCardTitle = styled(({...props})=><SectionSubheading {...props}/>)`
    margin-bottom:0px;
    margin-top:0px;
    font-weight:600;
    font-size:1.5rem;
    text-decoration: none;
`;

export const StyledCardContainer = styled(({width, ...props})=><CardContainer {...props}/>)`  
    background-color: #F9F9F9;
    display: flex;
    flex-direcion: column;
    flex: 1;
    padding: 20px;
    width:${props=>props.width}rem;
    height: 8rem;
    border: 2px solid transparent;
    transition: border-color 0.3s ease; 
    
    &:hover {
        border-color: #006EFD;
        cursor: pointer;
    }
    &:hover ${StyledCardTitle} {
        color: #006EFD;
        text-decoration: underline;
        text-decoration-color: #006EFD;
    }
`;

export const StyledSpan = styled.span`
    font-weight: 600; 
`; 


export const StyledCardParagraph = styled(({...props})=><SectionParagraph {...props}/>)`
    margin-top: 10px;
    font-size: 1.1rem;
    flex: 1;
    color: black; 
    text-decoration: underline;
    text-decoration-color: transparent;

    
`;


export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
    flex: 0;
    margin-right: 40px;
    margin-left: 20px;
    margin-top:auto;
    margin-bottom:auto;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    flex: 1;
`;
