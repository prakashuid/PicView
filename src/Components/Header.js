import React,{useState,useEffect} from 'react'
import ImageUpload from '../View/ImageUpload'
const Header = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(savedImages);
  }, []);

  const handleImageUpload = (url) => {
    const updatedImages = [...images, url];
    setImages(updatedImages);
    localStorage.setItem('images', JSON.stringify(updatedImages));
  };
  return (
    <div className='p-4'>
    <div className="flex flex-row">
      <div className="basis-1/4"></div>
      <div className="basis-1/2"> <ImageUpload onImageUpload={handleImageUpload} /></div>
      <div className="basis-1/4"></div>
    </div>
  </div>
  )
}

export default Header