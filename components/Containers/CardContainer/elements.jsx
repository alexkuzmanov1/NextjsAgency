import styled from "styled-components"

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    flex-direction: row-reverse;
    flex:1;
    margin-left: 0;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
`;