// Changelogs.jsx
import PropTypes from 'prop-types';
import { Sidebar } from './layouts/sidebar/Sidebar';
import "./Changelogs.css";
import { useEffect, useState } from 'react';

export default function Changelogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Import dynamique de tous les JSON dans le dossier changelogs
    const modules = import.meta.glob('./changelogs/*.json');

    Promise.all(
      Object.values(modules).map((mod) => mod())
    ).then((importedLogs) => {
      // Trier du plus récent au plus ancien selon la date
      importedLogs.sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split('-').map(Number);
        const [dayB, monthB, yearB] = b.date.split('-').map(Number);
        return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
      });
      setLogs(importedLogs);
    });
  }, []);

  return (
    <div id="changelogs">
      <div className="sidebar_parent">
        <Sidebar />
      </div>
      <div className="changelogs_inner">
        <div className="box">
          <div className="top">
            <h1 className='changelogs_h1'>Changelogs</h1>
            <p className='changelogs_p'>All notable changes to this project will be documented in this file</p>
          </div>
          <div className="article_list">
            {logs.map((log) => (
              <article key={log.date}>
                <div className="article_title">[{log.version}] - {log.date}</div>
                <ul>
                  {log.changes.map((change, index) => (
                    <li key={index}>{change}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Changelogs.propTypes = {};