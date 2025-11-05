// Origem/destino (filtrado)
const origens = [
  {
    "nome": "25H By Living (Carga Seca)",
    "lat": -23.5975207612826,
    "lon": -46.63896950456467
  },
  {
    "nome": "Casa Gabrielle (Carga Seca)",
    "lat": -23.624228,
    "lon": -46.6738935
  },
  {
    "nome": "CYRELA - ESCRITÓRIO PAULISTA",
    "lat": -23.5637088,
    "lon": -46.6537127
  },
  {
    "nome": "Cyrela Aura Moema (carga seca)",
    "lat": -23.603795720252,
    "lon": -46.661287231545
  },
  {
    "nome": "Cyrela Aura Pacaembu (Carga Seca)",
    "lat": -23.53733247118392,
    "lon": -46.66686159017831
  },
  {
    "nome": "Cyrela Casa Éden East (carga seca)",
    "lat": -23.62273391818557,
    "lon": -46.69134019114152
  },
  {
    "nome": "Cyrela Casa Éden West (carga seca)",
    "lat": -23.6234473,
    "lon": -46.6908797
  },
  {
    "nome": "Cyrela Casa Ibirapuera (carga seca)",
    "lat": -23.5939879,
    "lon": -46.6478037
  },
  {
    "nome": "Cyrela Eden Corporate (carga seca)",
    "lat": -23.6250127,
    "lon": -46.6925122
  },
  {
    "nome": "Cyrela Eden Loteamento - KIBON (carga seca)",
    "lat": -23.623604,
    "lon": -46.6912117
  },
  {
    "nome": "Cyrela For You Perdizes (carga seca)",
    "lat": -23.5365082,
    "lon": -46.6694024
  },
  {
    "nome": "Cyrela Mandarim The Legend (carga seca)",
    "lat": -23.6181232,
    "lon": -46.6988999
  },
  {
    "nome": "Cyrela On The Sky (carga seca)",
    "lat": -23.5317083,
    "lon": -46.676219
  },
  {
    "nome": "Cyrela Oscar Freire II (carga seca)",
    "lat": -23.5588364,
    "lon": -46.6726768
  },
  {
    "nome": "Cyrela Pacific Belém (carga seca)",
    "lat": -23.5384824,
    "lon": -46.5940256
  },
  {
    "nome": "Cyrela Quattri Vila Mariana (carga seca)",
    "lat": -23.5833148,
    "lon": -46.6359095
  },
  {
    "nome": "Cyrela Secret Garden (carga seca)",
    "lat": -23.5786318,
    "lon": -46.6409222
  },
  {
    "nome": "Eden by Dror West (carga seca)",
    "lat": -23.623604,
    "lon": -46.6912117
  },
  {
    "nome": "Escape Éden (Carga Seca)",
    "lat": -23.623604,
    "lon": -46.6912117
  },
  {
    "nome": "Home Boutique Anália Franco (Carga Seca)",
    "lat": -23.5610123,
    "lon": -46.5526941
  },
  {
    "nome": "Legacy Paineiras (Carga Seca)",
    "lat": -22.9002071674072,
    "lon": -47.0302618741382
  },
  {
    "nome": "Living Blend (carga seca)",
    "lat": -22.9031833234142,
    "lon": -47.0756180945646
  },
  {
    "nome": "Living Brooklin Bridge (carga seca)",
    "lat": -23.6319698,
    "lon": -46.6901589
  },
  {
    "nome": "Living Full Berrini (Carga Seca)",
    "lat": -23.59935039542943,
    "lon": -46.68749668571503
  },
  {
    "nome": "Living Full Faria Lima (carga seca)",
    "lat": -23.5687279,
    "lon": -46.6939779
  },
  {
    "nome": "Living Full Pinheiros (Carga Seca)",
    "lat": -23.56551886968314,
    "lon": -46.69697512234255
  },
  {
    "nome": "Living Full V. Nova Conceição (carga seca)",
    "lat": -23.5885794,
    "lon": -46.6721354
  },
  {
    "nome": "Living Gran Exclusive Freguesia do Ó (carga seca)",
    "lat": -23.4935579,
    "lon": -46.6920862
  },
  {
    "nome": "Living Grand Wish Jardim (carga seca)",
    "lat": -23.6445934,
    "lon": -46.5349885
  },
  {
    "nome": "Living High Line By Living (Carga Seca)",
    "lat": -23.5683915873888,
    "lon": -46.63754029281753
  },
  {
    "nome": "Living Home Boutique Ipiranga (Carga Seca)",
    "lat": -23.59808875617082,
    "lon": -46.61006364828874
  },
  {
    "nome": "Living Infinity Nova Klabin (carga seca)",
    "lat": -23.59370781375395,
    "lon": -46.62065556088537
  },
  {
    "nome": "Living Only Ipiranga (carga seca)",
    "lat": -23.60580625709026,
    "lon": -46.6140031087803
  },
  {
    "nome": "Living Palazzo Mooca (Carga Seca)",
    "lat": -23.5651745,
    "lon": -46.5926036
  },
  {
    "nome": "Living Unique Freguesia do Ó (carga seca)",
    "lat": -23.4919225,
    "lon": -46.6967789
  },
  {
    "nome": "Living Unique Saúde (carga seca)",
    "lat": -23.61498962883264,
    "lon": -46.64112659067496
  },
  {
    "nome": "Living United Sorocabanos (carga seca)",
    "lat": -23.5795805,
    "lon": -46.6034332
  },
  {
    "nome": "Living Wellness Aclimação (Carga seca)",
    "lat": -23.57712498195728,
    "lon": -46.61903082963742
  },
  {
    "nome": "N.A.U Vila Mariana (Carga Seca)",
    "lat": -23.5872487887713,
    "lon": -46.62893419457729
  },
  {
    "nome": "The Edition By Living Vila Mariana (Carga Seca)",
    "lat": -23.5819819,
    "lon": -46.6246383
  },
  {
    "nome": "Vista Venezia - Gardena (Carga Seca)",
    "lat": -23.57447723843132,
    "lon": -46.70388726836948
  },
  {
    "nome": "Vivaz Belenzinho (Carga Seca)",
    "lat": -23.53202381660596,
    "lon": -46.60495060112185
  },
  {
    "nome": "Vivaz Cantareira Fase 02 (carga seca)",
    "lat": -23.44637594778482,
    "lon": -46.72817770654409
  },
  {
    "nome": "Vivaz Cantareira Fase 03 (carga seca)",
    "lat": -23.44647437761656,
    "lon": -46.72824207956045
  },
  {
    "nome": "Vivaz Clube Barra Funda (Carga Seca)",
    "lat": -23.5188354521588,
    "lon": -46.66953427138775
  },
  {
    "nome": "Vivaz Connection Klabin (Carga Seca)",
    "lat": -23.597381,
    "lon": -46.617414
  },
  {
    "nome": "Vivaz Connection Mooca (Carga Seca)",
    "lat": -23.5470254,
    "lon": -46.5935884
  },
  {
    "nome": "Vivaz Connection Paulista (Carga Seca)",
    "lat": -23.55814695780513,
    "lon": -46.64116901147263
  },
  {
    "nome": "Vivaz Ermelino Matarazzo (Carga Seca)",
    "lat": -23.48314394102009,
    "lon": -46.47176705879397
  },
  {
    "nome": "Vivaz Estação Sacomã (carga seca)",
    "lat": -23.6059061,
    "lon": -46.5995455
  },
  {
    "nome": "Vivaz Estação São Lucas (carga seca)",
    "lat": -23.5898394,
    "lon": -46.5434884
  },
  {
    "nome": "Vivaz Freguesia do Ó (carga seca)",
    "lat": -23.487061,
    "lon": -46.6924801
  },
  {
    "nome": "Vivaz Parque Freguesia do Ó - Lote 02",
    "lat": -23.488605,
    "lon": -46.70611
  },
  {
    "nome": "Vivaz Parque Freguesia Do Ó Lote 1A -1B (Carga Seca)",
    "lat": -23.4882339,
    "lon": -46.704581
  },
  {
    "nome": "Vivaz Parque Prime Freguesia do Ó - Lote 03",
    "lat": -23.4879038,
    "lon": -46.7060329
  },
  {
    "nome": "Vivaz Penha fase 2 (carga seca)",
    "lat": -23.51152519756426,
    "lon": -46.55473867309861
  },
  {
    "nome": "Vivaz Penha fase 3 (carga seca)",
    "lat": -23.51176222942621,
    "lon": -46.55474536758372
  },
  {
    "nome": "Vivaz Prime Alto da Boa Vista (carga seca)",
    "lat": -23.65644078129659,
    "lon": -46.70449304759822
  },
  {
    "nome": "Vivaz Prime Alto do Ipiranga (carga seca)",
    "lat": -23.60540094953025,
    "lon": -46.61428926703739
  },
  {
    "nome": "Vivaz Prime Belém (carga seca)",
    "lat": -23.5416343,
    "lon": -46.5971763
  },
  {
    "nome": "Vivaz Prime Belenzinho (carga seca)",
    "lat": -23.5427619,
    "lon": -46.5970064
  },
  {
    "nome": "Vivaz Prime Rio Bonito (carga seca)",
    "lat": -23.6796626868279,
    "lon": -46.70637105025191
  },
  {
    "nome": "Vivaz Prime Rio Bonito 1 (carga seca)",
    "lat": -23.6796224,
    "lon": -46.7063275
  },
  {
    "nome": "Vivaz Prime Rio Bonito 2 (carga seca)",
    "lat": -23.6797596,
    "lon": -46.7062039
  },
  {
    "nome": "Vivaz Prime Santa Cecília (carga seca)",
    "lat": -23.5318949,
    "lon": -46.6572108
  },
  {
    "nome": "Vivaz Prime V. Nova Cachoeirinha 1 (carga seca)",
    "lat": -23.4745151916873,
    "lon": -46.67232440129644
  },
  {
    "nome": "Vivaz Prime V. Nova Cachoeirinha 2 (carga seca)",
    "lat": -23.47451425155506,
    "lon": -46.67277030936881
  },
  {
    "nome": "Vivaz Prime V. Prudente (carga seca)",
    "lat": -23.5825096,
    "lon": -46.5787652
  },
  {
    "nome": "Vivaz Prime Voluntários da Pátria (carga seca)",
    "lat": -23.5159917,
    "lon": -46.6268032
  },
  {
    "nome": "Vivaz Santa Marina II (Carga Seca)",
    "lat": -23.5100725,
    "lon": -46.693399
  },
  {
    "nome": "Vivaz Vila Ema (carga seca)",
    "lat": -23.5818755,
    "lon": -46.5522653
  }
];
const destinos = [
  {
    "nome": "Pedrasil - Mooca",
    "coordenadas": [
      -46.679879, 
      -23.522786
    ],
    "preco": 0,
    "status": "Ativo"
  },
  {
    "nome": "Pedrasil - Perdizes",
    "coordenadas": [
      -46.607464, 
      -23.592533
    ],
    "preco": 0,
    "status": "Ativo"
  },
  {
    "nome": "Pedreira Territorial (Agis)",
    "coordenadas": [
      -46.7320422, 
      -23.4151676
    ],
    "preco": 0,
    "status": "Ativo"
  },
  {
    "nome": "Itaquareia",
    "coordenadas": [
      -46.343784, 
      -23.473312
    ],
    "preco": 0,
    "status": "Ativo"
  },
  
];

