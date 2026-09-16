import './Contact.css'
import { asset } from '../../../assets'

const Contact = () => {
    return (
        <div className='container-full'>
                                                 <h1 className='title-c-c'>Questions or comments? <br/> Get in touch and we'll be happy to help.</h1>

            <div className='Contact-bg'>
            <div className='row'>
                <div className='col-1 img-contacts'>
                    <img src={asset('Beans-brown.jpg')} alt='beans'/>
                </div>
                  <div className='col-1'>
                  <div className='Contact'>
                <form>          <h1 className='title-contact'>Contact</h1>          <div className='contact-input input-box'>
                       <input type="text" className="Field" placeholder='Name' required/>
                       <input type="email" className="Field"name='email' placeholder='Email *' required/>
                    </div>
                    <div className='contact-input'>
                        <input type="Num" className="Field" name='Number' placeholder='Phone Number'required/>
                    </div>
                      <div className='contact-input'>
                        <input type="" className="Field contact-row" name='Comment' placeholder='Comment'required/>
                    </div>
                                                              <button className="button-primary send-contact">Contact</button>

                </form>
            </div>
            {/* End-Contact */}
                </div>
            </div>
            </div>
        </div>
    )
}
export default Contact
