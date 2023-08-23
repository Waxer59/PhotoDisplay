export const getImageById = (photos, id) =>
  photos.filter((photo) => `${photo.id}` === id)[0];
