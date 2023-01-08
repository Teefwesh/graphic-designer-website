import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { api } from "../../api";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Post from "../../components/post/Post";
import Upload from "../../components/uploadPics/Upload";
import BottomTab from "../../more/BottomTab";
import "./Posts.css";

const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading, error, data } = useQuery(["posts"], () =>
    api.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <>
      <Navigation />

      <Upload />

      <motion.div layout className="posts">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {error
              ? "Something went wrong"
              : isLoading
              ? "loading"
              : data.map((post) => {
                  return <Post post={post} key={post.id} />;
                })}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>

      <Footer />
      <BottomTab />
    </>
  );
};

export default Posts;
