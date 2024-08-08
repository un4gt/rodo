import React from "react";
import ReactDOM from "react-dom/client";
import {StyledEngineProvider} from "@mui/material";
import DarkModeApp from "./DarkModeApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <DarkModeApp />
    </StyledEngineProvider>
  </React.StrictMode>,
);
