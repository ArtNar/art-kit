```jsx static
import { TextArea } from 'artn-kit/components';
```

Tabs:
```jsx
import { useState } from 'react';

const [value, setValue] = useState(null);
const handleChange = ({ target: { value } }) => setValue(value);

<TextArea
    value={value}
    onChange={handleChange}
/>
```
