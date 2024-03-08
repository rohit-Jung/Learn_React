import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config.service";
import { Container, PostForm } from "../components";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div>
      <Container>{post && <PostForm post={post} />}</Container>
      {/* Conditional rendering because the post details wasn't being displayed */}
    </div>
  );
}

export default EditPost;
