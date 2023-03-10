/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

// eslint-disable-next-line no-unused-vars
const HistoryItems = props => {
  const {historyItem, deleteItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const handleDelete = () => {
    deleteItems(id)
  }

  return (
    <li>
      <div className="listItems">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" type="button" onClick={handleDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
