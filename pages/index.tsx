import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import useTaxi from '../src/hooks/useTaxi';
import TimeUtils from '../src/utils';

const Home: NextPage = () => {
  const { data, error, isValidating, mutate } = useTaxi();

  if (!data) return <div>로딩중...</div>;

  if (error) return <div>에러 발생</div>;

  const { taxi_count: taxiCount, timestamp: timeStamp } = data.features[0].properties;

  return (
    <div className={styles.container}>
      <div>
        There are currently <span>{taxiCount}</span> taxis operating in Singapore.
      </div>
      <div>{TimeUtils.getReadableRelativeTimeFromNow(timeStamp)}</div>
    </div>
  );
};

export default Home;
