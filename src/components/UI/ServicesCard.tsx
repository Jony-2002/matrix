import React from "react";

interface ServicesCardProps {
  id: number;
  name: string;
}

const ServicesCard:React.FC<ServicesCardProps> = ({id, name}) => {
  return (
    <div key={id} className="my__service shadow px-8 py-3 rounded-full">
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default ServicesCard;
