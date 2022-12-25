import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "c6teusea",
  dataset: "production",
  apiVersion: "2002-06-02",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
