'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import PageTitle from '@/components/PageTitle';

interface LoanApplication {
  _id: string;
  type: string;
  name: string;
  phone: string;
  pincode?: string;
  loanType: string;
  createdAt: string;
  status?: string;
}

interface User {
  id: string;
  name: string;
  phone: string;
  role: string;
  email?: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [clickedLogOut, setClickedLogOut] = useState(false); // new state for modal

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const userResponse = await axios.get('/api/get-me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (userResponse.data.success) {
          setUser(userResponse.data.data);

          const applicationsResponse = await axios.get('/api/user-applications', {
            headers: { Authorization: `Bearer ${token}` }
          });

          if (applicationsResponse.data.success) {
            setApplications(applicationsResponse.data.applications);
          }
        } else {
          setError('Failed to fetch user data');
          localStorage.removeItem('token');
          router.push('/login');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setError('Authentication failed');
        localStorage.removeItem('token');
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        await axios.post('/api/logout', { token });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const getLoanTypeDisplay = (type: string): string => {
    const loanTypes: Record<string, string> = {
      'gold-loan': 'Gold Loan',
      'instant-gold-loan': 'Instant Gold Loan',
      'secured-gold-loan': 'Secured Gold Loan',
      'insured-gold-loan': 'Insured Gold Loan',
      'flexible-repayment-loan': 'Flexible Repayment Loan',
      'quick-gold-loan': 'Quick Gold Loan'
    };

    return loanTypes[type] || type;
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <PageTitle 
        title="Dashboard" 
        subtitle="View and manage your applications"
        bgColor="#f8f9fa"
      />
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <button 
                className="btn btn-outline-danger" 
                onClick={() => setClickedLogOut(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {user && (
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Welcome, to Swarn Sathi</h2>
                  <div className="card-text">
                    <p><strong>Phone:</strong> {user.phone}</p>
                    {user.email && <p><strong>Email:</strong> {user.email}</p>}
                    <p><strong>Account Type:</strong> {user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Your Loan Applications</h3>
                <Link href="/swarnsathi-champion" className="btn btn-primary">
                  Apply for a New Loan
                </Link>
              </div>
              <div className="card-body">
                {applications.length === 0 ? (
                  <div className="alert alert-info">
                    You haven't applied for any loans yet. Click "Apply for a New Loan" to get started.
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Loan Type</th>
                          <th>Application Type</th>
                          <th>Date Applied</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app._id}>
                            <td>{getLoanTypeDisplay(app.loanType)}</td>
                            <td>{app.type}</td>
                            <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                            <td>
                              <span className={`badge ${app.status === 'Approved' ? 'bg-success' : app.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>
                                {app.status || 'Pending'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {clickedLogOut && (
        <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button type="button" className="btn-close" onClick={() => setClickedLogOut(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setClickedLogOut(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
