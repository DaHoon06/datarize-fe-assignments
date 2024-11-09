import {Sort} from "@/types";
import * as S from './styled/CustomerOption.styled.ts';
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";

interface CustomerOptionProps {
  sort: Sort;
  onClickSortButton: (sort: Sort) => void;
  keyword: string;
  onChangeInput: (value: string) => void;
}

export const CustomerOption = ({ sort, onClickSortButton, keyword, onChangeInput }: CustomerOptionProps) => {
  return (
    <S.CustomerOptionContainer>
      <div>
        {sort === 'asc' ? (
          <S.Button aria-label={'desc-button'} type={'button'} onClick={() => onClickSortButton('desc')}>
            <FaSortAmountDownAlt size={18} color={'#545454'} />
          </S.Button>
        ) : (
          <S.Button aria-label={'asc-button'} type={'button'} onClick={() => onClickSortButton('asc')}>
            <FaSortAmountUpAlt  size={18} color={'#545454'} />
          </S.Button>
        )}

      </div>
      <S.Input placeholder={'검색할 고객명을 입력해 주세요'} value={keyword} onChange={(e) => onChangeInput(e.target.value)} />
    </S.CustomerOptionContainer>
  )
}
