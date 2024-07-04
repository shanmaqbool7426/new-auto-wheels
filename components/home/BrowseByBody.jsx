import { useDashboardStore } from '../../store';

const BrowseByBody = () => {
  const bodies = useDashboardStore((state) => state.data.bodies);
  return (
    <section>
      <h2>Browse by Body</h2>
      <ul>
        {bodies.map((body, index) => (
          <li key={index}>{body}</li>
        ))}
      </ul>
    </section>
  );
};

export default BrowseByBody;
