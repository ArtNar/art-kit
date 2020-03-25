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