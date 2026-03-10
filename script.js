// ─── Places DB ────────────────────────────────────────────────────────────────
const DB = {
  "varanasi":    [{n:"Kashi Vishwanath Temple",t:"🛕"},{n:"Dashashwamedh Ghat",t:"🌊"},{n:"Sarnath",t:"☸️"},{n:"Manikarnika Ghat",t:"🔥"},{n:"Ramnagar Fort",t:"🏰"},{n:"Assi Ghat",t:"🌅"},{n:"Sankat Mochan Temple",t:"🛕"},{n:"Tulsi Manas Temple",t:"🛕"},{n:"Chunar Fort",t:"🏰"},{n:"Alamgir Mosque",t:"🕌"},{n:"Bharat Mata Temple",t:"🛕"},{n:"BHU Museum",t:"🏛️"}],
  "jaipur":      [{n:"Hawa Mahal",t:"🏯"},{n:"Amber Fort",t:"🏰"},{n:"City Palace",t:"👑"},{n:"Jantar Mantar",t:"🔭"},{n:"Nahargarh Fort",t:"🏰"},{n:"Jaigarh Fort",t:"🏰"},{n:"Johari Bazaar",t:"🛍️"},{n:"Albert Hall Museum",t:"🏛️"},{n:"Birla Mandir",t:"🛕"},{n:"Galtaji Temple",t:"🛕"},{n:"Sisodia Rani Garden",t:"🌸"},{n:"Chokhi Dhani",t:"🎪"}],
  "agra":        [{n:"Taj Mahal",t:"🕌"},{n:"Agra Fort",t:"🏰"},{n:"Fatehpur Sikri",t:"🏛️"},{n:"Mehtab Bagh",t:"🌿"},{n:"Itmad-ud-Daulah",t:"🕌"},{n:"Kinari Bazaar",t:"🛍️"},{n:"Akbar's Tomb",t:"🏛️"},{n:"Jama Masjid",t:"🕌"},{n:"Ram Bagh",t:"🌸"},{n:"Mankameshwar Temple",t:"🛕"}],
  "goa":         [{n:"Calangute Beach",t:"🏖️"},{n:"Basilica of Bom Jesus",t:"⛪"},{n:"Dudhsagar Falls",t:"💧"},{n:"Fort Aguada",t:"🏰"},{n:"Anjuna Beach",t:"🛍️"},{n:"Palolem Beach",t:"🌊"},{n:"Baga Beach",t:"🏖️"},{n:"Se Cathedral",t:"⛪"},{n:"Chapora Fort",t:"🏰"},{n:"Vagator Beach",t:"🌊"},{n:"Colva Beach",t:"🏖️"},{n:"Butterfly Beach",t:"🏖️"}],
  "mumbai":      [{n:"Gateway of India",t:"🏛️"},{n:"Marine Drive",t:"🌊"},{n:"Elephanta Caves",t:"🗿"},{n:"Juhu Beach",t:"🏖️"},{n:"CST Railway Station",t:"🚉"},{n:"Siddhivinayak Temple",t:"🛕"},{n:"Haji Ali Dargah",t:"🕌"},{n:"Chowpatty Beach",t:"🏖️"},{n:"Colaba Causeway",t:"🛍️"},{n:"Sanjay Gandhi National Park",t:"🌿"},{n:"Bandra-Worli Sea Link",t:"🌉"}],
  "delhi":       [{n:"Red Fort",t:"🏰"},{n:"Qutub Minar",t:"🗼"},{n:"India Gate",t:"🏛️"},{n:"Lotus Temple",t:"🌸"},{n:"Humayun's Tomb",t:"🕌"},{n:"Chandni Chowk",t:"🛍️"},{n:"Akshardham Temple",t:"🛕"},{n:"Jama Masjid",t:"🕌"},{n:"Lodi Garden",t:"🌿"},{n:"National Museum",t:"🏛️"},{n:"Hauz Khas Village",t:"🏘️"},{n:"Dilli Haat",t:"🛍️"}],
  "kolkata":     [{n:"Victoria Memorial",t:"🏛️"},{n:"Howrah Bridge",t:"🌉"},{n:"Dakshineswar Temple",t:"🛕"},{n:"Park Street",t:"🛍️"},{n:"Indian Museum",t:"🏛️"},{n:"Sundarbans",t:"🌿"},{n:"Marble Palace",t:"🏯"},{n:"Kalighat Temple",t:"🛕"},{n:"Belur Math",t:"🛕"},{n:"Eco Park",t:"🌿"}],
  "hyderabad":   [{n:"Charminar",t:"🕌"},{n:"Golconda Fort",t:"🏰"},{n:"Hussain Sagar Lake",t:"🏞️"},{n:"Ramoji Film City",t:"🎬"},{n:"Salar Jung Museum",t:"🏛️"},{n:"Laad Bazaar",t:"🛍️"},{n:"Birla Mandir",t:"🛕"},{n:"Qutb Shahi Tombs",t:"🕌"},{n:"Nehru Zoological Park",t:"🌿"},{n:"Mecca Masjid",t:"🕌"}],
  "chennai":     [{n:"Marina Beach",t:"🏖️"},{n:"Kapaleeshwarar Temple",t:"🛕"},{n:"Fort St. George",t:"🏰"},{n:"Mahabalipuram",t:"🗿"},{n:"Government Museum",t:"🏛️"},{n:"Elliot's Beach",t:"🌊"},{n:"Santhome Cathedral",t:"⛪"},{n:"Arignar Anna Zoo",t:"🌿"},{n:"Covelong Beach",t:"🏖️"}],
  "bangalore":   [{n:"Lalbagh Botanical Garden",t:"🌸"},{n:"Bangalore Palace",t:"🏯"},{n:"Cubbon Park",t:"🌿"},{n:"ISKCON Temple",t:"🛕"},{n:"Commercial Street",t:"🛍️"},{n:"Nandi Hills",t:"⛰️"},{n:"Bannerghatta National Park",t:"🌿"},{n:"Vidhana Soudha",t:"🏛️"},{n:"Ulsoor Lake",t:"🏞️"}],
  "mysore":      [{n:"Mysore Palace",t:"🏯"},{n:"Chamundi Hills",t:"🛕"},{n:"Brindavan Gardens",t:"🌸"},{n:"Mysore Zoo",t:"🌿"},{n:"St. Philomena's Church",t:"⛪"},{n:"Devaraja Market",t:"🛍️"},{n:"Jaganmohan Palace",t:"🏯"},{n:"Karanji Lake",t:"🏞️"},{n:"Rail Museum",t:"🏛️"}],
  "udaipur":     [{n:"City Palace",t:"👑"},{n:"Lake Pichola",t:"🏞️"},{n:"Jag Mandir",t:"🏯"},{n:"Saheliyon ki Bari",t:"🌸"},{n:"Fateh Sagar Lake",t:"🏞️"},{n:"Jagdish Temple",t:"🛕"},{n:"Sajjangarh Palace",t:"🏯"},{n:"Eklingji Temple",t:"🛕"}],
  "jodhpur":     [{n:"Mehrangarh Fort",t:"🏰"},{n:"Jaswant Thada",t:"🕌"},{n:"Umaid Bhawan Palace",t:"🏯"},{n:"Clock Tower",t:"🗼"},{n:"Mandore Gardens",t:"🌿"},{n:"Sardar Market",t:"🛍️"},{n:"Kaylana Lake",t:"🏞️"},{n:"Osian Temples",t:"🛕"}],
  "amritsar":    [{n:"Golden Temple",t:"🛕"},{n:"Jallianwala Bagh",t:"🌹"},{n:"Wagah Border",t:"🚩"},{n:"Durgiana Temple",t:"🛕"},{n:"Gobindgarh Fort",t:"🏰"},{n:"Hall Bazaar",t:"🛍️"},{n:"Partition Museum",t:"🏛️"}],
  "rishikesh":   [{n:"Laxman Jhula",t:"🌉"},{n:"Triveni Ghat",t:"🌊"},{n:"Neelkanth Mahadev",t:"🛕"},{n:"Beatles Ashram",t:"☮️"},{n:"Ram Jhula",t:"🌉"},{n:"Rajaji National Park",t:"🌿"},{n:"Neer Garh Waterfall",t:"💧"},{n:"Ganga Aarti",t:"🔥"}],
  "shimla":      [{n:"The Ridge",t:"🏔️"},{n:"Mall Road",t:"🛍️"},{n:"Jakhu Temple",t:"🛕"},{n:"Christ Church",t:"⛪"},{n:"Kufri",t:"⛷️"},{n:"Toy Train",t:"🚂"},{n:"Viceregal Lodge",t:"🏛️"},{n:"Chadwick Falls",t:"💧"}],
  "manali":      [{n:"Rohtang Pass",t:"❄️"},{n:"Solang Valley",t:"🏔️"},{n:"Hadimba Temple",t:"🛕"},{n:"Old Manali",t:"🌿"},{n:"Beas River",t:"🌊"},{n:"Naggar Castle",t:"🏰"},{n:"Jogini Waterfall",t:"💧"},{n:"Vashisht Hot Spring",t:"♨️"}],
  "ooty":        [{n:"Nilgiri Mountain Railway",t:"🚂"},{n:"Ooty Lake",t:"🏞️"},{n:"Botanical Gardens",t:"🌸"},{n:"Doddabetta Peak",t:"⛰️"},{n:"Rose Garden",t:"🌹"},{n:"Tea Museum",t:"🍵"},{n:"Pykara Lake",t:"🏞️"},{n:"Avalanche Lake",t:"🏞️"}],
  "kochi":       [{n:"Fort Kochi Beach",t:"🏖️"},{n:"Chinese Fishing Nets",t:"🎣"},{n:"Mattancherry Palace",t:"🏯"},{n:"Jew Town",t:"🛍️"},{n:"Kerala Backwaters",t:"🌊"},{n:"Cherai Beach",t:"🏖️"},{n:"Santa Cruz Basilica",t:"⛪"},{n:"Hill Palace",t:"👑"}],
  "pune":        [{n:"Shaniwar Wada",t:"🏰"},{n:"Aga Khan Palace",t:"🏛️"},{n:"Sinhagad Fort",t:"🏰"},{n:"Osho Ashram",t:"☮️"},{n:"Dagdusheth Temple",t:"🛕"},{n:"Koregaon Park",t:"🌿"},{n:"Mulshi Lake",t:"🏞️"},{n:"Lonavala",t:"⛰️"}],
  "leh":         [{n:"Pangong Lake",t:"🏞️"},{n:"Leh Palace",t:"🏯"},{n:"Nubra Valley",t:"🐪"},{n:"Thiksey Monastery",t:"🗿"},{n:"Magnetic Hill",t:"⛰️"},{n:"Shanti Stupa",t:"☸️"},{n:"Hemis Monastery",t:"🛕"},{n:"Khardung La Pass",t:"🏔️"},{n:"Tso Moriri Lake",t:"🏞️"}],
  "darjeeling":  [{n:"Tiger Hill",t:"🌅"},{n:"Darjeeling Himalayan Railway",t:"🚂"},{n:"Tea Gardens",t:"🍵"},{n:"Peace Pagoda",t:"☸️"},{n:"Padmaja Naidu Zoo",t:"🌿"},{n:"Observatory Hill",t:"🛕"},{n:"Himalayan Mountaineering Institute",t:"🏛️"},{n:"Mirik Lake",t:"🏞️"}],
  "srinagar":    [{n:"Dal Lake",t:"🏞️"},{n:"Mughal Gardens",t:"🌸"},{n:"Shankaracharya Temple",t:"🛕"},{n:"Hazratbal Mosque",t:"🕌"},{n:"Nishat Bagh",t:"🌸"},{n:"Shalimar Bagh",t:"🌸"},{n:"Gulmarg",t:"⛷️"},{n:"Pahalgam",t:"🌿"}],
  "alleppey":    [{n:"Alleppey Backwaters",t:"🌊"},{n:"Alappuzha Beach",t:"🏖️"},{n:"Houseboat Cruise",t:"⛵"},{n:"Kumarakom Bird Sanctuary",t:"🦢"},{n:"Krishnapuram Palace",t:"🏯"},{n:"Vembanad Lake",t:"🏞️"},{n:"Ambalapuzha Temple",t:"🛕"}],
  "pondicherry": [{n:"Promenade Beach",t:"🏖️"},{n:"Auroville",t:"☮️"},{n:"French Quarter",t:"🏘️"},{n:"Sri Aurobindo Ashram",t:"🌸"},{n:"Paradise Beach",t:"🏖️"},{n:"Manakula Vinayagar Temple",t:"🛕"},{n:"Rock Beach",t:"🌊"},{n:"Botanical Garden",t:"🌸"}],
  "hampi":       [{n:"Virupaksha Temple",t:"🛕"},{n:"Vittala Temple",t:"🛕"},{n:"Hampi Bazaar",t:"🛍️"},{n:"Elephant Stables",t:"🐘"},{n:"Lotus Mahal",t:"🏯"},{n:"Tungabhadra River",t:"🌊"},{n:"Matanga Hill",t:"⛰️"},{n:"Queen's Bath",t:"🏛️"}],
  "munnar":      [{n:"Eravikulam National Park",t:"🌿"},{n:"Tea Plantations",t:"🍵"},{n:"Mattupetty Dam",t:"💧"},{n:"Top Station",t:"⛰️"},{n:"Anamudi Peak",t:"🏔️"},{n:"Kundala Lake",t:"🏞️"},{n:"Tea Museum",t:"🏛️"},{n:"Attukal Waterfalls",t:"💧"}],
  "coorg":       [{n:"Abbey Falls",t:"💧"},{n:"Raja's Seat",t:"👑"},{n:"Namdroling Monastery",t:"☸️"},{n:"Dubare Elephant Camp",t:"🐘"},{n:"Talacauvery",t:"🌊"},{n:"Madikeri Fort",t:"🏰"},{n:"Iruppu Falls",t:"💧"},{n:"Coffee Plantations",t:"🌿"}],
  "haridwar":    [{n:"Har Ki Pauri",t:"🌊"},{n:"Mansa Devi Temple",t:"🛕"},{n:"Chandi Devi Temple",t:"🛕"},{n:"Rajaji National Park",t:"🌿"},{n:"Ganga Aarti",t:"🔥"},{n:"Maya Devi Temple",t:"🛕"},{n:"Daksha Mahadev Temple",t:"🛕"}],
  "tirupati":    [{n:"Tirumala Venkateswara Temple",t:"🛕"},{n:"Kapila Theertham",t:"🌊"},{n:"Chandragiri Fort",t:"🏰"},{n:"Talakona Waterfall",t:"💧"},{n:"Sri Kalahasti",t:"🛕"},{n:"ISKCON Temple",t:"🛕"}],
};

