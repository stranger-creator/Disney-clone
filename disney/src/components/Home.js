import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("movies").get();

        const dataPromises = snapshot.docs.map(async (doc) => {
          const movieData = { id: doc.id, ...doc.data() };

          switch (movieData.type) {
            case "recommend":
              return { recommend: movieData };

            case "new":
              return { newDisney: movieData };

            case "original":
              return { original: movieData };

            case "trending":
              return { trending: movieData };

            default:
              return null;
          }
        });

        const movieDataArray = await Promise.all(dataPromises);
        const movieData = movieDataArray.reduce((acc, curr) => ({ ...acc, ...curr }), {});

        dispatch(setMovies(movieData));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    };

    fetchData();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
