import React,{useState} from 'react'
import {createPost} from '../../redux/action'
import {connect} from 'react-redux'


function mapStateToProps(state){
  return{
      
      post:state.postReducer.post   
  }
  }
  const mapDispatchToProps=(dispatch) => {
  return{
  
    createPost:(newPost)=>{dispatch(createPost(newPost))},
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(
function CreatePost  (props) {
    const [title,setTitle] = useState ('')
    const {createPost,post} = props
    return (
        <div>
      <input placeholder="title Post" onChange={e => setTitle(e.value)}/>
      <button onClick={e => createPost({title:setTitle,date:new Date()})}>create post</button>
        </div>
    )
}
)