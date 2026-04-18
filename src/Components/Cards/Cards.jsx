import React from "react";
import Cards_button from "./../Buttons/Cards_button";

export default function Cards({
  id,
  name,
  subName = null,
  image = null,
  location = "New Cairo",
}) {
  return (
    
    <div className="h-auto card bg-base-100 shadow-sm rounded-2xl overflow-hidden">

      {/* Image */}
      <figure className="relative">
        <img
          className="w-[97%] h-[217px] object-cove rounded-[16px]"
          src={image || "/fallback.jpg"}
          alt={name}
        />

        {/* Location Tag */}
        <span className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs px-3 py-1 rounded-[6px]">
          {location}
        </span>
      </figure>

      {/* Content */}
      <div className="card-body text-start">

        {/* Title */}
        <h2 className="text-lg font-semibold">{name}</h2>

        {/* Subtitle */}
        {subName && (
          <p className="text-sm text-gray-500">{subName}</p>
        )}

        {/* Button */}
        <div className=" card-actions mt-4">
          <Cards_button text="View Projects" />
        </div>

      </div>
    </div>
  );
}