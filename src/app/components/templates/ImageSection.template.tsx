import Image from "next/image";
import { Code } from "../elements/Code";

type Props = {
  description: string;
  endpoint: string;
  imageSources: string[];
  title: string;
  noCache?: boolean;
};

export const ImageSection = ({
  description,
  endpoint,
  imageSources,
  title,
  noCache,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl">{title}</h2>
          <Code>{endpoint}</Code>
        </div>
        <p>{description}</p>
        <div className="flex items-center gap-2">
          <p className="text-xs leading-none">オプション：サイズ指定</p>
          <Code size="xs">{"?size={number}"}</Code>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {imageSources.map((imageSource, index) => {
          const src = noCache
            ? `${imageSource}?v=${new Date().getTime()}`
            : imageSource;

          // noCacheがtrueの場合、標準の<img>タグを返す
          if (noCache) {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${src}-${index}`}
                src={src}
                alt="美少女ちゃん"
                width={200}
                height={200}
                className="w-full h-auto aspect-square"
                loading="lazy"
              />
            );
          }

          // noCacheがfalseまたは未定義の場合、Imageコンポーネントを返す
          return (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt="美少女ちゃん"
              width={200}
              height={200}
              className="w-full h-auto aspect-square"
            />
          );
        })}
      </div>
    </div>
  );
};
