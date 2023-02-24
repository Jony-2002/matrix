import React from "react";

interface SolutionCardProps {
  image: string;
  subtitle: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ image, subtitle }) => {
  return (
    <div className="card-box flex flex-col justify-center items-center gap-y-5 text-center px-6 py-14 rounded-xl">
      <img className="h-[170px]" src={image} alt="" />
      <p>{subtitle}</p>
    </div>
  );
};

export default SolutionCard;
