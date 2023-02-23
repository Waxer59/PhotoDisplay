export const getImageById = (photos, id) =>
  photos.filter((photo) => (String(photo.id) === id ? photo : null));
