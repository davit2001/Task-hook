import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        cursor: "pointer",
        padding: theme.spacing(2),
        backgroundColor: '#ffffff',
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        borderRadius: "4px",
        "&:hover": {
            boxShadow: "0px 1px 3px 0px grey"
        }

    },
    active: {
        backgroundColor: '#2196f3',
        color: '#fff'
    }
}));
