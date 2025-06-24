type ImageSection = {
  title: string;
  description: string;
  endpoint: string;
  imageSources: string[];
  noCache?: boolean;
};

export const IMAGE_SECTIONS: ImageSection[] = [
  {
    title: "デフォルト",
    description: "デフォルトで設定されているアイコンが返されます。",
    endpoint: "/api/bsj/default",
    imageSources: ["/api/bsj/default"],
  },
  {
    title: "イベント(指定月)",
    description: "指定した月のイベントアイコンが返されます。",
    endpoint: "/api/bsj/{1-12}",
    imageSources: [
      ...Array.from({ length: 12 }, (_, i) => `/api/bsj/${i + 1}`),
    ],
  },
  {
    title: "イベント(今月)",
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
    noCache: true,
  },
];
