import httpRequest from './ajax'

const dockerClient = {
    getList: (filter: any) => {
        return httpRequest.get('/_catalog')
            // .then((response: any) => {
            //     console.log(response.data.repositories);
            // })
            // .catch((error: any) => {
            //     // handle error
            //     console.log(error);
            // })
            ;
    },

    getImage: (image: any) => {},

    getLayouts: (version: any) => {},

    deleteVersion: (version: any) => {},

    deleteImage: (image: any) => {},
};

export default dockerClient;