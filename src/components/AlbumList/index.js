import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './AlbumList.css';

function AlbumList() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
  }, [userId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="album-list-container">
      <h2 className="album-list-title">Список альбомів</h2>
      <button onClick={goBack} className='goBack-btn'>Назад</button>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="album-list-item">
            {album.title}
            <Link to={`/photos/${album.id}`}>Фото</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
