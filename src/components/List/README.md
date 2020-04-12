```jsx static
import { List } from 'artn-kit/components';
```

List:
```jsx
import { ListItem } from '../ListItem';

<List>
    {[1, 2, 3].map((_, i) => (
        <ListItem
            button
        >
            {`item ${i}`}
        </ListItem>
        )
    )}
</List>
```

List:
```jsx
import { ListItem } from '../ListItem';

<List title='title'>
    {[1, 2, 3].map((_, i) => (
        <ListItem
            button
        >
            {`item ${i}`}
        </ListItem>
        )
    )}
</List>
```
