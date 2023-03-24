import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Profile=()=>{

    return(
        <div style={{"display":"flex", "width":"15%","justifyContent":"space-around","marginLeft":"50%"}}>
            <button style={{"display":"flex","flexDirection":"column","border":"1px solid blue"}}>Create Post</button>
            <NotificationsNoneIcon fontSize='large' />
            <AccountCircleIcon  fontSize='large'/>

        </div>
    )
}

export default Profile