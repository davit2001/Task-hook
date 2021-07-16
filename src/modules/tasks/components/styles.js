import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    item: (opacity) => ({
         cursor: "pointer",
         opacity,  
         marginTop:  theme.spacing(2)
    }),
    children: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2)
    }
}))
