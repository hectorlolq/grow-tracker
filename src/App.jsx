import { useState, useEffect, useRef, useMemo } from "react";

/* ═══════════════════ KAWAII SVG ART ═══════════════════ */
const CuteSeed = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="50" r="45" fill="#fff9c4" fillOpacity="0.3"/>
    <rect x="25" y="45" width="70" height="30" rx="6" fill="#f5f0e6" stroke="#d7cbb0" strokeWidth="1.5"/>
    <ellipse cx="55" cy="57" rx="8" ry="11" fill="#8d6e4a" transform="rotate(-15 55 57)"/>
    <circle cx="52" cy="54" r="1.2" fill="#4e342e"/>
    <circle cx="58" cy="53" r="1.2" fill="#4e342e"/>
    <path d="M52 58 Q55 61 58 58" stroke="#4e342e" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <path d="M55 68 Q56 74 54 79" stroke="#81c784" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <text x="70" y="38" fontSize="9" fill="#90a4ae" fontStyle="italic" opacity="0.6">z</text>
  </svg>
);
const CuteSeedling = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="55" r="42" fill="#c8e6c9" fillOpacity="0.2"/>
    <path d="M35 68 L39 90 L81 90 L85 68 Z" fill="#a1887f" stroke="#8d6e63" strokeWidth="1.5"/>
    <rect x="32" y="65" width="56" height="5" rx="2.5" fill="#bcaaa4"/>
    <path d="M60 66 Q59 52 60 40" stroke="#66bb6a" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="50" cy="40" rx="10" ry="5" fill="#81c784" transform="rotate(-25 50 40)"/>
    <ellipse cx="70" cy="40" rx="10" ry="5" fill="#81c784" transform="rotate(25 70 40)"/>
    <circle cx="56" cy="37" r="1.5" fill="#1b5e20"/><circle cx="64" cy="37" r="1.5" fill="#1b5e20"/>
    <path d="M57 41 Q60 44 63 41" stroke="#1b5e20" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <ellipse cx="52" cy="40" rx="3" ry="1.5" fill="#f48fb1" opacity="0.25"/>
    <ellipse cx="68" cy="40" rx="3" ry="1.5" fill="#f48fb1" opacity="0.25"/>
    <text x="80" y="32" fontSize="9" fill="#fdd835">✦</text>
  </svg>
);
const CuteVeg = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="50" r="48" fill="#a5d6a7" fillOpacity="0.15"/>
    <path d="M30 72 L35 95 L85 95 L90 72 Z" fill="#a1887f" stroke="#8d6e63" strokeWidth="1.5"/>
    <rect x="27" y="69" width="66" height="5" rx="2.5" fill="#bcaaa4"/>
    <path d="M60 70 Q58 50 60 30" stroke="#43a047" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="38" cy="47" rx="9" ry="4.5" fill="#66bb6a" transform="rotate(-30 38 47)"/>
    <ellipse cx="82" cy="47" rx="9" ry="4.5" fill="#66bb6a" transform="rotate(30 82 47)"/>
    <ellipse cx="55" cy="28" rx="8" ry="4.5" fill="#81c784" transform="rotate(-15 55 28)"/>
    <ellipse cx="65" cy="28" rx="8" ry="4.5" fill="#81c784" transform="rotate(15 65 28)"/>
    <circle cx="56" cy="34" r="1.6" fill="#1b5e20"/><circle cx="64" cy="34" r="1.6" fill="#1b5e20"/>
    <path d="M56 38 Q60 42 64 38" stroke="#1b5e20" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <text x="24" y="42" fontSize="9">💪</text>
  </svg>
);
const CuteFlower = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="45" r="45" fill="#f8bbd0" fillOpacity="0.2"/>
    <path d="M30 74 L35 97 L85 97 L90 74 Z" fill="#a1887f" stroke="#8d6e63" strokeWidth="1.5"/>
    <rect x="27" y="71" width="66" height="5" rx="2.5" fill="#bcaaa4"/>
    <path d="M60 72 Q58 50 60 28" stroke="#43a047" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="42" cy="35" rx="7" ry="9" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="1"/>
    <ellipse cx="60" cy="22" rx="7" ry="9" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="1"/>
    <ellipse cx="78" cy="35" rx="7" ry="9" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="1"/>
    <circle cx="57" cy="20" r="1.1" fill="#880e4f"/><circle cx="63" cy="20" r="1.1" fill="#880e4f"/>
    <path d="M57 24 Q60 27 63 24" stroke="#880e4f" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
    <text x="85" y="24" fontSize="8" fill="#fdd835" opacity="0.7">✨</text>
  </svg>
);
const CuteHarvest = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="50" r="45" fill="#fff9c4" fillOpacity="0.25"/>
    <rect x="35" y="28" width="50" height="50" rx="8" fill="#e8f5e9" fillOpacity="0.45" stroke="#81c784" strokeWidth="1.5"/>
    <rect x="38" y="23" width="44" height="7" rx="3" fill="#bcaaa4" stroke="#a1887f" strokeWidth="1"/>
    <ellipse cx="48" cy="55" rx="7" ry="9" fill="#66bb6a" opacity="0.8"/>
    <ellipse cx="60" cy="48" rx="8" ry="10" fill="#43a047" opacity="0.8"/>
    <ellipse cx="72" cy="55" rx="7" ry="9" fill="#66bb6a" opacity="0.8"/>
    <circle cx="55" cy="40" r="1.6" fill="#1b5e20"/><circle cx="65" cy="40" r="1.6" fill="#1b5e20"/>
    <path d="M55 44 Q60 48 65 44" stroke="#1b5e20" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <text x="82" y="24" fontSize="11">🎉</text>
  </svg>
);
const CuteDroplet = () => (
  <svg viewBox="0 0 120 100" width="80" height="66">
    <circle cx="60" cy="50" r="45" fill="#b3e5fc" fillOpacity="0.2"/>
    <path d="M30 70 L35 93 L85 93 L90 70 Z" fill="#a1887f" stroke="#8d6e63" strokeWidth="1.5"/>
    <rect x="27" y="67" width="66" height="5" rx="2.5" fill="#bcaaa4"/>
    <path d="M60 68 Q58 46 60 28" stroke="#81c784" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
    <path d="M50 18 Q47 25 50 28 Q53 25 50 18" fill="#4fc3f7" opacity="0.5"/>
    <path d="M65 14 Q62 21 65 24 Q68 21 65 14" fill="#4fc3f7" opacity="0.4"/>
    <text x="80" y="20" fontSize="8" fill="#4fc3f7" opacity="0.5">💧</text>
  </svg>
);

function PhaseArt({ phase }) {
  if (phase === "germinacao") return <CuteSeed />;
  if (phase === "seedling" || phase === "seedling_vega") return <CuteSeedling />;
  if (phase === "vega_inicio" || phase === "vegetativo" || phase === "vega_pleno") return <CuteVeg />;
  if (phase === "transicao" || phase === "flora_inicio" || phase === "flora_plena" || phase === "maturacao") return <CuteFlower />;
  if (phase === "flush") return <CuteDroplet />;
  if (phase === "colheita") return <CuteHarvest />;
  return <CuteSeedling />;
}

