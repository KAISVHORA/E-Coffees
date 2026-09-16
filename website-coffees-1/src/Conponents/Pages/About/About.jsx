import './About.css'
import { asset } from '../../../assets'

const About = () => {
    return (
        <div className='container-full'>
            <div className="Menus-bg">
                <h1 className='title-Menus'>About</h1>
            </div>
              {/* Start-About */}
            <section className='About'>
                <h1>Our Roastery</h1>
                <p>The Impact of Roast Level</p>
                <div className='About-bg'>
                    <div className='row'>
                        <div className='col-1 left-image'>
                                                       <img src={asset('istockphoto-1135480773-170667a_1250x.jpg')} alt='Coffee roasting'></img>
                        </div>
                        <div className='col-1 right-content'>
                            <h5>#About</h5>
                            <h1 className='title-about'>OUR STORY</h1>
                            <p className='text-about'>Roast level is another critical factor in determining coffee quality. Roasting brings out the unique flavors and aromas of the coffee beans, and the level of roast can significantly impact the final product. Lighter roasts tend to be more acidic and fruity, while darker roasts are richer and more bitter.</p>
                                        <button className="button-primary">About</button>
                        </div>
                    </div>
                </div>

                <div className='Tea-card-bg'>
                    <div className='row'>
                        <div className='col-2 Tea-Card'>
                            <img src={asset('coffee.png')} alt='icon-coffee'></img>
                            <h3 className='title-cards'>Tea</h3>
                            <p className='text-cards'>Arabica coffee has a mild, floral and fruity taste.</p>
                        </div>
                        <div className='col-2 Tea-Card'>
                            <img src={asset('tea-bag.png')} alt='icon-coffee'></img>
                            <h3 className='title-cards'>Coffeine</h3>
                            <p className='text-cards'>Arabica coffee contains less caffeine compared to robusta.</p>
                        </div>
                        <div className='col-2 Tea-Card'>
                            <img src={asset('coffee (1).png')} alt='icon-coffee'></img>
                            <h3 className='title-cards'>Dark Roast</h3>
                            <p className='text-cards'>Some of the plant characteristics are intact with some roasty features.</p>
                        </div>
                        <div className='col-2 Tea-Card'>
                            <img src={asset('hot.png')} alt='icon-coffee'></img>
                            <h3 className='title-cards'>Temperature</h3>
                            <p className='text-cards'>Arabica coffee requires a temperature range of 15-24 degrees.</p>
                        </div>
                    </div>
                </div>
                </section>
                   {/* Start-Offers-Coffees */}
                  <div className='Offers-Coffees'>
                    <h1 className='Title-Offers'>Offer 30%</h1>
                  </div>
                  {/* End-Offers-Coffees */}
        </div>
    )
}

export default About
