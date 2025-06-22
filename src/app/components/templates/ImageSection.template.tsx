import Image from "next/image";
import { Code } from "../elements/Code";

type Props = {
  description: string;
  endpoint: string;
  imageSources: string[];
  title: string;
};

export const ImageSection = ({
  description,
  endpoint,
  imageSources,
  title,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl">{title}</h2>
          <Code>{endpoint}</Code>
        </div>
        <p>{description}</p>
      </div>
      <div>
        {imageSources.map((imageSource, index) => {
          return (
            <Image
              key={index}
              src={imageSource}
              alt="美少女ちゃん"
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </div>
  );
};