const ORS_URL = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';
const ORS_API_KEY = '5b3ce3597851110001cf62489ba64b90dd6d4ab8bcc92d787f377d8d';

let cancelRequested = false;
let activeController = null;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function toXlsx(rows, filename='OD_pairs_RESULT.xlsx') {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Rotas');
  XLSX.writeFile(wb, filename);
}

function log(msg) {
  const el = document.getElementById('log');
  const line = document.createElement('div');
  line.textContent = msg;
  el.appendChild(line);
  el.scrollTop = el.scrollHeight;
}

function setStatus(text) {
  document.getElementById('status').textContent = text;
}

async function runBatch() {
  const btnRun = document.getElementById('run');
  const btnStop = document.getElementById('stop');
  const prog = document.getElementById('prog');
  const delay = Number(document.getElementById('delay').value || 3000);

  btnRun.disabled = true;
  cancelRequested = false;
  setStatus('Iniciando...');
  document.getElementById('log').innerHTML = '';

  const total = origens.length * destinos.length;
  prog.max = total;
  prog.value = 0;

  let rows = [];
  let done = 0, errors = 0;

  for (let i = 0; i < origens.length; i++) {
    const o = origens[i];
    for (let j = 0; j < destinos.length; j++) {
      if (cancelRequested) {
        setStatus(`Cancelado em ${done}/${total}. Gerando XLSX parcial...`);
        toXlsx(rows, 'Relatório Agregados.xlsx');
        btnRun.disabled = false;
        return;
      }

      const d = destinos[j];
      const idx = done + 1;
      log(`[${idx}/${total}] ${o.nome} → ${d.nome}`);

      const body = {
        coordinates: [
          [Number(o.lon), Number(o.lat)],
          [Number(d.coordenadas[0]), Number(d.coordenadas[1])]
        ]
      };

      let distancia_km = null, duracao_min = null, erro = null;

      try {
        activeController = new AbortController();
        const resp = await fetch(ORS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ORS_API_KEY
          },
          body: JSON.stringify(body),
          signal: activeController.signal
        });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
let sum = null;
// GeoJSON
if (data && data.features && data.features[0] && data.features[0].properties && data.features[0].properties.summary) {
  sum = data.features[0].properties.summary;
}
// JSON (sem geojson)
else if (data && data.routes && data.routes[0] && data.routes[0].summary) {
  sum = data.routes[0].summary;
}
// JSON com segments
else if (data && data.routes && data.routes[0] && data.routes[0].segments && data.routes[0].segments.length) {
  sum = data.routes[0].segments.reduce((acc, s) => ({
    distance: (acc.distance || 0) + (s.distance || 0),
    duration: (acc.duration || 0) + (s.duration || 0)
  }), {});
}
if (sum) {
  distancia_km = Number(((sum.distance || 0) / 1000).toFixed(3));
  duracao_min = Number(((sum.duration || 0) / 60).toFixed(1));
}
      } catch (e) {
        erro = e.name === 'AbortError' ? 'abortado' : (e.message || 'erro');
        errors++;
        log(`  ↳ ERRO: ${erro}`);
      } finally {
        activeController = null;
      }

      rows.push({
        origem_nome: o.nome,
        origem_lat: o.lat,
        origem_lon: o.lon,
        destino_nome: d.nome,
        destino_lat: d.coordenadas[1],
        destino_lon: d.coordenadas[0],
        distancia_km,
        duracao_min,
        custo: null,
        erro
      });

      done++;
      prog.value = done;
      if (done % 20 === 0 || erro) {
        setStatus(`Processadas: ${done}/${total} | Erros: ${errors}`);
      }

      if (cancelRequested) {
        setStatus(`Cancelado em ${done}/${total}. Gerando XLSX parcial...`);
        toXlsx(rows, 'Relatório Agregados.xlsx');
        btnRun.disabled = false;
        return;
      }

      await sleep(delay);
    }
  }

  setStatus(`Concluído: ${done}/${total} | Erros: ${errors} → gerando XLSX...`);
  toXlsx(rows, 'OD_pairs_RESULT.xlsx');
  btnRun.disabled = false;
}

function stopBatch() {
  cancelRequested = true;
  if (activeController) {
    try { activeController.abort(); } catch (_e) {}
  }
  setStatus('Cancelando...');
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('run').addEventListener('click', runBatch);
  document.getElementById('stop').addEventListener('click', stopBatch);
  const counts = document.getElementById('counts');
  counts.textContent = `${origens.length} origens × ${destinos.length} destinos = ${origens.length * destinos.length} rotas`;
});
