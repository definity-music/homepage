import Image, { ImageProps } from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
 body {
    background: #252525;
    margin:0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    color:#fff;
    min-height: 80vh;
 }
`;

export const Main = styled.main`
  padding: 100px 0;

  z-index: 1;
  position: relative;
`;

export const Grid = styled.div<{
  columns?: number;
  gap: number;
  maxItemSize: string;
}>`
  display: grid;
  grid-template-columns: ${({ columns, maxItemSize }) =>
    columns
      ? Array(columns).fill("1fr").join(" ")
      : "repeat(auto-fill, minmax(" + maxItemSize + ", 1fr));"};
  gap: ${({ gap }) => gap + "px"};
`;

const ResponsiveImageWrapper = styled.div`
  width: 100%;
  > div {
    position: unset !important;
  }
`;

const ResponsiveImageComponent = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  border-radius: 5px;
`;

export const ResponsiveImage: FC<ImageProps> = (props) => {
  return (
    <ResponsiveImageWrapper>
      <ResponsiveImageComponent {...props}></ResponsiveImageComponent>
    </ResponsiveImageWrapper>
  );
};

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.3;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const Headline = styled(Text)<{ level?: 1 | 2 }>`
  ${({ level }) => {
    switch (level) {
      case 2:
        return css`
          font-size: 22px;
        `;

      default:
        return css`
          font-size: 30px;
        `;
    }
  }}

  font-weight: 700;
`;

export const Whitespace = styled.div`
  width: 100%;
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const Link = styled(NextLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;
