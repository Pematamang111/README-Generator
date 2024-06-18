import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const Home = () => {
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
	}

	return (
		<div className="App">
			<div className="container">
				<br />
				<h2 className="text-center">Stripe Payment</h2>
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
