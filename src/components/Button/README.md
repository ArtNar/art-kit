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
        {['primary', 'secondary', 'success', 'warning', 'danger'].map(color => (
            <span style={{marginRight: '10px'}}>
                <Button
                    key={color}
                    color={color}
                >
                    {color}
                </Button>
            </span>
        ))}
    </div>
    <div>
        {['primary', 'secondary', 'success', 'warning', 'danger'].map(color => (
            <span style={{marginRight: '10px'}}>
                <Button
                    key={color}
                    color={color}
                    outlined
                >
                    {color}
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
        color='link'
    >
        link
    </Button>
</div>

```

Addons:
```jsx padded
import { Spin } from '../Spin';
import { CloseIcon } from '../Icons';

<>
    <Button
        leftAddons={<CloseIcon />}
    >
        close
    </Button>
    <Button
        rightAddons={<CloseIcon />}
    >
        close
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
    <Button onlyIcon color="tertiary">
        <CloseIcon />
    </Button>
    <Button onlyIcon color="tertiary" size='m'>
        <CloseIcon />
    </Button>
    <Button onlyIcon color="tertiary" size='l'>
        <CloseIcon />
    </Button>
</>
```

```jsx padded
import { MenuIcon } from '../Icons';

<>
    <Button onlyIcon color="tertiary">
        <MenuIcon />
    </Button>
    <Button onlyIcon color="tertiary" size='m'>
        <MenuIcon />
    </Button>
    <Button onlyIcon color="tertiary" size='l'>
        <MenuIcon />
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
