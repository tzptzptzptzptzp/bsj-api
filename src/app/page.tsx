import { Index } from ".";
import { getBsjImages } from "@/utils/api/getBsjImages.api";

export default async function Home() {
  const [defaultImages, allImages, currentImages, randomImages] =
    await Promise.all([
      getBsjImages("default"),
      getBsjImages("all"),
      getBsjImages("current"),
      getBsjImages("random"),
    ]);
  return (
    <Index
      defaultImages={defaultImages}
      allImages={allImages}
      currentImages={currentImages}
      randomImages={randomImages}
    />
  );
}
