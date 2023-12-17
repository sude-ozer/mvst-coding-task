import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';

type UserInfoProps = {
    username: string,
    fullname: string,
    bio?: string,
    email: string,
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
                flexDirection: 'column'
            }}
        >
            <img
                alt={username}
                src={pictureUrl}
                style={{width: 150, height: 150}}
            />
            <Typography variant='h3' gutterBottom>
                {username}
            </Typography>
            {fullname && <Typography variant='h4'>
                {fullname}
            </Typography>}
            {bio && <Typography> {bio} </Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <PeopleAltIcon />
                <Typography> {followerCount || 0} followers </Typography>
                <Typography> {followingCount || 0} following </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button variant='contained' color='primary'>Follow</Button>
                <MoreHorizIcon />
            </Box>
            {email && <Typography>
                <MailOutlineIcon />
                {email} 
            </Typography>}
        </Box>
    )
}
