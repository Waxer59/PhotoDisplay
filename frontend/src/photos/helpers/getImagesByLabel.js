export const getImagesByLabel = (images, label) => {
  label = label.toLowerCase().trim();
  return images.filter((image) => image.label.includes(label));
};
