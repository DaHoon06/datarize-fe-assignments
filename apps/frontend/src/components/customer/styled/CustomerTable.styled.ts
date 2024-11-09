import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border-radius: 8px; 
    overflow: hidden;   
`;

const Th = styled.th`
    background-color: #f8ffa5ff;
    color: #333;
    padding: 10px;
    border-bottom: 2px solid #ddd;
    text-align: center;
    border-top-left-radius: 8px;  
    border-top-right-radius: 8px; 
`;

const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        cursor: pointer;
        background-color: #f1f1f1;
    }
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
`;

export {
  Table, Th, Tr, Td
}
