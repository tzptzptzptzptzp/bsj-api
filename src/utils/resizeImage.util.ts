import sharp from "sharp";

export const resizeImage = async (image: Buffer, size: string) => {
  return await sharp(image)
    .resize({
      width: parseInt(size),
      height: parseInt(size),
      fit: "fill",
    })
    .toBuffer();
};
