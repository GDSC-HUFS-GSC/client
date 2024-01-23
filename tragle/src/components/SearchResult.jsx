import React, { useState, useEffect } from "react";
import ItemList from "./ItemList"; // ItemList 컴포넌트를 임포트합니다
import "./SearchResult.css";

const SearchResult = ({ searchQuery }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 예시로, API 호출 대신 하드코딩된 데이터를 사용합니다
    const fetchData = () => {
      setIsLoading(true);
      // API 호출을 시뮬레이션하기 위해 setTimeout 사용
      setTimeout(() => {
        const mockData = [
          { id: 1, title: "커피 테이블", imageUrl: "image_url_1" },
          { id: 2, title: "북쉘프", imageUrl: "image_url_2" },
          { id: 3, title: "북쉘프", imageUrl: "image_url_2" },
          { id: 4, title: "북쉘프", imageUrl: "image_url_2" },
          { id: 5, title: "북쉘프", imageUrl: "image_url_2" },
          // ... 기타 아이템
        ].filter((item) => item.title.includes(searchQuery));
        setResults(mockData);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>검색 결과: "{searchQuery}"</h2>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : results.length > 0 ? (
        <ItemList items={results} /> // ItemList 컴포넌트에 결과를 전달
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResult;
