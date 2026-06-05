'use client';

export default function Warning() {
  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        padding: '80px 20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '80px',
          color: '#d9534f',
          marginBottom: '20px',
        }}
      >
        ⚠️
      </div>
      <h1
        style={{
          color: '#333',
          fontSize: '36px',
          fontWeight: '600',
          marginBottom: '10px',
        }}
      >
        Your connection is not private
      </h1>
      <p
        style={{
          color: '#555',
          fontSize: '18px',
          marginBottom: '20px',
          lineHeight: '1.6',
        }}
      >
        Attackers might be trying to steal your information from{' '}
        <b style={{ color: '#333' }}>www.example.com</b>
      </p>
      <code
        style={{
          color: '#a1a1a1',
          fontSize: '14px',
          backgroundColor: '#fff',
          padding: '15px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px',
          display: 'inline-block',
        }}
      >
        NET::ERR_CERT_DATE_INVALID
      </code>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '12px 25px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Back to safety
      </button>
    </div>
  );
}
