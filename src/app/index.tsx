import { CONSTANTS } from "@/constants";
import { ImageSection } from "./components/templates/ImageSection.template";

export const Index = () => {
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
            imageSources={section.imageSources}
            title={section.title}
            noCache={section.noCache}
          />
        ))}
      </div>
    </main>
  );
};
