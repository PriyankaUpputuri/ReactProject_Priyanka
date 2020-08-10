import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className=" p-3 mb-2 bg-light text-white">

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active my-3 py-4">
                        <img src="https://previews.123rf.com/images/margouillat/margouillat1711/margouillat171100281/89696277-assorted-indian-food.jpg" class="d-block w-100" alt="..." />

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;