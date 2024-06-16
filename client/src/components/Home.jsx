import StripeCheckout from 'react-stripe-checkout';
const Home = () => {
	return (
		<div className="App">
			<div className="container">
                <br />
				<h2 className="text-center">Stripe Payment</h2>
			</div>
           <div className="form-group container">
            <StripeCheckout
            className="center"
            stripeKey='pk_live_51PS6KvBvIgfOOt5OvGYJ54mloUrIfq8fP6mwp4OSsby6e6B2UflQ2vspEe6w9Iufokw4wgkHxmteF606cdW8SeF800aVSNRk1K'
           
           
           />
            
           </div>


		</div>
	);
};

export default Home;
