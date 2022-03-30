import "./PlaylistPage.css";
import { Drawer } from "../../components";
import { Fragment } from "react";
import { Playlist } from "./Playlist";
import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";

export function PlaylistPage() {
  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="w-100pc p-md1">
        <h1 className="fs-4 fw-600 p-s"> My Playlists </h1>
        <div className="flex flex-column h-card-container">
          {playlists.length > 0 ? (
            playlists.map((item) => (
              <Fragment key={item._id}>
                <Playlist
                  title={item.title}
                  videos={item.videos}
                  playlistId={item._id}
                />
              </Fragment>
            ))
          ) : (
            <Link to="/" className="btn btn-primary m-xs">
              Explore More
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
