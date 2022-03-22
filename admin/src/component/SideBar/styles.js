import { makeStyles } from "@mui/styles";

export default makeStyles (() => ({
    sidebarItem: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '7px',
        margin: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#52527a',
        }
    },
    activeItem: {
        backgroundColor: '#52527a',
    }
}))