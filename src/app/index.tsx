import Image from "next/image";
import { ImageSection } from "./components/templates/ImageSection.template";

export const Index = () => {
  return (
    <main className="flex justify-center py-16">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <div>
          <h1 className="text-3xl">美少女ちゃんAPI</h1>
          <p className="text-xl">
            このAPIは、美少女ちゃんのアイコンを返すAPIです。
          </p>
        </div>
        <ImageSection
          description="デフォルトではその月に合ったイベントアイコンを返却します。"
          endpoint="/api/bsj/default"
          imageSources={[
            "/api/bsj/default",
            "/api/bsj/random",
            "/api/bsj/default",
            "/api/bsj/random",
            "/api/bsj/default",
            "/api/bsj/random",
          ]}
          title="デフォルト"
        />
      </div>
    </main>
  );
};
