import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageUpload.css'; 


const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;

  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL2,
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
      }
      setIsloading(false);
    }
  }

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(file);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <div className='image-upload-container'>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="title">Check Your Seed Quality</span>
        </div>
      </nav>
      <div className="container mt-3 image-upload-container">
        <div className="image-preview-container">
          {image && <img src={preview} alt="Seed Preview" className="img-fluid mb-3" />}
          {!image && (
            <div className="mb-3">
              <input type="file" accept="image/*" onChange={onSelectFile} />
            </div>
          )}
        </div>
        <div className="data-details">
          {data && (
            <div className="mb-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Quality:</th>
                    <th scope="col">Accuracy:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.class}</td>
                    <td>{confidence}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {isLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Processing</p>
            </div>
          )}
          {data && (
            <div className="text-center">
              <button className="iBtn" onClick={clearData}>Check Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
