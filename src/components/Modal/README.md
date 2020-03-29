```jsx static
import { Modal } from 'artn-kit/components';
```

Modal:
```jsx
import { useState } from 'react';
import { Button } from '../Button';

const [open, setOpen] = useState(false);

<>
    <Button
        onClick={() => setOpen(!open)}
    >
        Show modal
    </Button>
    <Modal
        open={open}
        onClose={() => setOpen(false)}
    >
        Modal!!!
    </Modal>
</>

```