/* ═══════════════════ DATA ═══════════════════ */
const WEEKS = [
  { id:0, label:"Sem 0", title:"Germinação", phase:"germinacao", days:"3-5 dias", temp:"25-28°C", rh:"70-80%", light:"Escuro", ec:"< 0.4", dA:0, dB:0, dC:0, nut:"Água pura pH 5.8-6.0", tasks:["Sementes entre papel toalha úmido","Prato com tampa, escuro, 25-28°C","Verificar umidade a cada 12h","Plantar radícula 1-2cm para baixo"], alert:"Use pinça/luvas. Óleos da pele impedem germinação.", emoji:"🌰", vMin:0.4, vMax:0.8 },
  { id:1, label:"Sem 1", title:"Plântula", phase:"seedling", days:"7 dias", temp:"24-28°C", rh:"65-75%", light:"18/6 30%", ec:"< 0.4", dA:0, dB:0, dC:0, nut:"Água pura pH 5.8-6.0", tasks:["LED 30% ou 70-80cm","Timer: 18h luz / 6h escuro","Borrifar ao redor, não no caule","Ventilador mínimo"], alert:"Não regue demais! Coco úmido ≠ encharcado.", emoji:"🌱", vMin:0.4, vMax:0.8 },
  { id:2, label:"Sem 2", title:"Folhas Verdadeiras", phase:"seedling_vega", days:"7 dias", temp:"24-28°C", rh:"60-70%", light:"18/6 40%", ec:"0.3-0.5", dA:0.25, dB:0.25, dC:0.06, nut:"EasyCoco 25%", tasks:["EasyCoco 25% ao ver folhas verdadeiras","LED 40% ou 60cm","Transplantar para 1L se raízes saírem"], alert:"Não aperte substrato no transplante.", emoji:"🌿", vMin:0.4, vMax:0.8 },
  { id:3, label:"Sem 3", title:"Vaso de 1L", phase:"vega_inicio", days:"7 dias", temp:"24-30°C", rh:"55-65%", light:"18/6 50%", ec:"0.4-0.6", dA:0.5, dB:0.5, dC:0.12, nut:"EasyCoco 50%", tasks:["EasyCoco 50%","LED 50%","Neem preventivo 1x","Medir EC do runoff"], alert:"Comece a anotar EC do runoff!", emoji:"📏", vMin:0.8, vMax:1.2 },
  { id:4, label:"Sem 4", title:"Transplante 11L", phase:"vegetativo", days:"7 dias", temp:"24-30°C", rh:"55-65%", light:"18/6 65%", ec:"0.6-0.8", dA:0.75, dB:0.75, dC:0.19, nut:"EasyCoco 75%", tasks:["Transplantar feltro 11L","Trichoderma na cova","Instalar SCROG 30-40cm"], alert:"Folhas murchas 1-2 dias é normal.", emoji:"🏡", vMin:0.8, vMax:1.2 },
  { id:5, label:"Sem 5-6", title:"Vega + SCROG", phase:"vega_pleno", days:"14 dias", temp:"24-30°C", rh:"50-60%", light:"18/6 75%", ec:"0.8-1.2", dA:1.0, dB:1.0, dC:0.25, nut:"EasyCoco 100%", tasks:["Dose completa vega","Guiar ramos pelo SCROG","Topping acima 4º-5º nó","Neem 1x/semana"], alert:"Canopy plana = buds iguais!", emoji:"🕸️", vMin:0.8, vMax:1.2 },
  { id:6, label:"Sem 7", title:"Flip 12/12", phase:"transicao", days:"7 dias", temp:"22-28°C", rh:"50-60%", light:"12/12 100%", ec:"1.0-1.4", dA:1.25, dB:1.25, dC:0.35, nut:"EasyCoco transição", tasks:["Timer 12h/12h","Escuro ABSOLUTO","LED 100%","PARAR neem"], alert:"NUNCA abra o grow no escuro!", emoji:"🔄", vMin:1.0, vMax:1.5 },
  { id:7, label:"Sem 8-9", title:"Flora Inicial", phase:"flora_inicio", days:"14 dias", temp:"22-28°C", rh:"50-55%", light:"12/12 100%", ec:"1.2-1.6", dA:1.5, dB:1.5, dC:0.5, nut:"EasyCoco flora", tasks:["Pré-flores / pistilos","Dose flora","Lollipopping max 20%","Desumidificador se RH>60%"], alert:"HMK: flores densas, ventilador sobre ela!", emoji:"🌸", vMin:1.0, vMax:1.5 },
  { id:8, label:"Sem 10-12", title:"Flora Plena", phase:"flora_plena", days:"21 dias", temp:"22-26°C", rh:"40-50%", light:"12/12 100%", ec:"1.4-1.8", dA:1.75, dB:1.75, dC:0.62, nut:"EasyCoco plena", tasks:["Dose máxima flora","Regar 2x/dia","Checar mofo flores densas","Observar tricomas"], alert:"CUIDADO mofo! RH < 55% sempre!", emoji:"🔍", vMin:1.0, vMax:1.5 },
  { id:9, label:"Sem 13-14", title:"Maturação", phase:"maturacao", days:"14 dias", temp:"22-26°C", rh:"40-50%", light:"12/12 100%", ec:"1.0-1.4", dA:1.0, dB:1.25, dC:0.62, nut:"EasyCoco reduzido", tasks:["Reduzir dose","Tricomas leitosos+âmbar","Preparar secagem"], alert:"70-80% leitosos + 10-20% âmbar = corte.", emoji:"🍂", vMin:1.2, vMax:1.6 },
  { id:10, label:"Sem 15-16", title:"Flush", phase:"flush", days:"7-14 dias", temp:"22-26°C", rh:"40-50%", light:"12/12 100%", ec:"< 0.3", dA:0, dB:0, dC:0, nut:"Água pura pH 5.8-6.0", tasks:["Só água pura","EC runoff < 0.3","Monitorar tricomas"], alert:"Zero nutrientes!", emoji:"💧", vMin:1.2, vMax:1.6 },
  { id:11, label:"Colheita", title:"Corte & Cura", phase:"colheita", days:"Variável", temp:"18-22°C", rh:"55-62%", light:"Escuro", ec:"N/A", dA:0, dB:0, dC:0, nut:"N/A", tasks:["Cortar 70-80% leitosos","Secar 18-22°C, 55-62%","Curar em potes 75%"], alert:"Desumidificador obrigatório em Itaituba!", emoji:"🎉", vMin:0.8, vMax:1.2 },
];

const PROBLEMS = [
  { s:"Pontas queimadas", c:"Excesso nutrientes", f:"Reduza 20%. Flush leve.", i:"🔥" },
  { s:"Amarelando embaixo", c:"Falta N / natural flora", f:"Vega: aumente. Flora: normal.", i:"💛" },
  { s:"Garra (p/ baixo)", c:"Excesso rega", f:"Espere secar. Pese o vaso.", i:"🫳" },
  { s:"Bordas p/ cima", c:"Calor", f:"Reduza LED, mais exaustão.", i:"🥵" },
  { s:"Manchas marrons", c:"Ca / LED perto", f:"Confira EC. Suba painel.", i:"🟤" },
  { s:"Lento", c:"pH errado", f:"pH runoff + drenagem.", i:"🐌" },
  { s:"Mosquinhas", c:"Fungus gnats", f:"Yellow traps + secar.", i:"🪰" },
  { s:"Pó branco", c:"Oídio", f:"Remova folhas. Ventile.", i:"🤍" },
  { s:"Mofo flores", c:"Botrytis", f:"Remova tudo. Reduza RH.", i:"🦠" },
  { s:"Hermafrodita", c:"Luz no escuro", f:"Remova partes ♂.", i:"⚠️" },
];

const DEFAULT_EQUIP = [
  { id:"e1", n:"Grow Tent 100×100×200", c:"estrutura", o:true },{ id:"e2", n:"QB 240W LM301H", c:"iluminação", o:true },
  { id:"e3", n:"Vasos feltro 11L + 1L", c:"vasos", o:true },{ id:"e4", n:"Vasos biodegradáveis", c:"vasos", o:true },
  { id:"e5", n:"Temporizador digital", c:"controle", o:true },{ id:"e6", n:"Tela SCROG 1m×1m", c:"treinamento", o:true },
  { id:"e7", n:"Mini ventilador clip", c:"ventilação", o:true },{ id:"e8", n:"Ventilador oscilante", c:"ventilação", o:true },
  { id:"e9", n:"Exaustor 150mm + filtro", c:"ventilação", o:true },{ id:"e10", n:"Termo-higrômetro", c:"medição", o:true },
  { id:"e11", n:"Medidor 5 em 1", c:"medição", o:true },{ id:"e12", n:"Calibradores pH", c:"medição", o:true },
  { id:"e13", n:"Seringas 1/5/10ml", c:"medição", o:true },{ id:"e14", n:"Yellow traps", c:"pragas", o:true },
  { id:"e15", n:"Tapete proteção", c:"estrutura", o:true },{ id:"e16", n:"Desumidificador 6L", c:"controle", o:true },
  { id:"e17", n:"Fibra de coco 60L", c:"substrato", o:true },{ id:"e18", n:"Perlita ~7L", c:"substrato", o:true },
  { id:"e19", n:"Kit EasyCoco A+B+C", c:"nutrição", o:true },{ id:"e20", n:"Trichoderma", c:"biológico", o:false },
  { id:"e21", n:"Neem + sabão potássio", c:"pragas", o:false },{ id:"e22", n:"Soluções pH+/pH-", c:"medição", o:false },
];

