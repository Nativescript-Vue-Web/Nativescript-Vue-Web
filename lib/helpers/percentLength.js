/**
 * Convert the length to pixel unit
 * @param length
 * @returns {string}
 */
export function convertToStringCommon(length){
    const convertUnit = 'px';

    if (length == 'auto') { // tslint:disable-line
        return 'auto';
    }

    if (typeof length === 'string') {
        let stringValue = length.trim();
        let percentIndex = stringValue.indexOf('%');
        if (percentIndex !== -1) {
            return stringValue;
        }
        else if (stringValue.indexOf('px') !== -1) {
            stringValue = stringValue.replace('px', '').trim();
            let value = parseFloat(stringValue);
            if (isNaN(value) || !isFinite(value)) {
                throw new Error('Invalid value: ' + length);
            }
            return value;
        }
        else if(stringValue === ''){
            return stringValue;
        }
        else {
            return stringValue + convertUnit;
        }
    }
    else {
        return length.toString() + convertUnit;
    }
}