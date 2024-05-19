import { useState, useEffect } from "react";
import Card from "../../components/shared/Card";
"use client";

interface Tour {
  title: string;
  location: string;
  price: string;
  tags?: string[];
}
const tours: Tour[] = [
  {
    title: "Tour 1",
    location: "Konyaalti, Antalya",
    price: "599,99",
    tags: ["ATV Tour", "Rafting", "Camping"],
  },
  {
    title: "Tour 2",
    location: "Konyaalti, Antalya 2",
    price: "499,00",
    tags: ["ATV Tour"],
  },
  {
    title: "Tour 3",
    location: "Konyaalti, Antalya 3",
    price: "809,99",
    tags: ["Rafting", "Camping"],
  },
  {
    title: "Tour 4",
    location: "Konyaalti, Antalya 4",
    price: "300,00",
    tags: ["Camping", "Hiking"],
  },
  {
    title: "Tour 5",
    location: "Konyaalti, Antalya 5",
    price: "256,99",
    tags: ["Rafting"],
  },
];
export default function TourDetail() {
  const [tourData, setTourData] = useState<Tour[]>([]);

  useEffect(() => {
    setTourData(tours);
  }, []);

  // useEffect(() => {
  //   axios.get("/api/tours")
  //     .then((response) => response.json())
  //     .then((data: Tour[]) => setTourData(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="items-center grid grid-cols-2 gap-4">
      {tourData.map((tour, index) => (
        <div>
          <Card
            key={index}
            title={tour.title}
            location={tour.location}
            price={tour.price}
            tags={tour.tags}
          />
        </div>
      ))}
    </div>
  );
}