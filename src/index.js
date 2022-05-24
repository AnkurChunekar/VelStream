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
  HistoryProvider,
  CommentsProvider,
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
              <HistoryProvider>
                <CommentsProvider>
                  <App />
                </CommentsProvider>
              </HistoryProvider>
            </WatchLaterProvider>
          </LikeProvider>
        </PlaylistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