const CITY_LIST = [...new Set([
  ...Object.keys(DB).map(k=>k.split(' ').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ')),
  "Ajmer","Khajuraho","Lucknow","Bhopal","Guwahati","Shillong","Gwalior","Ujjain",
  "Ranthambore","Varkala","Nainital","Mussoorie","Mathura","Vrindavan","Rameswaram",
  "Kanyakumari","Gangtok","Pelling","Tawang","Mcleod Ganj","Dharamsala","Kasol",
  "Spiti","Auli","Kedarnath","Badrinath","Gangotri","Mangalore","Coimbatore",
  "Madurai","Nashik","Indore","Nagpur","Visakhapatnam","Bikaner","Pushkar",
  "Mount Abu","Orchha","Wayanad","Kovalam","Thrissur","Chikmagalur","Dibrugarh"
])];

// ─── State ─────────────────────────────────────────────────────────────────────
let bucket = [], notes = [];
let userLat=null, userLng=null, hiIdx=-1, inputTimer=null;
let currentUser = null;

// ─── Auth helpers ──────────────────────────────────────────────────────────────
async function sha256(str){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
function getUsers(){ try{return JSON.parse(localStorage.getItem('tp_users')||'{}')}catch{return{}} }
function saveUsers(u){ localStorage.setItem('tp_users',JSON.stringify(u)); }
function getSession(){ try{const s=JSON.parse(sessionStorage.getItem('tp_sess'));return(s&&Date.now()-s.ts<3600000)?s:null;}catch{return null;} }
function setSession(e,n){ sessionStorage.setItem('tp_sess',JSON.stringify({email:e,name:n,ts:Date.now()})); }
function clearSession(){ sessionStorage.removeItem('tp_sess'); }

// Per-user data storage
function getUserData(email){
  try{ return JSON.parse(localStorage.getItem('tp_data_'+btoa(email))||'{"bucket":[],"notes":[]}'); }catch{ return {bucket:[],notes:[]}; }
}
function saveUserData(email,data){ localStorage.setItem('tp_data_'+btoa(email),JSON.stringify(data)); }

function showAuthMsg(txt,type){
  const el=document.getElementById('authMsg');
  el.textContent=(type==='error'?'⚠️ ':'✅ ')+txt;
  el.className='msg '+type;
}
function clearAuthMsg(){ document.getElementById('authMsg').className='msg'; }

function toggleEye(id,btn){
  const i=document.getElementById(id);
  i.type=i.type==='password'?'text':'password';
  btn.textContent=i.type==='text'?'🙈':'👁';
}

function checkStrength(pw){
  const segs=[document.getElementById('s1'),document.getElementById('s2'),document.getElementById('s3'),document.getElementById('s4')];
  const lbl=document.getElementById('slbl');
  let sc=0;
  if(pw.length>=8)sc++;if(/[A-Z]/.test(pw))sc++;if(/[0-9]/.test(pw))sc++;if(/[^A-Za-z0-9]/.test(pw))sc++;
  const cols=['#FF4444','#FF8C00','#FFD700','#4CAF50'],labs=['Weak','Fair','Good','Strong'];
  segs.forEach((s,i)=>s.style.background=i<sc?cols[sc-1]:'rgba(255,255,255,.1)');
  lbl.textContent=sc>0?labs[sc-1]:''; lbl.style.color=sc>0?cols[sc-1]:'transparent';
}

function addRipple(btn,e){
  const r=document.createElement('span'); r.className='ripple';
  const rect=btn.getBoundingClientRect(),size=Math.max(rect.width,rect.height);
  r.style.cssText=`width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;`;
  btn.appendChild(r); setTimeout(()=>r.remove(),600);
}

function switchAuthTab(tab){
  document.querySelectorAll('.auth-tab').forEach((t,i)=>t.classList.toggle('active',(i===0&&tab==='login')||(i===1&&tab==='register')));
  document.getElementById('loginForm').classList.toggle('active',tab==='login');
  document.getElementById('registerForm').classList.toggle('active',tab==='register');
  clearAuthMsg();
}

async function doRegister(e){
  addRipple(document.getElementById('regBtn'),e); clearAuthMsg();
  const name=document.getElementById('rName').value.trim();
  const email=document.getElementById('rEmail').value.trim().toLowerCase();
  const pass=document.getElementById('rPass').value;
  const pass2=document.getElementById('rPass2').value;
  if(!name){showAuthMsg('Please enter your name','error');return;}
  if(!email||!email.includes('@')){showAuthMsg('Enter a valid email','error');return;}
  if(pass.length<8){showAuthMsg('Password must be at least 8 characters','error');return;}
  if(pass!==pass2){showAuthMsg('Passwords do not match','error');return;}
  const users=getUsers();
  if(users[email]){showAuthMsg('Account already exists — sign in','error');return;}
  const btn=document.getElementById('regBtn');
  btn.disabled=true; btn.textContent='Creating…';
  try{
    const hash=await sha256(pass+email);
    users[email]={name,email,hash,created:Date.now()};
    saveUsers(users);
    saveUserData(email,{bucket:[],notes:[]});
    showAuthMsg('Account created! Signing you in…','success');
    setTimeout(()=>{setSession(email,name);launchApp(email,name);},800);
  }catch{showAuthMsg('Error. Try again.','error');btn.disabled=false;btn.textContent='Create Account →';}
}

async function doLogin(e){
  addRipple(document.getElementById('loginBtn'),e); clearAuthMsg();
  const email=document.getElementById('lEmail').value.trim().toLowerCase();
  const pass=document.getElementById('lPass').value;
  if(!email||!pass){showAuthMsg('Please fill in all fields','error');return;}
  const btn=document.getElementById('loginBtn');
  btn.disabled=true; btn.textContent='Signing in…';
  try{
    const users=getUsers();
    const user=users[email];
    if(!user){await new Promise(r=>setTimeout(r,400));showAuthMsg('No account found with this email','error');btn.disabled=false;btn.textContent='Sign In →';return;}
    const hash=await sha256(pass+email);
    if(hash!==user.hash){await new Promise(r=>setTimeout(r,600));showAuthMsg('Incorrect password','error');btn.disabled=false;btn.textContent='Sign In →';return;}
    showAuthMsg('Welcome back! Loading…','success');
    setTimeout(()=>{setSession(email,user.name);launchApp(email,user.name);},700);
  }catch{showAuthMsg('Error. Try again.','error');btn.disabled=false;btn.textContent='Sign In →';}
}

function doLogout(){
  // Save data before logout
  if(currentUser) saveUserData(currentUser.email,{bucket,notes});
  clearSession(); currentUser=null; bucket=[]; notes=[];
  document.getElementById('appScreen').classList.remove('active');
  document.getElementById('authScreen').classList.add('active');
  // Reset login form
  document.getElementById('lEmail').value='';
  document.getElementById('lPass').value='';
  document.getElementById('loginBtn').disabled=false;
  document.getElementById('loginBtn').textContent='Sign In →';
  clearAuthMsg(); switchAuthTab('login');
}

function launchApp(email,name){
  currentUser={email,name};
  // Load user data
  const data=getUserData(email);
  bucket=data.bucket||[]; notes=data.notes||[];
  // Update UI
  document.getElementById('userLabel').textContent=name.split(' ')[0];
  document.getElementById('userAvatar').textContent=name[0].toUpperCase();
  document.getElementById('authScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');
  switchAppTab('bucket');
  renderCards(); renderNotes(); updateBadges(); updateNoteSelect();
  setTimeout(getLocation,600);
}

// Auto-login on load
window.addEventListener('DOMContentLoaded',()=>{
  const s=getSession();
  if(s){launchApp(s.email,s.name);}
  else{document.getElementById('authScreen').classList.add('active');}
});

// ─── App tabs ──────────────────────────────────────────────────────────────────
function switchAppTab(tab){
  document.querySelectorAll('.app-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.app-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('page-'+tab).classList.add('active');
  document.querySelectorAll('.app-tab')[tab==='bucket'?0:1].classList.add('active');
  if(tab==='notes') renderNotes();
}

// ─── Location ──────────────────────────────────────────────────────────────────
function getLocation(){
  if(!navigator.geolocation){showToast('Geolocation not supported');return;}
  document.getElementById('locText').textContent='⏳ Getting your location…';
  navigator.geolocation.getCurrentPosition(
    pos=>{userLat=pos.coords.latitude.toFixed(6);userLng=pos.coords.longitude.toFixed(6);
      document.getElementById('locText').textContent='✅ Location found — directions enabled!';
      document.querySelector('.loc-dot').style.background='#4CAF50';
      renderCards();},
    ()=>{document.getElementById('locText').textContent='📍 Location denied — using city search';}
  );
}

// ─── URL builders ──────────────────────────────────────────────────────────────
function directionsUrl(city,place){
  const dest=encodeURIComponent(place+', '+city+', India');
  return userLat&&userLng?`https://www.google.com/maps/dir/${userLat},${userLng}/${dest}`:`https://www.google.com/maps/dir/Current+Location/${dest}`;
}
function cityMapsUrl(city){ return `https://www.google.com/maps/search/tourist+places+in+${encodeURIComponent(city)}+India`; }

// ─── Helpers ───────────────────────────────────────────────────────────────────
function capCity(n){return n.trim().split(' ').map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join(' ');}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}
function fmt(ts){return new Date(ts).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});}
function autosave(){if(currentUser)saveUserData(currentUser.email,{bucket,notes});}
function updateBadges(){document.getElementById('bucketBadge').textContent=bucket.length;document.getElementById('notesBadge').textContent=notes.length;}

