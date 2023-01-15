import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useContentListing(pageNumber) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contents, setContents] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    dispatch({ type: "GET_CONTENTS", payload: 1 });

    return () => {
      cancel();
    };
  }, [pageNumber]);

  return { contents };
}
