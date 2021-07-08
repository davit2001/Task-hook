import {makeStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({

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
