import { useDashboardStore } from '../../store';

const FeaturedCars = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Featured Cars</h2>
      <ul>
        {data.featuredCars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - ${car.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedCars;