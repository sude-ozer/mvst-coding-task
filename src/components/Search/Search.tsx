import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type SearchProps = {
    languages: string[],
    searchKeyword: string,
    updateSearchKeyword: (newKeyword: string) => void,
    updateSelectedLanguage: (newLanguage: string) => void,
};

/**
 * Search component contains search input area and language dropdown menu to let user choose search queries
 * 
 * @param {string[]} languages - All languages used in all user repositories
 * @param {string} searchKeyword - Keyword written by the user in search input
 * @param updateSearchKeyword - Update the searchKeyword according to the new input
 * @param updateSelectedLanguage - Update the selected language according to the chosen value from dropdown menu
 * @returns {JSX.Element}
 */
export default function Search({
    languages,
    searchKeyword,
    updateSearchKeyword,
    updateSelectedLanguage
}: SearchProps) {

    /**
     * Updates the search keyword
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e - Search keyword input change event
     */
    const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSearchKeyword(e.target.value);
    }

    /**
     * Updates the language according to the chosen value
     * 
     * @param {SelectChangeEvent} e - Language change event
     */
    const onLanguageChange = (e: SelectChangeEvent) => {
        updateSelectedLanguage(e.target.value);
    }

    return (
        <Box sx={{ alignItems: 'flex', flexDirection: 'row' }} mb={2}>
            <TextField
                variant='outlined'
                placeholder='Find a repository...'
                value={searchKeyword}
                onChange={onKeywordChange}
                sx={{ width: '56%', pr: 1 }}
            />
            <FormControl sx={{ width: '40%' }}>
                <InputLabel>Language</InputLabel>
                <Select label='Language' onChange={onLanguageChange} >
                    {languages.map((language) => (
                        <MenuItem key={language} defaultValue='All' value={language}>
                            {language}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}