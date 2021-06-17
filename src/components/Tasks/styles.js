import { makeStyles } from "@material-ui/core"
export const useStyles = makeStyles((theme) =>{
    return {
         container: {
           display: 'flex',
           flexWrap: 'nowrap',
           marginTop: theme.spacing(5),
           justifyContent: 'space-between'
        }
    }
})