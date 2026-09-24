import { useGetPhotoByIdQuery } from "../../../services/pexelsApi";
import styles from "./ProductImage.module.css";

function ProductImage({ photoId, alt }) {
  const { data: photo, isLoading, isError } = useGetPhotoByIdQuery(photoId);

  if (isLoading) {
    return <div className={styles.placeholder} aria-hidden="true" />;
  }

  if (isError || !photo) {
    return <div className={styles.placeholder}>Image unavailable</div>;
  }

  return (
    <img
      src={photo.src.medium}
      alt={alt || photo.alt}
      className={styles.image}
      loading="lazy"
    />
  );
}

export default ProductImage;
