const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col w-full rounded-[20px] shadow-3xl px-10 py-16 sm:w-[350px] max-sm:max-w-[350px]">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray break-words leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
