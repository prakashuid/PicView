import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
const ImageGallery = () => {
const galeryData =  useSelector((state)=>state.galleryData.getData)
const [images, setImages] = useState([]);
useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(savedImages);
  }, [galeryData]);
    return (
        <div className="image-gallery">
            <div className="image-item">
                <div className="columns-3xs">
                    {images.reverse().map((image, index) =>
                        <>
                            {index % 2 === 0 ? <img key={index} className="w-2/4 aspect-square customWidthOdd" src={image} alt={`Image ${index}`} />
                                : <img key={index} className="w-3/4 aspect-video customWidthEven" src={image} alt={`Image ${index}`} />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
