import React from "react";

//rsc
const Index = () => {
  return (
    <>
      Hero Banner
      <div className="products-heading">
        <h2>Best selling product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "priduct 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Index;
