import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { useConsentContext } from "../contexts/ConsentContext";

import { Button, Flex, Link, Text } from "./Utils";

const ConsentBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: #252525;
  box-shadow: 0px 0px 10px #00000066;
  z-index: 101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ConsentBanner: FC = () => {
  const { cookies, handleAccept, handleDeny } = useConsentContext();

  return cookies.consentbanner === undefined ? (
    <ConsentBannerWrapper>
      <Text size="s">
        We use cookies and similar technologies on our website and process
        personal data about you, such as your IP address. We also share this
        data with third parties. Data processing may be done with your consent
        or on the basis of a legitimate interest, which you can object to in the
        individual privacy settings. You have the right to consent to essential
        services only and to modify or revoke your consent at a later time in
        the <Link href={"privacy-policy"}>privacy policy.</Link>
      </Text>
      <Flex>
        <Button onClick={handleDeny}>Alle Ablehnen</Button>
        <Button onClick={handleAccept}>Alle Akzeptieren</Button>
      </Flex>
    </ConsentBannerWrapper>
  ) : null;
};
