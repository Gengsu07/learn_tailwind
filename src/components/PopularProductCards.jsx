import { star } from "../assets/icons";

const PopularProductCards = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-slate-gray font-montserrat text-xl leading-normal">
          (4.5)
        </p>
      </div>

      <h3 className="font-semibold font-palanquin text-2xl mt-2 leading-normal">
        {name}
      </h3>
      <p className="text-2xl font-montserrat mt-2 font-semibold text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCards;
