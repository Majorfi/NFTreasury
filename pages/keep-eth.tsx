import	React, {ReactElement}	from	'react';
import	Link					from	'next/link';
import	{Card, Button}			from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';

function	DisclaimerPage(): ReactElement {
	return (
		<div className={'flex items-start pl-0 mt-4 w-full h-full md:items-center md:pl-4 md:mt-0 md:w-6/12'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-full h-[500px]'}>
					<div className={'w-full'}>
						<div className={'pb-6 w-full'}>
							<h2 className={'font-bold'}>{'You have'}</h2>
							<h2 className={'font-bold'}>{'123.12345678 ETH'}</h2>
						</div>
						<div className={'space-y-6 w-full text-justify'}>
							<p  className={'w-10/12'}>
								{'How much ETH do you wanna keep in your wallet? The rest will be sent to Yearn vault.'}
							</p>
							<div className={'flex items-center'}>
								<input className={'h-9'}>
								</input>
								<Button variant={'outlined'} className={'p-1 w-14'}>
									{'20 %'}
								</Button>
								<Button variant={'outlined'} className={'p-1 w-14'}>
									{'40 %'}
								</Button>
								<Button variant={'outlined'} className={'p-1 w-14'}>
									{'60 %'}
								</Button>
								<Button variant={'outlined'} className={'p-1 w-14'}>
									{'80 %'}
								</Button>
							</div>
							<p>
								{'Next step we’ll swap some ETH to USDC.'}
							</p>
						</div>
					</div>
					<div className={'flex justify-start'}>
						<Link href={'/swap-eth'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Click-click'}
									</Button>
								</WithShadow>
							</div>
						</Link>
					</div>
				</Card>
			</WithShadow>
		</div>
	);
}

export default DisclaimerPage;