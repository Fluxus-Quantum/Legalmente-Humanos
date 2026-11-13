import { FormEvent, useState } from 'react';

type LegalDocKey = 'aviso' | 'privacidad' | 'terminos' | 'deontologico';

const LEGAL_DOCS: Record<LegalDocKey, { title: string; body: string }> = {
  aviso: {
    title: 'Aviso Legal',
    body: 'Legalmente Humanos Abogados opera bajo estricto cumplimiento de la normativa colegial y mercantil vigente, ofreciendo servicios de asesoría jurídica preventiva, auditoría contractual y blindaje societario para empresas, startups y autónomos.',
  },
  privacidad: {
    title: 'Política de Privacidad',
    body: 'Todos los datos facilitados en el formulario de diagnóstico estratégico se tratan con carácter confidencial bajo secreto profesional abogado-cliente, destinándose exclusivamente a coordinar tu sesión privada de 45 minutos.',
  },
  terminos: {
    title: 'Términos de Contratación',
    body: 'La sesión inicial de diagnóstico de 45 minutos es 100% gratuita y sin compromiso. Cualquier encargo posterior se formaliza mediante presupuesto cerrado por escrito antes del inicio de los trabajos.',
  },
  deontologico: {
    title: 'Código Deontológico',
    body: 'Nuestro equipo colegiado actúa guiado por los principios de transparencia absoluta, claridad lingüística, lealtad preventiva y defensa integral del patrimonio e intereses legítimos de cada cliente.',
  },
};

