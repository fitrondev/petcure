import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import { ThemeProvider } from "./components/context/theme-provider.tsx";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout.tsx";
import Doctors from "./pages/Doctors/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<App />} />
          </Route>

          <Route element={<HomeLayout />}>
            <Route path="/doctors" element={<Doctors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
