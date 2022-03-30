import "./SinglePlaylistPage.css";
import { Drawer, ContentSidebar, HorizontalCard } from "../../components";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../context";
import { Fragment } from "react";

export function SinglePlaylistPage() {
  const { playlistID } = useParams();
  const {
    playlistState: { playlists },
  } = usePlaylist();

  const currentPlaylist = playlists.find((item) => item._id === playlistID);

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar
          pageTitle={currentPlaylist.title}
          sidebarBanner={
            currentPlaylist.videos.length > 0
              ? currentPlaylist.videos[0].videoThumbnail
              : undefined
          }
        />
        <div className="flex flex-column h-card-container">
          {currentPlaylist.videos.map((video) => (
            <Fragment key={video._id}>
              <HorizontalCard video={video} playlistID={playlistID} />
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
