import React, { useState, useEffect } from "react";
import Card from "../../components/shared/Card/homecard";

interface Tour {
  title: string;
}

const tours: Tour[] = [
  {
    title: "Tour 1",
  },
  {
    title: "Tour 2",
  },
  {
    title: "Tour 3",
  },
  {
    title: "Tour 4",
  },
  {
    title: "Tour 5",
  },

  {
    title: "Tour 2",
  },
  {
    title: "Tour 3",
  },
  {
    title: "Tour 4",
  },
  {
    title: "Tour 5",
  },
  {
    title: "Tour 2",
  },
  {
    title: "Tour 3",
  },
  {
    title: "Tour 4",
  },
  {
    title: "Tour 5",
  },
  {
    title: "Tour 2",
  },
  {
    title: "Tour 3",
  },
  {
    title: "Tour 4",
  },
  {
    title: "Tour 5",
  },
];

export default function TourDetail() {
  const [tourData, setTourData] = useState<Tour[]>([]);

  useEffect(() => {
    setTourData(tours);
  }, []);

  return (
    <div>
    <h1 className='text-6xl ml-10 m-3 text-white text-left jomhuria-regular'>Popular</h1>
    <div className="flex flex-nowrap overflow-x-auto gap-2 p-2">
      {tourData.map((tour, index) => (
        <div key={index}>
          <Card
            title={tour.title}
            imgUrl={""}
          />
        </div>
      ))}
    </div>
        <h1 className='text-6xl ml-10 m-3 text-white text-left jomhuria-regular'>You May Like</h1>
        <div className="flex flex-nowrap overflow-x-auto gap-2 p-2">
          {tourData.map((tour, index) => (
            <div key={index}>
              <Card
                title={tour.title}
                imgUrl={""}
              />
            </div>
          ))}
        </div>
        </div>
  );
}
