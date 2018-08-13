import React from 'react'
import Task from './Task'
import Button from '@material-ui/core/Button'
import { RangeModal, Search } from '../containers'

export default class TasksList extends React.Component {
  constructor() {
    super()

    this.state = {
      isEditing: false,
    }
  }

  render() {
    const { tasks, deleteTask } = this.props
    return (
      <React.Fragment>
        <Search />
        <Button onClick={this._onCreateClick}>Добавить</Button>
        {tasks.map(task => (
          <Task
            onEditClick={this._onEditClick}
            deleteTask={deleteTask}
            task={task}
          />
        ))}
        <RangeModal onSaveClick={this._onSaveClickModal} />
      </React.Fragment>
    )
  }

  _onCreateClick = () => {
    this.setState({ isEditing: false })
    const { openModal } = this.props
    openModal()
  }

  _onEditClick = ({ id, title, description }) => {
    this.setState({ isEditing: true })
    const { openModal, setInitialValuesOnModal, selectTask } = this.props
    selectTask(id)
    setInitialValuesOnModal({ title, description })
    openModal()
  }

  _onSaveClickModal = props => {
    const { isEditing } = this.state
    const { selectedTaskId, editTask, createTask } = this.props
    if (isEditing) {
      editTask({ id: selectedTaskId, ...props })
    } else {
      createTask(props)
    }
  }
}
