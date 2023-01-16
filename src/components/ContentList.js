import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import useContentListing from "../hooks/useContentListing";
import ListItem from "./ListItem";

export default function ContentList() {
  const [pageNumber, setPageNumber] = useState(1);
  const filteredContents = useSelector((state) => state.filteredContents);
  const contents = useSelector((state) => state.contents);

  const totalContentItems = useSelector((state) => state.totalContentItems);

  const loading = useSelector((state) => state.isLoading);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastContentElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting & hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useContentListing(pageNumber);

  useEffect(() => {
    setHasMore(contents.length !== totalContentItems);
  }, [contents, totalContentItems]);

  return (
    <div className="grid grid-cols-3 gap-4 px-3 mt-8 pt-10 overflow-auto h-[calc(100vh-100px)]">
      {filteredContents.map((c, index) => {
        if (filteredContents.length - 6 === index + 1) {
          return (
            <div ref={lastContentElementRef} key={index}>
              <ListItem value={c} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <ListItem value={c} />
            </div>
          );
        }
      })}
    </div>
  );
}
