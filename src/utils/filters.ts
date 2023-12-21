import { RepoData } from "../services/GithubAPIService";

/**
 * This function filters repositories according to given specifications.
 * 
 * @param {RepoData[]} repos - Repositories of the user
 * @param {string} keyword - Search keyword to filter the repositories
 * @param {string} language - Specified language to filter the repositories
 * @returns {RepoData[]} filtered repository list
 */
export function filterRepositories(repos: RepoData[], keyword?: string, language?: string): RepoData[] {
    if(keyword && language) {
        return repos.filter((repo) => repo.name.includes(keyword))
                    .filter((repo) => repo.languages.nodes.some((lang) => lang.name === language));
    } else if(keyword) {
        return repos.filter((repo) => repo.name.includes(keyword));
    } else if(language) {
        return repos.filter((repo) => repo.languages.nodes.some((lang) => lang.name === language));
    }

        return repos;
}

/**
 * This function creates a list of unique languages used in repositories.
 * 
 * @param {RepoData[]} repos - Repository list of the user
 * @returns {string[]} List of languages used in given repositories
 */
export function getLanguages(repos?: RepoData[]): string[] {
    const usedLanguages = new Array<string>();
    usedLanguages.push('All');

    if(repos) {
        repos.forEach((repo) => repo.languages.nodes
                                    .forEach((node) => usedLanguages.push(node.name)))
    }

    return usedLanguages.filter(onlyUnique);
}

function onlyUnique(value: string, index: number, array: string[]) {
    return array.indexOf(value) === index;
}
