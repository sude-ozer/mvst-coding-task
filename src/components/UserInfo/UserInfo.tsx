import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';

type UserInfoProps = {
    username: string,
    fullname?: string,
    bio?: string,
    email?: string,
    profilePictureUrl?: string,
    followerCount?: number,
    followingCount?: number
}

export default function UserInfo({
    username,
    fullname,
    bio,
    email,
    profilePictureUrl,
    followerCount,
    followingCount,
} : UserInfoProps) {
    const pictureUrl: string = profilePictureUrl || 'http://www.gravatar.com/avatar/?d=identicon';

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '50%'
            }}
            mr={8}
            mt={-1}
        >
            <img
                alt={username}
                src={pictureUrl}
                style={{width: 200, height: 200, borderRadius: 100, zIndex: 1}}
            />
            <Typography variant='h4' gutterBottom color="text.primary">
                {username}
            </Typography>
            {fullname && <Typography variant='h6' color="text.secondary" mb={1}>
                {fullname}
            </Typography>}
            {bio && <Typography color="text.primary" mb={0.5}> {bio} </Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} mb={0.5}>
                <Button variant='contained' color='primary'>Follow</Button>
                <MoreHorizIcon color='disabled' sx={{ paddingLeft: '8px' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }} mb={0.5}>
                <PeopleAltIcon color='disabled' sx={{ paddingRight: '5px' }} />
                <Typography color="text.secondary"> {followerCount || 0} followers ⏺ {followingCount || 0} following </Typography>
            </Box>
            {email && <Typography color="text.secondary">
                <MailOutlineIcon color='disabled' />
                {email} 
            </Typography>}
        </Box>
    )
}
