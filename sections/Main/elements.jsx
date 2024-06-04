import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    background-image: url("/img/background.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 40rem;
    padding: 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
    margin-top: 5rem;
    margin-bottom: 0;
    text-align: center;

    @media (max-width: 1024px) {
        margin-top: 3rem;
    }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin-top: 0;
    margin-bottom: 5rem;
    text-align: center;

    @media (max-width: 1024px) {
        margin-bottom: 3rem;
    }
`;

export const StyledImageContainer = styled.div`
    max-width: 24rem;
    width: 100%;
    height: 100%;
    margin-left: auto;

    @media (max-width: 1024px) {
        margin: 0 auto 2rem auto; 
    }
`;

export const StyledCardCollectionContainer = styled.div`
    max-width: 32.03rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: 5rem;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`;
