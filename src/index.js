import React from 'react'
import { render } from 'react-dom'
// import Test from './styled-component'
// import Counter from './mobx/count/count'
// import counterStore from './mobx/count/store'

// const store = new counterStore()
import FsEditor from '@fs/fs-editor'
import '@fs/fs-editor/dist/fs-editor.css'

render(<div>
  <FsEditor onImageInsert={(file, base64, insertImage) => {
    // ...
  }}></FsEditor>
</div>, document.querySelector('#root'))

