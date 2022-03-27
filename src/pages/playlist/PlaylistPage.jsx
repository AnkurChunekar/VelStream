import "./PlaylistPage.css";
import { Drawer } from "../../components";

function Palylist() {
  return (
    <div className="horizontal-card flex ai-center p-s playlist">
      <i className="fa-solid fa-list-check fs-3"></i>
      <div>
        <div className="title">Ankur's playlist</div>
        <div className="gray-text fs-6">10 videos</div>
      </div>
      <button className="delete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export function PlaylistPage() {
  return (
    <main className="flex page-container">
      <Drawer />
      <div className="w-100pc p-md1">
        <h1 className="fs-4 fw-600 p-s"> My Playlists </h1>
        <div className="flex flex-column">
          <Palylist/>
          <Palylist/>
          <Palylist/>
          <Palylist/>
          <Palylist/>
          <Palylist/>
          <Palylist/>
        </div>
      </div>
    </main>
  );
}
