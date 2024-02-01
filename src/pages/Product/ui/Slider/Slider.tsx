import React, {useState, useEffect} from 'react';

import * as Styles from './Slider.styles';

interface SliderProps {
  images: string[];
}

export const Slider: React.FC<SliderProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [mainImageHeight, setMainImageHeight] = useState<number | null>(null);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setThumbnailIndex(index);
  };

  useEffect(() => {
    // Вычислите высоту основной фотографии при загрузке
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
      setMainImageHeight(mainImage.clientHeight);
    }
  }, []);

  const renderThumbnails = () => {
    const visibleThumbnails = images.length > 3 ? 3 : images.length;
    const totalThumbnails = images.length;
    const startIndex = thumbnailIndex - Math.floor(visibleThumbnails / 2);

    const thumbnails = [];

    for (let i = 0; i < visibleThumbnails; i++) {
      const index = (startIndex + i + totalThumbnails) % totalThumbnails;
      thumbnails.push(
        <Styles.ThumbnailImage
          key={index}
          src={images[index]}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => handleThumbnailClick(index)}
          className={index === currentIndex ? 'active' : ''}
        />
      );
    }

    return thumbnails;
  };

  return (
    <Styles.SliderContainer>
      <Styles.Thumbnails>
        {renderThumbnails()}
      </Styles.Thumbnails>
      <Styles.MainSlide>
        <Styles.MainImage
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          id="main-image"
        />
      </Styles.MainSlide>
    </Styles.SliderContainer>
  );
};
