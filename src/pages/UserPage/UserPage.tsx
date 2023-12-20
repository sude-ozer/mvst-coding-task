import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { UserInfo } from "../../components/UserInfo";
import { Repos } from "../../components/Repos";
import { NavBar } from "../../components/NavBar";
import { GET_USER, UserData } from "../../services/GithubAPIService";

export default function UserPage() {
    const username = useParams();
 
    const { data: user_data, loading, error } = useQuery<UserData>(GET_USER, {
        variables: { username: username.username }
    });

    console.log(user_data);

    if(!user_data) {
        return null
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
                //mt={8}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <UserInfo
                        username={user_data.user.login}
                        fullname={user_data.user.name}
                        email={user_data.user.email}
                        followerCount={user_data.user.followers.totalCount}
                        followingCount={user_data.user.following.totalCount}
                        bio={user_data.user.bio}
                        profilePictureUrl={user_data.user.avatarUrl}
                    />
                    <Repos repositories={user_data.user.repositories.nodes}/>
                </Box>
            </Box>
        </>
    )
}