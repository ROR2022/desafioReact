import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateStyle.css';
import { mainEmail, passwordMainEmail, publicUrl } from '../assets/constants/constants';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showTitleHelp, setShowTitleHelp] = useState(false);
  const [showContentHelp, setShowContentHelp] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(publicUrl, {
        title,
        content,
        imageFile,
      }, {
        auth: {
          username: mainEmail,
          password: passwordMainEmail,
        },
      });
      console.log(response);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <>
      <div className="container">
        <Link to="/" className="btn btn-secondary">Inicio</Link>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {showImageInput ? (
                    <div className="form-group">
                      <label htmlFor="image">Image:</label>
                      <input
                        type="file"
                        id="image"
                        className="form-control-file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  ) : (
                    <button type="button" className="btn btn-link" onClick={() => setShowImageInput(true)}>
                      Add a cover image
                    </button>
                  )}
                 <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      onFocus={() => setShowTitleHelp(true)}
                      onBlur={() => setShowTitleHelp(false)}
                      placeholder="New post title here..."
                      style={{ fontWeight: "bold" }}
                    />
                    {showTitleHelp ? (
                      <p className="form-text text-muted">
                        Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence. Use keywords where appropriate to help ensure people can find your post by search.
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea
                      id="content"
                      className="form-control"
                      value={content}
                      onChange={(event) => setContent(event.target.value)}
                      onFocus={() => setShowContentHelp(true)}
                      onBlur={() => setShowContentHelp(false)}
                      placeholder="Write your post content here..."
                    />
                   

                    {showContentHelp ? (
                      <p className="form-text text-muted">
                        Use Markdown to write and format posts. Commonly used syntax. Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL. See a list of supported embeds. In addition to images for the post's content, you can also drag and drop a cover image.
                      </p>
                    ) : null}
                  </div>
  
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary">Publish</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      </div>
    </>
  );
};

export default CreatePost;
