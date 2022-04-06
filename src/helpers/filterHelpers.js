const searchData = (data, searchValue) => {
  if (searchValue) {
    return data.filter((v) =>
      v.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }

  return data;
};

const categorizeData = (data, selectedCategory) => {
  return selectedCategory
    ? data.filter((video) => video.category === selectedCategory)
    : data;
};

export { searchData, categorizeData };
