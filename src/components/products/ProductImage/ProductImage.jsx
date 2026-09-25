import { useGetPhotoByIdQuery } from "../../../services/pexelsApi";
import styles from "./ProductImage.module.css";

const ProductImage = ({ photoId, alt }) => {
  const { data: photo, isLoading, isError } = useGetPhotoByIdQuery(photoId);

  // Same size as the image, so the layout does not jump while loading
  if (isLoading) {
    return <div className={styles.placeholder} aria-hidden="true" />;
  }

  if (isError || !photo) {
    return <div className={styles.placeholder}>Image unavailable</div>;
  }

  // Uses the product name as alt text when given, otherwise the description from Pexels
  return (
    <img
      src={photo.src.medium}
      alt={alt || photo.alt}
      className={styles.image}
      loading="lazy"
    />
  );
};

export default ProductImage;
