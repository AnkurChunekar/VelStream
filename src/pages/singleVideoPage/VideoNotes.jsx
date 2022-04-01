// import { videos } from "../../backend/db/videos";
export function VideoNotes() {
  return (
    <div className="video-notes p-md1 p-rl0">
      <h2 className="fs-3 fw-400">Notes</h2>

      <div className="input-wrapper m-xs m-rl0">
        <input
          type="text"
          id="note-title"
          placeholder="Title..."
          name="title"
          className="input p-xxs m-xxxs m-rl0 bd-rad-sm"
          required />
      </div>

      <textarea
        placeholder="Add Your Notes Here..."
        className="input p-xxs m-xxxs m-rl0 bd-rad-sm"
      ></textarea>

      <div className="">
        <button className="btn btn-primary m-xs m-rl0 w-100pc">
          Save Note
        </button>
      </div>
    </div>
  );
}
