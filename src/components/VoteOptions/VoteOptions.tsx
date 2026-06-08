import css from './VoteOptions.module.css';
import { type VoteType } from './../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const handleGoodClick = () => {
    onVote('good');
  };

  const handleNeutralClick = () => {
    onVote('neutral');
  };

  const handleBadClick = () => {
    onVote('bad');
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleGoodClick}>
        Good
      </button>
      <button className={css.button} onClick={handleNeutralClick}>
        Neutral
      </button>
      <button className={css.button} onClick={handleBadClick}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
