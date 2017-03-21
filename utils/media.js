import { PixelRatio } from 'react-native';
export default (width, height) => {
  const scale = PixelRatio.getPixelSizeForLayoutSize;
  return thumbnail => {
    const url = `https://media.graphcms.com/resize=w:${scale(width)},h:${scale(height)},f:crop,a:center/${thumbnail.handle}`;
    return url;
  };
};
