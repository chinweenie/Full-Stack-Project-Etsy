import React from 'react';
import Slide from './slide';
import Arrow from './arrow';
import LoadingIcon from '../loading_icon';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    };

    previousSlide() {
        const lastIndex = this.props.imageUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    };

    nextSlide() {
        const lastIndex = this.props.imageUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    };

    render() {
        if (!this.props.imageUrls){
            return (
                <LoadingIcon/>
            )
        }

        return (
            <div className="slider">

                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;" />

                <Slide url={this.props.imageUrls[this.state.currentImageIndex]} />

                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />
            </div>
        );
    }
}