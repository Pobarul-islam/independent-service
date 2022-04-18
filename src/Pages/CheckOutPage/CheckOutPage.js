import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOutPage = () => {
    const { checkoutPage} = useParams();
    return (
        <div className='text-center'>
            <h2>Welcome to CheckOut Page {checkoutPage}</h2>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOutPage;