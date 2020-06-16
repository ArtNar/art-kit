```jsx static
import { Modal } from 'artn-kit/components';
```

Modal:
```jsx
import { useState } from 'react';
import { Button } from '../Button';
import { Paper } from '../Paper';

const [open, setOpen] = useState(false);

<>
    <Button
        onClick={() => setOpen(!open)}
    >
        Show modal
    </Button>
    <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        center
    >
        <Paper
            elevation={2}
            style={{ padding: '100px' }}
        >
            Hello
        </Paper>
    </Modal>
</>

```

```jsx static
const getModalComponent = () => import('components/SomeModalComponent')
const key = 'my-modal'
const props = {
    someProp: 'value',
}

const [openModal, closeModal] = useModal(key)

// in some handler
openModal(
    getModalComponent,
    {
        props,
        onClose: () => console.log('action after modal closed'),
    },
)
```

Modal provider:
```jsx
import { useState } from 'react';
import { Button } from '../Button';
import { Paper } from '../Paper';
import { ModalProvider } from '../ModalProvider';
import { useModal } from './useModal';

const [open, setOpen] = useState(false);
const ModalContent = () => (
    <Paper
        elevation={2}
        style={{ padding: '100px' }}
    >
        Hello
    </Paper>
)
const ComponentWithModal = () => {
    const [openModal, closeModal] = useModal('modal')
    const handleOpenModal = () => {
        openModal(
            () => ({ default: ModalContent }),
            {
                props: {
                    someProp: 'value',
                },
                onClose: () => console.log('modal closed')
            },
        )
    }
    return (
        <Button onClick={handleOpenModal}>Show modal</Button>
    )
}
<>
    <ModalProvider>
        <ComponentWithModal />
    </ModalProvider>
</>

```
