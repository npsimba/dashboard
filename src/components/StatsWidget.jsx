const StatsWidget = ({ title, count }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
};

export default StatsWidget;
