import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "09yuirhf",
  dataset: "production",
  useCdn: true,
});
