import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className=" p-3 mb-2 bg-light text-white">

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {<img style={{width: '1340px', height: '570px'}} src="https://veneziaballinasloedotcom.files.wordpress.com/2018/04/home-food-delivery.png?w=1000" alt="..." />}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;