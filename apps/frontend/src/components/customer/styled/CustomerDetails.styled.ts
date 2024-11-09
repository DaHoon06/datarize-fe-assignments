import styled from "styled-components";

export const PageContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
`;

export const Title = styled.h2`
    text-align: left;
    color: #333;
    margin-bottom: 1em;
    
    .user {
        font-weight: 700;
    }
`;

export const LoadingMessage = styled.div`
    font-size: 1.2em;
    color: #888;
    text-align: center;
    margin-top: 20px;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ProductCard = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
    width: 120px;
    height: auto;
    border-radius: 8px;
    margin-right: 15px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ProductName = styled.p`
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
`;

export const ProductQuantity = styled.p`
    font-size: 1em;
    color: #555;
`;

export const ProductPrice = styled.p`
    font-size: 1em;
    font-weight: bold;
    color: #007bff;
`;

export const ProductDate = styled.p`
    font-size: 0.9em;
    color: #888;
`;
