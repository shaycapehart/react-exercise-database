import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    flexGrow: 1
  }
})

export default function Footer({ muscles, category, setCategory }) {
  const classes = useStyles()

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onCategorySelect = (event, index) =>
    setCategory(index === 0 ? '' : muscles[index - 1])

  return (
    <Paper className={classes.paper}>
      <Tabs
        value={index}
        onChange={onCategorySelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  )
}
