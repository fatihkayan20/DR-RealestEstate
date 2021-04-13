import React , {useState} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


const ListingForm = (props) => {
const [formData,setFormData]=useState({
    sale_type:'For Sale',
    price:'$0+',
    bedrooms:'0+',
    home_type:'House',
    bathrooms:'0+',
    sqft:'1000+',
    days_listed:'1 or less',
    has_photos:'1+',
    open_house:'false',
    keywords:''

});

const {sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,open_house,keywords}=formData;

const [loading, setLoading] = useState(false);

const onChange=e =>  setFormData({...formData,[e.target.name]:e.target.value});

const onSubmit =e => {
    e.preventDefault();
    axios.defaults.headers= {
        "Content-Type":"application/json"
    };

    setLoading(true);
    axios.post('http://localhost:8000/api/listings/search', {sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,open_house,keywords})
    .then(res => {
        setLoading(false);
        props.setListings(res.data);
        window.scrollTo(0,0);
    })
    .catch(err => {
        setLoading(false);
        window.scrollTo(0,0);

    })
};

    return(
        <form action="" onSubmit={e=>onSubmit(e)} className="listinform">
            <div className="row">
                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="sale_type" className="listingform__label">Sale or Rent</label>
                        <select name="sale_type" onChange={e=>onChange(e)} value={sale_type} className="listingform__select">
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>
                    <div className="listingform__section">
                            <label htmlFor="sqft" className="listingform__label">Sqft</label>
                            <select name="sqft" onChange={e=>onChange(e)} value={sqft} className="listingform__select">
                                <option>1000+</option>
                                <option>1200+</option>
                                <option>1500+</option>
                                <option>2000+</option>
                                <option>Any</option>
                            </select>
                        </div>
                </div>
               
                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="price" className="listingform__label">Minumum Price</label>
                        <select name="price" onChange={e=>onChange(e)} value={sale_type} className="listingform__select">
                            <option>$0+</option>
                            <option>$200,000+</option>
                            <option>$400,000+</option>
                            <option>$600,000+</option>
                            <option>$800,000+</option>
                            <option>$1,000,000+</option>
                            <option>$1,200,000+</option>
                            <option>$1,500,000+</option>
                            <option>Any</option>
                        </select>
                    </div>

                    <div className="listingform__section">
                        <label htmlFor="days_listed" className="listingform__label">Days Listed</label>
                        <select name="days_listed" onChange={e=>onChange(e)} value={days_listed} className="listingform__select">
                            <option>1 of less</option>
                            <option>2 of less</option>
                            <option>5 of less</option>
                            <option>10 of less</option>
                            <option>20 of less</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="bedrooms" className="listingform__label">Bedrooms</label>
                        <select name="bedrooms" onChange={e=>onChange(e)} value={bedrooms} className="listingform__select">
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div className="listingform__section">
                        <label htmlFor="has_photos" className="listingform__label">Has Photos</label>
                        <select name="has_photos" onChange={e=>onChange(e)} value={has_photos} className="listingform__select">
                            <option>1+</option>
                            <option>3+</option>
                            <option>5+</option>
                            <option>10+</option>
                            <option>15+</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="bathrooms" className="listingform__label">Baths</label>
                        <select name="bathrooms" onChange={e=>onChange(e)} value={bathrooms} className="listingform__select">
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                    </div>
                    <div className="listingform__section">
                        <label htmlFor="open_house" className="listingform__label">Open House</label>
                        <select name="open_house" onChange={e=>onChange(e)} value={open_house} className="listingform__select">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="home_type" className="listingform__label">Home Type</label>
                        <select name="home_type" onChange={e=>onChange(e)} value={home_type} className="listingform__select">
                            <option>House</option>
                            <option>Kondo</option>
                            <option>Townhouse</option>
                        </select>
                    </div>
                    <div className="listingform__section">
                        <label htmlFor="keywords" className="listingform__label">Keywords</label>
                        <input type="text" name='keywords' className="listingform__input" onChange={e=>onChange(e)} value={keywords}/>
                    </div>
                </div>

                <div className="col-1-of-6">
                    {loading?
                        <div className="listingform__loader">
                            <Loader 
                                type='Oval'
                                color="#424242"
                                height={50}
                                width={50}
                            />
                        </div>:

                        <button className=" listingform__button listingform__button--primary">Save</button>

                    }
                </div>
            </div>
        </form>
    )
};


ListingForm.propTypes = {
    setListings:PropTypes.func.isRequired

};


export default ListingForm;