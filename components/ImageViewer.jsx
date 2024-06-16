import { Image } from "react-native";

function ImageViewer({ placeholderImageSource, styles, selectedImage}) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
  return (
    <Image source={imageSource} style={styles} />
  )
};

export default ImageViewer