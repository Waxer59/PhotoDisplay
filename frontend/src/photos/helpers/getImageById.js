export const getImageById = (images, id) => {
  return images.map((image) => (String(image.id) === id ? image : null));
};
