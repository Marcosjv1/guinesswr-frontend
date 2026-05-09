import { useState } from 'react';

const emptyForm = {
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío (sin backend de contacto)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(emptyForm);
    }, 800);
  };

  return (
    <section id="contacto" className="card shadow-sm p-4 mb-5">
      <h2 className="mb-1">Contacto</h2>
      <p className="text-muted mb-3">
        ¿Tienes alguna pregunta o sugerencia? Escríbenos.
      </p>

      {submitted && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
          <button
            type="button"
            className="btn-close"
            onClick={() => setSubmitted(false)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Asunto</label>
          <input
            type="text"
            name="asunto"
            className="form-control"
            placeholder="¿De qué trata tu mensaje?"
            value={form.asunto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-dark px-4"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" />
                Enviando...
              </>
            ) : (
              '📨 Enviar mensaje'
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
