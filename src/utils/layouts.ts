
export const sorterById = (layouts: any) => {
    console.log(layouts);
    let result: any[] = [];
    let parent: any = layouts.find((item: any) => !item.hasOwnProperty('parent'));
    result.unshift(parent);

    const searchElement = (parent: any) => (item: any) => item.hasOwnProperty('parent') && item.parent === parent.id;

    let child = layouts.find(searchElement(parent));

    while (typeof child !== 'undefined') {
        result.unshift(child);
        parent = child;

        child = layouts.find(searchElement(parent));
    }

    return result;
};

// first: { tag: string, rows: Array<any> }
// second: { tag: string, rows: Array<any> }
export const sorterByTags = (first: any, second: any) => {
    const parseTag = (tag: string) => {
        if (tag.indexOf(',') !== -1) {
            tag = tag.substr(0, tag.indexOf(','));
        }
        return tag;
    };
    const firstTag = parseTag(first.tag);
    const secondTag = parseTag(second.tag);

    if (firstTag === 'latest') {
        return 1;
    }
    if (secondTag === 'latest') {
        return 1;
    }
    const firstValue = parseInt(firstTag);
    const secondValue = parseInt(secondTag);

    // reverse sorting, last tag should be in top
    return firstValue > secondValue ? -1 : (firstValue < secondValue ? 1 : 0);
};

export const merger = (layouts: any[]) => {

    if (typeof layouts === 'undefined') {
        return [];
    }

    const list = layouts.reduce(
        (carry: any[],  {tag, history}) => {
            history.forEach(({id, ...other}: any) => {
                if (id in carry) {
                    carry[id].tag = carry[id].tag.concat(', ' + tag);
                } else {
                    carry[id] = { tag, data: {id, ...other} };
                }
            });

            return carry;
        },
        []
    );

    return Object.values(list).reduce(
        (carry: any[],  {tag, data}) => {
            if (tag in carry) {
            } else {
                carry[tag] = { tag, rows: [] };
            }
            carry[tag].rows.push(data);

            return carry;
        },
        []
    );
};