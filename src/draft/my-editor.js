import React from 'react'
import Immutable from 'immutable'
import {
  Editor,
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertToRaw,
  DefaultDraftBlockRenderMap
} from 'draft-js'

import Center from './components/center'

const blockRenderMap = Immutable.Map({
  'custom-div': {
    element: 'div',
    wrapper: <Center/>
  }
})

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      urlType: '',
      urlValue: '',
      showUrlInput: false
    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onFileChange = this._onFileChange.bind(this)
    this.boldText = this.boldText.bind(this)
    this.underlineText = this.underlineText.bind(this)
    this.olBlock = this.olBlock.bind(this)
    this.ulBlock = this.ulBlock.bind(this)
    this.addImage = this._addImage.bind(this)
    this.addAudio = this._addAudio.bind(this)
    this.addVideo = this._addVideo.bind(this)
    this.confirmMedia = this._confirmMedia.bind(this)

    this.convertToRaw = this.convertToRaw.bind(this)
  }

  /**
   * 处理键盘命令
   * @param {*} command 
   */
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  onChange(editorState) {
    this.setState({
      editorState
    })
  }

  /**
   * media相关的url
   */
  _onFileChange(e) {
    let file = e.target.files[0]
    let reader = new FileReader()

    reader.onload = (e) => {
      let result = e.target.result

      this.setState({
        urlValue: result
      }, () => {
        this._confirmMedia()
      })
    }

    reader.readAsDataURL(file)
  }

  /**
   * 设置字体样式为加粗
   */
  boldText() {
    this._toggleInlineStyle('BOLD')
  }

  /**
   * 设置文本下划线
   */
  underlineText() {
    this._toggleInlineStyle('UNDERLINE')
  }

  centerText() {
    let newState = RichUtils.toggleBlockType(
      this.state.editorState,
      'custom-div'
    )

    this.onChange(newState)
  }

  /**
   * 生成无序列表
   */
  ulBlock() {
    this._toggleBlockStyle('unordered-list-item')
  }

  olBlock() {
    this._toggleBlockStyle('ordered-list-item')
  }

  _toggleInlineStyle(type) {
    const newState = RichUtils.toggleInlineStyle(this.state.editorState, type)

    this.onChange(newState)
  }

  _toggleBlockStyle(type) {
    const newState = RichUtils.toggleBlockType(this.state.editorState, type)

    this.onChange(newState)
  }

  /**
   * 添加media
   */
  _promptForMedia(type) {
    this.setState({
      showUrlInput: true,
      urlType: type
    })
  }

  _addImage() {
    this._promptForMedia('image')
  }

  _addAudio() {
    this._promptForMedia('audio')
  }

  _addVideo() {
    this._promptForMedia('video')
  }

  _confirmMedia(e) {
    // e.preventDefault()
    // e.stopPropagation()

    const { editorState, urlValue, urlType } = this.state
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      'IMMUTABLE',
      {
        src: urlValue
      }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(
      editorState,
      {
        currentContent: contentStateWithEntity
      }
    )

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      ),
      urlType: '',
      urlValue: '',
      showUrlInput: false
    }, () => {
      this.refs.editor.focus()
    })
  }

  insertSoftNewline() {
    const newEditorState = RichUtils.insertSoftNewline(this.state.editorState)

    this.onChange(newEditorState)
  }

  /**
   * 转换编辑器内容为原生js对象
   */
  convertToRaw() {
    let contentState = this.state.editorState.getCurrentContent()
    let raw = convertToRaw(contentState)

    console.log(raw)
  }

  render() {
    return (
      <div className="editor-container">
        <button onClick={this.boldText}>BOLD</button>
        <button onClick={this.underlineText}>UNDERLINE</button>
        <button onClick={this.centerText.bind(this)}>CENTER</button>

        <button onClick={this.ulBlock}>UL</button>
        <button onClick={this.olBlock}>OL</button>
        <button onClick={this.addImage}>Image</button>
        <button onClick={this.addAudio}>Audio</button>
        <button onClick={this.addVideo}>Video</button>
        <button onClick={this.insertSoftNewline.bind(this)}>insert new line</button>
        {this.state.showUrlInput ? (
          <div className="media-insert">
            <input type="file"
              style={{ display: 'none' }}
              ref="fileInput"
              onChange={this.onFileChange} />

            <button onClick={() => {
              this.refs.fileInput.click()
            }}>confirm</button>
          </div>
        ) : null}
        <div style={{ border: '1px solid #000' }}>
          <Editor editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            blockRendererFn={mediaBlockRenderer}
            blockRenderMap={extendedBlockRenderMap}
            ref="editor" />
        </div>
        <button onClick={this.convertToRaw}>get raw</button>
      </div>
    );
  }
}

const Audio = (props) => {
  return <audio controls src={props.src} style={styles.media} />;
};
const Image = (props) => {
  return <img src={props.src} style={styles.media} />;
};
const Video = (props) => {
  return <video controls src={props.src} style={styles.media} />;
};
const Media = (props) => {
  const key = props.block.getEntityAt(0)
  console.log(key)
  if (!key) {
    return null
  }
  const entity = props.contentState.getEntity(key);
  const { src } = entity.getData();
  const type = entity.getType();
  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  }
  return media;
};
const styles = {
  root: {
    fontFamily: '\'Georgia\', serif',
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: '\'Georgia\', serif',
    marginRight: 10,
    padding: 3,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  media: {
    width: '100%',
  },
};

function mediaBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false
    }
  }
}


export default MyEditor