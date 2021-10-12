import styled from "styled-components"

const StyledNavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    span{
        padding: 0 0 0 0.5rem;
    }

    @media only screen and (max-width: 680px){
        width: 100%;
    }
`


export const NavButton = ({value, icon}) =>{
    return(
    <div>
        <StyledNavButton>
            {icon}
            <span> 
            {value}
            </span>
        </StyledNavButton>
    </div>
    );
}