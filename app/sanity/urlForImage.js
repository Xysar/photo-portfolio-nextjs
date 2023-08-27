import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";

export function urlForImage(source) {
  return imageUrlBuilder(getClient()).image(source);
}
