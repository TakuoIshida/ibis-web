import { FC, useState } from 'react'
import IconButton      from '@material-ui/core/IconButton'
import AssignmentIcon  from '@material-ui/icons/Assignment'
import Tooltip         from '@material-ui/core/Tooltip'
import CopyToClipBoard from 'react-copy-to-clipboard'
import { Typography } from '@material-ui/core'

type referenceProps ={
    reference: string
}

const ClipBoard: FC<referenceProps> = ({reference}) => {
  const [openTip, setOpenTip] = useState<boolean>(false)

  const handleCloseTip = (): void => {
    setOpenTip(false)
  }

  const handleClickButton = (): void => {
    setOpenTip(true)
  }

  return (
          <Typography>
            {reference}
            <Tooltip
            // チップの方向付き
              arrow
            // openの制御をHooks
              open={openTip}
              onClose={handleCloseTip}
            // hoverで反応しない
              disableHoverListener
            //   上側に表示
              placement='top'
            //   表示されるタイトル
              title='Copied!'
            >
              <CopyToClipBoard text={reference}>
                <IconButton
                  onClick={handleClickButton}
                >
                  <AssignmentIcon />
                </IconButton>
              </CopyToClipBoard>
            </Tooltip>
          </Typography>
  )
}

export default ClipBoard