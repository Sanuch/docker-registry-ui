import * as React from 'react';

import { ImageTagResponseInterface } from '../../store/image/interfaces';

interface AppProps {
    fetchImages: Function,
    images: Array<string>,
    tags: Array<ImageTagResponseInterface>,
}

export interface AppStates {
    images: Array<string>,
    tags: Array<ImageTagResponseInterface>,
}

export default class App extends React.Component<AppProps, AppStates> {

    componentDidMount(): void {
        this.props.fetchImages();
    }

    render() {
        const { images, tags } = this.props;
        const content = images.map(image => {
                let listOfTags = tags.reduce(
                    (list, tagList: ImageTagResponseInterface) => tagList.tags
                        ? list + tagList.tags.join()
                        : list,
                    ''
                );
                console.log(listOfTags);
                return (<li key={image}>{image}</li>);
            });
        return (
            <div>
                <ul>{content}</ul>
            </div>
        );
    }
};