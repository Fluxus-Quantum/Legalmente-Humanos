export function TopBarHeader() {
  return (
    <>
      {/* ===================================================================== */}
      {/* BARRA SUPERIOR DE ALERTA & ESCASEZ GLOBAL */}
      {/* ===================================================================== */}
      <div className="bg-dark-surface-card border-b border-dark-surface-border text-center py-2.5 px-4 text-xs font-headline font-semibold text-text-muted flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-apple-green animate-pulse shrink-0" />
        <span>
          Diagnósticos Estratégicos Jurídicos:{' '}
          <strong className="text-white">Solo 5 plazas reservadas para esta semana</strong>.
        </span>
        <a
          href="#contacto-cta"
          className="text-apple-green hover:underline ml-2 hidden sm:inline-flex items-center gap-1 font-bold"
        >
          Reservar ahora <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </a>
      </div>

      {/* ===================================================================== */}
      {/* HEADER & NAVEGACIÓN (CON PRESENCIA DESTACADA DEL LOGO) */}
      {/* ===================================================================== */}
      <header className="sticky top-0 z-50 bg-dark-base/95 backdrop-blur-lg border-b border-dark-surface-border transition-all">
        <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Oficial con Tamaño y Presencia de Gran Jerarquía */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative p-1.5 rounded-lg bg-dark-surface-card border border-dark-surface-border group-hover:border-apple-green/50 transition-colors shadow-lg">
              <img
                src="/assets/aistudio/screen_abfa38b8.png"
                alt="Legalmente Humanos Abogados"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-[1.03]"
              />
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="font-headline font-black text-white text-base tracking-wider uppercase leading-none">
                Legalmente Humanos
              </span>
              <span className="text-[11px] font-headline font-medium text-apple-green tracking-widest uppercase mt-1">
                Abogacía de Impacto &amp; Blindaje
              </span>
            </div>
          </a>

          {/* Navegación Corporativa */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-8 text-sm font-headline font-semibold text-text-muted"
          >
            <a href="#historia" className="hover:text-white transition-colors">
              El Problema
            </a>
            <a href="#beneficios" className="hover:text-white transition-colors">
              Beneficios
            </a>
            <a href="#entregables" className="hover:text-white transition-colors">
              Soluciones
            </a>
            <a href="#comparativa" className="hover:text-white transition-colors">
              Valor vs Riesgo
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right mr-2">
              <span className="text-[11px] text-text-muted font-medium">Asesoría Colegiada</span>
              <span className="text-xs font-headline font-bold text-white flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-green" />
                Disponibilidad Inmediata
              </span>
            </div>
            <a
              href="#contacto-cta"
              className="bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-md shadow-lg shadow-apple-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-apple-green"
            >
              <span>Solicitar Asesoría</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export function HeroSection() {
  return (
    <>
      {/* ===================================================================== */}
      {/* 1. HEADER / HERO SECTION (DISEÑO ALTAMENTE CORPORATIVO Y ESTRUCTURADO) */}
      {/* ===================================================================== */}
      <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 px-6 border-b border-dark-surface-border overflow-hidden bg-gradient-to-b from-dark-base via-[#070707] to-dark-surface">
        {/* Glow ambiental de fondo y retícula corporativa sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-apple-green/8 blur-[160px] rounded-full pointer-events-none" />

        {/* Detalle sutil de arquitectura / columna institucional */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
          <span className="material-symbols-outlined text-[420px] text-white">account_balance</span>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Columna Izquierda: Titular y Propuesta de Autoridad */}
            <div className="lg:col-span-8 text-left space-y-6">
              {/* Badge de Autoridad Institucional */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-dark-surface-card border border-dark-surface-border shadow-md">
                <div className="flex items-center gap-1.5 text-apple-green">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span className="font-headline font-extrabold text-xs uppercase tracking-wider">
                    Bufete Innovador Especializado
                  </span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-xs text-text-muted font-medium">Empresas &amp; Startups</span>
              </div>

              {/* Titular Principal de Alto Impacto */}
              <h1 className="font-headline font-extrabold text-display-md-mobile sm:text-display-md lg:text-display-lg text-white leading-[1.08] tracking-tight text-balance">
                ¿Un tecnicismo legal que no entendiste a tiempo está{' '}
                <span className="text-apple-green underline decoration-apple-green/50 decoration-4 underline-offset-8">
                  poniendo en riesgo
                </span>{' '}
                Tu futuro o el de tu negocio?
              </h1>

              {/* Subtítulo explicativo */}
              <p className="font-body text-body-lg text-text-muted leading-relaxed max-w-2xl text-pretty">
                En <strong className="text-white font-bold">Legalmente Humanos</strong> desmantelamos la
                burocracia inaccesible de los bufetes tradicionales. Blindamos tus operaciones,
                contratos y pactos societarios con el máximo rigor jurídico y{' '}
                <strong className="text-white font-bold">
                  100% libre de tecnicismos incomprensibles
                </strong>
                .
              </p>

              {/* Acciones Principales */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contacto-cta"
                  className="bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-label-lg px-8 py-4 sm:px-9 sm:py-4.5 rounded-md shadow-xl shadow-apple-green/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Reservar Diagnóstico Gratuito</span>
                  <span className="material-symbols-outlined text-dark-base text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="#historia"
                  className="bg-dark-surface-card hover:bg-white/[0.04] text-white border border-dark-surface-border font-headline font-bold text-label-lg px-6 py-4 rounded-md transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Conocer el Método</span>
                  <span className="material-symbols-outlined text-text-muted text-lg">
                    arrow_downward
                  </span>
                </a>
              </div>

              {/* Sellos de confianza rápida */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 text-xs text-text-muted font-medium border-t border-dark-surface-border/60">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-apple-green text-base">schedule</span>
                  <span>Sesión privada de 45 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-apple-green text-base">forum</span>
                  <span>En español 100% claro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-apple-green text-base">lock</span>
                  <span>Cero riesgo ni compromiso inicial</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de Autoridad Corporativa con el Emblema Oficial */}
            <div className="lg:col-span-4">
              <div className="bg-dark-surface-card border-2 border-dark-surface-border hover:border-apple-green/40 transition-colors p-7 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-apple-green/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header de la tarjeta con logotipo oficial destacado */}
                <div className="flex items-center justify-between pb-6 border-b border-dark-surface-border">
                  <img
                    src="/assets/aistudio/screen_abfa38b8.png"
                    alt="Legalmente Humanos Sello Oficial"
                    className="h-16 w-auto object-contain"
                  />
                  <span className="px-2.5 py-1 rounded-[12px] bg-apple-green/10 border border-apple-green/30 text-apple-green font-headline font-extrabold text-[10px] uppercase tracking-wider">
                    MÉTODO LH 360°
                  </span>
                </div>

                {/* Puntos de Autoridad Corporativa */}
                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-apple-green/10 border border-apple-green/30 text-apple-green flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-base">balance</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">
                        Justicia y Equilibrio
                      </h4>
                      <p className="text-xs text-text-muted">
                        Protección rigurosa sin asimetrías abusivas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-apple-green/10 border border-apple-green/30 text-apple-green flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-base">handshake</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">
                        Trato Humano y Cercano
                      </h4>
                      <p className="text-xs text-text-muted">
                        Comunicación directa con tu abogado asignado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-apple-green/10 border border-apple-green/30 text-apple-green flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-base">assured_workload</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">
                        Solidez y Experiencia
                      </h4>
                      <p className="text-xs text-text-muted">
                        Acompañamiento integral de principio a fin.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer de la tarjeta con llamado inmediato */}
                <div className="pt-5 border-t border-dark-surface-border flex items-center justify-between text-xs">
                  <span className="text-text-muted">Diagnóstico de Riesgos:</span>
                  <span className="font-headline font-extrabold text-apple-green">
                    100% Bonificado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
