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
import { useCookies } from "react-cookie";
import { GA_TRACKING_ID } from "../utils/constants/ga";
import GA from "react-ga4";

type ConsentContextType = {
  initializedGA: boolean;
  cookies: {
    consentbanner?: "true" | "false";
  };
  handleAccept: () => void;
  handleDeny: () => void;
  initGA: () => void;
};

const ConsentContext = createContext<ConsentContextType | null>(null);

export const ConsentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [initializedGA, SetInitializedGA] = useState(false);

  const [cookies, setCookie] = useCookies(["consentbanner"]);

  const handleAccept = () => {
    setCookie("consentbanner", true);
  };

  const handleDeny = () => {
    setCookie("consentbanner", false);
  };

  const initGA = () => GA.initialize(GA_TRACKING_ID);

  useEffect(() => {
    if (cookies.consentbanner === "true" && !initializedGA) {
      initGA();
      SetInitializedGA(true);
    }
  }, [cookies]);

  return (
    <ConsentContext.Provider
      value={{
        cookies,
        initializedGA,
        handleAccept,
        handleDeny,
        initGA,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsentContext = (): ConsentContextType => {
  const ctx = useContext(ConsentContext);
  if (ctx === null)
    throw new Error("useConsentContext must be used in a ConsentProvider");

  return ctx;
};
