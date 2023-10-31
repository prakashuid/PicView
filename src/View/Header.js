import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getGalleryData} from '../Slice/galerySlice';
import Logo from '../Images/NewLogo.png'

const Header = ({ onImageUpload }) => {
  const exampleURL = '';

  const [imageURL, setImageURL] = useState(exampleURL);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(savedImages);
  }, []);
  const handleInputChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleUpload = () => {

    if (imageURL.trim() !== '') {
      const updatedImages = [...images, imageURL];
      setImages(updatedImages);
      dispatch(getGalleryData(images))
      localStorage.setItem('images', JSON.stringify(updatedImages));
      setImageURL('');
    }
    setImageURL('');
  };

  return (

    <div className='p-4 bg-slate-0 customStatic'>
      <div className="flex flex-row">
        <div className="basis-1/4"><img className='logo' src={Logo} alt='Pic Viewer'/></div>
        <div className="basis-1/2">
          <div className="image-upload">
            <input
              type="text"
              placeholder="Enter Image URL"
              value={imageURL}
              onChange={handleInputChange}
              className='w-9/12 p-2 bg-neutral-300 input-Rounded'

            />
            <button onClick={handleUpload} className='w-3/12 bg-blue-800 p-2 btn-Rounded'>Upload</button>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </div>


  );
};

export default Header;
