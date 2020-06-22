```jsx static
import { HomeIcon } from 'artn-kit/components';
```

Icons:
```jsx
import * as icons from '../Icons';

<>
    {Object.keys(icons).map(key => {
        const Component = icons[key]

        return (
            <div>
                <Component />
                {' - '}
                {key}
            </div>
        )
    })}
</>

```
