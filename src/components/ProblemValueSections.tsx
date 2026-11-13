import { AvatarImage } from './AvatarImage';

const TESTIMONIAL_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrCv0Dt6v4DqCpMKIUw2j-z-MqqoZajVNOHbzgqvfnvGMr6l829noRzxH9eHMRB3xGBikLaRENjw6VrfPw6NDS_pmLVL2cf7ZomPyBL_Duhn2bL_VPLrQ6vH502x-V_IhOxL-jCgldcV2Fnvzy2bXjUbyVhKktDN6RKUCwVaCDgzDB4bm11axVQj4D10yQf45oSV8yVizyIdK3LE3jVnQ__0LnnahWG_KA_qnS0S92eB58HQYM2WXx0JgRhXtl2ebFGr';

export function ProblemValueSections() {
  return (
    <>
      {/* ===================================================================== */}
      {/* 2. SECCIÓN DE CONTEXTO / HISTORIA (PAIN POINTS) */}
      {/* ===================================================================== */}
      <section
        id="historia"
        className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
                La Realidad que Nadie Te Cuenta
              </span>
              <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white leading-tight">
                Creaste tu negocio para ser libre, no para vivir con miedo a una notificación
                judicial.
              </h2>
              <p className="text-body-md text-text-muted leading-relaxed">
                La mayoría de los abogados tradicionales parecen hablar otro idioma a propósito. Te
                entregan documentos de 40 páginas plagados de latinajos, te cobran por cada minuto
                de reloj y cuando preguntas qué significa una cláusula, la respuesta suele ser más
                confusa que la duda original.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Dolor 1 */}
              <div className="bg-dark-surface-card border border-dark-surface-border p-6 rounded-lg hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-md bg-warning-bg border border-warning-border flex items-center justify-center text-warning-accent mb-4">
                  <span className="material-symbols-outlined text-xl">description</span>
                </div>
                <h3 className="font-headline font-bold text-white text-base mb-2">
                  Contratos descargados de Google
                </h3>
                <p className="text-body-sm text-text-muted">
                  Plantillas genéricas que no se adaptan a tu modelo y dejan vacíos legales
                  gigantescos listos para estallar ante la primera discrepancia.
                </p>
              </div>

              {/* Dolor 2 */}
              <div className="bg-dark-surface-card border border-dark-surface-border p-6 rounded-lg hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-md bg-warning-bg border border-warning-border flex items-center justify-center text-warning-accent mb-4">
                  <span className="material-symbols-outlined text-xl">handshake</span>
                </div>
                <h3 className="font-headline font-bold text-white text-base mb-2">
                  Pactos de socios inexistentes
                </h3>
                <p className="text-body-sm text-text-muted">
                  Amistades y proyectos de años rotos por no dejar por escrito qué ocurre si alguien
                  no rinde, si quiere marcharse o si llega un inversor.
                </p>
              </div>

              {/* Dolor 3 */}
              <div className="bg-dark-surface-card border border-dark-surface-border p-6 rounded-lg hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-md bg-warning-bg border border-warning-border flex items-center justify-center text-warning-accent mb-4">
                  <span className="material-symbols-outlined text-xl">gavel</span>
                </div>
                <h3 className="font-headline font-bold text-white text-base mb-2">
                  Responsabilidad personal expuesta
                </h3>
                <p className="text-body-sm text-text-muted">
                  Operar sin blindaje societario significa que ante un impago o litigio, tu propio
                  patrimonio familiar responde por el negocio.
                </p>
              </div>

              {/* Dolor 4 */}
              <div className="bg-dark-surface-card border border-dark-surface-border p-6 rounded-lg hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-md bg-warning-bg border border-warning-border flex items-center justify-center text-warning-accent mb-4">
                  <span className="material-symbols-outlined text-xl">receipt_long</span>
                </div>
                <h3 className="font-headline font-bold text-white text-base mb-2">
                  Facturas sorpresa y opacidad
                </h3>
                <p className="text-body-sm text-text-muted">
                  Bufetes que facturan horas interminables sin comprometerse con el resultado
                  práctico ni garantizarte tranquilidad tangible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. UVP (PROPUESTA ÚNICA DE VALOR) */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-dark-base border-b border-dark-surface-border relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-dark-surface-card border-2 border-apple-green/40 rounded-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-apple-green/5 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-green text-dark-base font-headline font-extrabold text-xs uppercase tracking-wider">
                  <span>El Enfoque Legalmente Humanos</span>
                </div>
                <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white leading-tight">
                  Seguridad jurídica de primer nivel, explicada con la claridad con la que hablas
                  con tu mejor amigo.
                </h2>
                <p className="text-body-lg text-text-muted leading-relaxed">
                  Reemplazamos el miedo y la arrogancia técnica por un{' '}
                  <strong className="text-white">acompañamiento honesto de principio a fin</strong>.
                  Estructuramos tus contratos, términos, protección de marca y acuerdos con clientes
                  de forma que cualquier persona pueda entender qué firma y por qué está 100%
                  protegido.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-apple-green text-2xl shrink-0">
                      translate
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">Español Claro</h4>
                      <p className="text-xs text-text-muted">
                        Cero latines ni tecnicismos confusos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-apple-green text-2xl shrink-0">
                      shield
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">
                        Escudo Preventivo
                      </h4>
                      <p className="text-xs text-text-muted">
                        Evitamos el problema antes de que surja.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-apple-green text-2xl shrink-0">
                      price_check
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm">Precio Cerrado</h4>
                      <p className="text-xs text-text-muted">
                        Sin sorpresas ni minutación por llamada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="p-6 rounded-lg bg-dark-base border border-dark-surface-border text-center space-y-4 max-w-sm w-full">
                  <div className="w-16 h-16 rounded-full bg-apple-green/10 border border-apple-green text-apple-green mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">psychology_alt</span>
                  </div>
                  <h4 className="font-headline font-extrabold text-white text-lg">
                    Método Claridad 360°
                  </h4>
                  <p className="text-xs text-text-muted leading-normal">
                    Auditoría completa de puntos vulnerables, diseño de contratos comerciales y guía
                    de toma de decisiones sin fricciones.
                  </p>
                  <div className="pt-2 border-t border-dark-surface-border">
                    <span className="text-xs font-headline font-bold text-apple-green">
                      Resultado: Blindaje en 7 Días
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. GRID DE BENEFICIOS (BULLETS 2x2) */}
      {/* ===================================================================== */}
      <section
        id="beneficios"
        className="py-20 sm:py-28 px-6 bg-dark-surface border-b border-dark-surface-border"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Lo que Ganas Desde el Primer Día
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Cuatro pilares para operar con absoluta tranquilidad
            </h2>
            <p className="text-body-md text-text-muted">
              Transformamos tus obligaciones legales en una ventaja competitiva de credibilidad y
              confianza ante tus clientes y socios.
            </p>
          </div>

          {/* Grid 2x2 Estructurado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Beneficio 1 */}
            <article
              data-component-id="card-elevated"
              className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-lg hover:border-apple-green/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    sentiment_very_satisfied
                  </span>
                </div>
                <div>
                  <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-wider">
                    Pilar 01
                  </span>
                  <h3 className="font-headline font-bold text-white text-xl">
                    Tranquilidad Operativa Total
                  </h3>
                </div>
              </div>
              <p className="text-body-md text-text-muted leading-relaxed">
                Duerme con la certeza de que tus acuerdos de prestación de servicios, contratos de
                proveedores y políticas internas están perfectamente adaptadas a la legislación
                vigente, protegiendo tus cobros y delimitando tus responsabilidades.
              </p>
            </article>

            {/* Beneficio 2 */}
            <article
              data-component-id="card-elevated"
              className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-lg hover:border-apple-green/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">speaker_notes_off</span>
                </div>
                <div>
                  <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-wider">
                    Pilar 02
                  </span>
                  <h3 className="font-headline font-bold text-white text-xl">
                    Cero Tecnicismos Incomprensibles
                  </h3>
                </div>
              </div>
              <p className="text-body-md text-text-muted leading-relaxed">
                Todo documento que redactamos incluye un resumen ejecutivo en lenguaje común. Sabrás
                exactamente qué significa cada párrafo antes de firmar, sin tener que consultar
                diccionarios ni dudar de la letra pequeña.
              </p>
            </article>

            {/* Beneficio 3 */}
            <article
              data-component-id="card-elevated"
              className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-lg hover:border-apple-green/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">hourglass_bottom</span>
                </div>
                <div>
                  <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-wider">
                    Pilar 03
                  </span>
                  <h3 className="font-headline font-bold text-white text-xl">
                    Ahorro de Tiempo Crítico
                  </h3>
                </div>
              </div>
              <p className="text-body-md text-text-muted leading-relaxed">
                No pierdas semanas en trámites estancados ni reescribiendo contratos. Automatizamos
                plantillas personalizadas listas para que tu equipo comercial o tú mismo las enviéis
                a firma en menos de 3 minutos.
              </p>
            </article>

            {/* Beneficio 4 */}
            <article
              data-component-id="card-elevated"
              className="bg-dark-surface-card border border-dark-surface-border p-8 rounded-lg hover:border-apple-green/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-apple-green/10 border border-apple-green/30 flex items-center justify-center text-apple-green group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <div>
                  <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-wider">
                    Pilar 04
                  </span>
                  <h3 className="font-headline font-bold text-white text-xl">
                    Crecimiento Protegido y Seguro
                  </h3>
                </div>
              </div>
              <p className="text-body-md text-text-muted leading-relaxed">
                Estructura tu empresa para escalar sin riesgo: acuerdos de confidencialidad (NDAs),
                protección de tu propiedad intelectual, blindaje ante clientes morosos y orden
                patrimonial para atraer inversores o socios.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. PRUEBA SOCIAL (SOCIAL PROOF - CAJA DE CITAS) */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-dark-base border-b border-dark-surface-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-headline font-bold text-apple-green uppercase tracking-widest">
              Casos de Éxito Reales
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Personas y Emprendedores que cambiaron el pánico legal por seguridad
            </h2>
          </div>

          {/* Tarjeta de Testimonio Destacada en Alto Contraste (Fondo Blanco / Gris Claro #F5F5F5) */}
          <div className="max-w-4xl mx-auto bg-light-surface-card text-dark-base rounded-2xl p-8 sm:p-14 shadow-2xl relative">
            {/* Icono de comillas gigante */}
            <div className="text-black/10 font-headline font-extrabold text-8xl absolute top-6 right-8 select-none pointer-events-none">
              “
            </div>

            {/* Estrellas de valoración */}
            <div className="flex items-center gap-1.5 text-black mb-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="material-symbols-outlined material-symbols-filled text-2xl"
                >
                  star
                </span>
              ))}
              <span className="ml-2 font-headline font-extrabold text-sm text-dark-base">
                5.0 / 5.0 en Asesoría Directa
              </span>
            </div>

            {/* Cita */}
            <blockquote className="font-headline font-bold text-xl sm:text-2xl text-dark-base leading-snug mb-8 relative z-10">
              «Teníamos un cliente grande que nos adeudaba más de $18.000 USD y nuestro contrato
              anterior era tan vago que no sabíamos por dónde empezar. En Legalmente Humanos
              redactaron nuestros contratos comerciales en 5 días y reestructuraron nuestras
              cláusulas de pago. Recuperamos el dinero y ahora cerramos cada acuerdo con total
              seguridad.»
            </blockquote>

            {/* Autor del testimonio */}
            <div className="flex items-center gap-5 pt-6 border-t border-black/10">
              <AvatarImage
                src={TESTIMONIAL_AVATAR_URL}
                alt="Alejandro Méndez - Emprendedor Digital"
                initials="AM"
                className="w-16 h-16 rounded-full object-cover border-2 border-dark-base shadow-md"
                fallbackClassName="bg-dark-base text-apple-green border-dark-base"
              />
              <div>
                <h4 className="font-headline font-extrabold text-dark-base text-lg">
                  Alejandro Méndez
                </h4>
                <p className="text-sm text-black/70 font-medium">
                  Co-fundador de NovaScale Agency (Valencia) • 14 empleados
                </p>
                <div className="inline-flex items-center gap-1 text-xs text-black/60 font-semibold mt-0.5">
                  <span className="material-symbols-outlined text-xs text-green-700">verified</span>
                  <span>Cliente Verificado desde 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. BLOQUE DE GARANTÍA (SELLO/BADGE) */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-24 px-6 bg-dark-surface border-b border-dark-surface-border">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-dark-surface-card border-2 border-apple-green rounded-2xl p-8 sm:p-12 relative shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
            {/* Sello visual */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-apple-green text-dark-base flex flex-col items-center justify-center shrink-0 shadow-xl shadow-apple-green/20">
              <span className="material-symbols-outlined text-4xl sm:text-5xl">verified_user</span>
              <span className="font-headline font-extrabold text-[10px] tracking-widest uppercase mt-0.5">
                100% Sin Riesgo
              </span>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-green/10 text-apple-green font-headline font-bold text-xs uppercase tracking-wider">
                <span>Garantía Legalmente Humanos</span>
              </div>
              <h3 className="font-headline font-extrabold text-headline-md text-white">
                Garantía de Claridad Absoluta o No Pagas Nada
              </h3>
              <p className="text-body-md text-text-muted leading-relaxed">
                En tu primera sesión de diagnóstico analizamos tus operaciones. Si al terminar no
                sientes que entiendes exactamente tu situación jurídica, tus riesgos ocultos y la
                hoja de ruta exacta para resolverlos sin jerga incomprensible, no nos debes
                absolutamente nada. Así de simple y transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. FILTRO DE AUDIENCIA ("A QUIÉN NO ES PARA") */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 px-6 bg-dark-base border-b border-dark-surface-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-headline font-bold text-warning-accent uppercase tracking-widest">
              Transparencia Total
            </span>
            <h2 className="font-headline font-extrabold text-headline-lg-mobile sm:text-headline-lg text-white">
              Para quién NO es Legalmente Humanos
            </h2>
            <p className="text-body-md text-text-muted">
              Preferimos trabajar con pocos clientes de forma cercana y excelente que ser un bufete
              masivo e impersonal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-warning-bg/50 border border-warning-border rounded-xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-warning-border flex items-center justify-center text-warning-accent">
                <span className="material-symbols-outlined text-xl">close</span>
              </div>
              <h3 className="font-headline font-bold text-white text-lg">
                Buscas burocracia tradicional
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                Si prefieres abogados de traje rígido que se esconden tras latinajos, expedientes de
                80 hojas y formalismos vacíos para justificar honorarios astronómicos, no
                encajaremos contigo.
              </p>
            </div>

            <div className="bg-warning-bg/50 border border-warning-border rounded-xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-warning-border flex items-center justify-center text-warning-accent">
                <span className="material-symbols-outlined text-xl">close</span>
              </div>
              <h3 className="font-headline font-bold text-white text-lg">
                Quieres atajos ilegales o dudosos
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                Nosotros construimos blindajes sólidos y 100% legales. No diseñamos trampas ni
                asesoramos actividades fuera del marco normativo. Priorizamos la seguridad jurídica
                a largo plazo.
              </p>
            </div>

            <div className="bg-warning-bg/50 border border-warning-border rounded-xl p-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-warning-border flex items-center justify-center text-warning-accent">
                <span className="material-symbols-outlined text-xl">close</span>
              </div>
              <h3 className="font-headline font-bold text-white text-lg">
                No valoras proteger tu negocio
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed">
                Si crees que los contratos &quot;se pueden dejar para más adelante cuando haya
                problemas&quot;, te recomendamos resolver emergencias en juzgados. Nosotros
                prevenimos la catástrofe antes de que cueste miles de euros.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