export function ConversionAndFooter() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [challenge, setChallenge] = useState('contratos');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocKey | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Por favor, introduce tu nombre completo.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Por favor, introduce un correo electrónico de empresa válido.');
      return;
    }
    if (trimmedPhone.replace(/[^0-9+]/g, '').length < 7) {
      setErrorMessage('Por favor, introduce un teléfono de contacto válido.');
      return;
    }

    setErrorMessage(null);
    setSubmitted(true);
  };

  return (
    <>
      {/* ===================================================================== */}
      {/* 16. CTA FINAL + CIERRE EMOCIONAL & FORMULARIO DIRECTO */}
      {/* ===================================================================== */}
      <section
        id="contacto-cta"
        className="py-20 sm:py-28 px-6 bg-dark-base relative overflow-hidden"
      >
        {/* Glow ambiental verde */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-apple-green/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
                El Momento es Ahora
              </span>
              <h2 className="font-headline font-extrabold text-display-md-mobile sm:text-display-md text-white leading-tight">
                Protege el esfuerzo de años antes de que un descuido te obligue a defenderlo.
              </h2>
              <p className="text-body-lg text-text-muted leading-relaxed">
                No esperes a recibir una reclamación o sufrir un desacuerdo irreconciliable con un
                socio. Reserva tu diagnóstico gratuito hoy y obtén la claridad total que tu negocio
                merece.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-apple-green text-xl">
                    check_circle
                  </span>
                  <span>45 minutos de diagnóstico estratégico 1 a 1</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-apple-green text-xl">
                    check_circle
                  </span>
                  <span>Análisis de riesgos y hoja de ruta inmediata</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-apple-green text-xl">
                    check_circle
                  </span>
                  <span>Garantía de claridad 100% sin riesgo financiero</span>
                </div>
              </div>
            </div>

            {/* Formulario de Conversión Direct Response */}
            <div className="lg:col-span-6">
              <div className="bg-dark-surface-card border-2 border-apple-green/60 p-8 sm:p-10 rounded-2xl shadow-2xl relative">
                <div className="mb-6">
                  <h3 className="font-headline font-extrabold text-white text-2xl mb-1">
                    Reserva tu Diagnóstico Gratuito
                  </h3>
                  <p className="text-xs text-text-muted">
                    Responde 3 datos y nuestro equipo te contactará en menos de 24 horas laborables.
                  </p>
                </div>

                {!submitted ? (
                  <form id="lead-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs font-headline font-bold text-white uppercase tracking-wider mb-2"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Carlos Martínez"
                        className="w-full px-4 py-3.5 rounded-md bg-dark-base border border-dark-surface-border text-white placeholder-text-muted/60 focus:outline-none focus:border-apple-green focus:ring-1 focus:ring-apple-green text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-xs font-headline font-bold text-white uppercase tracking-wider mb-2"
                      >
                        Correo Electrónico de Empresa *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="carlos@tunegocio.com"
                        className="w-full px-4 py-3.5 rounded-md bg-dark-base border border-dark-surface-border text-white placeholder-text-muted/60 focus:outline-none focus:border-apple-green focus:ring-1 focus:ring-apple-green text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-xs font-headline font-bold text-white uppercase tracking-wider mb-2"
                      >
                        Teléfono de Contacto (WhatsApp) *
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3.5 rounded-md bg-dark-base border border-dark-surface-border text-white placeholder-text-muted/60 focus:outline-none focus:border-apple-green focus:ring-1 focus:ring-apple-green text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-challenge"
                        className="block text-xs font-headline font-bold text-white uppercase tracking-wider mb-2"
                      >
                        ¿Cuál es tu mayor reto o duda legal hoy?
                      </label>
                      <select
                        id="lead-challenge"
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-md bg-dark-base border border-dark-surface-border text-white focus:outline-none focus:border-apple-green focus:ring-1 focus:ring-apple-green text-sm"
                      >
                        <option value="contratos">
                          Revisar o redactar contratos comerciales con clientes
                        </option>
                        <option value="socios">
                          Estructurar pacto de socios o entrada de inversores
                        </option>
                        <option value="marca">Proteger mi marca y propiedad intelectual</option>
                        <option value="general">Auditoría general y prevención de riesgos</option>
                      </select>
                    </div>

                    {errorMessage && (
                      <p role="alert" className="text-xs font-medium text-warning-accent">
                        {errorMessage}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-label-lg py-4 rounded-md shadow-xl shadow-apple-green/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
                      >
                        <span>Solicitar Mi Sesión Gratuita Ahora</span>
                        <span className="material-symbols-outlined text-dark-base text-xl">
                          arrow_forward
                        </span>
                      </button>
                    </div>

                    <p className="text-[11px] text-text-muted text-center pt-2">
                      🔒 Tus datos están 100% seguros bajo estricto secreto profesional legal.
                    </p>
                  </form>
                ) : (
                  /* Mensaje de confirmación interactiva */
                  <div id="form-success" className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-apple-green text-dark-base mx-auto flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">check</span>
                    </div>
                    <h4 className="font-headline font-extrabold text-white text-2xl">
                      ¡Solicitud Recibida con Éxito!
                    </h4>
                    <p className="text-body-md text-text-muted max-w-sm mx-auto">
                      Uno de nuestros asesores jurídicos revisará tu información y te contactará en
                      menos de 24 horas para coordinar el horario de tu sesión.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 17. FOOTER / PIE DE PÁGINA */}
      {/* ===================================================================== */}
      <footer className="bg-dark-base border-t border-dark-surface-border py-12 px-6 pb-24 md:pb-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-text-muted">
          <div className="flex items-center gap-4">
            <img
              src="/assets/aistudio/screen_abfa38b8.png"
              alt="Legalmente Humanos"
              className="h-10 w-auto object-contain opacity-80"
            />
            <div>
              <p className="text-white font-headline font-bold text-sm">
                Legalmente Humanos Abogados
              </p>
              <p className="text-[11px] text-text-muted">
                Seguridad jurídica cercana, transparente y sin tecnicismos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setActiveLegalDoc('aviso')}
              className="hover:text-apple-green transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('privacidad')}
              className="hover:text-apple-green transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('terminos')}
              className="hover:text-apple-green transition-colors cursor-pointer"
            >
              Términos de Contratación
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('deontologico')}
              className="hover:text-apple-green transition-colors cursor-pointer"
            >
              Código Deontológico
            </button>
          </div>

          <div className="text-center md:text-right">
            <p>© 2026 Legalmente Humanos. Todos los derechos reservados.</p>
            <p className="text-[10px] text-text-muted/60 mt-0.5">
              Asesoramiento jurídico colegiado y confidencial.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal informativo para enlaces legales del pie de página */}
      {activeLegalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveLegalDoc(null)}
        >
          <div
            className="bg-dark-surface-card border border-dark-surface-border rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 id="legal-modal-title" className="font-headline font-extrabold text-white text-xl">
                {LEGAL_DOCS[activeLegalDoc].title}
              </h3>
              <button
                type="button"
                aria-label="Cerrar aviso"
                onClick={() => setActiveLegalDoc(null)}
                className="w-8 h-8 rounded-md bg-dark-base border border-dark-surface-border text-text-muted hover:text-white flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <p className="text-body-sm text-text-muted leading-relaxed">
              {LEGAL_DOCS[activeLegalDoc].body}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalDoc(null)}
                className="bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-xs px-5 py-2.5 rounded-md cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky CTA bar para dispositivos móviles (Mobile-First) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-dark-base/95 backdrop-blur-md border-t border-dark-surface-border md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="text-left pl-2">
          <p className="font-headline font-bold text-xs text-white">Legalmente Humanos</p>
          <p className="text-[10px] text-apple-green font-semibold">Diagnóstico Gratuito</p>
        </div>
        <a
          href="#contacto-cta"
          className="bg-apple-green text-dark-base font-headline font-extrabold text-xs px-5 py-3 rounded-md shadow-md shadow-apple-green/30 flex items-center gap-1.5 shrink-0"
        >
          <span>Reservar Plaza</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </>
  );
}
