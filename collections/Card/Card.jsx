// The Card to be exported goes here
import {StyledCardContainer, StyledCardTitle, StyledCardParagraph, StyledImageContainer, StyledTextContainer, StyledSpan} from "./elements";

export const Card =({ image, title, description, ...props})=>{
    return(
        <StyledCardContainer {...props}>
            <StyledTextContainer>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardParagraph dangerouslySetInnerHTML={{ __html: description }}></StyledCardParagraph>
            </StyledTextContainer>
            <StyledImageContainer>
                <img src={image.src} width={image.width} height={image.height}/>
            </StyledImageContainer>
        </StyledCardContainer>
    )
}