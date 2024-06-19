import { Makeswift } from "@makeswift/runtime/next";
import { strict } from "assert";

strict(
  process.env.MAKESWIFT_SITE_API_KEY,
  "MAKESWIFT_SITE_API_KEY is required"
);

export const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY);

const main = async () => {
  const snapshot = await client.getPageSnapshot("/page", {
    siteVersion: "Working",
  });

  console.log(JSON.stringify(snapshot, null, 2));
};

main()
  .then(() => console.log("Done"))
  .catch(console.error);
