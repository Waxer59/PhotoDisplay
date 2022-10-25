export const getImagesByLabel = (photos, label) => {
  label = label.toLowerCase().trim();
  return photos.filter((photo) =>
    photo.label?.toLowerCase().trim().includes(label)
  );
};
