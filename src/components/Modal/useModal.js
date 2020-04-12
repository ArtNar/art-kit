import { useContext } from 'react';
import { ModalContext } from '../ModalContext';

export const useModal = (key) => {
    const context = useContext(ModalContext);
    const { openModal, closeModal } = context;

    const handleOpenModal = async (
        getComponent,
        props = {},
    ) => {
        const { default: component } = typeof getComponent === 'function' ? await getComponent() : {};

        openModal(key, {
            component,
            props,
        });
    };

    const handleCloseModal = () => closeModal(key);

    return [handleOpenModal, handleCloseModal];
};
