```jsx static
import { Radio } from 'artn-kit/components';
```

Radio:
```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(null);

<Radio
    label="Radio"
    checked={checked}
    onChange={(e, value) => setChecked(value)}
/>
```

Radio:
```jsx
import { useState } from 'react';

const [checkedValue, setCheckedValue] = useState(null);

<>
    <Radio
        label="value1"
        name="value1"
        checked={checkedValue === 'value1'}
        onChange={(e) => setCheckedValue(e.target.name)}
    />
    <Radio
        label="value2"
        name="value2"
        checked={checkedValue === 'value2'}
        onChange={(e) => setCheckedValue(e.target.name)}
    />
</>
```
