import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

/**
 * Home Page is the landing page of the application.
 * Waits for a username input from the user.
 * 
 * @returns {JSX.Element}
 */
export default function HomePage() {
    const [username, setUsername] = React.useState<string>('');
    const navigate = useNavigate();

    return (
        <>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                mx={8}
            >
                <Typography
                    variant='h4'
                    gutterBottom
                    mt={8}
                    mb={8}
                    color='text.secondary'
                >
                    Explore your favourite GitHub user's repositories here!
                </Typography>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%' 
                    }}
                >
                    <TextField
                        placeholder="Enter username..."
                        value={username}
                        label="Username"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUsername(event.target.value);
                        }}
                        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                            if(event.key === 'Enter') {
                                navigate(`/user/${username}`)
                            }
                        }}
                        sx={{ width: '90%' }}
                    />
                    <Button
                        variant='contained'
                        onClick={() => 
                            navigate(`/user/${username}`)
                        }
                    >
                        <SendIcon />
                    </Button>
                </Box>
            </Box>
        </>
    )
}