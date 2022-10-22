export const getImageById = (photos, id) => {
  return photos.filter((photo) => (String(photo.id) === id ? photo : null));
};
