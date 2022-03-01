import React from 'react'

const footer = () => {
  return (
    <div className='container'>
        <div className="todo-items-wrapper">
        <ul className="todo-items"></ul>

        <div className="todo-footer">
          <div className="left-items">5 Items left</div>
          <ul className="footer-menus">
            <li className="all selected">All</li>
            <li className="active">Active</li>
            <li className="completed">Completed</li>
          </ul>
          <button className="clear-completed">Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default footer