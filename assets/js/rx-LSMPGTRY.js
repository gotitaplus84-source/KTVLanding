var R="ktv-rx-v1",Q=[{q:1,name:"H\xE0m tr\xEAn, b\xEAn ph\u1EA3i",rev:!0},{q:2,name:"H\xE0m tr\xEAn, b\xEAn tr\xE1i",rev:!1},{q:4,name:"H\xE0m d\u01B0\u1EDBi, b\xEAn ph\u1EA3i",rev:!0},{q:3,name:"H\xE0m d\u01B0\u1EDBi, b\xEAn tr\xE1i",rev:!1}],Z=[18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38],S=o=>[...o].sort((d,g)=>Z.indexOf(d)-Z.indexOf(g)),E=o=>o<30,L={mao:{name:"M\xE3o",mats:["zr","ml","zrpfm","pfm","metal"]},cau:{name:"C\u1EA7u r\u0103ng",mats:["zr","ml","zrpfm","pfm","metal"]},implant:{name:"M\xE3o tr\xEAn implant",mats:["zr","ml","zrpfm","pfm","metal"]},inlay:{name:"Inlay",mats:["zr","ml","metal"]},onlay:{name:"Onlay",mats:["zr","ml","metal"]},overlay:{name:"Overlay",mats:["zr","ml"]},cui:{name:"C\xF9i gi\u1EA3",mats:["metal","zr"]}},q={zr:"Zirconia nguy\xEAn kh\u1ED1i",ml:"Zirconia Multilayer",zrpfm:"S\u1EE9 \u0111\u1EAFp tr\xEAn s\u01B0\u1EDDn zirconia",pfm:"S\u1EE9 tr\xEAn s\u01B0\u1EDDn kim lo\u1EA1i",metal:"To\xE0n kim lo\u1EA1i"},_=["A1","A2","A3","A3.5","A4","B1","B2","B3","B4","C1","C2","C3","C4","D2","D3","D4"],m="Labo \u0111\u1EC1 xu\u1EA5t",K="D\xF2ng kh\xE1c (ghi ch\xFA)",h=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),V={get(){try{return JSON.parse(localStorage.getItem(R))||null}catch{return null}},set(o){try{localStorage.setItem(R,JSON.stringify(o))}catch{}}};function W(o){let d=JSON.parse(document.getElementById("rx-data").textContent),g=d.zirconia.map(t=>t.name),F=t=>t==="pfm"||t==="metal"?[...d.metal,m]:t==="ml"?[...d.zirconia.filter(e=>e.ml).map(e=>e.name),m,K]:[...g,m,K],M=t=>(d.zirconia.find(e=>e.name===t)||{}).years||null,H=t=>t.mat!=="metal"&&t.type!=="cui",I=()=>({clinic:"",doctor:"",phone:"",patient:"",due:"",imp:"scan",opp:!0,bite:!0,photo:!1,etch:!1,note:"",items:[]}),U=V.get(),n=Object.assign(I(),U||{}),p=new Set,s={type:"mao",mat:"zr",brand:g[0]||m,shade:"A2",sys:"",abut:m,ret:m,note:""},X=({q:t,name:e,rev:a})=>{let l=[1,2,3,4,5,6,7,8].map(c=>t*10+c);return a&&l.reverse(),`<div class="rx-q rx-q${t}"><p class="rx-qname">${e}</p><div class="rx-teeth">${l.map(c=>{let r=c%10;return`<button type="button" class="rx-t rx-${r>=6?"m":r>=4?"p":r===3?"c":"i"}" data-t="${c}" aria-pressed="false" aria-label="R\u0103ng ${c}"><i aria-hidden="true"></i><span>${c}</span><b class="rx-badge" aria-hidden="true"></b></button>`}).join("")}</div></div>`},x=(t,e,a=t)=>`<option value="${h(t)}"${t===e?" selected":""}>${h(a)}</option>`;o.innerHTML=`
<div class="rx-grid">
  <div class="rx-main">
    <section class="rx-card" aria-labelledby="rx-h1">
      <div class="rx-card-head"><h2 id="rx-h1">Ch\u1ECDn r\u0103ng</h2><p class="rx-hint">K\xFD hi\u1EC7u FDI, nh\xECn t\u1EEB ph\xEDa b\xE1c s\u0129. B\u1EA5m \u0111\u1EC3 ch\u1ECDn, b\u1EA5m l\u1EA7n n\u1EEFa \u0111\u1EC3 b\u1ECF.</p></div>
      <div class="rx-chart">${Q.map(X).join("")}</div>
      <div class="rx-selbar"><p data-sel>Ch\u01B0a ch\u1ECDn r\u0103ng n\xE0o.</p><button type="button" class="rx-mini" data-clear hidden>B\u1ECF ch\u1ECDn</button></div>
    </section>

    <section class="rx-card" aria-labelledby="rx-h2">
      <div class="rx-card-head"><h2 id="rx-h2">Ph\u1EE5c h\xECnh cho r\u0103ng \u0111\xE3 ch\u1ECDn</h2></div>
      <fieldset class="rx-chips" data-types><legend>Lo\u1EA1i ph\u1EE5c h\xECnh</legend>
        ${Object.entries(L).map(([t,e])=>`<label><input type="radio" name="rx-type" value="${t}"${t===s.type?" checked":""}><span>${e.name}</span></label>`).join("")}
      </fieldset>
      <div class="rx-row">
        <label class="rx-f"><span>V\u1EADt li\u1EC7u</span><select data-mat></select></label>
        <label class="rx-f"><span>D\xF2ng ph\xF4i, h\u1EE3p kim</span><select data-brand></select></label>
      </div>
      <p class="rx-war" data-war></p>
      <fieldset class="rx-chips rx-shades" data-shades><legend>M\xE0u (VITA classical)</legend>
        ${[..._,"Theo \u1EA3nh g\u1EEDi k\xE8m"].map(t=>`<label><input type="radio" name="rx-shade" value="${t}"${t===s.shade?" checked":""}><span>${t}</span></label>`).join("")}
      </fieldset>
      <div class="rx-implant" data-implant hidden>
        <div class="rx-row">
          <label class="rx-f"><span>H\u1EC7 implant, \u0111\u01B0\u1EDDng k\xEDnh</span><input data-sys type="text" placeholder="V\xED d\u1EE5: Osstem TS III, 4.5"></label>
          <label class="rx-f"><span>Abutment</span><select data-abut>${[m,"Ti-base","Abutment c\xE1 nh\xE2n ho\xE1","Abutment c\xF3 s\u1EB5n c\u1EE7a ph\xF2ng kh\xE1m"].map(t=>x(t,s.abut)).join("")}</select></label>
          <label class="rx-f"><span>L\u01B0u gi\u1EEF</span><select data-ret>${[m,"B\u1EAFt v\xEDt","G\u1EAFn xi m\u0103ng"].map(t=>x(t,s.ret)).join("")}</select></label>
        </div>
      </div>
      <label class="rx-f"><span>Ghi ch\xFA cho h\u1EA1ng m\u1EE5c n\xE0y <em>(kh\xF4ng b\u1EAFt bu\u1ED9c)</em></span><input data-inote type="text" placeholder="V\xED d\u1EE5: kho\u1EA3ng ph\u1EE5c h\xECnh th\u1EA5p, nghi\u1EBFn r\u0103ng, c\u1EAFt l\u1EDBp m\u1EB7t ngo\xE0i"></label>
      <p class="rx-err" data-err role="alert"></p>
      <button type="button" class="btn btn-red rx-add" data-add>Th\xEAm v\xE0o phi\u1EBFu</button>
    </section>

    <section class="rx-card" aria-labelledby="rx-h3">
      <div class="rx-card-head"><h2 id="rx-h3">C\xE1c h\u1EA1ng m\u1EE5c</h2></div>
      <ol class="rx-items" data-items></ol>
      <p class="rx-empty" data-empty>Ch\u01B0a c\xF3 h\u1EA1ng m\u1EE5c. Ch\u1ECDn r\u0103ng \u1EDF tr\xEAn r\u1ED3i b\u1EA5m \u201CTh\xEAm v\xE0o phi\u1EBFu\u201D.</p>
    </section>

    <section class="rx-card" aria-labelledby="rx-h4">
      <div class="rx-card-head"><h2 id="rx-h4">Th\xF4ng tin ca</h2></div>
      <div class="rx-row">
        <label class="rx-f"><span>Ph\xF2ng kh\xE1m</span><input data-k="clinic" type="text" autocomplete="organization"></label>
        <label class="rx-f"><span>B\xE1c s\u0129</span><input data-k="doctor" type="text" autocomplete="name"></label>
        <label class="rx-f"><span>\u0110i\u1EC7n tho\u1EA1i</span><input data-k="phone" type="tel" autocomplete="tel" inputmode="tel"></label>
      </div>
      <div class="rx-row">
        <label class="rx-f"><span>M\xE3 ho\u1EB7c t\xEAn b\u1EC7nh nh\xE2n</span><input data-k="patient" type="text" autocomplete="off"></label>
        <label class="rx-f"><span>Ng\xE0y h\u1EB9n b\u1EC7nh nh\xE2n</span><input data-k="due" type="date"></label>
      </div>
      <fieldset class="rx-chips"><legend>D\u1EA5u g\u1EEDi labo</legend>
        ${[["scan","File scan trong mi\u1EC7ng"],["dau","D\u1EA5u"],["mau","M\u1EABu h\xE0m"]].map(([t,e])=>`<label><input type="radio" name="rx-imp" value="${t}" data-k="imp"><span>${e}</span></label>`).join("")}
      </fieldset>
      <fieldset class="rx-checks"><legend>G\u1EEDi k\xE8m</legend>
        <label><input type="checkbox" data-k="opp"> H\xE0m \u0111\u1ED1i di\u1EC7n</label>
        <label><input type="checkbox" data-k="bite"> Kh\u1EDBp c\u1EAFn</label>
        <label><input type="checkbox" data-k="photo"> \u1EA2nh so m\xE0u</label>
      </fieldset>
      <label class="rx-check-etch"><input type="checkbox" data-k="etch"> <span><strong>Xoi m\xF2n Zircos-E</strong> m\u1EB7t d\xE1n zirconia (mi\u1EC5n ph\xED, cho inlay, onlay, overlay). <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">T\xECm hi\u1EC3u</a></span></label>
      <label class="rx-f"><span>Ghi ch\xFA chung</span><textarea data-k="note" rows="3"></textarea></label>
    </section>
  </div>

  <aside class="rx-out" aria-labelledby="rx-oh">
    <div class="rx-out-in">
      <div class="rx-out-head"><h2 id="rx-oh">Phi\u1EBFu</h2><button type="button" class="rx-mini" data-new>Phi\u1EBFu m\u1EDBi</button></div>
      <dl class="rx-sum">
        <div><dt>S\u1ED1 \u0111\u01A1n v\u1ECB</dt><dd data-units>0</dd></div>
        <div><dt>Th\u1EDDi gian s\u1EA3n xu\u1EA5t d\u1EF1 ki\u1EBFn</dt><dd data-eta>\u2014</dd></div>
      </dl>
      <pre class="rx-text" data-text aria-live="polite"></pre>
      <div class="rx-actions">
        <button type="button" class="btn btn-red" data-zalo>Sao ch\xE9p, m\u1EDF Zalo</button>
        <button type="button" class="btn btn-line" data-copy>Sao ch\xE9p</button>
        <a class="btn btn-line" data-mail href="#">G\u1EEDi email</a>
        <button type="button" class="btn btn-line" data-print>In, l\u01B0u PDF</button>
      </div>
      <p class="rx-toast" data-toast role="status"></p>
      <p class="rx-fine">Zalo labo: ${h(d.zalo.label)}. Th\u1EDDi gian s\u1EA3n xu\u1EA5t t\xEDnh t\u1EEB l\xFAc labo nh\u1EADn h\xE0ng; labo x\xE1c nh\u1EADn khi nh\u1EADn ca.</p>
    </div>
  </aside>
</div>`;let i=t=>o.querySelector(t),B=[...o.querySelectorAll(".rx-t")],T=i("[data-mat]"),w=i("[data-brand]"),C=()=>n.items.filter(t=>t.type!=="cui").reduce((t,e)=>t+e.teeth.length,0),J=()=>{let t=C();if(!t)return null;let e=d.turnaround,a=t<=3?e[0]:t<=8?e[1]:n.items.some(l=>l.teeth.some(E))&&n.items.some(l=>l.teeth.some(c=>!E(c)))?e[3]:e[2];return`${a.time}${a.max?` (${a.max})`:""}`},O=(t,e)=>{let a=S(t.teeth),l=new Set(t.pontic||[]),c=t.type==="cau"?a.map(D=>l.has(D)?`${D} (nh\u1ECBp)`:String(D)).join(" \u2013 "):a.join(", "),r=t.type==="cau"?`C\u1EA7u ${a.length} \u0111\u01A1n v\u1ECB: r\u0103ng ${c}`:a.length>1?`${L[t.type].name} \xD7 ${a.length}: r\u0103ng ${c}`:`${L[t.type].name}: r\u0103ng ${c}`,u=M(t.brand),k=[`${e+1}. ${r}`,`   V\u1EADt li\u1EC7u: ${q[t.mat]}, ${t.brand}${u?` (b\u1EA3o h\xE0nh ${u} n\u0103m)`:""}`];return H(t)&&k.push(`   M\xE0u: ${t.shade}`),t.type==="implant"&&k.push(`   Implant: ${t.sys||"ch\u01B0a ghi h\u1EC7 implant"}; abutment: ${t.abut}; l\u01B0u gi\u1EEF: ${t.ret}`),t.note&&k.push(`   Ghi ch\xFA: ${t.note}`),k.join(`
`)},Y=t=>t?t.split("-").reverse().join("/"):"",z=()=>{let t={scan:"File scan trong mi\u1EC7ng",dau:"D\u1EA5u",mau:"M\u1EABu h\xE0m"}[n.imp],e=[n.opp&&"h\xE0m \u0111\u1ED1i di\u1EC7n",n.bite&&"kh\u1EDBp c\u1EAFn",n.photo&&"\u1EA3nh so m\xE0u"].filter(Boolean),a=["PHI\u1EBEU CH\u1EC8 \u0110\u1ECANH \u2014 KTV Dental Lab"];a.push(`Ph\xF2ng kh\xE1m: ${n.clinic||"\u2026"}`),a.push(`B\xE1c s\u0129: ${n.doctor||"\u2026"}${n.phone?`, \u0110T ${n.phone}`:""}`),a.push(`B\u1EC7nh nh\xE2n: ${n.patient||"\u2026"}`),n.due&&a.push(`Ng\xE0y h\u1EB9n b\u1EC7nh nh\xE2n: ${Y(n.due)}`),a.push(`D\u1EA5u: ${t}${e.length?`, k\xE8m ${e.join(", ")}`:""}`),a.push(""),n.items.length?n.items.forEach((r,u)=>a.push(O(r,u))):a.push("(ch\u01B0a c\xF3 h\u1EA1ng m\u1EE5c)"),a.push("");let l=[n.etch&&"Xoi m\xF2n Zircos-E m\u1EB7t d\xE1n zirconia"].filter(Boolean);l.length&&a.push(`Y\xEAu c\u1EA7u th\xEAm: ${l.join("; ")}`),n.note.trim()&&a.push(`Ghi ch\xFA: ${n.note.trim()}`);let c=C();return c&&a.push(`T\u1ED5ng: ${c} \u0111\u01A1n v\u1ECB${n.items.some(r=>r.type==="cui")?" (ch\u01B0a t\xEDnh c\xF9i gi\u1EA3)":""}`),a.join(`
`).replace(/\n{3,}/g,`

`).trim()},y=()=>{let t=L[s.type].mats;t.includes(s.mat)||(s.mat=t[0]),T.innerHTML=t.map(c=>x(c,s.mat,q[c])).join("");let e=F(s.mat);e.includes(s.brand)||(s.brand=e[0]),w.innerHTML=e.map(c=>x(c,s.brand)).join("");let a=M(s.brand);i("[data-war]").textContent=a?`${s.brand}: b\u1EA3o h\xE0nh ${a} n\u0103m.`:s.mat==="pfm"||s.mat==="metal"?"R\u0103ng s\u1EE9 kim lo\u1EA1i: b\u1EA3o h\xE0nh theo th\u1ECFa thu\u1EADn.":"";let l=s.mat!=="metal"&&s.type!=="cui";i("[data-shades]").hidden=!l,i("[data-implant]").hidden=s.type!=="implant"},b=()=>{let t=new Map;n.items.forEach((a,l)=>a.teeth.forEach(c=>t.set(c,[...t.get(c)||[],l+1]))),B.forEach(a=>{let l=+a.dataset.t,c=p.has(l),r=t.get(l);a.classList.toggle("on",c),a.setAttribute("aria-pressed",String(c)),a.classList.toggle("used",!!r),a.querySelector(".rx-badge").textContent=r?r.join(","):"",a.setAttribute("aria-label",`R\u0103ng ${l}${r?`, \u0111\xE3 c\xF3 trong h\u1EA1ng m\u1EE5c ${r.join(", ")}`:""}`)});let e=S(p);i("[data-sel]").innerHTML=e.length?`\u0110\xE3 ch\u1ECDn <strong>${e.length}</strong> r\u0103ng: ${e.join(", ")}`:"Ch\u01B0a ch\u1ECDn r\u0103ng n\xE0o.",i("[data-clear]").hidden=!e.length},j=()=>{i("[data-items]").innerHTML=n.items.map((t,e)=>{let a=S(t.teeth),l=new Set(t.pontic||[]);return`<li><div class="rx-it-body"><p class="rx-it-head">${h(O(t,e).split(`
`)[0].replace(/^\d+\.\s*/,""))}</p>
<p class="rx-it-sub">${h(q[t.mat])}, ${h(t.brand)}${H(t)?`, m\xE0u ${h(t.shade)}`:""}${t.type==="implant"&&t.sys?`, ${h(t.sys)}`:""}</p>
${t.type==="cau"?`<p class="rx-pon"><span>B\u1EA5m \u0111\u1EC3 \u0111\u1ED5i tr\u1EE5 / nh\u1ECBp:</span>${a.map(c=>`<button type="button" class="rx-mini${l.has(c)?" is-pon":""}" data-pon="${e}:${c}" aria-pressed="${l.has(c)}">${c} ${l.has(c)?"nh\u1ECBp":"tr\u1EE5"}</button>`).join("")}</p>`:""}</div>
<button type="button" class="rx-del" data-del="${e}" aria-label="Xo\xE1 h\u1EA1ng m\u1EE5c ${e+1}">\xD7</button></li>`}).join(""),i("[data-empty]").hidden=n.items.length>0},v=()=>{let t=z();i("[data-text]").textContent=t,i("[data-units]").textContent=String(C()),i("[data-eta]").textContent=J()||"\u2014";let e=`Phi\u1EBFu ch\u1EC9 \u0111\u1ECBnh${n.clinic?` \u2014 ${n.clinic}`:""}${n.patient?` \u2014 ${n.patient}`:""}`;i("[data-mail]").href=`mailto:${d.email}?subject=${encodeURIComponent(e)}&body=${encodeURIComponent(t)}`;let a=n.items.some(l=>["inlay","onlay","overlay"].includes(l.type)&&(l.mat==="zr"||l.mat==="ml"));o.querySelector(".rx-check-etch").classList.toggle("suggest",a&&!n.etch),V.set(n)},G=()=>{y(),b(),j(),v()};o.querySelectorAll("[data-k]").forEach(t=>{let e=t.dataset.k;t.type==="checkbox"?t.checked=!!n[e]:t.type==="radio"?t.checked=n[e]===t.value:t.value=n[e]||"",t.addEventListener(t.type==="checkbox"||t.type==="radio"||t.type==="date"?"change":"input",()=>{n[e]=t.type==="checkbox"?t.checked:t.value,v()})}),B.forEach(t=>t.addEventListener("click",()=>{let e=+t.dataset.t;p.has(e)?p.delete(e):p.add(e),i("[data-err]").textContent="",b()})),i("[data-clear]").addEventListener("click",()=>{p.clear(),b()}),o.querySelectorAll('input[name="rx-type"]').forEach(t=>t.addEventListener("change",()=>{s.type=t.value,y()})),o.querySelectorAll('input[name="rx-shade"]').forEach(t=>t.addEventListener("change",()=>{s.shade=t.value})),T.addEventListener("change",()=>{s.mat=T.value,y()}),w.addEventListener("change",()=>{s.brand=w.value,y()}),i("[data-sys]").addEventListener("input",t=>{s.sys=t.target.value}),i("[data-abut]").addEventListener("change",t=>{s.abut=t.target.value}),i("[data-ret]").addEventListener("change",t=>{s.ret=t.target.value}),i("[data-inote]").addEventListener("input",t=>{s.note=t.target.value}),i("[data-add]").addEventListener("click",()=>{let t=i("[data-err]"),e=S(p);if(!e.length){t.textContent="Ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t r\u0103ng tr\xEAn s\u01A1 \u0111\u1ED3.";return}if(s.type==="cau"){if(e.length<2){t.textContent="C\u1EA7u r\u0103ng c\u1EA7n t\u1EEB 2 r\u0103ng tr\u1EDF l\xEAn.";return}if(e.some(E)&&e.some(a=>!E(a))){t.textContent="M\u1ED9t c\u1EA7u r\u0103ng ch\u1EC9 n\u1EB1m tr\xEAn m\u1ED9t h\xE0m. T\xE1ch th\xE0nh hai h\u1EA1ng m\u1EE5c.";return}}n.items.push({teeth:e,type:s.type,mat:s.mat,brand:s.brand,shade:s.shade,note:s.note.trim(),...s.type==="cau"?{pontic:[]}:{},...s.type==="implant"?{sys:s.sys.trim(),abut:s.abut,ret:s.ret}:{}}),p.clear(),s.note="",i("[data-inote]").value="",t.textContent="",b(),j(),v(),f(`\u0110\xE3 th\xEAm h\u1EA1ng m\u1EE5c ${n.items.length}.`)}),i("[data-items]").addEventListener("click",t=>{let e=t.target.closest("[data-del]"),a=t.target.closest("[data-pon]");if(e)n.items.splice(+e.dataset.del,1);else if(a){let[l,c]=a.dataset.pon.split(":").map(Number),r=n.items[l];r.pontic=r.pontic&&r.pontic.includes(c)?r.pontic.filter(u=>u!==c):[...r.pontic||[],c]}else return;b(),j(),v()}),i("[data-new]").addEventListener("click",()=>{if(n.items.length&&!window.confirm("Xo\xE1 c\xE1c h\u1EA1ng m\u1EE5c v\xE0 th\xF4ng tin b\u1EC7nh nh\xE2n \u0111\u1EC3 so\u1EA1n phi\u1EBFu m\u1EDBi? T\xEAn ph\xF2ng kh\xE1m, b\xE1c s\u0129 \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i."))return;let t={clinic:n.clinic,doctor:n.doctor,phone:n.phone,imp:n.imp};Object.assign(n,I(),t),o.querySelectorAll("[data-k]").forEach(e=>{let a=e.dataset.k;e.type==="checkbox"?e.checked=!!n[a]:e.type==="radio"?e.checked=n[a]===e.value:e.value=n[a]||""}),p.clear(),G()});let A=i("[data-toast]"),P=0;function f(t){A.textContent=t,A.classList.add("show"),clearTimeout(P),P=setTimeout(()=>A.classList.remove("show"),3200)}let N=async()=>{let t=z();try{return await navigator.clipboard.writeText(t),!0}catch{}let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.cssText="position:fixed;opacity:0",document.body.append(e),e.select();let a=!1;try{a=document.execCommand("copy")}catch{a=!1}return e.remove(),a},$=()=>n.items.length?!1:(f("Phi\u1EBFu ch\u01B0a c\xF3 h\u1EA1ng m\u1EE5c n\xE0o."),!0);i("[data-copy]").addEventListener("click",async()=>{$()||f(await N()?"\u0110\xE3 sao ch\xE9p phi\u1EBFu.":"Kh\xF4ng sao ch\xE9p \u0111\u01B0\u1EE3c, h\xE3y ch\u1ECDn v\xE0 sao ch\xE9p ph\u1EA7n ch\u1EEF c\u1EE7a phi\u1EBFu.")}),i("[data-zalo]").addEventListener("click",async()=>{if($())return;let t=await N();f(t?`\u0110\xE3 sao ch\xE9p. D\xE1n v\xE0o khung chat Zalo ${d.zalo.label}.`:"Kh\xF4ng sao ch\xE9p \u0111\u01B0\u1EE3c, h\xE3y ch\u1ECDn v\xE0 sao ch\xE9p ph\u1EA7n ch\u1EEF c\u1EE7a phi\u1EBFu."),window.open(d.zalo.url,"_blank","noopener")}),i("[data-mail]").addEventListener("click",t=>{$()&&t.preventDefault()}),i("[data-print]").addEventListener("click",()=>{if($())return;let t=document.querySelector(".rx-print");t||(t=document.createElement("div"),t.className="rx-print",document.body.append(t));let e=document.querySelector(".brand img");t.innerHTML=`${e?`<img src="${e.getAttribute("src")}" alt="" width="70">`:""}<pre></pre><p>KTV Dental Lab, Zalo ${h(d.zalo.label)}, ${h(d.email)}. Gi\u1EDD l\xE0m vi\u1EC7c: ${h(d.hours)}</p>`,t.querySelector("pre").textContent=z(),window.print()}),G()}export{W as initRx};