// ─── Dropdown ──────────────────────────────────────────────────────────────────
function openDropdown(cities){
  document.getElementById('ddList').innerHTML=cities.map(c=>{
    const hint=DB[c.toLowerCase()]?DB[c.toLowerCase()].length+' famous places':'India';
    return `<div class="dd-city" data-city="${c}"><span class="dd-icon">🏙️</span><div><div class="dd-name">${c}</div><div class="dd-hint">${hint}</div></div></div>`;
  }).join('');
  hiIdx=-1; document.getElementById('dropdown').classList.add('show');
}
function closeDropdown(){document.getElementById('dropdown').classList.remove('show');hiIdx=-1;}

// ─── Bucket List ───────────────────────────────────────────────────────────────
function addCity(rawName){
  const name=capCity(rawName); if(!name)return;
  if(bucket.find(b=>b.city.toLowerCase()===name.toLowerCase())){showToast('Already in your list!');return;}
  const places=DB[name.toLowerCase()]||[];
  bucket.unshift({id:Date.now(),city:name,places,visited:false});
  renderCards(); updateBadges(); updateNoteSelect(); autosave();
  document.getElementById('cityInput').value=''; closeDropdown();
  showToast('✅ '+name+' added — '+places.length+' places!');
}

function renderCards(){
  document.getElementById('cnt').textContent=bucket.length?'('+bucket.length+')':'';
  const area=document.getElementById('cardArea');
  if(!bucket.length){area.innerHTML='<div class="empty"><div class="empty-icon">🇮🇳</div><p>Search for any Indian city above to begin!</p></div>';return;}
  area.innerHTML=bucket.map(b=>{
    const dirBanner=(userLat&&userLng)
      ?'<div class="dir-banner">📍 Location detected — click any place for turn-by-turn directions!</div>'
      :'<div class="dir-banner" style="color:#777;border-color:rgba(255,255,255,.08);background:rgba(255,255,255,.02);">⚠️ Allow location for directions from your position</div>';
    const placesHTML=b.places.length
      ?b.places.map(p=>`<a class="place-chip" href="${directionsUrl(b.city,p.n)}" target="_blank" rel="noopener"><span>${p.t}</span>${p.n}<span class="parrow">↗</span></a>`).join('')
      :`<p style="color:var(--muted);font-size:.78rem;">No data — <a href="${cityMapsUrl(b.city)}" target="_blank" style="color:var(--saffron);">Search on Google Maps →</a></p>`;
    const cityNotes=notes.filter(n=>n.cityName===b.city);
    const noteBadge=cityNotes.length?`<div class="has-note-badge">📝 ${cityNotes.length} note${cityNotes.length>1?'s':''}</div>`:'';
    return `<div class="card">
      <div class="card-head">
        <div>
          <div class="city-name">📍 ${b.city}</div>
          <div class="city-meta">${b.places.length} places · tap any for directions</div>
          ${noteBadge}
        </div>
        <div class="card-actions">
          <a class="btn-gmaps" href="${cityMapsUrl(b.city)}" target="_blank" rel="noopener">🗺️ Maps</a>
          <button class="btn-visit ${b.visited?'done':''}" data-action="visit" data-id="${b.id}">${b.visited?'✓ Visited':'Mark Visited'}</button>
          <button class="btn-remove" data-action="remove" data-id="${b.id}">✕</button>
        </div>
      </div>
      ${dirBanner}
      <div class="places-section">
        <div class="places-label">Famous places — click for Google Maps directions</div>
        <div class="places-grid">${placesHTML}</div>
      </div>
    </div>`;
  }).join('');
}

