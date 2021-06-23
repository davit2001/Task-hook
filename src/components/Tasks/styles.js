import { makeStyles } from "@material-ui/core"
import blue from '@material-ui/core/colors/blue';

export const useStyles = makeStyles((theme) => ({
     root: {
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                flexDirection: 'column'
            }
        },
         container: {
           display: 'flex',
           flexWrap: 'nowrap',
           marginTop: theme.spacing(5),
           justifyContent: 'space-between',
           [theme.breakpoints.between('xs','sm')]: {
               flexWrap: 'wrap-reverse',
               justifyContent: 'center'
           },
           [theme.breakpoints.up('md')]: {
              justifyContent: ' space-evenly'
           }
        }, 
        fab: {
            margin: theme.spacing(2),
          },
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