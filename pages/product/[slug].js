import React from "react";
import { urlFor } from "../../lib/client";

const ProductDetail = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div classname="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" &&  slug.current == "${slug}"][0]`;
  const productQuery = '*[_type == "product]';

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  return {
    prosp: { product, products },
  };
};

export default ProductDetail;
