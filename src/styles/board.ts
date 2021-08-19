import { Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
    signOutBtn: {
        position: "fixed",
        top: "15px",
        marginLeft: "250px"
    },
    newChatBtn: {
        position: "absolute",
        // bottom: "40px",
        top: '650px',
        left: "220px",
    },
    header: {
        width: "301px",
        height: "70px",
        backgroundColor: "#344195",
        position: "absolute",
        boxShadow: "0px 0px 2px black",
    },
    textHeader: {
        position: "fixed",
        marginTop: "20px",
        marginLeft: "10px",
        fontSize: "22px",
        textAlign: "center",
        color: "white",
        boxSizing: "border-box",
    },
});

export default styles;
