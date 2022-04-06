import { useEffect, useState, Fragment } from "react";
import { getDataService } from "../../services";
import {
  capitalizeFirstWordOfString,
  searchData,
  categorizeData,
} from "../../helpers";
import {
  Drawer,
  VideoCard,
  PlaylistModal,
  CircularLoader,
  Navbar,
} from "../../components";
import "./VideoListing.css";

export function VideoListing() {
  const [videoData, setVideoData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    categories: [],
    selectedCategory: "",
  });
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [playlistModalVideo, setPlaylistModalVideo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const { categories, selectedCategory } = categoryData;

  useEffect(() => {
    getDataService(
      "/api/videos",
      (response) => setVideoData(response.data.videos),
      setIsLoading
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

  const finalData = () =>
    searchInput
      ? searchData(videoData, searchInput)
      : categorizeData(videoData, selectedCategory);

  return (
    <>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
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
            {categories.map((category) => (
              <button
                key={category._id}
                className={`chip ${
                  selectedCategory === category.categoryName ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                {capitalizeFirstWordOfString(category.categoryName)}
              </button>
            ))}
          </div>

          <div className="video-grid-wrapper">
            {isPlaylistModalVisible ? (
              <PlaylistModal
                setIsPlaylistModalVisible={setIsPlaylistModalVisible}
                playlistModalVideo={playlistModalVideo}
              />
            ) : null}

            <div
              className={`video-grid ${
                finalData().length < 5 && !isLoading ? "fixed" : ""
              }`}
            >
              {isLoading ? (
                <div className="loader-container">
                  <CircularLoader />
                </div>
              ) : (
                finalData().length > 0 ? finalData().map((video) => (
                  <Fragment key={video._id}>
                    <VideoCard
                      video={video}
                      setIsPlaylistModalVisible={setIsPlaylistModalVisible}
                      setPlaylistModalVideo={setPlaylistModalVideo}
                    />
                  </Fragment>
                )) : <h2 className="center-align-text">No videos Found.</h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
