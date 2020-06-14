```jsx static
import { Button } from 'artn-kit/components';
```

Sizes:
```jsx padded
['s', 'm', 'l'].map(size => (
    <Button
        key={size}
        size={size}
    >
        {`button ${size}`}
    </Button>
))
```
Colors:
```jsx padded
<>
    <div style={{marginBottom: '10px'}}>
        {['primary', 'secondary', 'success', 'warning', 'danger'].map(type => (
            <span style={{marginRight: '10px'}}>
                <Button
                    key={type}
                    type={type}
                >
                    {type}
                </Button>
            </span>
        ))}
    </div>
    <div>
        {['primary', 'secondary', 'success', 'warning', 'danger'].map(type => (
            <span style={{marginRight: '10px'}}>
                <Button
                    key={type}
                    type={type}
                    outlined
                >
                    {type}
                </Button>
            </span>
        ))}
    </div>
</>
```
Type "Link":
```jsx
<div>
    <Button
        type='link'
    >
        link
    </Button>
</div>

```

Addons:
```jsx padded
import { Spin } from '../Spin';

<>
    <Button
        leftAddons={<Spin color="white" />}
    >
        button
    </Button>
    <Button
        rightAddons={<Spin color="white" />}
    >
        button
    </Button>
</>
```

Icon:
```jsx padded
import { CloseIcon } from '../Icons';

<>
    <Button icon>
        <CloseIcon />
    </Button>
    <Button icon outlined >
        <CloseIcon />
    </Button>
</>
```

onlyIcon:
```jsx padded
import { CloseIcon } from '../Icons';

<>
    <Button onlyIcon>
        <CloseIcon />
    </Button>
</>
```

Shape:
```jsx padded
import { CloseIcon } from '../Icons';

<>
    <Button
        shape='circle'
        icon
    >
        <CloseIcon />
    </Button>
    <Button
        shape='circle'
        outlined
        icon
    >
        <CloseIcon />
    </Button>
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
        fluid
    >
        Toggle progress status
    </Button>
</>
```
