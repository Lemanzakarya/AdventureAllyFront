import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  location: string;
  price: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  location,
  price,
  tags,
}: CardProps) => {
  return (
    <Link to="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="ml-10 rounded-t-lg min-h-40 md:h-auto md:w-52 md:rounded-none md:rounded-s-lg"
        src="https://source.unsplash.com/720x400/?nature,water"
        alt=""
      />
      <div className="ml-10 min-w-64 max-w-80 flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {location}
        </p>
        <div className="flex flex-wrap gap-2 ">
          {tags?.map((tag, index) => (
            <div
              key={index}
              className="text-xs font-semibold bg-gray-200 p-1 rounded-full "
            >
              {tag}
            </div>
          ))}
        </div>
        <div>
        <button
          type="button"
          className="my-3 w-full text-white bg-green border border-gray-300 focus:outline-none hover:bg-darkergreen focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Look Through
        </button>
        </div>
      </div>
      <div className="mx-auto max-w-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {price} $
        </h5>
      </div> 
      
    </Link>
  );
};
export default Card; 