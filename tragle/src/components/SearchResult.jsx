import React from "react";
import "./SearchResult.css";

const SearchResult = ({ searchQuery }) => {
  const results = [
    { id: 1, title: "커피 테이블", category: "가구/인테리어" },
    { id: 2, title: "북쉘프", category: "가구/인테리어" },
  ].filter((item) => item.category.includes(searchQuery));

  return (
    <div className="search-results">
      <h2>검색 결과: "{searchQuery}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResult;
