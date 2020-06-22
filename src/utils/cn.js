import { withNaming } from '@bem-react/classname';
import { prefix } from '../config';

export default (block) => withNaming({ e: '__', m: '_', v: '_' })(`${prefix}${block}`);