// ─── Notes ─────────────────────────────────────────────────────────────────────
function updateNoteSelect(){
  const sel=document.getElementById('noteCitySelect');
  const prev=sel.value;
  sel.innerHTML='<option value="">— Select a city from your bucket list —</option>'
    +bucket.map(b=>`<option value="${b.id}">${b.city}</option>`).join('');
  if(prev)sel.value=prev;
}

function saveNote(){
  const sel=document.getElementById('noteCitySelect');
  const text=document.getElementById('noteInput').value.trim();
  if(!sel.value){showToast('⚠️ Please select a city first');return;}
  if(!text){showToast('⚠️ Please write something first');return;}
  const cityEntry=bucket.find(b=>b.id===Number(sel.value));
  if(!cityEntry)return;
  notes.unshift({id:Date.now(),cityId:cityEntry.id,cityName:cityEntry.city,text,date:Date.now()});
  document.getElementById('noteInput').value='';
  document.getElementById('charCount').textContent='0 / 1000';
  renderNotes(); renderCards(); updateBadges(); autosave();
  showToast('📝 Note saved for '+cityEntry.city+'!');
}

function renderNotes(){
  updateBadges();
  const area=document.getElementById('notesList');
  if(!notes.length){area.innerHTML='<div class="notes-empty"><div class="notes-empty-icon">💭</div><p>No notes yet. Add cities to your bucket list, then write your thoughts here!</p></div>';return;}
  area.innerHTML=notes.map(n=>
    `<div class="note-card" id="nc-${n.id}">
      <div class="note-card-city">📍 ${n.cityName}</div>
      <div class="note-card-text">${n.text.replace(/</g,'&lt;')}</div>
      <textarea class="note-edit-area" id="nea-${n.id}">${n.text}</textarea>
      <button class="note-upd-btn" onclick="updateNote(${n.id})">💾 Update</button>
      <div class="note-footer">
        <span class="note-date">📅 ${fmt(n.date)}</span>
        <div class="note-actions">
          <button class="note-edit-btn" onclick="toggleEditNote(${n.id})">✏️ Edit</button>
          <button class="note-del-btn" onclick="deleteNote(${n.id})">🗑️ Delete</button>
        </div>
      </div>
    </div>`).join('');
}

