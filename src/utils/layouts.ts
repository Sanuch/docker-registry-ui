export const sorter = (layouts: Array<any>) => {
    let result: Array<any> = [];
    let parent: any = layouts.find((item: any) => !item.hasOwnProperty('parent'));
    result.unshift(parent);

    let child = layouts.find((item: any) => item.hasOwnProperty('parent')
        && item.parent === parent.id
    );
    while (typeof child !== 'undefined') {
        result.unshift(child);
        parent = child;

        child = layouts.find((item: any) => item.hasOwnProperty('parent')
            && item.parent === parent.id
        );
    }

    return result;
};

export const merge = (layouts: Array<any>) => {

    if (typeof layouts === 'undefined') {
        return [];
    }

    const result = layouts.reduce(
        (carry: Array<any>,  item: {tag: any, rows: any}) => {
            const { id }  = item.rows.find((item: any) => item.hasOwnProperty('docker_version'));
            if (id in carry) {
                carry[id].tag = carry[id].tag.concat(', ' + item.tag);
            } else {
                carry[id] = {tag: item.tag, rows: item.rows};
            }

            return carry;
        },
        []
    );

    console.log(result);

    console.log(result.reduce((carry: Array<any>, item: any) => carry.push(item), []));

    return result.map((item: any) => item);
};