Types:
```jsx padded
['error', 'info', 'success', 'warning'].map(type => (
    <Alert
        type={type}
    >
        {type}
    </Alert>
))
```

Outlined:
```jsx padded
<Alert
    variant="outlined"
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
    variant="outlined"
    action={(
        <>
            <Button
                text="ok"
            />
            <Button
                text="close"
                view="danger"
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
    variant="outlined"
    onClose={() => console.log('alert closed')}
>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
</Alert>
```
