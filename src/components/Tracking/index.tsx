import ReactGA from 'react-ga';

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
}

export const trackPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export const trackEvent = (category: string, action: string, label: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
