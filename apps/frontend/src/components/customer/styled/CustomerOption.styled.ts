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
    border: 1px solid #e0e0e0;
    max-width: 300px;
    width: 100%;
    height: 36px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #333;
    transition: all 0.3s ease;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: #9a9a9a;
        box-shadow: 0 0 8px rgba(90, 91, 90, 0.2);
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
