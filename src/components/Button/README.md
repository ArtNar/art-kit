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
import { CloseIcon } from '../Icons';

<>
    <Button
        text="with text"
        icon={<CloseIcon />}
    />
    <Button
        icon={<CloseIcon />}
    />
</>
```

Shape:
```jsx padded
import { CloseIcon } from '../Icons';

<>
    <Button
        icon={<CloseIcon />}
        shape='circle'
    />
</>
```

Outlined:
```jsx padded
import { CloseIcon } from '../Icons';

<>
    <Button
        icon={<CloseIcon />}
        outlined={false}
        shape='circle'
    />
</>
```

inProgress:
```jsx
import { useState } from 'react';
import { Button } from '../Button'

const [inProgress, setInProgress] = useState(false);

<>
    <Button
        onClick={() => {setInProgress(!inProgress)}}
        inProgress={inProgress}
        size="l"
        view="primary"
        fluid
    >
        Toggle progress status
    </Button>
</>
```
