AppBar:
```jsx
import { useState } from 'react';
import { Button } from '../Button'

const [showBar, setShowBar] = useState(false);

<>
    <Button onClick={() => {setShowBar(!showBar)}}>Toggle AppBar</Button>
    {showBar && (
        <AppBar>
            I'm AppBar!
        </AppBar>
    )}
</>
```
