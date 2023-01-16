import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const [search, setSearch] = useState("");

  const searchAction = () => {
    dispatch({ type: "START_SEARCH", payload: search });
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchAction();
    }
  };

  return (
    <div className="absolute text-white h-24 flex items-center bg-[url('assets/images/nav_bar.png')] bg-cover left-0 right-0 top-0">
      <img
        src="assets/images/Back.png"
        className="object-scale-down h-3 pr-2 ml-4"
      />
      <label className="text-gray-400">{title}</label>

      <div className="ml-auto flex items-center">
        <input
          className="w-24 mr-2 text-slate-600	px-2 h-4 text-xs rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={_handleKeyDown}
        />
        <img
          onClick={searchAction}
          src="assets/images/search.png"
          className="object-̉̉̉̉scale-down h-4 mr-4"
        />
      </div>
    </div>
  );
}
