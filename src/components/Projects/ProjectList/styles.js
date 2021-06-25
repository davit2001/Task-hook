import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    container: {
        display: "flex",
         alignIitems: "center",
         flexDirection: "row",
         flexWrap: "wrap"
      },
      item: {
          maxWidth: 300,
         wordWrap: 'break-word'
      }
})