function toggleEditNote(id){
  const card=document.getElementById('nc-'+id);
  const editing=card.classList.toggle('editing');
  if(editing){const ta=document.getElementById('nea-'+id);ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length);}
}
function updateNote(id){
  const n=notes.find(x=>x.id===id);
  const ta=document.getElementById('nea-'+id);
  if(n&&ta){n.text=ta.value.trim()||n.text;n.date=Date.now();renderNotes();renderCards();autosave();showToast('✅ Note updated!');}
}
function deleteNote(id){
  const i=notes.findIndex(x=>x.id===id);
  if(i>-1){notes.splice(i,1);renderNotes();renderCards();updateBadges();autosave();showToast('🗑️ Note deleted');}
}

// ─── Events ────────────────────────────────────────────────────────────────────
document.getElementById('noteInput').addEventListener('input',function(){
  document.getElementById('charCount').textContent=this.value.length+' / 1000';
});

document.getElementById('cityInput').addEventListener('input',function(){
  const v=this.value.trim();clearTimeout(inputTimer);hiIdx=-1;
  if(v.length<1){closeDropdown();return;}
  inputTimer=setTimeout(()=>{
    const vl=v.toLowerCase();
    const starts=CITY_LIST.filter(c=>c.toLowerCase().startsWith(vl));
    const contains=CITY_LIST.filter(c=>!c.toLowerCase().startsWith(vl)&&c.toLowerCase().includes(vl));
    const merged=[...starts,...contains].slice(0,9);
    merged.length?openDropdown(merged):closeDropdown();
  },150);
});

