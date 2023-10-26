import Modal from 'react-modal';
import styles from '@/app/components/Modal.module.css';
import React from 'react';

Modal.setAppElement('body');

interface IModalProps {
    modalIsOpen: boolean, 
    closeModal: () => void,
    children: React.ReactNode
}

export default function ModalTask({modalIsOpen, closeModal, children}:IModalProps){
    return (
        <>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName={styles.reactmodaloverlay}
            className={styles.reactmodalcontent}
            >
                {children}
            </Modal>
        </>
    )
}