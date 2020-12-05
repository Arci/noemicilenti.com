import ReactGA from 'react-ga';

export const initGA = (trackingID: string): void => {
  ReactGA.initialize(trackingID);
};

export const trackPageView = (): void => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const trackEvent = (category: string, action: string, label: string): void => {
  ReactGA.event({ category, action, label });
};
