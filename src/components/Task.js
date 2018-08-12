import React from 'react'

export default ({
  task: { id, title, description },
  deleteTask,
  onEditClick,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <button onClick={() => deleteTask(id)}>Delete</button>
      <button onClick={() => onEditClick({ id, title, description })}>
        Edit
      </button>
    </div>
  )
}
