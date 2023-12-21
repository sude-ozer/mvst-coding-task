import { render } from "@testing-library/react";
import { filterRepositories, getLanguages } from "./filters";
import { mockRepoData } from "../common/mockRepoData";
import { RepoData } from "../services/GithubAPIService";

const filteredReposWithKeyword: RepoData[] = [
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
    }
];

const filteredReposWithLanguage: RepoData[] = [
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
    }
];

const filteredReposWithKeywordLanguage: RepoData[] = [
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
];

const filteredLanguageList: string[] = ["All", "C",  "C++", "CSS", "HTML", "Java", "JavaScript", "Python", "TypeScript"];

describe("filterRepositories", () => {
    test('Should return empty list if empty repository list is given', () => {
        expect(filterRepositories([])).toEqual([]);
    });

    test('Should return correct repositories according to given keyword', () => {
        const keyword = "application";
        expect(filterRepositories(mockRepoData, keyword)).toEqual(filteredReposWithKeyword);
    });

    test('Should return correct repositories according to given language', () => {
        const language = "C";
        const keyword = "";
        expect(filterRepositories(mockRepoData, keyword, language)).toEqual(filteredReposWithLanguage);
    });

    test('Should return correct repositories according to given keyword and language', () => {
        const language = "Python";
        const keyword = "project";
        expect(filterRepositories(mockRepoData, keyword, language)).toEqual(filteredReposWithKeywordLanguage);
    });
});

describe("getLanguages", () => {
    test('Should return empty list if empty language list is given', () => {
        expect(getLanguages([])).toEqual([]);
    });

    test('Should return correct unique languages used in given repository list', () => {
        expect(getLanguages(mockRepoData).sort()).toEqual(filteredLanguageList);
    });
});