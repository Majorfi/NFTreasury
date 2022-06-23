import	React, {ReactElement, useState}	from	'react';
import	Link							from	'next/link';
import	Image							from	'next/image';
import	{Card, Button}					from	'@yearn-finance/web-lib/components';
import	WithShadow						from	'components/WithShadow';

function	DisclaimerPage(): ReactElement {
	const [isShowingArrow] = useState(false);
	return (
		<div className={'flex items-center h-full'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-[544px] h-[544px]'}>
					<div>
						<div className={'pb-6 w-full'}>
							<h2 className={'font-bold'}>{'Final final step'}</h2>
						</div>
						<div className={'space-y-6 w-10/12 text-justify'}>
							<p>
								{'Final final step!!'}
							</p>
							<p>
								{'It’s the same but this time you don’t have to pay gas! Sign a transaction and let cowswap do the swap. '}
							</p>
						</div>
					</div>
					<div className={'flex justify-start'}>
						<Link href={'/woohoo'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Crush'}
									</Button>
								</WithShadow>
							</div>
						</Link>
					</div>
				</Card>
			</WithShadow>
			<div className={'flex justify-center items-start min-w-[544px] h-[544px]'}>
				<Image width={518} height={535} quality={90} src={'/final-svg.png'} className={`transition duration-1000 ease-in-out ${isShowingArrow ? 'opacity-100' : 'opacity-0'}`} />
			</div>
		</div>
	);
}

export default DisclaimerPage;