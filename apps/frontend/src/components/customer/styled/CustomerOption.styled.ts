import styled from "styled-components";

export const Button = styled.button`
    background-color: #f3f3f3;
    height: 36px;
    width: 36px;
    border: 1px solid #ececec;
    border-radius: 4px;
    
    &:hover {
        cursor: pointer;
    }
`;

export const Input = styled.input`
    box-sizing: border-box;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 300px;
    width: 100%;
    height: 36px;
    background-color: #f9f9f9;

    &:focus {
        outline: none;
        border-color: #9a9a9a;
    }
`;

export const CustomerOptionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    height: 60px;
`;
