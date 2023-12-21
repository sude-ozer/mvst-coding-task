import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';
import { UserData } from '../../services/GithubAPIService';

type UserInfoProps = {
    user: UserData,
}

/**
 * This component lists the user information retrieved for a specific user.
 * 
 * @param {UserData} user - User data retrieved from Github API 
 * @returns {JSX.Element}
 */
export default function UserInfo({
    user
} : UserInfoProps) {
    const user_profile = user.user;
    const pictureUrl: string = user_profile.avatarUrl || 'http://www.gravatar.com/avatar/?d=identicon';

    return (
        <Box
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '50%'
            }}
            mr={8}
            mt={-1}
        >
            <img
                alt={user_profile.login}
                src={pictureUrl}
                style={{width: 200, height: 200, borderRadius: 100, zIndex: 1}}
            />
            <Typography variant='h4' gutterBottom color="text.primary">
                {user_profile.login}
            </Typography>
            {user_profile.name && <Typography variant='h6' color="text.secondary" mb={1}>
                {user_profile.name}
            </Typography>}
            {user_profile.bio && <Typography color="text.primary" mb={0.5}> {user_profile.bio} </Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} mb={0.5}>
                <Button variant='contained' color='primary'>Follow</Button>
                <MoreHorizIcon color='disabled' sx={{ paddingLeft: '8px' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }} mb={0.5}>
                <PeopleAltIcon color='disabled' sx={{ paddingRight: '5px' }} />
                <Typography color="text.secondary"> 
                    {user_profile.followers.totalCount || 0} followers ⏺ {user_profile.following.totalCount || 0} following 
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }} mb={0.5}>
                <MailOutlineIcon color='disabled' sx={{ paddingRight: '5px' }} />
                <Typography color="text.secondary"> 
                    {user_profile.email} 
                </Typography>
            </Box>
        </Box>
    )
}
