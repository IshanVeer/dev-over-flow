import React from "react";

const Card = ({
  children,
  padding,
  margin,
}: {
  children: React.ReactNode;
  padding?: string;
  margin?: string;
}) => {
  return (
    <div className={` card-wrapper  rounded-lg  ${padding} ${margin}`}>
      {children}
    </div>
  );
};

export default Card;
