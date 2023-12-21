import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { ErrorPage } from "../ErrorPage";
import { UserInfo } from "../../components/UserInfo";
import { Repos } from "../../components/Repos";
import { NavBar } from "../../components/NavBar";
import { GET_USER, UserData } from "../../services/GithubAPIService";

/**
 * User Page shows the user profile information and user's repositories for the given username.
 * It retrieves related information from Github API.
 * 
 * @returns {JSX.Element}
 */
export default function UserPage() {
    const username = useParams();
 
    const { data: user_data, loading, error } = useQuery<UserData>(GET_USER, {
        variables: { username: username.username }
    });

    if(!user_data || error) {
        return (<ErrorPage />);
    } 

    return (
        <>
            <NavBar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                mx={6}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <UserInfo user={user_data} />
                    <Repos repositories={user_data.user.repositories.nodes}/>
                </Box>
            </Box>
        </>
    )
}