import "./Modal.css";
import ReactDOM from "react-dom";

const Wrapper = (props) => {
  return <div className="wrapper" onClick={props.onHideModal} />;
};

const ModalContainer = (props) => {
  return (
    <div className="modal-container">
      <div className="content">{props.children}</div>
    </div>
  );
};

const modalWrapperElement = document.getElementById("modals-wrapper");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrapper onHideModal={props.onHideModal} />,
        modalWrapperElement
      )}
      {ReactDOM.createPortal(
        <ModalContainer>{props.children}</ModalContainer>,
        modalWrapperElement
      )}
    </>
  );
};

export default Modal;
