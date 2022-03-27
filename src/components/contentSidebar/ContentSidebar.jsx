import "./ContentSidebar.css";

export function ContentSidebar({ pageTitle }) {
  return (
    <div className="content-sidebar p-xl">
      <div className="banner">
        <img
          src="https://i.picsum.photos/id/507/350/200.jpg?hmac=hlpv7jKjCuDSZfctg82iwrLnYS8hWlJB5yfaECifXjw"
          className="img-responsive"
          alt="first video thumbnail"
        />
        <div className="text-overlay">13 Videos</div>
      </div>

      <h2 className="fw-400 m-xxs m-rl0"> {pageTitle} </h2>
      <div className="gray-text fs-6 m-xxs m-rl0">
        Updated on March 13, 2003
      </div>
      <div className="divider m-xxs m-rl0"></div>
      <div className="flex ai-center m-s m-rl0">
        <img
          className="profile-pic"
          src="https://i.picsum.photos/id/507/350/200.jpg?hmac=hlpv7jKjCuDSZfctg82iwrLnYS8hWlJB5yfaECifXjw"
          alt="profile"
        />
        <span className="m-xxs m-tb0"> Ankur Chunekar </span>
      </div>
    </div>
  );
}
