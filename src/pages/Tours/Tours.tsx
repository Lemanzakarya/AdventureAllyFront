import React, { useState, useEffect } from "react";
import Card from "../../components/shared/Card";
// import axios from "axios";

interface Tour {
  title: string;
  location: string;
  price: string;
  tags?: string[];
}

const tours: Tour[] = [
  {
    title: "Tour 1",
    location: "Alanya, Antalya",
    price: "599,99",
    tags: ["ATV Tour", "Rafting", "Camping"],
  },
  {
    title: "Tour 2",
    location: "Foca, Izmir",
    price: "499,00",
    tags: ["ATV Tour"],
  },
  {
    title: "Tour 3",
    location: "Kas, Antalya ",
    price: "809,99",
    tags: ["Rafting", "Camping"],
  },
  {
    title: "Tour 4",
    location: "Konyaalti, Antalya ",
    price: "300,00",
    tags: ["Camping", "Hiking"],
  },
  {
    title: "Tour 5",
    location: "Kemer, Antalya ",
    price: "256,99",
    tags: ["Rafting"],
  },
];

const TourDetail: React.FC = () => {
  const [tourData, setTourData] = useState<Tour[]>([]);
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string>("");

  useEffect(() => {
  // useEffect(() => {
  //   axios.get("/api/tours")
  //     .then((response) => response.json())
  //     .then((data: Tour[]) => setTourData(data))
  //     .catch((error) => console.error(error));
  // }, []);
    setTourData(tours);
  }, []);

  const handleLocationFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationFilter(event.target.value);
  };

  const handleTagFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagFilter(event.target.value);
  };

  const handleFilterClick = () => {
    const filteredData = tours.filter((tour) => {
      const locationMatch = tour.location.toLowerCase().includes(locationFilter.toLowerCase());
      const tagMatch = tour.tags?.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ?? false;
      return locationMatch && tagMatch;
    });
    setTourData(filteredData);
  };

  return (
    <div className="m-auto pt-4 items-center w-full max-w-3xl">
      <div className="flex justify-between mb-4">
        {/* Location search bar */}
        <input
          type="text"
          placeholder="Search Location"
          className="p-2 border border-gray-300 rounded mr-2"
          value={locationFilter}
          onChange={handleLocationFilterChange}
        />
        {/* Tag search bar */}
        <input
          type="text"
          placeholder="Search Tour Type"
          className="p-2 border border-gray-300 rounded mr-2"
          value={tagFilter}
          onChange={handleTagFilterChange}
        />
        {/* Filter button */}
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={handleFilterClick}
        >
          Filter
        </button>
      </div>
      {tourData.map((tour, index) => (
        <div key={index} className="py-2">
          <Card
            title={tour.title}
            location={tour.location}
            price={tour.price}
            tags={tour.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default TourDetail;

