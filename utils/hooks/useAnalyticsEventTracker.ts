import GA from "react-ga4";

export const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    GA.event({ category, action, label });
  };
  return eventTracker;
};
