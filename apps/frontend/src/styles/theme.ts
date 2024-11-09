import { DefaultTheme } from 'styled-components';

export const colors = {
};

export const zIndex = {
  DRAWER: 500,
  TOOLTIP_BOX: 400,
  HEADER: 300,
};

export interface MixinsTheme {
  flexRowsContainer: () => string;
  flexBox: (direction?: string, align?: string, justify?: string) => string;
}

const mixins: MixinsTheme = {
  flexRowsContainer: () => `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

export interface MediaQueryTheme {
  custom: (width: number) => string;
  mobile: string;
  tablet: string;
  pc: string;
}

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media: MediaQueryTheme = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(769),
  mobile: customMediaQuery(576),
};

const scroll = {
  theme: () => `
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ededed;
      border-radius: 0;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    @media screen and (max-width: 769px) {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  `,
};

export const theme: DefaultTheme = {
  colors,
  zIndex,
  media,
  mixins,
  scroll,
} as const;
