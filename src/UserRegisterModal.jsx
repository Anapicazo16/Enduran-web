import React, { useState } from 'react';
import './UserRegisterModal.css';

export default function UserRegisterModal({ open, onClose }) {
  const [type, setType] = useState('particular');
  const [form, setForm] = useState({
    nombre: '', apellido1: '', apellido2: '', nif: '', email: '', telefono: '',
    razon: '', cif: ''
  });
  if (!open) return null;
  return (
    <div className="user-modal-overlay" onClick={onClose}>
      <div className="user-modal" onClick={e => e.stopPropagation()}>
        <button className="user-modal-close" onClick={onClose}>×</button>
        <div className="user-modal-content user-modal-register-content">
          <div style={{width:'100%',textAlign:'center',marginBottom:'1.7rem'}}>
            <span style={{fontSize:'1.45rem',fontWeight:700,color:'#0f3c5c',letterSpacing:'0.01em'}}>Registro de usuario</span>
          </div>
          <div className="user-modal-register-header">
            <button className={type==='particular' ? 'active' : ''} onClick={()=>setType('particular')}>Particular</button>
            <button className={type==='empresa' ? 'active' : ''} onClick={()=>setType('empresa')}>Empresa</button>
          </div>
          <form className="user-modal-form user-modal-register-form">
            {type==='particular' ? (
              <>
                <label className="user-modal-label">Nombre
                  <input type="text" value={form.nombre} onChange={e=>setForm(f=>({...f,nombre:e.target.value}))} required placeholder="Nombre" />
                </label>
                <label className="user-modal-label">Apellido 1
                  <input type="text" value={form.apellido1} onChange={e=>setForm(f=>({...f,apellido1:e.target.value}))} required placeholder="Primer apellido" />
                </label>
                <label className="user-modal-label">Apellido 2
                  <input type="text" value={form.apellido2} onChange={e=>setForm(f=>({...f,apellido2:e.target.value}))} required placeholder="Segundo apellido" />
                </label>
                <label className="user-modal-label">NIF
                  <input type="text" value={form.nif} onChange={e=>setForm(f=>({...f,nif:e.target.value}))} required placeholder="NIF" />
                </label>
                <label className="user-modal-label">Email
                  <input type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} required placeholder="Correo electrónico" />
                </label>
                <label className="user-modal-label">Teléfono
                  <input type="tel" value={form.telefono} onChange={e=>setForm(f=>({...f,telefono:e.target.value}))} required placeholder="Teléfono" />
                </label>
              </>
            ) : (
              <>
                <label className="user-modal-label">Razón Social
                  <input type="text" value={form.razon} onChange={e=>setForm(f=>({...f,razon:e.target.value}))} required placeholder="Razón social" />
                </label>
                <label className="user-modal-label">CIF
                  <input type="text" value={form.cif} onChange={e=>setForm(f=>({...f,cif:e.target.value}))} required placeholder="CIF" />
                </label>
                <label className="user-modal-label">Email
                  <input type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} required placeholder="Correo electrónico" />
                </label>
                <label className="user-modal-label">Teléfono
                  <input type="tel" value={form.telefono} onChange={e=>setForm(f=>({...f,telefono:e.target.value}))} required placeholder="Teléfono" />
                </label>
              </>
            )}
            <div className="user-modal-register-checkboxes" style={{margin:'1.1rem 0 0.2rem 0',display:'flex',flexDirection:'column',gap:'0.7rem'}}>
              <label style={{display:'flex',alignItems:'flex-start',fontSize:'0.98rem',color:'#2d3b3a',fontWeight:500,gap:'0.5rem',lineHeight:'1.4'}}>
                <input type="checkbox" required style={{marginTop:2}} />
                <span>
                  Acepto las <a href="#" style={{color:'#0f3c5c',textDecoration:'underline',fontWeight:600}}>condiciones de uso</a> y la <a href="#" style={{color:'#0f3c5c',textDecoration:'underline',fontWeight:600}}>Información básica de Protección de Datos</a>
                </span>
              </label>
              <label style={{display:'flex',alignItems:'flex-start',fontSize:'0.98rem',color:'#2d3b3a',fontWeight:500,gap:'0.5rem',lineHeight:'1.4'}}>
                <input type="checkbox" style={{marginTop:2}} />
                <span>Suscríbete y recibe todas las novedades de nuestro blog</span>
              </label>
            </div>
            <button type="submit" className="user-modal-login-btn">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
}
