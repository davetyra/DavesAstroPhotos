/* ============================================================
   DAVE'S ASTROPHOTOS — main.js
   ============================================================ */

/* ── Placeholder helpers ─────────────────────────────────────*/
const PH = {
  new:              { bg: '252525', tx: 'd4d4d8' },
  galaxies:         { bg: '1e1e28', tx: 'c8c4dc' },
  emissionnebula:   { bg: '281e1e', tx: 'dcc4c4' },
  reflectionnebula: { bg: '1e2028', tx: 'c4c8dc' },
  comets:           { bg: '1e2820', tx: 'c4dcc8' },
  starclusters:     { bg: '201e14', tx: 'dcd8c4' },
  widefield:        { bg: '202020', tx: 'd0d0d0' },
};
function thumb(cat, label) {
  const { bg, tx } = PH[cat];
  return `https://placehold.co/480x360/${bg}/${tx}?text=${encodeURIComponent(label)}`;
}
function full(cat, label) {
  const { bg, tx } = PH[cat];
  return `https://placehold.co/1400x1050/${bg}/${tx}?text=${encodeURIComponent(label)}`;
}

/* ── Gallery Data ────────────────────────────────────────────*/
const GALLERIES = {

  new: [
    { id:'n01',  title:'Andromeda Galaxy',        catalog:'M31',          date:'2024-10-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'6 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Andromeda_Galaxy' },
    { id:'n02',  title:'Orion Nebula',             catalog:'M42',          date:'2024-11-03', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'4 hrs 45 min',  location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/Orion_Nebula' },
    { id:'n03',  title:'North America Nebula',     catalog:'NGC 7000',     date:'2024-09-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'9 hrs 10 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/North_America_Nebula' },
    { id:'n04',  title:'Whirlpool Galaxy',         catalog:'M51',          date:'2024-05-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'7 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Whirlpool_Galaxy' },
    { id:'n05',  title:'Veil Nebula (East)',        catalog:'NGC 6992',     date:'2024-08-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'11 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Veil_Nebula' },
    { id:'n06',  title:'Lagoon Nebula',            catalog:'M8',           date:'2024-07-04', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'5 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Lagoon_Nebula' },
    { id:'n07',  title:'Comet Tsuchinshan-ATLAS',  catalog:'C/2023 A3',    date:'2024-10-01', scope:'William Optics GT81 @ f/5.9', camera:'Sony a7IV (H-α mod)', exposure:'1 hr 20 min',   location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/C/2023_A3_(Tsuchinshan%E2%80%93ATLAS)' },
    { id:'n08',  title:'Iris Nebula',              catalog:'NGC 7023',     date:'2024-08-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'8 hrs 40 min',  location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Iris_Nebula' },
    { id:'n09',  title:'Triangulum Galaxy',        catalog:'M33',          date:'2024-10-28', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'10 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Triangulum_Galaxy' },
    { id:'n10',  title:'Rosette Nebula',           catalog:'NGC 2237',     date:'2024-12-10', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'8 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Rosette_Nebula' },
    { id:'n11',  title:'Bubble Nebula',            catalog:'NGC 7635',     date:'2024-09-14', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'12 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Bubble_Nebula' },
    { id:'n12',  title:'Rho Ophiuchi Cloud',       catalog:'Wide Field',   date:'2024-06-20', scope:'Sony a7IV + 24mm GM',         camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Rho_Ophiuchi_cloud_complex' },
    { id:'n13',  title:'Sombrero Galaxy',          catalog:'M104',         date:'2024-05-02', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'9 hrs 20 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Sombrero_Galaxy' },
    { id:'n14',  title:'Heart Nebula',             catalog:'IC 1805',      date:'2024-11-18', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'14 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Heart_Nebula' },
    { id:'n15',  title:'California Nebula',        catalog:'NGC 1499',     date:'2024-12-02', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'7 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/California_Nebula' },
    { id:'n16',  title:'Pinwheel Galaxy',          catalog:'M101',         date:'2024-05-25', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'11 hrs 10 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pinwheel_Galaxy' },
    { id:'n17',  title:'Pelican Nebula',           catalog:'IC 5070',      date:'2024-08-30', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'10 hrs 30 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pelican_Nebula' },
    { id:'n18',  title:'Comet Leonard',            catalog:'C/2021 A1',    date:'2021-12-14', scope:'William Optics GT81 @ f/5.9', camera:'Sony a7IV (H-α mod)', exposure:'45 min',         location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/Comet_Leonard' },
    { id:'n19',  title:'Sunflower Galaxy',         catalog:'M63',          date:'2024-04-19', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'8 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Sunflower_Galaxy' },
    { id:'n20',  title:'Dumbbell Nebula',          catalog:'M27',          date:'2024-07-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'6 hrs 0 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Dumbbell_Nebula' },
    { id:'n21',  title:'Eagle Nebula',             catalog:'M16',          date:'2024-07-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro',  exposure:'9 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Eagle_Nebula' },
    { id:'n22',  title:'Bode\'s Galaxy',           catalog:'M81',          date:'2024-03-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'10 hrs 40 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_81' },
    { id:'n23',  title:'Milky Way Core',           catalog:'Wide Field',   date:'2024-06-15', scope:'Sony a7IV + 24mm GM',         camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Milky_Way' },
    { id:'n24',  title:'Crab Nebula',              catalog:'M1',           date:'2024-11-25', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'13 hrs 20 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Crab_Nebula' },
  ],

  galaxies: [
    { id:'g01', title:'Andromeda Galaxy',    catalog:'M31',        date:'2024-10-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'6 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Andromeda_Galaxy' },
    { id:'g02', title:'Triangulum Galaxy',   catalog:'M33',        date:'2024-10-28', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'10 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Triangulum_Galaxy' },
    { id:'g03', title:'Whirlpool Galaxy',    catalog:'M51',        date:'2024-05-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'7 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Whirlpool_Galaxy' },
    { id:'g04', title:'Bode\'s Galaxy',      catalog:'M81',        date:'2024-03-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'10 hrs 40 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_81' },
    { id:'g05', title:'Cigar Galaxy',        catalog:'M82',        date:'2024-03-09', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'8 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Cigar_Galaxy' },
    { id:'g06', title:'Pinwheel Galaxy',     catalog:'M101',       date:'2024-05-25', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'11 hrs 10 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pinwheel_Galaxy' },
    { id:'g07', title:'Sombrero Galaxy',     catalog:'M104',       date:'2024-05-02', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'9 hrs 20 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Sombrero_Galaxy' },
    { id:'g08', title:'Sunflower Galaxy',    catalog:'M63',        date:'2024-04-19', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'8 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Sunflower_Galaxy' },
    { id:'g09', title:'Cetus A',             catalog:'M77',        date:'2024-11-10', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'9 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_77' },
    { id:'g10', title:'Black Eye Galaxy',    catalog:'M64',        date:'2024-04-30', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'10 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Black_Eye_Galaxy' },
    { id:'g11', title:'Needle Galaxy',       catalog:'NGC 4565',   date:'2024-05-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'12 hrs 30 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_4565' },
    { id:'g12', title:'Edge-On Galaxy',      catalog:'NGC 891',    date:'2024-10-20', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'11 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_891' },
    { id:'g13', title:'Sculptor Galaxy',     catalog:'NGC 253',    date:'2024-11-05', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'9 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Sculptor_Galaxy' },
    { id:'g14', title:'Antennae Galaxies',   catalog:'NGC 4038/9', date:'2024-05-20', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'14 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Antennae_Galaxies' },
    { id:'g15', title:'Croc\'s Eye Galaxy',  catalog:'M94',        date:'2024-04-10', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'7 hrs 50 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_94' },
    { id:'g16', title:'NGC 4258',            catalog:'M106',       date:'2024-04-22', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'13 hrs 20 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_106' },
    { id:'g17', title:'Deer Lick Group',     catalog:'NGC 7331',   date:'2024-10-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'10 hrs 15 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_7331' },
    { id:'g18', title:'Phantom Galaxy',      catalog:'M74',        date:'2024-11-14', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'11 hrs 40 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_74' },
    { id:'g19', title:'NGC 2403',            catalog:'NGC 2403',   date:'2024-03-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'9 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_2403' },
    { id:'g20', title:'Southern Pinwheel',   catalog:'M83',        date:'2024-05-28', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'8 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_83' },
    { id:'g21', title:'Splinter Galaxy',     catalog:'NGC 5907',   date:'2024-06-12', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro',  exposure:'12 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_5907' },
    { id:'g22', title:'Box Galaxy',          catalog:'NGC 4449',   date:'2024-04-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'8 hrs 20 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_4449' },
    { id:'g23', title:'Phantom Galaxy',      catalog:'M61',        date:'2024-05-10', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',      exposure:'9 hrs 50 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_61' },
    { id:'g24', title:'NGC 300',             catalog:'NGC 300',    date:'2024-11-20', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',      exposure:'10 hrs 30 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_300' },
  ],

  emissionnebula: [
    { id:'e01', title:'Orion Nebula',          catalog:'M42',       date:'2024-11-03', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'4 hrs 45 min',  location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/Orion_Nebula' },
    { id:'e02', title:'Lagoon Nebula',         catalog:'M8',        date:'2024-07-04', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'5 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Lagoon_Nebula' },
    { id:'e03', title:'Trifid Nebula',         catalog:'M20',       date:'2024-07-10', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'6 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Trifid_Nebula' },
    { id:'e04', title:'Omega Nebula',          catalog:'M17',       date:'2024-07-18', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'7 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Omega_Nebula' },
    { id:'e05', title:'North America Nebula',  catalog:'NGC 7000',  date:'2024-09-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'9 hrs 10 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/North_America_Nebula' },
    { id:'e06', title:'Heart Nebula',          catalog:'IC 1805',   date:'2024-11-18', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'14 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Heart_Nebula' },
    { id:'e07', title:'Soul Nebula',           catalog:'IC 1848',   date:'2024-11-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'12 hrs 45 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Soul_Nebula' },
    { id:'e08', title:'Veil Nebula (East)',    catalog:'NGC 6992',  date:'2024-08-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'11 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Veil_Nebula' },
    { id:'e09', title:'Eagle Nebula',          catalog:'M16',       date:'2024-07-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'9 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Eagle_Nebula' },
    { id:'e10', title:'Bubble Nebula',         catalog:'NGC 7635',  date:'2024-09-14', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'12 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Bubble_Nebula' },
    { id:'e11', title:'Pelican Nebula',        catalog:'IC 5070',   date:'2024-08-30', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'10 hrs 30 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pelican_Nebula' },
    { id:'e12', title:'Crescent Nebula',       catalog:'NGC 6888',  date:'2024-08-14', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'13 hrs 20 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Crescent_Nebula' },
    { id:'e13', title:'Butterfly Nebula',      catalog:'IC 1318',   date:'2024-09-02', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'8 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/IC_1318' },
    { id:'e14', title:'Helix Nebula',          catalog:'NGC 7293',  date:'2024-10-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'7 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Helix_Nebula' },
    { id:'e15', title:'Dumbbell Nebula',       catalog:'M27',       date:'2024-07-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'6 hrs 0 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Dumbbell_Nebula' },
    { id:'e16', title:'California Nebula',     catalog:'NGC 1499',  date:'2024-12-02', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'7 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/California_Nebula' },
    { id:'e17', title:'Thor\'s Helmet',        catalog:'NGC 2359',  date:'2025-01-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'15 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_2359' },
    { id:'e18', title:'Ring Nebula',           catalog:'M57',       date:'2024-07-22', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'5 hrs 30 min',  location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Ring_Nebula' },
    { id:'e19', title:'Cat\'s Eye Nebula',     catalog:'NGC 6543',  date:'2024-08-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'8 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Cat%27s_Eye_Nebula' },
    { id:'e20', title:'Eskimo Nebula',         catalog:'NGC 2392',  date:'2025-01-20', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'10 hrs 15 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Eskimo_Nebula' },
    { id:'e21', title:'Rosette Nebula',        catalog:'NGC 2237',  date:'2024-12-10', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'8 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Rosette_Nebula' },
    { id:'e22', title:'Crab Nebula',           catalog:'M1',        date:'2024-11-25', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'13 hrs 20 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Crab_Nebula' },
    { id:'e23', title:'Blinking Planetary',    catalog:'NGC 6826',  date:'2024-08-18', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'7 hrs 0 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/NGC_6826' },
    { id:'e24', title:'Bow-Tie Nebula',        catalog:'NGC 40',    date:'2024-10-30', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'9 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_40' },
  ],

  reflectionnebula: [
    { id:'r01', title:'Pleiades Nebulosity',   catalog:'M45',      date:'2024-11-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'8 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pleiades' },
    { id:'r02', title:'Running Man Nebula',    catalog:'NGC 1977', date:'2024-11-12', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'9 hrs 30 min',  location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/NGC_1977' },
    { id:'r03', title:'Iris Nebula',           catalog:'NGC 7023', date:'2024-08-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'8 hrs 40 min',  location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Iris_Nebula' },
    { id:'r04', title:'Ghost Nebula',          catalog:'vdB 141',  date:'2024-09-18', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'11 hrs 15 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/vdB_141' },
    { id:'r05', title:'Blue Horsehead',        catalog:'IC 4592',  date:'2024-06-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'7 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/IC_4592' },
    { id:'r06', title:'Merope Nebula',         catalog:'NGC 1435', date:'2024-11-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'10 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Merope_Nebula' },
    { id:'r07', title:'Corona Australis Neb.', catalog:'NGC 6726', date:'2024-08-25', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'6 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_6726' },
    { id:'r08', title:'NGC 1333',              catalog:'NGC 1333', date:'2024-10-25', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'12 hrs 20 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_1333' },
    { id:'r09', title:'Witch Head Nebula',     catalog:'IC 2118',  date:'2024-12-18', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MM Pro', exposure:'9 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Witch_Head_Nebula' },
    { id:'r10', title:'NGC 1788',              catalog:'NGC 1788', date:'2024-12-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'10 hrs 30 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_1788' },
    { id:'r11', title:'NGC 2023',              catalog:'NGC 2023', date:'2025-01-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'8 hrs 15 min',  location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/NGC_2023' },
    { id:'r12', title:'vdB 1',                 catalog:'vdB 1',    date:'2024-10-02', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'11 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r13', title:'NGC 1999',              catalog:'NGC 1999', date:'2024-11-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'9 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/NGC_1999' },
    { id:'r14', title:'IC 435',                catalog:'IC 435',   date:'2025-01-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'13 hrs 30 min', location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/IC_435' },
    { id:'r15', title:'vdB 31',                catalog:'vdB 31',   date:'2024-03-20', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'10 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r16', title:'IC 2169',               catalog:'IC 2169',  date:'2025-01-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'8 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/IC_2169' },
    { id:'r17', title:'vdB 152',               catalog:'vdB 152',  date:'2024-10-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'14 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r18', title:'NGC 1973/5/7',          catalog:'NGC 1973', date:'2024-11-10', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'9 hrs 0 min',   location:'Montana de Oro SP, CA', url:'https://en.wikipedia.org/wiki/NGC_1977' },
    { id:'r19', title:'IC 426',                catalog:'IC 426',   date:'2025-01-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'11 hrs 30 min', location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/IC_426' },
    { id:'r20', title:'vdB 6',                 catalog:'vdB 6',    date:'2024-10-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'10 hrs 15 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r21', title:'vdB 62',                catalog:'vdB 62',   date:'2024-03-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'9 hrs 20 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r22', title:'vdB 93',                catalog:'vdB 93',   date:'2025-02-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'12 hrs 0 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r23', title:'vdB 17',                catalog:'vdB 17',   date:'2024-11-02', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'10 hrs 45 min', location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/VdB_catalog' },
    { id:'r24', title:'IC 2087',               catalog:'IC 2087',  date:'2025-01-12', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'13 hrs 0 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/IC_2087' },
  ],

  comets: [
    { id:'c01', title:'Tsuchinshan-ATLAS',    catalog:'C/2023 A3',  date:'2024-10-01', scope:'William Optics GT81 @ f/5.9', camera:'Sony a7IV (H-α mod)', exposure:'1 hr 20 min',   location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/C/2023_A3_(Tsuchinshan%E2%80%93ATLAS)' },
    { id:'c02', title:'NEOWISE',              catalog:'C/2020 F3',  date:'2020-07-18', scope:'Sony a7IV + 85mm GM',          camera:'Sony a7IV (H-α mod)', exposure:'45 min',         location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/Comet_NEOWISE' },
    { id:'c03', title:'Comet ZTF',            catalog:'C/2022 E3',  date:'2023-02-02', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 10 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/C/2022_E3_(ZTF)' },
    { id:'c04', title:'Pons-Brooks',          catalog:'12P',        date:'2024-04-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 45 min',   location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/12P/Pons%E2%80%93Brooks' },
    { id:'c05', title:'Comet Leonard',        catalog:'C/2021 A1',  date:'2021-12-14', scope:'William Optics GT81 @ f/5.9', camera:'Sony a7IV (H-α mod)', exposure:'55 min',         location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/Comet_Leonard' },
    { id:'c06', title:'Holmes',               catalog:'17P',        date:'2023-10-25', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 30 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/17P/Holmes' },
    { id:'c07', title:'Wirtanen',             catalog:'46P',        date:'2018-12-20', scope:'Sony a7IV + 85mm GM',          camera:'Sony a7IV (H-α mod)', exposure:'1 hr 0 min',    location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/46P/Wirtanen' },
    { id:'c08', title:'Churyumov-Gerasimenko',catalog:'67P',        date:'2022-11-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',       exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/67P/Churyumov%E2%80%93Gerasimenko' },
    { id:'c09', title:'PanSTARRS 2020',       catalog:'C/2017 T2',  date:'2020-05-14', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/C/2017_T2_(PanSTARRS)' },
    { id:'c10', title:'Giacobini-Zinner',     catalog:'21P',        date:'2018-09-10', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 50 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/21P/Giacobini%E2%80%93Zinner' },
    { id:'c11', title:'Lovejoy',              catalog:'C/2014 Q2',  date:'2015-01-12', scope:'Sony a7IV + 85mm GM',          camera:'Sony a7IV (H-α mod)', exposure:'1 hr 15 min',   location:'San Simeon, CA', url:'https://en.wikipedia.org/wiki/C/2014_Q2_(Lovejoy)' },
    { id:'c12', title:'ATLAS 2019',           catalog:'C/2019 Y4',  date:'2020-04-05', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/C/2019_Y4_(ATLAS)' },
    { id:'c13', title:'Honda-Mrkos-Pajd.',    catalog:'45P',        date:'2017-02-11', scope:'Sony a7IV + 85mm GM',          camera:'Sony a7IV (H-α mod)', exposure:'45 min',         location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/45P/Honda%E2%80%93Mrkos%E2%80%93Paj%C4%8Fu%C5%A1%C3%A1kov%C3%A1' },
    { id:'c14', title:'Schwassmann-W. 3',     catalog:'73P',        date:'2022-05-30', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/73P/Schwassmann%E2%80%93Wachmann' },
    { id:'c15', title:'Nishimura',            catalog:'C/2023 P1',  date:'2023-09-06', scope:'William Optics GT81 @ f/5.9', camera:'Sony a7IV (H-α mod)', exposure:'35 min',         location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/C/2023_P1_(Nishimura)' },
    { id:'c16', title:'Tsuchinshan 1',        catalog:'62P',        date:'2023-12-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 40 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/62P/Tsuchinshan' },
    { id:'c17', title:'Tuttle-Giac.-Kresak',  catalog:'41P',        date:'2017-04-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 30 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/41P/Tuttle%E2%80%93Giacobini%E2%80%93Kresak' },
    { id:'c18', title:'Hartley 2',            catalog:'103P',       date:'2023-10-14', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/103P/Hartley' },
    { id:'c19', title:'PanSTARRS K2',         catalog:'C/2017 K2',  date:'2022-07-14', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'3 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/C/2017_K2_(PanSTARRS)' },
    { id:'c20', title:'Finlay',               catalog:'15P',        date:'2021-07-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 20 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/15P/Finlay' },
    { id:'c21', title:'PanSTARRS O3',         catalog:'C/2021 O3',  date:'2022-05-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 10 min',  location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/C/2021_O3_(PanSTARRS)' },
    { id:'c22', title:'Wild 2',               catalog:'81P',        date:'2022-02-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',       exposure:'2 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/81P/Wild' },
    { id:'c23', title:'Iwamoto',              catalog:'C/2018 Y1',  date:'2019-02-12', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'2 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/C/2018_Y1_(Iwamoto)' },
    { id:'c24', title:'PANSTARRS P1',         catalog:'C/2022 P1',  date:'2023-08-18', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',       exposure:'1 hr 50 min',   location:'Morro Bay, CA', url:'https://en.wikipedia.org/wiki/PanSTARRS' },
  ],

  starclusters: [
    { id:'sc01', title:'Hercules Cluster',      catalog:'M13',       date:'2024-06-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'3 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_13' },
    { id:'sc02', title:'Great Globular in Ser', catalog:'M5',        date:'2024-05-20', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'4 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_5' },
    { id:'sc03', title:'M3',                    catalog:'M3',        date:'2024-05-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'3 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_3' },
    { id:'sc04', title:'Pleiades',              catalog:'M45',       date:'2024-11-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'8 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Pleiades' },
    { id:'sc05', title:'Beehive Cluster',       catalog:'M44',       date:'2024-03-25', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'5 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Beehive_Cluster' },
    { id:'sc06', title:'Double Cluster',        catalog:'NGC 869/884',date:'2024-10-18',scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'6 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Double_Cluster' },
    { id:'sc07', title:'Wild Duck Cluster',     catalog:'M11',       date:'2024-08-10', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'4 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Wild_Duck_Cluster' },
    { id:'sc08', title:'Omega Centauri',        catalog:'NGC 5139',  date:'2024-04-20', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'7 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Omega_Centauri' },
    { id:'sc09', title:'47 Tucanae',            catalog:'NGC 104',   date:'2024-11-22', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'6 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/47_Tucanae' },
    { id:'sc10', title:'Sagittarius Cluster',   catalog:'M22',       date:'2024-07-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_22' },
    { id:'sc11', title:'Pegasus Cluster',       catalog:'M15',       date:'2024-09-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'5 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_15' },
    { id:'sc12', title:'M92',                   catalog:'M92',       date:'2024-06-28', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'4 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_92' },
    { id:'sc13', title:'M2',                    catalog:'M2',        date:'2024-09-15', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'4 hrs 0 min',   location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Messier_2' },
    { id:'sc14', title:'Butterfly Cluster',     catalog:'M6',        date:'2024-07-22', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'3 hrs 15 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Butterfly_Cluster' },
    { id:'sc15', title:'Ptolemy Cluster',       catalog:'M7',        date:'2024-07-28', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'4 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Ptolemy_Cluster' },
    { id:'sc16', title:'Owl Cluster',           catalog:'NGC 457',   date:'2024-10-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'5 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/NGC_457' },
    { id:'sc17', title:'M35',                   catalog:'M35',       date:'2024-12-18', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'4 hrs 45 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_35' },
    { id:'sc18', title:'M41',                   catalog:'M41',       date:'2025-01-08', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'3 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_41' },
    { id:'sc19', title:'Old Open Cluster',      catalog:'M67',       date:'2024-03-12', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'6 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_67' },
    { id:'sc20', title:'Christmas Tree Cluster',catalog:'NGC 2264',  date:'2024-12-08', scope:'William Optics GT81 @ f/5.9', camera:'ZWO ASI2600MC',     exposure:'5 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Christmas_Tree_Cluster' },
    { id:'sc21', title:'M36',                   catalog:'M36',       date:'2024-12-22', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'3 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_36' },
    { id:'sc22', title:'M37',                   catalog:'M37',       date:'2024-12-25', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MC',     exposure:'4 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Messier_37' },
    { id:'sc23', title:'M4',                    catalog:'M4',        date:'2024-06-05', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Messier_4' },
    { id:'sc24', title:'M10',                   catalog:'M10',       date:'2024-06-18', scope:'Celestron EdgeHD 11" @ f/7',  camera:'ZWO ASI2600MM Pro', exposure:'3 hrs 45 min',  location:'Paso Robles, CA', url:'https://en.wikipedia.org/wiki/Messier_10' },
  ],

  widefield: [
    { id:'w01', title:'Milky Way Core',          catalog:'Sagittarius',      date:'2024-06-15', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Galactic_Center' },
    { id:'w02', title:'Rho Ophiuchi Complex',     catalog:'Rho Oph',          date:'2024-06-22', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Rho_Ophiuchi_cloud_complex' },
    { id:'w03', title:'Scorpius Region',          catalog:'Scorpius',         date:'2024-06-28', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Scorpius' },
    { id:'w04', title:'Cygnus Region',            catalog:'Cygnus',           date:'2024-08-10', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Cygnus_(constellation)' },
    { id:'w05', title:'Orion Region',             catalog:'Orion',            date:'2024-12-08', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Orion_(constellation)' },
    { id:'w06', title:'Perseus Molecular Cloud',  catalog:'Perseus',          date:'2024-10-18', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'5 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Perseus_molecular_cloud' },
    { id:'w07', title:'Barnard\'s Loop',          catalog:'Sh2-276',          date:'2024-12-15', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'6 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Barnard%27s_Loop' },
    { id:'w08', title:'California Nebula Region', catalog:'NGC 1499 Wide',   date:'2024-12-02', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/California_Nebula' },
    { id:'w09', title:'Cassiopeia Star Field',    catalog:'Cassiopeia',       date:'2024-10-25', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Cassiopeia_(constellation)' },
    { id:'w10', title:'Summer Triangle',          catalog:'Lyra/Cygnus/Aql',  date:'2024-08-20', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Summer_Triangle' },
    { id:'w11', title:'Antares & Heart of Sco.',  catalog:'Antares Region',   date:'2024-06-05', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Antares' },
    { id:'w12', title:'Heart & Soul Nebulae',     catalog:'IC 1805/1848',     date:'2024-11-28', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'5 hrs 30 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Heart_Nebula' },
    { id:'w13', title:'The Great Rift',           catalog:'Milky Way',        date:'2024-07-25', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Great_Rift_(astronomy)' },
    { id:'w14', title:'Corona Australis Region',  catalog:'CrA',              date:'2024-08-02', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Corona_Australis' },
    { id:'w15', title:'Lupus Clouds',             catalog:'Lupus',            date:'2024-06-30', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 20 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Lupus_(constellation)' },
    { id:'w16', title:'Aquila Region',            catalog:'Aquila',           date:'2024-08-15', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 50 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Aquila_(constellation)' },
    { id:'w17', title:'Cepheus Dark Nebulae',     catalog:'Cepheus',          date:'2024-09-22', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Cepheus_(constellation)' },
    { id:'w18', title:'Auriga Region',            catalog:'Auriga',           date:'2024-12-20', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 30 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Auriga_(constellation)' },
    { id:'w19', title:'Monoceros Region',         catalog:'Monoceros',        date:'2025-01-18', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 0 min',   location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Monoceros' },
    { id:'w20', title:'Winter Hexagon',           catalog:'Winter Hex.',      date:'2024-12-28', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 15 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Winter_Hexagon' },
    { id:'w21', title:'Vela Supernova Region',    catalog:'Vela',             date:'2024-03-10', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 0 min',   location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Vela_Supernova_Remnant' },
    { id:'w22', title:'Sagittarius Starcloud',    catalog:'M24',              date:'2024-07-18', scope:'Sony a7IV + 85mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'2 hrs 40 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Sagittarius_Star_Cloud' },
    { id:'w23', title:'Puppis-Vela Arc',          catalog:'Puppis/Vela',      date:'2024-03-18', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'3 hrs 45 min',  location:'Carrizo Plain NM, CA', url:'https://en.wikipedia.org/wiki/Puppis' },
    { id:'w24', title:'Galactic Anticenter',      catalog:'Auriga/Gem.',      date:'2025-01-08', scope:'Sony a7IV + 24mm GM',  camera:'Sony a7IV (H-α mod)', exposure:'4 hrs 20 min',  location:'Cambria, CA', url:'https://en.wikipedia.org/wiki/Galactic_anticenter' },
  ],
};

/* Attach WebP paths + placehold.co fallbacks */
Object.keys(GALLERIES).forEach(cat => {
  GALLERIES[cat].forEach(img => {
    img.thumb         = `images/thumbs/${img.id}.webp`;
    img.full          = `images/full/${img.id}.webp`;
    img.thumbFallback = thumb(cat, img.catalog);
    img.fullFallback  = full(cat, img.catalog);
  });
});

const ITEMS_PER_PAGE = 12;

/* ── Helpers ─────────────────────────────────────────────────*/
function getCurrentPage() {
  const p = parseInt(new URLSearchParams(location.search).get('page')) || 1;
  return Math.max(1, p);
}

function galleryPageFile(cat) {
  return `gallery-${cat}.html`;
}

/* ── Gallery Render ──────────────────────────────────────────*/
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  const cat    = container.dataset.category;
  const items  = GALLERIES[cat] || [];
  const page   = getCurrentPage();
  const total  = Math.ceil(items.length / ITEMS_PER_PAGE);
  const start  = (page - 1) * ITEMS_PER_PAGE;
  const slice  = items.slice(start, start + ITEMS_PER_PAGE);

  const countEl = document.getElementById('gallery-count');
  if (countEl) countEl.textContent = `${items.length} images`;

  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = slice.map((img, idx) => `
    <div class="gal-item" role="listitem">
      <button class="gal-btn" data-index="${start + idx}" data-category="${cat}"
              aria-label="View ${img.title}">
        <img class="gal-img" src="${img.thumb}"
             onerror="this.onerror=null;this.src='${img.thumbFallback}'"
             alt="${img.title}" loading="lazy">
        <div class="gal-footer">
          <span class="gal-catalog">${img.catalog}</span>
          <span class="gal-title">${img.title}</span>
        </div>
      </button>
    </div>
  `).join('');

  grid.querySelectorAll('.gal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox(parseInt(btn.dataset.index), btn.dataset.category);
    });
  });

  renderPagination(cat, page, total);
}

function renderPagination(cat, current, total) {
  const nav = document.getElementById('pagination');
  if (!nav || total <= 1) { if (nav) nav.innerHTML = ''; return; }
  const file = galleryPageFile(cat);
  let html = '';
  if (current > 1)     html += `<a class="pag-btn" href="${file}?page=${current-1}">‹ Prev</a>`;
  for (let i = 1; i <= total; i++) {
    html += `<a class="pag-btn${i === current ? ' pag-active' : ''}" href="${file}?page=${i}">${i}</a>`;
  }
  if (current < total) html += `<a class="pag-btn" href="${file}?page=${current+1}">Next ›</a>`;
  nav.innerHTML = html;
}

/* ── Lightbox ────────────────────────────────────────────────*/
let _lbCat   = '';
let _lbIndex = 0;

function buildLightbox() {
  if (document.getElementById('lightbox')) return;
  const el = document.createElement('div');
  el.id = 'lightbox';
  el.className = 'lightbox';
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('role', 'dialog');
  el.innerHTML = `
    <div class="lb-inner">
      <div class="lb-img-wrap">
        <img id="lb-img" class="lb-img" src="" alt="">
      </div>
      <div class="lb-bar">
        <div class="lb-title-wrap">
          <span id="lb-catalog" class="lb-catalog"></span>
          <span id="lb-title"   class="lb-title"></span>
        </div>
        <div class="lb-actions">
          <button id="lb-btn-info" class="lb-action-btn">More Info</button>
          <button id="lb-btn-close" class="lb-action-btn lb-close-btn" aria-label="Close">✕</button>
        </div>
      </div>
      <div class="lb-counter-wrap">
        <span id="lb-counter" class="lb-counter"></span>
      </div>
    </div>
    <button id="lb-prev" class="lb-arrow lb-arrow-prev" aria-label="Previous">‹</button>
    <button id="lb-next" class="lb-arrow lb-arrow-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(el);

  el.addEventListener('click', e => { if (e.target === el) closeLightbox(); });
  document.getElementById('lb-btn-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', lbPrev);
  document.getElementById('lb-next').addEventListener('click', lbNext);
  document.getElementById('lb-btn-info').addEventListener('click', () => {
    const items = GALLERIES[_lbCat] || [];
    openModal(items[_lbIndex]);
  });
}

function openLightbox(index, cat) {
  buildLightbox();
  buildModal();
  _lbCat   = cat;
  _lbIndex = index;
  lbUpdate();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function lbUpdate() {
  const items = GALLERIES[_lbCat] || [];
  const item  = items[_lbIndex];
  if (!item) return;
  const lbImg = document.getElementById('lb-img');
  lbImg.src = item.full;
  lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = item.fullFallback; };
  document.getElementById('lb-img').alt     = item.title;
  document.getElementById('lb-catalog').textContent = item.catalog;
  document.getElementById('lb-title').textContent   = item.title;
  document.getElementById('lb-counter').textContent = `${_lbIndex + 1} / ${items.length}`;
  document.getElementById('lb-prev').style.display = _lbIndex > 0 ? '' : 'none';
  document.getElementById('lb-next').style.display = _lbIndex < items.length - 1 ? '' : 'none';
}

function lbPrev() { if (_lbIndex > 0) { _lbIndex--; lbUpdate(); } }
function lbNext() {
  const items = GALLERIES[_lbCat] || [];
  if (_lbIndex < items.length - 1) { _lbIndex++; lbUpdate(); }
}

/* ── More Info Modal ─────────────────────────────────────────*/
function buildModal() {
  if (document.getElementById('info-modal')) return;
  const el = document.createElement('div');
  el.id = 'info-modal';
  el.className = 'modal-overlay';
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('role', 'dialog');
  el.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <div id="modal-catalog" class="modal-catalog"></div>
          <h2 id="modal-title" class="modal-title"></h2>
        </div>
        <button id="modal-close" class="modal-close" aria-label="Close">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-row"><span class="modal-label">Date Captured</span><span id="modal-date"     class="modal-value"></span></div>
        <div class="modal-row"><span class="modal-label">Telescope</span>    <span id="modal-scope"    class="modal-value"></span></div>
        <div class="modal-row"><span class="modal-label">Camera</span>       <span id="modal-camera"   class="modal-value"></span></div>
        <div class="modal-row"><span class="modal-label">Total Exposure</span><span id="modal-exp"     class="modal-value"></span></div>
        <div class="modal-row"><span class="modal-label">Location</span>     <span id="modal-location" class="modal-value"></span></div>
      </div>
      <a id="modal-ref" class="modal-ref-btn" target="_blank" rel="noopener noreferrer">
        Object Information ↗
      </a>
    </div>
  `;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if (e.target === el) closeModal(); });
  document.getElementById('modal-close').addEventListener('click', closeModal);
}

function openModal(item) {
  if (!item) return;
  buildModal();
  document.getElementById('modal-catalog').textContent  = item.catalog;
  document.getElementById('modal-title').textContent    = item.title;
  document.getElementById('modal-date').textContent     = item.date;
  document.getElementById('modal-scope').textContent    = item.scope;
  document.getElementById('modal-camera').textContent   = item.camera;
  document.getElementById('modal-exp').textContent      = item.exposure;
  document.getElementById('modal-location').textContent = item.location;
  document.getElementById('modal-ref').href             = item.url;
  document.getElementById('info-modal').classList.add('open');
}

function closeModal() {
  const m = document.getElementById('info-modal');
  if (m) m.classList.remove('open');
}

/* ── Keyboard ────────────────────────────────────────────────*/
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')     { closeLightbox(); closeModal(); }
  if (e.key === 'ArrowLeft')  lbPrev();
  if (e.key === 'ArrowRight') lbNext();
});

/* ── Active Nav ──────────────────────────────────────────────*/
function setActiveNav() {
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const nav = a.dataset.nav;
    const active =
      (nav === 'home'              && (file === 'index.html' || file === '')) ||
      (nav === 'new'               && file === 'gallery-new.html') ||
      (nav === 'galaxies'          && file === 'gallery-galaxies.html') ||
      (nav === 'emissionnebula'    && file === 'gallery-emissionnebula.html') ||
      (nav === 'reflectionnebula'  && file === 'gallery-reflectionnebula.html') ||
      (nav === 'comets'            && file === 'gallery-comets.html') ||
      (nav === 'starclusters'       && file === 'gallery-starclusters.html') ||
      (nav === 'widefield'         && file === 'gallery-widefield.html') ||
      (nav === 'about'             && file === 'about.html') ||
      (nav === 'contact'           && file === 'contact.html');
    if (active) a.classList.add('nav-active');
  });
}

/* ── Hamburger ───────────────────────────────────────────────*/
function initHamburger() {
  const btn   = document.getElementById('nav-hamburger');
  const panel = document.getElementById('nav-mobile');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.classList.toggle('open', open);
  });
  document.querySelectorAll('#nav-mobile a').forEach(a =>
    a.addEventListener('click', () => { panel.classList.remove('open'); btn.setAttribute('aria-expanded', false); btn.classList.remove('open'); })
  );
}

/* ── Star Canvas ─────────────────────────────────────────────*/
function initStars() {
  document.querySelectorAll('.hero-stars').forEach(canvas => {
    if (!(canvas instanceof HTMLCanvasElement)) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width  = canvas.offsetWidth  || 1440;
    const H = canvas.height = canvas.offsetHeight || 600;
    for (let i = 0; i < 260; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 1.2;
      const a = Math.random() * 0.7 + 0.1;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a.toFixed(2)})`;
      ctx.fill();
    }
    /* A few faint warm/cool tinted stars */
    const tints = ['rgba(220,225,255,0.55)', 'rgba(255,235,200,0.45)', 'rgba(200,225,255,0.5)'];
    for (let i = 0; i < 14; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * W, Math.random() * H, 1.3, 0, Math.PI * 2);
      ctx.fillStyle = tints[i % 3];
      ctx.fill();
    }
  });
}

/* ── Contact Form ────────────────────────────────────────────*/
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Send Message';
      document.getElementById('form-success').classList.add('visible');
    }, 1200);
  });
}

/* ── Init ────────────────────────────────────────────────────*/
setActiveNav();
initHamburger();
initStars();
if (document.getElementById('gallery-container')) renderGallery();
if (document.getElementById('contact-form'))      initContactForm();
