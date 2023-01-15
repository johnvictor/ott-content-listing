import React, { useState } from "react";
import useContentListing from "../hooks/useContentListing";
import { useSelector } from "react-redux";

export default function ContentList() {
  const [pageNumber, setPageNumber] = useState(1);
  const result = useSelector((state) => state.contents);
  console.log(result);

  const {} = useContentListing(pageNumber);

  return <div></div>;
}
