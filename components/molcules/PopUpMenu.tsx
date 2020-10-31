import React, { useState} from 'react'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

type Menu = {
    title: string,
    ganreList: string[]
}

const PopUpMenu = ({title, ganreList}: Menu) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button aria-controls="pop-up-menu" aria-haspopup="true" onMouseEnter={handleClick}>
        {title}
        <ExpandMoreIcon />
      </Button>
      <Popover
        id="pop-up-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClick={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          {
            ganreList.map((val, i) => 
            <MenuItem key={i} onClick={handleClose}>{val}</MenuItem>
            )}
      </Popover>
    </div>
  )
}

export default PopUpMenu