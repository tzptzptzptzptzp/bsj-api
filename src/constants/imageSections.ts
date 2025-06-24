type ImageSection = {
  title: string;
  description: string;
  endpoint: string;
  imageSources: string[];
};

export const IMAGE_SECTIONS: ImageSection[] = [
  {
    title: "デフォルト",
    description: "デフォルトで設定されているアイコンが返されます。",
    endpoint: "/api/bsj/default",
    imageSources: ["/api/bsj/default"],
  },
  {
    title: "イベント",
    description: "今月のイベントアイコンが返されます。",
    endpoint: "/api/bsj/current",
    imageSources: ["/api/bsj/current"],
  },
  {
    title: "ランダム",
    description:
      "存在するイベントアイコンの中からランダムでアイコンが返されます。",
    endpoint: "/api/bsj/random",
    imageSources: ["/api/bsj/random"],
  },
];
