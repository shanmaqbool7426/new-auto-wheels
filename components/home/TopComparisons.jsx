import { useDashboardStore } from '../../store';

const TopComparisons = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Top Comparisons</h2>
      <ul>
        {data.comparisons.map((comparison) => (
          <li key={comparison.id}>
            {comparison.cars.join(' vs ')}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopComparisons;
