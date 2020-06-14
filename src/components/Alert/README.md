```jsx static
import { Alert } from 'artn-kit/components';
```

Types:
```jsx padded
['info', 'success', 'warning', 'error'].map(type => (
    <div style={{padding: '5px 0'}}>
        <Alert
            key={type}
            type={type}
            onClose={() => alert('alert closed')}
        >
            {type}
        </Alert>
    </div>
))
```

Actions:
```jsx padded
['info', 'success', 'warning', 'error'].map(type => (
    <div style={{padding: '5px 0'}}>
        <Alert
            actions={[
            {
                id: 1,
                label: 'Ok',
                onClick: () => alert('ok clicked'),
            },
            {
                id: 2,
                label: 'Close',
                onClick: () => alert('close clicked'),
                outlined: true,
            }
            ]}
            type={type}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
    </div>
))
```
