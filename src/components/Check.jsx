

// eslint-disable-next-line react/prop-types
const Check = ({price}) => {
	const priceArr = price
		// eslint-disable-next-line react/prop-types
		.split(',')
	return (
		<div className={'check'}>
			<p className={'check__title'}>Стоимость покупок</p>
			<div className={'check__price'}>
				<span>
				{`${priceArr[0]}`}
				</span>
				{priceArr[1] && <span className={'check__subprice'}>
				{`,${priceArr[1]}`}
				</span>}
				<span>
					{`₽`}
				</span>
			</div>
			<p className={'check__todo'}>Приложите<br/> или прокатайте карту</p>
		</div>
	);
};

export default Check;
