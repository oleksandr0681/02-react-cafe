import { useState } from 'react';
import CafeInfo from './../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { Votes } from './../../types/votes';
import type { VoteType } from './../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType) => {
    switch (type) {
      case 'good':
        setVotes({
          ...votes,
          good: votes.good + 1,
        });
        break;
      case 'neutral':
        setVotes({
          ...votes,
          neutral: votes.neutral + 1,
        });
        break;
      case 'bad':
        setVotes({
          ...votes,
          bad: votes.bad + 1,
        });
        break;
    }
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const canReset = votes.good + votes.neutral + votes.bad > 0 ? true : false;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {votes.good + votes.neutral + votes.bad > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={votes.good + votes.neutral + votes.bad}
          positiveRate={
            votes.good + votes.neutral + votes.bad
              ? Math.round(
                  (votes.good / (votes.good + votes.neutral + votes.bad)) * 100
                )
              : 0
          }
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
