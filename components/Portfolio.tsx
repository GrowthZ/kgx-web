import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsService, Project } from '../src/services/projectsService';

const CATEGORIES = [
  "Tất cả",
  "Biệt thự vườn",
  "Resort & KS",
  "Hồ cá Koi",
  "Công trình công cộng",
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await projectsService.getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Tất cả") return true;
    if (project.filterCategory) {
      return project.filterCategory === activeCategory;
    }
    return project.category === activeCategory;
  });

  return (
    <section className="py-20 bg-background-light">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Dự án đã thực hiện
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-olive mt-2">
            Công trình Tiêu biểu
          </h2>
        </div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${activeCategory === cat
                ? "bg-olive text-white"
                : "bg-background-off border border-[#dde8ce] text-olive hover:bg-primary hover:text-white hover:border-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/du-an/${project.slug}`}
              className="block break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-[#eef4e7]"
            >
              <div className={`relative ${project.aspect} overflow-hidden`}>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-1 block">
                  {project.displayCategory || project.category}
                </span>
                <h3 className="text-lg font-bold text-olive mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-olive/60 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{" "}
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/du-an" className="inline-flex h-12 px-8 rounded-xl bg-olive text-white items-center justify-center font-bold text-base hover:bg-olive-light transition-all shadow-lg">
            Xem tất cả dự án
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;