import React, { useState, useEffect } from "react";
import "./SearchResult.css";

const SearchResult = ({ searchQuery }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 검색 쿼리가 변경될 때마다 API 호출
    const fetchResults = async () => {
      if (!searchQuery) return;

      setIsLoading(true);

      try {
        const response = await fetch(`API_ENDPOINT?query=${searchQuery}`);
        if (!response.ok) {
          throw new Error(`API 호출 실패: ${response.status}`);
        }

        const data = await response.json();
        setResults(data); // API 응답으로 결과 업데이트
      } catch (error) {
        console.error("검색 결과를 불러오는 중 에러 발생:", error);
        // 에러 처리 로직 필요
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>검색 결과: "{searchQuery}"</h2>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : results.length > 0 ? (
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
