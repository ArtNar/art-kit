```jsx static
import { SelectDate } from 'artn-kit/components';
```

SelectDate:
```jsx
import { useState } from 'react';

const [value, setValue] = useState();

<SelectDate
    value={value}
    onChange={setValue}
    placeholder="Date"
/>
```
