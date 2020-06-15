```jsx static
import { ButtonGroup } from 'artn-kit/components';
```

ButtonGroup:
```jsx
import { Button } from '../Button';

<ButtonGroup>
    {[...Array(6).fill('secondary')].map((type, idx) => (
        <Button
            type={type}
        >
            Button {idx + 1}
        </Button>
    ))}
</ButtonGroup>
```
