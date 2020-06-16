```jsx static
import { List } from 'artn-kit/components';
```

List:
```jsx
import { ListItem } from '../ListItem';
import { HomeIcon } from '../Icons';

<List>
    {[...Array(3).fill()].map((_, i) => (
        <ListItem
            key={i}
            icon={<HomeIcon />}
        >
            {`item ${i + 1}`}
        </ListItem>
        )
    )}
</List>
```

List:
```jsx
import { ListItem } from '../ListItem';

<List title='title'>
    {[...Array(3).fill()].map((_, i) => (
        <ListItem
            key={i}
        >
            {`item ${i + 1}`}
        </ListItem>
        )
    )}
</List>
```
