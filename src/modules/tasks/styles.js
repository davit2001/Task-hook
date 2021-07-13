import {makeStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    item: {
        backgroundColor: grey[100],
        border: "2px solid rgb(0 0 0 / 12%)",
        padding: "2rem",
        textAlign: "center",
        "&:nth-child(2)": {
            flex: 2
        },
        "&:nth-child(3)": {
            padding: theme.spacing(2)
        }
    }, 
    IconButton: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3)
    }
}));
