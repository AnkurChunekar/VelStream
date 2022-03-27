import "./Drawer.css";

export function Drawer(){
    return <div className="nav-drawer dark fs-5">
        <div className="drawer-item">
            <span > <i className="fa-solid fa-house"></i> </span>
            <span> Home </span>
        </div>
        <div className="drawer-item active">
            <span > <i className="fa-regular fa-compass"></i> </span>
            <span> Explore </span>
        </div>
        <div className="drawer-item">
            <span > <i className="fa-solid fa-list-check"></i> </span>
            <span> Playlists </span>
        </div>
        <div className="drawer-item">
            <span > <i className="fa-regular fa-clock"></i> </span>
            <span> Watch Later </span>
        </div>
        <div className="drawer-item">
            <span > <i className="fa-solid fa-thumbs-up"></i> </span>
            <span> Liked </span>
        </div>
        <div className="drawer-item">
            <span > <i className="fa-solid fa-clock-rotate-left"></i> </span>
            <span> History </span>
        </div>
    </div>
}
