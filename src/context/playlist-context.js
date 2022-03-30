import { createContext, useContext, useReducer } from "react";
import { playlistReducer, initialPlaylistState } from "../reducers";

const defaultValue = initialPlaylistState;

const PlaylistContext = createContext(defaultValue);

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialPlaylistState);

    return (
        <PlaylistContext.Provider value={{ playlistDispatch, playlistState }} >
            {children}
        </PlaylistContext.Provider>
    );
}

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
