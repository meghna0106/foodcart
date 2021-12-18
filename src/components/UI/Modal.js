import classes from './Modal.module.css';
import reactDom from 'react-dom';
import { Fragment } from 'react';

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
};
const ModalOverlay=(props)=>{
    return (
        <div className={classes.modal}>
        <div className={classes.content}>{props.children} </div>
        </div>
    );
};
const portalElement=document.getElementById('overlays');
const Modal=(props)=>{
    return <Fragment>
        {reactDom.createPortal(  <Backdrop onClose={props.onClose}/>,portalElement)}
       {reactDom.createPortal( <ModalOverlay >{props.children}</ModalOverlay>,portalElement)}
       
    </Fragment>

}
export default Modal;