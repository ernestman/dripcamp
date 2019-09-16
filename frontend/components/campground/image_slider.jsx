import React from "react";
import Slider from "react-slick";

class ImageSlider extends React.Component {

    render() {
        const settings = {
            arrows: true,
            dots: true,
            // infinite: true,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        variableWidth: false,
                    }
                },
                // {
                //     breakpoint: 500,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1,
                //         infinite: false,
                //         variableWidth: false,
                //     }
                // },
            ]
        }

        return (
            <div className="image-slider">
                <Slider {...settings}>
                    {this.props.campground.photoUrls.map( url => (
                        <div key={this.props.campground.id}>
                            <img src={url}/>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

}

export default ImageSlider;