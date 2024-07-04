import { useDashboardStore } from '../../store';

const BrowseByMake = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Browse by Make</h2>
      <ul>
        {data.makes.map((make, index) => (
          <li key={index}>{make}</li>
        ))}
      </ul>
    </section>
  );
};

export default BrowseByMake;
