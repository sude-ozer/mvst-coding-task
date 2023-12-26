import { Box, Divider, Link, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';
import { RepoData } from '../../services/GithubAPIService';
import { Search } from '../Search';
import { getLanguages, filterRepositories } from "../../utils/filters";

type ReposProps = {
    repositories: RepoData[],
};

/**
 * Repos component gets user's repositories and lists them, also contains a Search component to search in repositories
 * 
 * @param {RepoData[]} repositories - A specific user's repositories are given as a prop to list in the component
 * @returns {JSX.Element} 
 */
export default function Repos({
    repositories
}: ReposProps) {
    const [searchKeyword, setSearchKeyword] = React.useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('');
    const [shownRepos, setShownRepos] = React.useState<RepoData[]>(repositories);

    const repoLanguages = getLanguages(repositories);

    React.useEffect(() => {
        setShownRepos((selectedLanguage === 'All') ? 
            filterRepositories(repositories, searchKeyword) :
            filterRepositories(repositories, searchKeyword, selectedLanguage));
    }, [searchKeyword, selectedLanguage, repositories]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '-webkit-fill-available' }} mt={8}>
            <Search
                languages={repoLanguages}
                searchKeyword={searchKeyword}
                updateSearchKeyword={setSearchKeyword}
                updateSelectedLanguage={setSelectedLanguage}
            />
            {(searchKeyword.length !== 0) && <Typography color="text.secondary">
                {shownRepos.length} results for repositories matching {searchKeyword} 
            </Typography>}
            {(shownRepos.length !== 0) && (
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                    {shownRepos.map((repo, index) => (
                        <Box key={repo.id}>
                            <Divider />
                            <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Link href={repo.url} underline='none' color="primary.dark"> {repo.name} </Link>
                                    <Typography sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {repo.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        {repo.languages.nodes.map(language => (
                                            <Typography
                                                key={`${repo.id}${language.name}`}
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                                pr={0.5}
                                            > 
                                                {language.name}
                                            </Typography>
                                        ))}
                                        <Typography sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.secondary">
                                                {repo.forks.totalCount === 0 ?
                                                    "Forks: 0" : `Forks: ${repo.forks.totalCount}`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItem>
                        </Box>
                    ))}
                </List>
            )}
            <Divider />
        </Box>
    )
}