document.getElementById('cityInput').addEventListener('keydown',function(e){
  const items=document.querySelectorAll('.dd-city');
  if(e.key==='ArrowDown'){e.preventDefault();hiIdx=Math.min(hiIdx+1,items.length-1);items.forEach((el,i)=>el.classList.toggle('active',i===hiIdx));items[hiIdx]?.scrollIntoView({block:'nearest'});}
  else if(e.key==='ArrowUp'){e.preventDefault();hiIdx=Math.max(hiIdx-1,0);items.forEach((el,i)=>el.classList.toggle('active',i===hiIdx));items[hiIdx]?.scrollIntoView({block:'nearest'});}
  else if(e.key==='Enter'){e.preventDefault();if(hiIdx>=0&&items[hiIdx])addCity(items[hiIdx].dataset.city);else{const v=this.value.trim();if(v)addCity(v);}}
  else if(e.key==='Escape')closeDropdown();
});

document.getElementById('ddList').addEventListener('click',function(e){
  const item=e.target.closest('.dd-city');if(item)addCity(item.dataset.city);
});
document.getElementById('addBtn').addEventListener('click',function(){
  const v=document.getElementById('cityInput').value.trim();if(v)addCity(v);
});
document.getElementById('cardArea').addEventListener('click',function(e){
  const btn=e.target.closest('[data-action]');if(!btn)return;
  const id=Number(btn.dataset.id);
  if(btn.dataset.action==='visit'){const b=bucket.find(x=>x.id===id);if(b){b.visited=!b.visited;renderCards();autosave();}}
  else if(btn.dataset.action==='remove'){const i=bucket.findIndex(x=>x.id===id);if(i>-1){bucket.splice(i,1);renderCards();updateBadges();updateNoteSelect();autosave();}}
});
document.addEventListener('click',function(e){if(!e.target.closest('.wrap'))closeDropdown();});

// Enter key on auth forms
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  const appActive=document.getElementById('appScreen').classList.contains('active');
  if(appActive)return;
  const loginActive=document.getElementById('loginForm').classList.contains('active');
  if(loginActive)doLogin(e);else doRegister(e);
});
