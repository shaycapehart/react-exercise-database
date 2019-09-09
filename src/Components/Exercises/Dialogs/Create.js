import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export default function Create({ handleNewExercise, muscles }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleCreate() {
    console.log(values)
    handleNewExercise(values)
    setOpen(false)
  }

  const [values, setValues] = React.useState({
    title: '',
    description: '',
    muscles: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Fragment>
      <Fab size="small" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form>
            <TextField
              id="standard-name"
              fullWidth
              label="Title"
              value={values.title}
              onChange={handleChange('title')}
              margin="normal"
            />
            <TextField
              label="Description"
              fullWidth
              value={values.description}
              onChange={handleChange('description')}
              margin="normal"
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={values.muscles}
                onChange={handleChange('muscles')}
                inputProps={{
                  name: 'muscles',
                  id: 'muscles'
                }}
              >
                {muscles.map(muscle => (
                  <MenuItem key={muscle} value={muscle}>
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
