import React, { useState, useEffect, useMemo } from "react";
import api from "../../utils/axios";
import Cards_for_units from "../../Components/Cards/Cards_for_units";
import Hero from "../../Components/Hero/Hero";
import heroImage from "../../assets/images/unit_image.png";

export default function Units() {
  const [units, setUnits] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 single filters object
  const [filters, setFilters] = useState({
    search: "",
    bedrooms: "",
    developer: "",
    zone: "",
    project: "",
    status: "",
    price: "",
  });

  // 🔹 fetch data
  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const res = await api.get("/unit");
        setUnits(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUnits();
  }, []);

  // 🔹 safe getter for nested data
  const get = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  // 🔹 unique values helper
  const unique = (path) =>
    [...new Set(units.map((u) => get(u, path)))].filter(Boolean).sort();

  // 🔹 bedrooms list
  const bedroomsList = useMemo(
    () => [...new Set(units.map((u) => u.bedrooms))].sort((a, b) => a - b),
    [units]
  );

  // 🔹 price ranges
  const priceRanges = {
    "under-1m": [0, 1000000],
    "1m-2m": [1000000, 2000000],
    "2m-3m": [2000000, 3000000],
    "3m-5m": [3000000, 5000000],
    "5m-plus": [5000000, Infinity],
  };

  // 🔹 filter logic
  const applyFilters = () => {
    let result = [...units];
    const f = filters;

    if (f.search) {
      const q = f.search.toLowerCase();
      result = result.filter((u) =>
        `${u.title_en} ${u.description_en} ${u.project?.name_en}`
          .toLowerCase()
          .includes(q)
      );
    }

    if (f.bedrooms)
      result = result.filter((u) => u.bedrooms === Number(f.bedrooms));

    if (f.developer)
      result = result.filter((u) =>
        u.project?.developer?.name_en
          ?.toLowerCase()
          .includes(f.developer.toLowerCase())
      );

    if (f.zone)
      result = result.filter((u) =>
        u.project?.zone?.name_en
          ?.toLowerCase()
          .includes(f.zone.toLowerCase())
      );

    if (f.project)
      result = result.filter((u) =>
        u.project?.name_en?.toLowerCase().includes(f.project.toLowerCase())
      );

    if (f.status)
      result = result.filter((u) =>
        u.status?.toLowerCase().includes(f.status.toLowerCase())
      );

    if (f.price) {
      const range = priceRanges[f.price];
      if (range) {
        const [min, max] = range;
        result = result.filter((u) => u.price >= min && u.price < max);
      }
    }

    setFiltered(result);
  };

  // 🔹 reset filters
  const resetFilters = () => {
    const empty = {
      search: "",
      bedrooms: "",
      developer: "",
      zone: "",
      project: "",
      status: "",
      price: "",
    };

    setFilters(empty);
    setFiltered(units);
  };

  // 🔹 loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <Hero
        title="Where Visionary Design Meets Daily Life"
        text="Experience a collection of residences designed as personal sanctuaries."
        image={heroImage}
        have_Button={false}
      />

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-wrap gap-3 p-4 border border-[#8E1616] rounded-lg">

          {/* SEARCH */}
          <input
            className="border p-2 flex-1"
            placeholder="Search units..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />

          {/* BEDROOMS */}
          <select
            value={filters.bedrooms}
            onChange={(e) =>
              setFilters({ ...filters, bedrooms: e.target.value })
            }
          >
            <option value="">Bedrooms</option>
            {bedroomsList.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* DEVELOPER */}
          <select
            value={filters.developer}
            onChange={(e) =>
              setFilters({ ...filters, developer: e.target.value })
            }
          >
            <option value="">Developer</option>
            {unique("project.developer.name_en").map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          {/* ZONE */}
          <select
            value={filters.zone}
            onChange={(e) =>
              setFilters({ ...filters, zone: e.target.value })
            }
          >
            <option value="">Zone</option>
            {unique("project.zone.name_en").map((z) => (
              <option key={z}>{z}</option>
            ))}
          </select>

          {/* PROJECT */}
          <select
            value={filters.project}
            onChange={(e) =>
              setFilters({ ...filters, project: e.target.value })
            }
          >
            <option value="">Project</option>
            {unique("project.name_en").map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          {/* STATUS */}
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value="">Status</option>
            {unique("status").map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          {/* PRICE */}
          <select
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: e.target.value })
            }
          >
            <option value="">Price</option>
            <option value="under-1m">Under 1M</option>
            <option value="1m-2m">1M - 2M</option>
            <option value="2m-3m">2M - 3M</option>
            <option value="3m-5m">3M - 5M</option>
            <option value="5m-plus">5M+</option>
          </select>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={applyFilters}
            className="bg-red-800 text-white px-10 py-2 rounded-md"
          >
            Search
          </button>

          <button
            onClick={resetFilters}
            className="border px-10 py-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <p className="text-gray-500">
          Showing{" "}
          <span className="font-bold text-black">{filtered.length}</span>{" "}
          results
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
        {filtered.length > 0 ? (
          filtered.map((u) => (
            <Cards_for_units
              key={u.id}
              id={u.id}
              name={u.title_en}
              image={u.images?.[0] || "/placeholder.jpg"}
              status={u.status}
              bedrooms={u.bedrooms}
              bathrooms={u.bathrooms}
              size={u.size}
              price={u.price}
              description={u.description_en}
              projectName={u.project?.name_en}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-20">
            No units found
          </div>
        )}
      </div>
    </>
  );
}