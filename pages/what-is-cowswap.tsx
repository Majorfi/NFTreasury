import	React, {ReactElement}	from	'react';
import	{Card, Button}			from	'@yearn-finance/web-lib/components';
import	{Cross}					from	'@yearn-finance/web-lib/icons';
import	WithShadow				from	'components/WithShadow';
import	Link					from	'next/link';

function	DisclaimerPage(): ReactElement {
	return (
		<div className={'flex items-center w-8/12 h-full'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-full h-[500px]'}>
					<div>
						<div className={'flex flex-row justify-between pb-6 w-full'}>
							<h3 className={'font-bold'}>{'Why Cowswap?'}</h3>
							<Link href={'/'}>
								<Cross className={'w-6 h-6 transition-colors cursor-pointer text-neutral-500 hover:text-neutral-700'} />
							</Link>
						</div>
						<div className={'mb-24 space-y-6 text-justify'}>
							<p>
								{'We use Cowswap because we like cows, swaps, and because they use gas-less orders that are settled peer-to-peer while providing MEV* protection. You can find out more about how they settle trades without incurring slippage & fees here. '}
							</p>
						</div>
					</div>
					<div className={'flex justify-between'}>
						<Link href={'/what-are-yearn-vaults'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Previous'}
									</Button>
								</WithShadow>
							</div>
						</Link>
						<Link href={'/what-is-mev'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Next'}
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