const BASE_IMAGE = "bisyojo_chan_";

export const createImageName = (month: string) => {
  return `${BASE_IMAGE}${month.padStart(2, "0")}.png`;
};
