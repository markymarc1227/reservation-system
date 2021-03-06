import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, isModalShown, children } ) => {
    const showHideClassName = isModalShown ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName} onClick={handleClose}>
            <section className="modal-main br4 pa3 tc" onClick={e=> e.stopPropagation()}>
                {children}
                <div className="flex flex-column items-center">
            
                    <div className="tc mt3 mb2">
                        <input 
                        onClick={handleClose} 
                        className="black ph4 pv2 input-reset ba br4 b--transparent bg-light-silver grow pointer f6 dib" 
                        type="submit" 
                        value="Close"/>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Modal;