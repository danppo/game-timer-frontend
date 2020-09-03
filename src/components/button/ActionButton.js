import React from 'react';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const ActionButton = ({label, variant, color, action, payload, fullwidth }) => {
  // 

  const history = useHistory();

  const handleClick = () => {

    if (action === 'nav') {
      const location = "/" + payload;
      history.push(location)
      return location;
    }
    // return location;
  }

  return (
    <div className="action-button">
      <Button 
        data-testid="ActionButton"
        variant={variant ? variant : "outlined"} 
        color={color ? color : "primary" }  
        onClick={handleClick}
        size='large'
        fullWidth={fullwidth ? true : false }
      >
        {label}
      </Button>
    </div>
  )
}

export default ActionButton;