import React, { useState } from 'react';

function NewPostForm() {
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleRemoveCoverImage = () => {
    setCoverImage(null);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const togglePreviewMode = () => {
    setPreviewMode((prevPreviewMode) => !prevPreviewMode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cover-image-input">Add a Cover Image</label>
        {coverImage ? (
          <div>
            <img src={URL.createObjectURL(coverImage)} alt="Cover" />
            <button type="button" onClick={handleRemoveCoverImage}>
              Remove
            </button>
          </div>
        ) : (
          <input
            id="cover-image-input"
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
          />
        )}
      </div>
      <div>
        <label htmlFor="title-input">Title</label>
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content-input">Content</label>
        <textarea
          id="content-input"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <button type="button" onClick={togglePreviewMode}>
          Preview
        </button>
      </div>
      {previewMode ? (
        <div>
          <h2>{title}</h2>
          <img src={URL.createObjectURL(coverImage)} alt="Cover" />
          <p>{content}</p>
        </div>
      ) : null}
      <div>
        <button type="submit">Publish</button>
      </div>
    </form>
  );
}

export default NewPostForm;
