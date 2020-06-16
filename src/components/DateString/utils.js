import { MONTH_NAMES, MONTH_NAMES_SHORT } from '../../utils/date';

export const makeMaskDate = (mask) => {
    const tokens = mask.match(/(.)\1*/ig) || [];

    return (date) => (date instanceof Date
        ? tokens.map((token) => {
            switch (token) {
            case 'dd':
                return `${date.getDate()}`.padStart(2, '0');
            case 'mm':
                return `${date.getMonth()}`.padStart(2, '0');
            case 'yyyy':
                return `${date.getFullYear()}`;
            case 'HH':
                return `${date.getHours()}`.padStart(2, '0');
            case 'MM':
                return `${date.getMinutes()}`.padStart(2, '0');
            case 'ss':
                return `${date.getSeconds()}`.padStart(2, '0');
            case 'mmm':
                return MONTH_NAMES_SHORT[date.getMonth()];
            case 'mmmm':
                return MONTH_NAMES[date.getMonth()];
            default:
                return token;
            }
        })
            .join('')
        : undefined);
};
