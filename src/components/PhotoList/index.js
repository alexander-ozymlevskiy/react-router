import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PhotoList.css";

function PhotoList() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, [albumId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="photo-list-container">
      <h2 className="photo-list-title">Фото</h2>
      <ul>
        <button onClick={goBack} className="goBack-btn">
          Назад
        </button>
        {photos.map((photo) => (
          <li key={photo.id} className="photo-list-item">
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
