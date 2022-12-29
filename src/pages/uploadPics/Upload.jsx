import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FiUpload } from "react-icons/fi";

import "./upload.css";
import { api } from "../../api";

const Store = () => {
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await api.post("/upload", formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return api.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl = "";
    if (file) {
      imgUrl = await upload();
    }

    mutation.mutate({ img: imgUrl });
    imgUrl = "";
  };

  return (
    <>
      <div className="form">
        <div className="left">
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="right">
          <button className="uploadBtn" onClick={handleClick}>
            <FiUpload style={{ color: "#fff" }} />
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Store;
