import React from 'react';

const violation = () => {
    throw new Error(
        'Make sure your component is rendered inside ModalProvider',
    );
};

export const ModalContext = React.createContext({
    openModal: violation,
    closeModal: violation,
});
