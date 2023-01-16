import React, { useState } from "react";
import { useSelector } from "react-redux";

import useContentListing from "../hooks/useContentListing";
import ListItem from "./ListItem";

export default function ContentList() {
  const [pageNumber, setPageNumber] = useState(1);
  const result = useSelector((state) => state.contents);
  console.log(result);

  const {} = useContentListing(pageNumber);

  return (
    <div className="grid grid-cols-3 gap-7 p-7">
      {result.map((c) => (
        <ListItem value={c} />
      ))}
    </div>
    // <div>
    //   {result.map((c) => (
    //     <ListItem value={c} />
    //   ))}
    // </div>
  );
}
