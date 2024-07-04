import { useDashboardStore } from '../../store';

const BrowseVideos = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Browse Videos</h2>
      <ul>
        {data.videos.map((video) => (
          <li key={video.id}>
            <a href={video.url}>{video.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrowseVideos;
