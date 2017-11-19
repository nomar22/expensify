import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props)=>(
   <Modal
    isOpen={!!props.selectedOption}
    onRequestClose = {props.handleCloseModal}
    contentLabel='Selected Option'
   > 
       <h3> Selected Option </h3>
       {props.selectedOption && <p>{props.selectedOption} </p> }

       <button onClick={props.handleCloseModal}> OK </button>
       
   </Modal>
);


export default OptionModal

//create a new event Handler in indecision that clears state
//pass into OptionModal, and callit on button click