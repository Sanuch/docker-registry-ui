
import dockerClient from "utils/docker";

const fetchTags = (images: Array<string>, updateState: (a: any[]) => void) => {
    dockerClient
        .getTags(images)
        .then(data => {
            updateState(
                data.filter(item => item.tags !== null)
            );
        })
        .catch(console.error)
        .finally( () =>  {} );
};

export const fetchImages = (updateState: (a: any[]) => void ) => {
    dockerClient.getList( {})
        .then(({repositories}) => repositories)
        .then((images: Array<string>) => {
            fetchTags(images, updateState);
        })
        .catch(console.error)
        .finally( () =>  {} );
};