import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/template.css';
import Layout from './components/common/Layout';
import Main from './pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container-fluid p-0">
        <Layout>
            <Main/>
        </Layout>
    </div>
);