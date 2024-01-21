import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SearchResult from "./components/SearchResult"; // 수정된 부분
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "가구/인테리어",
    "가전제품",
    "생활용품",
    "욕실용품",
    "도서/문구",
    "미용/화장품",
    "주방용품",
    "식품",
    "용기/포장재",
    "패션/잡화",
    "기타",
  ];

  const handleCategoryClick = (category) => {
    setSearchQuery(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCameraButtonClick = () => {
    const fileInput = document.getElementById("icon-button-file");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          {/* 로고 컴포넌트 */}
          <div>TRAgle</div>
          {/* 검색 바 컴포넌트 */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Trash 검색"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Link to="/search">
              <button>🔍</button>
            </Link>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              style={{ display: "none" }}
              id="icon-button-file"
            />
            <label htmlFor="icon-button-file">
              <button onClick={handleCameraButtonClick}>📷</button>
            </label>
          </div>
          <Link to="/categories">우산을 어떻게 버리는지 아시나요? 😆 </Link>
        </header>
        <nav className="icon-menu">{/* 아이콘 메뉴 컴포넌트 */}</nav>
        <main>
          {/* 카테고리 버튼들 */}
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="category-button"
              >
                {category}
              </button>
            ))}
          </div>
          {/* 카테고리별로 확인하기 텍스트 */}
        </main>
        <Routes>
          <Route
            path="/search"
            element={<SearchResult searchQuery={searchQuery} />}
          />{" "}
          {/* 수정된 부분 */}
          <Route path="/categories">{/* 카테고리 페이지 컴포넌트 */}</Route>
          <Route exact path="/">
            {/* 메인 페이지 컴포넌트 */}
          </Route>
          {/* 추가 페이지들의 라우트 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
