```jsx static
import { AppBar } from 'artn-kit/components';
```

AppBar:
```jsx
import { useState } from 'react';
import { Button } from '../Button'
import { Paper } from '../Paper';

const [showBar, setShowBar] = useState(false);

<>
    <Button onClick={() => {setShowBar(!showBar)}}>Toggle AppBar</Button>
    {showBar && (
        <AppBar>
            <Paper fluid>AppBar</Paper>
        </AppBar>
    )}
</>
```
