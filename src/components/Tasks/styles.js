import { makeStyles } from "@material-ui/core"
export const useStyles = makeStyles((theme) =>{
    return {
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
        }
    }
})