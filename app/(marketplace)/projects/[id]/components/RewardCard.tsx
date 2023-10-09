import { Reward } from '@/types';

interface Props {
  reward: Reward;
}

const RewardCard: React.FC<Props> = ({ reward }) => {
  const nftColor = reward.tier === 1 ? 'gold' : reward.tier === 2 ? 'silver' : 'bronze';
  const currencyFmt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-20 pt-10">
        <img src={`/mock/reward/nft-token-${nftColor}.svg`} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p></p>
        <h2 className="card-title">
          Tier {reward.tier} : {reward.title}
        </h2>
        <p>{reward.description}</p>
        <p className="font-bold">{currencyFmt.format(reward.unitPrice)}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
