import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CreateStyle.css";
import DevtoNavbar from "../components/DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../components/DevtoFooter/DevtoFooter";
import { useNavigate } from "react-router-dom";
import useDevto from "../hooks/useDevto";
import { useParams } from "react-router-dom";
import { getDataPost, editDataPost } from "../api/crudPosts";
import { getDataUser } from "../api/crudUsers";


const EditPost = () => {
  const [title, setTitle] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [content, setContent] = useState("");
  const [showTitleHelp, setShowTitleHelp] = useState(false);
  const [showContentHelp, setShowContentHelp] = useState(false);
  const [dataCard, setDataCard] = useState({});
  const [dataUserPost, setDataUserPost] = useState({});
  const params = useParams();

  const navigate = useNavigate();
  const [_, __, dataUser] = useDevto();

  useEffect(() => {
    if(params?.id){
      retriveDataCard(params.id);
    }
  }, [])
  useEffect(() => {
    if (dataCard?._id) {
      retriveDataUser();
    }
    if(dataCard.titlePost) setTitle(`${dataCard.titlePost}`)
    if(dataCard.urlImage) setUrlImage(`${dataCard.urlImage}`)
    if(dataCard.textPost) setContent(`${dataCard.textPost}`)
  }, [dataCard]);
  
  const retriveDataCard = async (id) => {
    try {
      const result = await getDataPost(id);
      console.log("DataPost from DB:..", result);
      if (result?.dataPost) {
        setDataCard({ ...result.dataPost });
      }
    } catch (error) {
      console.log("Error retriving data card:..");
    }
  };

  const retriveDataUser = async () => {
    try {
      const result = await getDataUser(dataCard.user);
      console.log("Result getDataUser:..", result);
      if (result._id) {
        setDataUserPost({ ...result });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataPost = {
      ...dataCard,
      urlImage: urlImage,
      titlePost: title,
      textPost: content,
    };

    try {
      const result = await editDataPost(dataPost);
      console.log("Result EditDataPost:..", result);
    } catch (error) {
      console.log(error);
    }
    setContent("");
    setTitle("");
    setUrlImage("");
    navigate("/");
  };

  return (
    <>
      <DevtoNavbar />
      <h2>Editando Post</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="urlImage">URL Image:</label>
                    <input
                      type="text"
                      id="urlImage"
                      className="form-control"
                      value={urlImage}
                      onChange={(event) => setUrlImage(event.target.value)}
                      onFocus={() => setShowTitleHelp(true)}
                      onBlur={() => setShowTitleHelp(false)}
                      placeholder="URL Image here..."
                      style={{ fontWeight: "bold" }} // Agregar estilo en línea para negrita
                    />
                  </div>
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
                      style={{ fontWeight: "bold" }} // Agregar estilo en línea para negrita
                    />
                    {showTitleHelp ? (
                      <p className="form-text text-muted">
                        Think of your post title as a super short (but
                        compelling!) description — like an overview of the
                        actual post in one short sentence. Use keywords where
                        appropriate to help ensure people can find your post by
                        search.
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
                      placeholder="Write your post content here..." // Agregar placeholder
                    />
                    {showContentHelp ? (
                      <p className="form-text text-muted">
                        Use Markdown to write and format posts. Commonly used
                        syntax. Embed rich content such as Tweets, YouTube
                        videos, etc. Use the complete URL. See a list of
                        supported embeds. In addition to images for the post's
                        content, you can also drag and drop a cover image.
                      </p>
                    ) : null}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
      <DevtoFooter />
    </>
  );
};

export default EditPost;
