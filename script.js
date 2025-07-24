
const malla = {
  "1° Semestre": [
    "Administración",
    "Economía para la administración",
    "Habilidades para la comunicación",
    "Matemáticas",
    "Contabilidad para la Administración",
    "Herramientas para la empleabilidad",
  ],
  "2° Semestre": [
    "Finanzas",
    "Recursos humanos de la empresa",
    "Taller de marketing",
    "Herramientas para la innovación",
    "Contabilidad de costos",
    "Herramientas de inteligencia artificial",
  ],
  "3° Semestre": [
    "Presupuestos",
    "Herramientas para la administración",
    "Taller de administración de remuneraciones",
    "Sostenibilidad organizacional",
    "Comercio exterior",
    "Legislación comercial y tributaria",
    "Certificado de especialidad I",
  ],
  "4° Semestre": [
    "Taller de finanzas de corto plazo",
    "Taller de análisis para la gestión",
    "Inglés inicial I",
    "Taller de softwares para administración",
    "Taller de proyecto de especialidad",
    "Certificado de especialidad II",
    "Taller de marca personal",
  ],
  "5° Semestre": [
    "Planificación estratégica",
    "Análisis financiero",
    "IA para la gestión profesional",
    "Taller de gestión de recursos humanos",
    "Procesos organizacionales",
    "Inglés inicial II",
  ],
  "6° Semestre": [
    "Finanzas corporativas",
    "Economía para la gestión",
    "Marketing y gestión comercial",
    "Control de gestión",
    "Inglés pre intermedio I",
    "Certificado especialidad III",
  ],
  "7° Semestre": [
    "Estadística y probabilidad para el análisis de datos",
    "Taller de balance Scorecard",
    "Evaluación de proyectos",
    "Gestión de equipos de trabajo",
    "Inglés pre intermedio II",
    "E-business",
    "Certificado de especialidad IV",
  ],
  "8° Semestre": [
    "Taller de simulación de negocios",
    "Proyecto de especialidad profesional",
    "Calidad y mejora continua",
    "Taller de ERP para la gestión",
    "Análisis y minería de datos",
    "Coaching laboral",
  ],
};

const container = document.getElementById("malla");

Object.entries(malla).forEach(([semestre, ramos]) => {
  const bloque = document.createElement("div");
  bloque.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  bloque.appendChild(titulo);

  const lista = document.createElement("div");
  lista.className = "ramos";

  ramos.forEach((ramo) => {
    const btn = document.createElement("div");
    btn.className = "ramo";
    btn.textContent = ramo;

    btn.addEventListener("click", () => {
      btn.classList.toggle("aprobado");
    });

    lista.appendChild(btn);
  });

  bloque.appendChild(lista);
  container.appendChild(bloque);
});
