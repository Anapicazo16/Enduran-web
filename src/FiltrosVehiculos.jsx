import React, { useState } from 'react';
import './FiltrosVehiculos.css';

const filtros = [
  { icon: '🚗', label: 'Tipo de coche' },
  { icon: '🚙', label: 'Marca y modelo' },
  { icon: '🏷️', label: 'Precio' },
  { icon: '🛒', label: 'Servicios online' },
  { icon: '📍', label: 'Ubicación' },
  { icon: '🛡️', label: 'Vendedores' },
  { icon: '📅', label: 'Año' },
  { icon: '🔢', label: 'Kilómetros' },
  { icon: '🚘', label: 'Carrocería' },
  { icon: '🛠️', label: 'Motor' },
  { icon: '⚡', label: 'Eléctricos' },
  { icon: '✨', label: 'Equipamiento' },
  { icon: '🪑', label: 'Color' },
];

export default function FiltrosVehiculos() {
  const [open, setOpen] = useState(Array(filtros.length).fill(false));

  const toggle = idx => {
    setOpen(open => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <aside className="filtros-vehiculos">
      {filtros.map((f, idx) => (
        <div className="filtro-item" key={f.label}>
          <button className="filtro-btn" onClick={() => toggle(idx)}>
            <span className="filtro-icon">{f.icon}</span>
            <span className="filtro-label">{f.label}</span>
            <span className={`filtro-arrow${open[idx] ? ' open' : ''}`}>▼</span>
          </button>
          {open[idx] && (
            <div className="filtro-opciones">
              {/* Opciones aquí, se rellenarán después */}
              <div className="filtro-opcion">(Opciones...)</div>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
