import React from 'react'

import 'plyr/dist/plyr.js'
import 'plyr/dist/plyr.css'

let Player = () => {
  return (
    <div>
      <video controls>
        <source src="./media/test.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default Player