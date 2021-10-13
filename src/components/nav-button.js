import styled from "styled-components";
import { type } from "../utils";

const StyledNavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff90;
    font-size: ${type.secondaryHeader};
    svg {
        font-size: ${type.secondaryHeader};
    }
    span {
        padding: 0 0 0 0.8rem;
    }

    @media only screen and (max-width: 720px) {
        width: 100%;
        font-size: ${type.secondaryHeaderMobile};
        svg {
            font-size: ${type.secondaryHeaderMobile};
        }
    }
    &:hover {
        color: aqua;
    }
`;

export const NavButton = ({ value, icon }) => {
    return (
        <div>
            <StyledNavButton>
                {icon}
                <span>{value}</span>
            </StyledNavButton>
        </div>
    );
};
