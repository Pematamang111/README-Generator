import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Home = () => {
	toast.configure();
	const [product] = useState({
		name: 'Pajama',
		price: 250,
		description: 'Soft and made of 100 percent cotton',
	});

	async function handleToken(token, addresses) {
		const response = await axios.post('http://localhost:5000/checkout', {
			token,
			product,
		});
		console.log(response.status);

		if (response.status === 200) {
			toast('Payment successfully completed', { type: 'success' });
		} else {
			toast('Payment Failure', { type: 'error' });
		}
	}

	return (
		<div className="App">
			<div className="container">
				<br />
				<h2 className="text-center">Stripe Payment</h2>
                <br />
                <br />
                <h2 className='text-center'>Product Name: {product.name}</h2>
                <h3 className='text-center'>Product Description: {product.description}</h3>
                <h3 className='text-center'>Product Price: {product.price}</h3>
                <br />
                <br />
			</div>
			<div className="form-group container">
				<StripeCheckout
					className="center"
					stripeKey="pk_live_51PS6KvBvIgfOOt5OvGYJ54mloUrIfq8fP6mwp4OSsby6e6B2UflQ2vspEe6w9Iufokw4wgkHxmteF606cdW8SeF800aVSNRk1K"
					token={handleToken}
					amount={product.price * 100}
					name={product.name}
					billingAddress
					shippingAddress
				/>
			</div>
		</div>
	);
};

export default Home;
