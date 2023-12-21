import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import githubError from "../../assets/github_error.svg";

export default function ErrorPage() {
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
                my={8}
            >
                <img
                    src={githubError}
                    alt="ErrorImg"
                    style={{width: 200, height: 200}}
                />
                <Typography variant="h5">Looks like something went wrong!</Typography>
                <Typography>Please enter a valid username...</Typography>
                <Button
                    size="medium"
                    onClick={() => navigate('/')}
                >
                    <Typography>Try again</Typography>
                </Button>
            </Box>
        </>
    )
}