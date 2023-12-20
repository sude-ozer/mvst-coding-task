import { UserData } from "../services/GithubAPIService";
import { mockRepoData } from "./mockRepoData";

export const mockUserData: UserData = {
    user: {
        login: "sudeozer",
        id: 12345,
        name: "Sude Ozer",
        avatarUrl: "",
        email: "example@mail.com",
        bio: "Student in Munich",
        location: "Munich",
        followers: {
            __typename: "Follower",
            totalCount: 23,
        },
        following: {
            __typename: "Following",
            totalCount: 15,
        },
        repositories: {
            nodes: [
                ...mockRepoData,
            ],
            __typename: "Repositories",
        },
        __typename: "User",
    }
}