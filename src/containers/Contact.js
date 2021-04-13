import React ,{useState,useEffect} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAlert} from '../actions/alert';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


const Contact = ({setAlert}) =>{
    useEffect(()=> {
        window.scrollTo(0,0)
    }, []);

    const [formData,setFormData]=useState({
        name : '',
        email : '',
        subject : '',
        message : ''
    
    });
    
    const {name,email,subject,message}=formData;
    
    const [loading, setLoading] = useState(false);
    
    const onChange=e =>  setFormData({...formData,[e.target.name]:e.target.value});
    
    const onSubmit =e => {
        e.preventDefault();
        axios.defaults.headers= {
            "Content-Type":"application/json"
        };
    
        setLoading(true);
        axios.post('http://localhost:8000/api/contacts/', {name,email,subject,message})
        .then(res => {
            setAlert('Message Sent Successfully', 'success');
            setLoading(false);
            window.scrollTo(0,0);
        })
        .catch(err => {
            setAlert('Message Can not Sent', 'error');
            setLoading(false);
            window.scrollTo(0,0);
    
        })
    };


    return(
        <div className="contact">
            <Helmet>
                <title>Realest Estate - Contact</title>
                <meta name="description" content="Contact Us" />
            </Helmet>

            <form action="" onSubmit={e =>onSubmit(e)} className="contact__form">
                <label htmlFor="name" className="contact__form__label">Name*</label>
                <input 
                    type="text" 
                    name="name" 
                    className="contact__form__input" 
                    required 
                    placeholder="Full Name" 
                    onChange={e => onChange(e) }
                    value={name}
                />

                <label htmlFor="email" className="contact__form__label">Email*</label>
                <input 
                    type="email" 
                    name="email" 
                    className="contact__form__input" 
                    required 
                    placeholder="example@example.com" 
                    onChange={e => onChange(e) }
                    value={email}
                />

                <label htmlFor="subject" className="contact__form__label">Subject*</label>
                <input 
                    type="text" 
                    name="subject" 
                    className="contact__form__input" 
                    required 
                    placeholder="Subject of e-mail" 
                    onChange={e => onChange(e) }
                    value={subject}
                />

                <label htmlFor="message" className="contact__form__label">Message*</label>
                <textarea 
                    cols="30"
                    rows="10"
                    name="message" 
                    className="contact__form__textarea" 
                    placeholder="Message" 
                    onChange={e => onChange(e) }
                    value={message}
                />
                {
                    loading ?
                        <div className="contact__form__loader">
                            <Loader 
                                type='Oval'
                                color="#424242"
                                height={50}
                                width={50}
                            />
                        </div>:
                        <button className=" contact__form__button" htmltype = "sumit">Send</button>
                }
            </form>
        </div>

    );
}

Contact.propTypes={
    setAlert: PropTypes.func.isRequired
}

export default connect(null , {setAlert}) (Contact);