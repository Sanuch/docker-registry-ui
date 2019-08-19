import httpRequest from './ajax.dev';

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
        return httpRequest.get(`/${image}/manifests/${tag}`);
    },

    getLayouts: (image: string, tags: Array<string>) => {
        const layoutsPromises = tags.map(tag => httpRequest.get(`/${image}/manifests/${tag}`));
        return Promise.all(layoutsPromises);
    },

    deleteVersion: (version: any) => {},

    deleteImage: (image: any) => {},
};

export default dockerClient;