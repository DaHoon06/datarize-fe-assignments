import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    color: #333;
    background-color: #fff;
`;

const Th = styled.th`
    background-color: #f8ffa5ff;
    color: #333;
    padding: 10px;
    border-bottom: 2px solid #ddd;
    text-align: center;
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
