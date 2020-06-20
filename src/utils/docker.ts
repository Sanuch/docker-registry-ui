import httpRequest from './ajax';

const dockerClient = {
    getList: (filter: any) => {
        return httpRequest.get('/_catalog');
    },

    getImageTags: (name: string) => {
        return httpRequest.get(`/${name}/tags/list`);
    },

    getTags: (names: Array<string>) => {
        const tagsPromises = names.map(name => httpRequest.get(`/${name}/tags/list`));
        return Promise.all(tagsPromises);
    },

    getImage: (image: any) => {},

    getLayout: (image: string, tag: string) : Promise<any> => {
        return httpRequest.get(`/${image}/manifests/${tag}`, {
            headers: {
                'Accept': 'application/vnd.docker.distribution.manifest.v2+json',
            },
        });
    },

    getLayouts: (image: string, tags: Array<string>) => {
        const layoutsPromises = tags.map(tag => httpRequest.get(`/${image}/manifests/${tag}`));
        return Promise.all(layoutsPromises);
    },

    deleteImage: (image: string, reference: string) => {
        return httpRequest.delete(
            `/${image}/manifests/${reference}`,
            {
                headers: {
                    'Accept': 'application/vnd.docker.distribution.manifest.v2+json',
                },
            }
        );
    },

    getManifestReference: (image: string, tag: string) => {
        return httpRequest.head(
            `/${image}/manifests/${tag}`,
            {
                method: 'head',
                headers: {
                    'Accept': 'application/vnd.docker.distribution.manifest.v2+json',
                },
            }
        ).then((headers: any) => headers.get('docker-content-digest'));
    },
};

export default dockerClient;