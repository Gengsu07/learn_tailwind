const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  const buttonstyle = `${
    backgroundColor
      ? `${backgroundColor} ${borderColor} ${textColor} rounded-full flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-md border leading-none `
      : `bg-coral-red text-white rounded-full flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-md border border-coral-red leading-none ${
          fullWidth && "w-full"
        }`
  }`;
  return (
    <button className={buttonstyle}>
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
