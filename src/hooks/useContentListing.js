import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useContentListing(pageNumber) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_CONTENTS", payload: pageNumber });
  }, [pageNumber]);
}
