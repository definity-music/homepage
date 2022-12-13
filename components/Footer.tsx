import { FC } from "react";
import styled from "styled-components";
import { Link } from "./Utils";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
`;

export const Footer: FC = () => (
  <FooterWrapper>
    <Link href={"/imprint"}>Imprint</Link>
    <Link href={"/privacy-policy"}>Privacy Policy</Link>
  </FooterWrapper>
);
