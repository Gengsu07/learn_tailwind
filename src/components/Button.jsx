const Button = ({ label, iconUrl }) => {
  return (
    <button className="bg-coral-red text-white rounded-full flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-md border border-coral-red leading-none">
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="Arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
