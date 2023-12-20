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

export default function Search({
    languages,
    searchKeyword,
    updateSearchKeyword,
    updateSelectedLanguage
}: SearchProps) {

    const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSearchKeyword(e.target.value);
    }

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
                <Select label='Language' onChange={onLanguageChange} autoWidth >
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