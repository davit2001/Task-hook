import { makeStyles } from "@material-ui/core"
export const useStyles = makeStyles((theme) => ({
    paper: {
          padding:  theme.spacing(3),
          [theme.breakpoints.between('xs', 'sm')]: {
            marginBottom: theme.spacing(3)
          }
      },
      form: {
          width: '18rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      btn: {
          marginTop: theme.spacing(1)
      }
  }))