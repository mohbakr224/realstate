import React from "react";

// 🔹 Assets (images)
import hero from "../../assets/images/image 1.png";
import properties_image from "../../assets/images/cards_icons/Group.png";
import investment_image from "../../assets/images/cards_icons/investment.png";
import clients_image from "../../assets/images/cards_icons/clients.png";
import satisfaction_image from "../../assets/images/cards_icons/satisfaction.png";
import about from "../../assets/images/about.png";
import map_image from "../../assets/images/map.png";

import Palm_Hills from "../../assets/images/Palm Hills.png";
import Hacienda_Duplex from "../../assets/images/Hacienda Duplex.png";
import sawary_villa from "../../assets/images/sawary_villa.png";

// 🔹 Components
import Hero from "../../Components/Hero/Hero";
import Header from "../../Components/Header/Header";
import Buttons from "../../Components/Buttons/Buttons";
import SliderCards from "../../Components/Sliders_cards/Slider_cards";
import Cards from './../../Components/Cards/Cards';

// cards_images
import Palm_Hills_card from "../../assets/images/cards_images_home/palmhills.png";
import Hayahcity from "../../assets/images/cards_images_home/Hayah_city.png";
import Palm_Hills_mini from "../../assets/images/cards_images_home/palmhillsmini.png";
import Hayah_city_mini from "../../assets/images/cards_images_home/hayah_city_mini.png";

// 🔹 Static data
const dashboardStats = [
  {
    id: "properties",
    icon: properties_image,
    value: 48,
    label: "Properties Managed",
  },
  {
    id: "investments",
    icon: investment_image,
    value: "90M",
    label: "Total Managed Investments",
  },
  {
    id: "clients",
    icon: clients_image,
    value: 500,
    label: "Happy Clients",
  },
  {
    id: "satisfaction",
    icon: satisfaction_image,
    value: "99%",
    label: "Client Satisfaction",
  },
];

const masterpieceGallery = [
  {
    id: "01",
    title: "Palm Hills Office No.3",
    imageSource: Palm_Hills,
    altText: "Modern bright office interior with wooden floors",
  },
  {
    id: "02",
    title: "Hacienda Duplex No.4",
    imageSource: Hacienda_Duplex,
    altText: "Minimalist white modern duplex exterior",
  },
  {
    id: "03",
    title: "Sawary Family Villa",
    imageSource: sawary_villa,
    altText: "Contemporary luxury villa",
  },
  {
    id: "04",
    title: "Sawary Family Villa",
    imageSource: sawary_villa,
    altText: "Contemporary luxury villa",
  }
];

const cards_home = [
  {
    id: 0,
    image: Palm_Hills_card,
    image2: Palm_Hills_mini,
    button_text: "View Details",
  },
  {
    id: 1,
    image: Hayahcity,
    image2: Hayah_city_mini,
    button_text: "View Details",
  },
  {
    id: 2,
    image: Hayahcity,
    image2: Hayah_city_mini,
    button_text: "View Details",
  }
];

// 🔹 Main Home Component
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <Hero
        title="Redefining the Horizon of Modern Luxury Living"
        text="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, 
        we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
        image={hero}
      />

      {/* ================= HEADER ================= */}
      <div className="text-center mt-20 mb-10 px-4">
        <Header title="Benchmarks of Success" />
      </div>

      {/* ================= STATS ================= */}
      <div className="flex justify-center gap-6 px-4 flex-wrap">
        {dashboardStats.map((stats) => (
          <div
            key={stats.id}
            className="text-center p-4 rounded-lg shadow-md 
                       w-full sm:w-[45%] md:w-[200px]"
          >
            <img
              src={stats.icon}
              alt={stats.label}
              className="mx-auto mb-2 w-8 h-8"
            />
            <p className="text-lg font-bold mb-1">{stats.value}</p>
            <p className="text-sm text-gray-600">{stats.label}</p>
          </div>
        ))}
      </div>

      {/* ================= ABOUT ================= */}
      <div className="text-center mt-24 px-4">
        <Header title="About Grand Atlas" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 px-4">

        <img
          src={about}
          alt="about"
          className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-t-[60px] border-[5px] border-[#8E1616]"
        />

        <div className="max-w-[600px] text-center lg:text-left">
          <div className="min-h-[300px] pt-4">
            <p className="text-sm md:text-base leading-relaxed">
              We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
              We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
            </p>
          </div>

          <Buttons
            text="Know more"
            className="w-full sm:w-[200px] h-[47px] mt-6"
          />
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="text-center mt-24 px-4">
        <Header title="Hand-Selected Masterpieces" />
      </div>

      <div className="mt-10 px-4">
        <SliderCards data={masterpieceGallery} />
      </div>

      {/* ================= MAP ================= */}
      <div className="text-center mt-24 px-4">
        <Header title="Strategic Locations" />
      </div>

  <div className="mt-10 ">
  <img
    src={map_image}
    alt="map"
    className="w-full rounded-lg object-cover"
  />
</div>

      {/* ================= CARDS ================= */}
      <div className="text-center mt-24 px-4">
        <Header title="Future Landmarks" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-14 mb-20 px-4">
        {cards_home.map((card) => (
          <Cards
            key={card.id}
            image={card.image}
            image2={card.image2}
            text={card.text}
            button_text={card.button_text}
          />
        ))}
      </div>

    </div>
  );
}