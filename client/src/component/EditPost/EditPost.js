import React from 'react'
import Modal from "react-bootstrap/Modal";
import {contenidoPost,changetitlePost} from '../../redux/action'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import toMagazin from '../../image/top-view-person-writing-laptop-with-copy-space/toMagazin.png'
import './CreatePost.css'

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
})
const mapDispatchToProps = (dispatch) => (
  {
    contenidoPost: (val) => dispatch(contenidoPost(val)),
    changetitlePost: (val) => dispatch(changetitlePost(val)),
    // uploadImg : (val) => dispatch(uploadImg(val))
   

  }
)
export default connect(mapStateToProps, mapDispatchToProps)(function CreatePost  (props) {
  const {post,contenidoPost,changetitlePost,uploadImg} = props
    return (
        <div>
         <container>  
             <div>
             <button>back to home</button> 
             <button>back to magazin</button> 
             </div>
             <div>
      <img className="imgCreatePost" src={toMagazin} ></img>
      <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    
  </div>
</div>
<div>
    

    {/* <input placeholder="image Post" onChange="changeimagePost(img)"></input> */}
    <input placeholder="title Post" onChange={e => changetitlePost(e.target.value)}/>
    <input placeholder="title Post" onChange={e => contenidoPost(e.target.value)}/>
    {/* <button onClick={e =>uploadImg(e.target.value)}>upload</button> */}
</div>
      </div>

      </container>
     
        </div>
    )

}
)

