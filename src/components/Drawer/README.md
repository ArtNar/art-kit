```jsx static
import { Drawer } from 'artn-kit/components';
```

Drawer right:
```jsx
import { useState } from 'react';
import { Button } from '../Button';

const [open, setOpen] = useState(false);

<>
    <Button
        onClick={() => setOpen(!open)}
    >
        Show drawer right
    </Button>
    <Drawer
        open={open}
        onRequestClose={() => setOpen(false)}
    >
        Drawer!!!
    </Drawer>
</>

```
