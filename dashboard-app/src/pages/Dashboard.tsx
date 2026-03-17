import './Dashboard.scss';

const stats = [
  { label: 'Total Items', value: '1,234' },
  { label: 'Active', value: '89' },
  { label: 'Pending', value: '12' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="mb-4">
        <h1 className="h4 fw-medium text-dark mb-1">Dashboard</h1>
        <p className="text-muted small mb-0">Overview of your activity</p>
      </header>

      <section className="row g-3 mb-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="col-12 col-sm-6 col-lg-4">
            <div className="stat-card card border-0 rounded-3 p-3 h-100">
              <span className="h5 fw-medium text-dark d-block mb-1">{value}</span>
              <span className="small text-muted">{label}</span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="small text-uppercase text-muted fw-medium mb-3">
          Recent Activity
        </h2>
        <div className="d-flex flex-column gap-2">
          {[
            { id: 1, text: 'Item updated', time: '2 min ago' },
            { id: 2, text: 'New item added', time: '1 hour ago' },
            { id: 3, text: 'Item completed', time: '3 hours ago' },
          ].map(({ id, text, time }) => (
            <div
              key={id}
              className="activity-item d-flex justify-content-between align-items-center rounded-3 p-3"
            >
              <span className="text-body">{text}</span>
              <span className="small text-muted">{time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
