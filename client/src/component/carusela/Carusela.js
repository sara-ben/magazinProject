

import Carousel from 'react-bootstrap/Carousel';
import ImageChild from './imageCarusel/GroupChild.png';
import ImageMan from './imageCarusel/GroupMan.png';
import ImageSea from './imageCarusel/GroupSea.png';



export default function Carusela(props) {

    return (
        <div className="d-flex justify-content-center">
            <Carousel>
                <Carousel.Item>
                    <img src={ImageMan} alt="ImageMan" />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ImageChild} alt="ImageChild" />




                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ImageSea} alt="ImageRoof" />


                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





        </div>

    )
}

