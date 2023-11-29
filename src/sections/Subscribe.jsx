import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col max-container gap-10"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex items-center max-sm:flex-col w-full lg:max-w-[40%] gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Email Address" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Sign Up"} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
