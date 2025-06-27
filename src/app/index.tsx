import { CONSTANTS } from "@/constants";
import { ImageSection } from "./components/templates/ImageSection.template";
import { BsjImageType } from "@/types/bsjImage.type";

type Props = {
  defaultImages: BsjImageType[];
  allImages: BsjImageType[];
  currentImages: BsjImageType[];
  randomImages: BsjImageType[];
};

export const Index = ({
  defaultImages,
  allImages,
  currentImages,
  randomImages,
}: Props) => {
  const images = [defaultImages, allImages, currentImages, randomImages];
  return (
    <main className="flex justify-center py-8 px-4">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <div>
          <h1 className="text-3xl">{CONSTANTS.SITE.title}</h1>
          <p className="text-xl">{CONSTANTS.SITE.description}</p>
        </div>
        {CONSTANTS.IMAGE_SECTIONS.map((section, index) => (
          <ImageSection
            key={index}
            description={section.description}
            endpoint={section.endpoint}
            imageSources={[...images[index].map((image) => image.path)]}
            title={section.title}
            noCache={section.noCache}
          />
        ))}
      </div>
    </main>
  );
};
