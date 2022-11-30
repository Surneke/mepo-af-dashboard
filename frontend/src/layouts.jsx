import { Outlet } from "react-router";
import { theme } from "./providers/Theme";
import { css, Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./providers/AuthProvider";
import { PrivateRouter, ResponsiveDrawer } from "./components";

export const Layout = ({children}) => {
  return (
    <CookiesProvider>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <ResponsiveDrawer />
      {/* <PrivateRouter /> */}
      <Outlet />
    </CookiesProvider>
  );
};
