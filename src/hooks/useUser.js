import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

function useUser() {
  const hasTokenis = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    skip: !hasTokenis
  });
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return { data };
}
export default useUser;