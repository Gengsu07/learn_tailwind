import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col max-container gap-10"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px]">
        Sign Up for <span className="text-coral-red">Updates</span>
        <br />& Newsletter
      </h3>
      <div className="flex justify-between items-center max-w-xl">
        <input type="text" placeholder="Email Address" className="input" />
        <div>
          <Button label={"Sign Up"} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
