import {makeStyles} from "@material-ui/core";
import {blue, grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "column"
        }
    },

    fab: {
        margin: theme.spacing(2)
    },
    iconButton: {
        backgroundColor: blue[700],
        color: "#FAFAFA",
        "&:hover": {
            backgroundColor: "#2196f3"
        },
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    item: {
        backgroundColor: grey[100],
        height: "46rem",
        padding: "2rem",
        marginLeft: theme.spacing(3),
        textAlign: "center",
        "&:nth-child(2)": {
            flex: 2
        },
        "&:nth-child(3)": {
            padding: theme.spacing(2)
        }
    }
}));
