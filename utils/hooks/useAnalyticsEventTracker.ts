import { event, ga } from "react-ga";

export const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    event({ category, action, label });
  };
  return eventTracker;
};
