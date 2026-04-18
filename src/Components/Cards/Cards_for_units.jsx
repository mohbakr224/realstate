import React from "react";
import Cards_button from "./../Buttons/Cards_button";

export default function Cards_for_units({
    id,
    name,
    image = null,
    status = "AVAILABLE",
    bedrooms,
    bathrooms,
    size,
    price,
    description = null,
    projectName = null,
}) {
    const statusColor =
        status === "AVAILABLE"
            ? "bg-green-600"
            : status === "SOLD"
                ? "bg-red-600"
                : "bg-gray-500";

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US").format(price) + " EGP";
    };

    return (
        <div className="w-[350px] h-auto bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">

            {/* Image */}
            <figure className="relative overflow-hidden">
                <img
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                    src={image || "/fallback.jpg"}
                    alt={name}
                />

                {/* Status Badge */}
                <span
                    className={`absolute top-3 right-3 ${statusColor} text-white text-xs font-medium px-3 py-1 rounded-[6px] capitalize`}
                >
                    {status}
                </span>
            </figure>

            {/* Content */}
            <div className="p-5 text-start flex flex-col gap-3">

                {/* Specs Row — FIRST */}
                <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium flex-wrap">

                    {/* Bedrooms */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        {bedrooms} Bedrooms
                    </span>

                    {/* Separator */}
                    <span className="text-gray-300 mx-1">,</span>

                    {/* Bathrooms */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {bathrooms} Bathrooms
                    </span>

                    {/* Separator */}
                    <span className="text-gray-300 mx-1">,</span>

                    {/* Size */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        {size}m
                    </span>
                </div>
                <div className="flex justify-between">
                    {/* Title — SECOND */}
                    <h2 className="text-lg font-bold text-gray-900 leading-snug">
                        {name}
                    </h2>

                    {/* Price — THIRD */}
                    <p className="text-lg font-bold text-[#8E1616] inlin">
                        {formatPrice(price)}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100"></div>

                {/* Description — FOURTH */}
                {description && (
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Button — LAST */}
                <div className="mt-1">
                    <Cards_button text="View Details" />
                </div>

            </div>
        </div>
    );
}