import "./HorizontalCard.css";

export function HorizontalCard() {
  return (
    <div className="horizontal-card flex p-s">
      <div className="banner">
        <img
          src="https://i.picsum.photos/id/507/350/200.jpg?hmac=hlpv7jKjCuDSZfctg82iwrLnYS8hWlJB5yfaECifXjw"
          className="img-responsive thumbnail"
          alt="video thumbnail"
        />
        <div className="badge-container tag tag-dark tag-round-border">
          <span className="icon-badge">55:00</span>
        </div>
      </div>
      <div>
        <div className="title">
          This is some dummy text for the title of the Video.
        </div>
        <div className="gray-text fs-6 m-xxs m-rl0"> Ankur Chunekar. </div>
      </div>

      <button className="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
