import create from 'zustand';

export const useDashboardStore = create((set) => ({
  data: {
    makes: [],
    bodies: [],
    featuredCars: [],
    comparisons: [],
    instantUsedCars: [],
    videos: [],
    blogs: []
  },
  loading: true,
  error: null,
  setDashboardData: (data) => set({ data, loading: false }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
