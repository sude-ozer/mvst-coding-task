import { RepoData } from "../services/GithubAPIService";

export const mockRepoData: RepoData[] = [
    {
        id: 1,
        name: "OS Homework",
        description: "First Bachelor Homework",
        url: "mockurl.com",
        forks: {
            __typename: "Forks",
            totalCount: 1,
        },
        languages: {
            nodes: [
                { name: 'C++', __typename: 'Language' },
                { name: 'C', __typename: 'Language' },
            ],
            __typename: "Languages",
        },
    },
    {
        id: 1,
        name: "Pet Mobile Application",
        description: "Bachelor Design Project",
        url: "mockurl.com",
        forks: {
            __typename: "Forks",
            totalCount: 4,
        },
        languages: {
            nodes: [
                { name: 'HTML', __typename: 'Language' },
                { name: 'CSS', __typename: 'Language' },
                { name: 'JavaScript', __typename: 'Language' },
                { name: 'TypeScript', __typename: 'Language' },
            ],
            __typename: "Languages",
        },
    },
    {
        id: 1,
        name: "Web Application Backend",
        description: "Bachelor Design Project",
        url: "mockurl.com",
        forks: {
            __typename: "Forks",
            totalCount: 4,
        },
        languages: {
            nodes: [
                { name: 'Java', __typename: 'Language' },
                { name: 'Python', __typename: 'Language' }
            ],
            __typename: "Languages",
        },
    },
    {
        id: 1,
        name: "AI Project",
        description: "Lecture Term Project",
        url: "mockurl.com",
        forks: {
            __typename: "Forks",
            totalCount: 4,
        },
        languages: {
            nodes: [
                { name: 'Python', __typename: 'Language' },
            ],
            __typename: "Languages",
        },
    }
]