const DEF_PLANTS = [
  { id:"p1", name:"Jack Herer #1", strain:"Jack Herer", ico:"🌿", status:"ativa" },
  { id:"p2", name:"Jack Herer #2", strain:"Jack Herer", ico:"🌿", status:"ativa" },
  { id:"p3", name:"Jack Herer #3", strain:"Jack Herer", ico:"🌿", status:"ativa" },
  { id:"p4", name:"Honey Melon Kush", strain:"HMK", ico:"🍯", status:"ativa" },
];

/* ═══════════════════ HELPERS ═══════════════════ */
function calcVPD(t, r) { var s = 0.6108 * Math.exp((17.27 * t) / (t + 237.3)); return s * (1 - r / 100); }
function vpdColor(v) { if (v < 0.4) return "#64b5f6"; if (v < 0.8) return "#81c784"; if (v < 1.2) return "#66bb6a"; if (v < 1.6) return "#ffa726"; return "#ef5350"; }
function vpdZone(v) { if (v < 0.4) return "Úmido demais"; if (v < 0.8) return "Mudas/Clones"; if (v < 1.2) return "Vegetativo"; if (v < 1.6) return "Floração"; return "Seco demais"; }

var T = { bg:"#121318", card:"#1c1d25", cb:"#2a2b36", t1:"#eef0f4", t2:"#9ba0ad", t3:"#6b7080" };

function getAcc(p) { return { germinacao:"#fdd835", seedling:"#66bb6a", seedling_vega:"#66bb6a", vega_inicio:"#43a047", vegetativo:"#43a047", vega_pleno:"#2e7d32", transicao:"#ab47bc", flora_inicio:"#ec407a", flora_plena:"#e53935", maturacao:"#fb8c00", flush:"#29b6f6", colheita:"#fdd835" }[p] || "#66bb6a"; }

/* ═══════════════════ SUB-COMPONENTS (outside App) ═══════════════════ */
function Spark({ data, field, color, label, unit }) {
  var vals = [];
  for (var i = 0; i < data.length; i++) {
    var v = parseFloat(data[i][field]);
    if (!isNaN(v)) vals.push(v);
  }
  if (vals.length < 2) return null;
  var min = Math.min.apply(null, vals), max = Math.max.apply(null, vals), rng = max - min || 1, w = 260, h = 40;
  var pts = "";
  var dots = [];
  for (var j = 0; j < vals.length; j++) {
    var cx = (j / (vals.length - 1)) * w;
    var cy = h - (((vals[j] - min) / rng) * h);
    pts += (j > 0 ? " " : "") + cx + "," + cy;
    dots.push({ cx: cx, cy: cy, k: j });
  }
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom: 2 }}>
        <span style={{ fontSize:9, fontWeight:700, color:T.t2 }}>{label}</span>
        <span style={{ fontSize:10, fontWeight:800, color:color }}>{vals[vals.length - 1]}{unit}</span>
      </div>
      <svg viewBox={"-4 -4 " + (w + 8) + " " + (h + 8)} width="100%" height="44">
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {dots.map(function(d) { return <circle key={d.k} cx={d.cx} cy={d.cy} r="2" fill={color} opacity="0.7" />; })}
      </svg>
    </div>
  );
}

