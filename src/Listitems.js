import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Listitems(props) {
  const items = props.item;
  const Listitems = items.map(item =>{
    return<div className='list' key = "item.key">
      <p>{item.text}</p>
      <span>
        <FontAwesomeIcon className='faicon' icon='trash'/>
      </span>
    </div>
  })
  return (
    <div>Listitems</div>
  )
}

Listitems.propTypes = {}

export default Listitems
