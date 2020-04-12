/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ModalContext } from '../ModalContext';
import { Modal } from '../Modal';

const ModalProvider = ({
    children,
    container,
}) => {
    const [modals, setModals] = useState({});

    const openModal = (key, modal) => {
        setModals((modals) => ({
            ...modals,
            [key]: {
                modal,
                isOpen: true,
            },
        }));
    };

    const closeModal = (key) => {
        setModals((modals) => {
            const newModals = { ...modals };

            newModals[key].isOpen = false;

            return newModals;
        });
    };

    const removeModal = (key) => {
        setModals((modals) => {
            const newModals = { ...modals };

            delete newModals[key];

            return newModals;
        });
    };

    const handleCloseModal = (key, props) => {
        const { onRequestClose } = props;

        closeModal(key);

        if (onRequestClose) {
            onRequestClose();
        }
    };

    const handleRemoveModal = (key, props) => {
        const { onClose } = props;

        removeModal(key);

        if (onClose) {
            onClose();
        }
    };

    const renderModalComponent = (component) => {
        const Component = component;

        if (!Component) {
            return null;
        }

        return (
            <Component />
        );
    };

    const renderModal = (key) => {
        const { modal: { component, props }, isOpen } = modals[key];

        return (
            <Modal
                {...props}
                key={key}
                isOpen={isOpen}
                container={container}
                onRequestClose={() => handleCloseModal(key, props)}
                onClose={() => handleRemoveModal(key, props)}
                center
            >
                {renderModalComponent(component)}
            </Modal>
        );
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {Object.keys(modals).map((key) => renderModal(key))}
        </ModalContext.Provider>
    );
};

ModalProvider.propTypes = {
    children: PropTypes.node,
    container: PropTypes.shape({}),
};

export default ModalProvider;
