import { createClient } from "next-sanity";

export function getClient() {
  const client = createClient({
    projectId: "seu73xjg",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  });
  return client;
}
