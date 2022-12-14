import Image from "next/image";
import { FC, useState } from "react";

import styled from "styled-components";
import logo from "public/assets/defnity_w_ohnekreis.png";
import { Link } from "./Utils";
import { playlistUrls } from "../playlistUrls";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "../utils/hooks/useMediaQuery";
import NextLink from "next/link";
import { slugify } from "../utils/helpers/slugify";

const Wrapper = styled.header`
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 100;
  justify-content: space-between;
`;

const Padding = styled.div`
  padding: 0 2rem;
  display: flex;
  width: 100%;
  align-items: center;
`;

const DesktopMenu = styled.div<{ isHidden?: boolean }>`
  flex: 1;
  justify-content: flex-end;
  gap: 25px;
  text-shadow: 2px 2px 8px #252525;
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
`;

const MobileLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 80%;
  background-color: #252525;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #000;
  padding: 1.5em;
`;

const MobileMenuWrapper = styled.div<{ isHidden?: boolean }>`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  flex: 1;
  justify-content: flex-end;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Logo = styled(Image)`
  cursor: pointer;
`;

const MenuIcon = styled.div``;

const URLs = () => (
  <>
    {playlistUrls.map((playlist, idx) => (
      <Link
        key={playlist.name + idx}
        href={"/redirect/" + slugify(playlist.name)}
        target="_blank"
      >
        {playlist.name}
      </Link>
    ))}
  </>
);

const MobileMenu = ({ isHidden }: { isHidden: boolean }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <MobileMenuWrapper isHidden={isHidden}>
      <MenuIcon onClick={() => setIsNavExpanded(!isNavExpanded)}>
        {isNavExpanded ? <MdClose></MdClose> : <MdMenu></MdMenu>}
      </MenuIcon>

      {isNavExpanded && (
        <MobileLinkWrapper>
          <URLs />
        </MobileLinkWrapper>
      )}
    </MobileMenuWrapper>
  );
};

export const Header: FC = () => {
  const isMobile = useMediaQuery(768);

  return (
    <Wrapper>
      <Padding>
        <NextLink href="/">
          <Logo width={100} src={logo} alt="definity logo" />
        </NextLink>
        <MobileMenu isHidden={!isMobile} />
        <DesktopMenu isHidden={isMobile}>
          <URLs />
        </DesktopMenu>
      </Padding>
    </Wrapper>
  );
};
