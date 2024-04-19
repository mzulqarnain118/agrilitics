import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";

// import './theme.less';
const Modal = posed.div({
    enter: {
        y: 0,

        beforeChildren: true,
        staggerChildren: 50,
        delay: 100
    },
    exit: {
        y: 50
    }
});

const Shade = posed.div({
    enter: { opacity: 1 }
});

const charPoses = {
    exit: { opacity: 0, x: 20 }
};

class TextSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            slides: [
                "THIS IS SLIDE 2",
                "THIS IS SLIDE 3",
                "THIS IS SLIDE 4",
                "THIS IS SLIDE 5"
            ],
            currentSlide: 0,
            slideTimer: 1 * 1000
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.changeSlide();
        }, 5000);
    }
    changeSlide() {
        let { slides, currentSlide } = this.state;
        //4
        let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;
        // let nextSlide = currentSlide + 1;
        console.log(currentSlide, nextSlide);

        this.setState({ isVisible: false, currentSlide: nextSlide });
        const that = this;
        setTimeout(function () {
            that.setState({ isVisible: true });
        }, 100);
    }
    render() {
        let { isVisible, slides, currentSlide } = this.state;

        return (
            <div className="container" onClick={this.changeSlide.bind(this)}>
                <PoseGroup>
                    {isVisible && [
                        <Shade key="shade" className="shade" />,
                        <Modal key="modal" className="modal">
                            <h1>{slides[currentSlide]}</h1>
                        </Modal>
                    ]}
                </PoseGroup>
            </div>
        );
    }
}
export default TextSlider
