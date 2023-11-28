import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 icon-text text-slate-gray text-center max-w-sm">
        {feedback}
      </p>
      <div className="flex justify-center items-center gap-2 mt-3">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <p className="font-palanquin font-bold text-center text-3xl mt-1 ">
        {customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
