import Header from "./Header.jsx";
import Check from "./Check.jsx";
import BackButton from "./UI/BackButton.jsx";

const PaymentOverLay = () => {
	return (
		<div className={'payment-overlay'}>
			<Header/>
			<Check price={'820,95'}/>
			<BackButton/>
		</div>
	);
};

export default PaymentOverLay;
