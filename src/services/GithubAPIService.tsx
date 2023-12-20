import { gql } from "@apollo/client";

export type RepoData = {
    id: number;
    name: string;
    description?: string | null;
    url: string;
    forks: {
        __typename: string;
        totalCount: number;
    };
    languages: {
        __typename: string;
        nodes: {
            __typename: string;
            name: string;
        }[];
    };
};

export type UserData = {
    user: {
        __typename: string;
        login: string;
        id: number;
        name: string;
        avatarUrl: string;
        email: string;
        bio: string;
        location: string;
        followers: {
            __typename: string;
            totalCount: number;
        };
        following: {
            __typename: string;
            totalCount: number;
        };
        repositories: {
            __typename: string;
            nodes: RepoData[];
        };
    };
};

export const GET_USER = gql`
    query getUser($username: String!) {
        user(login: $username) {
            login
            id
            name
            avatarUrl
            email
            bio
            location
            followers {
                totalCount
            }
            following {
                totalCount
            }
            repositories(first: 50) {
                nodes {
                    id
                    name
                    description
                    url
                    forks {
                        totalCount
                    }
                    languages(first: 10) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`;