import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  imgUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imgUrl }: CardProps) => {
  return (
    <Link
      to="#"
      className="flex-shrink-0 w-36 h-36 md:mx-2 md:my-0 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="rounded-lg w-full h-full object-cover"
        src={imgUrl}
        alt={title}
      />
    </Link>
  );
};

export default Card;
