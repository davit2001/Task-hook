import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => {
    return {
    menuButton: {
      border: 'none',
      background: 'none',
      marginLeft: theme.spacing(2)
    },
    menuList: {
      backgroundColor: '#4886f8ed',
      color: 'white'
    } 
   }
  })