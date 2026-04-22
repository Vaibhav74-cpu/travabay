import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ value, text }) {
  return (
    <div className="flex items-center">
      
      {/* Stars */}
      <span className="text-yellow-400">
        {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span className="text-yellow-400">
        {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span className="text-yellow-400">
        {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span className="text-yellow-400">
        {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span className="text-yellow-400">
        {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      {/* Text */}
      {text && (
        <span className="text-sm font-medium pl-2 mt-1">
          {text}
        </span>
      )}
    </div>
  );
}

export default Rating;