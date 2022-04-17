import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOutPage = () => {
    const { checkoutPage} = useParams();
    return (
        <div>
            <h2>Welcome to CheckOut Page { checkoutPage}</h2>
        </div>
    );
};

export default CheckOutPage;