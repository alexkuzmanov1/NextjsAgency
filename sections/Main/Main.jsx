
import Image from "next/image"
import { StyledContainer, StyledTitle, StyledDescription, StyledImageContainer, StyledCardCollectionContainer } from "./elements"
import { Card } from "../../collections/Card";

export const Main = ({ background, title, description, cardProps, ...props }) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledContainer {...props}>
                <StyledImageContainer>
                    <Image layout="responsive" src="/img/video.png" height={525} width={330}></Image>
                </StyledImageContainer>
                <StyledCardCollectionContainer>
                    {cardProps.map((card, index) => (
                        <Card key={index} width={26+index*2} image={card.image} title={card.title} description={card.description}/>
                    ))}
                </StyledCardCollectionContainer>
            </StyledContainer>
        </>
    )
}
