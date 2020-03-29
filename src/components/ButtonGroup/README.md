```jsx static
import { ButtonGroup } from 'artn-kit/components';
```

ButtonGroup:
```jsx
import { Button } from '../Button';

<ButtonGroup>
    {['default', 'primary', 'success', 'danger'].map(view => (
        <Button
            text={view}
            view={view}
        />
    ))}
</ButtonGroup>
```
