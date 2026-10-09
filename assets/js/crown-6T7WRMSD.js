var kc=0,fo=1,zc=2;var Ss=1,Vc=2,Ui=3,zn=0,be=1,Ee=2,mn=0,Fi=1,po=2,Ao=3,mo=4,Qc=5;var si=100,Wc=101,Xc=102,Yc=103,Jc=104,qc=200,Kc=201,Zc=202,jc=203,go=204,_o=205,$c=206,tl=207,el=208,nl=209,il=210,sl=211,rl=212,al=213,ol=214,or=0,cr=1,lr=2,Ei=3,hr=4,ur=5,dr=6,fr=7,Or=0,cl=1,ll=2,nn=0,xo=1,vo=2,yo=3,ws=4,Mo=5,So=6,wo=7;var bo=300,Vn=301,ri=302,Gr=303,Hr=304,bs=306,pr=1e3,ln=1001,Ar=1002,ve=1003,hl=1004;var Es=1005;var Se=1006,kr=1007;var Qn=1008;var Ge=1009,Eo=1010,Co=1011,Ni=1012,zr=1013,sn=1014,Xe=1015,rn=1016,Vr=1017,Qr=1018,Oi=1020,To=35902,Bo=35899,Io=1021,Ro=1022,Ye=1023,hn=1026,Wn=1027,Wr=1028,Xr=1029,Xn=1030,Yr=1031;var Jr=1033,Cs=33776,Ts=33777,Bs=33778,Is=33779,qr=35840,Kr=35841,Zr=35842,jr=35843,$r=36196,ta=37492,ea=37496,na=37488,ia=37489,Rs=37490,sa=37491,ra=37808,aa=37809,oa=37810,ca=37811,la=37812,ha=37813,ua=37814,da=37815,fa=37816,pa=37817,Aa=37818,ma=37819,ga=37820,_a=37821,xa=36492,va=36494,ya=36495,Ma=36283,Sa=36284,Ps=36285,wa=36286;var ts=2300,mr=2301,rr=2302,so=2303,ro=2400,ao=2401,oo=2402;var ul=3200;var Ds=0,dl=1,En="",Ue="srgb",es="srgb-linear",ns="linear",Zt="srgb";var ar=7680;var fl=519,pl=512,Al=513,ml=514,ba=515,gl=516,_l=517,Ea=518,xl=519,vl=35044;var Po="300 es",$e=2e3,Ci=2001;function Sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yl(){let i=is("canvas");return i.style.display="block",i}var gc={},Ti=null;function Do(...i){let t="THREE."+i.shift();Ti?Ti("log",t,...i):console.log(t,...i)}function Ml(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=Ml(i);let t="THREE."+i.shift();if(Ti)Ti("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=Ml(i);let t="THREE."+i.shift();if(Ti)Ti("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $n(...i){let t=i.join(" ");t in gc||(gc[t]=!0,Rt(...i))}function Sl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wl={[or]:cr,[lr]:dr,[hr]:fr,[Ei]:ur,[cr]:or,[dr]:lr,[fr]:hr,[ur]:Ei},un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=1234567,ji=Math.PI/180,Bi=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eh(i,t,e){return i!==t?(e-i)/(t-i):0}function $i(i,t,e){return(1-e)*i+e*t}function Ch(i,t,e,n){return $i(i,t,1-Math.exp(-e*n))}function Th(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ih(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ph(i,t){return i+Math.random()*(t-i)}function Dh(i){return i*(.5-Math.random())}function Lh(i){i!==void 0&&(_c=i);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uh(i){return i*ji}function Fh(i){return i*Bi}function Nh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ca={DEG2RAD:ji,RAD2DEG:Bi,generateUUID:Gi,clamp:Vt,euclideanModulo:Lo,mapLinear:bh,inverseLerp:Eh,lerp:$i,damp:Ch,pingpong:Th,smoothstep:Bh,smootherstep:Ih,randInt:Rh,randFloat:Ph,randFloatSpread:Dh,seededRandom:Lh,degToRad:Uh,radToDeg:Fh,isPowerOfTwo:Nh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Gh,setQuaternionFromProperEuler:Hh,normalize:Le,denormalize:wi},Go=class Go{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Go.prototype.isVector2=!0;var Gt=Go,dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||c!==h||l!==p||u!==_){let m=c*h+l*p+u*_+f*y;m<0&&(h=-h,p=-p,_=-_,y=-y,m=-m);let d=1-o;if(m<.9995){let C=Math.acos(m),B=Math.sin(C);d=Math.sin(d*C)/B,o=Math.sin(o*C)/B,c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+y*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+y*o;let C=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=C,l*=C,u*=C,f*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*f+c*p-l*h,t[e+1]=c*_+u*h+l*f-o*p,t[e+2]=l*_+u*p+o*h-c*f,t[e+3]=u*_-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"YZX":this._x=h*u*f+l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f-h*p*_;break;case"XZY":this._x=h*u*f-l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f+h*p*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ho=class Ho{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ho.prototype.isVector3=!0;var O=Ho,Na=new O,xc=new dn,ko=class ko{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],y=s[0],m=s[3],d=s[6],C=s[1],B=s[4],v=s[7],S=s[2],w=s[5],T=s[8];return r[0]=a*y+o*C+c*S,r[3]=a*m+o*B+c*w,r[6]=a*d+o*v+c*T,r[1]=l*y+u*C+f*S,r[4]=l*m+u*B+f*w,r[7]=l*d+u*v+f*T,r[2]=h*y+p*C+_*S,r[5]=h*m+p*B+_*w,r[8]=h*d+p*v+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,_=e*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=f*y,t[1]=(s*l-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return $n("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return $n("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return $n("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ko.prototype.isMatrix3=!0;var Dt=ko,Oa=new Dt,vc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kh(){let i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $n("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $n("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:t,whitePoint:n,transfer:ns,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var Qt=kh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,gr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=is("canvas")),hi.width=t.width,hi.height=t.height;let s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zh=0,Ii=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var Vh=0,Ha=new O,Fe=class i extends un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=Se,a=Qn,o=Ye,c=Ge,l=i.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Gi(),this.name="",this.source=new Ii(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=bo;Fe.DEFAULT_ANISOTROPY=1;var zo=class zo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(l+1)/2,v=(p+1)/2,S=(d+1)/2,w=(u+h)/4,T=(f+y)/4,x=(_+m)/4;return B>v&&B>S?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=w/n,r=T/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=x/r),this.set(n,s,r,e),this}let C=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(f-y)/C,this.z=(h-u)/C,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zo.prototype.isVector4=!0;var le=zo,_r=class extends un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Fe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ii(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends _r{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ss=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Nr=class Nr{constructor(t,e,n,s,r,a,o,c,l,u,f,h,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,y,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,_=o*u,y=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+_*l,e[5]=h-y*l,e[9]=-o*c,e[2]=y-h*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,p=c*f,_=l*u,y=l*f;e[0]=h+y*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=y+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,p=c*f,_=l*u,y=l*f;e[0]=h-y*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,p=a*f,_=o*u,y=o*f;e[0]=c*u,e[4]=_*l-p,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,p=a*l,_=o*c,y=o*l;e[0]=c*u,e[4]=y-h*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+_,e[10]=h-y*f}else if(t.order==="XZY"){let h=a*c,p=a*l,_=o*c,y=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,Wh)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),In.crossVectors(n,He),In.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),In.crossVectors(n,He)),In.normalize(),Gs.crossVectors(He,In),s[0]=In.x,s[4]=Gs.x,s[8]=He.x,s[1]=In.y,s[5]=Gs.y,s[9]=He.y,s[2]=In.z,s[6]=Gs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],y=n[6],m=n[10],d=n[14],C=n[3],B=n[7],v=n[11],S=n[15],w=s[0],T=s[4],x=s[8],E=s[12],D=s[1],L=s[5],G=s[9],V=s[13],M=s[2],H=s[6],q=s[10],J=s[14],nt=s[3],X=s[7],$=s[11],tt=s[15];return r[0]=a*w+o*D+c*M+l*nt,r[4]=a*T+o*L+c*H+l*X,r[8]=a*x+o*G+c*q+l*$,r[12]=a*E+o*V+c*J+l*tt,r[1]=u*w+f*D+h*M+p*nt,r[5]=u*T+f*L+h*H+p*X,r[9]=u*x+f*G+h*q+p*$,r[13]=u*E+f*V+h*J+p*tt,r[2]=_*w+y*D+m*M+d*nt,r[6]=_*T+y*L+m*H+d*X,r[10]=_*x+y*G+m*q+d*$,r[14]=_*E+y*V+m*J+d*tt,r[3]=C*w+B*D+v*M+S*nt,r[7]=C*T+B*L+v*H+S*X,r[11]=C*x+B*G+v*q+S*$,r[15]=C*E+B*V+v*J+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],y=t[7],m=t[11],d=t[15],C=c*p-l*h,B=o*p-l*f,v=o*h-c*f,S=a*p-l*u,w=a*h-c*u,T=a*f-o*u;return e*(y*C-m*B+d*v)-n*(_*C-m*S+d*w)+s*(_*B-y*S+d*T)-r*(_*v-y*w+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],y=t[13],m=t[14],d=t[15],C=e*o-n*a,B=e*c-s*a,v=e*l-r*a,S=n*c-s*o,w=n*l-r*o,T=s*l-r*c,x=u*y-f*_,E=u*m-h*_,D=u*d-p*_,L=f*m-h*y,G=f*d-p*y,V=h*d-p*m,M=C*V-B*G+v*L+S*D-w*E+T*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/M;return t[0]=(o*V-c*G+l*L)*H,t[1]=(s*G-n*V-r*L)*H,t[2]=(y*T-m*w+d*S)*H,t[3]=(h*w-f*T-p*S)*H,t[4]=(c*D-a*V-l*E)*H,t[5]=(e*V-s*D+r*E)*H,t[6]=(m*v-_*T-d*B)*H,t[7]=(u*T-h*v+p*B)*H,t[8]=(a*G-o*D+l*x)*H,t[9]=(n*D-e*G-r*x)*H,t[10]=(_*w-y*v+d*C)*H,t[11]=(f*v-u*w-p*C)*H,t[12]=(o*E-a*L-c*x)*H,t[13]=(e*L-n*E+s*x)*H,t[14]=(y*B-_*S-m*C)*H,t[15]=(u*S-f*B+h*C)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,_=r*f,y=a*u,m=a*f,d=o*f,C=c*l,B=c*u,v=c*f,S=n.x,w=n.y,T=n.z;return s[0]=(1-(y+d))*S,s[1]=(p+v)*S,s[2]=(_-B)*S,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(h+d))*w,s[6]=(m+C)*w,s[7]=0,s[8]=(_+B)*T,s[9]=(m-C)*T,s[10]=(1-(h+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ui.set(s[0],s[1],s[2]).length(),o=ui.set(s[4],s[5],s[6]).length(),c=ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qe.copy(this);let l=1/a,u=1/o,f=1/c;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===$e)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ci)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===$e)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ci)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Nr.prototype.isMatrix4=!0;var re=Nr,ui=new O,qe=new re,Qh=new O(0,0,0),Wh=new O(1,1,1),In=new O,Gs=new O,He=new O,Mc=new re,Sc=new dn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xh=0,wc=new O,di=new dn,xn=new re,Hs=new O,Xi=new O,Yh=new O,Jh=new dn,bc=new O(1,0,0),Ec=new O(0,1,0),Cc=new O(0,0,1),Tc={type:"added"},qh={type:"removed"},fi={type:"childadded",child:null},ka={type:"childremoved",child:null},we=class i extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new fn,n=new dn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Dt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Xi,Hs,this.up):xn.lookAt(Hs,Xi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),fi.child=t,this.dispatchEvent(fi),fi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qh),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new O(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kh={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Lo(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Qt.workingToColorSpace(Ie.copy(this),t),Math.round(Vt(Ie.r*255,0,255))*65536+Math.round(Vt(Ie.g*255,0,255))*256+Math.round(Vt(Ie.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ue){Qt.workingToColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ks);let n=$i(Rn.h,ks.h,e),s=$i(Rn.s,ks.s,e),r=$i(Rn.l,ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new It;It.NAMES=bl;var ti=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new O,vn=new O,Va=new O,yn=new O,pi=new O,Ai=new O,Bc=new O,Qa=new O,Wa=new O,Xa=new O,Ya=new le,Ja=new le,qa=new le,Un=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),vn.subVectors(n,e),Va.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(vn),c=Ke.dot(Va),l=vn.dot(vn),u=vn.dot(Va),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ya.setScalar(0),Ja.setScalar(0),qa.setScalar(0),Ya.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ya,r.x),a.addScaledVector(Ja,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),vn.subVectors(t,e),Ke.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ke.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;pi.subVectors(s,n),Ai.subVectors(r,n),Qa.subVectors(t,n);let c=pi.dot(Qa),l=Ai.dot(Qa);if(c<=0&&l<=0)return e.copy(n);Wa.subVectors(t,s);let u=pi.dot(Wa),f=Ai.dot(Wa);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(pi,a);Xa.subVectors(t,r);let p=pi.dot(Xa),_=Ai.dot(Xa);if(_>=0&&p<=_)return e.copy(r);let y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Ai,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Bc.subVectors(r,s),o=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(Bc,o);let d=1/(m+y+h);return a=y*d,o=h*d,e.copy(n).addScaledVector(pi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Vs.subVectors(this.max,Yi),mi.subVectors(t.a,Yi),gi.subVectors(t.b,Yi),_i.subVectors(t.c,Yi),Pn.subVectors(gi,mi),Dn.subVectors(_i,gi),qn.subVectors(mi,_i);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-qn.y,qn.x,0];return!Ka(e,mi,gi,_i,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,mi,gi,_i,Vs))?!1:(Qs.crossVectors(Pn,Dn),e=[Qs.x,Qs.y,Qs.z],Ka(e,mi,gi,_i,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mn=[new O,new O,new O,new O,new O,new O,new O,new O],Ze=new O,zs=new pn,mi=new O,gi=new O,_i=new O,Pn=new O,Dn=new O,qn=new O,Yi=new O,Vs=new O,Qs=new O,Kn=new O;function Ka(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);let o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var me=new O,Ws=new Gt,Zh=0,Re=class extends un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Xe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var as=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var os=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},jh=new pn,Ji=new O,Za=new O,Fn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);let e=Ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Za)),this.expandByPoint(Ji.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$h=0,We=new re,ja=new we,xi=new O,ke=new pn,qi=new pn,xe=new O,Ne=class i extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?os:as)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(ke.min,qi.min),ke.expandByPoint(xe),xe.addVectors(ke.max,qi.max),ke.expandByPoint(xe)):(ke.expandByPoint(qi.min),ke.expandByPoint(qi.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xe.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(t,l),xe.add(xi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Re(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new O,c[x]=new O;let l=new O,u=new O,f=new O,h=new Gt,p=new Gt,_=new Gt,y=new O,m=new O;function d(x,E,D){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,D),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),u.sub(l),f.sub(l),p.sub(h),_.sub(h);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(y),o[E].add(y),o[D].add(y),c[x].add(m),c[E].add(m),c[D].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let x=0,E=C.length;x<E;++x){let D=C[x],L=D.start,G=D.count;for(let V=L,M=L+G;V<M;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let B=new O,v=new O,S=new O,w=new O;function T(x){S.fromBufferAttribute(s,x),w.copy(S);let E=o[x];B.copy(E),B.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(w,E);let L=v.dot(c[x])<0?-1:1;a.setXYZW(x,B.x,B.y,B.z,L)}for(let x=0,E=C.length;x<E;++x){let D=C[x],L=D.start,G=D.count;for(let V=L,M=L+G;V<M;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,u=new O,f=new O;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),p=0,_=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let d=0;d<u;d++)h[_++]=l[p++]}return new Re(h,u,f)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $a=new O,tu=new O,eu=new Dt,je=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$a.subVectors(n,e).cross(tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eu.getNormalMatrix(t),s=this.coplanarPoint($a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nu=0,bn=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Fi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Sn=new O,to=new O,Xs=new O,Ys=new O,vr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Ys.copy(this.origin).sub(to);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=Ys.dot(this.direction),c=-Ys.dot(Xs),l=Ys.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){let y=1/u;f*=y,h*=y,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(to).addScaledVector(Xs,h),p}intersectSphere(t,e){if(t.radius<0)return null;Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,p=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,d=n.x-a.x,C=n.y-a.y,B=n.z-a.z,v=Math.abs(c),S=Math.abs(l),w=Math.abs(u),T,x,E,D,L,G,V,M,H,q,J,nt;if(v>=S&&v>=w?(E=c,G=f,H=_,nt=d,c>=0?(T=l,x=u,D=h,L=p,V=y,M=m,q=C,J=B):(T=u,x=l,D=p,L=h,V=m,M=y,q=B,J=C)):S>=w?(E=l,G=h,H=y,nt=C,l>=0?(T=u,x=c,D=p,L=f,V=m,M=_,q=B,J=d):(T=c,x=u,D=f,L=p,V=_,M=m,q=d,J=B)):(E=u,G=p,H=m,nt=B,u>=0?(T=c,x=l,D=f,L=h,V=_,M=y,q=d,J=C):(T=l,x=c,D=h,L=f,V=y,M=_,q=C,J=d)),E===0)return null;let X=T/E,$=x/E,tt=1/E,wt=D-X*G,yt=L-$*G,jt=V-X*H,Ht=M-$*H,Wt=q-X*nt,W=J-$*nt,Q=Wt*Ht-W*jt,st=wt*W-yt*Wt,gt=jt*yt-Ht*wt;if(s){if(Q<0||st<0||gt<0)return null}else if((Q<0||st<0||gt<0)&&(Q>0||st>0||gt>0))return null;let rt=Q+st+gt;if(rt===0)return null;let Tt=tt*(Q*G+st*H+gt*nt);return(rt>0?Tt<0:Tt>0)?null:this.at(Tt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ic=new re,Zn=new vr,Js=new Fn,Rc=new O,qs=new O,Ks=new O,Zs=new O,eo=new O,js=new O,Pc=new O,$s=new O,Jt=class extends we{constructor(t=new Ne,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(eo.fromBufferAttribute(f,t),a?js.addScaledVector(eo,u):js.addScaledVector(eo.sub(e),u))}e.add(js)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Js.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Js,Rc)===null||Zn.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let m=h[_],d=a[m.materialIndex],C=Math.max(m.start,p.start),B=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=C,S=B;v<S;v+=3){let w=o.getX(v),T=o.getX(v+1),x=o.getX(v+2);s=tr(this,d,t,n,l,u,f,w,T,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let C=o.getX(m),B=o.getX(m+1),v=o.getX(m+2);s=tr(this,a,t,n,l,u,f,C,B,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let m=h[_],d=a[m.materialIndex],C=Math.max(m.start,p.start),B=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=C,S=B;v<S;v+=3){let w=v,T=v+1,x=v+2;s=tr(this,d,t,n,l,u,f,w,T,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let C=m,B=m+1,v=m+2;s=tr(this,a,t,n,l,u,f,C,B,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function iu(i,t,e,n,s,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===zn,o),c===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($s);return l<e.near||l>e.far?null:{distance:l,point:$s.clone(),object:i}}function tr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,qs),i.getVertexPosition(c,Ks),i.getVertexPosition(l,Zs);let u=iu(i,t,e,n,qs,Ks,Zs,Pc);if(u){let f=new O;Un.getBarycoord(Pc,qs,Ks,Zs,f),s&&(u.uv=Un.getInterpolatedAttribute(s,o,c,l,f,new Gt)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,c,l,f,new Gt)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,c,l,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new O,materialIndex:0};Un.getNormal(qs,Ks,Zs,h.normal),u.face=h,u.barycoord=f}return u}var cs=class extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ve,u=ve,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vi=new re,Dc=new re,er=[],Lc=new pn,su=new re,Ki=new Jt,Zi=new Fn,hs=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,su)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Lc.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(Lc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Zi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),t.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vi),Dc.multiplyMatrices(n,vi),Ki.matrixWorld=Dc,Ki.raycast(t,er);for(let a=0,o=er.length;a<o;a++){let c=er[a];c.instanceId=r,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,Wr,Xe));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jn=new Fn,ru=new Gt(.5,.5),nr=new O,Pi=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],y=r[9],m=r[10],d=r[11],C=r[12],B=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-a,p-u,d-_,S-C).normalize(),s[1].setComponents(l+a,p+u,d+_,S+C).normalize(),s[2].setComponents(l+o,p+f,d+y,S+B).normalize(),s[3].setComponents(l-o,p-f,d-y,S-B).normalize(),n)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,p-h,d-m,S-v).normalize();else if(s[4].setComponents(l-c,p-h,d-m,S-v).normalize(),e===$e)s[5].setComponents(l+c,p+h,d+m,S+v).normalize();else if(e===Ci)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=ru.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Fe{constructor(t=[],e=Vn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ds=class extends Fe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends Fe{constructor(t,e,n=sn,s,r,a,o=ve,c=ve,l,u=hn,f=1){if(u!==hn&&u!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ii(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yr=class extends Nn{constructor(t,e=sn,n=Vn,s,r,a=ve,o=ve,c,l=hn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fs=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},On=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function _(y,m,d,C,B,v,S,w,T,x,E){let D=v/T,L=S/x,G=v/2,V=S/2,M=w/2,H=T+1,q=x+1,J=0,nt=0,X=new O;for(let $=0;$<q;$++){let tt=$*L-V;for(let wt=0;wt<H;wt++){let yt=wt*D-G;X[y]=yt*C,X[m]=tt*B,X[d]=M,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[d]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(wt/T),f.push(1-$/x),J+=1}}for(let $=0;$<x;$++)for(let tt=0;tt<T;tt++){let wt=h+tt+H*$,yt=h+tt+H*($+1),jt=h+(tt+1)+H*($+1),Ht=h+(tt+1)+H*$;c.push(wt,yt,Ht),c.push(yt,jt,Ht),nt+=6}o.addGroup(p,nt,E),p+=nt,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ps=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new O,u=new Gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let p=n+f/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var ei=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,p=[],_=[],y=[],m=[];for(let d=0;d<u;d++){let C=d*h-a;for(let B=0;B<l;B++){let v=B*f-r;_.push(v,-C,0),y.push(0,0,1),m.push(B/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){let B=C+l*d,v=C+l*(d+1),S=C+1+l*(d+1),w=C+1+l*d;p.push(B,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ni=class i extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],f=t,h=(e-t)/s,p=new O,_=new Gt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let y=0;y<s;y++){let m=y*(n+1);for(let d=0;d<n;d++){let C=d+m,B=C,v=C+n+1,S=C+n+2,w=C+1;o.push(B,v,w),o.push(v,S,w)}}this.setIndex(o),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var As=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new O,h=new O,p=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let C=[],B=d/n,v=a+B*o,S=t*Math.cos(v),w=Math.sqrt(t*t-S*S),T=0;d===0&&a===0?T=.5/e:d===n&&c===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let E=x/e,D=s+E*r;f.x=-w*Math.cos(D),f.y=S,f.z=w*Math.sin(D),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(E+T,1-B),C.push(l++)}u.push(C)}for(let d=0;d<n;d++)for(let C=0;C<e;C++){let B=u[d][C+1],v=u[d][C],S=u[d+1][C],w=u[d+1][C+1];(d!==0||a>0)&&p.push(B,v,w),(d!==n-1||c<Math.PI)&&p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uc(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=ai(i[e]);for(let s in n)t[s]=n[s]}return t}function Uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function au(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var El={clone:ai,merge:Pe},ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ou,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ai(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ms=class extends An{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var gs=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Or,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sr=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wr=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function no(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},br=class extends Gn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ro,endingEnd:ro}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ao:r=t,o=2*e-n;break;case oo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ao:a=t,c=2*n-e;break;case oo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-h*m+2*h*y-h*_,C=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*_+1,B=(-1-p)*m+(1.5+p)*y+.5*_,v=p*m-p*y;for(let S=0;S!==o;++S)r[S]=d*a[u+S]+C*a[l+S]+B*a[c+S]+v*a[f+S];return r}},Er=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},Cr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tr=class extends Gn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-e)/(s-e),y=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*_;return r}let h=o*2,p=t-1;for(let _=0;_!==o;++_){let y=a[l+_],m=a[c+_],d=p*h+_*2,C=f[d],B=f[d+1],v=t*h+_*2,S=u[v],w=u[v+1],T=hu(n,e,C,S,s);r[_]=Cl(T,y,B,w,m)}return r}};function Cl(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function lu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Cl(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=lu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ve=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yi(e,this.TimeBufferType),this.values=yi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yi(t.times,Array),values:yi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),no(t.settings)&&(n.settings={inTangents:yi(t.settings.inTangents,Array),outTangents:yi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Er(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Tr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ts:e=this.InterpolantFactoryMethodDiscrete;break;case mr:e=this.InterpolantFactoryMethodLinear;break;case rr:e=this.InterpolantFactoryMethodSmooth;break;case so:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return rr;case this.InterpolantFactoryMethodBezier:return so}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;no(this.settings)&&(Fc(this.settings.inTangents,t),Fc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&wh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){let y=e[f+_];if(y!==e[h+_]||y!==e[p+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,no(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ve.prototype.ValueTypeName="";Ve.prototype.TimeBufferType=Float32Array;Ve.prototype.ValueBufferType=Float32Array;Ve.prototype.DefaultInterpolation=mr;var Hn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ts;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Br.prototype.ValueTypeName="color";var Ir=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Ir.prototype.ValueTypeName="number";var Rr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)dn.slerpFlat(r,0,a,l-o,a,l,c);return r}},_s=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Rr(this.times,this.values,this.getValueSize(),t)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends Ve{constructor(t,e,n){super(t,e,n)}};kn.prototype.ValueTypeName="string";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=ts;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};Pr.prototype.ValueTypeName="vector";var Dr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],_=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tl=new Dr,Lr=class{constructor(t){this.manager=t!==void 0?t:Tl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var io=new re,Nc=new O,Oc=new O,xs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(io,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ci||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ir=new O,sr=new dn,cn=new O,vs=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ir,sr,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ir,sr,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new O,Gc=new Gt,Hc=new Gt,Me=class extends vs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Hc),e.subVectors(Hc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var co=class extends xs{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends Di{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new co}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Li=class extends vs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lo=class extends xs{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ii=class extends Di{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new lo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ms=class extends Di{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mi=-90,Si=1,Ur=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Mi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Me(Mi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Me(Mi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Me(Mi,Si,t,e);o.layers=this.layers,this.add(o);let c=new Me(Mi,Si,t,e);c.layers=this.layers,this.add(c);let l=new Me(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ci)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Fr=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fo="\\[\\]\\.:\\/",uu=new RegExp("["+Fo+"]","g"),No="[^"+Fo+"]",du="[^"+Fo.replace("\\.","")+"]",fu=/((?:WC+[\/:])*)/.source.replace("WC",No),pu=/(WCOD+)?/.source.replace("WCOD",du),Au=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",No),mu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",No),gu=new RegExp("^"+fu+pu+Au+mu+"$"),_u=["material","materials","bones","map"],ho=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uu,"")}static parseTrackName(t){let e=gu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_u.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=ho;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fm=new Float32Array(1);var Vo=class Vo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Vo.prototype.isMatrix2=!0;var uo=Vo;function Oo(i,t,e,n){let s=xu(n);switch(e){case Io:return i*t;case Wr:return i*t/s.components*s.byteLength;case Xr:return i*t/s.components*s.byteLength;case Xn:return i*t*2/s.components*s.byteLength;case Yr:return i*t*2/s.components*s.byteLength;case Ro:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Jr:return i*t*4/s.components*s.byteLength;case Cs:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:case jr:return Math.max(i,16)*Math.max(t,8)/4;case qr:case Zr:return Math.max(i,8)*Math.max(t,8)/2;case $r:case ta:case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case Rs:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xa:case va:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ps:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xu(i){switch(i){case Ge:case Eo:return{byteLength:1,components:1};case Ni:case Co:case rn:return{byteLength:2,components:1};case Vr:case Qr:return{byteLength:2,components:4};case sn:case zr:case Xe:return{byteLength:4,components:1};case To:case Bo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kl(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let y=f[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,If=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Mu,alphahash_pars_fragment:Su,alphamap_fragment:wu,alphamap_pars_fragment:bu,alphatest_fragment:Eu,alphatest_pars_fragment:Cu,aomap_fragment:Tu,aomap_pars_fragment:Bu,batching_pars_vertex:Iu,batching_vertex:Ru,begin_vertex:Pu,beginnormal_vertex:Du,bsdfs:Lu,iridescence_fragment:Uu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Hu,color_fragment:ku,color_pars_fragment:zu,color_pars_vertex:Vu,color_vertex:Qu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:Ju,displacementmap_vertex:qu,emissivemap_fragment:Ku,emissivemap_pars_fragment:Zu,colorspace_fragment:ju,colorspace_pars_fragment:$u,envmap_fragment:td,envmap_common_pars_fragment:ed,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:sd,fog_vertex:rd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:cd,gradientmap_pars_fragment:ld,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:Ad,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:vd,lights_fragment_begin:yd,lights_fragment_maps:Md,lights_fragment_end:Sd,lightprobes_pars_fragment:wd,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Td,map_fragment:Bd,map_pars_fragment:Id,map_particle_fragment:Rd,map_particle_pars_fragment:Pd,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Ud,morphcolor_vertex:Fd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Od,morphtarget_vertex:Gd,normal_fragment_begin:Hd,normal_fragment_maps:kd,normal_pars_fragment:zd,normal_pars_vertex:Vd,normal_vertex:Qd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:qd,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:jd,project_vertex:$d,dithering_fragment:tf,dithering_pars_fragment:ef,roughnessmap_fragment:nf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:cf,skinbase_vertex:lf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:df,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:Af,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:_f,uv_pars_fragment:xf,uv_pars_vertex:vf,uv_vertex:yf,worldpos_vertex:Mf,background_vert:Sf,background_frag:wf,backgroundCube_vert:bf,backgroundCube_frag:Ef,cube_vert:Cf,cube_frag:Tf,depth_vert:Bf,depth_frag:If,distance_vert:Rf,distance_frag:Pf,equirect_vert:Df,equirect_frag:Lf,linedashed_vert:Uf,linedashed_frag:Ff,meshbasic_vert:Nf,meshbasic_frag:Of,meshlambert_vert:Gf,meshlambert_frag:Hf,meshmatcap_vert:kf,meshmatcap_frag:zf,meshnormal_vert:Vf,meshnormal_frag:Qf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:Yf,meshphysical_frag:Jf,meshtoon_vert:qf,meshtoon_frag:Kf,points_vert:Zf,points_frag:jf,shadow_vert:$f,shadow_frag:tp,sprite_vert:ep,sprite_frag:np},dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},_n={basic:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Pe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Pe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Pe([dt.points,dt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Pe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Pe([dt.common,dt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Pe([dt.sprite,dt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Pe([dt.common,dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Pe([dt.lights,dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};_n.physical={uniforms:Pe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Ta={r:0,b:0,g:0},ip=new re,Zl=new Dt;Zl.set(-1,0,0,0,1,0,0,0,1);function sp(i,t,e,n,s,r){let a=new It(0),o=s===!0?0:1,c,l,u=null,f=0,h=null;function p(C){let B=C.isScene===!0?C.background:null;if(B&&B.isTexture){let v=C.backgroundBlurriness>0;B=t.get(B,v)}return B}function _(C){let B=!1,v=p(C);v===null?m(a,o):v&&v.isColor&&(m(v,1),B=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(C,B){let v=p(B);v&&(v.isCubeTexture||v.mapping===bs)?(l===void 0&&(l=new Jt(new On(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ai(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(B.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zl),l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==Zt,(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new ei(2,2),new ze({name:"BackgroundMaterial",uniforms:ai(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function m(C,B){C.getRGB(Ta,Uo(i)),e.buffers.color.setClear(Ta.r,Ta.g,Ta.b,B,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,B=1){a.set(C),o=B,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,m(a,o)},render:_,addToRenderList:y,dispose:d}}function rp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(L,G,V,M,H){let q=!1,J=f(L,M,V,G);r!==J&&(r=J,l(r.object)),q=p(L,M,V,H),q&&_(L,M,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(L,G,V,M),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,G,V,M){let H=M.wireframe===!0,q=n[G.id];q===void 0&&(q={},n[G.id]=q);let J=L.isInstancedMesh===!0?L.id:0,nt=q[J];nt===void 0&&(nt={},q[J]=nt);let X=nt[V.id];X===void 0&&(X={},nt[V.id]=X);let $=X[H];return $===void 0&&($=h(c()),X[H]=$),$}function h(L){let G=[],V=[],M=[];for(let H=0;H<e;H++)G[H]=0,V[H]=0,M[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:M,object:L,attributes:{},index:null}}function p(L,G,V,M){let H=r.attributes,q=G.attributes,J=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=H[X],wt=q[X];if(wt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(wt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(wt=L.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;J++}return r.attributesNum!==J||r.index!==M}function _(L,G,V,M){let H={},q=G.attributes,J=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),H[X]=wt,J++}r.attributes=H,r.attributesNum=J,r.index=M}function y(){let L=r.newAttributes;for(let G=0,V=L.length;G<V;G++)L[G]=0}function m(L){d(L,0)}function d(L,G){let V=r.newAttributes,M=r.enabledAttributes,H=r.attributeDivisors;V[L]=1,M[L]===0&&(i.enableVertexAttribArray(L),M[L]=1),H[L]!==G&&(i.vertexAttribDivisor(L,G),H[L]=G)}function C(){let L=r.newAttributes,G=r.enabledAttributes;for(let V=0,M=G.length;V<M;V++)G[V]!==L[V]&&(i.disableVertexAttribArray(V),G[V]=0)}function B(L,G,V,M,H,q,J){J===!0?i.vertexAttribIPointer(L,G,V,H,q):i.vertexAttribPointer(L,G,V,M,H,q)}function v(L,G,V,M){y();let H=M.attributes,q=V.getAttributes(),J=G.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let $=H[nt];if($===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let tt=$.normalized,wt=$.itemSize,yt=t.get($);if(yt===void 0)continue;let jt=yt.buffer,Ht=yt.type,Wt=yt.bytesPerElement,W=Ht===i.INT||Ht===i.UNSIGNED_INT||$.gpuType===zr;if($.isInterleavedBufferAttribute){let Q=$.data,st=Q.stride,gt=$.offset;if(Q.isInstancedInterleavedBuffer){for(let rt=0;rt<X.locationSize;rt++)d(X.location+rt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<X.locationSize;rt++)m(X.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<X.locationSize;rt++)B(X.location+rt,wt/X.locationSize,Ht,tt,st*Wt,(gt+wt/X.locationSize*rt)*Wt,W)}else{if($.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q,$.meshPerAttribute);L.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Q=0;Q<X.locationSize;Q++)B(X.location+Q,wt/X.locationSize,Ht,tt,wt*Wt,wt/X.locationSize*Q*Wt,W)}}else if(J!==void 0){let tt=J[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}C()}function S(){E();for(let L in n){let G=n[L];for(let V in G){let M=G[V];for(let H in M){let q=M[H];for(let J in q)u(q[J].object),delete q[J];delete M[H]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let G=n[L.id];for(let V in G){let M=G[V];for(let H in M){let q=M[H];for(let J in q)u(q[J].object),delete q[J];delete M[H]}}delete n[L.id]}function T(L){for(let G in n){let V=n[G];for(let M in V){let H=V[M];if(H[L.id]===void 0)continue;let q=H[L.id];for(let J in q)u(q[J].object),delete q[J];delete H[L.id]}}}function x(L){for(let G in n){let V=n[G],M=L.isInstancedMesh===!0?L.id:0,H=V[M];if(H!==void 0){for(let q in H){let J=H[q];for(let nt in J)u(J[nt].object),delete J[nt];delete H[q]}delete V[M],Object.keys(V).length===0&&delete n[G]}}}function E(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:C}}function ap(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function op(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ye&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ge&&T!==Xe&&!x&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Rt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:C,maxVaryings:B,maxFragmentUniforms:v,maxSamples:S,samples:w}}function cp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{let C=r?0:n,B=C*4,v=d.clippingState||null;c.value=v,v=u(_,h,B,p);for(let S=0;S!==B;++S)v[S]=e[S];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,_){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let d=p+y*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let B=0,v=p;B!==y;++B,v+=4)a.copy(f[B]).applyMatrix4(C,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ki=4,lp=6,hp=20,up=256,Ls=new Li,Bl=new It,Qo=null,Wo=0,Xo=0,Yo=!1,dp=new O,oi=new O,Vi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=dp}=r;Qo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,Wo,Xo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:rn,format:Ye,colorSpace:es,depthBuffer:!1},s=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fp(r)),this._blurMaterial=Ap(r,t,e),this._ggxMaterial=pp(r,t,e)}return s}_compileMaterial(t){let e=new Jt(new Ne,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,s,r){let c=new Me(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Bl),f.toneMapping=nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new On,new en({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,C=t.background;C?C.isColor&&(m.color.copy(C),t.background=null,d=!0):(m.color.copy(Bl),d=!0);for(let B=0;B<6;B++){let v=B%3;v===0?(c.up.set(0,l[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[B],r.y,r.z)):v===1?(c.up.set(0,0,l[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[B],r.z)):(c.up.set(0,l[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[B]));let S=this._cubeSize;Hi(s,v*S,B>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(y,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vn||t.mapping===ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Hi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ls)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,p=f*h,{_lodMax:_}=this,y=this._sizeLods[n],m=3*y*(n>_-ki?n-_+ki:0),d=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=_-e,Hi(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(o,Ls),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Hi(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(o,Ls)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ki?s-this._lodMax+ki:0),h=4*(this._cubeSize-u);Hi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Ls)}};function fp(i){let t=[],e=[],n=i,s=i-ki+1+lp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,_=new Float32Array(p*h*f),y=new Float32Array(p*h*f);for(let d=0;d<f;d++){let C=d%3*2/3-1,B=d>2?0:-1,v=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];_.set(v,p*h*d);for(let S=0;S<h;S++){let w=u[S*2]*2-1,T=u[S*2+1]*2-1;d===0?oi.set(1,T,w):d===1?oi.set(-w,1,-T):d===2?oi.set(-w,T,1):d===3?oi.set(-1,T,-w):d===4?oi.set(-w,-1,T):oi.set(w,T,-1),oi.toArray(y,(d*h+S)*p)}}let m=new Ne;m.setAttribute("position",new Re(_,p)),m.setAttribute("outputDirection",new Re(y,p)),e.push(new Jt(m,null)),n>ki&&n--}return{lodMeshes:e,sizeLods:t}}function Il(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pp(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:up,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ap(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:hp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Rl(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Pl(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ia=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new us(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new On(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:mn});r.uniforms.tEquirect.value=e;let a=new Jt(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Se),new Ur(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function mp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Gr||p===Hr)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Ia(_.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===Gr||p===Hr,y=p===Vn||p===ri;if(_||y){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Vi(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let C=h.image;return _&&C&&C.height>0||y&&C&&c(C)?(n===null&&(n=new Vi(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Gr?h.mapping=Vn:p===Hr&&(h.mapping=ri),h}function c(h){let p=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&p++;return p===_}function l(h){let p=h.target;p.removeEventListener("dispose",l);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function gp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$n("WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,_=f.attributes.position,y=0;if(_===void 0)return;if(p!==null){let C=p.array;y=p.version;for(let B=0,v=C.length;B<v;B+=3){let S=C[B+0],w=C[B+1],T=C[B+2];h.push(S,w,w,T,T,S)}}else{let C=_.array;y=_.version;for(let B=0,v=C.length/3-1;B<v;B+=3){let S=B+0,w=B+1,T=B+2;h.push(S,w,w,T,T,S)}}let m=new(_.count>=65535?os:as)(h,1);m.version=y;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function xp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function l(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function vp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yp(i,t,e){let n=new WeakMap,s=new le;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],B=0;p===!0&&(B=1),_===!0&&(B=2),y===!0&&(B=3);let v=o.attributes.position.count*B,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*f),T=new ss(w,v,S,f);T.type=Xe,T.needsUpdate=!0;let x=B*4;for(let D=0;D<f;D++){let L=m[D],G=d[D],V=C[D],M=v*S*4*D;for(let H=0;H<L.count;H++){let q=H*x;p===!0&&(s.fromBufferAttribute(L,H),w[M+q+0]=s.x,w[M+q+1]=s.y,w[M+q+2]=s.z,w[M+q+3]=0),_===!0&&(s.fromBufferAttribute(G,H),w[M+q+4]=s.x,w[M+q+5]=s.y,w[M+q+6]=s.z,w[M+q+7]=0),y===!0&&(s.fromBufferAttribute(V,H),w[M+q+8]=s.x,w[M+q+9]=s.y,w[M+q+10]=s.z,w[M+q+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new Gt(v,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Mp(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Sp={[xo]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[ws]:"ACES_FILMIC_TONE_MAPPING",[So]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[Mo]:"CUSTOM_TONE_MAPPING"};function wp(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ne;l.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new Mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Jt(l,u),h=new Li(-1,1,1,-1,0,1),p=null,_=null,y=!1,m,d=null,C=[],B=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let w=0;w<C.length;w++){let T=C[w];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){C=v,B=C.length>0&&C[0].isRenderPass===!0;let S=a.width,w=a.height;C.length>0&&o===null&&(o=new Oe(S,w,{type:rn,depthBuffer:!1,stencilBuffer:!1}),c=new Oe(S,w,{type:rn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<C.length;T++){let x=C[T];x.setSize&&x.setSize(S,w)}},this.begin=function(v,S){if(y||v.toneMapping===nn&&C.length===0)return!1;if(d=S,S!==null){let w=S.width,T=S.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return B===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=nn,!0},this.hasRenderPass=function(){return B},this.end=function(v,S){v.toneMapping=m,y=!0;let w=a,T=o;for(let x=0;x<C.length;x++){let E=C[x];E.enabled!==!1&&(E.render(v,T,w,S),E.needsSwap!==!1&&(w=T,T=T===o?c:o))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,u.defines={},Qt.getTransfer(p)===Zt&&(u.defines.SRGB_TRANSFER="");let x=Sp[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(d),v.render(f,h),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var jl=new Fe,Ko=new Nn(1,1),$l=new ss,th=new xr,eh=new us,Dl=[],Ll=[],Ul=new Float32Array(16),Fl=new Float32Array(9),Nl=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dl[s];if(r===void 0&&(r=new Float32Array(s),Dl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),_e(e,n)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),_e(e,n)}}function Rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ul.set(n),i.uniformMatrix4fv(this.addr,!1,Ul),_e(e,n)}}function Pp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=e.isReversedDepthBuffer()?Ea:ba,r=Ko):r=jl,e.setTexture2D(t||r,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||th,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eh,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$l,s)}function Qp(i){switch(i){case 5126:return bp;case 35664:return Ep;case 35665:return Cp;case 35666:return Tp;case 35674:return Bp;case 35675:return Ip;case 35676:return Rp;case 5124:case 35670:return Pp;case 35667:case 35671:return Dp;case 35668:case 35672:return Lp;case 35669:case 35673:return Up;case 5125:return Fp;case 36294:return Np;case 36295:return Op;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,t){i.uniform1fv(this.addr,t)}function Xp(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jp(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kp(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zp(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jp(i,t){i.uniform1iv(this.addr,t)}function $p(i,t){i.uniform2iv(this.addr,t)}function tA(i,t){i.uniform3iv(this.addr,t)}function eA(i,t){i.uniform4iv(this.addr,t)}function nA(i,t){i.uniform1uiv(this.addr,t)}function iA(i,t){i.uniform2uiv(this.addr,t)}function sA(i,t){i.uniform3uiv(this.addr,t)}function rA(i,t){i.uniform4uiv(this.addr,t)}function aA(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ko:a=jl;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function oA(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||th,r[a])}function cA(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||eh,r[a])}function lA(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$l,r[a])}function hA(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return Yp;case 35666:return Jp;case 35674:return qp;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return jp;case 35667:case 35671:return $p;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return lA}}var Zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qp(e.type)}},jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hA(e.type)}},$o=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function Ol(i,t){i.seq.push(t),i.map[t.id]=t}function uA(i,t,e){let n=i.name,s=n.length;for(Jo.lastIndex=0;;){let r=Jo.exec(n),a=Jo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ol(e,l===void 0?new Zo(o,i,t):new jo(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new $o(o),Ol(e,f)),e=f}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);uA(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dA=37297,fA=0;function pA(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Hl=new Dt;function AA(i){Qt._getMatrix(Hl,Qt.workingColorSpace,i);let t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ns:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+pA(i.getShaderSource(t),o)}else return r}function mA(i,t){let e=AA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gA={[xo]:"Linear",[vo]:"Reinhard",[yo]:"Cineon",[ws]:"ACESFilmic",[So]:"AgX",[wo]:"Neutral",[Mo]:"Custom"};function _A(i,t){let e=gA[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ba=new O;function xA(){Qt.getLuminanceCoefficients(Ba);let i=Ba.x.toFixed(4),t=Ba.y.toFixed(4),e=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function yA(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function MA(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function zl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(SA,bA)}var wA=new Map;function bA(i,t){let e=Ft[t];if(e===void 0){let n=wA.get(t);if(n!==void 0)e=Ft[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tc(e)}var EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(EA,CA)}function CA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var TA={[Ss]:"SHADOWMAP_TYPE_PCF",[Ui]:"SHADOWMAP_TYPE_VSM"};function BA(i){return TA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IA={[Vn]:"ENVMAP_TYPE_CUBE",[ri]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE_UV"};function RA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":IA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var PA={[ri]:"ENVMAP_MODE_REFRACTION"};function DA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":PA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var LA={[Or]:"ENVMAP_BLENDING_MULTIPLY",[cl]:"ENVMAP_BLENDING_MIX",[ll]:"ENVMAP_BLENDING_ADD"};function UA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":LA[i.combine]||"ENVMAP_BLENDING_NONE"}function FA(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function NA(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=BA(e),l=RA(e),u=DA(e),f=UA(e),h=FA(e),p=vA(e),_=yA(r),y=s.createProgram(),m,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fs).join(`
`),d.length>0&&(d+=`
`)):(m=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),d=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==nn?_A("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mA("linearToOutputTexel",e.outputColorSpace),xA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=tc(a),a=zl(a,e),a=Vl(a,e),o=tc(o),o=zl(o,e),o=Vl(o,e),a=Ql(a),o=Ql(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let B=C+m+a,v=C+d+o,S=Gl(s,s.VERTEX_SHADER,B),w=Gl(s,s.FRAGMENT_SHADER,v);s.attachShader(y,S),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(L){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(S)||"",M=s.getShaderInfoLog(w)||"",H=G.trim(),q=V.trim(),J=M.trim(),nt=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,w);else{let $=kl(s,S,"vertex"),tt=kl(s,w,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+$+`
`+tt)}else H!==""?Rt("WebGLProgram: Program Info Log:",H):(q===""||J==="")&&(X=!1);X&&(L.diagnostics={runnable:nt,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(S),s.deleteShader(w),x=new zi(s,y),E=MA(s,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,dA)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=w,this}var OA=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=OA++,this.code=t,this.usedTimes=0}};function GA(i){return i===Xn||i===Rs||i===Ps}function HA(i,t,e,n,s,r){let a=new rs,o=new ec,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,E,D,L,G,V){let M=L.fog,H=G.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||q,J),X=nt&&nt.mapping===bs?nt.image.height:null,$=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Rt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=tt!==void 0?tt.length:0,yt=0;H.morphAttributes.position!==void 0&&(yt=1),H.morphAttributes.normal!==void 0&&(yt=2),H.morphAttributes.color!==void 0&&(yt=3);let jt,Ht,Wt,W;if($){let ie=_n[$];jt=ie.vertexShader,Ht=ie.fragmentShader}else{jt=x.vertexShader,Ht=x.fragmentShader;let ie=o.getVertexShaderStage(x),qt=o.getFragmentShaderStage(x);o.update(x,ie,qt),Wt=ie.id,W=qt.id}let Q=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),gt=G.isInstancedMesh===!0,rt=G.isBatchedMesh===!0,Tt=!!x.map,ue=!!x.matcap,Nt=!!nt,kt=!!x.aoMap,Xt=!!x.lightMap,Ot=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,de=!!x.displacementMap,ye=!!x.emissiveMap,ae=!!x.metalnessMap,he=!!x.roughnessMap,P=x.anisotropy>0,Ce=x.clearcoat>0,$t=x.dispersion>0,b=x.retroreflectivity>0,A=x.iridescence>0,U=x.sheen>0,k=x.transmission>0,Y=P&&!!x.anisotropyMap,it=Ce&&!!x.clearcoatMap,at=Ce&&!!x.clearcoatNormalMap,K=Ce&&!!x.clearcoatRoughnessMap,j=A&&!!x.iridescenceMap,ot=A&&!!x.iridescenceThicknessMap,bt=U&&!!x.sheenColorMap,ut=U&&!!x.sheenRoughnessMap,ct=!!x.specularMap,Et=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Lt=k&&!!x.transmissionMap,R=k&&!!x.thicknessMap,lt=!!x.gradientMap,Z=!!x.alphaMap,ht=x.alphaTest>0,At=!!x.alphaHash,et=!!x.extensions,Ct=nn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let Mt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:Ht,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:rt,batchingColor:rt&&G._colorsTexture!==null,instancing:gt,instancingColor:gt&&G.instanceColor!==null,instancingMorph:gt&&G.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Tt,matcap:ue,envMap:Nt,envMapMode:Nt&&nt.mapping,envMapCubeUVHeight:X,aoMap:kt,lightMap:Xt,bumpMap:Ot,normalMap:ee,displacementMap:de,emissiveMap:ye,normalMapObjectSpace:ee&&x.normalMapType===dl,normalMapTangentSpace:ee&&x.normalMapType===Ds,packedNormalMap:ee&&x.normalMapType===Ds&&GA(x.normalMap.format),metalnessMap:ae,roughnessMap:he,anisotropy:P,anisotropyMap:Y,clearcoat:Ce,clearcoatMap:it,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:$t,retroreflection:b,iridescence:A,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:U,sheenColorMap:bt,sheenRoughnessMap:ut,specularMap:ct,specularColorMap:Et,specularIntensityMap:Bt,transmission:k,transmissionMap:Lt,thicknessMap:R,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:At,combine:x.combine,mapUv:Tt&&_(x.map.channel),aoMapUv:kt&&_(x.aoMap.channel),lightMapUv:Xt&&_(x.lightMap.channel),bumpMapUv:Ot&&_(x.bumpMap.channel),normalMapUv:ee&&_(x.normalMap.channel),displacementMapUv:de&&_(x.displacementMap.channel),emissiveMapUv:ye&&_(x.emissiveMap.channel),metalnessMapUv:ae&&_(x.metalnessMap.channel),roughnessMapUv:he&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:it&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(x.sheenRoughnessMap.channel),specularMapUv:ct&&_(x.specularMap.channel),specularColorMapUv:Et&&_(x.specularColorMap.channel),specularIntensityMapUv:Bt&&_(x.specularIntensityMap.channel),transmissionMapUv:Lt&&_(x.transmissionMap.channel),thicknessMapUv:R&&_(x.thicknessMap.channel),alphaMapUv:Z&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||P),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Tt||Z),fog:!!M,useFog:x.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:st,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:yt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Tt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===Zt,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===Zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ee,flipSided:x.side===be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(d(E,x),C(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function d(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function C(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function B(x){let E=p[x.type],D;if(E){let L=_n[E];D=El.clone(L.uniforms)}else D=x.uniforms;return D}function v(x,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new NA(i,E,x,s),l.push(D),u.set(E,D)),D}function S(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:B,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:T}}function kA(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,y,m,d){let C=i[t];return C===void 0?(C={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:d},i[t]=C):(C.id=h.id,C.object=h,C.geometry=p,C.material=_,C.materialVariant=a(h),C.groupOrder=y,C.renderOrder=h.renderOrder,C.z=m,C.group=d),t++,C}function c(h,p,_,y,m,d,C){C.reversedDepth===!0&&(m=-m);let B=o(h,p,_,y,m,d);_.transmission>0?n.push(B):_.transparent===!0?s.push(B):e.push(B)}function l(h,p,_,y,m,d){let C=o(h,p,_,y,m,d);_.transmission>0?n.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function u(h,p){e.length>1&&e.sort(h||zA),n.length>1&&n.sort(p||Xl),s.length>1&&s.sort(p||Xl)}function f(){for(let h=t,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function VA(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function QA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new It};break;case"SpotLight":e={position:new O,direction:new O,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function WA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var XA=0;function YA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function JA(i){let t=new QA,e=WA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new re,a=new re;function o(l){let u=0,f=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,C=0,B=0,v=0,S=0,w=0,T=0,x=0,E=0,D=0;l.sort(YA);for(let G=0,V=l.length;G<V;G++){let M=l[G],H=M.color,q=M.intensity,J=M.distance,nt=null;if(M.shadow&&M.shadow.map&&(M.shadow.map.texture.format===Xn?nt=M.shadow.map.texture:nt=M.shadow.map.depthTexture||M.shadow.map.texture),M.isAmbientLight)u+=H.r*q,f+=H.g*q,h+=H.b*q;else if(M.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(M.sh.coefficients[X],q);D++}else if(M.isSunLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let $=M.shadow,tt=e.get(M);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=tt,n.sunShadowMap[_]=nt;let wt=$.getViewportCount();for(let yt=0;yt<wt;yt++)n.sunShadowMatrix[y+yt]=$.getMatrix(yt),n.sunShadowCascade[y+yt]=$._cascadeData[yt];y+=wt,_++}n.sun[p]=X,p++}else if(M.isDirectionalLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let $=M.shadow,tt=e.get(M);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=M.shadow.matrix,S++}n.directional[m]=X,m++}else if(M.isSpotLight){let X=t.get(M);X.position.setFromMatrixPosition(M.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=J,X.coneCos=Math.cos(M.angle),X.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),X.decay=M.decay,n.spot[C]=X;let $=M.shadow;if(M.map&&(n.spotLightMap[x]=M.map,x++,$.updateMatrices(M),M.castShadow&&E++),n.spotLightMatrix[C]=$.matrix,M.castShadow){let tt=e.get(M);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.spotShadow[C]=tt,n.spotShadowMap[C]=nt,T++}C++}else if(M.isRectAreaLight){let X=t.get(M);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(M.width*.5,0,0),X.halfHeight.set(0,M.height*.5,0),n.rectArea[B]=X,B++}else if(M.isPointLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),X.distance=M.distance,X.decay=M.decay,M.castShadow){let $=M.shadow,tt=e.get(M);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,n.pointShadow[d]=tt,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=M.shadow.matrix,w++}n.point[d]=X,d++}else if(M.isHemisphereLight){let X=t.get(M);X.skyColor.copy(M.color).multiplyScalar(q),X.groundColor.copy(M.groundColor).multiplyScalar(q),n.hemi[v]=X,v++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==C||L.rectAreaLength!==B||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==T||L.numSpotMaps!==x||L.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=m,n.spot.length=C,n.rectArea.length=B,n.point.length=d,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,L.sunLength=p,L.directionalLength=m,L.pointLength=d,L.spotLength=C,L.rectAreaLength=B,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=T,L.numSpotMaps=x,L.numLightProbes=D,n.version=XA++)}function c(l,u){let f=0,h=0,p=0,_=0,y=0,m=0,d=u.matrixWorldInverse;for(let C=0,B=l.length;C<B;C++){let v=l[C];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(v.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function Jl(i){let t=new JA(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qA(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jl(i),t.set(s,[o])):r>=a.length?(o=new Jl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jA=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],$A=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ql=new re,Us=new O,qo=new O;function tm(i,t,e){let n=new Pi,s=new Gt,r=new Gt,a=new le,o=new Sr,c=new wr,l={},u=e.maxTextureSize,f={[zn]:be,[be]:zn,[Ee]:Ee},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ne;_.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Jt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let d=this.type;this.render=function(w,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vc&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let E=i.getRenderTarget(),D=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(mn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=d!==this.type;V&&T.traverse(function(M){M.material&&(Array.isArray(M.material)?M.material.forEach(H=>H.needsUpdate=!0):M.material.needsUpdate=!0)});for(let M=0,H=w.length;M<H;M++){let q=w[M],J=q.shadow;if(J===void 0){Rt("WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let nt=J.getFrameExtents();s.multiply(nt),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ui){if(q.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Oe(s.x,s.y,{format:Xn,type:rn,minFilter:Se,magFilter:Se,generateMipmaps:!1}),J.map.texture.name=q.name+".shadowMap",J.map.depthTexture=new Nn(s.x,s.y,Xe),J.map.depthTexture.name=q.name+".shadowMapDepth",J.map.depthTexture.format=hn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ve,J.map.depthTexture.magFilter=ve}else q.isPointLight?(J.map=new Ia(s.x),J.map.depthTexture=new yr(s.x,sn)):(J.map=new Oe(s.x,s.y),J.map.depthTexture=new Nn(s.x,s.y,sn)),J.map.depthTexture.name=q.name+".shadowMap",J.map.depthTexture.format=hn,this.type===Ss?(J.map.depthTexture.compareFunction=X?Ea:ba,J.map.depthTexture.minFilter=Se,J.map.depthTexture.magFilter=Se):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ve,J.map.depthTexture.magFilter=ve);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let $=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();q.isPointLight!==!0&&J.updateMatrices(q,x);for(let tt=0;tt<$;tt++){let wt=J.getCamera(tt);if(q.isPointLight){let yt=J.camera,jt=J.matrix,Ht=q.distance||yt.far;Ht!==yt.far&&(yt.far=Ht,yt.updateProjectionMatrix()),Us.setFromMatrixPosition(q.matrixWorld),yt.position.copy(Us),qo.copy(yt.position),qo.add(jA[tt]),yt.up.copy($A[tt]),yt.lookAt(qo),yt.updateMatrixWorld(),jt.makeTranslation(-Us.x,-Us.y,-Us.z),ql.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ql,yt.coordinateSystem,yt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(J.map),i.clear());let yt=J.getViewport(tt);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),G.viewport(a)}n=J.getFrustum(tt),v(T,x,wt,q,this.type)}J.isPointLightShadow!==!0&&this.type===Ui&&C(J,x),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,D,L)};function C(w,T){let x=t.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Oe(s.x,s.y,{format:Xn,type:rn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,x,h,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,x,p,y,null)}function B(w,T,x,E){let D=null,L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)D=L;else if(D=x.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let G=D.uuid,V=T.uuid,M=l[G];M===void 0&&(M={},l[G]=M);let H=M[V];H===void 0&&(H=D.clone(),M[V]=H,T.addEventListener("dispose",S)),D=H}if(D.visible=T.visible,D.wireframe=T.wireframe,E===Ui?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:f[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=i.properties.get(D);G.light=x}return D}function v(w,T,x,E,D){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Ui)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let V=t.update(w),M=w.material;if(Array.isArray(M)){let H=V.groups;for(let q=0,J=H.length;q<J;q++){let nt=H[q],X=M[nt.materialIndex];if(X&&X.visible){let $=B(w,X,E,D);w.onBeforeShadow(i,w,T,x,V,$,nt),i.renderBufferDirect(x,null,V,$,w,nt),w.onAfterShadow(i,w,T,x,V,$,nt)}}}else if(M.visible){let H=B(w,M,E,D);w.onBeforeShadow(i,w,T,x,V,H,null),i.renderBufferDirect(x,null,V,H,w,null),w.onAfterShadow(i,w,T,x,V,H,null)}}let G=w.children;for(let V=0,M=G.length;V<M;V++)v(G[V],T,x,E,D)}function S(w){w.target.removeEventListener("dispose",S);for(let x in l){let E=l[x],D=w.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function em(i,t){function e(){let R=!1,lt=new le,Z=null,ht=new le(0,0,0,0);return{setMask:function(At){Z!==At&&!R&&(i.colorMask(At,At,At,At),Z=At)},setLocked:function(At){R=At},setClear:function(At,et,Ct,Mt,ie){ie===!0&&(At*=Mt,et*=Mt,Ct*=Mt),lt.set(At,et,Ct,Mt),ht.equals(lt)===!1&&(i.clearColor(At,et,Ct,Mt),ht.copy(lt))},reset:function(){R=!1,Z=null,ht.set(-1,0,0,0)}}}function n(){let R=!1,lt=!1,Z=null,ht=null,At=null;return{setReversed:function(et){if(lt!==et){let Ct=t.get("EXT_clip_control");et?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=et;let Mt=At;At=null,this.setClear(Mt)}},getReversed:function(){return lt},setTest:function(et){et?Q(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(et){Z!==et&&!R&&(i.depthMask(et),Z=et)},setFunc:function(et){if(lt&&(et=wl[et]),ht!==et){switch(et){case or:i.depthFunc(i.NEVER);break;case cr:i.depthFunc(i.ALWAYS);break;case lr:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case hr:i.depthFunc(i.EQUAL);break;case ur:i.depthFunc(i.GEQUAL);break;case dr:i.depthFunc(i.GREATER);break;case fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=et}},setLocked:function(et){R=et},setClear:function(et){At!==et&&(At=et,lt&&(et=1-et),i.clearDepth(et))},reset:function(){R=!1,Z=null,ht=null,At=null,lt=!1}}}function s(){let R=!1,lt=null,Z=null,ht=null,At=null,et=null,Ct=null,Mt=null,ie=null;return{setTest:function(qt){R||(qt?Q(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(qt){lt!==qt&&!R&&(i.stencilMask(qt),lt=qt)},setFunc:function(qt,Je,an){(Z!==qt||ht!==Je||At!==an)&&(i.stencilFunc(qt,Je,an),Z=qt,ht=Je,At=an)},setOp:function(qt,Je,an){(et!==qt||Ct!==Je||Mt!==an)&&(i.stencilOp(qt,Je,an),et=qt,Ct=Je,Mt=an)},setLocked:function(qt){R=qt},setClear:function(qt){ie!==qt&&(i.clearStencil(qt),ie=qt)},reset:function(){R=!1,lt=null,Z=null,ht=null,At=null,et=null,Ct=null,Mt=null,ie=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],y=null,m=!1,d=null,C=null,B=null,v=null,S=null,w=null,T=null,x=new It(0,0,0),E=0,D=!1,L=null,G=null,V=null,M=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=nt>=2);let $=null,tt={},wt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),jt=new le().fromArray(wt),Ht=new le().fromArray(yt);function Wt(R,lt,Z,ht){let At=new Uint8Array(4),et=i.createTexture();i.bindTexture(R,et),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Z;Ct++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(lt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return et}let W={};W[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ei),Ot(!1),ee(fo),Q(i.CULL_FACE),kt(mn);function Q(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function st(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function gt(R,lt){return h[R]!==lt?(i.bindFramebuffer(R,lt),h[R]=lt,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function rt(R,lt){let Z=_,ht=!1;if(R){Z=p.get(lt),Z===void 0&&(Z=[],p.set(lt,Z));let At=R.textures;if(Z.length!==At.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Ct=At.length;et<Ct;et++)Z[et]=i.COLOR_ATTACHMENT0+et;Z.length=At.length,ht=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Z)}function Tt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let ue={[si]:i.FUNC_ADD,[Wc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};ue[Yc]=i.MIN,ue[Jc]=i.MAX;let Nt={[qc]:i.ZERO,[Kc]:i.ONE,[Zc]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[il]:i.SRC_ALPHA_SATURATE,[el]:i.DST_COLOR,[$c]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[nl]:i.ONE_MINUS_DST_COLOR,[tl]:i.ONE_MINUS_DST_ALPHA,[sl]:i.CONSTANT_COLOR,[rl]:i.ONE_MINUS_CONSTANT_COLOR,[al]:i.CONSTANT_ALPHA,[ol]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(R,lt,Z,ht,At,et,Ct,Mt,ie,qt){if(R===mn){m===!0&&(st(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),R!==Qc){if(R!==d||qt!==D){if((C!==si||S!==si)&&(i.blendEquation(i.FUNC_ADD),C=si,S=si),qt)switch(R){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",R);break}else switch(R){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ao:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",R);break}B=null,v=null,w=null,T=null,x.set(0,0,0),E=0,d=R,D=qt}return}At=At||lt,et=et||Z,Ct=Ct||ht,(lt!==C||At!==S)&&(i.blendEquationSeparate(ue[lt],ue[At]),C=lt,S=At),(Z!==B||ht!==v||et!==w||Ct!==T)&&(i.blendFuncSeparate(Nt[Z],Nt[ht],Nt[et],Nt[Ct]),B=Z,v=ht,w=et,T=Ct),(Mt.equals(x)===!1||ie!==E)&&(i.blendColor(Mt.r,Mt.g,Mt.b,ie),x.copy(Mt),E=ie),d=R,D=!1}function Xt(R,lt){R.side===Ee?st(i.CULL_FACE):Q(i.CULL_FACE);let Z=R.side===be;lt&&(Z=!Z),Ot(Z),R.blending===Fi&&R.transparent===!1?kt(mn):kt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ht=R.stencilWrite;o.setTest(ht),ht&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ye(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function ee(R){R!==kc?(Q(i.CULL_FACE),R!==G&&(R===fo?i.cullFace(i.BACK):R===zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),G=R}function de(R){R!==V&&(J&&i.lineWidth(R),V=R)}function ye(R,lt,Z){R?(Q(i.POLYGON_OFFSET_FILL),(M!==lt||H!==Z)&&(M=lt,H=Z,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,Z))):st(i.POLYGON_OFFSET_FILL)}function ae(R){R?Q(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function he(R){R===void 0&&(R=i.TEXTURE0+q-1),$!==R&&(i.activeTexture(R),$=R)}function P(R,lt,Z){Z===void 0&&($===null?Z=i.TEXTURE0+q-1:Z=$);let ht=tt[Z];ht===void 0&&(ht={type:void 0,texture:void 0},tt[Z]=ht),(ht.type!==R||ht.texture!==lt)&&($!==Z&&(i.activeTexture(Z),$=Z),i.bindTexture(R,lt||W[R]),ht.type=R,ht.texture=lt)}function Ce(){let R=tt[$];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function A(){try{i.texSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function U(){try{i.texSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function it(){try{i.texStorage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function at(){try{i.texStorage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function K(){try{i.texImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function j(){try{i.texImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ot(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function bt(R,lt){f[R]!==lt&&(i.pixelStorei(R,lt),f[R]=lt)}function ut(R){jt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),jt.copy(R))}function ct(R){Ht.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ht.copy(R))}function Et(R,lt){let Z=l.get(lt);Z===void 0&&(Z=new WeakMap,l.set(lt,Z));let ht=Z.get(R);ht===void 0&&(ht=i.getUniformBlockIndex(lt,R.name),Z.set(R,ht))}function Bt(R,lt){let ht=l.get(lt).get(R);c.get(lt)!==ht&&(i.uniformBlockBinding(lt,ht,R.__bindingPointIndex),c.set(lt,ht))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,tt={},h={},p=new WeakMap,_=[],y=null,m=!1,d=null,C=null,B=null,v=null,S=null,w=null,T=null,x=new It(0,0,0),E=0,D=!1,L=null,G=null,V=null,M=null,H=null,jt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:st,bindFramebuffer:gt,drawBuffers:rt,useProgram:Tt,setBlending:kt,setMaterial:Xt,setFlipSided:Ot,setCullFace:ee,setLineWidth:de,setPolygonOffset:ye,setScissorTest:ae,activeTexture:he,bindTexture:P,unbindTexture:Ce,compressedTexImage2D:$t,compressedTexImage3D:b,texImage2D:K,texImage3D:j,pixelStorei:bt,getParameter:ot,updateUBOMapping:Et,uniformBlockBinding:Bt,texStorage2D:it,texStorage3D:at,texSubImage2D:A,texSubImage3D:U,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:ut,viewport:ct,reset:Lt}}function nm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,u=new WeakMap,f=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,A){return _?new OffscreenCanvas(b,A):is("canvas")}function m(b,A,U){let k=1,Y=$t(b);if((Y.width>U||Y.height>U)&&(k=U/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let it=Math.floor(k*Y.width),at=Math.floor(k*Y.height);h===void 0&&(h=y(it,at));let K=A?y(it,at):h;return K.width=it,K.height=at,K.getContext("2d").drawImage(b,0,0,it,at),Rt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+at+")."),K}else return"data"in b&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function d(b){return b.generateMipmaps}function C(b){i.generateMipmap(b)}function B(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,A,U,k,Y,it=!1){if(b!==null){if(i[b]!==void 0)return i[b];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let at;k&&(at=t.get("EXT_texture_norm16"),at||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=A;if(A===i.RED&&(U===i.FLOAT&&(K=i.R32F),U===i.HALF_FLOAT&&(K=i.R16F),U===i.UNSIGNED_BYTE&&(K=i.R8),U===i.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),U===i.SHORT&&at&&(K=at.R16_SNORM_EXT)),A===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.R8UI),U===i.UNSIGNED_SHORT&&(K=i.R16UI),U===i.UNSIGNED_INT&&(K=i.R32UI),U===i.BYTE&&(K=i.R8I),U===i.SHORT&&(K=i.R16I),U===i.INT&&(K=i.R32I)),A===i.RG&&(U===i.FLOAT&&(K=i.RG32F),U===i.HALF_FLOAT&&(K=i.RG16F),U===i.UNSIGNED_BYTE&&(K=i.RG8),U===i.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),U===i.SHORT&&at&&(K=at.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RG8UI),U===i.UNSIGNED_SHORT&&(K=i.RG16UI),U===i.UNSIGNED_INT&&(K=i.RG32UI),U===i.BYTE&&(K=i.RG8I),U===i.SHORT&&(K=i.RG16I),U===i.INT&&(K=i.RG32I)),A===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGB8UI),U===i.UNSIGNED_SHORT&&(K=i.RGB16UI),U===i.UNSIGNED_INT&&(K=i.RGB32UI),U===i.BYTE&&(K=i.RGB8I),U===i.SHORT&&(K=i.RGB16I),U===i.INT&&(K=i.RGB32I)),A===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),U===i.UNSIGNED_INT&&(K=i.RGBA32UI),U===i.BYTE&&(K=i.RGBA8I),U===i.SHORT&&(K=i.RGBA16I),U===i.INT&&(K=i.RGBA32I)),A===i.RGB&&(U===i.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),U===i.SHORT&&at&&(K=at.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),A===i.RGBA){let j=it?ns:Qt.getTransfer(Y);U===i.FLOAT&&(K=i.RGBA32F),U===i.HALF_FLOAT&&(K=i.RGBA16F),U===i.UNSIGNED_BYTE&&(K=j===Zt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),U===i.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(b,A){let U;return b?A===null||A===sn||A===Oi?U=i.DEPTH24_STENCIL8:A===Xe?U=i.DEPTH32F_STENCIL8:A===Ni&&(U=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===sn||A===Oi?U=i.DEPTH_COMPONENT24:A===Xe?U=i.DEPTH_COMPONENT32F:A===Ni&&(U=i.DEPTH_COMPONENT16),U}function w(b,A){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==ve&&b.minFilter!==Se?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){let A=b.target;A.removeEventListener("dispose",T),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function x(b){let A=b.target;A.removeEventListener("dispose",x),L(A)}function E(b){let A=n.get(b);if(A.__webglInit===void 0)return;let U=b.source,k=p.get(U);if(k){let Y=k[A.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(b),Object.keys(k).length===0&&p.delete(U)}n.remove(b)}function D(b){let A=n.get(b);i.deleteTexture(A.__webglTexture);let U=b.source,k=p.get(U);delete k[A.__cacheKey],a.memory.textures--}function L(b){let A=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(A.__webglFramebuffer[k]))for(let Y=0;Y<A.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(A.__webglFramebuffer[k]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[k])}else{if(Array.isArray(A.__webglFramebuffer))for(let k=0;k<A.__webglFramebuffer.length;k++)i.deleteFramebuffer(A.__webglFramebuffer[k]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let k=0;k<A.__webglColorRenderbuffer.length;k++)A.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[k]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let U=b.textures;for(let k=0,Y=U.length;k<Y;k++){let it=n.get(U[k]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(U[k])}n.remove(b)}let G=0;function V(){G=0}function M(){return G}function H(b){G=b}function q(){let b=G;return b>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,b}function J(b){let A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function nt(b,A){let U=n.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let k=b.image;if(k===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(U,b,A);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+A)}function X(b,A){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){st(U,b,A);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+A)}function $(b,A){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){st(U,b,A);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+A)}function tt(b,A){let U=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){gt(U,b,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+A)}let wt={[pr]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},yt={[ve]:i.NEAREST,[hl]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},jt={[pl]:i.NEVER,[xl]:i.ALWAYS,[Al]:i.LESS,[ba]:i.LEQUAL,[ml]:i.EQUAL,[Ea]:i.GEQUAL,[gl]:i.GREATER,[_l]:i.NOTEQUAL};function Ht(b,A){if(A.type===Xe&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Se||A.magFilter===kr||A.magFilter===Es||A.magFilter===Qn||A.minFilter===Se||A.minFilter===kr||A.minFilter===Es||A.minFilter===Qn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,wt[A.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,wt[A.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,wt[A.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,yt[A.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,jt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ve||A.minFilter!==Es&&A.minFilter!==Qn||A.type===Xe&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Wt(b,A){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",T));let k=A.source,Y=p.get(k);Y===void 0&&(Y={},p.set(k,Y));let it=J(A);if(it!==b.__cacheKey){Y[it]===void 0&&(Y[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Y[it].usedTimes++;let at=Y[b.__cacheKey];at!==void 0&&(Y[b.__cacheKey].usedTimes--,at.usedTimes===0&&D(A)),b.__cacheKey=it,b.__webglTexture=Y[it].texture}return U}function W(b,A,U){return Math.floor(Math.floor(b/U)/A)}function Q(b,A,U,k){let it=b.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,U,k,A.data);else{it.sort((bt,ut)=>bt.start-ut.start);let at=0;for(let bt=1;bt<it.length;bt++){let ut=it[at],ct=it[bt],Et=ut.start+ut.count,Bt=W(ct.start,A.width,4),Lt=W(ut.start,A.width,4);ct.start<=Et+1&&Bt===Lt&&W(ct.start+ct.count-1,A.width,4)===Bt?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++at,it[at]=ct)}it.length=at+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let bt=0,ut=it.length;bt<ut;bt++){let ct=it[bt],Et=Math.floor(ct.start/4),Bt=Math.ceil(ct.count/4),Lt=Et%A.width,R=Math.floor(Et/A.width),lt=Bt,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,Lt,R,lt,Z,U,k,A.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function st(b,A,U){let k=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(k=i.TEXTURE_3D);let Y=Wt(b,A),it=A.source;e.bindTexture(k,b.__webglTexture,i.TEXTURE0+U);let at=n.get(it);if(it.version!==at.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Z=Qt.getPrimaries(Qt.workingColorSpace),ht=A.colorSpace===En?null:Qt.getPrimaries(A.colorSpace),At=A.colorSpace===En||Z===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let j=m(A.image,!1,s.maxTextureSize);j=Ce(A,j);let ot=r.convert(A.format,A.colorSpace),bt=r.convert(A.type),ut=v(A.internalFormat,ot,bt,A.normalized,A.colorSpace,A.isVideoTexture);Ht(k,A);let ct,Et=A.mipmaps,Bt=A.isVideoTexture!==!0,Lt=at.__version===void 0||Y===!0,R=it.dataReady,lt=w(A,j);if(A.isDepthTexture)ut=S(A.format===Wn,A.type),Lt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,ut,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ut,j.width,j.height,0,ot,bt,null));else if(A.isDataTexture)if(Et.length>0){Bt&&Lt&&e.texStorage2D(i.TEXTURE_2D,lt,ut,Et[0].width,Et[0].height);for(let Z=0,ht=Et.length;Z<ht;Z++)ct=Et[Z],Bt?R&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,ot,bt,ct.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,ot,bt,ct.data);A.generateMipmaps=!1}else Bt?(Lt&&e.texStorage2D(i.TEXTURE_2D,lt,ut,j.width,j.height),R&&Q(A,j,ot,bt)):e.texImage2D(i.TEXTURE_2D,0,ut,j.width,j.height,0,ot,bt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Bt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,Et[0].width,Et[0].height,j.depth);for(let Z=0,ht=Et.length;Z<ht;Z++)if(ct=Et[Z],A.format!==Ye)if(ot!==null)if(Bt){if(R)if(A.layerUpdates.size>0){let At=Oo(ct.width,ct.height,A.format,A.type);for(let et of A.layerUpdates){let Ct=ct.data.subarray(et*At/ct.data.BYTES_PER_ELEMENT,(et+1)*At/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,et,ct.width,ct.height,1,ot,Ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,j.depth,ot,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ct.width,ct.height,j.depth,0,ct.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,j.depth,ot,bt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ct.width,ct.height,j.depth,0,ot,bt,ct.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Bt&&Lt&&e.texStorage2D(i.TEXTURE_2D,lt,ut,Et[0].width,Et[0].height);for(let Z=0,ht=Et.length;Z<ht;Z++)ct=Et[Z],A.format!==Ye?ot!==null?Bt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,ct.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?R&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,ot,bt,ct.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,ot,bt,ct.data)}else if(A.isDataArrayTexture)if(Bt){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,j.width,j.height,j.depth),R)if(A.layerUpdates.size>0){let Z=Oo(j.width,j.height,A.format,A.type);for(let ht of A.layerUpdates){let At=j.data.subarray(ht*Z/j.data.BYTES_PER_ELEMENT,(ht+1)*Z/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,j.width,j.height,1,ot,bt,At)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ot,bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,j.width,j.height,j.depth,0,ot,bt,j.data);else if(A.isData3DTexture)Bt?(Lt&&e.texStorage3D(i.TEXTURE_3D,lt,ut,j.width,j.height,j.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ot,bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,ut,j.width,j.height,j.depth,0,ot,bt,j.data);else if(A.isFramebufferTexture){if(Lt)if(Bt)e.texStorage2D(i.TEXTURE_2D,lt,ut,j.width,j.height);else{let Z=j.width,ht=j.height;for(let At=0;At<lt;At++)e.texImage2D(i.TEXTURE_2D,At,ut,Z,ht,0,ot,bt,null),Z>>=1,ht>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),j.parentNode!==Z){Z.appendChild(j),f.add(A),Z.onpaint=ht=>{let At=ht.changedElements;for(let et of f)At.includes(et.image)&&(et.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let At=i.RGBA,et=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,et,Ct,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Bt&&Lt){let Z=$t(Et[0]);e.texStorage2D(i.TEXTURE_2D,lt,ut,Z.width,Z.height)}for(let Z=0,ht=Et.length;Z<ht;Z++)ct=Et[Z],Bt?R&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ot,bt,ct):e.texImage2D(i.TEXTURE_2D,Z,ut,ot,bt,ct);A.generateMipmaps=!1}else if(Bt){if(Lt){let Z=$t(j);e.texStorage2D(i.TEXTURE_2D,lt,ut,Z.width,Z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,bt,j)}else e.texImage2D(i.TEXTURE_2D,0,ut,ot,bt,j);d(A)&&C(k),at.__version=it.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function gt(b,A,U){if(A.image.length!==6)return;let k=Wt(b,A),Y=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let it=n.get(Y);if(Y.version!==it.__version||k===!0){e.activeTexture(i.TEXTURE0+U);let at=Qt.getPrimaries(Qt.workingColorSpace),K=A.colorSpace===En?null:Qt.getPrimaries(A.colorSpace),j=A.colorSpace===En||at===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ot=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!ot&&!bt?ut[et]=m(A.image[et],!0,s.maxCubemapSize):ut[et]=bt?A.image[et].image:A.image[et],ut[et]=Ce(A,ut[et]);let ct=ut[0],Et=r.convert(A.format,A.colorSpace),Bt=r.convert(A.type),Lt=v(A.internalFormat,Et,Bt,A.normalized,A.colorSpace),R=A.isVideoTexture!==!0,lt=it.__version===void 0||k===!0,Z=Y.dataReady,ht=w(A,ct);Ht(i.TEXTURE_CUBE_MAP,A);let At;if(ot){R&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Lt,ct.width,ct.height);for(let et=0;et<6;et++){At=ut[et].mipmaps;for(let Ct=0;Ct<At.length;Ct++){let Mt=At[Ct];A.format!==Ye?Et!==null?R?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Lt,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,Mt.width,Mt.height,Et,Bt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Lt,Mt.width,Mt.height,0,Et,Bt,Mt.data)}}}else{if(At=A.mipmaps,R&&lt){At.length>0&&ht++;let et=$t(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Lt,et.width,et.height)}for(let et=0;et<6;et++)if(bt){R?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,Et,Bt,ut[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,ut[et].width,ut[et].height,0,Et,Bt,ut[et].data);for(let Ct=0;Ct<At.length;Ct++){let ie=At[Ct].image[et].image;R?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,ie.width,ie.height,Et,Bt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Lt,ie.width,ie.height,0,Et,Bt,ie.data)}}else{R?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et,Bt,ut[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,Et,Bt,ut[et]);for(let Ct=0;Ct<At.length;Ct++){let Mt=At[Ct];R?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,Et,Bt,Mt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Lt,Et,Bt,Mt.image[et])}}}d(A)&&C(i.TEXTURE_CUBE_MAP),it.__version=Y.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function rt(b,A,U,k,Y,it){let at=r.convert(U.format,U.colorSpace),K=r.convert(U.type),j=v(U.internalFormat,at,K,U.normalized,U.colorSpace),ot=n.get(A),bt=n.get(U);if(bt.__renderTarget=A,!ot.__hasExternalTextures){let ut=Math.max(1,A.width>>it),ct=Math.max(1,A.height>>it);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,j,ut,ct,A.depth,0,at,K,null):e.texImage2D(Y,it,j,ut,ct,0,at,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,bt.__webglTexture,0,ae(A)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,bt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(b,A,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),A.depthBuffer){let k=A.depthTexture,Y=k&&k.isDepthTexture?k.type:null,it=S(A.stencilBuffer,Y),at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(A),it,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(A),it,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,it,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,b)}else{let k=A.textures;for(let Y=0;Y<k.length;Y++){let it=k[Y],at=r.convert(it.format,it.colorSpace),K=r.convert(it.type),j=v(it.internalFormat,at,K,it.normalized,it.colorSpace);he(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(A),j,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(A),j,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,j,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(b,A,U){let k=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(A.depthTexture);if(Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,A.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,A.depthTexture);let ot=r.convert(A.depthTexture.format),bt=r.convert(A.depthTexture.type),ut;A.depthTexture.format===hn?ut=i.DEPTH_COMPONENT24:A.depthTexture.format===Wn&&(ut=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,A.width,A.height,0,ot,bt,null)}}else nt(A.depthTexture,0);let it=Y.__webglTexture,at=ae(A),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,j=A.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===hn)he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,it,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,it,0);else if(A.depthTexture.format===Wn)he(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,it,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(b){let A=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){let k=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),k){let Y=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),A.__depthDisposeCallback=Y}A.__boundDepthTexture=k}if(b.depthTexture&&!A.__autoAllocateDepthBuffer)if(U)for(let k=0;k<6;k++)ue(A.__webglFramebuffer[k],b,k);else{let k=b.texture.mipmaps;k&&k.length>0?ue(A.__webglFramebuffer[0],b,0):ue(A.__webglFramebuffer,b,0)}else if(U){A.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[k]),A.__webglDepthbuffer[k]===void 0)A.__webglDepthbuffer[k]=i.createRenderbuffer(),Tt(A.__webglDepthbuffer[k],b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}else{let k=b.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Tt(A.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,A,U){let k=n.get(b);A!==void 0&&rt(k.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Nt(b)}function Xt(b){let A=b.texture,U=n.get(b),k=n.get(A);b.addEventListener("dispose",x);let Y=b.textures,it=b.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=A.version,a.memory.textures++),it){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let j=0;j<A.mipmaps.length;j++)U.__webglFramebuffer[K][j]=i.createFramebuffer()}else U.__webglFramebuffer[K]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<A.mipmaps.length;K++)U.__webglFramebuffer[K]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(at)for(let K=0,j=Y.length;K<j;K++){let ot=n.get(Y[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&he(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let j=Y[K];U.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let ot=r.convert(j.format,j.colorSpace),bt=r.convert(j.type),ut=v(j.internalFormat,ot,bt,j.normalized,j.colorSpace,b.isXRRenderTarget===!0),ct=ae(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ut,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,U.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,A);for(let K=0;K<6;K++)if(A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)rt(U.__webglFramebuffer[K][j],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else rt(U.__webglFramebuffer[K],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(A)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,j=Y.length;K<j;K++){let ot=Y[K],bt=n.get(ot),ut=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),Ht(ut,ot),rt(U.__webglFramebuffer,b,ot,i.COLOR_ATTACHMENT0+K,ut,0),d(ot)&&C(ut)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),Ht(K,A),A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)rt(U.__webglFramebuffer[j],b,A,i.COLOR_ATTACHMENT0,K,j);else rt(U.__webglFramebuffer,b,A,i.COLOR_ATTACHMENT0,K,0);d(A)&&C(K),e.unbindTexture()}b.depthBuffer&&Nt(b)}function Ot(b){let A=b.textures;for(let U=0,k=A.length;U<k;U++){let Y=A[U];if(d(Y)){let it=B(b),at=n.get(Y).__webglTexture;e.bindTexture(it,at),C(it),e.unbindTexture()}}}let ee=[],de=[];function ye(b){if(b.samples>0){if(he(b)===!1){let A=b.textures,U=b.width,k=b.height,Y=i.COLOR_BUFFER_BIT,it=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(b),K=A.length>1;if(K)for(let ot=0;ot<A.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let j=b.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<A.length;ot++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let bt=n.get(A[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,U,k,0,0,U,k,Y,i.NEAREST),c===!0&&(ee.length=0,de.length=0,ee.push(i.COLOR_ATTACHMENT0+ot),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(ee.push(it),de.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<A.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let bt=n.get(A[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let A=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ae(b){return Math.min(s.maxSamples,b.samples)}function he(b){let A=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function P(b){let A=a.render.frame;u.get(b)!==A&&(u.set(b,A),b.update())}function Ce(b,A){let U=b.colorSpace,k=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==es&&U!==En&&(Qt.getTransfer(U)===Zt?(k!==Ye||Y!==Ge)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",U)),A}function $t(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=M,this.setTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=tt,this.rebindTextures=kt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function im(i,t){function e(n,s=En){let r,a=Qt.getTransfer(s);if(n===Ge)return i.UNSIGNED_BYTE;if(n===Vr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===To)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eo)return i.BYTE;if(n===Co)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===zr)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===Xe)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Io)return i.ALPHA;if(n===Ro)return i.RGB;if(n===Ye)return i.RGBA;if(n===hn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===Wr)return i.RED;if(n===Xr)return i.RED_INTEGER;if(n===Xn)return i.RG;if(n===Yr)return i.RG_INTEGER;if(n===Jr)return i.RGBA_INTEGER;if(n===Cs||n===Ts||n===Bs||n===Is)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Kr||n===Zr||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===ta||n===ea||n===na||n===ia||n===Rs||n===sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===ta)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===na)return r.COMPRESSED_R11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return r.COMPRESSED_RG11_EAC;if(n===sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ra||n===aa||n===oa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===Aa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===va||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===Sa||n===Ps||n===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:sm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new ic,d={},C=e.getContextAttributes(),B=null,v=null,S=[],w=[],T=new Gt,x=null,E=null,D=new Me;D.viewport=new le;let L=new Me;L.viewport=new le;let G=[D,L],V=new Fr,M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=S[W];return Q===void 0&&(Q=new Ri,S[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=S[W];return Q===void 0&&(Q=new Ri,S[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=S[W];return Q===void 0&&(Q=new Ri,S[W]=Q),Q.getHandSpace()};function q(W){let Q=w.indexOf(W.inputSource);if(Q===-1)return;let st=S[Q];st!==void 0&&(st.update(W.inputSource,W.frame,l||a),st.dispatchEvent({type:W.type,data:W.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let W=0;W<S.length;W++){let Q=w[W];Q!==null&&(w[W]=null,S[W].disconnect(Q))}M=null,H=null,m.reset();for(let W in d)delete d[W];if(t.setRenderTarget(B),p=null,h=null,f=null,s=null,v=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),E!==null){let W=E.camera;W.fov=E.fov,W.zoom=E.zoom,W.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),C.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,gt=null,rt=null;C.depth&&(rt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=C.stencil?Wn:hn,gt=C.stencil?Oi:sn);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Tt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Oe(h.textureWidth,h.textureHeight,{format:Ye,type:Ge,depthTexture:new Nn(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let st={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Oe(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(W){for(let Q=0;Q<W.removed.length;Q++){let st=W.removed[Q],gt=w.indexOf(st);gt>=0&&(w[gt]=null,S[gt].disconnect(st))}for(let Q=0;Q<W.added.length;Q++){let st=W.added[Q],gt=w.indexOf(st);if(gt===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=w.length){w.push(st),gt=Tt;break}else if(w[Tt]===null){w[Tt]=st,gt=Tt;break}if(gt===-1)break}let rt=S[gt];rt&&rt.connect(st)}}let X=new O,$=new O;function tt(W,Q,st){X.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);let gt=X.distanceTo($),rt=Q.projectionMatrix.elements,Tt=st.projectionMatrix.elements,ue=rt[14]/(rt[10]-1),Nt=rt[14]/(rt[10]+1),kt=(rt[9]+1)/rt[5],Xt=(rt[9]-1)/rt[5],Ot=(rt[8]-1)/rt[0],ee=(Tt[8]+1)/Tt[0],de=ue*Ot,ye=ue*ee,ae=gt/(-Ot+ee),he=ae*-Ot;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(he),W.translateZ(ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),rt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let P=ue+ae,Ce=Nt+ae,$t=de-he,b=ye+(gt-he),A=kt*Nt/Ce*P,U=Xt*Nt/Ce*P;W.projectionMatrix.makePerspective($t,b,A,U,P,Ce),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function wt(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,st=W.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(st=m.depthFar)),V.near=L.near=D.near=Q,V.far=L.far=D.far=st,(M!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),M=V.near,H=V.far),V.layers.mask=W.layers.mask|6,D.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let gt=W.parent,rt=V.cameras;wt(V,gt);for(let Tt=0;Tt<rt.length;Tt++)wt(rt[Tt],gt);rt.length===2?tt(V,D,L):V.projectionMatrix.copy(D.projectionMatrix),E===null&&W.isPerspectiveCamera&&(E={camera:W,fov:W.fov,zoom:W.zoom}),yt(W,V,gt)};function yt(W,Q,st){st===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(W){return d[W]};let jt=null;function Ht(W,Q){if(u=Q.getViewerPose(l||a),_=Q,u!==null){let st=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let gt=!1;st.length!==V.cameras.length&&(V.cameras.length=0,gt=!0);for(let Nt=0;Nt<st.length;Nt++){let kt=st[Nt],Xt=null;if(p!==null)Xt=p.getViewport(kt);else{let ee=f.getViewSubImage(h,kt);Xt=ee.viewport,Nt===0&&(t.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(v))}let Ot=G[Nt];Ot===void 0&&(Ot=new Me,Ot.layers.enable(Nt),Ot.viewport=new le,G[Nt]=Ot),Ot.matrix.fromArray(kt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(kt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Nt===0&&(V.matrix.copy(Ot.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),gt===!0&&V.cameras.push(Ot)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Nt=f.getDepthInformation(st[0]);Nt&&Nt.isValid&&Nt.texture&&m.init(Nt,s.renderState)}if(rt&&rt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Nt=0;Nt<st.length;Nt++){let kt=st[Nt].camera;if(kt){let Xt=d[kt];Xt||(Xt=new fs,d[kt]=Xt);let Ot=f.getCameraImage(kt);Xt.sourceTexture=Ot}}}}for(let st=0;st<S.length;st++){let gt=w[st],rt=S[st];gt!==null&&rt!==void 0&&rt.update(gt,Q,l||a)}jt&&jt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let Wt=new Kl;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function(W){jt=W},this.dispose=function(){}}},am=new re,nh=new Dt;nh.set(-1,0,0,0,1,0,0,0,1);function om(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Uo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,C,B,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,C,B):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C=t.get(d),B=C.envMap,v=C.envMapRotation;B&&(m.envMap.value=B,m.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(v)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,C,B){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=B*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let C=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function l(v,S){let w=s[v.id];w===void 0&&(m(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",C));let T=S.program;n.updateUBOMapping(v,T);let x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),T=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=s[v.id],w=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,E=w.length;x<E;x++){let D=w[x];if(Array.isArray(D))for(let L=0,G=D.length;L<G;L++)p(D[L],x,L,T);else p(D,x,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,w,T){if(y(v,S,w,T)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let D=0;for(let L=0;L<E.length;L++){let G=E[L],V=d(G);_(G,v.__data,D),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function y(v,S,w,T){let x=v.value,E=S+"_"+w;if(T[E]===void 0)return typeof x=="number"||typeof x=="boolean"?T[E]=x:ArrayBuffer.isView(x)?T[E]=x.slice():T[E]=x.clone(),!0;{let D=T[E];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return T[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(v){let S=v.uniforms,w=0,T=16;for(let E=0,D=S.length;E<D;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let G=0,V=L.length;G<V;G++){let M=L[G],H=Array.isArray(M.value)?M.value:[M.value];for(let q=0,J=H.length;q<J;q++){let nt=H[q],X=d(nt),$=w%T,tt=$%X.boundary,wt=$+tt;w+=tt,wt!==0&&T-wt<X.storage&&(w+=T-wt),M.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,w+=X.storage}}}let x=w%T;return x>0&&(w+=T-x),v.__size=w,v.__cache={},this}function d(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",v),S}function C(v){let S=v.target;S.removeEventListener("dispose",C);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function B(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:B}}var lm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gn=null;function hm(){return gn===null&&(gn=new cs(lm,16,16,Xn,rn),gn.name="DFG_LUT",gn.minFilter=Se,gn.magFilter=Se,gn.wrapS=ln,gn.wrapT=ln,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}var Ra=class{constructor(t={}){let{canvas:e=yl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ge}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=p,m=new Set([Jr,Yr,Xr]),d=new Set([Ge,sn,Ni,Oi,Vr,Qr]),C=new Uint32Array(4),B=new Int32Array(4),v=new O,S=null,w=null,T=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,L=!1,G=null,V=null,M=null,H=null;this._outputColorSpace=Ue;let q=0,J=0,nt=null,X=-1,$=null,tt=new le,wt=new le,yt=null,jt=new It(0),Ht=0,Wt=e.width,W=e.height,Q=1,st=null,gt=null,rt=new le(0,0,Wt,W),Tt=new le(0,0,Wt,W),ue=!1,Nt=new Pi,kt=!1,Xt=!1,Ot=new re,ee=new O,de=new le,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function he(){return nt===null?Q:1}let P=n;function Ce(g,I){return e.getContext(g,I)}let $t,b,A,U,k,Y,it,at,K,j,ot,bt,ut,ct,Et,Bt,Lt,R,lt,Z,ht,At,et;try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Je,!1),P===null){let I="webgl2";if(P=Ce(I,g),P===null)throw Ce(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(g){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Pt("WebGLRenderer: "+g.message),g}function Ct(){$t=new gp(P),$t.init(),ht=new im(P,$t),b=new op(P,$t,t,ht),A=new em(P,$t),b.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),V=P.createFramebuffer(),M=P.createFramebuffer(),H=P.createFramebuffer(),U=new vp(P),k=new kA,Y=new nm(P,$t,A,k,b,ht,U),it=new mp(D),at=new yu(P),At=new rp(P,at),K=new _p(P,at,U,At),j=new Mp(P,K,at,At,U),R=new yp(P,b,Y),Et=new cp(k),ot=new HA(D,it,$t,b,At,Et),bt=new om(D,k),ut=new VA,ct=new qA($t),Lt=new sp(D,it,A,j,_,c),Bt=new tm(D,j,b),et=new cm(P,U,b,A),lt=new ap(P,$t,U),Z=new xp(P,$t,U),U.programs=ot.programs,D.capabilities=b,D.extensions=$t,D.properties=k,D.renderLists=ut,D.shadowMap=Bt,D.state=A,D.info=U}y!==Ge&&(E=new wp(y,e.width,e.height,o,s,r));let Mt=new sc(D,P);this.xr=Mt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let g=$t.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=$t.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(g){g!==void 0&&(Q=g,this.setSize(Wt,W,!1))},this.getSize=function(g){return g.set(Wt,W)},this.setSize=function(g,I,z=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=g,W=I,e.width=Math.floor(g*Q),e.height=Math.floor(I*Q),z===!0&&(e.style.width=g+"px",e.style.height=I+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,g,I)},this.getDrawingBufferSize=function(g){return g.set(Wt*Q,W*Q).floor()},this.setDrawingBufferSize=function(g,I,z){Wt=g,W=I,Q=z,e.width=Math.floor(g*z),e.height=Math.floor(I*z),this.setViewport(0,0,g,I)},this.setEffects=function(g){if(y===Ge){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let I=0;I<g.length;I++)if(g[I].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(tt)},this.getViewport=function(g){return g.copy(rt)},this.setViewport=function(g,I,z,F){g.isVector4?rt.set(g.x,g.y,g.z,g.w):rt.set(g,I,z,F),A.viewport(tt.copy(rt).multiplyScalar(Q).round())},this.getScissor=function(g){return g.copy(Tt)},this.setScissor=function(g,I,z,F){g.isVector4?Tt.set(g.x,g.y,g.z,g.w):Tt.set(g,I,z,F),A.scissor(wt.copy(Tt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(g){A.setScissorTest(ue=g)},this.setOpaqueSort=function(g){st=g},this.setTransparentSort=function(g){gt=g},this.getClearColor=function(g){return g.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(g=!0,I=!0,z=!0){let F=0;if(g){let N=!1;if(nt!==null){let pt=nt.texture.format;N=m.has(pt)}if(N){let pt=nt.texture.type,_t=d.has(pt),ft=Lt.getClearColor(),xt=Lt.getClearAlpha(),St=ft.r,Ut=ft.g,zt=ft.b;_t?(C[0]=St,C[1]=Ut,C[2]=zt,C[3]=xt,P.clearBufferuiv(P.COLOR,0,C)):(B[0]=St,B[1]=Ut,B[2]=zt,B[3]=xt,P.clearBufferiv(P.COLOR,0,B))}else F|=P.COLOR_BUFFER_BIT}I&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),G=g},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Lt.dispose(),ut.dispose(),ct.dispose(),k.dispose(),it.dispose(),j.dispose(),At.dispose(),et.dispose(),ot.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",cc),Mt.removeEventListener("sessionend",lc),Jn.stop()};function ie(g){g.preventDefault(),Do("WebGLRenderer: Context Lost."),L=!0}function qt(){Do("WebGLRenderer: Context Restored."),L=!1;let g=U.autoReset,I=Bt.enabled,z=Bt.autoUpdate,F=Bt.needsUpdate,N=Bt.type;Ct(),U.autoReset=g,Bt.enabled=I,Bt.autoUpdate=z,Bt.needsUpdate=F,Bt.type=N}function Je(g){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function an(g){let I=g.target;I.removeEventListener("dispose",an),mh(I)}function mh(g){gh(g),k.remove(g)}function gh(g){let I=k.get(g).programs;I!==void 0&&(I.forEach(function(z){ot.releaseProgram(z)}),g.isShaderMaterial&&ot.releaseShaderCache(g))}this.renderBufferDirect=function(g,I,z,F,N,pt){I===null&&(I=ye);let _t=N.isMesh&&N.matrixWorld.determinantAffine()<0,ft=vh(g,I,z,F,N);A.setMaterial(F,_t);let xt=z.index,St=1;if(F.wireframe===!0){if(xt=K.getWireframeAttribute(z),xt===void 0)return;St=2}let Ut=z.drawRange,zt=z.attributes.position,vt=Ut.start*St,Kt=(Ut.start+Ut.count)*St;pt!==null&&(vt=Math.max(vt,pt.start*St),Kt=Math.min(Kt,(pt.start+pt.count)*St)),xt!==null?(vt=Math.max(vt,0),Kt=Math.min(Kt,xt.count)):zt!=null&&(vt=Math.max(vt,0),Kt=Math.min(Kt,zt.count));let Ae=Kt-vt;if(Ae<0||Ae===1/0)return;At.setup(N,F,ft,z,xt);let oe,ne=lt;if(xt!==null&&(oe=at.get(xt),ne=Z,ne.setIndex(oe)),N.isMesh)F.wireframe===!0?(A.setLineWidth(F.wireframeLinewidth*he()),ne.setMode(P.LINES)):ne.setMode(P.TRIANGLES);else if(N.isLine){let Te=F.linewidth;Te===void 0&&(Te=1),A.setLineWidth(Te*he()),N.isLineSegments?ne.setMode(P.LINES):N.isLineLoop?ne.setMode(P.LINE_LOOP):ne.setMode(P.LINE_STRIP)}else N.isPoints?ne.setMode(P.POINTS):N.isSprite&&ne.setMode(P.TRIANGLES);if(N.isBatchedMesh)if($t.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Te=N._multiDrawStarts,mt=N._multiDrawCounts,De=N._multiDrawCount,Yt=xt?at.get(xt).bytesPerElement:1,Qe=k.get(F).currentProgram.getUniforms();for(let on=0;on<De;on++)Qe.setValue(P,"_gl_DrawID",on),ne.render(Te[on]/Yt,mt[on])}else if(N.isInstancedMesh)ne.renderInstances(vt,Ae,N.count);else if(z.isInstancedBufferGeometry){let Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,Te);ne.renderInstances(vt,Ae,mt)}else ne.render(vt,Ae)};function oc(g,I,z,F){G!==null&&g.isNodeMaterial&&G.setObject(F,g),kt===!0&&Et.setState(g,z,!1),g.transparent===!0&&g.side===Ee&&g.forceSinglePass===!1?(g.side=be,g.needsUpdate=!0,Os(g,I,F),g.side=zn,g.needsUpdate=!0,Os(g,I,F),g.side=Ee):Os(g,I,F)}this.compile=function(g,I,z=null){z===null&&(z=g),G!==null&&G.renderStart(g,I,z),w=ct.get(z),w.init(I),x.push(w),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),g!==z&&g.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),Xt=this.localClippingEnabled,kt=Et.init(this.clippingPlanes,Xt),kt===!0&&Et.setGlobalState(this.clippingPlanes,I),G!==null&&Bt.render(w.state.shadowsArray,z,I);let F=new Set;return g.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let pt=N.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){let ft=pt[_t];oc(ft,z,I,N),F.add(ft)}else oc(pt,z,I,N),F.add(pt)}),w=x.pop(),G!==null&&G.renderEnd(),F},this.compileAsync=function(g,I,z=null){let F=this.compile(g,I,z);return new Promise(N=>{function pt(){if(F.forEach(function(_t){let xt=k.get(_t).currentProgram;(xt===void 0||xt.isReady())&&F.delete(_t)}),F.size===0){N(g);return}setTimeout(pt,10)}$t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ua=null;function _h(g){Ua&&Ua(g)}function cc(){Jn.stop()}function lc(){Jn.start()}let Jn=new Kl;Jn.setAnimationLoop(_h),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(g){Ua=g,Mt.setAnimationLoop(g),g===null?Jn.stop():Jn.start()},Mt.addEventListener("sessionstart",cc),Mt.addEventListener("sessionend",lc),this.render=function(g,I){if(I!==void 0&&I.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;G!==null&&G.renderStart(g,I);let z=Mt.enabled===!0&&Mt.isPresenting===!0,F=E!==null&&(nt===null||z)&&E.begin(D,nt);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(I),I=Mt.getCamera()),g.isScene===!0&&g.onBeforeRender(D,g,I,nt),w=ct.get(g,x.length),w.init(I),w.state.textureUnits=Y.getTextureUnits(),x.push(w),Ot.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Nt.setFromProjectionMatrix(Ot,$e,I.reversedDepth),Xt=this.localClippingEnabled,kt=Et.init(this.clippingPlanes,Xt),S=ut.get(g,T.length),S.init(),T.push(S),Mt.enabled===!0&&Mt.isPresenting===!0){let _t=D.xr.getDepthSensingMesh();_t!==null&&Fa(_t,I,-1/0,D.sortObjects)}Fa(g,I,0,D.sortObjects),S.finish(),G!==null&&G.updateLights(w.state.lightsArray),D.sortObjects===!0&&S.sort(st,gt),ae=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ae&&Lt.addToRenderList(S,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),kt===!0&&Et.beginShadows();let N=w.state.shadowsArray;if(Bt.render(N,g,I),kt===!0&&Et.endShadows(),(F&&E.hasRenderPass())===!1){let _t=S.opaque,ft=S.transmissive;if(w.setupLights(),I.isArrayCamera){let xt=I.cameras;if(ft.length>0)for(let St=0,Ut=xt.length;St<Ut;St++){let zt=xt[St];uc(_t,ft,g,zt)}ae&&Lt.render(g);for(let St=0,Ut=xt.length;St<Ut;St++){let zt=xt[St];hc(S,g,zt,zt.viewport)}}else ft.length>0&&uc(_t,ft,g,I),ae&&Lt.render(g),hc(S,g,I)}nt!==null&&J===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),F&&E.end(D),g.isScene===!0&&g.onAfterRender(D,g,I),At.resetDefaultState(),X=-1,$=null,x.pop(),x.length>0?(w=x[x.length-1],Y.setTextureUnits(w.state.textureUnits),kt===!0&&Et.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,G!==null&&G.renderEnd()};function Fa(g,I,z,F){if(g.visible===!1)return;if(g.layers.test(I.layers)){if(g.isGroup)z=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(I);else if(g.isLightProbeGrid)w.pushLightProbeGrid(g);else if(g.isLight)w.pushLight(g),g.castShadow&&w.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(Nt)){F&&de.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ot);let _t=j.update(g),ft=g.material;ft.visible&&S.push(g,_t,ft,z,de.z,null,I)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(Nt))){let _t=j.update(g),ft=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),de.copy(g.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),de.copy(_t.boundingSphere.center)),de.applyMatrix4(g.matrixWorld).applyMatrix4(Ot)),Array.isArray(ft)){let xt=_t.groups;for(let St=0,Ut=xt.length;St<Ut;St++){let zt=xt[St],vt=ft[zt.materialIndex];vt&&vt.visible&&S.push(g,_t,vt,z,de.z,zt,I)}}else ft.visible&&S.push(g,_t,ft,z,de.z,null,I)}}let pt=g.children;for(let _t=0,ft=pt.length;_t<ft;_t++)Fa(pt[_t],I,z,F)}function hc(g,I,z,F){let{opaque:N,transmissive:pt,transparent:_t}=g;w.setupLightsView(z),kt===!0&&Et.setGlobalState(D.clippingPlanes,z),F&&A.viewport(tt.copy(F)),N.length>0&&Ns(N,I,z),pt.length>0&&Ns(pt,I,z),_t.length>0&&Ns(_t,I,z),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function uc(g,I,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let vt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new Oe(1,1,{generateMipmaps:!0,type:vt?rn:Ge,minFilter:Qn,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let pt=w.state.transmissionRenderTarget[F.id],_t=F.viewport||tt;pt.setSize(_t.z*D.transmissionResolutionScale,_t.w*D.transmissionResolutionScale);let ft=D.getRenderTarget(),xt=D.getActiveCubeFace(),St=D.getActiveMipmapLevel();D.setRenderTarget(pt),D.getClearColor(jt),Ht=D.getClearAlpha(),Ht<1&&D.setClearColor(16777215,.5),D.clear(),ae&&Lt.render(z);let Ut=D.toneMapping;D.toneMapping=nn;let zt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),kt===!0&&Et.setGlobalState(D.clippingPlanes,F),Ns(g,z,F),Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Kt=0,Ae=I.length;Kt<Ae;Kt++){let oe=I[Kt],{object:ne,geometry:Te,material:mt,group:De}=oe;if(mt.side===Ee&&ne.layers.test(F.layers)){let Yt=mt.side;mt.side=be,mt.needsUpdate=!0,dc(ne,z,F,Te,mt,De),mt.side=Yt,mt.needsUpdate=!0,vt=!0}}vt===!0&&(Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt))}D.setRenderTarget(ft,xt,St),D.setClearColor(jt,Ht),zt!==void 0&&(F.viewport=zt),D.toneMapping=Ut}function Ns(g,I,z){let F=I.isScene===!0?I.overrideMaterial:null;for(let N=0,pt=g.length;N<pt;N++){let _t=g[N],{object:ft,geometry:xt,group:St}=_t,Ut=_t.material;Ut.allowOverride===!0&&F!==null&&(Ut=F),ft.layers.test(z.layers)&&dc(ft,I,z,xt,Ut,St)}}function dc(g,I,z,F,N,pt){G!==null&&N.isNodeMaterial&&G.setObject(g,N),g.onBeforeRender(D,I,z,F,N,pt),g.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),N.onBeforeRender(D,I,z,F,g,pt),N.transparent===!0&&N.side===Ee&&N.forceSinglePass===!1?(N.side=be,N.needsUpdate=!0,D.renderBufferDirect(z,I,F,N,g,pt),N.side=zn,N.needsUpdate=!0,D.renderBufferDirect(z,I,F,N,g,pt),N.side=Ee):D.renderBufferDirect(z,I,F,N,g,pt),g.onAfterRender(D,I,z,F,N,pt)}function Os(g,I,z){I.isScene!==!0&&(I=ye);let F=k.get(g),N=w.state.lights,pt=w.state.shadowsArray,_t=N.state.version,ft=ot.getParameters(g,N.state,pt,I,z,w.state.lightProbeGridArray),xt=ot.getProgramCacheKey(ft),St=F.programs;F.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;let Ut=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;F.envMap=it.get(g.envMap||F.environment,Ut),F.envMapRotation=F.environment!==null&&g.envMap===null?I.environmentRotation:g.envMapRotation,St===void 0&&(g.addEventListener("dispose",an),St=new Map,F.programs=St);let zt=St.get(xt);if(zt!==void 0){if(F.currentProgram===zt&&F.lightsStateVersion===_t)return pc(g,ft),zt}else ft.uniforms=ot.getUniforms(g),G!==null&&g.isNodeMaterial&&G.build(g,z,ft),g.onBeforeCompile(ft,D),zt=ot.acquireProgram(ft,xt),St.set(xt,zt),F.uniforms=ft.uniforms;let vt=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(vt.clippingPlanes=Et.uniform),pc(g,ft),F.needsLights=Mh(g),F.lightsStateVersion=_t,F.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.sunLights.value=N.state.sun,vt.sunLightShadows.value=N.state.sunShadow,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.sunShadowMatrix.value=N.state.sunShadowMatrix,vt.sunShadowCascade.value=N.state.sunShadowCascade,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),F.lightProbeGrid=w.state.lightProbeGridArray.length>0,F.currentProgram=zt,F.uniformsList=null,zt}function fc(g){if(g.uniformsList===null){let I=g.currentProgram.getUniforms();g.uniformsList=zi.seqWithValue(I.seq,g.uniforms)}return g.uniformsList}function pc(g,I){let z=k.get(g);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function xh(g,I){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let z=0,F=g.length;z<F;z++){let N=g[z];if(N.texture!==null&&N.boundingBox.containsPoint(v))return N}return null}function vh(g,I,z,F,N){I.isScene!==!0&&(I=ye),Y.resetTextureUnits();let pt=I.fog,_t=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,ft=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qt.workingColorSpace,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,St=it.get(F.envMap||_t,xt),Ut=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),vt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,Ae=!!z.morphAttributes.color,oe=nn;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=D.toneMapping);let ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Te=ne!==void 0?ne.length:0,mt=k.get(F),De=w.state.lights;if(kt===!0&&(Xt===!0||g!==$)){let se=g===$&&F.id===X;Et.setState(F,g,se)}let Yt=!1;F.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==De.state.version||mt.outputColorSpace!==ft||N.isBatchedMesh&&mt.batching===!1||!N.isBatchedMesh&&mt.batching===!0||N.isBatchedMesh&&mt.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&mt.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&mt.instancing===!1||!N.isInstancedMesh&&mt.instancing===!0||N.isSkinnedMesh&&mt.skinning===!1||!N.isSkinnedMesh&&mt.skinning===!0||N.isInstancedMesh&&mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&mt.instancingMorph===!1&&N.morphTexture!==null||mt.envMap!==St||F.fog===!0&&mt.fog!==pt||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Et.numPlanes||mt.numIntersection!==Et.numIntersection)||mt.vertexAlphas!==Ut||mt.vertexTangents!==zt||mt.morphTargets!==vt||mt.morphNormals!==Kt||mt.morphColors!==Ae||mt.toneMapping!==oe||mt.morphTargetsCount!==Te||!!mt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,mt.__version=F.version);let Qe=mt.currentProgram;Yt===!0&&(Qe=Os(F,I,N),G&&F.isNodeMaterial&&G.onUpdateProgram(F,Qe,mt));let on=!1,Cn=!1,ci=!1,te=Qe.getUniforms(),fe=mt.uniforms;if(A.useProgram(Qe.program)&&(on=!0,Cn=!0,ci=!0),F.id!==X&&(X=F.id,Cn=!0),mt.needsLights){let se=xh(w.state.lightProbeGridArray,N);mt.lightProbeGrid!==se&&(mt.lightProbeGrid=se,Cn=!0)}if(on||$!==g){A.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),te.setValue(P,"projectionMatrix",g.projectionMatrix),te.setValue(P,"viewMatrix",g.matrixWorldInverse);let Bn=te.map.cameraPosition;Bn!==void 0&&Bn.setValue(P,ee.setFromMatrixPosition(g.matrixWorld)),b.logarithmicDepthBuffer&&te.setValue(P,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&te.setValue(P,"isOrthographic",g.isOrthographicCamera===!0),$!==g&&($=g,Cn=!0,ci=!0)}if(mt.needsLights&&(De.state.sunShadowMap.length>0&&te.setValue(P,"sunShadowMap",De.state.sunShadowMap,Y),De.state.directionalShadowMap.length>0&&te.setValue(P,"directionalShadowMap",De.state.directionalShadowMap,Y),De.state.spotShadowMap.length>0&&te.setValue(P,"spotShadowMap",De.state.spotShadowMap,Y),De.state.pointShadowMap.length>0&&te.setValue(P,"pointShadowMap",De.state.pointShadowMap,Y)),N.isSkinnedMesh){te.setOptional(P,N,"bindMatrix"),te.setOptional(P,N,"bindMatrixInverse");let se=N.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),te.setValue(P,"boneTexture",se.boneTexture,Y))}N.isBatchedMesh&&(te.setOptional(P,N,"batchingTexture"),te.setValue(P,"batchingTexture",N._matricesTexture,Y),te.setOptional(P,N,"batchingIdTexture"),te.setValue(P,"batchingIdTexture",N._indirectTexture,Y),te.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&te.setValue(P,"batchingColorTexture",N._colorsTexture,Y));let Tn=z.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&R.update(N,z,Qe),(Cn||mt.receiveShadow!==N.receiveShadow)&&(mt.receiveShadow=N.receiveShadow,te.setValue(P,"receiveShadow",N.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null&&(fe.envMapIntensity.value=I.environmentIntensity),fe.dfgLUT!==void 0&&(fe.dfgLUT.value=hm()),Cn){if(te.setValue(P,"toneMappingExposure",D.toneMappingExposure),mt.needsLights&&yh(fe,ci),pt&&F.fog===!0&&bt.refreshFogUniforms(fe,pt),bt.refreshMaterialUniforms(fe,F,Q,W,w.state.transmissionRenderTarget[g.id]),mt.needsLights&&mt.lightProbeGrid){let se=mt.lightProbeGrid;fe.probesSH.value=se.texture,fe.probesMin.value.copy(se.boundingBox.min),fe.probesMax.value.copy(se.boundingBox.max),fe.probesResolution.value.copy(se.resolution)}zi.upload(P,fc(mt),fe,Y)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(zi.upload(P,fc(mt),fe,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&te.setValue(P,"center",N.center),te.setValue(P,"modelViewMatrix",N.modelViewMatrix),te.setValue(P,"normalMatrix",N.normalMatrix),te.setValue(P,"modelMatrix",N.matrixWorld),F.uniformsGroups!==void 0){let se=F.uniformsGroups;for(let Bn=0,li=se.length;Bn<li;Bn++){let mc=se[Bn];et.update(mc,Qe),et.bind(mc,Qe)}}return Qe}function yh(g,I){g.ambientLightColor.needsUpdate=I,g.lightProbe.needsUpdate=I,g.sunLights.needsUpdate=I,g.sunLightShadows.needsUpdate=I,g.directionalLights.needsUpdate=I,g.directionalLightShadows.needsUpdate=I,g.pointLights.needsUpdate=I,g.pointLightShadows.needsUpdate=I,g.spotLights.needsUpdate=I,g.spotLightShadows.needsUpdate=I,g.rectAreaLights.needsUpdate=I,g.hemisphereLights.needsUpdate=I}function Mh(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(g,I,z){let F=k.get(g);F.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(g.texture).__webglTexture=I,k.get(g.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,I){let z=k.get(g);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(g,I=0,z=0){nt=g,q=I,J=z;let F=null,N=!1,pt=!1;if(g){let ft=k.get(g);if(ft.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(P.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(g.viewport),wt.copy(g.scissor),yt=g.scissorTest,A.viewport(tt),A.scissor(wt),A.setScissorTest(yt),X=-1;return}else if(ft.__webglFramebuffer===void 0)Y.setupRenderTarget(g);else if(ft.__hasExternalTextures)Y.rebindTextures(g,k.get(g.texture).__webglTexture,k.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let Ut=g.depthTexture;if(ft.__boundDepthTexture!==Ut){if(Ut!==null&&k.has(Ut)&&(g.width!==Ut.image.width||g.height!==Ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(g)}}let xt=g.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(pt=!0);let St=k.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(St[I])?F=St[I][z]:F=St[I],N=!0):g.samples>0&&Y.useMultisampledRTT(g)===!1?F=k.get(g).__webglMultisampledFramebuffer:Array.isArray(St)?F=St[z]:F=St,tt.copy(g.viewport),wt.copy(g.scissor),yt=g.scissorTest}else tt.copy(rt).multiplyScalar(Q).floor(),wt.copy(Tt).multiplyScalar(Q).floor(),yt=ue;if(z!==0&&(F=V),A.bindFramebuffer(P.FRAMEBUFFER,F)&&A.drawBuffers(g,F),A.viewport(tt),A.scissor(wt),A.setScissorTest(yt),N){let ft=k.get(g.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ft.__webglTexture,z)}else if(pt){let ft=I;for(let xt=0;xt<g.textures.length;xt++){let St=k.get(g.textures[xt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xt,St.__webglTexture,z,ft)}}else if(g!==null&&z!==0){let ft=k.get(g.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ft.__webglTexture,z)}X=-1};function Ac(g){let I=k.get(g);return(I.__readFormat!==g.format||I.__readType!==g.type)&&(I.__readFormat=g.format,I.__readType=g.type,I.__formatReadable=b.textureFormatReadable(g.format),I.__typeReadable=b.textureTypeReadable(g.type)),I}this.readRenderTargetPixels=function(g,I,z,F,N,pt,_t,ft=0){if(!(g&&g.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=k.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t]),xt){A.bindFramebuffer(P.FRAMEBUFFER,xt);try{let St=g.textures[ft],Ut=St.format,zt=St.type;g.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ft);let vt=Ac(St);if(vt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=g.width-F&&z>=0&&z<=g.height-N&&P.readPixels(I,z,F,N,ht.convert(Ut),ht.convert(zt),pt)}finally{let St=nt!==null?k.get(nt).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(g,I,z,F,N,pt,_t,ft=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=k.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t]),xt)if(I>=0&&I<=g.width-F&&z>=0&&z<=g.height-N){A.bindFramebuffer(P.FRAMEBUFFER,xt);let St=g.textures[ft],Ut=St.format,zt=St.type;g.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ft);let vt=Ac(St);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.bufferData(P.PIXEL_PACK_BUFFER,pt.byteLength,P.STREAM_READ),P.readPixels(I,z,F,N,ht.convert(Ut),ht.convert(zt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ae=nt!==null?k.get(nt).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,Ae);let oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Sl(P,oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Kt),P.deleteSync(oe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,I=null,z=0){let F=Math.pow(2,-z),N=Math.floor(g.image.width*F),pt=Math.floor(g.image.height*F),_t=I!==null?I.x:0,ft=I!==null?I.y:0;Y.setTexture2D(g,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,_t,ft,N,pt),A.unbindTexture()},this.copyTextureToTexture=function(g,I,z=null,F=null,N=0,pt=0){let _t,ft,xt,St,Ut,zt,vt,Kt,Ae,oe=g.isCompressedTexture?g.mipmaps[pt]:g.image;if(z!==null)_t=z.max.x-z.min.x,ft=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,St=z.min.x,Ut=z.min.y,zt=z.isBox3?z.min.z:0;else{let fe=Math.pow(2,-N);_t=Math.floor(oe.width*fe),ft=Math.floor(oe.height*fe),g.isDataArrayTexture?xt=oe.depth:g.isData3DTexture?xt=Math.floor(oe.depth*fe):xt=1,St=0,Ut=0,zt=0}F!==null?(vt=F.x,Kt=F.y,Ae=F.z):(vt=0,Kt=0,Ae=0);let ne=ht.convert(I.format),Te=ht.convert(I.type),mt;I.isData3DTexture?(Y.setTexture3D(I,0),mt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Y.setTexture2DArray(I,0),mt=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(I,0),mt=P.TEXTURE_2D),A.activeTexture(P.TEXTURE0),A.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);let De=A.getParameter(P.UNPACK_ROW_LENGTH),Yt=A.getParameter(P.UNPACK_IMAGE_HEIGHT),Qe=A.getParameter(P.UNPACK_SKIP_PIXELS),on=A.getParameter(P.UNPACK_SKIP_ROWS),Cn=A.getParameter(P.UNPACK_SKIP_IMAGES);A.pixelStorei(P.UNPACK_ROW_LENGTH,oe.width),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe.height),A.pixelStorei(P.UNPACK_SKIP_PIXELS,St),A.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(P.UNPACK_SKIP_IMAGES,zt);let ci=g.isDataArrayTexture||g.isData3DTexture,te=I.isDataArrayTexture||I.isData3DTexture;if(g.isDepthTexture){let fe=k.get(g),Tn=k.get(I),se=k.get(fe.__renderTarget),Bn=k.get(Tn.__renderTarget);A.bindFramebuffer(P.READ_FRAMEBUFFER,se.__webglFramebuffer),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let li=0;li<xt;li++)ci&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(g).__webglTexture,N,zt+li),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(I).__webglTexture,pt,Ae+li)),P.blitFramebuffer(St,Ut,_t,ft,vt,Kt,_t,ft,P.DEPTH_BUFFER_BIT,P.NEAREST);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||g.isRenderTargetTexture||k.has(g)){let fe=k.get(g),Tn=k.get(I);A.bindFramebuffer(P.READ_FRAMEBUFFER,M),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let se=0;se<xt;se++)ci?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.__webglTexture,N,zt+se):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,N),te?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,pt,Ae+se):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,pt),N!==0?P.blitFramebuffer(St,Ut,_t,ft,vt,Kt,_t,ft,P.COLOR_BUFFER_BIT,P.NEAREST):te?P.copyTexSubImage3D(mt,pt,vt,Kt,Ae+se,St,Ut,_t,ft):P.copyTexSubImage2D(mt,pt,vt,Kt,St,Ut,_t,ft);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else te?g.isDataTexture||g.isData3DTexture?P.texSubImage3D(mt,pt,vt,Kt,Ae,_t,ft,xt,ne,Te,oe.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(mt,pt,vt,Kt,Ae,_t,ft,xt,ne,oe.data):P.texSubImage3D(mt,pt,vt,Kt,Ae,_t,ft,xt,ne,Te,oe):g.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pt,vt,Kt,_t,ft,ne,Te,oe.data):g.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pt,vt,Kt,oe.width,oe.height,ne,oe.data):P.texSubImage2D(P.TEXTURE_2D,pt,vt,Kt,_t,ft,ne,Te,oe);A.pixelStorei(P.UNPACK_ROW_LENGTH,De),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),A.pixelStorei(P.UNPACK_SKIP_PIXELS,Qe),A.pixelStorei(P.UNPACK_SKIP_ROWS,on),A.pixelStorei(P.UNPACK_SKIP_IMAGES,Cn),pt===0&&I.generateMipmaps&&P.generateMipmap(mt),A.unbindTexture()},this.initRenderTarget=function(g){k.get(g).__webglFramebuffer===void 0&&Y.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Y.setTextureCube(g,0):g.isData3DTexture?Y.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Y.setTexture2DArray(g,0):Y.setTexture2D(g,0),A.unbindTexture()},this.resetState=function(){q=0,J=0,nt=null,A.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var La=class extends ti{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new On;t.deleteAttribute("uv");let e=new An({side:be}),n=new An,s=new ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new hs(t,n,6),o=new we;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Jt(t,Wi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Jt(t,Wi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Jt(t,Wi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Jt(t,Wi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new Jt(t,Wi(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new Jt(t,Wi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Wi(i){return new gs({color:0,emissive:16777215,emissiveIntensity:i})}var ih="lgEAABADAAAp/cD+3QEl/cj+BQIW/R//3QEK/R//CQIA/Zf/2QHp/I//CQL7/PP/3QHZ/Pj/8QEL/WsA3AHp/IQA+QEl/bYA4gED/esABwII/SMBGAKc/Y/92gGd/Zf9EwKF/eL9yQGD/dj9CAJk/Un+yQFZ/UH+DAJd/ar+1gE9/ZH+FQJy/Sr/2wF1/Y//3wFv/f//1wFu/W8AywFt/eUA1QFO/QYB+QGY/R4B2AF0/TMBFQLL/XH9sAGr/XL9EQLU/db9ogHZ/Uv+twHZ/bj+zgEI/kT/+wAK/lj/KgHi/ST/vgEM/rP/lwDt/Zv/5ADy/ZH/UAHO/ZP/swEI/gMAkgDd/QEA5ADS/QgASAG+/fn/rAEM/j8AlwDh/WwA4gDd/XQASQG+/W8AoQH7/cIA8AAE/roASAHX/dYAqwHc/UcB1AHK/VcBCgJ2/pH9fwFJ/nT9igF3/sb9gAFC/tr9jwFH/kz+pQF7/uH+jwBe/sL+4wBk/sn+UAE//rT+ogF3/kr/JwBe/jD/dAAz/hj/4AAy/hr/SAEg/g3/lAF//sD/wv9g/p7/DAAu/pX/agAa/nH/sQB1/hMAuP9S/vj/BwAm/v//YQBz/moAsv9U/m4AAAAy/nIAcAAc/o4AuAB1/rwAGwBq/sgAdwBO/uoA4wBF/uoASwE0/vkAkwF4/hYBAwFM/lcByQFO/nQBEAJ4/oMB2QG+/nj9awGI/l/9gwGx/tn9bwHe/nH+jwC7/l/+1gCv/kv+UAGE/jX+hgHr/uf+t//R/sL+CwCq/rH+cwCJ/pL+3ACN/pP+RgHT/iz/pv+l/ij/8/+G/v3+UwDk/qH/UP+z/pL/lv+Q/nL/4v/J/gUAO/+U/vr/h//C/m8ANf+M/ncAgv/T/sMARP/A/tgAmP+t/usAAQCZ/vwAdACL/ggBygCN/g4BUwHi/hkBGwDQ/iIBcQC5/isB4gC//iEBTgG2/lABpAGN/n8BKgK8/o4BxgG5/o0BDgIm/2n9XQE2/1P9vgE3/1P9DgIp/979WAFA/3n+KAAu/1f+gAAl/z7+0QAk/yr+MAFQ/+T+Uf8p/8n+mv8b/5z+9//3/ob+SQAr/yX/Qf8A/x3/b/8i/5j/K//v/mf/YP8o/wAAIv8f/3EAKP8m/+AAPv8M/wgBfP9M/xMBWv8v/x0Bn/8i/y4B/f8m/0IBbgAl/0sB2wAi/zMBTgEi/2IBlwEo/58BwQEf/6UBCgKV/379TQGS/2j9ugGS/2f9DwKP/979QAGc/2v+EQCP/zz+eQCP/zD+3AB7/x/+HwGi/9T+Of+L/6v+jv+E/4f+4f+P/x7/IP+V/5f/L//E/73/af98//v/QP+g//v/i//C/wQA1v+B/3cAQf+s/2YAhP+Z/9YARv+Z/xoBWP+T/y0BfP+P/04BAACN/18BbwCU/2AB3QCT/0EBTwGN/2YBkwGU/60BxwGO/7sBDwL5/5T9SAECAIL9tgH7/339DAINAA/+EAEDANX9KwH1/3v+wv/+/2P+BgAHADz+cAD7/yr+5gDy/87+N/8DAJT+iP/8/xr/Iv///5j/Rv/7/7n/lP8FAMT/5v/O/9D/vv/+//b/EAACAKAAWf/+/4YAkv/+/0cA3f/8/9MASv/8/yUBT////1ABh/8FAG8BAADo/3kBZQDy/2wB5wD//1QBTAHx/3ABjwEZAIcBfAAXAIgByAACAL4BxwH+/9QBDAI/AJ79YAFjAJj9wAFwAJf9DAJ1AAb+CgFvAMD9MwGWAKf9rAF0AHH+DwBnADT+aQBqACX+3ABoANj+";var sh="Pv9vAKL+i/+HAIb+4v9xABn/NP9tAJ3/Q/9IAMD/df+KAO7/U/9vAAUAjP9GAP3/5P97AHwASv9eAGQAi/9DAEQA0/9nANEAMP9tADEBTP9vAGUBjv9aAHoB7P9iAHgBBQFpAHIBUgFcAH4BhgF7AIYBHQBuAJABagB0AJcB1QCbAIIBRwFtAMEBwgFlAOcBDAKbAPEBBQKmAKP9FgLFAAf+DQHYANT9OQHWALT9uwHhALD9CQLNAHH+HwDZAED+aQDWAC7+4gDNAN/+Tf/fALn+if/gAI/+8f/dABr/PP/cAJr/Qv/YAAMAP//YAG4AO//cAN4APP/KACUBUP/fAFsBlP/nAHkB8P8LAX0BcwDjAHsBWQH9AHsBkQHBAIgBHgDWAI8BcwDeAJ8B4gDbAIgBOgHYALMBvgHgAOwB8gHgAPwBCgJKAe79QQFHAdH9tQFUAcn9EwJGAV3+dQBRAVL+6ABcASj+IAE/Adn+ov9PAbn+BgBfAZv+TgA5ATP/Rv9dAQL/ef9SAX//Q/9IARAAPv9EAWYAQv9sAY8AYv8uAckAT/9jAesAmP97AQwB4P85ATABr/9KAUEB9/9XAVcBfwBdAVwB0ABXAWgBSQFMAWUBtgEuAYsBBAFEAYcBHAEuAZ8B3AFeAcQB/gFFAQwCFgKzAQL+UQG2Aez9uwG5AeH9DgKSAXL+hQCMAXb+1gC6AUT+PAGlAd/+DQC5AbD+cgDBAZ3+1QDXAZ3+LwGFAVv/U/+uASr/l//aARP/9f/rAfT+SwCVAZ7/TP/KAYn/ff/tAWj/1v+UAfr/T//NAREAj//qAS8A0/+GATsAV/+sAWUAmv/dAXQACADiAYEAbQDoAYQA1QDtAZ8ASQHpAYMArAGPAboArP+zAdMADQC/AewAYwDJAeIA3gDUAe4AVgHHAeYAswHeAfUA/QGTARsBJACdATABfwCXATEB2AC4AT8BPAGcATEBwQHBAVIBCgKoAa0BFAKQAQUCJQIAAgz+cgEVAgT+vAEnAvz9EAIhAjX+agFMAib+nAH3AeD+lwAGAtP+1AAFAsH+VQE8Ar/+mQHzATH/LAD+ARz/cwAlAiT/4gAXAif/RwEyAir/qwH2AaT/u///AZn//P8QApb/cQAiAov/6QAfApD/RgEqApf/vQFdAr3/8wH2AeL/tP8CAgIA+P8LAgIAagAJAgEA4QAKAgIARAEAAgAAsgFCAgwAAALzAUkAEgD1AUoAcQD0AVQA6gADAnUAQgH4AVsAwwEoAm4ADgL8AdMAQQH1AakA7gEMAtgAGQLwARUBPwECAjcBJgL0AYkBKwJrAgz+CwKXAjj+rwGkAhv+CwKUArX+ugGeAiL/2wHGAh3/8gGJAnH/6QGfAp///QGKAvz/FQJqAkMAKgLyAkb+2AH7AjH+DQL3Aq/+4AEWA9X++wHZAgr/5wHyAij/BwLfAn//GwKIAKEApACiAKEAhQCIAIUAhAChAIgAhADAAL8AoQBqAGwAawBkAIkAaACIAIoAiQA2AToBGQGhAIQAhQCUAZMBigFiAWcBQAFoAGcAagCLAIkAigCLAIoAZwBoAGQAiwBoAIkAiwBfAGUAYACFAIgAiQDpAOcA5gBfAGAAhQCJAZMBigE4ARoBGwGiAMAAoQBrAGwAbQBrAGgAagBVAFYANQA0AFUANQB2AHEAdQBGAEoAKQApAC0ALgCGAWEBYAFhAV0BXgFnAT8BQAGJAGUAXwDLAMoA6wBrAG0ASwBmAWwBPwE2ATcBOwE7AToBNgFJAEgAawBpAEUAaACoAKoA";var rh="pwB4AFcAVQCtAMsArgAvACsALgB4AHoAVwC8ALsAwABLAEgAawCJAF8AhQAwACwAKwB4AXcBcAERAAAAEwC8AKIAowBoAEUARABlAIkAZABIAEwASQDxAPYA1AC+ALoAuQCGAKIAhQC7AMAAogBoAGsARQBoAGkAZQCGAKMAogCAAKMAhgC8ALsAogCdALwAowAzATgBGwF6AXQBcwFIAEsATABJAEUAawBlAEUAPwC9ANwAvABkAGgAZQBgAIYAhQCzALIA0ADmAOMA5QAxARMBMAFXASwBKwFWASoBKQEWACwAFwCeAL0AnQAnASYBTwGAAJ0AowApASgBJgEqAVYBKwFFAGUAaQCGAGEAhwCtAMoAywBGAD8ARQDKAKwAqgCrAMcAqgAxAVoBWwFmAGAAZQBgAGEAhgDjAOYA5ABKAEkATQBAAGUAPwCoAKsAqgCBAJ4AnQAOAQ0BLQFGAEUASgCAAIYAgQA+ADoAXQC9ALwAnQA6AF4AXQBgAV0BYQEdAB8ADwBGAEAAPwCHAGEAWwCBAIYAhwD+AP8AGQGUAYkBkwGdAIAAgQDfAMAA4ABKAEUASQBhAGAAZgCBAIcAWwBmAGUAQABmADsAYQAqACYAKQBGACUAKQC+AJwAugBdAGMAPQCfAL0AngBGAEEAQACfAL4AvQA7AGYAQABNAEkATABAAEEAPAA7AEAAPACKAGoAZwCMAYkBlQE7ADwAYQBhADwAYgBcAGEAYgDjAAYB5QCBAFsAXACCAIEAXACeAIEAggC9AL4A3gBbAGEAXABkAWMBPAGCAJ8AngDeAN0AvQAmACUAKQAlACYARgBHAEYAJQBdAWABMwE8ATsBOAEhAUEBIgEAAd4A2QBpAWMBZAFHACUAJgBHAEEARgD/AN0A3gDdAP4A3ABvAG4AjgDhANwAvADhAAIB4ACPAI4AkACoAMUAxgCMAY0BeAGnAKUAqABBAEcAJgBwAYwBcQFxAXgBcAHGAMMAxABcAGIAPACoAKYAwwAgAQIBHAExAS0BWgFvAGwAbgAiAEEAJgBcAGIAXQDeAL4A2QBWAVUBTwE9AGIAPACWALMAlwCfAIIAgwCMAKoAjQAKAQsB7QCVAJYAeAALARABDwFiAGMAXQAiACYAIwAjAEIAIgB1AHAAdABcAF0AgwCDAIIAXABYAYIBUgEqACsAJgBBACIAQgCgAJ8AgwAqAC4AKwBCADwAQQA8AEIAPQBjAGIAPQAmACcAIwAnACMAQgAnACYAKwD4APcA9gDUAPAA8QA1ABwANAASAS4BLwGcAIMAfwAkAD4AQwAcABoAGQAbADQAHAAIAesA6ADoAAcBCAHjAMMAwgACAR8BAQEWATMBGwHpAOcA6gAPAB0ADQAbABwAGQA0ABkAMwDoAOkA5gAZADQAGwBCAEMAPgA4ATMBYAE9AEIAPgA+AF0APQBlAYkBagEnACQAQgBtAGwAbwC2ALoA2gAvADAAKwAsACcAKwBCACQAQwCLAXABiQEYABcAMABvAI8AcACLAYkBjAEnACwAKAAkACcAKABYADcANgC6ANkAuQDZAL4AuQAzABkAGABwAG0AbwAwABcALAAFAAQABgD+AAMB4QAwADMAGADFAMMAxgDGAOYA5wCmAKgApQDDAOYAxgDmAMMA5ABMAG0ASwAzADIAUwAgAR8BAgEvADIAMwDhANwA/gBTADQAMwBTADIAUgAAARsBGgEbAfsAFgEAAfsAGwHoAMgA6QAzADAALwAAAAEAEwC2ANYA2gAPABAADQBVADQAUwAQAA4A";var ah="DQANAA4AHQAeAB0ADgBPAEwAcABTAFIAcwABABIAEQARABIADwASABAADwAGAAcABQAEAAUAAgATAAEAEQBMAG0AcAAFAAMAAgABAAAAAgABAAIAAwABABQAEgB4AFMAcwB3AHgAcwAQAA4AHgBVAFMAeAB4AJYAegBQAEwATwCXAHoAlgB3AJUAeADqAOkAyABhAYgBZQFwAHEAUACIAWEBhgFRADEALgCXALMAtAApAC4AKgBRAE4ATQByAHYAUQBNAC4ALQBOAC4ATQBKAE0AKQBQAE0ATABNAC0AKQC0ANEA1ABgAWEBZQFRAHEAcgCqAMcAygDHAKsAyABQAFEATQDpAOoAxgByAHEAdgDJAOoAyABPAHAAUABxAFEAUADYANcAtwCuAJEAkACQAJEAjwB9AH4AmgDtAM0AzACaAJsAuACaAH4AmwDIAMoAxwDMAK8ArgDtAO4AzQD9ABcB/ACRAK4ArwD9APkA2AC4ALcAmgAEASEBBQGvAMwAzQC3ALgA2ABvAI4AjwCZAHwAmgD9APwA2wD9ANcA2ADuAO0ACwHYANcA2wCvAJIAkQA+AR8BIAHXAPwA2wB8AH0AmgAXARgBNQEXAf0AGAHbANcA/QA1ATQBFwGaALcAmQAfASEBBAGZALcAtgCSAHQAcABeAV8BYQHbAPsA2gC2ALcA1wBeATUBXwHXANYAtgBeATQBNQHaANYA1wD8APsA2wDXANsA2gDyAO4ACwGQAYYBhwGFAYcBhgHqAMkAxgAWARcBNAH8ABcB+wCGAV8BhQH7ABcBFgGSAI8AkQBhAV8BhgHyAAsBDwHzAPIA7gCGAZABjwFeAWEBhgEPARAB8wAzARYBNAEzATQBXgEzAV4BXQEPAfMA8gCwAK8AzQDyAM0A7gDjAAUBBgERAB8AIAA3ARoBOAE7ATcBOAFwAI8AkgBYAFkANwDzAM4AzQDNAPIA8wAAAf8A3gDNAM4AsAAZAf8AAAF0AJMAdQAfADcAOQA3AB8AHQAaARkBAAGuAK0ArACSAK8AkwCTAHQAkgDOAPMA0gARAA8AHwCwAJMArwD0ANMA0gDnAOkAxgBZADYANwAaATcBNgEZARoBNgE6ATsBYwHdANwAvAC8AL0A3QBjAWcBYgE6AWMBYgE2AFgAWgBZAFgANgA5ADgAWgD+AB0BAwHSAPMA9AAdARkBHgFiAUABOgH+ABkBHQHcAOEA4AA6AUABPwE6ATkBHgEdAR4BOQEDAQIB4QARAfMAEAERAfQA8wA5AToBPwHgAMAA3ADAALwA3AACAQMBHQEdARwBAgE+AT8BOQEhABMAEQA/ARwBOQE/AT4BHAHSANMAzwA+ASABHAE4ADcANgB1AHEAcAARACAAIQACAAAAEwAcAR0BOQGxAJMAsAATABUAAgCxAM4AzwBaADgANgA6ACAAHwA6AB8AOQBpAWgBYwFpAW4BaAFjATsBPAHfAAEB4gA5ADcAOACxALAAzgDPAM4A0gB1AJMAdgDHAMgA6ADPANMA9AB8AH8AWgCUAJMAsQCUAHYAkwB8AFoAWAAEAAIAFQA+AT0BHwEhABUAEwCsAI0AqgBUAYEBgwE+AUEBPQFaAVQBgwE5AFoAXgAkABUAIQCVAYkBlAGBAYABfQF+AYEBfQFaAVkBUwH0AO8AzwBaAF0AXgA6ADkAXgA6AD4AIQBUAVMBgQGBAVMBgAHlAOgA5gBTAVQBWgFNAX0BUwFgAWUBZAEhACAAOgDlAAcB6AB+AX0BdwGJAXABagHCAKUApAB9AYABUwEVABYA";var oh="BAB3AXgBfgERAS4BEgHJAKsAqQCZAJwAfADKAK0ArADvAPUAEgEFAeMA4gASAfQAEQFNAXcBfQH0APUA7wDPAO8A0ACDAF0AWgBMAXwBTQEvASwBEgFlAYgBiQFSAVMBWQFZAVgBUgFwAXcBdgFqAWQBZQFMAVMBUgFNAVMBTAFvAXABdgESAfUA9AASAfAA7wB2AXcBfQFwAW8BagF8AX0BTQF8AUwBUgFSAX8BfAF2AX0BfAFvAWkBagFpAWQBagEkACgAFQBSAYIBfwF8AJwAfwAWABUAKAAGAAQAFgAWABcABgDBAOMAwgBaAH8AgwAkACEAPgASASwBDQHwABIBDQEGAAgABwCyAM8A0ABgAWQBOAE4AWQBPAHQAO8A8ACxAM8AsgCDAVsBWgF8AUwBSwEsAVcBWAFRAUwBUgF8AXsBdgF2AXsBdQHIAKsAyQBRAVIBWAFXAVEBWAF8AUsBewGIAY8BkQFvAXYBdQFuAW8BdQFuAWkBbwGyAJUAsQBLAUwBUQFRAFQAdgCVAHcAlABUAHcAUgB1AUsBewFuAXUBbQFRAUoBSwF1AXsBegF7AUsBegF1AXoBdAF1AXsBdAGVAJQAsQCZALoAnACUAHcAdgBRAVABSgFoAW4BZwGpAMYAyQBQAVEBVgFtAXUBdAFjAWgBZwF6AUsBSgFcATIBMQF5AXQBegFtAWcBbgFbAYMBhAEEAQUB4gC2ALoAmQCgAIMAnABSAHcAcwBzAXQBeQEeARkBOgHoAMoAxwAxAVsBXAFsAUMBPwFWAU8BUAFVAVABTwFUAHYAdwBUAFIAUQB0AXMBbQFmAW0BbAFPAUoBUAF6AUoBeQFKAUkBeQFJAUoBTwEsABYAKAAXAAgABgAIABcAGAA/AWcBZgFtAWYBZwFsAW0BcwFSADEAUQAKAAkACAD1ABMB9gBPASkBJwFzAXkBSQFGAUUBcwFPAVUBKQFGAXMBSQFJAUUBRgFzAXIBawFzAWsBbAExAFIAMgD1APAAEgFJAU8BSAFFAUkBSAFFAXIBcwFrAUMBbAEpASYBJwFOAUgBTwFrAUIBQwFCAT8BQwFOAU8BJgFOASYBSAE+AT8BQgFrAXIBQgEwATEBMgH1ABIBEwHwAPYA8QCgAJwAvgALAAkACgDwAPUA9gDRANAA8AC+AJ8AoAAvADEAMgDRAPAA1AAIABkACgCzALIAlQCpAKsAqAAvAC4AMQABAR8BBAFCAUEBPgGzANAA0QAhAR8BQQGWALIAswAtASwBWQELABkAGgBWAVEBVwFXASsBVgEZAAsACgCOAXgBjQF+AXgBjgEJASUBCgHaANkAugCIAYYBjwEmAQoBJQEkASMBSAGNAKwAjgAmASQBSAGMAZUBjQEZAAgAGADaAPsA2QBBAR8BPQFwAYsBjAEmASgBCgG0ALUAlwAKASkBCwFWASkBVQEIASUBCQHUANUAtAAmASUBJAEKASgBKQGXALUAmAAcAAsAGgCtAJAAjgCuAJAArQCsAK0AjgDLAMwArgDVANQA9gALASkBDAHVAPYA9wAMASkBKgEqARABDAEQAQsBDAEMAREBEAERARABKgERASoBKwEsAS4BKwHtAMwA7AARASsBLgEuASwBLwEJAQoB7QBZASwBWAEOAS0BMAEtAQ0BLAEjASQBJQEOARIBDQEtATABEwESAQ4BEwEOATABEwFZAVoBLQElAQgBBwHiAAEBBAEwAS0BMQF7AFYAVwDDAMUAqADsAAkB7QDRALQAswCVALIAlgATATABFAGYAHsAlwClAMIA";var ch="pgClAMMApgCMAXgBcQHCAMMApgAwATIBFAH6AAAB2QC1ALQA1QBXAHoAewATARQBFQHjAOQAwwAVARQBMgGOAG4AbABnAGgAiwD2ABMBFAEVAfgA9gD2ABQBFQF7AHoAlwD7APoA2QAiAQUBIQEGAQUBIgEHASMBJQEIAQcBIwFEAUgBIwEMAAsAHACMAIoApQBEASMBRwFCAUUBQQFFAUgBRAFFAUIBcgG/AMEApACkAKUAiACMAGoAigDMAMsA7ADrAOwAywClAIoAiAAiAUQBIwHAAN8AvwCUAZMBkQEuAE4AUQCkAKEAvwB5AFYAewBWAFUAVwCMAKcAqgDKAOgA6wCRAZIBlAGoAMYAqQD/AP4A3QBFAUQBQQGJAZEBkwHrAAkB7AAIAQkB6wAHAeUABgHfAOIAvwDBAOIA4wABAd8A4ABqAIwAjQCkAMEAwgAAAfoA+wDBAL8A4gBqAI0AbAAiAUEBRAGRAYkBiAEjAQcBBgFsAI0AjgCnAIwApQDgAAIBAQEjAQYBIgE=";var rc=ih+sh+rh+ah+oh+ch;var lh="NwEAAAsDAACj/TEA7ACi/U8A5gAF/lf/lQD6/Tr/7wAG/kP/FQEA/sb/NgD6/Zr/dwDd/Zj/8gDz/YP/FQEH/gkAHAD2/QQAhQDN/f//6QAD/moAGQD0/WEAggDM/XMA1gAN/qsAJwDv/dQAhgDh/dcAzAAR/ikBpAAD/iEBxQB0/uf+HABm/sz+cQBa/r7+7wB3/lP/vf9h/i//BgBV/jP/cwA7/hj/6gAm/iX/FwFl/p7/mf9S/pT/BQA6/oX/cAAh/nT/ywBs/hEARP9d/gIAov9G/vr/AwAk/v7/XgBr/nMANf9e/m0AoP9A/m4AAAAn/nAAYgAT/p8ApgB5/sAAT/9j/ssAjv9P/s4ABwBQ/tYAbQAw/u8AtQB0/hoB/P9Z/jcBgABS/jcBzQDj/nb+GwDJ/mf+fQC9/mT+2gDV/sX+nP/F/sD+CgC1/rP+bwCi/p7+1wDU/ir/RP/I/iz/mf+m/ij/+f+M/gX/WgDK/qD/Lf+s/pH/kv+U/mv/6f/Y/ggA6f69/v7/Kv+S/vX/fP/P/mgA4v64/mwAIv+M/n8Acv/g/r8A5f7E/swAMP+2/uIAjP+g/vUA+f+H/ggBZADd/h0BRP/B/i8Bnf/E/jkBBAC0/koBfgCu/l0BwwDb/ooBigDU/oYBqwBG/3X+rv8s/2P+AwAz/1b+egAj/0n+zwAw/8j+Ov8q/77+kv8c/6b++/8T/4n+XwAp/yj/LP8B/xn/cv8t/7D/6/4d/43/Hv/w/mX/Xv8k/wIA5v4q//z/Hv8q/2wA3/4Y/20AFP8n/8oA4v4j/+gALf8H/wUBb/8v/ywBLf8o/zcBlP8l/1IB/f8q/2gBdwAN/3QBrwA+/4oBGAAr/5oBhAAg/4oBqwCx/3j+T/+X/2r+kP+Y/17+CgCU/0T+dgCM/zT+vACa/8b+OP+V/6r+gP99/4v+8/+Q/yD/If+X/5n/Jv+6/7z/d/9l/yAA7P6E/wAAJf+i//v/iP/F//v/0P+C/4EA5/6V/2sAK/+x/1AAf/+G/8gA5/6U/+4AH/+b/y4BOP+W/0IBgf+R/2AB/v98/3UBVwCu/4gBrf+V/5gB+f+S/6EBigAPAHj+Tv///1/+lP///17+/v8DAD3+fgACADT+sgD4/8P+Mf/4/5b+iP8BABv/Jf8AAI7/Lv/9/7D/lP8EAMP/2/8BAAIACf/M//D/v/////z/AAAXAJcA6P7//30AJ//+/2gAjv8cADwA0/8HANsA4v78/9wAH/8dAB4B6P75/zoBMP/6/1gBif///3cB5v8lAIYBT/8BAJkBnf8HAKIBDwD+/7UBhgBUAHz+Vv90AGf+hf9zAGb+DABrADn+gwBVACn+pwBqAMT+Of9sAJ7+j/+JAIX+6f9tABz/OP9tAJP/Mf9JALz/hP97AAIAJ/9gAP//l/9BAAIA2f91AIAA3v5vAGwAKv9UAFIAhf9wANoA1v5nAM0ADv9sAB4B5v5sAEoBLv9vAGgBgf9HAH8B1P93AIoBQ/90AKQBi/9xAKUBBQBqAMoBiACZAM8BpwDSAG3+nf/WAFz+EQDYAD/+gAAEAUb+pwDWAMT+PP/iAKz+jv/jAI7+AQD/AIP+SgDeAB//Pv/eAJD/KP/3ACgA7P7cAP3/Fv/dAG4A4P7PAGkAG//WANYA4P7hAOQAFf+9ABcB6f7aAD8BKP/bAGQBgv8IAXoB5P/MAI4BTP/ZAKYBkv/YAKYB/P/bAMkBfgDnANABswAeAXn+uf8zAXD+BgBJAVn+hwBMAVL+qAA6Acz+Qv8/AcP+lf9UAbf+CABXAZ/+ZQBEATL/P/9bAQD/c/9SAY7/NP8jAS0A6/5JAf//Hf8kAW8A6f5SAW8AF/9/AZ8AZ/8dAbMA7P5FAdcAGv9tAfEAh/81ATYBOP9GAUQBlv9OAV4B/v9kAWcBZQB0AXYBsQAuAZIBov9IAZ8BBwA5Aa0BfQBLAbQByACjAW7+iQCfAW7+rwCGAeH+Vv+3Adb+ov+uAc7+CwC3Abr+cgDLAaD+vgCfAS7/Pf+1ASL/kv/dARX/+//pAfX+UAClAZH/N//MAYb/fP+pAQAALv/OARMAi/+eAWUAL/+6AW4Akf/hAYQAAADrAZIAYQCUAcgAQP+pAdUAnv/EAeIACADSAeYAZgDfAfAA1ACbATYBqf+tATgBDwCuAUQBbQDGAVUB4gCKAYkBLwCiAZABewCpAZYB4QACAtf+CAALAsb+ewASAsz+zQDxAVn/Wv8HAjD/ov8PAi3/AgAHAhr/bgAyAib/4QD3Aa//UP8RApn/mv8OApL/8v8lApL/bwA4Aov/6wBGAqT/GgH0Adn/T/8NAvn/n/8QAgQA+v8iAgMAbAAsAgIA5wAxAgUAJgEFAloAoP8GAlkACwANAmkAbwAVAnIA5gAmAmwAJgHyAbUAwP8DAtcACAAPAtkAcgASAtcA9gAgAtoAIAH4ASEBJAD5ASIBXgADAkQB9AALAiUBGgFeAqj/9wC/ANgA1wB6AHsAlQDCANwAwwAaABsABADcAMIA2wDbAPYA3AAEAAgABwCoAIwApwDXAL4AvwAhASABJwEaAAQABwAxATABNQGnAIwAiwD2APoA+wAwATQBNQH2APUA+gD1APYA2wAwASwBKwHbAPoA9QATARAB9AAsATABMQEmAScBIAHbAOAA+gBOAGkATQA0ATABDAEMARABNAFoAIcAawBrAIcAhAAaAAcAHwBxAHAAiwAnASsBLAEnASYBKwFoAE0AaQCEAGgAawBTAHEAVAAWARUBGwFNADAATgD7APoAFgEzADcAVADwAO8A9AAvACwALQAwAE0ALwAWAfoAFQFTAHAAcQAwAC8ALQBNACwALwDzAPQA7wAPAfAAEAGjAIMAhwBYAFQANwA3ADYAWAARAC0AKAAaAfoA/wAoAC0ALABJACwATQBUAFgAUwCDAIQAhwAOABEAKAC9AKMAvgC9AL4A1wANAA4AKAAHAAsACgDbAMcA4ACDAKMAogAoACwAJwANACgAJwCiAKMAvQAKAAYABwDHAMIAxgCfAIMAogAHAAYAHwA2ADcAFgArAQwBMAHCAMEAxgDbAMIAxwAeABkAGgAOAAoACwAWABoANgBoAIQAgwA2ABoAGQAeAB8ABgDBAMIApwDBAKcApgAbAR8BIAHWAL0A1wANAAoADgDgAMYA3wAPARABDAGLAHAAigAqASsBJgELAQwBBwElASoBJgFnAGgAgwAZADsANgArAQcBDAEMAQsBDwEfASYBIAGKAHAAbwAeAAYAIwAGAAoAIwD/APoA/gDgAMcAxgAfARsBGgHXAPMA1gAmAR8BJQHuAPMA7wCnAIsAigDgAN8A+QDTANYA7gBnAEwAaADuANYA8wCmAKsAxgBoAEwATQCnAIoApgBwAHQAbwBMAEgATQAHASsBKgFTAHQAcAAaAf4AGQFNAEgASQAsAEkASABTAFgAdAAKAA0AJwBYADYANQCfAKIAvQBXAFgANQArACwASADuAO8ADgHvAA8BDgG5ALoAvQDtANIA0wC9ALoAnwDSANYA0wAdAB4AIwB0AFgAVwDTAO4A7QAZAB4AHQC5AJ8AugCfAIIAgwDWANIAvQBvAHQAigCOAIoAiQCrAKoAxgCfALkAngAmACcAKwAdACMAIgA7ABkAOgCCAJ8AngAsACsAJwA6ABkAGABIAEwARwA2ADsANQAdADoAGAAYABkAHQAaARkBHwGKAI4ApgC5AL0A0gAPAQsBDgGKAHMAjgBnAGYATACqAKsApgAGAQcBKgE1ADsAOgBzAIoAdAALAQoBDgELAQcBBgElAR4BJAElASkBKgFMAGYARwAfAR4BJQGmAI4AqgAjACcAJgDFAMYAqgAjACYAIgAlASQBKQHGAN4A3wCCAGcAgwD5AN8A3gAeAR8BGQH9AAEB/gBnAIIAZgDeAMYAxQA+ADoAHQB0AFcAcwDiAP0A3gD5AP0A/gABAR0BHgEeAf4AAQH5AN4A+AAGAQoBCwH9APkA+ABkAEcAZgDeAP0A+ABzAFcAVgBHACsASABXADUAVgA5ADUAOgArACUAJgBkAEYARwA9ADoAPgA9AB0AHADRALgA0gC5ANIAuAC5AJ0AngDuAA4B7QA5AFYANQAdACEAHADSAO0A0QC5ALgAnQAdAD0APgA5AFoAVgBHACUAKwA5ADoAPQBGAGQAYwCNAI4AcwAKAe0ADgEhAB0AIgByAI0AcwBEACUARwAhAD0AHAAJAesA7QAkAR4BHQElACIAJgDsANEA7QAkAR0BIwFBAD0AIQCpAKoAjgBkAGYAYwAJAe0ACgFlAGYAgQAlACEAIgDhAP0A4gAKAQYBBQHtAOsA7ADsAOoA0QDhAN4AyACdAIEAggDhAPwA/QCOAI0AqQAkAQYBKQHFAMgA3gDhAOIA3gCqAMQAxQBHAEYARAAFAQkBCgGqAKkAxADqAM8A0QABAf0A/AAGASQBAwH8AAABAQHEAMgAxQAGAQMBBQHsAOsA6gBBACEAJQABASMBHQFWAFkAcgC2ANEAzwAAAfwA4QAjAQMBJAHRALYAuAAjAQEBAwFZAFYAWgBlAIEAgAByAHMAVgCBAJ0AgACdALgAtgCdAJsAgABEAEEAJQCpAMgAxABdADwAXAB1AI0AcgADAQEBAAFaAD0AXQCdALYAmwA8AF0APQBZAHUAcgBDAEYAYwBDAEAARABjAGEAQwADAQABAgEJAQUB6wBEAEAAQQCsAKkAjwDnAOoA6wDoAOsABQHoAOcA6wDjAOUAAgHjAAIBAAHqAOcAzwDnAM0AzwDnAOgABQEEAQUBAwE8AF8AXAC2AM8AswAEAecABQECAQQBAwFAAF8APABjAIAAfQBDAGEAQAB1AFkAXABjAH0AYQCsAMkAyAACAeUA5wBhAF8AQADPAM0AswCsAK0AyQB1AFwAdgC2ALMAlwCbAJcAgADnAAQBAgGPAK0ArADjAMkAywDlAOMAywCtAI8AkACAAJcAfQB2AI8AdQCQAI8AdgB9AHkAYQB5AF8AYQDlAMsAzQDnAOUAzQB+AH0AlwCYAH4AlwBfAHkAXACYAJcAtAB2AFwAeQB3AJEAkACzAK8AtACuAK0AkQCRAK0AkACQAHYAdwB5AHoAdgCwALQArwCvAMkArQDJAK8AywB3AHYAegDLAK8AzQCvAK0AsAB5AH0AfgB+AHoAeQCwAK0ArgB6AJEAdwB+AJgAlAB6AH4AlACZAJgAtAB6AJQAdwCVAJQAmACZAJUAmACZALQAsQCUAJUAegCVAJkAsQCRAJQAlQCwAJUAsQDgAPkA+gBmAGUAYwD0APMA1wCpAKwAyABjAGUAgADNAK8AswB3AJQAkQDvAPAADwGuAJEAlQCVALAA";var hh="rgDhAMgAyQDJAOMA4QDYAPQA1wCBAGYAggC0AJcAswCSAJUAkQDhAOMAAAFEAEYAQwAfAB4AGgA9AFoAOQBdAFwAWQBZAFoAXQAbARUBGgGCAJ4AnQAQAfAA9AAGASoBKQEVAfoAGgFxAIsAjACbALYAlwD/AP4AGgGPAI0AdQCmAMYAwQAZAf4AHgG0ALAAsQD5AP4A+gCpAI0AjwA8AD0AQQAjAAoAJwBAADwAQQBrAGgAbABoAGkAbAAwAC0AEwAtABEAEwAaABsAFgB4AHkAXgA1ADYAMgAKAQkBLgGmAIoAiwDEAKwAqQCQAK0AkwCgAJ0AuABHACkARgAiAAkAHQCWAHwAlwAqAEsALgCiAKEAvQACAQUBBAFWAFUANAAdARcBGAGAAJsAgQAgABwAPAByAG0AjQBGAEMAQgAYABwAHQAyAS4BMwGhAIUAggC8ANYAvQCIAI0AbQAUAfgA+QCsAI8AjQANAQkBCgEsACsALwANAe4A7QBWAFIAUQD8ABcBAAEjASkBKAHVAO0A8QBOAGwAaQAQAQ8BNAGdAIEAmwB4AH0AfACvAJMArQByAHMAbgBnAIIAhgA3ADMAFgAOAAsAAQDNAMwAswC/AL4A2AAJAA0ACgChALwAvQDYAL4A1wAOAe4ADQEcAQIBAAHUALwAuwCpAKQApQDcAPUA2wAkAEMARgAaAR4BGQFLAEYASgAtAS4BCQFOAE0AUADzAPIAEQF8AGAAXgA8ABwAPQDEAOEAyAD2APUA3AAFASMBKAEKAQ4BDQEYABcAHABWADQANQC8AKEAoABuAG0AcgAUAfkA+gD5AN8A+gAZABQAGAALAAYACgBSADUAMQAzADYANwAqAEcASwBuAIkAbQD4AP0A/ADZAMEA2gAdARgBHgEuASkBKgE6ADkAGAAGAB0ABQAGAAsABwBGAEUAYgAeABkAGAAsAA8AKwDOAM8A0ACLAKcApgATABIAMAAlACAAJACJAG4AbwChAJ0AoAAIAQkB6gCgALsAvABlAEYAYwAmACIAIQA4ADwAOQA9ADkAPADOAOkA6gDxANYA1QAgADwAQAAZABUAFAAyAFMAMQAiAQIBHAE0ADgAOQBCAD8AXgA0AQ8BMwHQALcAtQBiAH8AYwAKAAUACQAkAEYAKQDMAM0AywCWAJcAmgD9ABcB/AA1ADIAMQChAKIAhgCKAKYAiQCGAIUAoQAdARwBAAHZANoA3gDCANsAwQCCAIUAhgBeAGAAQgA4AFkAPAB2AFsAXADaAOAA3wDAANkA3gAUADUAOgBbADwAXABRAFIAbwD6AN8A4AC7ALgA0QAOAQoBLgGlAIkApgBCAEMAQAD3AOEA3QAAARcBHQHqAA0B7QDaAMEA2wAEAQkBCAG8ANUA1gDzABIB9ABAACQAIAAYADkAFwBMAEsAZgBlAEoARgApASMBJAE9ABwAOQDXAPIA8wDfAN4A2gAtASgBKQE1ADQAOQAjAQUBAgFKAGUAZgAFAAoABgAPAA0ADAAhACAAJQBTAG8AUgDtAOwA6gDLAMoAzAArAA8ADABRAG8AbgAvAEwATQCpAI0ApAB5AJMAlwB9AHgAeQASAQ4BDwFnAGsATQAxAFMAUgC3ANAAuAAmACsADAAqAC4AKwAFAB0ACQAJACIAJgDCAKYApwAiASMBAgFCAEAAPwAYARcB/QCtAMgAyQDeAPgA9wDeAPcA3QDlAMoAywDgANoA2wBHACoAKQAYABQAOgBvAIoAiQA2ASYBIAHyAO4ADgHqAAkBDQEtAQUBKAFFAEYAQgAGAB4AHQBWAHIAVQCWAJoAfAAJAQQBBQFLAEcARgAgACEAHAAQACwALwD4ABgB/QCiAL4AowCIAG0AiQCGAKIAhwCCAGUAgQD2APsA9QAGAAMAAgCjAIcAogBiAEUAQgBDACQAQAB8AJoAfwCdAKEAngD1AOAA2wAkACkAKgApAS4BLQHxAPIA1gAOAREB8gCXAJMAswBWAG4AcwAyAFQAUwAQAA0ADwAHAAMABgA1AFIAVwAzADIANgD1APoA4AAVABkAGgCiAL0AvgAUABUANQBMAGcATQDBAMAApgAeABgAHQBeAHgAfAAuATIBDgE8AD8AQAAlACYAIQAZAR4BGAGCAGYAZQDVANEA7QAaABkAAwDzABEBEgEzAS8BNAE0AFUAOADuAPEA7QAuAEsATAC4AJ0AnAAZAAIAAwBLAEoAZgAPACwAEACgALgAuwCGAGoAZwAXADkAHABPAE0AawDXANYA8gAPARABEgFiAGMARgCvALMAkwBnAGoAawBeADwAWwAUARoBGQHAAMEA2QDMAOQA5gATAC8AEgAuAEwALwDCAMEApgB2AJMAeQAUARkBGAG7ANEA1AAvASsBMAEMAA0ACQDqAAQBCAECAQQB5QB/AGIAfADMAM4AsgBrAGoAhwAUAfoAFQGTAHYAkAA0AS8BMAEJAQUBLQEmASsBJQErASoBJQFqAIYAhwAJACYADAC3AJoAtQDyAPEA7gAqACsAJQAvASoBKwGlAKYAwAAVADYANQDRANUA1ABvAFMAcAAuAC8AKwDFAN0AxAAOATIBDwEVABoAFgAzAS4BLwEaARQBFQGCAJ4AoQDRANAAzwAeARoBHwEqAS8BLgFXAFIAVgAvABMAEAARABAAEwACABkABgDeAMUAwADhAPcA/AC4AJwAtwAyADMAVAAYAfgAFAEsASYBJwG1AM4A0AANABAAEQBgAGIAQgB/AJoAgAC8ANQA1QBuAFYAUQAeAAYAGQAyATMBDwGzAMwAsgABAAAACwDEAN0A4QASAREBDgEOAA0AEQATARIBEAGaALcAnAAdASMBIgEiARwBHQEkACoAJQD3APgA/AASARMB9AA2ABUAFgAaAAMABABVAFkAOADFAMQAwAB9AJcAfABVAHIAWQBNAE8AUAD7APoA9QBQAE8AawB5AJcAfQCWAJcAsgCzALIAlwB5AF4AdgCPAJAAdQB2AHUAkACzAMsAzQCzAK8AywB2AF4AWwCaAJYAsgCaALIAtQCbAIAAmgBiAGAAfACtAKwAyACsAI0AqQCsAMQAyADEAKkApQDAAMQApQClAIgAiQClAKQAiACNAIgApADeAN0AxQAEAecA5QDKAOUA5ADkAMwAygDlAOYA5ADnAOYA5QDpAM4A5gDOALUAsgDmAM4AzADqAOcABAHmAOoA6QDmAOcA6gDqAM8AzgC4ANAA0QCdAJsAmgCdAJoAnACAAGMAfwA8AF4APwBZAFwAPABrAGwAUAASAC8AMABOAFAAbAAsASsBJgEHAAQAAwA=";var uh=lh+hh;var dh="WQIAAM4EAACf/cH/xv+U/a//GgCM/ZL/dQCN/ZX/0wCc/bf/IgGT/RoAMf+C/QQAk/92/f3/+/9n/QIAbgB0/QIA2wCT/QUAJwGU/X0A0/52/XIAJP9e/WsAlP9Z/XsA+/9g/XEAcQB8/WsA4gCZ/V8AJgGa/c4A2f6H/d4AKP90/dkAlf94/eAA/v+E/dgAZgCS/b0AzACb/SQBNv+W/SUBkf+Z/R0B7v8K/tb+q/8C/sT+BQD3/cH+cAD0/cD+3gAF/tP+TwH//Sb/mP/i/SD/BADB/Sb/bgDA/SD/2wDw/SX/XwEM/i//lAEM/r//3v7t/a3/Kf/X/ZX/jv+5/YP/9v+r/WD/RgCn/WX/+wDX/Zb/YAEE/oX/kAHm/QAAv/6//er/Ff+r/dT/bf8L/g4A6gDv/QIAVgH4/fj/iwHt/YEAdP7A/WAAnv4O/kkA/ADm/WsAUwH4/asAev7P/d4Ao/6q/QcBfwDG/e8A8QDq/dEAQAHg/UEByP6+/VcBIv+9/VwBlf/S/VkBAwDc/UABbgD0/SoB2AAJ/hkBIwEI/ooB4v71/ZQBKf/4/ZEBk/8E/okB8f9x/nH+4/5h/ln+Lv9T/k3+kv9N/k3+AwBN/lL+bQBN/lf+3QBZ/l/+TAFm/rT+zv47/rj+Iv8g/q7+hf8a/pD+AABe/sX+gwBq/sb+2ABO/rX+WgE3/sf+iAFg/iD/0P4p/iv/Jf8W/v/+YP9z/k3/LwBk/in/cwBW/iP/2wBD/iL/UAEk/iP/kAFO/q3/1P5D/or/Df8X/m3/Yv9d/qP/EAA4/pP/bwAp/pr/4AAm/pX/TQEf/pL/lAFO/gcAq/54/hAAxf9R/vf/+P8e/gQAZwAT/vH/0QAS/sv/OwEx/oYAeP5V/mEAjP55/kAAxP9W/m0A+/8t/nAAZgAb/n8A2QAU/osAJgFM/t4AmP5o/sEAGwBP/tYAcQA8/uMA2QAm/u0ALgFM/kcBu/4o/nQBeQBR/lIB8gBI/jUBJgFQ/pgB3P5F/roBHv9G/rsBk/9G/qoB/f9Y/pQBawB2/ogBxwDV/gb+N//M/v39mP/J/v79/v/P/gX+awDh/gv+2gC2/lT+wP6o/if+F/+S/hv+iv+P/hv+BgCn/iz+ewDF/mb+4QC4/kj+RQHA/rv+qf7R/s/+EgCs/rX+cACb/pf+2ACS/pT+PgG+/iD/w/7Z/jv/uP+q/iH///+I/gD/TQC0/oz/3f7E/rH/9P7E/qP/q/+N/pn/2v+4/v7/y/7k/sr/9/63/gAArP+3/m0Apv69/mwAt/+T/pMA0f+1/t0Atf7X/rkAwf+6/uYA+P+b/gUBZQCH/g4BrwCx/kMB1/7k/kAB8f7o/hoBIQDP/ikBfQC4/kkB5wCL/mgBFwG4/qcB4P6y/toBGP+r/uIBkv+2/tcBAwCx/roBcAC5/pkB6ADg/vIBTf/h/vIBhf8t/w3+5/4j//P9Hf8f/9/9lf8m/+H9BQAn/+39cgAl//795gAt/wn+IwEo/03+y/5D/3T+HQAp/2v+YwAb/1b+5wAZ/zP+NAEo/7b+sv49/9b+rf8i/57+9f8C/4b+TgAl/yb/yf4j/xz/m/8j/3j/5P4q/6z/Af8n/5j/kP8C/wsA4v41//P/Cv8i/wIAof8h/3AAy/5O/0EA9f4i/3UAtf8c/9MA0/42//8AAP8k/88Avf8F/wMB2v8g/18B5f4n/zAB//4m/zEBCQAh/08BbQAa/2wB0QAj/6cB5P4k/90B//7//ukBJQAg/94BegAm/68B8QAi//gBOf8n/wECkf8q//wB9/9C//QBSgCS/+z9IP+T/9P9mP+S/9b9/f+Q/+X9dwCX//v97QBt/wX+IAFs/2f+4v6a/0f+/P6R/3D+CgCS/1T+ZQCN/zb+7QCO/yT+IAGJ/7/+1f6z/6f+/v6N/8L+of+S/4b+0/+T/yP/0P6S/yb/f/+S/2r/4/6W/6X/Ef+X/5P/nf/C/7n/2P+R//7/M/+S/wIAtf+///D/3/9w/4EA5P6e/2UACP+R/2wAs/9p/7MA5f6X/9wAE/+U/+AAu/+Y/2MB4/6I/zEBAv+h/x8Bwf+R/0cB/P+R/2wBcACE/3sBuwCT/7cB3P59/+kB9P6G/8oBlwCX/7UB8ADE/8oBFQGW/wUCI/+O/xYCkP+T/xQCAQCT/wECbACp//QBuQD///j9If/5/979l//9/+D9/P/+//D9bwD0/wf+1QD//0f+AP/v/3j+EgAEAGH+bgAHADP+7QD//zz+FgEAALf+H/8FALj+qP8IAIv+6P/V/yz/5v4HACD/Ev8DAC3/hv/N/2X/6P4FAJL/Cf/2/3H/r//3/5j//v8RAL3/TgA0ACMA5/7+////Hf/R/zcAxP/l/w0AEwARAP//bQAJAHkAz/7h/1IA/v77/3IAuP8RAEMA8P8DANgAwf7O//4A8P74/+AAr/8JAFABy/7S/zkB+v76/ygBuP8CAGEBAgD2/3sBTwAAALcBzf4IAIoBfwD8/68B6QADALMBHwEPAPYB5v4BABECGf/9/ycClf/9/ycC/v/7/xYCagAEAPwBxgBpAAT+Lf9nAPH9lf9sAPX9AQBkAAP+agBQAA3+qgBwAGj+6/5rADv++f5hAFr+egBwAEL+6QBtAFb+FQF6AIT+6/5vALn+Bf9mAND+rP90AKn+9v+BAIr+XgCfAIH+rwCYACD/4v5mACX/IP9tACT/nP9vAK3/2v51AHT/Df94AHf/sv9tAJ7/+v9IAMD/SgBvAAQAxv45AP7/8v6bACUAv/+AAAkABgBQAP//YgCZAJ8AfP5rAG4Aov54AGQAs/9TAEMA8f+MANgAd/5YANwAjv5xAOMAo/+XACIBef5qAEsBk/5pAC4BuP9sAFgB+/9vAHcBWABxAL4BuP5dAIsBjABqAK4B8gB2AMEBJwFbAPgB4/5tABICGv9uACwCnP9uAC4CAgBtAB8CbgByAP4B3AC0AAz+OP/JAAf+mf/EAAr++f+wAA/+SgDuAG7+5v7bADb+Dv/9ABf+jv/6ABn+BQDiACT+bwDbAFD+6wDTAG/+GgHmAMX+0v61ALH++/7DAOH+uP/dAM/+9f/cAKb+bQDkAJH+2gD+AIn+GwHaACn/uv7gAB7/mP/hAI//0v69AI3//P7UAJz/l/+oAMj/yv/gAP7/rv7VAAAAnv+oAOT/0f/dAJMAeP7YAF8AjP7eAHAAmv/fANoAZ/7WANYArf8AAQUB1v/cADYBcv7cAHABif6xABsBvv/PAEABAgDhAGYBcAD3AHsBwgDaALIBuv7yAOAB/P7RAJcB6wDcALUBOAGrAPEB7P7dAAQCLf/cACMCjv/cACkC///ZABsCdQDYAP8B1wBJAWn+3P5HAUH+Gv9JAS7+mP9NATP+AgBJAUP+bABDAWX+7ABBAXz+GwFIAbf+r/4qAeT+CwBLAdD+dgBPAbT+6gBZAZ3+KgF6ARz/fP5JAST/kP5EASz/pP9YAQv/7P92AfX+VgBGAZr/q/5JAZH/i/9MAf7/wP5SAQIAmP8mAaAAe/5SAW4Aof46AWIArv9mAYAA8v+BAaQAQgArAeEAdf5jAd0Amf4cAbsAwv9AAdcAAQBwAd4AVgAlASMBe/5OAUsBqv59AXsB8P4mAR8BIgA9ATwBdwBTAVcB4wBaAW4BPAEyAZUBzf5UAckBGf92AewBcv9WAd8B8ABGAasBSwEyAfoBQP9FAQwCmP9HARMCBQBKAQUCbwA5AfYBxgCMAXj+3v6lAWj+JP+0AVz+mP+9AWT+AQCqAWr+aACcAXb+xwC6Abr+uf7XAZL+E//tAYX+cf/XAZL+fAC0Aa7+6QC2Ab/+PQGdASL/ev7UAR//kv6FAVL/uv+XAT//AgCxASr/agDPASL/3ADUAQL/LAG8AZP/mf6SAZP/r/+9AZL/AwDeAYj/WwDtAVv/rAC1AfL/yP68ASEA/f6MAev/t/+rAf3/+f/gAf//agCVAXQA0/7LAWsAGv+VAVoAEgC0AXkAaADgAY4AzACYAdoAyv7TAdsAFv+RAcsAgwC/AdAA4wDSAeQASwHmAf8AigGMATwB2f7JAUkBJP/lAXQBbP+TAScB9QCyAUkBWgHQASoBhgGgAaMBMP+6AbsBkv/EAckB/v+6Ac0BcgC9AbEB4QCgAZgBQgGIAfABtP+NAfQBCgCOAfEBUQDxAX/+qP/7Adj+4P4OAsT+JP8jArP+mP8oAq7+AgArArv+awAhAsX+2wATAtT+OgEJAiT/yf49AiL/Jf9VAgH/iP8NAjj/9AArAiD/QQEHAoz/yf5CApL/Hf/6AaP/igAQApL/3gA8Ao//OgH5Adj/3v4fAv//Kv9NAgwAdv/2Aev/lAAWAvv/3wBAAgUASQFaAi8AiQH6AWkAUP8wAmsAkv9UAocA4v8HAl8A6wAqAnMAVQFAAngAjAH5Ad4ATP8hAtcAlf9LAuIA//9WAv8AagBTAvoA5gAoAtkAYAEMAtAAjgHxAUIBW/8GAkQBlP8iAk0BAwAuAk8BcQAhAkwB3gAJAjIBSQHyARMBjQH3AYYBxP/5AZMBBAD/AZEBZwD3AYsBvgBhAur+CwBhAlL/WP9sAi//mP99AiT/BACBAiT/bgB9Aij/4QB0Ajf/PAFhAob/Vf93Apb/lf+YApf/CgCkAo//dACjAoz/3wCEApX/VAFsAv7/q/+MAv3/BgCgAvz/bACiAgEA4ACLAvn/XAFtAggAiAFxAmMAEwCEAm8AbACLAmgA4AB2AmgAVgFnAlAAjAFjAroAKgBsAsQAcABsAsYA0gBjArMALQF+AX0BhQHnARgC4AFDAhgCSQKyAN0A2AAaARkBSgF9AX4BSgE5AQsBOgEyADMANwBdASUBKgFJARkBGgEZAUkBSgEKAQsBOQGrALIA2AAYAh0CSQIZARoB7AB9AUoBSQGsAHsAfABWAF4AXQAjAiQCTwIjAioCJAIaAe0A7ABmADMAMgCsAKsAewBPAk4CIwIqAiMCKQL7ATECMAL8ATEC+wHtAMAA7ACEAYUBfQEwAjECKQJdAFUAVgApAjECKgL8AfsBAgJmADIAZQBOAFUAjgD7AQECAgK/AOwAwABsATkBbQGvAbABhQFOAkkCIwKvAYUBhAFeAGUAXQBJAh0CIwKOAFUAkwB7AHcAeAB7AHgAfAB9AUkBhAGvAd8B4AGdAWwBngE8AHgAcwDYAN0ACgGNAL8AjgCOAL8AwADPAcoBngHfAecB4AF3AHMAeADYAAoBBgHrABkB7ACeAcoBnQHJAZoBnQH7ATACKQLXANgABgEXAh0CGAJJARkBGAHrABgBGQFsADIAZQBQAYQBSQHJAQECAAIFAdcABgHrAL8AvgBPAYQBUAEXAhwCHQJzADYA";var fh="NwCNAI4AkgBVAFQAkgC/AOsA7ABJAUgBTwExADIANgCSAJMAVQAjAh0CHAJVAF0AXAAjAigCKQJPAVABSQFlAGwAZABrAGQAbABJARgBSAFyADYAcwCmAHcAqwCEAYMBrwEcAiICIwLXAKoAqwA4AQoBOQGvAYMBrgGEAU8BgwFcAFQAVQBrADIAMQA4AWwBawEiAigCIwIKAQkBBQHfAa8BrgGmAKoApQBkAFwAZQDmAd8B3gF2AKYApQCuAd4B3wFyAHcAdgBrAWwBmQEXAuYBHAK/AI0AvgCZAZoByAHlAd4BrgGRAI0AkgC+AOoA6wBpAWsBmQHlAeYB3gGaAckByAHlAa4BtQGRAIwAjQDqABgB6wA4AWsBaQHJAQAC+gHXAAUB1gAdAUgBFwEFAQQB1gDrARwC7AFOAU8BSAE2AWkBNQHqABcBGAGDAa0BrgEXAUgBGAFOAUgBHQHDAfoB+QHEAL4AkQDrARsCHALDAckB+gFrADEAagAiAiECKAL1AfYBKAL5AfoB9gEoAiEC9QHIAckBwwFUAJEAkgBjAGQAawB1AHEAdgA1AQUBNgHxAfUBIQKDAU8BTgGuAbQBtQGtAYMBggH5AfYB9QFUAFMAkQBcAGQAYwAiAhwCGwJ1AHAAcQBrAGoAYwBqAGsAcgC1AbQB5QFOAYIBgwGqANcA1gClAKoApACuAa0BtAEhAiICGwKlAKQAdgCqANYAqQBpAZkBmAHDAPEA6gDkAeUBtAHxASECGwLIAccBmQGqAKkApACYAZkBxwHHAcgBwwHwAfUB8QFTAFsAkQDqAPEAFwFwAGkAcQAdARcB8QChAHAAdQChAHUApACRAFsAlwCQAMQAkQD5AfUBvgFqAHEAaQBNAU4BHQHDAfkBvgHDAMIA8QDHAcMBwgHEAJAAwwCYAccBwgHCAPAA8QD1AfAB9AE1ATQBBAHqAesB5AHwAB0B8QDTANYA0gBoAWcBNAG0AYcBswEdAfAAHAEEAQMBAAG9AfUB9AGWAJEAlwCjAKAApAC0AbMB5AHrAfAB8QGXAFsAlgBNAYEBTgGRAJYAkAChAKAAcADSAKQA0wBvAHAAoABwAG8AaABpAHAAaACWAMMAkACYAZQBkwGzAbcB4wHpAeMBtwHqAeQB6QFnAWgBmAGWAMYAwwBaAFsAYgDPAKAAowBoAG8AoADDAMYAwgADATQBAAFoAKAAngBnAWQBNAGXAWcBmAHSAM8AowCTAcIBwQE0ATEBAAHGAPMA8ADGAJYAlQCBAU0BUwG5AfAB7wG5Ab0B8AE0AWQBMQFTAYcBgQGWAFoAYgCXAZgBkwGXAZMBZwHwAekB7wHCAb0BvAGWAGIAmwAcAfAAIAGTAcEBvAGbAGIAaQCgAMwAngCHAbcBswEAAc8A0gCTAbwBkQHPAAAB/QCbAJ4AmgCWAJsAmgCaAJUAlgDGAJoAyQAAAS0B/QDGAJUAmgCaAJ4AzACaAMwAyQAtATEBZAH2APMAxgBTASABVgEtAWQBYAFTAYoBhwGNAbkBtwEjASAB9gAjAVYBIAFWAYoBUwH9AMwAzwD9APkAzABWASMBJAFXAVYBJAH3ACQB9gCNAWABkQEoAS0BLgFbAWABjQEtAWABYQH9AC0B+QAuASkBKAEoASkBLQFXAYoBVgH3APYA+QAtASkB+QCNAYoBiwFgAVwBYQH2AMwA+QBcAWABWwHMAPYAyQD5ACkB+gCLAYoBVwFcAVsBjQH3APoAJAGOAVwBjQEkASUBVwH6ACkBJAFXASUBWAFXAVgBXQFdAVwBVwFhAVwBKQEpAS4BYQFdAVgBJQGzAeMB5AHpAeQB4wGCAYEBhwEkASMB9gDPAMwAoAC5AY0BvAGHAbQBggH0AfABvQH2AMYAyQAtAQABMQHmARcC5wEkASkBJQEqASUBKQFTAU0BIAEpAigC+gG3AYcBigG+AI0AjACNAYsBjgGCAU4BgQFkAZEBYAHYANcAqwApAvoB+wFcAFMAVADnAd8B5gHkAesB5QGkAKAAoQD2AfoBKALTAKQA1gCRAbwBjQE8AHMANwC0Aa0BggEDAQQBNAGrAHcAewB2AKQAdQCrAKoApgDnARcCGALpAfAB6gFNAR0BHAGTAWQBZwHCAbwBwQG8Ab0BuQE3ADYAMgBdASoBXAHWAKQAqQCkANIAowC9AMMA6gApAVwBKgFtAZ4BbAFlAF4AZgBNARwBIAEgAfMA9gCTAJIAjgB3AHIAcwCwAa8B4AGLAVcBXAFcAY4BiwE5AToBbQFrAGwAMgD6APcA+QC5Ae8B6QHpAbcBuQGmAHYAdwCUAcIBkwFjAFsAXABoATQBNQGRAWQBkwFyAHYAcQAuAS0BYQHKAQECyQHzACAB8ADCAMYA8ACeAGkAaAAKAQUBBgFoATUBaQE2ATgBaQE5AWwBOAG+Ab0BwgFjAGIAWwBdAGUAXACeAJsAaQAEAQAB1gBqAHIAcQAEAQUBNQE4ATYBBQFiAGoAaQBqAGIAYwDCAZQBmAEJAQoBOAHqAfAB6wGNAbcBigHCAcMBvgGaAZ0BygFoAWkBmAEcAuYB7AEJATgBBQGaAcoByQHWAAAB0gDrAfEBGwK9Ab4B9QGRAL4AjAD7AfoBAAIxADYAcgAAAgEC+wHrAewB5gFrADEAcgBcAFsAUwBaAJYAWwC9AOoAvgC9AL4AwwDlAesB5gHDAL4AxACaAZkBnQGZAWwBnQF+AYUBqwGFAbABqwHgARgCEwJPAiQCVAIkAioCVAIxAvwBOAI4AvwBAgIBAsoBCAIIAsoBzwEzAGYALQBmAF4ALQAtAF4AJQDAAO0AuwC7AO0A5wB9AX4BqgF+AasBqgGrAbABqgFPAlQCTgJOAlQCUwJUAioCUwJTAioCKQIpAioCMAIqAjECMAIxAjgCMAIwAjgCNwI4AgICNwI3AgICAQJtAToBbAFsAToBOQGrAKwAsgCyAKwAewB8AHgAQwB4ADwAQwAzAC0AMgAyAC0ALAAlAF4AJAAkAF4AHwBeAFYAHwAfAFYAVQDnAO0A5gDmAO0AFQHtABoBFQEVARoBGQFKAX4BSQFJAX4BfQG3ALYAgwDAAb8BuwFFAhoCRAI8ADsAQgCvAOAAsADUAAIBAQGbAcUBywEPAtcB3QF0AXkBRwHIAMsAnQB/AUwBgAFIAE8AUADWAaUBpgE/AhUCFgJ5AKcArQAnAC4ALwDhAOAADwF1AXoBdAEoACcAMACsAX8BeAHEAcABxQFJAIgASAANATwBPQFGAD8APgCfAKIAdADLAM4AzQA8AW8BPQGnANQA1QCPAZABuwEnASsBLAEUAA4ADQByAXMBQAGmAaUBeQGtANkArgDzAe0B7gF5AaUBeAGPAFcATwB/AEUAfgArAWMBLwFSAVEBVQGVAWIBkgHTAQYCzgEVABoAQACYAJwAXwCAAUwBeQE7AW4BPAErAvMBJQLZANQAAQHTAdQBpAHNAMoAywAMABMADQDcAAoB3QA1AG4ANAAFAgQCOQJAAj8CFgLnALoAuwB6AEAAgAC8AMEAiAAKAgYCCwKwAOAA2wACAf8AMwFMAlACSwInAVoBJgFiAV4BjwEPABYAFwA/AhYCDwJgACYAJwB4AYABeQGlAawBeAHWAdUBpQEzAiwCLQLAAfcBxQFUAScBIgE+AXEBcgFEAH0AfgBvAaABoQEeAu0BGQLFAf0BxgFvAaEBcAEUAtsBDQLLAJwAnQAaABUAGQAnAC8AMABOAk0CSQIGAgoCBQIUAuIB2wG/AcABxAEQAhYCDwKiANQApwBSASIBHwE/AQ8BDgFRABsAUgAcACEAHQAuAi0CVQIeAhkCHwKJAYgBVQFJAUQBRQEVARQB5gDcAdsB1gGyAbYBiAHmAOUAugB5AUwBRwEUAeUA5gC2ALwAiQBYAFcAYAC6AOUAuQCGAbIBiAEfAR4B8gD+Af0B9wFfAJwAZwCiAaEB0QFXAJgAXwA5AjQCOgJMAkcCTQJWAi4CVQIWAEAAQQCKAEkASgAaABkAQABNAkcCSAI9AD4AEwAiAfUAIQFuAW8BPAEZAUkBFQEhAfQA8gARAhAC2QFIAkcCQgIDAAkABAA6AEEAOwCYAF8AYACWAWYBlQEKAtEBCQLtAegBGQI9AHQAeQAXADsAPABgAGEAWABHAEYAgAD1AMsAyAApAAIAKgDIAJkAmAAMATwBDQGCAIEAsQDiAegB4QFBAkACEALiALYAtwAwAf8ALwFfAY8BXgG6ALkAhwDaAAcBCAHGAf0B/gG5AIYAhwBMAVIBGwHRANAA/wAJAQ8BCgGJAEkAigA2AgACBwJHAUwBRgFJAUUBFQEVAUUBRAGxALIAggA3ABcAPAAvAAUABgBWAREBRwEJAgQCBQJjAV8BYgFSABsAHABJAEgAUADuAPIAwQAGAgcCzgE+AhUCPwLMAcUBxgFLAkYCTAJmAWIBZQEGAA0ADgBJAUgBRAGyANwA3QA1ADQAOQA+AT0BcQHyAB4BIQE8AjsCNQJzAaMBpAFtADgANACjAdMBpAGKAEoASwAPABAACQDiAOkAtgAiAVIBVQGyAYYBfwGQAbgBuwFmAWUBlQGVAcQBxQEtAicCUAK6AY8BuwEmAkoCUALbAeIB4QEKAdwACQF9AXwBSQEMABIAEwAvAfwAKwF1AUEBQgGyALEA3ACMAVkBVAEcABsAIQBuAHQAbQDyAcABuwGMAI0AhwAvAlcCWALvAO4A6AA7ABcAOgDXAd0B1gFmAZsBagFFAD0ARABuADUALgAGAA4ABwCHAIYAjAA+AhoCFQLaANkABwETAD4AGAAZAD4APwCMAVQBiAF+AH0ArgB8AUgBSQHWAaYBpwEYAD4AGQCZAJgAYAA3AWYBagH0AMcA8gA5AjMCNAK3AIQAhQCjAaIB0wFiAV8BXgFAAT8BcgEaAhQCFQJ1AXQBQQGuANkA2gDhAbIB2wEGAjoCOwIwAC8ABgDyAMcAxQAtAiwCJwIUAeQA5QAfAu0BHgLbAawB1QFZAFgAIAAXAkECEgJAAQ8BPwGuALMArwARAt4BEgI6ABcAFgACAAMAIwA0ADgAOQBnAG4ALgDfAN4ADQHkALgA5QDVANQAqADKAJ8AnABHAUwBFgEgAh8CRQIWAhUCDwIRAtkB3gEpACgAAABXAlICWALvAOgA6QDUANAA1QA+AD0ARQDtAbgBtgETABgAGQAIAgcCAQImASsBJwHoAbIB4QGGALkAhQCIAVEBhgEsAiYCJwIAAAYABwABATMBMgEHAjwCNgLaAAgB3gBnAJ8AbgBFAkQCPgIBAQcB2QAwAS8BMgEFAjkCOgK4AIUAuQBUAFUATgC0AN8ArwAMAQcBPAHWAdsB1QGpAX0BqgF9AakBfAF0AKcA";var ph="eQATAeQAFAE3ATIBZgF0AUcBQQH8AP4A+wA0AjMCLQJAAEcAgAAoACAAYQDNAcwBBAISAUEBEQE/AT4BcgF8AUQBSAEUAUMBEwFAAD8ARgCMAE0AjQDtAbYB6AGDAIkAigBZASYBWgHNAQQC0QEPAUABEAFMAX8BUgFXAlECUgIiAAIAIwCfAZsBoAF8AXcBRAGMAEwATQBUAB4AVQAeAB8AVQAsAiUCJgJLAkUCRgKiAM0A0ABSAR8BGwG3AIMAhAAyAv4BMwIdACEAIgAOAhQCDQLLAcwBmwHcANsA4QBKAFEAUgAWAekAEQEnAVQBWQHTAQsCBgIaAhkCFALUANUAAgEmAiUCHwIGAgUCOgIoADAABgBtAHQAOAAHAgYCOwKPAE8AiACdAJwAmQDMAcYBAwIzAjkCBALRAP8AAgFGAEUAfwCZAMgAnQB+AK4ArwABATIBNwFSAlECTQIeASIBIQH+ANAA+wANABMAFAABAAgAAgCvAH8AfgAeAB0AIgDUAdMBzgEzAf8AMAE1AAsABQCoAdgB1wHbAOAA4QDyAbgB7QF8AXYBdwHKAM0AnwAsAisCJQIMAAUACwD3AfMB+AGFAIsAhgA5ABIACwC/AZIBugFJAFAASgBfAGcALgAQAA8AFwADAgQCzAF2AUMBRAHNAdEBzAFYAlICUwK2AIkAgwACACkAAQCpAaoB2QEUABUADgD+APwA/wA1Ai4CNgLdAQ4C3AFRACAAGwA6ABYAQQDaAN4ArgDFAMcAmAAPAA4AFgDYARACDwIsASsB/AAeAR8BIgHQAcwB0QH1ACIBJwHuAe0BHwKiAaMBcgFTAlICTgIyAWMBZgFjAWIBZgGLAIwAhgB1AXYBegHoAO4AwQBMARsBFgGPAJQAVwA9AkACEAJHAREBQQGoAacBewGwAH8ArwBLAUwBRgF/AYABeAHhAbEBsgEZAugBFAKWAcUBmwEOAg0C2wF6AXsBpwFMAkYCRwJNAlECTAJQAFgAUQC2AbgBiAFvAXABPQHNAKIAnwAHATcBPAE2AjwCNQL1APgAywAJAdwADwGfAWoBmwH+AfcB+AF9AK0ArgDaAdkBqgH4AfMBKwIHAjYCAQKIAMEAjwBQAFcAWACAAH8AsADpAOgAvAAmAF8ALgBEAhoCPgJKAFAAUQAgACgAIQArAV8BYwHyAe0B8wFvAZ8BoAGVAb8BxAESAeMAEwE6AjQCOwLkAOMAuAC8ALYA6QCfAHQAbgAfAhoCRQKnANQArQCQAVkBjAEuADUABQAYAhcCEgIeACMAHwCgAcwB0AEnAiYCUAJKAiACRQL3AfIB8wFRAFkAIAACATMBAQHRAQQCCQL+AP8A0AB9AHkArQA9AHkAfQCMAEsATABNAFMAVAAUABMAGQCcAJ8AZwAPAg4C3QESAREB4gBNAkgCSQKZAJwAmACWAZUBxQE5AD0AEgALADUAOQAIAAcADgDjALcAuABMAFMATQBTAB4AVABQAkoCSwImAC4AJwAfAe4AGwEbACAAIQAHAjsCPAIOAtsB3AFXAF8AYADSAdEBCgKUAMUAmAD0ACEB9QDQAM0A+wBTAB0AHgDNAPwA+wA8ATcBOwEhACkAKgAnASwB/AB6AXkBdAFAAhYCEAJ6AIAAgQBGAkUCPwKDAIoAhAAQAAoACQBLAEoAUgB8AXsBdgHUAKIA0ADBAPIAxQCLAEsAjAAUAugB4gH9AcUB9wFuAWoBbwFCAUMBdQFuAG0ANAAIAA4ADwAIAQcBDAGbAZwBoAG8AIgAiQAgAFgAYQAVAEAAFgBBAhACEQL1ACcB+ADIAJgAxwAbAe8A6QC4AYwBiAEsACQAIwCVAZIBvwHbAbIBrAFZASsBJgG/AboBuwF/AYYBUQEeACIAIwBFAEQAfgA5AXMBbAFCAUEBEgESAD0AEwDoAMEAvABKAkUCSwITAhIC3wFEAD0AfQA1AjQCLgI7ATcBbgHdAdwB1gFPAFcAUAAnACgAYQCyAX8BrAGSAY8BugFmAZYBmwERAekA4gBCARIBQwEvAC4ABQDAAfIB9wG4ALcAhQDPAc4BBwIOABUAFgAsACsAAwCIAVUBUQFfAZABjwEEAv8BMwJgACcAYQAMAg8C1wEHAQEBNwENAQ4B4ADeAAgBDAGvAN8A4AAjACsALAADAAQALADBAMUAjwAlAvMBHwK2ALwAtQCpAdkBqAFDAXYBdQE9AXABcQGQAYwBuAFCADsAQQC0ALMA3wCUAJgAVwD4APwAzgAnAVkBWgH+ASsCMwKnAHQAogBiAY8BkgFFAj4CPwJyAaMBcwEMAAsAEgDeAAwBDQEGAAwADQAXAkICQQKgAdAB0QFZAZABXwH/AQMC/gE7AjQCNQI9ADkAdAA3AWoBbgH4ACcB/AABACkABwDuAR8C8wEVAg4CDwLLAMoAnADLAPgAzgBZAV8BKwFAAEYARwCiAdEB0gGnAXkBegEfAhkCGgLVANAA0QAIAAEABwAGAAUADACgAdEBoQESAeIA4wBVAYgBVAGFAIQAiwDjAOIAtwAjACQAHwDvABsB7gDoAbYBsgE+AQ4BPQFRAFgAWQBlAWIBlQEvAlgCMAJgAF8AJgDOAPwAzQCoAKcA1QCgAZwBzAHfAd4B2gHeAdkB2gFVAVQBIgFvAWoBnwEgAkoCJgL0APUAxwAwATIBMwEEAAoAMgAAACgABgAVABQAGQCmAXkBpwEVAhQCDgIfAfIA7gC7AbgB8gEBAjYCNwLfAA0B4ACoANQApwB/AVEBUgEpACEAKAACAdUA0QD+AfgBKwLZAdgBqAGbAcwBnAGEAIoAiwAJAgUCCgKIAEkAiQBRAlACTAIDAv8BBAIzAisCLAI+AEUARgD/APwALwHHAPUAyAAWARsB6QDTAQoCCwKuAN4AswDSAQoC0wGKAEsAiwBMAFIAUwBIAIgATwDLAcUBzAFAABkAPwDGAf4BAwIvAWMBMgH/Af4BMwLFAJQAjwDVAawBpQFGAj8CQAKtANQA2QAmAh8CIAIpAAAABwB0ADkAOADgAA4BDwEtACQALACdAaQBngHnAOYAugCwAa8BqgE8AEIAQwCyAHsAggBzAZ0BbAF6AHsAQQAVAUQBFAGOAMAAuwBNAE4AjQCdAc8BngFIAkMCSQIpAjACWAIPARABCgG7ALoAjgCNAI4AhwCdAXMBpAE5AUABcwF8AEIAewAHAggCzwFOAI4AjQCvAd8BqgHaAaoB3wFXAlYCUQJAATkBCgGOALoAhwASAhMCGAJ2AUQBdwFDARQBRAG4ALkA5QBOAlICTQLOAZ0BpAFDAhcCGAJCAHwAQwBOAE0AVABCAEEAewB7AXwBqAGpAagBfAFYAlMCKQIQABEACgACACIAKgAsAAQAMgAJAAgADwAJAAoABAADAAIACQAIAAkAAgArACMAAwARABAANwAXADcAEAB6AIEAewBAAHoAQQB7AIEAggCBAIAAsQCwALEAgACwANsAsQDcALEA2wDhAA8B3AA/AQ4BPgFyAXEBogFwAaIBcQGiAXABoQHTAaIB0gGkAdQBzgEvAjACNgI3AjYCMAIuAi8CNgJWAlcCLgIvAi4CVwJCAkcCQQJHAkYCQQJBAkYCQAJQAlECVQJVAlECVgItAlACVQIuAjQCLQISAkECEQLeAd8BEgITAt8B4AGAAEYAfwA9AQ4BDQGzALQArwDfALMA3gASARMBQwF6AXYBewHjAOQAEwHZARAC2AHWAacB1wGoAdcBpwEPAtcB2AEhACoAIgAcAB0AUwBTAFIAHABMAEsAUgDPAZ0BzgFDAkICFwIKARABQAEyAAoANwARADcACgBIAkICQwItACUAJAA=";var Ah=dh+fh+ph;var um=.18;function ac(i){let t=atob(i),e=new Uint8Array(t.length);for(let u=0;u<t.length;u++)e[u]=t.charCodeAt(u);let n=new DataView(e.buffer),s=n.getUint32(0,!0),r=n.getUint32(4,!0),a=8,o=new Float32Array(s*3);for(let u=0;u<o.length;u++,a+=2)o[u]=n.getInt16(a,!0)*.01*um;let c=new Uint16Array(r*3);for(let u=0;u<c.length;u++,a+=2)c[u]=n.getUint16(a,!0);let l=new Ne;return l.setAttribute("position",new Re(o,3)),l.setIndex(new Re(c,1)),l.computeVertexNormals(),l.computeBoundingSphere(),l}function dm(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(10,30,70,0.36)"),e.addColorStop(.46,"rgba(10,30,70,0.13)"),e.addColorStop(1,"rgba(10,30,70,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new ds(i)}var Yn={zirconia:{color:"#f8f4ee",transmission:.24,roughness:.28,coping:0},metal:{color:"#f6f1e9",transmission:.16,roughness:.3,coping:1}};function wx(i,{bg:t="#F3F5F9",reducedMotion:e=!1}={}){let n=new Ra({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"}),s=window.matchMedia("(max-width: 760px)").matches;n.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1.5:1.75)),n.toneMapping=ws,n.toneMappingExposure=1.05,n.outputColorSpace=Ue,n.setClearColor(new It(t),1);let r=new ti;r.background=new It(t);let a=new Vi(n);r.environment=a.fromScene(new La,.04).texture,r.environmentIntensity=.95;let o=new Me(30,1,.1,100);o.position.set(0,1.1,7.2),o.lookAt(0,0,0);let c=new ii("#ffffff",2.2);c.position.set(3,5,4),r.add(c);let l=new ii("#7fa8ff",1.5);l.position.set(-4,2,-3),r.add(l);let u=new ii("#ffd9c2",.7);u.position.set(2,-3,3),r.add(u),r.add(new Ms("#ffffff",.28));let f=new tn,h=new tn;f.add(h),r.add(f);let p=new ms({color:new It(Yn.zirconia.color),roughness:.28,metalness:0,transmission:Yn.zirconia.transmission,thickness:1.2,ior:1.55,attenuationColor:new It("#f1e3cf"),attenuationDistance:2.2,clearcoat:.85,clearcoatRoughness:.12,sheen:.3,sheenColor:new It("#ffffff"),specularIntensity:.72,side:Ee,transparent:!0,opacity:1}),_=new An({color:"#a7adb6",metalness:.96,roughness:.28,transparent:!0,opacity:0,side:Ee}),y=new An({color:"#d8b08a",metalness:0,roughness:.68,transparent:!0,opacity:0,side:Ee}),m=new Jt(ac(Ah),p),d=new Jt(ac(uh),_),C=new Jt(ac(rc),y);h.add(C,d,m);let B=new tn;B.rotation.x=-Math.PI/2+.28,B.position.y=-.2,f.add(B);let v=1.72,S=1.745,w=new en({color:"#9fb6d8",transparent:!0,opacity:0,side:Ee,depthWrite:!1});B.add(new Jt(new ni(v,S,256),w));let T=new en({color:"#064CA1",transparent:!0,opacity:0,side:Ee,depthWrite:!1}),x=new Jt(new ni(v-.03,S+.03,4,1,Math.PI/2,.001),T);B.add(x);let E=new en({color:"#064CA1",transparent:!0,opacity:0,side:Ee,depthWrite:!1});for(let Q=0;Q<=15;Q++){let st=Math.PI/2-Q/15*Math.PI*2*.999,gt=Q%5===0?.14:.07,rt=new Jt(new ei(.012,gt),E),Tt=S+.06+gt/2;rt.position.set(Math.cos(st)*Tt,Math.sin(st)*Tt,0),rt.rotation.z=st-Math.PI/2,B.add(rt)}let D=new en({color:"#ED1C24",transparent:!0,opacity:0,depthWrite:!1}),L=new Jt(new As(.055,24,16),D);B.add(L);let G=new Jt(new ps(1.7,48),new en({map:dm(),transparent:!0,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=-.82,G.scale.set(1,.75,1),f.add(G);let V={occlusal:new O(.1,.9,.05),margin:new O(-.62,-.46,.48),contour:new O(-.95,.02,.2)},M={x:.9,y:0,s:1,op:1,ring:0,years:0,tx:.9,ty:0,ts:1,top:1,tring:0,tyears:0,mx:0,my:0,tmx:0,tmy:0,rot:.6,scrollVel:0,trans:Yn.zirconia.transmission,ttrans:Yn.zirconia.transmission,cop:0,tcop:0,abut:0,tabut:0,color:new It(Yn.zirconia.color),tcolor:new It(Yn.zirconia.color),rough:.28,trough:.28,copColor:new It("#a7adb6"),tcopColor:new It("#a7adb6")},H=1,q=1;function J(){H=window.innerWidth,q=window.innerHeight,n.setSize(H,q,!1),o.aspect=H/q,o.fov=H<760?38:30,o.updateProjectionMatrix()}J(),window.addEventListener("resize",J);let nt=()=>Math.tan(Ca.degToRad(o.fov/2))*o.position.z*o.aspect,X=()=>Math.tan(Ca.degToRad(o.fov/2))*o.position.z;window.addEventListener("pointermove",Q=>{M.tmx=Q.clientX/H*2-1,M.tmy=Q.clientY/q*2-1},{passive:!0});let $=window.scrollY;window.addEventListener("scroll",()=>{let Q=window.scrollY;M.scrollVel+=(Q-$)*.0016,$=Q},{passive:!0});let tt=new O,wt=null,yt=!0;document.addEventListener("visibilitychange",()=>{yt=!document.hidden,yt&&W()});let jt=performance.now(),Ht=-1,Wt=!1;function W(){if(!yt)return;let Q=performance.now(),st=Math.min((Q-jt)/1e3,.05);jt=Q;let gt=1-Math.pow(.0025,st),rt=1-Math.pow(.02,st);M.x+=(M.tx-M.x)*gt,M.y+=(M.ty-M.y)*gt,M.s+=(M.ts-M.s)*gt,M.op+=(M.top-M.op)*gt,M.ring+=(M.tring-M.ring)*gt,M.years+=(M.tyears-M.years)*rt,M.mx+=(M.tmx-M.mx)*gt,M.my+=(M.tmy-M.my)*gt,M.trans+=(M.ttrans-M.trans)*gt,M.cop+=(M.tcop-M.cop)*gt,M.abut+=(M.tabut-M.abut)*gt,M.rough+=(M.trough-M.rough)*gt,M.color.lerp(M.tcolor,gt),M.copColor.lerp(M.tcopColor,gt),e||(M.rot+=st*.32+M.scrollVel),M.scrollVel*=Math.pow(.02,st);let Tt=nt(),ue=X();f.position.set(M.x*Tt,-M.y*ue,0);let Nt=.76*M.s*Math.min(1,Tt*2/5.2)*(H<760?1.05:1);f.scale.setScalar(Nt*(.2+.8*M.op)),h.rotation.y=M.rot+M.mx*.35,h.rotation.x=.38+M.my*.16,h.rotation.z=-.06,p.transmission=M.trans,p.roughness=M.rough,p.color.copy(M.color),p.opacity=1-M.cop*.55,_.color.copy(M.copColor),_.opacity=M.cop,d.visible=M.cop>.015,y.opacity=M.abut,C.visible=M.abut>.01,G.material.opacity=M.op,f.visible=M.op>.02;let kt=M.ring*M.op;w.opacity=.55*kt,T.opacity=kt,E.opacity=.5*kt,D.opacity=kt;let Xt=Math.max(.001,Math.min(1,M.years/15));Math.abs(Xt-Ht)>.0015&&(Ht=Xt,x.geometry.dispose(),x.geometry=new ni(v-.03,S+.03,Math.max(4,Math.round(Xt*200)),1,Math.PI/2-Xt*Math.PI*2,Xt*Math.PI*2));let Ot=Math.PI/2-Xt*Math.PI*2;L.position.set(Math.cos(Ot)*(v+S)/2,Math.sin(Ot)*(v+S)/2,.01),B.rotation.z=M.mx*.08;let ee=M.op<.02&&M.top===0;if((!ee||!Wt)&&n.render(r,o),Wt=ee,wt){let de={};h.updateWorldMatrix(!0,!1);for(let[ae,he]of Object.entries(V))tt.copy(he).applyMatrix4(h.matrixWorld).project(o),de[ae]={x:(tt.x*.5+.5)*H,y:(-tt.y*.5+.5)*q,z:tt.z};let ye=new O().applyMatrix4(f.matrixWorld).project(o);wt({points:de,center:{x:(ye.x*.5+.5)*H,y:(-ye.y*.5+.5)*q},opacity:M.op,years:M.years,ring:M.ring})}requestAnimationFrame(W)}return W(),{setStage({x:Q,y:st,s:gt,o:rt,ring:Tt}){Q!==void 0&&(M.tx=Q),st!==void 0&&(M.ty=st),gt!==void 0&&(M.ts=gt),rt!==void 0&&(M.top=rt),Tt!==void 0&&(M.tring=Tt)},setMaterial({look:Q="zirconia",years:st=0,tone:gt,coping:rt}){let Tt=Yn[Q]||Yn.zirconia;M.ttrans=Tt.transmission,M.tcop=Tt.coping,M.tabut=Tt.coping?.18:0,M.trough=Tt.roughness,M.tcolor.set(gt||Tt.color),rt&&M.tcopColor.set(rt),M.tyears=st,M.scrollVel+=.35},setModel(Q="full"){Q==="abutment"?(M.tcop=0,M.tabut=1,p.opacity=.08):Q==="coping"?(M.tcop=1,M.tabut=.28):Q==="layered"?(M.tcop=1,M.tabut=.18):(M.tcop=0,M.tabut=0)},onFrame(Q){wt=Q}}}export{Yn as LOOKS,wx as initCrown};
