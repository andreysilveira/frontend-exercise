import styled from "styled-components";


interface IContainer{
    size: string;
    background: string;
}

export const ButtonAdopted = styled.button<IContainer>`
    background-color: ${props =>  props.background || "#3e8ed0"};
    border-color: transparent;
    color: #fff;
    width: ${props =>  props.size || "10px"};
    height: 30px;
    border-radius: .375em;
`;