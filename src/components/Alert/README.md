```jsx static
import { Alert } from 'artn-kit/components';
```

Types:
```jsx padded
['error', 'info', 'success', 'warning'].map(type => (
    <div style={{padding: '5px 0'}}>
        <Alert
            key={type}
            type={type}
        >
            {type}
        </Alert>
    </div>
))
```

Outlined:
```jsx padded
<Alert
    outlined
>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
</Alert>
```

Action:
```jsx padded
import { Button } from '../Button';

<Alert
    action={(
        <>
            <Button
                text="ok"
                onClick={() => alert('ok')}
            />
            <Button
                text="close"
                view="danger"
                onClick={() => alert('close')}
            />
        </>
    )}
>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
</Alert>
```

onClose:
```jsx padded
import { Button } from '../Button';

<Alert
    onClose={() => alert('alert closed')}
>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
</Alert>
```