function VPDMap({ vpdT, vpdRH }) {
  var ts = [20, 22, 24, 26, 28, 30, 32];
  var rs = [40, 50, 55, 60, 65, 70, 80];
  var rows = [];
  for (var ti = 0; ti < ts.length; ti++) {
    var cells = [];
    for (var ri = 0; ri < rs.length; ri++) {
      var v = calcVPD(ts[ti], rs[ri]);
      var ic = Math.round(vpdT) === ts[ti] && Math.round(vpdRH / 10) * 10 === rs[ri];
      cells.push(
        <td key={rs[ri]} style={{ padding:2, textAlign:"center", background:vpdColor(v) + (ic ? "" : "44"), color:ic ? "#000" : "#fff", fontWeight:ic ? 900 : 500, borderRadius:2, border:ic ? "2px solid #fff" : "1px solid #1a1a22", fontSize:ic ? 9 : 7 }}>
          {v.toFixed(1)}
        </td>
      );
    }
    rows.push(
      <tr key={ts[ti]}>
        <td style={{ padding:2, fontWeight:700, color:T.t2 }}>{ts[ti]}°</td>
        {cells}
      </tr>
    );
  }
  var headers = rs.map(function(r) { return <th key={r} style={{ padding:2, color:T.t2 }}>{r}%</th>; });
  return (
    <div style={{ overflowX:"auto" }}>
      <table style={{ borderCollapse:"collapse", fontSize:8, width:"100%", minWidth:260 }}>
        <thead><tr><th style={{ padding:2, color:T.t3 }}>°C\%</th>{headers}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

/* ═══════════════════ MAIN APP ═══════════════════ */
export default function App() {
  var [wk, setWk] = useState(0);
  var [tab, setTab] = useState("panel");
  var [logs, setLogs] = useState([]);
  var [equip, setEquip] = useState(DEFAULT_EQUIP);
  var [plants, setPlants] = useState(DEF_PLANTS);
  var [showLog, setShowLog] = useState(false);
  var [showEqAdd, setShowEqAdd] = useState(false);
  var [expId, setExpId] = useState(null);
  var [photo, setPhoto] = useState(null);
  var [lf, setLf] = useState({ date:new Date().toISOString().slice(0,10), plant:"all", temp:"", rh:"", phIn:"", ecIn:"", phR:"", ecR:"", w:false, n:false, d:false, t:false, notes:"", photo:null });
  var [neq, setNeq] = useState({ n:"", c:"outro" });
  var [showPlantMgr, setShowPlantMgr] = useState(false);
  var [editPlant, setEditPlant] = useState(null);
  var [pf, setPf] = useState({ name:"", strain:"", ico:"🌿" });
  var [showNewCycle, setShowNewCycle] = useState(false);
  var [vpdT, setVpdT] = useState(26);
  var [vpdRH, setVpdRH] = useState(60);
  var [nutL, setNutL] = useState(5);
  var [aiRes, setAiRes] = useState({});
  var [aiLoad, setAiLoad] = useState(false);
  var [aiPhoto, setAiPhoto] = useState(null);

  var fRef = useRef(null);
  var aiRef = useRef(null);

  var W = WEEKS[wk];
  var A = getAcc(W.phase);
  var wkLogs = useMemo(function() { return logs.filter(function(l) { return l.week === wk; }).sort(function(a, b) { return a.date.localeCompare(b.date); }); }, [logs, wk]);
  var chartData = useMemo(function() { return logs.filter(function(l) { return l.temp || l.rh || l.ecIn || l.phIn; }).sort(function(a, b) { return a.date.localeCompare(b.date); }).slice(-20); }, [logs]);

  var addLog = function() {
    setLogs(function(p) { return [Object.assign({}, lf, { id: Date.now().toString(), week: wk, photo: photo })].concat(p); });
    setShowLog(false);
    setLf({ date:new Date().toISOString().slice(0,10), plant:"all", temp:"", rh:"", phIn:"", ecIn:"", phR:"", ecR:"", w:false, n:false, d:false, t:false, notes:"", photo:null });
    setPhoto(null);
  };

  var hPhoto = function(e, forAi) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function(ev) { forAi ? setAiPhoto(ev.target.result) : setPhoto(ev.target.result); };
    r.readAsDataURL(f);
  };

  // Plant management
  var discardPlant = function(id) { setPlants(function(p) { return p.map(function(x) { return x.id === id ? Object.assign({}, x, { status:"descartada" }) : x; }); }); };
  var reactivatePlant = function(id) { setPlants(function(p) { return p.map(function(x) { return x.id === id ? Object.assign({}, x, { status:"ativa" }) : x; }); }); };
  var removePlant = function(id) { setPlants(function(p) { return p.filter(function(x) { return x.id !== id; }); }); };
  var addPlant = function() { if (!pf.name.trim() || !pf.strain.trim()) return; setPlants(function(p) { return p.concat([{ id:"pl_"+Date.now(), name:pf.name.trim(), strain:pf.strain.trim(), ico:pf.ico, status:"ativa" }]); }); setPf({ name:"", strain:"", ico:"🌿" }); };
  var startEditPlant = function(p) { setEditPlant(p.id); setPf({ name:p.name, strain:p.strain, ico:p.ico }); };
  var saveEditPlant = function() { if (!pf.name.trim()) return; setPlants(function(p) { return p.map(function(x) { return x.id === editPlant ? Object.assign({}, x, { name:pf.name.trim(), strain:pf.strain.trim(), ico:pf.ico }) : x; }); }); setEditPlant(null); setPf({ name:"", strain:"", ico:"🌿" }); };
  var startNewCycle = function() { setShowNewCycle(false); setWk(0); setPlants(DEF_PLANTS); setLogs([]); setAiRes({}); setShowPlantMgr(false); };

  // AI Assistant
  var askAI = function() {
    setAiLoad(true);
    var recentLogs = wkLogs.slice(-5).map(function(l) { return l.date + ": temp=" + (l.temp||"?") + "°C, RH=" + (l.rh||"?") + "%, pH=" + (l.phIn||"?") + ", EC=" + (l.ecIn||"?") + ", pH_run=" + (l.phR||"?") + ", EC_run=" + (l.ecR||"?") + (l.notes ? ", obs: " + l.notes : ""); }).join("\n");
    var plantList = plants.filter(function(p) { return p.status === "ativa"; }).map(function(p) { return p.name + " (" + p.strain + ")"; }).join(", ");

    var ctx = "CONTEXTO:\n- Fase: " + W.title + " (" + W.label + ")\n- Setup: Grow 100x100x200, QB 240W, EasyCoco coco+perlita, Itaituba/PA\n- Plantas: " + plantList + "\n- Alvos: Temp " + W.temp + ", RH " + W.rh + ", EC " + W.ec + ", Luz " + W.light + "\n- Dose: A=" + W.dA + "g/L, B=" + W.dB + "g/L, C=" + W.dC + "g/L\n" + (recentLogs ? "\nREGISTROS:\n" + recentLogs : "Sem registros ainda.");

    var prompt = "Você é um grow buddy, assistente expert em cultivo indoor cannabis em coco/EasyCoco. Cultivador iniciante em Itaituba/PA (equatorial úmido).\n\n" + ctx + "\n\nResponda em PT-BR, prático e amigável:\n\n**📊 Análise dos dados**: Comente valores registrados vs alvos.\n**" + (aiPhoto ? "📸 Foto" : "🌱 Estado") + "**: " + (aiPhoto ? "Analise a foto." : "Com base nos dados, como as plantas devem estar?") + "\n**✅ Fazer agora**: 3-5 ações práticas imediatas.\n**👀 Atenção**: Riscos desta fase em Itaituba.\n**⏭️ Próximos passos**: O que preparar.\n\nMáximo 400 palavras.";

    var content = aiPhoto ? [
      { type:"image", source:{ type:"base64", media_type:aiPhoto.split(";")[0].split(":")[1], data:aiPhoto.split(",")[1] } },
      { type:"text", text:prompt }
    ] : prompt;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1200, messages:[{ role:"user", content:content }] })
    }).then(function(res) { return res.json(); }).then(function(d) {
      var txt = "";
      if (d.content) { for (var i = 0; i < d.content.length; i++) { if (d.content[i].text) txt += d.content[i].text; } }
      setAiRes(function(prev) { var next = Object.assign({}, prev); next[wk] = { text: txt || "Sem resultado.", date: new Date().toISOString().slice(0,10), hasPhoto: !!aiPhoto }; return next; });
    }).catch(function() {
      setAiRes(function(prev) { var next = Object.assign({}, prev); next[wk] = { text:"Erro de conexão. Tente novamente.", date: new Date().toISOString().slice(0,10) }; return next; });
    }).finally(function() { setAiLoad(false); setAiPhoto(null); });
  };

  // Styles
  var css = "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@500;700;800&display=swap');*{margin:0;padding:0;box-sizing:border-box}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#333;border-radius:4px}@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.card{animation:fadeUp .3s ease-out both}";

  var s = {
    app: { minHeight:"100vh", background:T.bg, fontFamily:"'Nunito',sans-serif", maxWidth:480, margin:"0 auto", color:T.t1 },
    hdr: { background:"#1c1d25", padding:"14px 14px 8px", textAlign:"center", position:"sticky", top:0, zIndex:50, borderBottom:"2px solid " + A + "44" },
    title: { fontFamily:"'Baloo 2',cursive", fontSize:18, fontWeight:800, color:A, margin:0 },
    sub: { fontSize:9, color:T.t2, letterSpacing:2, textTransform:"uppercase" },
    wkRow: { display:"flex", alignItems:"center", gap:3, marginTop:6, justifyContent:"center" },
    wkPill: function(a) { return { background:a?A:"transparent", color:a?"#000":T.t3, border:"2px solid "+(a?A:"#333"), borderRadius:20, padding:"2px 7px", fontSize:10, fontWeight:a?800:500, cursor:"pointer" }; },
    navB: { background:"none", border:"2px solid #333", borderRadius:"50%", width:24, height:24, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:A, fontSize:12, fontWeight:700, flexShrink:0 },
    prog: { height:4, background:"#222", borderRadius:2, margin:"4px 14px 0", overflow:"hidden" },
    progF: { height:"100%", background:"linear-gradient(90deg," + A + "88," + A + ")", borderRadius:2, width:((wk + 1) / WEEKS.length * 100) + "%", transition:"width .5s" },
    tabs: { display:"flex", background:"#181920", borderBottom:"1px solid #2a2b36", position:"sticky", top:60, zIndex:40 },
    tabBtn: function(a) { return { flex:1, padding:"8px 2px", background:"none", border:"none", borderBottom:"3px solid "+(a?A:"transparent"), color:a?T.t1:T.t3, fontSize:9, fontWeight:a?800:500, cursor:"pointer", letterSpacing:.5 }; },
    card: { background:T.card, border:"1px solid "+T.cb, borderRadius:14, padding:14, margin:"10px 14px" },
    cT: { fontFamily:"'Baloo 2',cursive", fontSize:14, fontWeight:700, color:A, marginBottom:4 },
    badge: function(c) { return { display:"inline-flex", alignItems:"center", gap:3, background:(c||A)+"20", color:c||A, border:"1.5px solid "+(c||A)+"40", borderRadius:16, padding:"2px 8px", fontSize:9, fontWeight:700 }; },
    g2: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 },
    met: { background:"#15161d", borderRadius:10, padding:7, textAlign:"center", border:"1px solid #252630" },
    mL: { fontSize:8, color:T.t2, fontWeight:700, letterSpacing:1, textTransform:"uppercase" },
    mV: { fontSize:13, fontWeight:800, color:T.t1, marginTop:1 },
    inp: { background:"#15161d", border:"1.5px solid #2a2b36", borderRadius:8, padding:"7px 10px", color:T.t1, fontSize:12, width:"100%", boxSizing:"border-box", fontFamily:"'Nunito',sans-serif" },
    btn: { background:"linear-gradient(135deg,"+A+","+A+"cc)", color:"#000", border:"none", borderRadius:10, padding:"10px 16px", fontSize:12, fontWeight:800, cursor:"pointer", width:"100%", fontFamily:"'Nunito',sans-serif" },
    btnS: { background:"transparent", color:A, border:"2px solid "+A+"44", borderRadius:10, padding:"7px 12px", fontSize:10, fontWeight:700, cursor:"pointer", fontFamily:"'Nunito',sans-serif" },
    alert: { background:"#2a1a0a", border:"2px solid #ff8f0044", borderRadius:12, padding:10, fontSize:11, color:"#ffcc80", lineHeight:1.5, display:"flex", gap:6, alignItems:"flex-start" },
    fab: { position:"fixed", bottom:64, right:14, width:46, height:46, borderRadius:"50%", background:A, color:"#000", border:"none", fontSize:22, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 18px "+A+"55", display:"flex", alignItems:"center", justifyContent:"center", zIndex:30 },
    modal: { position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(6px)", zIndex:100, display:"flex", alignItems:"flex-end", justifyContent:"center" },
    modalIn: { background:T.card, borderRadius:"18px 18px 0 0", width:"100%", maxWidth:480, maxHeight:"88vh", overflow:"auto", padding:16, border:"1px solid "+T.cb, borderBottom:"none" },
  };

  var icoList = ["🌿","🍯","🌸","💜","🍋","🔥","❄️","🌴","🍇","🌺"];
  var catList = ["estrutura","iluminação","ventilação","controle","medição","vasos","substrato","nutrição","pragas","biológico","treinamento","outro"];

  /* ═══════════════════ PANEL TAB ═══════════════════ */
  var renderPanel = function() {
    return (
      <div>
        <div style={{ textAlign:"center", padding:"8px 0 2px" }}><PhaseArt phase={W.phase} /></div>
        <div style={{ textAlign:"center" }}><span style={{ fontSize:18 }}>{W.emoji}</span> <span style={{ fontFamily:"'Baloo 2',cursive", fontSize:16, fontWeight:800, color:A }}>{W.title}</span></div>
        <p style={{ textAlign:"center", fontSize:10, color:T.t2, marginBottom:6 }}>{W.days} · {W.nut}</p>

        <div style={s.card} className="card">
          <div style={s.cT}>📊 Parâmetros</div>
          <div style={s.g2}>
            <div style={s.met}><div style={s.mL}>🌡 Temp</div><div style={s.mV}>{W.temp}</div></div>
            <div style={s.met}><div style={s.mL}>💧 RH</div><div style={s.mV}>{W.rh}</div></div>
            <div style={s.met}><div style={s.mL}>☀️ Luz</div><div style={s.mV}>{W.light}</div></div>
            <div style={s.met}><div style={s.mL}>📈 EC</div><div style={s.mV}>{W.ec}</div></div>
          </div>
          {W.dA > 0 && (
            <div style={{ background:"#15161d", borderRadius:8, padding:8, display:"flex", justifyContent:"space-around", marginTop:6, border:"1px solid #252630" }}>
              <div style={{ textAlign:"center" }}><div style={{ fontSize:16, fontWeight:900, color:"#42a5f5" }}>{W.dA}</div><div style={{ fontSize:7, fontWeight:700, color:"#42a5f588" }}>A g/L</div></div>
              <div style={{ textAlign:"center" }}><div style={{ fontSize:16, fontWeight:900, color:"#66bb6a" }}>{W.dB}</div><div style={{ fontSize:7, fontWeight:700, color:"#66bb6a88" }}>B g/L</div></div>
              <div style={{ textAlign:"center" }}><div style={{ fontSize:16, fontWeight:900, color:"#ffa726" }}>{W.dC}</div><div style={{ fontSize:7, fontWeight:700, color:"#ffa72688" }}>C g/L</div></div>
            </div>
          )}
        </div>

        <div style={s.card} className="card">
          <div style={s.cT}>✅ Tarefas</div>
          {W.tasks.map(function(t, i) { return <div key={i} style={{ display:"flex", gap:6, padding:"4px 0", fontSize:12, color:T.t1, lineHeight:1.4, borderBottom:i < W.tasks.length - 1 ? "1px solid "+T.cb : "none" }}><span style={{ color:A, flexShrink:0 }}>●</span><span>{t}</span></div>; })}
        </div>

        {W.alert && <div style={Object.assign({}, s.card, s.alert)} className="card"><span style={{ fontSize:14, flexShrink:0 }}>⚠️</span><span>{W.alert}</span></div>}

        <div style={s.card} className="card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={s.cT}>🌱 Plantas</div>
            <button onClick={function() { setShowPlantMgr(!showPlantMgr); }} style={Object.assign({}, s.btnS, { padding:"3px 8px", fontSize:9 })}>{showPlantMgr ? "Fechar" : "Gerenciar"}</button>
          </div>
          {plants.map(function(p) {
            return (
              <div key={p.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"5px 0", borderBottom:"1px solid "+T.cb, opacity:p.status === "descartada" ? 0.4 : 1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <span style={{ fontSize:14 }}>{p.ico}</span>
                  <div><div style={{ fontSize:11.5, fontWeight:700 }}>{p.name}</div><div style={{ fontSize:9, color:T.t3 }}>{p.strain}</div></div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:3 }}>
                  <span style={s.badge(p.status === "ativa" ? "#66bb6a" : "#ef5350")}>{p.status}</span>
                  {showPlantMgr && (
                    <span>
                      <button onClick={function() { startEditPlant(p); }} style={{ background:"none", border:"none", cursor:"pointer", fontSize:12 }}>✏️</button>
                      {p.status === "ativa"
                        ? <button onClick={function() { discardPlant(p.id); }} style={{ background:"none", border:"none", cursor:"pointer", fontSize:12 }}>❌</button>
                        : <span><button onClick={function() { reactivatePlant(p.id); }} style={{ background:"none", border:"none", cursor:"pointer", fontSize:12 }}>♻️</button><button onClick={function() { removePlant(p.id); }} style={{ background:"none", border:"none", cursor:"pointer", fontSize:12 }}>🗑</button></span>
                      }
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          {editPlant && (
            <div style={{ marginTop:8, padding:8, background:"#15161d", borderRadius:8, border:"1px solid "+A+"44" }}>
              <div style={{ fontSize:10, fontWeight:700, color:A, marginBottom:4 }}>✏️ Editar</div>
              <div style={{ display:"flex", gap:4, marginBottom:4 }}>
                <select value={pf.ico} onChange={function(e) { setPf(Object.assign({}, pf, { ico:e.target.value })); }} style={Object.assign({}, s.inp, { width:48, textAlign:"center", fontSize:14, padding:3 })}>
                  {icoList.map(function(i) { return <option key={i} value={i}>{i}</option>; })}
                </select>
                <input placeholder="Nome" value={pf.name} onChange={function(e) { setPf(Object.assign({}, pf, { name:e.target.value })); }} style={Object.assign({}, s.inp, { flex:1 })} />
              </div>
              <input placeholder="Genética" value={pf.strain} onChange={function(e) { setPf(Object.assign({}, pf, { strain:e.target.value })); }} style={Object.assign({}, s.inp, { marginBottom:4 })} />
              <div style={{ display:"flex", gap:4 }}>
                <button onClick={saveEditPlant} style={Object.assign({}, s.btn, { flex:1, padding:7, fontSize:10 })}>Salvar</button>
                <button onClick={function() { setEditPlant(null); setPf({ name:"", strain:"", ico:"🌿" }); }} style={Object.assign({}, s.btnS, { flex:1, fontSize:10 })}>Cancelar</button>
              </div>
            </div>
          )}
          {showPlantMgr && !editPlant && (
            <div style={{ marginTop:8, padding:8, background:"#15161d", borderRadius:8 }}>
              <div style={{ fontSize:10, fontWeight:700, color:A, marginBottom:4 }}>➕ Nova</div>
              <div style={{ display:"flex", gap:4, marginBottom:4 }}>
                <select value={pf.ico} onChange={function(e) { setPf(Object.assign({}, pf, { ico:e.target.value })); }} style={Object.assign({}, s.inp, { width:48, textAlign:"center", fontSize:14, padding:3 })}>
                  {icoList.map(function(i) { return <option key={i} value={i}>{i}</option>; })}
                </select>
                <input placeholder="Nome" value={pf.name} onChange={function(e) { setPf(Object.assign({}, pf, { name:e.target.value })); }} style={Object.assign({}, s.inp, { flex:1 })} />
              </div>
              <input placeholder="Genética" value={pf.strain} onChange={function(e) { setPf(Object.assign({}, pf, { strain:e.target.value })); }} style={Object.assign({}, s.inp, { marginBottom:4 })} />
              <button onClick={addPlant} style={Object.assign({}, s.btn, { padding:7, fontSize:10 })}>🌱 Adicionar</button>
            </div>
          )}
          {showPlantMgr && <button onClick={function() { setShowNewCycle(true); }} style={Object.assign({}, s.btnS, { width:"100%", marginTop:6, color:"#ffa726", borderColor:"#ffa72644", fontSize:10 })}>🔄 Novo Ciclo</button>}
        </div>
      </div>
    );
  };

  /* ═══════════════════ DIARY + ASSISTANT TAB ═══════════════════ */
  var renderDiary = function() {
    return (
      <div>
        {/* AI Assistant section */}
        <div style={Object.assign({}, s.card, { background:"#1a1f2e", borderColor:A+"33" })} className="card">
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
            <span style={{ fontSize:18 }}>🤖</span>
            <div>
              <div style={{ fontSize:13, fontWeight:800, color:A }}>Assistente Grow</div>
              <div style={{ fontSize:9, color:T.t2 }}>Analisa dados + foto → dicas personalizadas para {W.title}</div>
            </div>
          </div>
          <input type="file" accept="image/*" capture="environment" ref={aiRef} onChange={function(e) { hPhoto(e, true); }} style={{ display:"none" }} />
          {aiPhoto && (
            <div style={{ marginBottom:8, position:"relative" }}>
              <img src={aiPhoto} alt="" style={{ width:"100%", borderRadius:8, maxHeight:150, objectFit:"cover" }} />
              <button onClick={function() { setAiPhoto(null); }} style={{ position:"absolute", top:4, right:4, background:"#000a", color:"#fff", border:"none", borderRadius:"50%", width:22, height:22, cursor:"pointer", fontSize:11 }}>✕</button>
            </div>
          )}
          <div style={{ display:"flex", gap:6 }}>
            <button onClick={function() { aiRef.current && aiRef.current.click(); }} style={Object.assign({}, s.btnS, { flex:"0 0 auto", padding:"8px 12px" })}>📸</button>
            <button onClick={askAI} style={Object.assign({}, s.btn, { flex:1 })} disabled={aiLoad}>{aiLoad ? "🔄 Analisando..." : "🌱 Pedir análise e dicas"}</button>
          </div>
          <p style={{ fontSize:9, color:T.t3, marginTop:4, textAlign:"center" }}>{wkLogs.length} registros nesta semana · {aiPhoto ? "foto anexada ✅" : "envie foto para diagnóstico visual"}</p>
        </div>

        {/* AI Response */}
        {aiRes[wk] && (
          <div style={Object.assign({}, s.card, { background:"#1a1f2e", borderColor:A+"33" })} className="card">
            <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:6 }}>
              <span style={{ fontSize:13 }}>🤖</span>
              <span style={{ fontSize:11, fontWeight:800, color:A }}>Resposta do Assistente</span>
              <span style={{ fontSize:9, color:T.t3, marginLeft:"auto" }}>{aiRes[wk].date}{aiRes[wk].hasPhoto ? " 📸" : ""}</span>
            </div>
            <div style={{ fontSize:12, color:T.t1, lineHeight:1.7, whiteSpace:"pre-wrap" }}>{aiRes[wk].text}</div>
          </div>
        )}

        {aiLoad && (
          <div style={Object.assign({}, s.card, { textAlign:"center" })}>
            <div style={{ fontSize:13, color:A, fontWeight:700 }}>Analisando seu cultivo... 👀🌱</div>
          </div>
        )}

        {/* Logs */}
        <div style={{ padding:"10px 14px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:11, color:T.t2, fontWeight:700 }}>{logs.length} registros total · {wkLogs.length} nesta semana</span>
          <button onClick={function() { setShowLog(true); }} style={s.btnS}>+ Novo</button>
        </div>

        {logs.length === 0 ? (
          <div style={Object.assign({}, s.card, { textAlign:"center" })}>
            <div style={{ fontSize:36, marginBottom:6 }}>📋</div>
            <p style={{ fontSize:13, color:T.t2 }}>Nenhum registro ainda!</p>
            <p style={{ fontSize:11, color:T.t3, marginTop:4 }}>Toque no + para começar 🌱</p>
          </div>
        ) : logs.map(function(log) {
          return (
            <div key={log.id} style={s.card} onClick={function() { setExpId(expId === log.id ? null : log.id); }} className="card">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <span style={{ fontSize:13 }}>{WEEKS[log.week] ? WEEKS[log.week].emoji : "📝"}</span>
                  <span style={{ fontSize:12.5, fontWeight:700, color:T.t1 }}>{log.date}</span>
                  <span style={{ fontSize:10, color:T.t3 }}>{WEEKS[log.week] ? WEEKS[log.week].label : ""}</span>
                </div>
                <span style={{ fontSize:10, color:T.t3 }}>{log.plant === "all" ? "Todas" : (plants.find(function(p) { return p.id === log.plant; }) || {}).name}</span>
              </div>
              <div style={{ display:"flex", gap:3, marginTop:3, flexWrap:"wrap" }}>
                {log.w && <span style={s.badge("#42a5f5")}>💧</span>}
                {log.n && <span style={s.badge("#66bb6a")}>🧪</span>}
                {log.d && <span style={s.badge("#ff8a65")}>✂️</span>}
                {log.t && <span style={s.badge("#ab47bc")}>🌿</span>}
                {log.photo && <span style={s.badge("#ffa726")}>📸</span>}
              </div>
              {log.temp && <div style={{ fontSize:10, color:T.t2, marginTop:3 }}>🌡{log.temp}°C · 💧{log.rh}% {log.phIn ? "· pH " + log.phIn : ""} {log.ecIn ? "· EC " + log.ecIn : ""}</div>}
              {expId === log.id && (
                <div style={{ marginTop:6, fontSize:11, color:T.t2, lineHeight:1.6, borderTop:"1px solid "+T.cb, paddingTop:6 }}>
                  {log.phR && <div>pH runoff: {log.phR} · EC runoff: {log.ecR}</div>}
                  {log.notes && <div style={{ color:T.t1, marginTop:3 }}>📝 {log.notes}</div>}
                  {log.photo && <img src={log.photo} alt="" style={{ width:"100%", borderRadius:8, marginTop:6 }} />}
                  <button onClick={function(e) { e.stopPropagation(); setLogs(function(p) { return p.filter(function(l) { return l.id !== log.id; }); }); }} style={Object.assign({}, s.btnS, { marginTop:6, color:"#ef5350", borderColor:"#ef535033", fontSize:9 })}>🗑 Excluir</button>
                </div>
              )}
            </div>
          );
        })}

        {/* Problems reference */}
        <div style={s.card} className="card">
          <div style={s.cT}>🩹 Problemas Comuns</div>
          {PROBLEMS.map(function(p, i) {
            return (
              <div key={i} style={{ padding:"6px 0", borderBottom:i < PROBLEMS.length - 1 ? "1px solid "+T.cb : "none" }}>
                <div style={{ fontSize:11, fontWeight:700, color:T.t1 }}>{p.i} {p.s}</div>
                <div style={{ fontSize:9, color:T.t2 }}>Causa: {p.c}</div>
                <div style={{ fontSize:10, color:A, fontWeight:600 }}>→ {p.f}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /* ═══════════════════ TOOLS TAB ═══════════════════ */
  var vpdVal = calcVPD(vpdT, vpdRH);
  var renderTools = function() {
    return (
      <div>
        {/* VPD */}
        <div style={s.card} className="card">
          <div style={s.cT}>🌡 Calculadora VPD</div>
          <p style={{ fontSize:10, color:T.t2, marginBottom:6 }}>Ideal {W.title}: <strong style={{ color:A }}>{W.vMin}–{W.vMax} kPa</strong></p>
          <div style={s.g2}>
            <div><label style={{ fontSize:8, color:T.t3, fontWeight:700 }}>TEMP °C</label><input type="range" min="16" max="36" value={vpdT} onChange={function(e) { setVpdT(Number(e.target.value)); }} style={{ width:"100%", accentColor:A }} /><div style={{ textAlign:"center", fontSize:14, fontWeight:900 }}>{vpdT}°C</div></div>
            <div><label style={{ fontSize:8, color:T.t3, fontWeight:700 }}>RH %</label><input type="range" min="30" max="90" value={vpdRH} onChange={function(e) { setVpdRH(Number(e.target.value)); }} style={{ width:"100%", accentColor:A }} /><div style={{ textAlign:"center", fontSize:14, fontWeight:900 }}>{vpdRH}%</div></div>
          </div>
          <div style={{ textAlign:"center", marginTop:8, padding:10, background:"#15161d", borderRadius:10, border:"2px solid "+vpdColor(vpdVal)+"44" }}>
            <div style={{ fontSize:24, fontWeight:900, color:vpdColor(vpdVal) }}>{vpdVal.toFixed(2)} <span style={{ fontSize:10 }}>kPa</span></div>
            <div style={{ fontSize:10, fontWeight:700, color:vpdColor(vpdVal) }}>{vpdZone(vpdVal)}</div>
            {(vpdVal < W.vMin || vpdVal > W.vMax)
              ? <div style={{ fontSize:9, color:"#ef5350", marginTop:3 }}>⚠ Fora do ideal ({W.vMin}–{W.vMax})</div>
              : <div style={{ fontSize:9, color:"#66bb6a", marginTop:3 }}>✅ Dentro do ideal!</div>}
          </div>
          <div style={{ marginTop:8 }}><div style={{ fontSize:9, color:T.t3, fontWeight:700, marginBottom:3 }}>MAPA DE CALOR</div><VPDMap vpdT={vpdT} vpdRH={vpdRH} /></div>
        </div>

        {/* Nutrients */}
        <div style={s.card} className="card">
          <div style={s.cT}>🧪 Calculadora Nutrientes</div>
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
            <label style={{ fontSize:10, color:T.t2, fontWeight:700 }}>Litros:</label>
            <input type="number" min="0.5" max="50" step="0.5" value={nutL} onChange={function(e) { setNutL(Math.max(0.5, Number(e.target.value) || 0.5)); }} style={Object.assign({}, s.inp, { width:70, textAlign:"center", fontSize:14, fontWeight:800 })} />
          </div>
          {W.dA > 0 ? (
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:6 }}>
              <div style={Object.assign({}, s.met, { borderLeft:"3px solid #42a5f5" })}><div style={{ fontSize:7, color:"#42a5f5", fontWeight:700 }}>PARTE A</div><div style={{ fontSize:18, fontWeight:900 }}>{(W.dA * nutL).toFixed(1)}<span style={{ fontSize:9 }}>g</span></div></div>
              <div style={Object.assign({}, s.met, { borderLeft:"3px solid #66bb6a" })}><div style={{ fontSize:7, color:"#66bb6a", fontWeight:700 }}>PARTE B</div><div style={{ fontSize:18, fontWeight:900 }}>{(W.dB * nutL).toFixed(1)}<span style={{ fontSize:9 }}>g</span></div></div>
              <div style={Object.assign({}, s.met, { borderLeft:"3px solid #ffa726" })}><div style={{ fontSize:7, color:"#ffa726", fontWeight:700 }}>PARTE C</div><div style={{ fontSize:18, fontWeight:900 }}>{(W.dC * nutL).toFixed(1)}<span style={{ fontSize:9 }}>g</span></div></div>
            </div>
          ) : <div style={{ textAlign:"center", padding:10, color:T.t2, fontSize:11 }}>Apenas água pura 💧</div>}
        </div>

        {/* Charts */}
        <div style={s.card} className="card">
          <div style={s.cT}>📈 Evolução</div>
          {chartData.length < 2
            ? <p style={{ fontSize:11, color:T.t2, textAlign:"center", padding:10 }}>Registre 2+ dias para ver gráficos 📊</p>
            : <div>
                <Spark data={chartData} field="temp" color="#ef5350" label="Temperatura" unit="°C" />
                <Spark data={chartData} field="rh" color="#42a5f5" label="Umidade" unit="%" />
                <Spark data={chartData} field="ecIn" color="#66bb6a" label="EC Entrada" unit="" />
                <Spark data={chartData} field="phIn" color="#ffa726" label="pH Entrada" unit="" />
              </div>}
        </div>

        {/* Equipment */}
        <div style={s.card} className="card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={s.cT}>⚙️ Equipamentos</div>
            <span style={{ fontSize:10, color:T.t2 }}>{equip.filter(function(e) { return e.o; }).length}/{equip.length}</span>
          </div>
          <div style={{ height:3, background:"#222", borderRadius:2, overflow:"hidden", marginBottom:6 }}>
            <div style={{ height:"100%", background:A, borderRadius:2, width:(equip.filter(function(e) { return e.o; }).length / equip.length * 100) + "%" }} />
          </div>
          {(function() {
            var cats = [];
            equip.forEach(function(e) { if (cats.indexOf(e.c) === -1) cats.push(e.c); });
            return cats.map(function(cat) {
              return (
                <div key={cat} style={{ marginBottom:6 }}>
                  <div style={{ fontSize:8, fontWeight:800, color:T.t3, textTransform:"uppercase", letterSpacing:2, marginBottom:2 }}>{cat}</div>
                  {equip.filter(function(e) { return e.c === cat; }).map(function(e) {
                    return (
                      <div key={e.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"4px 0", borderBottom:"1px solid "+T.cb }}>
                        <div style={{ display:"flex", alignItems:"center", gap:5, flex:1 }}>
                          <button onClick={function() { setEquip(function(p) { return p.map(function(x) { return x.id === e.id ? Object.assign({}, x, { o:!x.o }) : x; }); }); }} style={{ width:18, height:18, borderRadius:5, background:e.o?A:"transparent", border:"2px solid "+(e.o?A:"#444"), cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#000", fontSize:10, flexShrink:0 }}>{e.o ? "✓" : ""}</button>
                          <span style={{ fontSize:11, color:e.o?T.t1:T.t3 }}>{e.n}</span>
                        </div>
                        {e.id.indexOf("c_") === 0 && <button onClick={function() { setEquip(function(p) { return p.filter(function(x) { return x.id !== e.id; }); }); }} style={{ background:"none", border:"none", color:"#ef5350", cursor:"pointer", fontSize:12 }}>✕</button>}
                      </div>
                    );
                  })}
                </div>
              );
            });
          })()}
          {showEqAdd ? (
            <div style={{ marginTop:6 }}>
              <input placeholder="Nome" value={neq.n} onChange={function(e) { setNeq(Object.assign({}, neq, { n:e.target.value })); }} style={Object.assign({}, s.inp, { marginBottom:4 })} />
              <select value={neq.c} onChange={function(e) { setNeq(Object.assign({}, neq, { c:e.target.value })); }} style={Object.assign({}, s.inp, { marginBottom:6 })}>
                {catList.map(function(c) { return <option key={c} value={c}>{c}</option>; })}
              </select>
              <div style={{ display:"flex", gap:4 }}>
                <button onClick={function() { if (neq.n.trim()) { setEquip(function(p) { return p.concat([{ id:"c_"+Date.now(), n:neq.n.trim(), c:neq.c, o:true }]); }); setNeq({ n:"", c:"outro" }); setShowEqAdd(false); } }} style={Object.assign({}, s.btn, { flex:1, padding:7, fontSize:10 })}>Adicionar</button>
                <button onClick={function() { setShowEqAdd(false); }} style={Object.assign({}, s.btnS, { flex:1 })}>Cancelar</button>
              </div>
            </div>
          ) : <button onClick={function() { setShowEqAdd(true); }} style={Object.assign({}, s.btnS, { width:"100%", marginTop:4 })}>+ Adicionar</button>}
        </div>
      </div>
    );
  };

  /* ═══════════════════ RENDER ═══════════════════ */
  return (
    <div style={s.app}>
      <style>{css}</style>
      <div style={s.hdr}>
        <h1 style={s.title}>🌱 Grow Tracker</h1>
        <p style={s.sub}>Itaituba · PA · {W.label}</p>
        <div style={s.wkRow}>
          <button style={s.navB} onClick={function() { setWk(Math.max(0, wk - 1)); }}>‹</button>
          <div style={{ display:"flex", gap:2, overflow:"auto", padding:"2px 0" }}>
            {WEEKS.map(function(w, i) { return <button key={i} onClick={function() { setWk(i); }} style={s.wkPill(i === wk)}>{w.emoji}</button>; })}
          </div>
          <button style={s.navB} onClick={function() { setWk(Math.min(WEEKS.length - 1, wk + 1)); }}>›</button>
        </div>
      </div>
      <div style={s.prog}><div style={s.progF} /></div>
      <div style={s.tabs}>
        <button onClick={function() { setTab("panel"); }} style={s.tabBtn(tab === "panel")}>📊 Painel</button>
        <button onClick={function() { setTab("diary"); }} style={s.tabBtn(tab === "diary")}>📋 Diário</button>
        <button onClick={function() { setTab("tools"); }} style={s.tabBtn(tab === "tools")}>🧰 Ferramentas</button>
      </div>
      <div style={{ paddingBottom: 72 }}>
        {tab === "panel" && renderPanel()}
        {tab === "diary" && renderDiary()}
        {tab === "tools" && renderTools()}
      </div>
      <button style={s.fab} onClick={function() { setShowLog(true); }}>+</button>

      {/* Log Modal */}
      {showLog && (
        <div style={s.modal} onClick={function() { setShowLog(false); }}>
          <div style={s.modalIn} onClick={function(e) { e.stopPropagation(); }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
              <div style={s.cT}>📝 Novo Registro</div>
              <button onClick={function() { setShowLog(false); }} style={{ background:"none", border:"none", color:T.t3, fontSize:16, cursor:"pointer" }}>✕</button>
            </div>
            <div style={{ display:"flex", gap:6, marginBottom:6 }}>
              <div style={{ flex:1 }}><label style={{ fontSize:8, color:T.t3, fontWeight:700 }}>DATA</label><input type="date" value={lf.date} onChange={function(e) { setLf(Object.assign({}, lf, { date:e.target.value })); }} style={s.inp} /></div>
              <div style={{ flex:1 }}><label style={{ fontSize:8, color:T.t3, fontWeight:700 }}>PLANTA</label><select value={lf.plant} onChange={function(e) { setLf(Object.assign({}, lf, { plant:e.target.value })); }} style={s.inp}><option value="all">Todas</option>{plants.filter(function(p) { return p.status === "ativa"; }).map(function(p) { return <option key={p.id} value={p.id}>{p.name}</option>; })}</select></div>
            </div>
            <div style={s.g2}>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>🌡 TEMP</label><input type="number" step="0.1" placeholder="27" value={lf.temp} onChange={function(e) { setLf(Object.assign({}, lf, { temp:e.target.value })); }} style={s.inp} /></div>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>💧 RH%</label><input type="number" step="0.1" placeholder="65" value={lf.rh} onChange={function(e) { setLf(Object.assign({}, lf, { rh:e.target.value })); }} style={s.inp} /></div>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>pH IN</label><input type="number" step="0.1" placeholder="5.9" value={lf.phIn} onChange={function(e) { setLf(Object.assign({}, lf, { phIn:e.target.value })); }} style={s.inp} /></div>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>EC IN</label><input type="number" step="0.1" placeholder="1.2" value={lf.ecIn} onChange={function(e) { setLf(Object.assign({}, lf, { ecIn:e.target.value })); }} style={s.inp} /></div>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>pH RUN</label><input type="number" step="0.1" placeholder="6.1" value={lf.phR} onChange={function(e) { setLf(Object.assign({}, lf, { phR:e.target.value })); }} style={s.inp} /></div>
              <div><label style={{ fontSize:7, color:T.t3, fontWeight:700 }}>EC RUN</label><input type="number" step="0.1" placeholder="1.4" value={lf.ecR} onChange={function(e) { setLf(Object.assign({}, lf, { ecR:e.target.value })); }} style={s.inp} /></div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:4, margin:"8px 0" }}>
              <button onClick={function() { setLf(Object.assign({}, lf, { w:!lf.w })); }} style={Object.assign({}, s.badge(lf.w ? A : T.t3), { cursor:"pointer", padding:"5px 10px", fontSize:10 })}>💧 Rega</button>
              <button onClick={function() { setLf(Object.assign({}, lf, { n:!lf.n })); }} style={Object.assign({}, s.badge(lf.n ? A : T.t3), { cursor:"pointer", padding:"5px 10px", fontSize:10 })}>🧪 Nutri</button>
              <button onClick={function() { setLf(Object.assign({}, lf, { d:!lf.d })); }} style={Object.assign({}, s.badge(lf.d ? A : T.t3), { cursor:"pointer", padding:"5px 10px", fontSize:10 })}>✂️ Desfolha</button>
              <button onClick={function() { setLf(Object.assign({}, lf, { t:!lf.t })); }} style={Object.assign({}, s.badge(lf.t ? A : T.t3), { cursor:"pointer", padding:"5px 10px", fontSize:10 })}>🌿 Treino</button>
            </div>
            <textarea placeholder="Observações..." value={lf.notes} onChange={function(e) { setLf(Object.assign({}, lf, { notes:e.target.value })); }} style={Object.assign({}, s.inp, { minHeight:44, resize:"vertical", marginBottom:6 })} />
            <input type="file" accept="image/*" capture="environment" ref={fRef} onChange={function(e) { hPhoto(e, false); }} style={{ display:"none" }} />
            {photo ? (
              <div style={{ marginBottom:8, position:"relative" }}>
                <img src={photo} alt="" style={{ width:"100%", borderRadius:8 }} />
                <button onClick={function() { setPhoto(null); }} style={{ position:"absolute", top:4, right:4, background:"#000a", color:"#fff", border:"none", borderRadius:"50%", width:22, height:22, cursor:"pointer", fontSize:11 }}>✕</button>
              </div>
            ) : <button onClick={function() { fRef.current && fRef.current.click(); }} style={Object.assign({}, s.btnS, { width:"100%", marginBottom:8 })}>📸 Foto</button>}
            <button onClick={addLog} style={s.btn}>✨ Salvar</button>
          </div>
        </div>
      )}

      {/* New Cycle Modal */}
      {showNewCycle && (
        <div style={s.modal} onClick={function() { setShowNewCycle(false); }}>
          <div style={Object.assign({}, s.modalIn, { maxHeight:"45vh", borderRadius:18 })} onClick={function(e) { e.stopPropagation(); }}>
            <div style={{ textAlign:"center", padding:"8px 0" }}>
              <div style={{ fontSize:36, marginBottom:6 }}>🔄</div>
              <div style={{ fontFamily:"'Baloo 2',cursive", fontSize:16, fontWeight:800, color:"#ffa726", marginBottom:6 }}>Novo Ciclo</div>
              <p style={{ fontSize:12, color:T.t2, lineHeight:1.5, marginBottom:14 }}>Reseta semana, plantas e registros. <strong style={{ color:"#ef5350" }}>Irreversível.</strong></p>
              <div style={{ display:"flex", gap:6 }}>
                <button onClick={startNewCycle} style={Object.assign({}, s.btn, { flex:1, background:"linear-gradient(135deg,#ef5350,#ff8a65)", fontSize:11 })}>Confirmar</button>
                <button onClick={function() { setShowNewCycle(false); }} style={Object.assign({}, s.btnS, { flex:1, fontSize:11 })}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
