import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { RecoilRoot } from "recoil";

import NamesProvider from "./context/NamesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  // useContext
  <NamesProvider>
    {/* Recoil */}
    <RecoilRoot>
      
      <App />

    </RecoilRoot>

  </NamesProvider>

);
