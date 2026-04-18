import React, { useState, useEffect } from "react";
import api from "../../utils/axios";
import Cards from "../../Components/Cards/Cards";
import Hero from "../../Components/Hero/Hero";
import developer from "../../assets/images/developer.png";

export default function Developer() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDeveloper = async () => {
    try {
      const response = await api.get("/developer"); // ✅ use correct endpoint
      setDevelopers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeveloper();
  }, []);

  // ✅ Loading state (centered)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <>
      {/* ✅ Hero shown once */}
      <Hero
        title="Defining the Future Skyline."
        text="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        have_Button={false}
        image={developer}
      />

      {/* ✅ Cards Grid */}
      <div className="mt-[70px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-4 mx-20">
        {developers.map((developer) => (
          <div className="w-full">
            <Cards
              key={developer.id}
              id={developer.id}
              name={developer.name_en}
              subName={developer.name_ar}
              image={developer.images?.[0] || "/placeholder.jpg"}
              location="New Cairo"
            />
          </div>
        ))}
      </div>
    </>
  );
}