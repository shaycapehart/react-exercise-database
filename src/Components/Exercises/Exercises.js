import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import { ListItem, ListItemText } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: 20,
    color: theme.palette.text.secondary,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overFlowY: 'auto'
  }
}))

export default function Exercises({
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  exercises,
  category,
  onSelect
}) {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            {description}
          </Typography>
          <Typography />
        </Paper>
      </Grid>
    </Grid>
  )
}
