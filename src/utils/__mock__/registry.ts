
export const registry = (() => {
    const images: any[] = [];
    const generateString = (maxLength: number) => {
        const dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
            length = dictionary.length;
        let str = '';
        for (let i = 0; i < maxLength; i++) {
            str += dictionary[Math.ceil(Math.random() * length)];
        }

        return str;
    };
    const generateImages = () => {
        const format = (s: string) => { while (s.length < 5) s = "0" + s; return s; };
        for (let i = 0; i < 20; i++) {
            images.push({
                'name': 'image-' + format(i + 1 + ''),
                'hash': generateString(32),
                'tags': [],
                'history': [],
            })
        }
    };
    const generateTags = () => {
        images.map((image: any) => {
            const count = Math.floor(Math.random() * 10) + 1;
            let tags: number[] = [];
            for (let i = 0; i < count; i++) {
                tags.push(Math.ceil(Math.random() * 100) + 10)
            }
            tags.filter((v, i, a) => a.indexOf(v) === i)
                .sort((a, b) => a - b)
                .map(tag => image.tags.push(tag) );
        });
    };
    const generateLayouts = () => {
        images.map((image: any) => {
            image.tags.map((tag: string) => {
                const count = Math.floor(Math.random() * 10) + 10;
                let lastHash = '', layouts = [];
                for (let i = 0; i < count; i++) {
                    let layoutId = generateString(32).toLocaleLowerCase();
                    let layout: any = {
                        container_config: {
                            Cmd: ['/bin/bash', layoutId]
                        },
                        id: layoutId
                    };
                    if (lastHash.length !== 0) {
                        layout.parent = lastHash;
                    }
                    if (layouts.length === 0) {
                        layout.docker_version = '19.01';
                    }

                    lastHash = layoutId;
                    layouts.push({
                        v1Compatibility: JSON.stringify(layout),
                    });
                }
                image.history.push({
                    layouts: layouts,
                    tag: tag,
                });
            });
            let layout = JSON.parse(JSON.stringify(image.history.slice(image.history.length - 1).pop()));
            layout.tag = 'latest';
            image.history.push(layout);
            image.tags.push(layout.tag);
        });
    };

    generateImages();
    generateTags();
    generateLayouts();

    return {
        getImages: () => images.map((item: any) => item.name),

        getTags: (name: string) => images.find((item: any) => item.name === name).tags,

        getLayouts: (name: string, tag: string) => {
            const image = images.find((item: any) => item.name === name);
            const layouts = image.history;
            const layout = layouts.find((layout: any) => layout.tag == tag);

            return layout ? layout.layouts : [];
        },
    }
})();