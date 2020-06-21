```jsx static
import { Checkbox } from 'artn-kit/components';
```

Checkbox:
```jsx padded
<>
    <div style={{ paddingBottom: 10 }}>
        <Checkbox
            label="Checkbox"
        />
    </div>
    <div style={{ paddingBottom: 10 }}>
        <Checkbox
            label="Checkbox disabled"
            disabled
        />
    </div>
    <div style={{ paddingBottom: 10 }}>
        <Checkbox
            label="Checkbox checked"
            value={true}
        />
    </div>
    <div style={{ paddingBottom: 10 }}>
        <Checkbox
            label="Checkbox checked and disabled"
            disabled
            value={true}
        />
    </div>
    <div style={{ paddingBottom: 10 }}>
        <Checkbox
            label="Checkbox"
            error="Checkbox must be checked!"
        />
    </div>
</>
```
