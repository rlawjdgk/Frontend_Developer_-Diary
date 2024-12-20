import styled from "styled-components";
import PostForm from "../components/Postform";
import TimeLine from "../components/TimeLine";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  line-gap-override: 50px;
  /* overflow-y: scroll; */
`;

const Home = () => {
  return (
    <Wrapper>
      <PostForm />
      <TimeLine />
    </Wrapper>
  );
};

export default Home;
