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
];
