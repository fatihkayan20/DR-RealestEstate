import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import {Link} from 'react-router-dom';



const ListingDetail = (props) =>{
  const [listing , setListing] =useState({});
  const [realtor, setRealtor] =useState({});
  const [price , setPrice] =useState(0);

  const numberWithCommons = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  };

    useEffect(() => {
        const slug = props.match.params.id;

        const config={
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get(`http://localhost:8000/api/listings/${slug}`,config)
        .then(res => {
            setListing(res.data);
            setPrice(numberWithCommons(res.data.price));
        })
        .catch(err=>{

        });
    }, [props.match.params.id]);

    useEffect(() => {
        const id = listing.realtor;

        const config={
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        if (id){
            axios.get(`http://localhost:8000/api/realtors/${id}`,config)
            .then(res => {
                setRealtor(res.data);
            })
            .catch(err => {

            })
        }
    }, [listing.realtor]);

    const displayInteriorImages = () =>{
        let images=[];

        images.push(
            <div className="row" key={1}>
                <div className="col-1-of-3">
                    {
                        listing.photo_1 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_1} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_2 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_2} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_3 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_3} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={2}>
                <div className="col-1-of-3">
                    {
                        listing.photo_4 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_4} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_5 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_5} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_6 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_6} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={3}>
                <div className="col-1-of-3">
                    {
                        listing.photo_7 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_7} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_8 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_8} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_9 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_9} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={4}>
                <div className="col-1-of-3">
                    {
                        listing.photo_10 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_10} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_11 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_11} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_12 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_12} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={5}>
                <div className="col-1-of-3">
                    {
                        listing.photo_13 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_13} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_14 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_14} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_15 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_15} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={6}>
                <div className="col-1-of-3">
                    {
                        listing.photo_16 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_16} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_17 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_17} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_18 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_18} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div className="row" key={7}>
                <div className="col-1-of-3">
                    {
                        listing.photo_19 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_19} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    {
                        listing.photo_20 ? (
                            <div className="listingdetail__display">
                                <img src={listing.photo_20} alt="" className="listingdetail__display__image"/>
                            </div>
                        ) : null
                    }
                </div>
                <div className="col-1-of-3">
                    
                </div>
            </div>
        );
        
        return images;
    };
    return (
        <div className="listingdetail">
            <Helmet>
                <title>Realest Estate - Listing | {`${listing.title}`}</title>
                <meta
                    name='description'
                    content='Listing detail'
                />
            </Helmet>
            <div className="listingdetail__header">
                <h1 className="listingdetail__title"> {listing.title} </h1>
                <p className="listingdetail__location"> {listing.city}, {listing.state} , {listing.zipcode} </p>
            </div>

            <div className="row">
                <div className="listingdetail__breadcrumb">
                    <Link className="listingdetail__breadcrumb__link" to='/'> Home </Link> / {listing.title}
                </div>
            </div>

            <div className="row">
                <div className="col-3-of-4">
                    <div className="listingdetail__display">
                        <img src={listing.photo_main} alt="" className="listingdetail__display__image"/>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="listingdetail__display">
                        <img src={realtor.photo} alt="" className="listing__displya__image"/>
                    </div>
                    <h3 className="listingdetail__realtor">
                        {realtor.name}
                    </h3>
                    <p className="listingdetail__contact">Name: {realtor.name}</p>
                    <p className="listingdetail__contact">Phone: {realtor.phone}</p>
                    <p className="listingdetail__contact">Email: {realtor.email}</p>
                    <p className="listingdetail__contact">Description: {realtor.description}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <ul className="listingdetail__list">
                        <li className="listingdetail__list__item"> Home Type: {listing.home_type} </li>
                        <li className="listingdetail__list__item"> Price: ${price} </li>
                        <li className="listingdetail__list__item"> Bedrooms: {listing.bedrooms} </li>
                        <li className="listingdetail__list__item"> Bathrooms: {listing.bathrooms} </li>
                        <li className="listingdetail__list__item"> Sqfte: {listing.sqft} </li>
                    </ul>
                </div>

                <div className="col-1-of-2">
                    <ul className="listingdetail__list">
                        <li className="listingdetail__list__item"> Sale Type: {listing.sale_type} </li>
                        <li className="listingdetail__list__item"> Adress: {listing.adress} </li>
                        <li className="listingdetail__list__item"> City: {listing.city} </li>
                        <li className="listingdetail__list__item"> State: {listing.state} </li>
                        <li className="listingdetail__list__item"> Zipcode: {listing.zip_code} </li>
                    </ul>
                </div>
            </div>


            <div className="row">
                <p className="listingdetail__description"> {listing.description} </p>
            </div>

            {displayInteriorImages()}
        </div>
    )

};

export default ListingDetail;