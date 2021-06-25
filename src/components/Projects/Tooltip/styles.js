import { makeStyles } from "@material-ui/core"
import blue from '@material-ui/core/colors/blue';

export const useStyles = makeStyles((theme) => ({
    iconButton: {
        backgroundColor: blue[700],
        color: '#FAFAFA',
         '&:hover': {
             backgroundColor: "#2196f3"
         },
         marginBottom: theme.spacing(2),
         marginLeft: theme.spacing(2)
       }
}))