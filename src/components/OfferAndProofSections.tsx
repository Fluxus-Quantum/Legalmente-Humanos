import { AvatarImage } from './AvatarImage';

const EDITORIAL_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrCNx23loQaCk3EpceNZsnYZEBimCBblt_e0X-dwRNSnoMY6JJCtnzZrSEU0xyiRLVnrklce9XYkYA29NBZeZOtitxgc13ug8ID8xcatFEO5pXhjrGo7xnhCCI5VKcsPHs1pR3srKDoExwXXbhX1XRn_A-CNVv8-NnJAnDw5axkj8cGLJn1ezX6R9YG7bXeBFCjptj_PPsXKoVu0ATXPsDwWmovhLbZIbfWPgEMq840HmRif278EfCl4';

export function OfferAndProofSections() {
  return (
    <>
      {/* ===================================================================== */}
      {/* 8. ENTREGABLES (ESTRUCTURA MODULAR) */}
      {/* ===================================================================== */}
      <section
        id="entregables"
        className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Nuestra Solución Integral
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Qué recibes al blindar tus derechos o tu negocio con nosotros
            </h2>
            <p className="text-body-md text-text-muted">
              Un kit modular llave en mano, adaptado quirúrgicamente a tu necesidad ó a tu modelo
              de negocio y listo para usar de inmediato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-xl flex flex-col justify-between hover:border-apple-green/50 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green">
                  <span className="material-symbols-outlined text-2xl">contract</span>
                </div>
                <h3 className="font-headline font-extrabold text-white text-xl">
                  Auditoría &amp; Contratos Comerciales Claros
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  Revisión integral y redacción a medida de tus acuerdos de servicios, términos y
                  condiciones, y contratos con clientes con cláusulas de pago garantizado.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Cláusulas anti-morosidad e intereses de demora</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Límites claros de responsabilidad y alcance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Resumen ejecutivo en una sola página</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-dark-surface-card border-2 border-apple-green/60 p-8 rounded-xl flex flex-col justify-between transition-all shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-apple-green text-dark-base font-headline font-extrabold text-[10px] tracking-wider uppercase">
                Más Solicitado
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-apple-green/20 border border-apple-green flex items-center justify-center text-apple-green">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                </div>
                <h3 className="font-headline font-extrabold text-white text-xl">
                  Pacto de Socios &amp; Blindaje Interno
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  Reglas de juego inequívocas entre fundadores e inversores: dedicación, toma de
                  decisiones, cláusulas drag-along/tag-along y salida ordenada.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Protección ante abandono de socios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Reparto de dividendos y reinversión</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Resolución pacífica de desacuerdos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-xl flex flex-col justify-between hover:border-apple-green/50 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green">
                  <span className="material-symbols-outlined text-2xl">lock_person</span>
                </div>
                <h3 className="font-headline font-extrabold text-white text-xl">
                  Propiedad Intelectual &amp; RGPD Práctico
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  Blindaje de tu marca comercial, bases de datos de clientes, software y secretos
                  empresariales con NDAs ejecutables y privacidad sin agobios.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Registro y custodia de marca</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Acuerdos de confidencialidad reforzados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-apple-green text-sm">done</span>
                    <span>Consentimientos de datos transparentes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. BONIFICACIONES (COMPLEMENTOS DE VALOR) */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-dark-base border-b border-dark-surface-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Añadidos Exclusivos
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Bonificaciones Incluidas en tu Diagnóstico
            </h2>
            <p className="text-body-md text-text-muted">
              Recursos adicionales sin coste que aceleran la autonomía de tu equipo comercial y
              legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bonus 1 */}
            <div className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-xl relative overflow-hidden group hover:border-apple-green/60 transition-all">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-green text-dark-base font-headline font-extrabold text-xs uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">card_giftcard</span>
                <span>Bonus #1 Incluido</span>
              </div>
              <h3 className="font-headline font-extrabold text-white text-xl mb-3">
                Guía de Negociación Comercial &quot;Cero Trampas&quot;
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed mb-4">
                Un manual práctico en PDF&nbsp; donde te mostramos cómo responder cuando un cliente o
                proveedor te envía su propio contrato e intenta imponerte cláusulas desequilibradas.
              </p>
              <div className="text-xs text-apple-green font-headline font-bold">
                Valor habitual: 290 € (Gratis con tu diagnóstico)
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-xl relative overflow-hidden group hover:border-apple-green/60 transition-all">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-green text-dark-base font-headline font-extrabold text-xs uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">card_giftcard</span>
                <span>Bonus #2 Incluido</span>
              </div>
              <h3 className="font-headline font-extrabold text-white text-xl mb-3">
                Plantilla Rápida de NDA Bilateral en Español
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed mb-4">
                El modelo exacto que utilizamos para proteger ideas de negocio antes de compartir
                datos confidenciales con colaboradores, agencias o posibles socios.
              </p>
              <div className="text-xs text-apple-green font-headline font-bold">
                Valor habitual: 180 € (Gratis con tu diagnóstico)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. ANCHOR (COMPARATIVA DE VALOR VS RIESGO) */}
      {/* ===================================================================== */}
      <section
        id="comparativa"
        className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Matemática Pura de Negocio
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              El Coste Devastador de un Error vs La Certeza de Legalmente Humanos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Lado Izquierdo: El Riesgo Real */}
            <div className="bg-warning-bg/40 border-2 border-warning-border rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning-accent/20 text-warning-accent font-headline font-bold text-xs uppercase tracking-wider mb-4">
                  <span>Riesgo / Método Tradicional</span>
                </div>
                <h3 className="font-headline font-extrabold text-white text-2xl mb-4">
                  Coste de una Demanda o Sanción
                </h3>
                <p className="text-body-sm text-text-muted mb-6 leading-relaxed">
                  Esperar a que surja un conflicto antes de ordenar tus contratos suele suponer la
                  pérdida definitiva de liquidez o el cierre del negocio:
                </p>
                <ul className="space-y-3 text-sm text-text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-warning-accent text-lg shrink-0">
                      cancel
                    </span>
                    <span>
                      Litigio judicial medio en España: <strong>4.500 € a 15.000 €</strong> en
                      costas y procuradores.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-warning-accent text-lg shrink-0">
                      cancel
                    </span>
                    <span>Meses o años de estrés, parálisis de proyectos y desvío de foco.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-warning-accent text-lg shrink-0">
                      cancel
                    </span>
                    <span>Rupturas traumáticas de socios con pérdida del 100% de la empresa.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-warning-border/50 text-center">
                <span className="text-xs uppercase font-headline font-bold text-warning-accent">
                  Coste Potencial Incalculable
                </span>
              </div>
            </div>

            {/* Lado Derecho: La Solución Legalmente Humanos */}
            <div className="bg-dark-surface-card border-2 border-apple-green rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-apple-green text-dark-base font-headline font-extrabold text-[10px] tracking-wider uppercase px-4 py-1 rounded-bl-lg">
                Solución Rentable
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-green/10 text-apple-green font-headline font-bold text-xs uppercase tracking-wider mb-4">
                  <span>Método Legalmente Humanos</span>
                </div>
                <h3 className="font-headline font-extrabold text-white text-2xl mb-4">
                  Inversión Preventiva &amp; Transparente
                </h3>
                <p className="text-body-sm text-text-muted mb-6 leading-relaxed">
                  Blindar tu operativa desde el inicio es una fracción insignificante frente al coste
                  de un solo pleito:
                </p>
                <ul className="space-y-3 text-sm text-text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-apple-green text-lg shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Diagnóstico Estratégico 100% Gratuito</strong> para evaluar
                      vulnerabilidades.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-apple-green text-lg shrink-0">
                      check_circle
                    </span>
                    <span>Presupuesto cerrado sin sorpresas y adaptado a tu facturación actual.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-apple-green text-lg shrink-0">
                      check_circle
                    </span>
                    <span>
                      Tranquilidad total para firmar clientes grandes con autoridad jurídica.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-dark-surface-border text-center">
                <span className="text-xs uppercase font-headline font-bold text-apple-green">
                  Retorno Inmediato en Paz Mental
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 11. CTA #1 INTERMEDIO */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-6 bg-dark-base border-b border-dark-surface-border text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-headline font-extrabold text-headline-md text-white">
            No dejes la seguridad de tus derechos ó las de tu negocio para cuando sea demasiado
            tarde
          </h3>
          <p className="text-body-md text-text-muted">
            Agenda hoy una llamada de 45 minutos. Te diremos con total franqueza qué necesitas y qué
            no.
          </p>
          <div className="pt-2">
            <a
              href="#contacto-cta"
              className="bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-label-lg px-8 py-4 sm:px-10 sm:py-5 rounded-md shadow-xl shadow-apple-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Da el Primer Paso para Blindar tu Negocio</span>
              <span className="material-symbols-outlined text-dark-base text-xl">arrow_forward</span>
            </a>
          </div>
          <p className="text-xs text-text-muted">
            Sesión individual confidencial con un abogado especialista.
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 12. FAQ (PREGUNTAS FRECUENTES - ACORDEÓN INTERACTIVO) */}
      {/* ===================================================================== */}
      <section
        id="faq"
        className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Respuestas Directas
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Preguntas Frecuentes
            </h2>
            <p className="text-body-md text-text-muted">
              Resolvemos tus dudas sobre conocimientos previos, tiempos y presupuesto sin rodeos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details
              data-component-id="accordion-single"
              className="group bg-dark-surface-card border border-dark-surface-border rounded-lg overflow-hidden transition-colors open:border-apple-green/70"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-white/[0.02]">
                <span className="font-headline font-bold text-white text-base sm:text-lg pr-4">
                  ¿Necesito tener conocimientos previos de leyes para trabajar con vosotros?
                </span>
                <span className="faq-chevron material-symbols-outlined text-text-muted text-2xl transition-transform duration-200">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-dark-surface-border/50">
                <p className="text-body-md text-text-muted leading-relaxed">
                  Ninguno. De hecho, preferimos que no los tengas. Nuestra misión fundamental es
                  traducir cada artículo y tecnicismo complejo a situaciones cotidianas de tu
                  negocio. Te explicamos exactamente qué derechos tienes, qué riesgos asumes y qué
                  decisiones tomar en un lenguaje claro, honesto y comprensible.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details
              data-component-id="accordion-single"
              className="group bg-dark-surface-card border border-dark-surface-border rounded-lg overflow-hidden transition-colors open:border-apple-green/70"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-white/[0.02]">
                <span className="font-headline font-bold text-white text-base sm:text-lg pr-4">
                  ¿Cuánto tiempo me requerirá a mí todo este proceso?
                </span>
                <span className="faq-chevron material-symbols-outlined text-text-muted text-2xl transition-transform duration-200">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-dark-surface-border/50">
                <p className="text-body-md text-text-muted leading-relaxed">
                  Sabemos que diriges un negocio y no te sobra ni un minuto. La sesión estratégica
                  dura 45 minutos. Tras esa llamada, nuestro equipo se encarga de todo el trabajo
                  pesado de auditoría y redacción. En 7 días hábiles te entregamos los documentos
                  listos para implementar con un resumen de uso de 10 minutos.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details
              data-component-id="accordion-single"
              className="group bg-dark-surface-card border border-dark-surface-border rounded-lg overflow-hidden transition-colors open:border-apple-green/70"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-white/[0.02]">
                <span className="font-headline font-bold text-white text-base sm:text-lg pr-4">
                  ¿Qué presupuesto necesito y cómo se calculan los honorarios?
                </span>
                <span className="faq-chevron material-symbols-outlined text-text-muted text-2xl transition-transform duration-200">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-dark-surface-border/50">
                <p className="text-body-md text-text-muted leading-relaxed">
                  La sesión de diagnóstico inicial es 100% gratuita y sin compromiso. En ella
                  evaluamos el tamaño de tu operación y te damos un presupuesto cerrado antes de que
                  decidas nada. Sin costes ocultos, sin facturación por hora y con facilidades de
                  pago adaptadas a pequeños negocios y autónomos.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details
              data-component-id="accordion-single"
              className="group bg-dark-surface-card border border-dark-surface-border rounded-lg overflow-hidden transition-colors open:border-apple-green/70"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-white/[0.02]">
                <span className="font-headline font-bold text-white text-base sm:text-lg pr-4">
                  ¿Qué ocurre si ya tengo contratos pero no sé si son seguros?
                </span>
                <span className="faq-chevron material-symbols-outlined text-text-muted text-2xl transition-transform duration-200">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-dark-surface-border/50">
                <p className="text-body-md text-text-muted leading-relaxed">
                  Es uno de nuestros servicios más solicitados. Puedes traernos los contratos o
                  acuerdos que estés usando actualmente. Los auditamos cláusula por cláusula,
                  detectamos agujeros y te indicamos exactamente qué cambiar para evitar
                  contingencias graves.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 13. URGENCIA / ESCASEZ */}
      {/* ===================================================================== */}
      <section className="py-8 px-6 bg-warning-bg border-y border-warning-border">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-warning-border flex items-center justify-center text-warning-accent shrink-0 animate-bounce">
              <span className="material-symbols-outlined text-xl">event_busy</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-white text-sm sm:text-base">
                Plazas Semanales Limitadas a 5 Diagnósticos
              </h4>
              <p className="text-xs text-text-muted">
                Para garantizar la máxima profundidad y calidad en cada caso, solo aceptamos 5
                nuevos negocios por semana.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning-accent/20 border border-warning-border text-warning-accent font-headline font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-warning-accent" />
              3 Plazas Asignadas Esta Semana
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 14. CTA #2 (SEGUNDO LLAMADO ESTRATÉGICO) */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 px-6 bg-dark-base border-b border-dark-surface-border text-center">
        <div className="max-w-xl mx-auto space-y-5">
          <h3 className="font-headline font-extrabold text-headline-md text-white">
            Asegura una de las 2 plazas restantes antes de que comience el siguiente ciclo
          </h3>
          <a
            href="#contacto-cta"
            className="bg-apple-green hover:bg-apple-green-hover text-dark-base font-headline font-extrabold text-label-lg px-8 py-4 sm:px-10 sm:py-5 rounded-md shadow-xl shadow-apple-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Reservar Mi Diagnóstico Gratuito</span>
            <span className="material-symbols-outlined text-dark-base text-xl">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 15. DEEP DIVE (PROFUNDIZACIÓN EDITORIAL) */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border">
        <div className="max-w-[760px] mx-auto space-y-8 font-body text-body-lg text-text-muted leading-relaxed">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Manifiesto Editorial
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Transformar la vulnerabilidad en un escudo de confianza
            </h2>
          </div>

          <p>
            Cuando una persona, un emprendedor o dueño de negocio pospone la estructuración de sus
            contratos, rara vez es por desinterés. Casi siempre es por{' '}
            <strong className="text-white">intimidación</strong>. Los despachos de abogados
            tradicionales han cultivado durante décadas una imagen de inaccesibilidad: cuanto más
            ininteligible es el texto, más cara parece la minuta.
          </p>

          <div className="p-6 rounded-lg bg-dark-surface-card border-l-4 border-apple-green text-white font-medium italic my-6">
            &quot;Un contrato no es un instrumento para ganar un juicio; es una herramienta para
            evitar tener que pisar un juzgado jamás.&quot;
          </div>

          <p>
            En <strong className="text-white">Legalmente Humanos</strong> creemos exactamente lo
            contrario: la verdadera maestría jurídica consiste en lograr que un acuerdo de
            compraventa, un pacto entre socios o unos términos de servicio sean tan diáfanos que
            cualquier persona los comprenda a la primera lectura, sin perder un solo ápice de solidez
            y fuerza ejecutiva.
          </p>

          <p>
            Ese es el cambio de paradigma que defendemos: la ley debe ser tu aliada de crecimiento,
            no una sombra que te quite el sueño cada vez que firmas un cliente nuevo.
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-dark-surface-border">
            <AvatarImage
              src={EDITORIAL_AVATAR_URL}
              alt="Director Jurídico - Legalmente Humanos"
              initials="LH"
              className="w-14 h-14 rounded-full object-cover border border-apple-green/40 shadow-sm"
            />
            <div>
              <h4 className="font-headline font-bold text-white text-base">
                Equipo Jurídico Senior
              </h4>
              <p className="text-xs text-text-muted">Legalmente Humanos • Abogacía Preventiva</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
