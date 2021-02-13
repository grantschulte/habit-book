import React from "react";
import { createBrowserHistory } from "history";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import routes from "config/routes";

export const history = createBrowserHistory();
const AUTH0_REDIRECT_URI = `${window.location.origin}${routes.homepage.path}`;

const withAuthProvider = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) => {
  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo ?? routes.today.path);
  };

  return (props: P) => (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope={process.env.REACT_APP_AUTH0_SCOPE}
      redirectUri={AUTH0_REDIRECT_URI}
      onRedirectCallback={onRedirectCallback}
    >
      <WrappedComponent {...(props as P)} />
    </Auth0Provider>
  );
};

export default withAuthProvider;
