import {useLocation, useParams} from "react-router";
import {useCustomerDetailQuery} from "../../../state/queries/hooks/useCustomerQuery.ts";
import * as S from '../styled/CustomerDetails.styled.ts';
import {Spinner} from "../../ui/Spinner.tsx";
import {SpinnerBox} from "../../ui/SpinnerBox.tsx";
import {useNavigate} from "react-router-dom";

export const CustomerDetailsView = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const location = useLocation();
  const { name } = location.state || {};
  const {data, isLoading} = useCustomerDetailQuery(Number(id), {
    staleTime: 10 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
    useErrorBoundary: () => {
      navigate('/404', {replace: true});
      return true;
    }
  });

  if (isLoading) return <SpinnerBox><Spinner /></SpinnerBox>

  return (
    <S.PageContainer>
      <S.Title><span className={'user'}>{name}</span> 님의 구매 내역입니다.</S.Title>

      <S.ProductList>
        {data?.map(value => (
          <S.ProductCard key={`user_product_${value.product}_${value.date}`}>
            <S.ProductImage src={value.imgSrc} alt={value.product} loading="lazy" />
            <S.ProductInfo>
              <S.ProductName>상품명 : {value.product}</S.ProductName>
              <S.ProductQuantity>구매 수량 : {value.quantity} 개</S.ProductQuantity>
              <S.ProductPrice>상품 가격 : {value.price.toLocaleString()}원</S.ProductPrice>
              <S.ProductDate>구매일 {value.date}</S.ProductDate>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductList>
    </S.PageContainer>
  );
}
