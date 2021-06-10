import { gql, useQuery } from "@apollo/client";
import { logUserOut } from "../apollo";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      ...PhotoFragment
      user {
        username
        avatar
      }
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
    const { data } = useQuery(FEED_QUERY, {
      variables: { offset: 0 }
    });
    return (
        <div>
            <PageTitle title="Home" />
            {data?.seeFeed?.map((photo) => (
                <Photo key={photo.id} {...photo} />
            ))}
            <button onClick={() => logUserOut()}>Log out now!</button>
        </div>
    );
}
export default Home;