import React from "react";

export default function ListItem({ value }) {
  return (
    <div>
      <img src={`assets/images/${value["poster-image"]}`} />
    </div>
  );
}
