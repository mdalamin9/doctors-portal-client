import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero min-h-max lg:my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-sm rounded-lg  shadow-2xl" alt=""/>
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
          <p className="my-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
