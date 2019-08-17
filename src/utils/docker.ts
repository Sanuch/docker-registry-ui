import httpRequest from './ajax'

const dockerClient = {
    getList: (filter: any) => {
        return httpRequest.get('/_catalog');
    },

    getTags: (names: Array<string>) => {
        const tagsPromises = names.map(name => httpRequest.get(`/${name}/tags/list`));
        return Promise.all(tagsPromises);
    },

    getImage: (image: any) => {},

    getLayouts: (version: any) => {},

    deleteVersion: (version: any) => {},

    deleteImage: (image: any) => {},
};

export default dockerClient;