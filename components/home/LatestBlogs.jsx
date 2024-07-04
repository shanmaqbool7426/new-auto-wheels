// components/Home/LatestBlogs.js
import { useDashboardStore } from '../../store';

const LatestBlogs = () => {
  const { data } = useDashboardStore();
  return (
    <section>
      <h2>Latest Blogs</h2>
      <ul>
        {data.blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestBlogs;
