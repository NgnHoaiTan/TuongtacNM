import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    main: {
        margin: '0 20px',
        paddingTop: '20px',
        minHeight: '500px',
    },
    gridItem6: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    gridItem6Wrap: {
        backgroundColor: '#FF8B59', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '160px',
        width: '100%',
        borderRadius: '10px',
        marginRight: '40px',
    },
    grid6Context: {
        color: '#fff'
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        margin: '15px 0'
    },
    avataAdmin: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}))