```jsx static
import { Snackbar } from 'artn-kit/components';
```

Snackbar:
```jsx
import { useState } from 'react';
import { Button } from '../Button';

const [notifications, setNotifications] = useState([]);

<>
    <Button
        onClick={() => setNotifications([...notifications, 'Hello'])}
    >
        Show Snackbar
    </Button>
    {notifications.map(notification => (
        <Snackbar
            message={notification}
            autoHideDuration={2000}
        />
    ))}
</>
```
