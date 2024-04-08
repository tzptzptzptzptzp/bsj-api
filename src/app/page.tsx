import Image from "next/image";
import { ImageSection } from "./components/templates/ImageSection.template";

export default function Home() {
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
          title="デフォルト"
        >
          <Image src="/api/bsj" alt="美少女ちゃん" width={200} height={200} />
        </ImageSection>
      </div>
    </main>
  );
}
