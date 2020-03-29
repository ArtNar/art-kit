```jsx static
import { Button } from 'artn-kit/components';
```

Sizes:
```jsx padded
['s', 'm', 'l', 'xl'].map(size => (
    <Button
        key={size}
        text={`button ${size}`}
        size={size}
    />
))
```
Colors:
```jsx padded
['default', 'primary', 'success', 'danger'].map(view => (
    <Button
        key={view}
        text={view}
        view={view}
    />
))
```
Type "Link":
```jsx
<div>
    <Button
        text="Link"
        view='link'
    />
</div>

```

Addons:
```jsx padded
import { Spin } from '../Spin';

<>
    <Button
        text="button"
        leftAddons={<Spin />}
    />
    <Button
        text="button"
        rightAddons={<Spin />}
    />
</>
```

Icon:
```jsx padded
import { Spin } from '../Spin';

<>
    <Button
        text="with text"
        icon={<Spin />}
    />
    <Button
        icon={<Spin />}
    />
</>
```
