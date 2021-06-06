import { gql } from "@apollo/client";

export const PHOTO_FRAGMENT = gql`
    fragment PhotoFragment on Photo {
        id
        file
        caption
        likes
        commentNumber
        isLiked
        likes
    }
`;

export const COMMENT_FRAGMENT = gql`
    fragment CommentFragment on Comment {
        id
        user {
            username
            avatar
        }
        payload
        isMine
        createdAt
    }
`;