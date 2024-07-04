import { useDashboardStore } from '../../store';

const InstantUsedCars = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Instant Used Cars</h2>
      <ul>
        {data.instantUsedCars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - ${car.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstantUsedCars;
