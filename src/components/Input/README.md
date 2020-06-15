```jsx static
import { Input } from 'artn-kit/components';
```

Input:
```jsx
['normal', 'success', 'warning', 'danger'].map(view => (
    <span style={{marginBottom: '10px'}}>
        <Input
            name="email"
            type="email"
            placeholder="Email"
            view={view}
            fluid
        />
    </span>
))
```

Disabled:
```jsx
['normal', 'success', 'warning', 'danger'].map(view => (
    <span style={{marginBottom: '10px'}}>
        <Input
            name="email"
            type="email"
            placeholder="Email"
            view={view}
            disabled
            fluid
        />
    </span>
))
```

Input - error:
```jsx
<Input
    name="email"
    type="email"
    placeholder="Email"
    error="Some error"
    fluid
/>
```

Input - password:
```jsx
<Input
    name="password"
    type="password"
    autocomplete="current-password"
    placeholder="Password"
    fluid
/>
```
