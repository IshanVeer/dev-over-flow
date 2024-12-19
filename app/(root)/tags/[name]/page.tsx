import React from "react";

const page = ({ params }: any) => {
  const { name } = params;
  console.log(name, "name");
  return <div>{name}</div>;
};

export default page;
