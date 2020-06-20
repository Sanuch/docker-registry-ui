import dockerClient from "utils/docker";

export const fetchLayouts = (image: string, setLayouts: (o: []) => void) => {
    dockerClient
        .getImageTags(image)
        .then(({ tags }: any) => {
            tags = tags ? tags : [];

            dockerClient.getLayouts(image, tags)
                .then(response => {
                    const previousValue: any[] = [];
                    const data = response.reduce((previousValue, row ) => {
                        const history = row.history.reduce((c: any[], i: any) => {
                            const d = JSON.parse(i.v1Compatibility);
                            c.push(d);
                            return c;
                        }, []);
                        previousValue.push({ history, tag: row.tag });
                        return previousValue;
                    }, previousValue) as [];
                    setLayouts(data);
                })
            ;
        })
        .catch(console.error)
        .finally( () =>  {} );
};