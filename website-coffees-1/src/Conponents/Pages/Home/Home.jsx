import './Home.css'
import { GrFormSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { RiHeart3Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { asset } from '../../../assets';



const Home = () =>{
    return (
        <div className="container-full">
            <div className='background-one'>
                <div className='background-content'>
                    <h1>Tea and Coffees <br/><span>Tastly</span> Hot</h1>
                    <a href='menus'>                  <button className="button-primary">Menus <FaLongArrowAltRight /></button></a>
                </div>
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
                                       <a href='about'>         <button className="button-primary">About</button> </a>
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

                <div className='About-Details'>
                    <div className='row background-About-One'>
                        <div className='col-1 About-img'>
                            <img src={asset('black-cup-full-coffee-beans-wooden-board.jpg')} alt='tea-coffee'></img>
                        </div>
                        <div className='col-1 About-Content'>
                            <h2>Coffee Beans </h2>
                            <p>Freshness:  Always use fresh coffee beans and grind them fresh before brewing. This helps preserve the aroma and flavor compounds.</p>
                                             <a href='menus'>         <button className="button-primary"><FaLongArrowAltLeft /> Menus</button></a>
                        </div>
                    </div>
                       <div className='row background-About-Two'>
                        <div className='col-1 About-Content'>
                            <h2>Choose the Right Grind </h2>
                            <p>If your coffee tastes too sour, bitter, or just plain weak, the problem might not be your beans — it might be your grind size. Whether you’re a home brewer, barista, or café owner, understanding grind size is one of the most important steps to brewing better coffee.</p>
                                       <a href='menus'>               <button className="button-primary">Menus <FaLongArrowAltRight /></button> </a>
                        </div>
                        <div className='col-1 About-img'>
                            <img src={asset('close-up-coffee-beans-white-porcelain-jug-with-cookies-cup-coffee-flowers.jpg')} alt='img-tea'></img>
                        </div>
                    </div>
                </div>


                {/* Start-Coffee-Offer */}
                <div className='Coffee-Offer'>
                    <h1>• FEES & TEA •</h1>
                    <div className='offee-left-1'>
                    </div>
                </div>
                {/* End-Coffee-Offer */}
            </section>
            {/* End-About */}

            {/* Start-Menus */}
            <div className='Menus'>
                <div className='Menus-Caption'>
                    <h1>Tasty of Hot</h1>
                                                                    <button className="button-primary">Menus</button>

                </div>
                <div className='row'>
                    <div className='col-3 M-Cards'>
                        <div className='Menus-Img'>
                            <div className='menus-heart'>
                                 <RiHeart3Line />
                            </div>
                            <img src={asset('Coffee-white.png')} alt='M-Tea'></img>
                        </div>
                        <div className='Menus-Order'>
                            <div className='Menus-Content'>
                            <h1 className='M-Title'>Tea-1</h1>
                            <p  className='M-Text'>Teams</p>
                            <h4 className='M-Price'>$5</h4>
                            </div>
                            <div className='Mensu-count'>
                                <GrFormSubtract />
                                <GrAdd />
                            </div>
                        </div>
                                          <button className="button-primary">Order</button>
                    </div>
                           <div className='col-3 M-Cards'>
                        <div className='Menus-Img'>
                               <div className='menus-heart'>
                                 <RiHeart3Line />
                            </div>
                            <img src={asset('Americano-with-Egg.jpg')} alt='M-Tea'></img>
                        </div>
                        <div className='Menus-Order'>
                            <div className='Menus-Content'>
                            <h1 className='M-Title'>Americano & Egg</h1>
                            <p  className='M-Text'>Teams</p>
                            <h4 className='M-Price'>$6</h4>
                            </div>
                            <div className='Mensu-count'>
                                <GrFormSubtract />
                                <GrAdd />
                            </div>
                        </div>
                                          <button className="button-primary">Order</button>
                    </div>
                           <div className='col-3 M-Cards'>
                        <div className='Menus-Img'>
                               <div className='menus-heart'>
                                 <RiHeart3Line />
                            </div>
                            <img src={asset('Americano-Coffee-1.png')} alt='M-Tea'></img>
                        </div>
                        <div className='Menus-Order'>
                            <div className='Menus-Content'>
                            <h1 className='M-Title'>Americano</h1>
                            <p  className='M-Text'>Teams</p>
                            <h4 className='M-Price'>$2</h4>
                            </div>
                            <div className='Mensu-count'>
                                <GrFormSubtract />
                                <GrAdd />
                            </div>
                        </div>
                                          <button className="button-primary">Order</button>
                    </div>
                           <div className='col-3 M-Cards'>
                        <div className='Menus-Img'>
                               <div className='menus-heart'>
                                 <RiHeart3Line />
                            </div>
                            <img src={asset('OSK.jpeg')} alt='M-Tea'></img>
                        </div>
                        <div className='Menus-Order'>
                            <div className='Menus-Content'>
                            <h1 className='M-Title'>Matcha latte</h1>
                            <p  className='M-Text'>Teams</p>
                            <h4 className='M-Price'>$7</h4>
                            </div>
                            <div className='Mensu-count'>
                                <GrFormSubtract />
                                <GrAdd />
                            </div>
                        </div>
                                          <button className="button-primary">Order</button>
                    </div>
                     <div className='col-3 M-Cards'>
                        <div className='Menus-Img'>
                               <div className='menus-heart'>
                                 <RiHeart3Line />
                            </div>
                            <img src={asset('pexels-wsilvasjb-23776017.jpg')} alt='M-Tea'></img>
                        </div>
                        <div className='Menus-Order'>
                            <div className='Menus-Content'>
                            <h1 className='M-Title'>Ice Latte</h1>
                            <p  className='M-Text'>Teams</p>
                            <h4 className='M-Price'>$16.55</h4>
                            </div>
                            <div className='Mensu-count'>
                                <GrFormSubtract />
                                <GrAdd />
                            </div>
                        </div>
                                          <button className="button-primary">Order</button>
                    </div>
                </div>
                {/* Start-Offers-Coffees */}
                  <div className='Offers-Coffees'>
                    <h1 className='Title-Offers'>Offer 30%</h1>
                  </div>
                  {/* End-Offers-Coffees */}
            </div>
            {/* End-Menus */}

            {/* Start-Contact */}
            <div className='Contact'>
                <form>
                                    <h1>Questions or comments? Get in touch and we'll be happy to help.</h1>
                    <div className='contact-input input-box'>
                       <input type="text" className="Field" placeholder='Name' required/>
                       <input type="email" className="Field"name='email' placeholder='Email *' required/>
                    </div>
                    <div className='contact-input'>
                        <input type="Num" className="Field" name='Number' placeholder='Phone Number'required/>
                    </div>
                      <div className='contact-input'>
                        <input type="" className="Field contact-row" name='Comment' placeholder='Comment'required/>
                    </div>
                                                              <button className="button-primary send-contact">Send</button>

                </form>
            </div>
            {/* End-Contact */}

        </div>
    )
}

export default Home
