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
        console.log('images: ', images);
        console.log('tags: ', tags);
        const content = typeof images === 'undefined' ? '' : images.map(image => (<li key={image}>{image}</li>));
        return (
            <div>
                <ul>{content}</ul>
            </div>
        );
    }
};