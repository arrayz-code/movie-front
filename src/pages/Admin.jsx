import React, { useState } from 'react';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleImageChange = (event) => {
    // Implementar lógica para manejar el archivo de imagen seleccionado
    // Por ejemplo, podrías usar FileReader para mostrar una vista previa de la imagen antes de subirla al servidor
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí debes implementar la lógica para enviar los datos al backend y agregar la película en la base de datos
    // Por ahora, simplemente mostramos los valores ingresados por el usuario
    console.log('Título:', title);
    console.log('Género:', genre);
    console.log('Imagen:', image);
  };

  return (
    <div>
      <h1>Sección administrativa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" value={genre} onChange={handleGenreChange} />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Agregar película</button>
      </form>
    </div>
  );
};

export default Admin;
