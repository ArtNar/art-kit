```jsx static
import { Tabs } from 'artn-kit/components';
```

Tabs:
```jsx
import { useState } from 'react';
import { Tab } from '../Tab';

const [value, setValue] = useState(0);

<Tabs
    defaultTab={0}
    value={value}
    onChange={setValue}
>
    <Tab>
        Tab 1
    </Tab>
    <Tab disabled>
        Tab 2
    </Tab>
    <Tab>
        Tab 3
    </Tab>
</Tabs>
```
