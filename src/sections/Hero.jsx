import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full min-h-screen flex justify-center xl:flex-row flex-col max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collection
        </p>
        <h1 className="font-palanquin text-8xl  mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white pr-10 z-10 xl:whitespace-nowrap relative">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex flex-wrap justify-start w-full mt-20 gap-16 ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin font-bold text-4xl">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute -bottom-[5%] gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {
                  setbigShoeImage(shoe.bigShoe);
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
