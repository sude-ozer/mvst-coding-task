import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * NavBar component is a navigation bar which enables user to switch between pages
 * 
 * @returns {JSX.Element}
 */
export default function NavBar() {
    const navigate = useNavigate();

    return (
        <AppBar position="relative">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, flexDirection: 'row'}} ml={40}>
                        <Button
                            onClick={() => navigate('/')}
                            sx={{ my: 2, color: 'black' }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={() => navigate(0)}
                            sx={{ my: 2, color: 'black' }}
                        >
                            Repositories
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}