import { Outlet } from "react-router";
import { theme } from "./context/Theme";
import { css, Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { CookiesProvider } from "react-cookie";
import {  ResponsiveDrawer } from "./components";

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
      <Outlet />
    </CookiesProvider>
  );
};
