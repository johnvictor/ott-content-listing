import React from "react";

export default function ListItem({ value }) {
  return (
    <div className="mb-3">
      <img
        src={`assets/images/${value["poster-image"]}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "assets/images/placeholder_for_missing_posters.png";
        }}
      />
      <div className="mt-1 text-gray-400 text-xs">{value.name}</div>
    </div>
  );
}
