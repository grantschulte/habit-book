import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "app/rootReducer";
import { ThemeProvider } from "styled-components";
import theme from "config/theme";
import { history } from "hocs/withAuthProvider";
import { Router } from "lib/Router";

function render(
  ui: any,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={theme["light"]}>{children}</ThemeProvider>
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
