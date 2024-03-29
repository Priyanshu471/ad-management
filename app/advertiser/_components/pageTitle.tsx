import React from "react";

interface Params {
  title: string;
  sub: string;
}

const PageTitle = ({ title, sub }: Params) => {
  return (
    <>
      <h1 className="text-3xl text-primary2 font-semibold mb-2"> {title} </h1>
      <span className="text-muted-dark block mb-5"> {sub} </span>
    </>
  );
};

export default PageTitle;
