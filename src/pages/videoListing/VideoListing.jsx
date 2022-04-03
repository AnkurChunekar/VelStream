import "./VideoListing.css";
import { useEffect, useState, Fragment } from "react";
import { Drawer, VideoCard, PlaylistModal } from "../../components";
import { capitalizeFirstWordOfString } from "../../helpers";
import { getDataService } from "../../services";

export function VideoListing() {
  const [videoData, setVideoData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    categories: [],
    selectedCategory: "",
  });
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [playlistModalVideo, setPlaylistModalVideo] = useState({});
  const { categories, selectedCategory } = categoryData;

  useEffect(() => {
    getDataService("/api/videos", (response) =>
      setVideoData(response.data.videos)
    );
  }, []);

  useEffect(() => {
    getDataService("/api/categories", (response) =>
      setCategoryData((categoryData) => ({
        ...categoryData,
        categories: response.data.categories,
      }))
    );
  }, []);

  const handleCategoryClick = (categoryName = "") => {
    setCategoryData((categoryData) => ({
      ...categoryData,
      selectedCategory: categoryName,
    }));
  };

  const getCategorizedData = () =>
    selectedCategory
      ? videoData.filter((video) => video.category === selectedCategory)
      : videoData;

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="video-listing">
        <div className="filter-container">
          <button
            className={`chip ${selectedCategory === "" ? "active" : ""}`}
            onClick={() => handleCategoryClick()}
          >
            All
          </button>
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category._id}
                className={`chip ${
                  selectedCategory === category.categoryName ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                {capitalizeFirstWordOfString(category.categoryName)}
              </button>
            ))
          ) : (
            <span className="fs-3"> Loading... </span>
          )}
        </div>

        <div className="video-grid-wrapper">
          {isPlaylistModalVisible ? (
            <PlaylistModal
              setIsPlaylistModalVisible={setIsPlaylistModalVisible}
              playlistModalVideo={playlistModalVideo}
            />
          ) : null}

          <div className="video-grid">
            {getCategorizedData().map((video) => (
              <Fragment key={video._id}>
                <VideoCard
                  video={video}
                  setIsPlaylistModalVisible={setIsPlaylistModalVisible}
                  setPlaylistModalVideo={setPlaylistModalVideo}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
