import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  LikeProvider,
  PlaylistProvider,
  WatchLaterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlaylistProvider>
          <LikeProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </LikeProvider>
        </PlaylistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
