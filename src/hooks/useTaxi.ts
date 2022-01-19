import useRequest from '../libs';

const useTaxi = () => {
  const { data, error, isValidating, mutate } = useRequest('/transport/taxi-availability');

  return { data, error, isValidating, mutate };
};

export default useTaxi;
