type ImageSectionData = {
  title: string;
  description: string;
  endpoint: string;
  imageSources: string[];
};

export const IMAGE_SECTION_DATA: ImageSectionData[] = [
  {
    title: "デフォルト",
    description: "デフォルトで設定されているアイコンが返されます。",
    endpoint: "/api/bsj/default",
    imageSources: ["/api/bsj/default"],
  },
];
