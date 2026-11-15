var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,_c=1,Fu=2;var xc=1,Ma=2,Zn=3,li=0,Ge=1,Kn=2,di=0,ji=1,yc=2,vc=3,Mc=4,Ou=5,Ri=100,Bu=101,Hu=102,ku=103,zu=104,Gu=200,Vu=201,Wu=202,Xu=203,Zo=204,Ko=205,Yu=206,qu=207,Zu=208,Ku=209,$u=210,Ju=211,ju=212,Qu=213,td=214,Ea=0,Sa=1,Ta=2,Qi=3,ba=4,wa=5,Aa=6,Ra=7,Ec=0,ed=1,nd=2,fi=0,id=1,sd=2,rd=3,Ca=4,od=5,ad=6,ld=7;var Sc=300,cs=301,hs=302,Pa=303,Ia=304,eo=306,$o=1e3,Ai=1001,Jo=1002,ze=1003,cd=1004;var no=1005;var On=1006,Da=1007;var Ui=1008;var kn=1009,Tc=1010,bc=1011,$s=1012,La=1013,Ni=1014,zn=1015,Js=1016,Ua=1017,Na=1018,js=1020,wc=35902,Ac=1021,Rc=1022,Ze=1023,Ws=1026,Qs=1027,Fa=1028,Oa=1029,Cc=1030,Ba=1031;var Ha=1033,io=33776,so=33777,ro=33778,oo=33779,ka=35840,za=35841,Ga=35842,Va=35843,Wa=36196,Xa=37492,Ya=37496,qa=37808,Za=37809,Ka=37810,$a=37811,Ja=37812,ja=37813,Qa=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,ol=37821,ao=36492,al=36494,ll=36495,Pc=36283,cl=36284,hl=36285,ul=36286;var Dr=2300,jo=2301,qo=2302,cc=2400,hc=2401,uc=2402;var hd=3200,ud=3201;var Ic=0,dd=1,pi="",He="srgb",ts="srgb-linear",Lr="linear",ie="srgb";var Ji=7680;var dc=519,fd=512,pd=513,md=514,Dc=515,gd=516,_d=517,xd=518,yd=519,fc=35044;var Lc="300 es",Wn=2e3,Ur=2001;var Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=1234567,Pr=Math.PI/180,Xs=180/Math.PI;function tr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function Uc(s,t){return(s%t+t)%t}function bp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wp(s,t,e){return s!==t?(e-s)/(t-s):0}function Ir(s,t,e){return(1-e)*s+e*t}function Ap(s,t,e,n){return Ir(s,t,1-Math.exp(-e*n))}function Rp(s,t=1){return t-Math.abs(Uc(s,t*2)-t)}function Cp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ip(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dp(s,t){return s+Math.random()*(t-s)}function Lp(s){return s*(.5-Math.random())}function Up(s){s!==void 0&&(lu=s);let t=lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Np(s){return s*Pr}function Fp(s){return s*Xs}function Op(s){return(s&s-1)===0&&s!==0}function Bp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Nc={DEG2RAD:Pr,RAD2DEG:Xs,generateUUID:tr,clamp:Vt,euclideanModulo:Uc,mapLinear:bp,inverseLerp:wp,lerp:Ir,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Ip,randFloat:Dp,randFloatSpread:Lp,seededRandom:Up,degToRad:Np,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:kp,normalize:tn,denormalize:Gs},Ut=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a,p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let b=Math.sqrt(E),T=Math.atan2(b,p*M);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}let x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new N,cu=new Rn,kt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],E=i[4],x=i[7],b=i[2],T=i[5],A=i[8];return r[0]=o*g+a*M+l*b,r[3]=o*m+a*E+l*T,r[6]=o*p+a*x+l*A,r[1]=c*g+h*M+u*b,r[4]=c*m+h*E+u*T,r[7]=c*p+h*x+u*A,r[2]=d*g+f*M+_*b,r[5]=d*m+f*E+_*T,r[8]=d*p+f*x+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new kt;function Fc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vd(){let s=Nr("canvas");return s.style.display="block",s}var hu={};function es(s){s in hu||(hu[s]=!0,console.warn(s))}function Md(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ed(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var uu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zp(){let s={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ts]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:uu,fromXYZ:du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:uu,fromXYZ:du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),s}var Zt=zp();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Cs,Qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Nr("canvas")),Cs.width=t.width,Cs.height=t.height;let i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Ys=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zl(i[o].image)):r.push(zl(i[o]))}else r=zl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,Gl=new N,en=class s extends Xn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ai,i=Ai,r=On,o=Ui,a=Ze,l=kn,c=s.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=tr(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $o:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $o:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Sc;en.DEFAULT_ANISOTROPY=1;var ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,b=(p+1)/2,T=(h+d)/4,A=(u+g)/4,R=(_+m)/4;return E>x&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=A/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=R/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ta=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new en(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Ao.subVectors(this.max,Er),Ps.subVectors(t.a,Er),Is.subVectors(t.b,Er),Ds.subVectors(t.c,Er),vi.subVectors(Is,Ps),Mi.subVectors(Ds,Is),qi.subVectors(Ps,Ds);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-qi.z,qi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,qi.z,0,-qi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-qi.y,qi.x,0];return!Vl(e,Ps,Is,Ds,Ao)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,Ps,Is,Ds,Ao))?!1:(Ro.crossVectors(vi,Mi),e=[Ro.x,Ro.y,Ro.z],Vl(e,Ps,Is,Ds,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new N,new N,new N,new N,new N,new N,new N,new N],Un=new N,wo=new qn,Ps=new N,Is=new N,Ds=new N,vi=new N,Mi=new N,qi=new N,Er=new N,Ao=new N,Ro=new N,Zi=new N;function Vl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zi.fromArray(s,r);let a=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wp=new qn,Sr=new N,Wl=new N,ci=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Wl)),this.expandByPoint(Sr.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ii=new N,Xl=new N,Co=new N,Ei=new N,Yl=new N,Po=new N,ql=new N,ns=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xl.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Ei.dot(this.direction),l=-Ei.dot(Co),c=Ei.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xl).addScaledVector(Co,d),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,r){Yl.subVectors(e,t),Po.subVectors(n,t),ql.crossVectors(Yl,Po);let o=this.direction.dot(ql),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);let l=a*this.direction.dot(Po.crossVectors(Ei,Po));if(l<0)return null;let c=a*this.direction.dot(Yl.cross(Ei));if(c<0||l+c>o)return null;let h=-a*Ei.dot(ql);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,Yp)}lookAt(t,e,n){let i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Si.crossVectors(n,_n),Si.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Si.crossVectors(n,_n)),Si.normalize(),Io.crossVectors(_n,Si),i[0]=Si.x,i[4]=Io.x,i[8]=_n.x,i[1]=Si.y,i[5]=Io.y,i[9]=_n.y,i[2]=Si.z,i[6]=Io.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],E=n[7],x=n[11],b=n[15],T=i[0],A=i[4],R=i[8],y=i[12],v=i[1],C=i[5],D=i[9],I=i[13],O=i[2],V=i[6],F=i[10],z=i[14],B=i[3],J=i[7],et=i[11],ot=i[15];return r[0]=o*T+a*v+l*O+c*B,r[4]=o*A+a*C+l*V+c*J,r[8]=o*R+a*D+l*F+c*et,r[12]=o*y+a*I+l*z+c*ot,r[1]=h*T+u*v+d*O+f*B,r[5]=h*A+u*C+d*V+f*J,r[9]=h*R+u*D+d*F+f*et,r[13]=h*y+u*I+d*z+f*ot,r[2]=_*T+g*v+m*O+p*B,r[6]=_*A+g*C+m*V+p*J,r[10]=_*R+g*D+m*F+p*et,r[14]=_*y+g*I+m*z+p*ot,r[3]=M*T+E*v+x*O+b*B,r[7]=M*A+E*C+x*V+b*J,r[11]=M*R+E*D+x*F+b*et,r[15]=M*y+E*I+x*z+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,E=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,x=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,b=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,T=e*M+n*E+i*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=M*A,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,t[4]=E*A,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(_*l*r-o*m*r-_*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*A,t[8]=x*A,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=b*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,M=l*c,E=l*h,x=l*u,b=n.x,T=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+x)*b,i[2]=(_-E)*b,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(_+E)*A,i[9]=(m-M)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ls.set(i[0],i[1],i[2]).length(),o=Ls.set(i[4],i[5],i[6]).length(),a=Ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);let c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(a===Wn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ur)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,_,g;if(a===Wn)_=(o+r)*u,g=-2*u;else if(a===Ur)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new N,Nn=new ae,Xp=new N(0,0,0),Yp=new N(1,1,1),Si=new N,Io=new N,_n=new N,fu=new ae,pu=new Rn,Bn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qp=0,mu=new N,Us=new Rn,si=new ae,Do=new N,Tr=new N,Zp=new N,Kp=new Rn,gu=new N(1,0,0),_u=new N(0,1,0),xu=new N(0,0,1),yu={type:"added"},$p={type:"removed"},Ns={type:"childadded",child:null},Zl={type:"childremoved",child:null},De=class s extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new Bn,n=new Rn,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Tr,Do,this.up):si.lookAt(Do,Tr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(si),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};De.DEFAULT_UP=new N(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new N,ri=new N,Kl=new N,oi=new N,Fs=new N,Os=new N,vu=new N,$l=new N,Jl=new N,jl=new N,Ql=new ne,tc=new ne,ec=new ne,wi=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Fn.subVectors(i,e),ri.subVectors(n,e),Kl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ri),l=Fn.dot(Kl),c=ri.dot(ri),h=ri.dot(Kl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ri.subVectors(t,e),Fn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Fn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Fs.subVectors(i,n),Os.subVectors(r,n),$l.subVectors(t,n);let l=Fs.dot($l),c=Os.dot($l);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,i);let h=Fs.dot(Jl),u=Os.dot(Jl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);jl.subVectors(t,r);let f=Fs.dot(jl),_=Os.dot(jl);if(_>=0&&f<=_)return e.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Os,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return vu.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(vu,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function nc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Uc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=Td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Zt.workingToColorSpace(qe.copy(this),t),Math.round(Vt(qe.r*255,0,255))*65536+Math.round(Vt(qe.g*255,0,255))*256+Math.round(Vt(qe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=He){Zt.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Lo);let n=Ir(Ti.h,Lo.h,e),i=Ir(Ti.s,Lo.s,e),r=Ir(Ti.l,Lo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new pt;pt.NAMES=Td;var Jp=0,hi=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ji,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ui=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new N,Uo=new Ut,jp=0,on=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}};var Br=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qp=0,wn=new ae,ic=new De,Bs=new N,xn=new qn,br=new qn,Be=new N,an=class s extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?Hr:Br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(xn.min,br.min),xn.expandByPoint(Be),Be.addVectors(xn.max,br.max),xn.expandByPoint(Be)):(xn.expandByPoint(br.min),xn.expandByPoint(br.max))}xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Be.add(Bs)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let c=new N,h=new N,u=new N,d=new Ut,f=new Ut,_=new Ut,g=new N,m=new N;function p(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(C),a[R].add(g),a[y].add(g),a[v].add(g),l[R].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){let v=M[R],C=v.start,D=v.count;for(let I=C,O=C+D;I<O;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new N,x=new N,b=new N,T=new N;function A(R){b.fromBufferAttribute(i,R),T.copy(b);let y=a[R];E.copy(y),E.sub(b.multiplyScalar(b.dot(y))).normalize(),x.crossVectors(T,y);let C=x.dot(l[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,C)}for(let R=0,y=M.length;R<y;++R){let v=M[R],C=v.start,D=v.count;for(let I=C,O=C+D;I<O;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new ae,Ki=new ns,No=new ci,Eu=new N,Fo=new N,Oo=new N,Bo=new N,sc=new N,Ho=new N,Su=new N,ko=new N,G=class extends De{constructor(t=new an,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sc.fromBufferAttribute(u,t),o?Ho.addScaledVector(sc,h):Ho.addScaledVector(sc.sub(e),h))}e.add(Ho)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(No.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(No,Eu)===null||Ki.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,b=E;x<b;x+=3){let T=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);i=zo(this,p,t,n,c,h,u,T,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);i=zo(this,o,t,n,c,h,u,M,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,b=E;x<b;x+=3){let T=x,A=x+1,R=x+2;i=zo(this,p,t,n,c,h,u,T,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=m,E=m+1,x=m+2;i=zo(this,o,t,n,c,h,u,M,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function tm(s,t,e,n,i,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===li,a),l===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:s}}function zo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Fo),s.getVertexPosition(l,Oo),s.getVertexPosition(c,Bo);let h=tm(s,t,e,n,Fo,Oo,Bo,Su);if(h){let u=new N;wi.getBarycoord(Su,Fo,Oo,Bo,u),i&&(h.uv=wi.getInterpolatedAttribute(i,a,l,c,u,new Ut)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,u,new Ut)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};wi.getNormal(Fo,Oo,Bo,d.normal),h.face=d,h.barycoord=u}return h}var ut=class s extends an{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function _(g,m,p,M,E,x,b,T,A,R,y){let v=x/A,C=b/R,D=x/2,I=b/2,O=T/2,V=A+1,F=R+1,z=0,B=0,J=new N;for(let et=0;et<F;et++){let ot=et*C-I;for(let it=0;it<V;it++){let gt=it*v-D;J[g]=gt*M,J[m]=ot*E,J[p]=O,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(it/A),u.push(1-et/R),z+=1}}for(let et=0;et<R;et++)for(let ot=0;ot<A;ot++){let it=d+ot+V*et,gt=d+ot+V*(et+1),W=d+(ot+1)+V*(et+1),j=d+(ot+1)+V*et;l.push(it,gt,j),l.push(gt,W,j),B+=6}a.addGroup(f,B,y),f+=B,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){let t={};for(let e=0;e<s.length;e++){let n=us(s[e]);for(let i in n)t[i]=n[i]}return t}function em(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var bd={clone:us,merge:Ke},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new N,Tu=new Ut,bu=new Ut,ke=class extends kr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,bu),e.subVectors(bu,Tu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,ks=1,na=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(Hs,ks,t,e);i.layers=this.layers,this.add(i);let r=new ke(Hs,ks,t,e);r.layers=this.layers,this.add(r);let o=new ke(Hs,ks,t,e);o.layers=this.layers,this.add(o);let a=new ke(Hs,ks,t,e);a.layers=this.layers,this.add(a);let l=new ke(Hs,ks,t,e);l.layers=this.layers,this.add(l);let c=new ke(Hs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},zr=class extends en{constructor(t=[],e=cs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ia=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:di});r.uniforms.tEquirect.value=e;let o=new G(i,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=On),new na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},It=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var is=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ss=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ci=class extends en{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ze,h=ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gr=class extends on{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new ae,wu=new ae,Go=[],Au=new qn,rm=new ae,wr=new G,Ar=new ci,Vr=class extends G{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Au.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Au)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Ar.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zs),wu.multiplyMatrices(n,zs),wr.matrixWorld=wu,wr.raycast(t,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,e.push(l)}Go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(i*this.count),i,this.count,Fa,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rc=new N,om=new N,am=new kt,An=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=rc.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),i=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new ci,lm=new Ut(.5,.5),Vo=new N,Zs=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+_,x+M).normalize(),n[3].setComponents(l-o,d-h,m-_,x-M).normalize(),n[4].setComponents(l-a,d-u,m-g,x-E).normalize(),e===Wn)n[5].setComponents(l+a,d+u,m+g,x+E).normalize();else if(e===Ur)n[5].setComponents(a,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);let e=lm.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vo.x=i.normal.x>0?t.max.x:t.min.x,Vo.y=i.normal.y>0?t.max.y:t.min.y,Vo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sa=new N,ra=new N,Ru=new ae,Rr=new ns,Wo=new ci,oc=new N,Cu=new N,oa=class extends De{constructor(t=new an,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)sa.fromBufferAttribute(e,i-1),ra.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Ru.copy(i).invert(),Rr.copy(t.ray).applyMatrix4(Ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),M=h.getX(g+1),E=Xo(this,t,Rr,l,p,M,g);E&&e.push(E)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=Xo(this,t,Rr,l,g,m,_-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){let p=Xo(this,t,Rr,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=Xo(this,t,Rr,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(sa.fromBufferAttribute(a,i),ra.fromBufferAttribute(a,r),e.distanceSqToSegment(sa,ra,oc,Cu)>n)return;oc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:Cu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Pu=new N,Iu=new N,aa=class extends oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Pu.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Iu);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xr=class extends en{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yr=class extends en{constructor(t,e,n=Ni,i,r,o,a=ze,l=ze,c,h=Ws,u=1){if(h!==Ws&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ae=class s extends an{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,_=n*2+r,g=i+1,m=new N,p=new N;for(let M=0;M<=_;M++){let E=0,x=0,b=0,T=0;if(M<=n){let y=M/n,v=y*Math.PI/2;x=-h-t*Math.cos(v),b=t*Math.sin(v),T=-t*Math.cos(v),E=y*u}else if(M<=n+r){let y=(M-n)/r;x=-h+y*e,b=t,T=0,E=u+y*d}else{let y=(M-n-r)/n,v=y*Math.PI/2;x=h+t*Math.sin(v),b=t*Math.cos(v),T=t*Math.sin(v),E=u+d+y*u}let A=Math.max(0,Math.min(1,E/f)),R=0;M===0?R=.5/i:M===_&&(R=-.5/i);for(let y=0;y<=i;y++){let v=y/i,C=v*Math.PI*2,D=Math.sin(C),I=Math.cos(C);p.x=-b*I,p.y=x,p.z=b*D,a.push(p.x,p.y,p.z),m.set(-b*I,T,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+R,A)}if(M>0){let y=(M-1)*g;for(let v=0;v<i;v++){let C=y+v,D=y+v+1,I=M*g+v,O=M*g+v+1;o.push(C,D,I),o.push(D,O,I)}}}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var te=class s extends an{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=n/2,p=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function M(){let x=new N,b=new N,T=0,A=(e-t)/n;for(let R=0;R<=r;R++){let y=[],v=R/r,C=v*(e-t)+t;for(let D=0;D<=i;D++){let I=D/i,O=I*l+a,V=Math.sin(O),F=Math.cos(O);b.x=C*V,b.y=-v*n+m,b.z=C*F,u.push(b.x,b.y,b.z),x.set(V,A,F).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-v),y.push(_++)}g.push(y)}for(let R=0;R<i;R++)for(let y=0;y<r;y++){let v=g[y][R],C=g[y+1][R],D=g[y+1][R+1],I=g[y][R+1];(t>0||y!==0)&&(h.push(v,C,I),T+=3),(e>0||y!==r-1)&&(h.push(C,D,I),T+=3)}c.addGroup(p,T,0),p+=T}function E(x){let b=_,T=new Ut,A=new N,R=0,y=x===!0?t:e,v=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),_++;let C=_;for(let D=0;D<=i;D++){let O=D/i*l+a,V=Math.cos(O),F=Math.sin(O);A.x=y*F,A.y=m*v,A.z=y*V,u.push(A.x,A.y,A.z),d.push(0,v,0),T.x=V*.5+.5,T.y=F*.5*v+.5,f.push(T.x,T.y),_++}for(let D=0;D<i;D++){let I=b+D,O=C+D;x===!0?h.push(O,O+1,I):h.push(O+1,O,I),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class s extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let E=0;E<c;E++){let x=E*u-r;_.push(x,-M,0),g.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let E=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),T=M+1+c*p;f.push(E,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ge=class s extends an{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let M=[],E=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let T=b/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+x,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let E=h[p][M+1],x=h[p][M],b=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(E,x,T),(p!==n-1||l<Math.PI)&&f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Le=class s extends an{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,M=(i+1)*f+_;o.push(g,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xt=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rs=class extends Xt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var la=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var os=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends os{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,E=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[c+b]+E*o[l+b]+x*o[u+b];return r}},ua=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},da=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yo(e,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yo(t.times,Array),values:Yo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case jo:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&cm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=jo;var Pi=class extends vn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Dr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};fa.prototype.ValueTypeName="color";var pa=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};pa.prototype.ValueTypeName="number";var ma=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},qr=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends vn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Dr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends vn{constructor(t,e,n,i){super(t,e,n,i)}};ga.prototype.ValueTypeName="vector";var _a=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},wd=new _a,xa=class{constructor(t){this.manager=t!==void 0?t:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Zr=class extends as{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ac=new ae,Du=new N,Lu=new N,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uu=new ae,Cr=new N,lc=new N,pc=class extends ya{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cr),lc.copy(n.position),lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lc),n.updateMatrixWorld(),i.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},Kr=class extends as{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$r=class extends kr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mc=class extends ya{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jr=class extends as{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var va=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},jr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Bc="\\[\\]\\.:\\/",hm=new RegExp("["+Bc+"]","g"),Hc="[^"+Bc+"]",um="[^"+Bc.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Hc),fm=/(WCOD+)?/.source.replace("WCOD",um),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),gm=new RegExp("^"+dm+fm+pm+mm+"$"),_m=["material","materials","bones","map"],gc=class{constructor(t,e,n){let i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(t){let e=gm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);_m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=gc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jv=new Float32Array(1);var Ks=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qr=class extends aa{constructor(t=10,e=10,n=4473924,i=8947848){n=new pt(n),i=new pt(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,_=-a;d<=e;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);let g=d===r?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}let h=new an;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));let u=new Wr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var to=class extends Xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function kc(s,t,e,n){let i=xm(n);switch(e){case Ac:return s*t;case Fa:return s*t/i.components*i.byteLength;case Oa:return s*t/i.components*i.byteLength;case Cc:return s*t*2/i.components*i.byteLength;case Ba:return s*t*2/i.components*i.byteLength;case Rc:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Ha:return s*t*4/i.components*i.byteLength;case io:case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:case Va:return Math.max(s,16)*Math.max(t,8)/4;case ka:case Ga:return Math.max(s,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ao:case al:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pc:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(s){switch(s){case kn:case Tc:return{byteLength:1,components:1};case $s:case bc:case Js:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case Ni:case La:case zn:return{byteLength:4,components:1};case wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function $d(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vm(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
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
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Yg=`#define TOON
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
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zg=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Mm,alphahash_pars_fragment:Em,alphamap_fragment:Sm,alphamap_pars_fragment:Tm,alphatest_fragment:bm,alphatest_pars_fragment:wm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Im,beginnormal_vertex:Dm,bsdfs:Lm,iridescence_fragment:Um,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:Hm,color_fragment:km,color_pars_fragment:zm,color_pars_vertex:Gm,color_vertex:Vm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:qm,displacementmap_vertex:Zm,emissivemap_fragment:Km,emissivemap_pars_fragment:$m,colorspace_fragment:Jm,colorspace_pars_fragment:jm,envmap_fragment:Qm,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:y0,lights_fragment_begin:v0,lights_fragment_maps:M0,lights_fragment_end:E0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:w0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:D0,morphinstance_vertex:L0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:B0,normal_fragment_maps:H0,normal_pars_fragment:k0,normal_pars_vertex:z0,normal_vertex:G0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:q0,opaque_fragment:Z0,packing:K0,premultiplied_alpha_fragment:$0,project_vertex:J0,dithering_fragment:j0,dithering_pars_fragment:Q0,roughnessmap_fragment:tg,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:xg,worldpos_vertex:yg,background_vert:vg,background_frag:Mg,backgroundCube_vert:Eg,backgroundCube_frag:Sg,cube_vert:Tg,cube_frag:bg,depth_vert:wg,depth_frag:Ag,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Dg,linedashed_frag:Lg,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:Bg,meshmatcap_frag:Hg,meshnormal_vert:kg,meshnormal_frag:zg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:Yg,meshtoon_frag:qg,points_vert:Zg,points_frag:Kg,shadow_vert:$g,shadow_frag:Jg,sprite_vert:jg,sprite_frag:Qg},ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},$n={basic:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ke([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ke([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ke([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ke([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ke([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ke([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ke([ct.common,ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ke([ct.lights,ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};$n.physical={uniforms:Ke([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var dl={r:0,b:0,g:0},ds=new Bn,t_=new ae;function e_(s,t,e,n,i,r,o){let a=new pt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function g(E){let x=!1,b=_(E);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,x){let b=_(x);b&&(b.isCubeTexture||b.mapping===eo)?(h===void 0&&(h=new G(new ut(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:us($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ds.copy(x.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(ds)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new G(new yn(2,2),new Hn({name:"BackgroundMaterial",uniforms:us($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(dl,Oc(s)),n.buffers.color.setClear(dl.r,dl.g,dl.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m,dispose:M}}function n_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(v,C,D,I,O){let V=!1,F=u(I,D,C);r!==F&&(r=F,c(r.object)),V=f(v,I,D,O),V&&_(v,I,D,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(v,C,D,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,C,D){let I=D.wireframe===!0,O=n[v.id];O===void 0&&(O={},n[v.id]=O);let V=O[C.id];V===void 0&&(V={},O[C.id]=V);let F=V[I];return F===void 0&&(F=d(l()),V[I]=F),F}function d(v){let C=[],D=[],I=[];for(let O=0;O<e;O++)C[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:I,object:v,attributes:{},index:null}}function f(v,C,D,I){let O=r.attributes,V=C.attributes,F=0,z=D.getAttributes();for(let B in z)if(z[B].location>=0){let et=O[B],ot=V[B];if(ot===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function _(v,C,D,I){let O={},V=C.attributes,F=0,z=D.getAttributes();for(let B in z)if(z[B].location>=0){let et=V[B];et===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),O[B]=ot,F++}r.attributes=O,r.attributesNum=F,r.index=I}function g(){let v=r.newAttributes;for(let C=0,D=v.length;C<D;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){let D=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;D[v]=1,I[v]===0&&(s.enableVertexAttribArray(v),I[v]=1),O[v]!==C&&(s.vertexAttribDivisor(v,C),O[v]=C)}function M(){let v=r.newAttributes,C=r.enabledAttributes;for(let D=0,I=C.length;D<I;D++)C[D]!==v[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function E(v,C,D,I,O,V,F){F===!0?s.vertexAttribIPointer(v,C,D,O,V):s.vertexAttribPointer(v,C,D,I,O,V)}function x(v,C,D,I){g();let O=I.attributes,V=D.getAttributes(),F=C.defaultAttributeValues;for(let z in V){let B=V[z];if(B.location>=0){let J=O[z];if(J===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){let et=J.normalized,ot=J.itemSize,it=t.get(J);if(it===void 0)continue;let gt=it.buffer,W=it.type,j=it.bytesPerElement,mt=W===s.INT||W===s.UNSIGNED_INT||J.gpuType===La;if(J.isInterleavedBufferAttribute){let at=J.data,_t=at.stride,qt=J.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<B.locationSize;Lt++)p(B.location+Lt,at.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<B.locationSize;Lt++)m(B.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Lt=0;Lt<B.locationSize;Lt++)E(B.location+Lt,ot/B.locationSize,W,et,_t*j,(qt+ot/B.locationSize*Lt)*j,mt)}else{if(J.isInstancedBufferAttribute){for(let at=0;at<B.locationSize;at++)p(B.location+at,J.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<B.locationSize;at++)m(B.location+at);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let at=0;at<B.locationSize;at++)E(B.location+at,ot/B.locationSize,W,et,ot*j,ot/B.locationSize*at*j,mt)}}else if(F!==void 0){let et=F[z];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(B.location,et);break;case 3:s.vertexAttrib3fv(B.location,et);break;case 4:s.vertexAttrib4fv(B.location,et);break;default:s.vertexAttrib1fv(B.location,et)}}}}M()}function b(){R();for(let v in n){let C=n[v];for(let D in C){let I=C[D];for(let O in I)h(I[O].object),delete I[O];delete C[D]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let D in C){let I=C[D];for(let O in I)h(I[O].object),delete I[O];delete C[D]}delete n[v.id]}function A(v){for(let C in n){let D=n[C];if(D[v.id]===void 0)continue;let I=D[v.id];for(let O in I)h(I[O].object),delete I[O];delete D[v.id]}}function R(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function i_(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function s_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ze&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===Js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function r_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new An,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,x=p.clippingState||null;l.value=x,x=h(_,d,E,f);for(let b=0;b!==E;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==g;++E,x+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function o_(s){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=cs:a===Ia&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pa||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ia(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var nr=4,Ad=[.125,.215,.35,.446,.526,.582],ms=20,zc=new $r,Rd=new pt,Gc=null,Vc=0,Wc=0,Xc=!1,ps=(1+Math.sqrt(5))/2,er=1/ps,Cd=[new N(-ps,er,0),new N(ps,er,0),new N(-er,0,ps),new N(er,0,ps),new N(0,ps,-er),new N(0,ps,er),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],a_=new N,sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=a_}=r;Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gc,Vc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,fl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Js,format:Ze,colorSpace:ts,depthBuffer:!1},i=Pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=c_(r,t,e)}return i}_compileMaterial(t){let e=new G(this._lodPlanes[0],t);this._renderer.compile(e,zc)}_sceneToCubeUV(t,e,n,i,r){let l=new ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Rd),u.toneMapping=fi,u.autoClear=!1;let _=new ui({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new G(new ut,_),m=!1,p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Rd),m=!0);for(let M=0;M<6;M++){let E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let x=this._cubeSize;fl(i,E*x,M>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;fl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cd[(i-r-1)%Cd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new G(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ms-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],M=0;for(let A=0;A<ms;++A){let R=A/g,y=Math.exp(-R*R/2);p.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;let x=this._sizeLods[i],b=3*x*(i>E-nr?i-E+nr:0),T=4*(this._cubeSize-x);fl(e,b,T,3*x,2*x),l.setRenderTarget(e),l.render(u,zc)}};function l_(s){let t=[],e=[],n=[],i=s,r=s-nr+1+Ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-nr?l=Ad[o-s+nr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),E=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,R=T>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(y,g*_*T),E.set(d,m*_*T);let v=[T,T,T,T,T,T];x.set(v,p*_*T)}let b=new an;b.setAttribute("position",new on(M,g)),b.setAttribute("uv",new on(E,m)),b.setAttribute("faceIndex",new on(x,p)),t.push(b),i>nr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pd(s,t,e){let n=new Yn(s,t,e);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function c_(s,t,e){let n=new Float32Array(ms),i=new N(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Id(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Dd(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pa||l===Ia,h=l===cs||l===hs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new sr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function u_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let E=0,x=M.length;E<x;E+=3){let b=M[E+0],T=M[E+1],A=M[E+2];d.push(b,T,T,A,A,b)}}else if(_!==void 0){let M=_.array;g=_.version;for(let E=0,x=M.length/3-1;E<x;E+=3){let b=E+0,T=E+1,A=E+2;d.push(b,T,T,A,A,b)}}else return;let m=new(Fc(d)?Hr:Br)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function f_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function m_(s,t,e){let n=new WeakMap,i=new ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),g===!0&&(E=3);let x=a.attributes.position.count*E,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*b*4*u),A=new Fr(T,x,b,u);A.type=zn,A.needsUpdate=!0;let R=E*4;for(let v=0;v<u;v++){let C=m[v],D=p[v],I=M[v],O=x*b*4*v;for(let V=0;V<C.count;V++){let F=V*R;f===!0&&(i.fromBufferAttribute(C,V),T[O+F+0]=i.x,T[O+F+1]=i.y,T[O+F+2]=i.z,T[O+F+3]=0),_===!0&&(i.fromBufferAttribute(D,V),T[O+F+4]=i.x,T[O+F+5]=i.y,T[O+F+6]=i.z,T[O+F+7]=0),g===!0&&(i.fromBufferAttribute(I,V),T[O+F+8]=i.x,T[O+F+9]=i.y,T[O+F+10]=i.z,T[O+F+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ut(x,b)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function g_(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Jd=new en,Ld=new Yr(1,1),jd=new Fr,Qd=new ea,tf=new zr,Ud=[],Nd=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function rr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ud[i];if(r===void 0&&(r=new Float32Array(i),Ud[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gl(s,t){let e=Nd[t];e===void 0&&(e=new Int32Array(t),Nd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function __(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function x_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function v_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function M_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Bd.set(n),s.uniformMatrix2fv(this.addr,!1,Bd),Ne(e,n)}}function E_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Od.set(n),s.uniformMatrix3fv(this.addr,!1,Od),Ne(e,n)}}function S_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Fd.set(n),s.uniformMatrix4fv(this.addr,!1,Fd),Ne(e,n)}}function T_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function w_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function A_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function R_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function P_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function I_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function D_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ld.compareFunction=Dc,r=Ld):r=Jd,e.setTexture2D(t||r,i)}function L_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qd,i)}function U_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tf,i)}function N_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jd,i)}function F_(s){switch(s){case 5126:return __;case 35664:return x_;case 35665:return y_;case 35666:return v_;case 35674:return M_;case 35675:return E_;case 35676:return S_;case 5124:case 35670:return T_;case 35667:case 35671:return b_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}function O_(s,t){s.uniform1fv(this.addr,t)}function B_(s,t){let e=rr(t,this.size,2);s.uniform2fv(this.addr,e)}function H_(s,t){let e=rr(t,this.size,3);s.uniform3fv(this.addr,e)}function k_(s,t){let e=rr(t,this.size,4);s.uniform4fv(this.addr,e)}function z_(s,t){let e=rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function G_(s,t){let e=rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function V_(s,t){let e=rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function W_(s,t){s.uniform1iv(this.addr,t)}function X_(s,t){s.uniform2iv(this.addr,t)}function Y_(s,t){s.uniform3iv(this.addr,t)}function q_(s,t){s.uniform4iv(this.addr,t)}function Z_(s,t){s.uniform1uiv(this.addr,t)}function K_(s,t){s.uniform2uiv(this.addr,t)}function $_(s,t){s.uniform3uiv(this.addr,t)}function J_(s,t){s.uniform4uiv(this.addr,t)}function j_(s,t,e){let n=this.cache,i=t.length,r=gl(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Jd,r[o])}function Q_(s,t,e){let n=this.cache,i=t.length,r=gl(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qd,r[o])}function tx(s,t,e){let n=this.cache,i=t.length,r=gl(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tf,r[o])}function ex(s,t,e){let n=this.cache,i=t.length,r=gl(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jd,r[o])}function nx(s){switch(s){case 5126:return O_;case 35664:return B_;case 35665:return H_;case 35666:return k_;case 35674:return z_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return Y_;case 35669:case 35673:return q_;case 5125:return Z_;case 36294:return K_;case 36295:return $_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}var qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F_(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}},Kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function Hd(s,t){s.seq.push(t),s.map[t.id]=t}function ix(s,t,e){let n=s.name,i=n.length;for(Yc.lastIndex=0;;){let r=Yc.exec(n),o=Yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hd(e,c===void 0?new qc(a,s,t):new Zc(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Kc(a),Hd(e,u)),e=u}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ix(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function kd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sx=37297,rx=0;function ox(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zd=new kt;function ax(s){Zt._getMatrix(zd,Zt.workingColorSpace,s);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Lr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ox(s.getShaderSource(t),o)}else return i}function lx(s,t){let e=ax(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cx(s,t){let e;switch(t){case id:e="Linear";break;case sd:e="Reinhard";break;case rd:e="Cineon";break;case Ca:e="ACESFilmic";break;case ad:e="AgX";break;case ld:e="Neutral";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new N;function hx(){Zt.getLuminanceCoefficients(pl);let s=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function dx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function lo(s){return s!==""}function Vd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var px=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(s){return s.replace(px,gx)}var mx=new Map;function gx(s,t){let e=Gt[t];if(e===void 0){let n=mx.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $c(e)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(s){return s.replace(_x,xx)}function xx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function vx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===hs&&(t="ENVMAP_MODE_REFRACTION"),t}function Ex(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function Sx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yx(e),c=vx(e),h=Mx(e),u=Ex(e),d=Sx(e),f=ux(e),_=dx(r),g=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lo).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),p=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==fi?cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,lx("linearToOutputTexel",e.outputColorSpace),hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=$c(o),o=Vd(o,e),o=Wd(o,e),a=$c(a),a=Vd(a,e),a=Wd(a,e),o=Xd(o),a=Xd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+m+o,x=M+p+a,b=kd(i,i.VERTEX_SHADER,E),T=kd(i,i.FRAGMENT_SHADER,x);i.attachShader(g,b),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(b).trim(),O=i.getShaderInfoLog(T).trim(),V=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,T);else{let z=Gd(i,b,"vertex"),B=Gd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+z+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||O==="")&&(F=!1);F&&(C.diagnostics={runnable:V,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(b),i.deleteShader(T),R=new ir(i,g),y=fx(i,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,sx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var bx=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function wx(s,t,e,n,i,r,o){let a=new Or,l=new Jc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,C,D,I){let O=D.fog,V=I.geometry,F=y.isMeshStandardMaterial?D.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),B=z&&z.mapping===eo?z.image.height:null,J=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=et!==void 0?et.length:0,it=0;V.morphAttributes.position!==void 0&&(it=1),V.morphAttributes.normal!==void 0&&(it=2),V.morphAttributes.color!==void 0&&(it=3);let gt,W,j,mt;if(J){let ee=$n[J];gt=ee.vertexShader,W=ee.fragmentShader}else gt=y.vertexShader,W=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),mt=l.getFragmentShaderID(y);let at=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),qt=I.isInstancedMesh===!0,Lt=I.isBatchedMesh===!0,xe=!!y.map,ye=!!y.matcap,jt=!!z,L=!!y.aoMap,je=!!y.lightMap,Qt=!!y.bumpMap,he=!!y.normalMap,Tt=!!y.displacementMap,$t=!!y.emissiveMap,Rt=!!y.metalnessMap,zt=!!y.roughnessMap,Ie=y.anisotropy>0,P=y.clearcoat>0,S=y.dispersion>0,X=y.iridescence>0,K=y.sheen>0,Q=y.transmission>0,Z=Ie&&!!y.anisotropyMap,bt=P&&!!y.clearcoatMap,ht=P&&!!y.clearcoatNormalMap,St=P&&!!y.clearcoatRoughnessMap,wt=X&&!!y.iridescenceMap,tt=X&&!!y.iridescenceThicknessMap,xt=K&&!!y.sheenColorMap,Dt=K&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,lt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,U=Q&&!!y.transmissionMap,dt=Q&&!!y.thicknessMap,nt=!!y.gradientMap,vt=!!y.alphaMap,st=y.alphaTest>0,$=!!y.alphaHash,Mt=!!y.extensions,Ht=fi;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ht=s.toneMapping);let de={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:gt,fragmentShader:W,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&I._colorsTexture!==null,instancing:qt,instancingColor:qt&&I.instanceColor!==null,instancingMorph:qt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ts,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:ye,envMap:jt,envMapMode:jt&&z.mapping,envMapCubeUVHeight:B,aoMap:L,lightMap:je,bumpMap:Qt,normalMap:he,displacementMap:d&&Tt,emissiveMap:$t,normalMapObjectSpace:he&&y.normalMapType===dd,normalMapTangentSpace:he&&y.normalMapType===Ic,metalnessMap:Rt,roughnessMap:zt,anisotropy:Ie,anisotropyMap:Z,clearcoat:P,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:St,dispersion:S,iridescence:X,iridescenceMap:wt,iridescenceThicknessMap:tt,sheen:K,sheenColorMap:xt,sheenRoughnessMap:Dt,specularMap:Pt,specularColorMap:lt,specularIntensityMap:Bt,transmission:Q,transmissionMap:U,thicknessMap:dt,gradientMap:nt,opaque:y.transparent===!1&&y.blending===ji&&y.alphaToCoverage===!1,alphaMap:vt,alphaTest:st,alphaHash:$,combine:y.combine,mapUv:xe&&g(y.map.channel),aoMapUv:L&&g(y.aoMap.channel),lightMapUv:je&&g(y.lightMap.channel),bumpMapUv:Qt&&g(y.bumpMap.channel),normalMapUv:he&&g(y.normalMap.channel),displacementMapUv:Tt&&g(y.displacementMap.channel),emissiveMapUv:$t&&g(y.emissiveMap.channel),metalnessMapUv:Rt&&g(y.metalnessMap.channel),roughnessMapUv:zt&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:bt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(y.sheenRoughnessMap.channel),specularMapUv:Pt&&g(y.specularMap.channel),specularColorMapUv:lt&&g(y.specularColorMap.channel),specularIntensityMapUv:Bt&&g(y.specularIntensityMap.channel),transmissionMapUv:U&&g(y.transmissionMap.channel),thicknessMapUv:dt&&g(y.thicknessMap.channel),alphaMapUv:vt&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(he||Ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(xe||vt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:it,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:$t&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)v.push(C),v.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(M(v,y),E(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function E(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=_[y.type],C;if(v){let D=$n[v];C=bd.clone(D.uniforms)}else C=y.uniforms;return C}function b(y,v){let C;for(let D=0,I=h.length;D<I;D++){let O=h[D];if(O.cacheKey===v){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Tx(s,v,y,r),h.push(C)),C}function T(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Ax(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function qd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Rx),n.length>1&&n.sort(d||qd),i.length>1&&i.sort(d||qd)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Cx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Zd,s.set(n,[o])):i>=r.length?(o=new Zd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new pt};break;case"SpotLight":e={position:new N,direction:new N,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Ix(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Dx=0;function Lx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ux(s){let t=new Px,e=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,E=0,x=0,b=0,T=0,A=0;c.sort(Lx);for(let y=0,v=c.length;y<v;y++){let C=c[y],D=C.color,I=C.intensity,O=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*I,u+=D.g*I,d+=D.b*I;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],I);A++}else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=F,f++}else if(C.isSpotLight){let F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(D).multiplyScalar(I),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[g]=F;let z=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=z.matrix,C.castShadow){let B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=V,x++}g++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(D).multiplyScalar(I),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=F,m++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let z=C.shadow,B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=F,_++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(I),F.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[p]=F,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=A,n.version=Dx++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let E=c[p];if(E.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(E.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Kd(s){let t=new Ux(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Nx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Kd(s),t.set(i,[a])):r>=o.length?(a=new Kd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bx(s,t,e){let n=new Zs,i=new Ut,r=new Ut,o=new ne,a=new la({depthPacking:ud}),l=new ca,c={},h=e.maxTextureSize,u={[li]:Ge,[Ge]:li,[Kn]:Kn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Fx,fragmentShader:Ox}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new an;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new G(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let p=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let I=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let V=0,F=T.length;V<F;V++){let z=T[V],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let J=B.getFrameExtents();if(i.multiply(J),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||I===!0||O===!0){let ot=this.type!==Zn?{minFilter:ze,magFilter:ze}:{};B.map!==null&&B.map.dispose(),B.map=new Yn(i.x,i.y,ot),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let et=B.getViewportCount();for(let ot=0;ot<et;ot++){let it=B.getViewport(ot);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),D.viewport(o),B.updateMatrices(z,ot),n=B.getFrustum(),x(A,R,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Zn&&M(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,C)};function M(T,A){let R=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,R,f,g,null)}function E(T,A,R,y){let v=null,C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=v.uuid,I=A.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let V=O[I];V===void 0&&(V=v.clone(),O[I]=V,A.addEventListener("dispose",b)),v=V}if(v.visible=A.visible,v.wireframe=A.wireframe,y===Zn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=s.properties.get(v);D.light=R}return v}function x(T,A,R,y,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let I=t.update(T),O=T.material;if(Array.isArray(O)){let V=I.groups;for(let F=0,z=V.length;F<z;F++){let B=V[F],J=O[B.materialIndex];if(J&&J.visible){let et=E(T,J,y,v);T.onBeforeShadow(s,T,A,R,I,et,B),s.renderBufferDirect(R,null,I,et,T,B),T.onAfterShadow(s,T,A,R,I,et,B)}}}else if(O.visible){let V=E(T,O,y,v);T.onBeforeShadow(s,T,A,R,I,V,null),s.renderBufferDirect(R,null,I,V,T,null),T.onAfterShadow(s,T,A,R,I,V,null)}}let D=T.children;for(let I=0,O=D.length;I<O;I++)x(D[I],A,R,y,v)}function b(T){T.target.removeEventListener("dispose",b);for(let R in c){let y=c[R],v=T.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var Hx={[Ea]:Sa,[Ta]:Aa,[ba]:Ra,[Qi]:wa,[Sa]:Ea,[Aa]:Ta,[Ra]:ba,[wa]:Qi};function kx(s,t){function e(){let U=!1,dt=new ne,nt=null,vt=new ne(0,0,0,0);return{setMask:function(st){nt!==st&&!U&&(s.colorMask(st,st,st,st),nt=st)},setLocked:function(st){U=st},setClear:function(st,$,Mt,Ht,de){de===!0&&(st*=Ht,$*=Ht,Mt*=Ht),dt.set(st,$,Mt,Ht),vt.equals(dt)===!1&&(s.clearColor(st,$,Mt,Ht),vt.copy(dt))},reset:function(){U=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,nt=null,vt=null,st=null;return{setReversed:function($){if(dt!==$){let Mt=t.get("EXT_clip_control");$?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),dt=$;let Ht=st;st=null,this.setClear(Ht)}},getReversed:function(){return dt},setTest:function($){$?at(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function($){nt!==$&&!U&&(s.depthMask($),nt=$)},setFunc:function($){if(dt&&($=Hx[$]),vt!==$){switch($){case Ea:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case wa:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=$}},setLocked:function($){U=$},setClear:function($){st!==$&&(dt&&($=1-$),s.clearDepth($),st=$)},reset:function(){U=!1,nt=null,vt=null,st=null,dt=!1}}}function i(){let U=!1,dt=null,nt=null,vt=null,st=null,$=null,Mt=null,Ht=null,de=null;return{setTest:function(ee){U||(ee?at(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!U&&(s.stencilMask(ee),dt=ee)},setFunc:function(ee,Ln,ei){(nt!==ee||vt!==Ln||st!==ei)&&(s.stencilFunc(ee,Ln,ei),nt=ee,vt=Ln,st=ei)},setOp:function(ee,Ln,ei){($!==ee||Mt!==Ln||Ht!==ei)&&(s.stencilOp(ee,Ln,ei),$=ee,Mt=Ln,Ht=ei)},setLocked:function(ee){U=ee},setClear:function(ee){de!==ee&&(s.clearStencil(ee),de=ee)},reset:function(){U=!1,dt=null,nt=null,vt=null,st=null,$=null,Mt=null,Ht=null,de=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,E=null,x=null,b=null,T=null,A=new pt(0,0,0),R=0,y=!1,v=null,C=null,D=null,I=null,O=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,z=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=z>=2);let J=null,et={},ot=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),gt=new ne().fromArray(ot),W=new ne().fromArray(it);function j(U,dt,nt,vt){let st=new Uint8Array(4),$=s.createTexture();s.bindTexture(U,$),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<nt;Mt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(dt+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return $}let mt={};mt[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Qi),Qt(!1),he(_c),at(s.CULL_FACE),L(di);function at(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function _t(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function qt(U,dt){return u[U]!==dt?(s.bindFramebuffer(U,dt),u[U]=dt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Lt(U,dt){let nt=f,vt=!1;if(U){nt=d.get(dt),nt===void 0&&(nt=[],d.set(dt,nt));let st=U.textures;if(nt.length!==st.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let $=0,Mt=st.length;$<Mt;$++)nt[$]=s.COLOR_ATTACHMENT0+$;nt.length=st.length,vt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,vt=!0);vt&&s.drawBuffers(nt)}function xe(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let ye={[Ri]:s.FUNC_ADD,[Bu]:s.FUNC_SUBTRACT,[Hu]:s.FUNC_REVERSE_SUBTRACT};ye[ku]=s.MIN,ye[zu]=s.MAX;let jt={[Gu]:s.ZERO,[Vu]:s.ONE,[Wu]:s.SRC_COLOR,[Zo]:s.SRC_ALPHA,[$u]:s.SRC_ALPHA_SATURATE,[Zu]:s.DST_COLOR,[Yu]:s.DST_ALPHA,[Xu]:s.ONE_MINUS_SRC_COLOR,[Ko]:s.ONE_MINUS_SRC_ALPHA,[Ku]:s.ONE_MINUS_DST_COLOR,[qu]:s.ONE_MINUS_DST_ALPHA,[Ju]:s.CONSTANT_COLOR,[ju]:s.ONE_MINUS_CONSTANT_COLOR,[Qu]:s.CONSTANT_ALPHA,[td]:s.ONE_MINUS_CONSTANT_ALPHA};function L(U,dt,nt,vt,st,$,Mt,Ht,de,ee){if(U===di){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(at(s.BLEND),g=!0),U!==Ou){if(U!==m||ee!==y){if((p!==Ri||x!==Ri)&&(s.blendEquation(s.FUNC_ADD),p=Ri,x=Ri),ee)switch(U){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yc:s.blendFunc(s.ONE,s.ONE);break;case vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,E=null,b=null,T=null,A.set(0,0,0),R=0,m=U,y=ee}return}st=st||dt,$=$||nt,Mt=Mt||vt,(dt!==p||st!==x)&&(s.blendEquationSeparate(ye[dt],ye[st]),p=dt,x=st),(nt!==M||vt!==E||$!==b||Mt!==T)&&(s.blendFuncSeparate(jt[nt],jt[vt],jt[$],jt[Mt]),M=nt,E=vt,b=$,T=Mt),(Ht.equals(A)===!1||de!==R)&&(s.blendColor(Ht.r,Ht.g,Ht.b,de),A.copy(Ht),R=de),m=U,y=!1}function je(U,dt){U.side===Kn?_t(s.CULL_FACE):at(s.CULL_FACE);let nt=U.side===Ge;dt&&(nt=!nt),Qt(nt),U.blending===ji&&U.transparent===!1?L(di):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let vt=U.stencilWrite;a.setTest(vt),vt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$t(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(U){v!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),v=U)}function he(U){U!==Nu?(at(s.CULL_FACE),U!==C&&(U===_c?s.cullFace(s.BACK):U===Fu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),C=U}function Tt(U){U!==D&&(F&&s.lineWidth(U),D=U)}function $t(U,dt,nt){U?(at(s.POLYGON_OFFSET_FILL),(I!==dt||O!==nt)&&(s.polygonOffset(dt,nt),I=dt,O=nt)):_t(s.POLYGON_OFFSET_FILL)}function Rt(U){U?at(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function zt(U){U===void 0&&(U=s.TEXTURE0+V-1),J!==U&&(s.activeTexture(U),J=U)}function Ie(U,dt,nt){nt===void 0&&(J===null?nt=s.TEXTURE0+V-1:nt=J);let vt=et[nt];vt===void 0&&(vt={type:void 0,texture:void 0},et[nt]=vt),(vt.type!==U||vt.texture!==dt)&&(J!==nt&&(s.activeTexture(nt),J=nt),s.bindTexture(U,dt||mt[U]),vt.type=U,vt.texture=dt)}function P(){let U=et[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(U){gt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function Dt(U){W.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function Pt(U,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let vt=nt.get(U);vt===void 0&&(vt=s.getUniformBlockIndex(dt,U.name),nt.set(U,vt))}function lt(U,dt){let vt=c.get(dt).get(U);l.get(dt)!==vt&&(s.uniformBlockBinding(dt,vt,U.__bindingPointIndex),l.set(dt,vt))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,et={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,E=null,x=null,b=null,T=null,A=new pt(0,0,0),R=0,y=!1,v=null,C=null,D=null,I=null,O=null,gt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:_t,bindFramebuffer:qt,drawBuffers:Lt,useProgram:xe,setBlending:L,setMaterial:je,setFlipSided:Qt,setCullFace:he,setLineWidth:Tt,setPolygonOffset:$t,setScissorTest:Rt,activeTexture:zt,bindTexture:Ie,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:wt,texImage3D:tt,updateUBOMapping:Pt,uniformBlockBinding:lt,texStorage2D:ht,texStorage3D:St,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:bt,scissor:xt,viewport:Dt,reset:Bt}}function zx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return f?new OffscreenCanvas(P,S):Nr("canvas")}function g(P,S,X){let K=1,Q=Ie(P);if((Q.width>X||Q.height>X)&&(K=X/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z=Math.floor(K*Q.width),bt=Math.floor(K*Q.height);u===void 0&&(u=_(Z,bt));let ht=S?_(Z,bt):u;return ht.width=Z,ht.height=bt,ht.getContext("2d").drawImage(P,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+bt+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(P,S,X,K,Q=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=S;if(S===s.RED&&(X===s.FLOAT&&(Z=s.R32F),X===s.HALF_FLOAT&&(Z=s.R16F),X===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.R8UI),X===s.UNSIGNED_SHORT&&(Z=s.R16UI),X===s.UNSIGNED_INT&&(Z=s.R32UI),X===s.BYTE&&(Z=s.R8I),X===s.SHORT&&(Z=s.R16I),X===s.INT&&(Z=s.R32I)),S===s.RG&&(X===s.FLOAT&&(Z=s.RG32F),X===s.HALF_FLOAT&&(Z=s.RG16F),X===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RG8UI),X===s.UNSIGNED_SHORT&&(Z=s.RG16UI),X===s.UNSIGNED_INT&&(Z=s.RG32UI),X===s.BYTE&&(Z=s.RG8I),X===s.SHORT&&(Z=s.RG16I),X===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),X===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),X===s.UNSIGNED_INT&&(Z=s.RGB32UI),X===s.BYTE&&(Z=s.RGB8I),X===s.SHORT&&(Z=s.RGB16I),X===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),X===s.UNSIGNED_INT&&(Z=s.RGBA32UI),X===s.BYTE&&(Z=s.RGBA8I),X===s.SHORT&&(Z=s.RGBA16I),X===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){let bt=Q?Lr:Zt.getTransfer(K);X===s.FLOAT&&(Z=s.RGBA32F),X===s.HALF_FLOAT&&(Z=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Z=bt===ie?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,S){let X;return P?S===null||S===Ni||S===js?X=s.DEPTH24_STENCIL8:S===zn?X=s.DEPTH32F_STENCIL8:S===$s&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===js?X=s.DEPTH_COMPONENT24:S===zn?X=s.DEPTH_COMPONENT32F:S===$s&&(X=s.DEPTH_COMPONENT16),X}function b(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ze&&P.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){let S=P.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S)}function A(P){let S=P.target;S.removeEventListener("dispose",A),v(S)}function R(P){let S=n.get(P);if(S.__webglInit===void 0)return;let X=P.source,K=d.get(X);if(K){let Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(P),Object.keys(K).length===0&&d.delete(X)}n.remove(P)}function y(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let X=P.source,K=d.get(X);delete K[S.__cacheKey],o.memory.textures--}function v(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=P.textures;for(let K=0,Q=X.length;K<Q;K++){let Z=n.get(X[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(P)}let C=0;function D(){C=0}function I(){let P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function O(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function V(P,S){let X=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(X,P,S);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+S)}function F(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){mt(X,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+S)}function z(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){mt(X,P,S);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+S)}function B(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){at(X,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+S)}let J={[$o]:s.REPEAT,[Ai]:s.CLAMP_TO_EDGE,[Jo]:s.MIRRORED_REPEAT},et={[ze]:s.NEAREST,[cd]:s.NEAREST_MIPMAP_NEAREST,[no]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Da]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},ot={[fd]:s.NEVER,[yd]:s.ALWAYS,[pd]:s.LESS,[Dc]:s.LEQUAL,[md]:s.EQUAL,[xd]:s.GEQUAL,[gd]:s.GREATER,[_d]:s.NOTEQUAL};function it(P,S){if(S.type===zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Da||S.magFilter===no||S.magFilter===Ui||S.minFilter===On||S.minFilter===Da||S.minFilter===no||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,J[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,et[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==no&&S.minFilter!==Ui||S.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function gt(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));let K=S.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let Z=O(S);if(Z!==P.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[Z].usedTimes++;let bt=Q[P.__cacheKey];bt!==void 0&&(Q[P.__cacheKey].usedTimes--,bt.usedTimes===0&&y(S)),P.__cacheKey=Z,P.__webglTexture=Q[Z].texture}return X}function W(P,S,X){return Math.floor(Math.floor(P/X)/S)}function j(P,S,X,K){let Z=P.updateRanges;if(Z.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,X,K,S.data);else{Z.sort((tt,xt)=>tt.start-xt.start);let bt=0;for(let tt=1;tt<Z.length;tt++){let xt=Z[bt],Dt=Z[tt],Pt=xt.start+xt.count,lt=W(Dt.start,S.width,4),Bt=W(xt.start,S.width,4);Dt.start<=Pt+1&&lt===Bt&&W(Dt.start+Dt.count-1,S.width,4)===lt?xt.count=Math.max(xt.count,Dt.start+Dt.count-xt.start):(++bt,Z[bt]=Dt)}Z.length=bt+1;let ht=s.getParameter(s.UNPACK_ROW_LENGTH),St=s.getParameter(s.UNPACK_SKIP_PIXELS),wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let tt=0,xt=Z.length;tt<xt;tt++){let Dt=Z[tt],Pt=Math.floor(Dt.start/4),lt=Math.ceil(Dt.count/4),Bt=Pt%S.width,U=Math.floor(Pt/S.width),dt=lt,nt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Bt,U,dt,nt,X,K,S.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,St),s.pixelStorei(s.UNPACK_SKIP_ROWS,wt)}}function mt(P,S,X){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);let Q=gt(P,S),Z=S.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+X);let bt=n.get(Z);if(Z.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+X);let ht=Zt.getPrimaries(Zt.workingColorSpace),St=S.colorSpace===pi?null:Zt.getPrimaries(S.colorSpace),wt=S.colorSpace===pi||ht===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let tt=g(S.image,!1,i.maxTextureSize);tt=zt(S,tt);let xt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),Pt=E(S.internalFormat,xt,Dt,S.colorSpace,S.isVideoTexture);it(K,S);let lt,Bt=S.mipmaps,U=S.isVideoTexture!==!0,dt=bt.__version===void 0||Q===!0,nt=Z.dataReady,vt=b(S,tt);if(S.isDepthTexture)Pt=x(S.format===Qs,S.type),dt&&(U?e.texStorage2D(s.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,xt,Dt,null));else if(S.isDataTexture)if(Bt.length>0){U&&dt&&e.texStorage2D(s.TEXTURE_2D,vt,Pt,Bt[0].width,Bt[0].height);for(let st=0,$=Bt.length;st<$;st++)lt=Bt[st],U?nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,lt.width,lt.height,xt,Dt,lt.data):e.texImage2D(s.TEXTURE_2D,st,Pt,lt.width,lt.height,0,xt,Dt,lt.data);S.generateMipmaps=!1}else U?(dt&&e.texStorage2D(s.TEXTURE_2D,vt,Pt,tt.width,tt.height),nt&&j(S,tt,xt,Dt)):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,xt,Dt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Pt,Bt[0].width,Bt[0].height,tt.depth);for(let st=0,$=Bt.length;st<$;st++)if(lt=Bt[st],S.format!==Ze)if(xt!==null)if(U){if(nt)if(S.layerUpdates.size>0){let Mt=kc(lt.width,lt.height,S.format,S.type);for(let Ht of S.layerUpdates){let de=lt.data.subarray(Ht*Mt/lt.data.BYTES_PER_ELEMENT,(Ht+1)*Mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Ht,lt.width,lt.height,1,xt,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,lt.width,lt.height,tt.depth,xt,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Pt,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,lt.width,lt.height,tt.depth,xt,Dt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Pt,lt.width,lt.height,tt.depth,0,xt,Dt,lt.data)}else{U&&dt&&e.texStorage2D(s.TEXTURE_2D,vt,Pt,Bt[0].width,Bt[0].height);for(let st=0,$=Bt.length;st<$;st++)lt=Bt[st],S.format!==Ze?xt!==null?U?nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,lt.width,lt.height,xt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,lt.width,lt.height,xt,Dt,lt.data):e.texImage2D(s.TEXTURE_2D,st,Pt,lt.width,lt.height,0,xt,Dt,lt.data)}else if(S.isDataArrayTexture)if(U){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Pt,tt.width,tt.height,tt.depth),nt)if(S.layerUpdates.size>0){let st=kc(tt.width,tt.height,S.format,S.type);for(let $ of S.layerUpdates){let Mt=tt.data.subarray($*st/tt.data.BYTES_PER_ELEMENT,($+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,xt,Dt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,xt,Dt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,xt,Dt,tt.data);else if(S.isData3DTexture)U?(dt&&e.texStorage3D(s.TEXTURE_3D,vt,Pt,tt.width,tt.height,tt.depth),nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,xt,Dt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,xt,Dt,tt.data);else if(S.isFramebufferTexture){if(dt)if(U)e.texStorage2D(s.TEXTURE_2D,vt,Pt,tt.width,tt.height);else{let st=tt.width,$=tt.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Pt,st,$,0,xt,Dt,null),st>>=1,$>>=1}}else if(Bt.length>0){if(U&&dt){let st=Ie(Bt[0]);e.texStorage2D(s.TEXTURE_2D,vt,Pt,st.width,st.height)}for(let st=0,$=Bt.length;st<$;st++)lt=Bt[st],U?nt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt,Dt,lt):e.texImage2D(s.TEXTURE_2D,st,Pt,xt,Dt,lt);S.generateMipmaps=!1}else if(U){if(dt){let st=Ie(tt);e.texStorage2D(s.TEXTURE_2D,vt,Pt,st.width,st.height)}nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Dt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,xt,Dt,tt);m(S)&&p(K),bt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function at(P,S,X){if(S.image.length!==6)return;let K=gt(P,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let Z=n.get(Q);if(Q.version!==Z.__version||K===!0){e.activeTexture(s.TEXTURE0+X);let bt=Zt.getPrimaries(Zt.workingColorSpace),ht=S.colorSpace===pi?null:Zt.getPrimaries(S.colorSpace),St=S.colorSpace===pi||bt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let wt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let $=0;$<6;$++)!wt&&!tt?xt[$]=g(S.image[$],!0,i.maxCubemapSize):xt[$]=tt?S.image[$].image:S.image[$],xt[$]=zt(S,xt[$]);let Dt=xt[0],Pt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),Bt=E(S.internalFormat,Pt,lt,S.colorSpace),U=S.isVideoTexture!==!0,dt=Z.__version===void 0||K===!0,nt=Q.dataReady,vt=b(S,Dt);it(s.TEXTURE_CUBE_MAP,S);let st;if(wt){U&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Bt,Dt.width,Dt.height);for(let $=0;$<6;$++){st=xt[$].mipmaps;for(let Mt=0;Mt<st.length;Mt++){let Ht=st[Mt];S.format!==Ze?Pt!==null?U?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,0,0,Ht.width,Ht.height,Pt,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,Bt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,0,0,Ht.width,Ht.height,Pt,lt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,Bt,Ht.width,Ht.height,0,Pt,lt,Ht.data)}}}else{if(st=S.mipmaps,U&&dt){st.length>0&&vt++;let $=Ie(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xt[$].width,xt[$].height,Pt,lt,xt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,xt[$].width,xt[$].height,0,Pt,lt,xt[$].data);for(let Mt=0;Mt<st.length;Mt++){let de=st[Mt].image[$].image;U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,0,0,de.width,de.height,Pt,lt,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,Bt,de.width,de.height,0,Pt,lt,de.data)}}else{U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,lt,xt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,Pt,lt,xt[$]);for(let Mt=0;Mt<st.length;Mt++){let Ht=st[Mt];U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,0,0,Pt,lt,Ht.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,Bt,Pt,lt,Ht.image[$])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _t(P,S,X,K,Q,Z){let bt=r.convert(X.format,X.colorSpace),ht=r.convert(X.type),St=E(X.internalFormat,bt,ht,X.colorSpace),wt=n.get(S),tt=n.get(X);if(tt.__renderTarget=S,!wt.__hasExternalTextures){let xt=Math.max(1,S.width>>Z),Dt=Math.max(1,S.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,St,xt,Dt,S.depth,0,bt,ht,null):e.texImage2D(Q,Z,St,xt,Dt,0,bt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),$t(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,tt.__webglTexture,0,Tt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,tt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(P,S,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=x(S.stencilBuffer,Q),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Tt(S);$t(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Z,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,P)}else{let K=S.textures;for(let Q=0;Q<K.length;Q++){let Z=K[Q],bt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),St=E(Z.internalFormat,bt,ht,Z.colorSpace),wt=Tt(S);X&&$t(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,St,S.width,S.height):$t(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,St,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,St,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let Q=K.__webglTexture,Z=Tt(S);if(S.depthTexture.format===Ws)$t(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Qs)$t(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function xe(P){let S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let K=P.texture.mipmaps;K&&K.length>0?Lt(S.__webglFramebuffer[0],P):Lt(S.__webglFramebuffer,P)}else if(X){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),qt(S.__webglDepthbuffer[K],P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else{let K=P.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),qt(S.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(P,S,X){let K=n.get(P);S!==void 0&&_t(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&xe(P)}function jt(P){let S=P.texture,X=n.get(P),K=n.get(S);P.addEventListener("dispose",A);let Q=P.textures,Z=P.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ht]=[];for(let St=0;St<S.mipmaps.length;St++)X.__webglFramebuffer[ht][St]=s.createFramebuffer()}else X.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)X.__webglFramebuffer[ht]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ht=0,St=Q.length;ht<St;ht++){let wt=n.get(Q[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){let St=Q[ht];X.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[ht]);let wt=r.convert(St.format,St.colorSpace),tt=r.convert(St.type),xt=E(St.internalFormat,wt,tt,St.colorSpace,P.isXRRenderTarget===!0),Dt=Tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,xt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,X.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),it(s.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)_t(X.__webglFramebuffer[ht][St],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St);else _t(X.__webglFramebuffer[ht],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,St=Q.length;ht<St;ht++){let wt=Q[ht],tt=n.get(wt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),it(s.TEXTURE_2D,wt),_t(X.__webglFramebuffer,P,wt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(wt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),it(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)_t(X.__webglFramebuffer[St],P,S,s.COLOR_ATTACHMENT0,ht,St);else _t(X.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,ht,0);m(S)&&p(ht),e.unbindTexture()}P.depthBuffer&&xe(P)}function L(P){let S=P.textures;for(let X=0,K=S.length;X<K;X++){let Q=S[X];if(m(Q)){let Z=M(P),bt=n.get(Q).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}let je=[],Qt=[];function he(P){if(P.samples>0){if($t(P)===!1){let S=P.textures,X=P.width,K=P.height,Q=s.COLOR_BUFFER_BIT,Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(P),ht=S.length>1;if(ht)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let St=P.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let tt=n.get(S[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,X,K,0,0,X,K,Q,s.NEAREST),l===!0&&(je.length=0,Qt.length=0,je.push(s.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(Z),Qt.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let tt=n.get(S[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Tt(P){return Math.min(i.maxSamples,P.samples)}function $t(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function zt(P,S){let X=P.colorSpace,K=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ts&&X!==pi&&(Zt.getTransfer(X)===ie?(K!==Ze||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=ye,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$t}function Gx(s,t){function e(n,i=pi){let r,o=Zt.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Ua)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return s.BYTE;if(n===bc)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===La)return s.INT;if(n===Ni)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Js)return s.HALF_FLOAT;if(n===Ac)return s.ALPHA;if(n===Rc)return s.RGB;if(n===Ze)return s.RGBA;if(n===Ws)return s.DEPTH_COMPONENT;if(n===Qs)return s.DEPTH_STENCIL;if(n===Fa)return s.RED;if(n===Oa)return s.RED_INTEGER;if(n===Cc)return s.RG;if(n===Ba)return s.RG_INTEGER;if(n===Ha)return s.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===za||n===Ga||n===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Za||n===Ka||n===$a||n===Ja||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===al||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new en,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:Vx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Xn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=new Qc,m=e.getContextAttributes(),p=null,M=null,E=[],x=[],b=new Ut,T=null,A=new ke;A.viewport=new ne;let R=new ke;R.viewport=new ne;let y=[A,R],v=new va,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=E[W];return j===void 0&&(j=new qs,E[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=E[W];return j===void 0&&(j=new qs,E[W]=j),j.getGripSpace()},this.getHand=function(W){let j=E[W];return j===void 0&&(j=new qs,E[W]=j),j.getHandSpace()};function I(W){let j=x.indexOf(W.inputSource);if(j===-1)return;let mt=E[j];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let W=0;W<E.length;W++){let j=x[W];j!==null&&(x[W]=null,E[W].disconnect(j))}C=null,D=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,at=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Qs:Ws,at=m.stencil?js:Ni);let qt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(qt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Yn(d.textureWidth,d.textureHeight,{format:Ze,type:kn,depthTexture:new Yr(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(W){for(let j=0;j<W.removed.length;j++){let mt=W.removed[j],at=x.indexOf(mt);at>=0&&(x[at]=null,E[at].disconnect(mt))}for(let j=0;j<W.added.length;j++){let mt=W.added[j],at=x.indexOf(mt);if(at===-1){for(let qt=0;qt<E.length;qt++)if(qt>=x.length){x.push(mt),at=qt;break}else if(x[qt]===null){x[qt]=mt,at=qt;break}if(at===-1)break}let _t=E[at];_t&&_t.connect(mt)}}let F=new N,z=new N;function B(W,j,mt){F.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(mt.matrixWorld);let at=F.distanceTo(z),_t=j.projectionMatrix.elements,qt=mt.projectionMatrix.elements,Lt=_t[14]/(_t[10]-1),xe=_t[14]/(_t[10]+1),ye=(_t[9]+1)/_t[5],jt=(_t[9]-1)/_t[5],L=(_t[8]-1)/_t[0],je=(qt[8]+1)/qt[0],Qt=Lt*L,he=Lt*je,Tt=at/(-L+je),$t=Tt*-L;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($t),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Rt=Lt+Tt,zt=xe+Tt,Ie=Qt-$t,P=he+(at-$t),S=ye*xe/zt*Rt,X=jt*xe/zt*Rt;W.projectionMatrix.makePerspective(Ie,P,S,X,Rt,zt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let j=W.near,mt=W.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),v.near=R.near=A.near=j,v.far=R.far=A.far=mt,(C!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,D=v.far),A.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,v.layers.mask=A.layers.mask|R.layers.mask;let at=W.parent,_t=v.cameras;J(v,at);for(let qt=0;qt<_t.length;qt++)J(_t[qt],at);_t.length===2?B(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),et(W,v,at)};function et(W,j,mt){mt===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ot=null;function it(W,j){if(h=j.getViewerPose(c||o),_=j,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let at=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Lt=0;Lt<mt.length;Lt++){let xe=mt[Lt],ye=null;if(f!==null)ye=f.getViewport(xe);else{let L=u.getViewSubImage(d,xe);ye=L.viewport,Lt===0&&(t.setRenderTargetTextures(M,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(M))}let jt=y[Lt];jt===void 0&&(jt=new ke,jt.layers.enable(Lt),jt.viewport=new ne,y[Lt]=jt),jt.matrix.fromArray(xe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(xe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ye.x,ye.y,ye.width,ye.height),Lt===0&&(v.matrix.copy(jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(jt)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let Lt=u.getDepthInformation(mt[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(t,Lt,i.renderState)}}for(let mt=0;mt<E.length;mt++){let at=x[mt],_t=E[mt];at!==null&&_t!==void 0&&_t.update(at,j,c||o)}ot&&ot(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let gt=new $d;gt.setAnimationLoop(it),this.setAnimationLoop=function(W){ot=W},this.dispose=function(){}}},fs=new Bn,Xx=new ae;function Yx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,fs.copy(x),fs.x*=-1,fs.y*=-1,fs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(fs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let x=E.program;n.uniformBlockBinding(M,x)}function c(M,E){let x=i[M.id];x===void 0&&(_(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let b=E.program;n.updateUBOMapping(M,b);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let E=u();M.__bindingPointIndex=E;let x=s.createBuffer(),b=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let E=i[M.id],x=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,A=x.length;T<A;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,v=R.length;y<v;y++){let C=R[y];if(f(C,T,y,b)===!0){let D=C.__offset,I=Array.isArray(C.value)?C.value:[C.value],O=0;for(let V=0;V<I.length;V++){let F=I[V],z=g(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,D+O,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,O),O+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,E,x,b){let T=M.value,A=E+"_"+x;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{let R=b[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return b[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(M){let E=M.uniforms,x=0,b=16;for(let A=0,R=E.length;A<R;A++){let y=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,C=y.length;v<C;v++){let D=y[v],I=Array.isArray(D.value)?D.value:[D.value];for(let O=0,V=I.length;O<V;O++){let F=I[O],z=g(F),B=x%b,J=B%z.boundary,et=B+J;x+=J,et!==0&&b-et<z.storage&&(x+=b-et),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=z.storage}}}let T=x%b;return T>0&&(x+=b-T),M.__size=x,M.__cache={},this}function g(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){let E=M.target;E.removeEventListener("dispose",m);let x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var ml=class{constructor(t={}){let{canvas:e=vd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=He;let T=0,A=0,R=null,y=-1,v=null,C=new ne,D=new ne,I=null,O=new pt(0),V=0,F=e.width,z=e.height,B=1,J=null,et=null,ot=new ne(0,0,F,z),it=new ne(0,0,F,z),gt=!1,W=new Zs,j=!1,mt=!1,at=new ae,_t=new ae,qt=new N,Lt=new ne,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function jt(){return R===null?B:1}let L=n;function je(w,H){return e.getContext(w,H)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"178"}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",$,!1),L===null){let H="webgl2";if(L=je(H,w),L===null)throw je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Qt,he,Tt,$t,Rt,zt,Ie,P,S,X,K,Q,Z,bt,ht,St,wt,tt,xt,Dt,Pt,lt,Bt,U;function dt(){Qt=new u_(L),Qt.init(),lt=new Gx(L,Qt),he=new s_(L,Qt,t,lt),Tt=new kx(L,Qt),he.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),$t=new p_(L),Rt=new Ax,zt=new zx(L,Qt,Tt,Rt,he,lt,$t),Ie=new o_(x),P=new h_(x),S=new vm(L),Bt=new n_(L,S),X=new d_(L,S,$t,Bt),K=new g_(L,X,S,$t),xt=new m_(L,he,zt),St=new r_(Rt),Q=new wx(x,Ie,P,Qt,he,Bt,St),Z=new Yx(x,Rt),bt=new Cx,ht=new Nx(Qt),tt=new e_(x,Ie,P,Tt,K,f,l),wt=new Bx(x,K,he),U=new qx(L,$t,he,Tt),Dt=new i_(L,Qt,$t),Pt=new f_(L,Qt,$t),$t.programs=Q.programs,x.capabilities=he,x.extensions=Qt,x.properties=Rt,x.renderLists=bt,x.shadowMap=wt,x.state=Tt,x.info=$t}dt();let nt=new th(x,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=Qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,H,Y=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=H,e.width=Math.floor(w*B),e.height=Math.floor(H*B),Y===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(F*B,z*B).floor()},this.setDrawingBufferSize=function(w,H,Y){F=w,z=H,B=Y,e.width=Math.floor(w*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ot)},this.setViewport=function(w,H,Y,q){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,H,Y,q),Tt.viewport(C.copy(ot).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,H,Y,q){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,H,Y,q),Tt.scissor(D.copy(it).multiplyScalar(B).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(w){Tt.setScissorTest(gt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,Y=!0){let q=0;if(w){let k=!1;if(R!==null){let rt=R.texture.format;k=rt===Ha||rt===Ba||rt===Oa}if(k){let rt=R.texture.type,ft=rt===kn||rt===Ni||rt===$s||rt===js||rt===Ua||rt===Na,Et=tt.getClearColor(),yt=tt.getClearAlpha(),Nt=Et.r,Ft=Et.g,At=Et.b;ft?(_[0]=Nt,_[1]=Ft,_[2]=At,_[3]=yt,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Nt,g[1]=Ft,g[2]=At,g[3]=yt,L.clearBufferiv(L.COLOR,0,g))}else q|=L.COLOR_BUFFER_BIT}H&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",$,!1),tt.dispose(),bt.dispose(),ht.dispose(),Rt.dispose(),Ie.dispose(),P.dispose(),K.dispose(),Bt.dispose(),U.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",eu),nt.removeEventListener("sessionend",nu),Xi.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=$t.autoReset,H=wt.enabled,Y=wt.autoUpdate,q=wt.needsUpdate,k=wt.type;dt(),$t.autoReset=w,wt.enabled=H,wt.autoUpdate=Y,wt.needsUpdate=q,wt.type=k}function $(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){let H=w.target;H.removeEventListener("dispose",Mt),Ht(H)}function Ht(w){de(w),Rt.remove(w)}function de(w){let H=Rt.get(w).programs;H!==void 0&&(H.forEach(function(Y){Q.releaseProgram(Y)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Y,q,k,rt){H===null&&(H=xe);let ft=k.isMesh&&k.matrixWorld.determinant()<0,Et=yp(w,H,Y,q,k);Tt.setMaterial(q,ft);let yt=Y.index,Nt=1;if(q.wireframe===!0){if(yt=X.getWireframeAttribute(Y),yt===void 0)return;Nt=2}let Ft=Y.drawRange,At=Y.attributes.position,Wt=Ft.start*Nt,se=(Ft.start+Ft.count)*Nt;rt!==null&&(Wt=Math.max(Wt,rt.start*Nt),se=Math.min(se,(rt.start+rt.count)*Nt)),yt!==null?(Wt=Math.max(Wt,0),se=Math.min(se,yt.count)):At!=null&&(Wt=Math.max(Wt,0),se=Math.min(se,At.count));let Se=se-Wt;if(Se<0||Se===1/0)return;Bt.setup(k,q,Et,Y,yt);let fe,oe=Dt;if(yt!==null&&(fe=S.get(yt),oe=Pt,oe.setIndex(fe)),k.isMesh)q.wireframe===!0?(Tt.setLineWidth(q.wireframeLinewidth*jt()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(k.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Tt.setLineWidth(Ct*jt()),k.isLineSegments?oe.setMode(L.LINES):k.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else k.isPoints?oe.setMode(L.POINTS):k.isSprite&&oe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ct=k._multiDrawStarts,ve=k._multiDrawCounts,Jt=k._multiDrawCount,mn=yt?S.get(yt).bytesPerElement:1,Rs=Rt.get(q).currentProgram.getUniforms();for(let gn=0;gn<Jt;gn++)Rs.setValue(L,"_gl_DrawID",gn),oe.render(Ct[gn]/mn,ve[gn])}else if(k.isInstancedMesh)oe.renderInstances(Wt,Se,k.count);else if(Y.isInstancedBufferGeometry){let Ct=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ve=Math.min(Y.instanceCount,Ct);oe.renderInstances(Wt,Se,ve)}else oe.render(Wt,Se)};function ee(w,H,Y){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,bo(w,H,Y),w.side=li,w.needsUpdate=!0,bo(w,H,Y),w.side=Kn):bo(w,H,Y)}this.compile=function(w,H,Y=null){Y===null&&(Y=w),p=ht.get(Y),p.init(H),E.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==Y&&w.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let q=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let rt=k.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){let Et=rt[ft];ee(Et,Y,k),q.add(Et)}else ee(rt,Y,k),q.add(rt)}),p=E.pop(),q},this.compileAsync=function(w,H,Y=null){let q=this.compile(w,H,Y);return new Promise(k=>{function rt(){if(q.forEach(function(ft){Rt.get(ft).currentProgram.isReady()&&q.delete(ft)}),q.size===0){k(w);return}setTimeout(rt,10)}Qt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ln=null;function ei(w){Ln&&Ln(w)}function eu(){Xi.stop()}function nu(){Xi.start()}let Xi=new $d;Xi.setAnimationLoop(ei),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){Ln=w,nt.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},nt.addEventListener("sessionstart",eu),nt.addEventListener("sessionend",nu),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,R),p=ht.get(w,E.length),p.init(H),E.push(p),_t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W.setFromProjectionMatrix(_t),mt=this.localClippingEnabled,j=St.init(this.clippingPlanes,mt),m=bt.get(w,M.length),m.init(),M.push(m),nt.enabled===!0&&nt.isPresenting===!0){let rt=x.xr.getDepthSensingMesh();rt!==null&&Ol(rt,H,-1/0,x.sortObjects)}Ol(w,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,et),ye=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ye&&tt.addToRenderList(m,w),this.info.render.frame++,j===!0&&St.beginShadows();let Y=p.state.shadowsArray;wt.render(Y,w,H),j===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,k=m.transmissive;if(p.setupLights(),H.isArrayCamera){let rt=H.cameras;if(k.length>0)for(let ft=0,Et=rt.length;ft<Et;ft++){let yt=rt[ft];su(q,k,w,yt)}ye&&tt.render(w);for(let ft=0,Et=rt.length;ft<Et;ft++){let yt=rt[ft];iu(m,w,yt,yt.viewport)}}else k.length>0&&su(q,k,w,H),ye&&tt.render(w),iu(m,w,H);R!==null&&A===0&&(zt.updateMultisampleRenderTarget(R),zt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,H),Bt.resetDefaultState(),y=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],j===!0&&St.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ol(w,H,Y,q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){q&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);let ft=K.update(w),Et=w.material;Et.visible&&m.push(w,ft,Et,Y,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let ft=K.update(w),Et=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(Et)){let yt=ft.groups;for(let Nt=0,Ft=yt.length;Nt<Ft;Nt++){let At=yt[Nt],Wt=Et[At.materialIndex];Wt&&Wt.visible&&m.push(w,ft,Wt,Y,Lt.z,At)}}else Et.visible&&m.push(w,ft,Et,Y,Lt.z,null)}}let rt=w.children;for(let ft=0,Et=rt.length;ft<Et;ft++)Ol(rt[ft],H,Y,q)}function iu(w,H,Y,q){let k=w.opaque,rt=w.transmissive,ft=w.transparent;p.setupLightsView(Y),j===!0&&St.setGlobalState(x.clippingPlanes,Y),q&&Tt.viewport(C.copy(q)),k.length>0&&To(k,H,Y),rt.length>0&&To(rt,H,Y),ft.length>0&&To(ft,H,Y),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function su(w,H,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Yn(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Js:kn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let rt=p.state.transmissionRenderTarget[q.id],ft=q.viewport||C;rt.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);let Et=x.getRenderTarget(),yt=x.getActiveCubeFace(),Nt=x.getActiveMipmapLevel();x.setRenderTarget(rt),x.getClearColor(O),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),ye&&tt.render(Y);let Ft=x.toneMapping;x.toneMapping=fi;let At=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),j===!0&&St.setGlobalState(x.clippingPlanes,q),To(w,Y,q),zt.updateMultisampleRenderTarget(rt),zt.updateRenderTargetMipmap(rt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let se=0,Se=H.length;se<Se;se++){let fe=H[se],oe=fe.object,Ct=fe.geometry,ve=fe.material,Jt=fe.group;if(ve.side===Kn&&oe.layers.test(q.layers)){let mn=ve.side;ve.side=Ge,ve.needsUpdate=!0,ru(oe,Y,q,Ct,ve,Jt),ve.side=mn,ve.needsUpdate=!0,Wt=!0}}Wt===!0&&(zt.updateMultisampleRenderTarget(rt),zt.updateRenderTargetMipmap(rt))}x.setRenderTarget(Et,yt,Nt),x.setClearColor(O,V),At!==void 0&&(q.viewport=At),x.toneMapping=Ft}function To(w,H,Y){let q=H.isScene===!0?H.overrideMaterial:null;for(let k=0,rt=w.length;k<rt;k++){let ft=w[k],Et=ft.object,yt=ft.geometry,Nt=ft.group,Ft=ft.material;Ft.allowOverride===!0&&q!==null&&(Ft=q),Et.layers.test(Y.layers)&&ru(Et,H,Y,yt,Ft,Nt)}}function ru(w,H,Y,q,k,rt){w.onBeforeRender(x,H,Y,q,k,rt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,H,Y,q,w,rt),k.transparent===!0&&k.side===Kn&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,x.renderBufferDirect(Y,H,q,k,w,rt),k.side=li,k.needsUpdate=!0,x.renderBufferDirect(Y,H,q,k,w,rt),k.side=Kn):x.renderBufferDirect(Y,H,q,k,w,rt),w.onAfterRender(x,H,Y,q,k,rt)}function bo(w,H,Y){H.isScene!==!0&&(H=xe);let q=Rt.get(w),k=p.state.lights,rt=p.state.shadowsArray,ft=k.state.version,Et=Q.getParameters(w,k.state,rt,H,Y),yt=Q.getProgramCacheKey(Et),Nt=q.programs;q.environment=w.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(w.isMeshStandardMaterial?P:Ie).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Mt),Nt=new Map,q.programs=Nt);let Ft=Nt.get(yt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===ft)return au(w,Et),Ft}else Et.uniforms=Q.getUniforms(w),w.onBeforeCompile(Et,x),Ft=Q.acquireProgram(Et,yt),Nt.set(yt,Ft),q.uniforms=Et.uniforms;let At=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=St.uniform),au(w,Et),q.needsLights=Mp(w),q.lightsStateVersion=ft,q.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMap.value=k.state.directionalShadowMap,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotShadowMap.value=k.state.spotShadowMap,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMap.value=k.state.pointShadowMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function ou(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function au(w,H){let Y=Rt.get(w);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function yp(w,H,Y,q,k){H.isScene!==!0&&(H=xe),zt.resetTextureUnits();let rt=H.fog,ft=q.isMeshStandardMaterial?H.environment:null,Et=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ts,yt=(q.isMeshStandardMaterial?P:Ie).get(q.envMap||ft),Nt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ft=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,se=!!Y.morphAttributes.color,Se=fi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=x.toneMapping);let fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=fe!==void 0?fe.length:0,Ct=Rt.get(q),ve=p.state.lights;if(j===!0&&(mt===!0||w!==v)){let Qe=w===v&&q.id===y;St.setState(q,w,Qe)}let Jt=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ve.state.version||Ct.outputColorSpace!==Et||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==yt||q.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==St.numPlanes||Ct.numIntersection!==St.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ft||Ct.morphTargets!==At||Ct.morphNormals!==Wt||Ct.morphColors!==se||Ct.toneMapping!==Se||Ct.morphTargetsCount!==oe)&&(Jt=!0):(Jt=!0,Ct.__version=q.version);let mn=Ct.currentProgram;Jt===!0&&(mn=bo(q,H,k));let Rs=!1,gn=!1,Mr=!1,me=mn.getUniforms(),Tn=Ct.uniforms;if(Tt.useProgram(mn.program)&&(Rs=!0,gn=!0,Mr=!0),q.id!==y&&(y=q.id,gn=!0),Rs||v!==w){Tt.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),Ed(at),Sd(at),me.setValue(L,"projectionMatrix",at)):me.setValue(L,"projectionMatrix",w.projectionMatrix),me.setValue(L,"viewMatrix",w.matrixWorldInverse);let rn=me.map.cameraPosition;rn!==void 0&&rn.setValue(L,qt.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,gn=!0,Mr=!0)}if(k.isSkinnedMesh){me.setOptional(L,k,"bindMatrix"),me.setOptional(L,k,"bindMatrixInverse");let Qe=k.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),me.setValue(L,"boneTexture",Qe.boneTexture,zt))}k.isBatchedMesh&&(me.setOptional(L,k,"batchingTexture"),me.setValue(L,"batchingTexture",k._matricesTexture,zt),me.setOptional(L,k,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",k._indirectTexture,zt),me.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",k._colorsTexture,zt));let bn=Y.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&xt.update(k,Y,mn),(gn||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,me.setValue(L,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Tn.envMap.value=yt,Tn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Tn.envMapIntensity.value=H.environmentIntensity),gn&&(me.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&vp(Tn,Mr),rt&&q.fog===!0&&Z.refreshFogUniforms(Tn,rt),Z.refreshMaterialUniforms(Tn,q,B,z,p.state.transmissionRenderTarget[w.id]),ir.upload(L,ou(Ct),Tn,zt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ir.upload(L,ou(Ct),Tn,zt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(L,"center",k.center),me.setValue(L,"modelViewMatrix",k.modelViewMatrix),me.setValue(L,"normalMatrix",k.normalMatrix),me.setValue(L,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Qe=q.uniformsGroups;for(let rn=0,Bl=Qe.length;rn<Bl;rn++){let Yi=Qe[rn];U.update(Yi,mn),U.bind(Yi,mn)}}return mn}function vp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Mp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,H,Y){let q=Rt.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Rt.get(w.texture).__webglTexture=H,Rt.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let Y=Rt.get(w);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};let Ep=L.createFramebuffer();this.setRenderTarget=function(w,H=0,Y=0){R=w,T=H,A=Y;let q=!0,k=null,rt=!1,ft=!1;if(w){let yt=Rt.get(w);if(yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(yt.__webglFramebuffer===void 0)zt.setupRenderTarget(w);else if(yt.__hasExternalTextures)zt.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(yt.__boundDepthTexture!==At){if(At!==null&&Rt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);let Ft=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?k=Ft[H][Y]:k=Ft[H],rt=!0):w.samples>0&&zt.useMultisampledRTT(w)===!1?k=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[Y]:k=Ft,C.copy(w.viewport),D.copy(w.scissor),I=w.scissorTest}else C.copy(ot).multiplyScalar(B).floor(),D.copy(it).multiplyScalar(B).floor(),I=gt;if(Y!==0&&(k=Ep),Tt.bindFramebuffer(L.FRAMEBUFFER,k)&&q&&Tt.drawBuffers(w,k),Tt.viewport(C),Tt.scissor(D),Tt.setScissorTest(I),rt){let yt=Rt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,yt.__webglTexture,Y)}else if(ft){let yt=Rt.get(w.texture),Nt=H;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,Y,Nt)}else if(w!==null&&Y!==0){let yt=Rt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(w,H,Y,q,k,rt,ft,Et=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Tt.bindFramebuffer(L.FRAMEBUFFER,yt);try{let Nt=w.textures[Et],Ft=Nt.format,At=Nt.type;if(!he.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-q&&Y>=0&&Y<=w.height-k&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et),L.readPixels(H,Y,q,k,lt.convert(Ft),lt.convert(At),rt))}finally{let Nt=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,H,Y,q,k,rt,ft,Et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt)if(H>=0&&H<=w.width-q&&Y>=0&&Y<=w.height-k){Tt.bindFramebuffer(L.FRAMEBUFFER,yt);let Nt=w.textures[Et],Ft=Nt.format,At=Nt.type;if(!he.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Et),L.readPixels(H,Y,q,k,lt.convert(Ft),lt.convert(At),0);let se=R!==null?Rt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,se);let Se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Md(L,Se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(Wt),L.deleteSync(Se),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,Y=0){let q=Math.pow(2,-Y),k=Math.floor(w.image.width*q),rt=Math.floor(w.image.height*q),ft=H!==null?H.x:0,Et=H!==null?H.y:0;zt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,ft,Et,k,rt),Tt.unbindTexture()};let Sp=L.createFramebuffer(),Tp=L.createFramebuffer();this.copyTextureToTexture=function(w,H,Y=null,q=null,k=0,rt=null){rt===null&&(k!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=k,k=0):rt=0);let ft,Et,yt,Nt,Ft,At,Wt,se,Se,fe=w.isCompressedTexture?w.mipmaps[rt]:w.image;if(Y!==null)ft=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,yt=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Ft=Y.min.y,At=Y.isBox3?Y.min.z:0;else{let bn=Math.pow(2,-k);ft=Math.floor(fe.width*bn),Et=Math.floor(fe.height*bn),w.isDataArrayTexture?yt=fe.depth:w.isData3DTexture?yt=Math.floor(fe.depth*bn):yt=1,Nt=0,Ft=0,At=0}q!==null?(Wt=q.x,se=q.y,Se=q.z):(Wt=0,se=0,Se=0);let oe=lt.convert(H.format),Ct=lt.convert(H.type),ve;H.isData3DTexture?(zt.setTexture3D(H,0),ve=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(zt.setTexture2DArray(H,0),ve=L.TEXTURE_2D_ARRAY):(zt.setTexture2D(H,0),ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let Jt=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rs=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),Mr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At);let me=w.isDataArrayTexture||w.isData3DTexture,Tn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let bn=Rt.get(w),Qe=Rt.get(H),rn=Rt.get(bn.__renderTarget),Bl=Rt.get(Qe.__renderTarget);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bl.__webglFramebuffer);for(let Yi=0;Yi<yt;Yi++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,k,At+Yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(H).__webglTexture,rt,Se+Yi)),L.blitFramebuffer(Nt,Ft,ft,Et,Wt,se,ft,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Rt.has(w)){let bn=Rt.get(w),Qe=Rt.get(H);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,Sp),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tp);for(let rn=0;rn<yt;rn++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,k,At+rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,k),Tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qe.__webglTexture,rt,Se+rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qe.__webglTexture,rt),k!==0?L.blitFramebuffer(Nt,Ft,ft,Et,Wt,se,ft,Et,L.COLOR_BUFFER_BIT,L.NEAREST):Tn?L.copyTexSubImage3D(ve,rt,Wt,se,Se+rn,Nt,Ft,ft,Et):L.copyTexSubImage2D(ve,rt,Wt,se,Nt,Ft,ft,Et);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ve,rt,Wt,se,Se,ft,Et,yt,oe,Ct,fe.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,rt,Wt,se,Se,ft,Et,yt,oe,fe.data):L.texSubImage3D(ve,rt,Wt,se,Se,ft,Et,yt,oe,Ct,fe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,rt,Wt,se,ft,Et,oe,Ct,fe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,rt,Wt,se,fe.width,fe.height,oe,fe.data):L.texSubImage2D(L.TEXTURE_2D,rt,Wt,se,ft,Et,oe,Ct,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rs),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mr),rt===0&&H.generateMipmaps&&L.generateMipmap(ve),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,H,Y=null,q=null,k=0){return es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,Y,q,k)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?zt.setTextureCube(w,0):w.isData3DTexture?zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?zt.setTexture2DArray(w,0):zt.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Tt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var ef={type:"change"},ih={type:"start"},sf={type:"end"},_l=new ns,nf=new An,Zx=Math.cos(70*Nc.DEG2RAD),Fe=new N,ln=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6,xl=class extends to{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Rn,this._lastTargetPosition=new N,this._quat=new Rn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ks,this._sphericalDelta=new Ks,this._scale=1,this._panOffset=new N,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new N,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=sy.bind(this),this._onMouseWheel=ty.bind(this),this._onKeyDown=ey.bind(this),this._onTouchStart=ny.bind(this),this._onTouchMove=iy.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Qx.bind(this),this._interceptControlDown=ry.bind(this),this._interceptControlUp=oy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ef),this.update(),this.state=re.NONE}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Fe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<Zx?this.object.lookAt(this.target):(nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(nf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Fe.copy(i).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Kx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $x(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Jx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=re.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=re.DOLLY;break;case Di.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=re.ROTATE}break;case Di.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ih)}function Qx(s){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ty(s){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(s.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sf))}function ey(s){this.enabled!==!1&&this._handleKeyDown(s)}function ny(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=re.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=re.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ih)}function iy(s){switch(this._trackPointer(s),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=re.NONE}}function sy(s){this.enabled!==!1&&s.preventDefault()}function ry(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yl=class extends ss{constructor(){super();let t=new ut;t.deleteAttribute("uv");let e=new Xt({side:Ge}),n=new Xt,i=new Kr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new G(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Vr(t,n,6),a=new De;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new G(t,or(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new G(t,or(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new G(t,or(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new G(t,or(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new G(t,or(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new G(t,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function or(s){let t=new ui;return t.color.setScalar(s),t}var gs={it_support:{role:"it_support",displayName:"IT Support Specialist",badgeText:"IT SUPPORT",skin:"#F3C6A5",hair:"#162038",iris:"#1D4ED8",topPrimary:"#162954",topSecondary:"#0F1D3D",pants:"#111827",pantsTrim:"#1B2436",accent:"#1D63ED",glow:"#22D3EE",glowIntensity:.95,glassesFrame:"#0F172A",shoeAccent:"#1D63ED",badgeBgRgb:[15,29,61],badgeAccentRgb:[34,211,238],hairStyle:"swept_tech",outfitStyle:"tech_hoodie",glassesStyle:"tech_rim",hasHeadset:!0,hasToolSatchel:!0,hasCargoPockets:!0,hasEarrings:!1,dressLoafers:!1,handheldProp:"laptop"},office_worker:{role:"office_worker",displayName:"Raka (Karyawan Kantor)",badgeText:"STAFF",skin:"#EAC09A",hair:"#2E1F18",iris:"#4B3621",topPrimary:"#0F766E",topSecondary:"#115E59",pants:"#334155",pantsTrim:"#1E293B",accent:"#0284C7",glow:"#38BDF8",glowIntensity:.08,glassesFrame:"#78350F",shoeAccent:"#0284C7",badgeBgRgb:[15,118,110],badgeAccentRgb:[224,242,254],hairStyle:"casual_crop",outfitStyle:"polo_vest",glassesStyle:"round_amber",hasHeadset:!1,hasToolSatchel:!1,hasCargoPockets:!1,hasEarrings:!1,dressLoafers:!1,handheldProp:"tablet"},manager:{role:"manager",displayName:"Pak Bos (Manajer Divisi)",badgeText:"MANAGER",skin:"#E6B898",hair:"#334155",iris:"#1E293B",topPrimary:"#1E293B",topSecondary:"#0F172A",pants:"#18181B",pantsTrim:"#27272A",accent:"#D97706",glow:"#F59E0B",glowIntensity:.06,glassesFrame:"#475569",shoeAccent:"#78350F",badgeBgRgb:[30,41,59],badgeAccentRgb:[245,158,11],hairStyle:"executive_part",outfitStyle:"executive_blazer",glassesStyle:"half_rim",hasHeadset:!1,hasToolSatchel:!1,hasCargoPockets:!1,hasEarrings:!1,dressLoafers:!0,handheldProp:"coffee_mug"},finance_staff:{role:"finance_staff",displayName:"Sari (Staf Admin & Keuangan)",badgeText:"FINANCE",skin:"#F6CCB0",hair:"#291A16",iris:"#3B2F2F",topPrimary:"#BE123C",topSecondary:"#881337",pants:"#1E293B",pantsTrim:"#334155",accent:"#FB7185",glow:"#FDA4AF",glowIntensity:.06,glassesFrame:"#334155",shoeAccent:"#FB7185",badgeBgRgb:[136,19,55],badgeAccentRgb:[253,164,175],hairStyle:"sleek_bun",outfitStyle:"knit_sweater",glassesStyle:"none",hasHeadset:!1,hasToolSatchel:!1,hasCargoPockets:!1,hasEarrings:!0,dressLoafers:!1,handheldProp:"clipboard"}};var ar={skin:"#F3C6A5",hair:"#162038",hoodieNavy:"#162954",hoodieDeepNavy:"#0F1D3D",cargoBlack:"#111827",cargoPocket:"#1B2436",electricBlue:"#1D63ED",cyanNeon:"#06B6D4",cyanGlow:"#22D3EE",pureWhite:"#F8FAFC",offWhite:"#E2E8F0",headsetDark:"#0B1120",glassesFrame:"#0F172A",chromeSteel:"#CBD5E1",irisBlue:"#1D4ED8",pupilDark:"#090D16",lipWarm:"#D97B6C",laptopAluminum:"#1E293B"},lr={A:["010","101","111","101","101"],C:["111","100","100","100","111"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],I:["111","010","010","010","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["111","101","111","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"]," ":["000","000","000","000","000"]};function ay(s,t,e,n,i,r,o,a,l=255){if(n<0||n>=t||i<0||i>=e)return;let h=((e-1-i)*t+n)*4;s[h]=r,s[h+1]=o,s[h+2]=a,s[h+3]=l}function Kt(s,t,e,n,i,r,o,a,l,c){for(let h=0;h<o;h++)for(let u=0;u<r;u++)ay(s,t,e,n+u,i+h,a,l,c)}function ly(s,t=[15,29,61],e=[34,211,238]){if(s==="IT SUPPORT")return cy();let n=256,i=96,r=new Uint8Array(n*i*4);Kt(r,n,i,0,0,n,i,248,250,252),Kt(r,n,i,0,0,n,16,t[0],t[1],t[2]),Kt(r,n,i,0,i-8,n,8,e[0],e[1],e[2]),Kt(r,n,i,14,28,34,48,t[0],t[1],t[2]),Kt(r,n,i,22,36,18,16,e[0],e[1],e[2]);let o=s.toUpperCase().slice(0,8),a=6,l=62;for(let h of o){let u=lr[h]??lr[" "];for(let d=0;d<5;d++)for(let f=0;f<3;f++)u[d][f]==="1"&&Kt(r,n,i,l+f*a,34+d*a,a,a,15,23,42);l+=4*a+2}let c=new Ci(r,n,i,Ze);return c.colorSpace=He,c.magFilter=ze,c.needsUpdate=!0,c}function cy(){let e=new Uint8Array(98304);Kt(e,256,96,0,0,256,96,15,29,61),Kt(e,256,96,0,0,256,6,34,211,238),Kt(e,256,96,0,90,256,6,34,211,238),Kt(e,256,96,0,0,6,96,34,211,238),Kt(e,256,96,250,0,6,96,34,211,238),Kt(e,256,96,14,18,34,60,29,99,237),Kt(e,256,96,20,26,22,8,248,250,252),Kt(e,256,96,20,42,22,8,34,211,238),Kt(e,256,96,20,58,14,8,248,250,252);let n="IT",i="SUPPORT",r=62;for(let l of n){let c=lr[l]??lr[" "],h=5;for(let u=0;u<5;u++)for(let d=0;d<3;d++)c[u][d]==="1"&&Kt(e,256,96,r+d*h,16+u*h,h,h,34,211,238);r+=4*h}Kt(e,256,96,110,24,126,9,29,99,237),Kt(e,256,96,110,24,82,9,34,211,238),r=62;let o=5;for(let l of i){let c=lr[l]??lr[" "];for(let h=0;h<5;h++)for(let u=0;u<3;u++)c[h][u]==="1"&&Kt(e,256,96,r+u*o,52+h*o,o,o,248,250,252);r+=4*o+4}let a=new Ci(e,256,96,Ze);return a.colorSpace=He,a.magFilter=ze,a.needsUpdate=!0,a}function hy(){let e=new Uint8Array(163840);Kt(e,256,160,0,0,256,160,11,18,34),Kt(e,256,160,0,0,256,22,22,41,84),Kt(e,256,160,12,7,46,8,34,211,238),Kt(e,256,160,228,7,16,8,29,99,237),Kt(e,256,160,14,34,108,44,18,30,56),Kt(e,256,160,134,34,108,44,18,30,56),Kt(e,256,160,22,44,72,8,34,211,238),Kt(e,256,160,22,60,52,8,248,250,252),Kt(e,256,160,142,44,84,8,29,99,237),Kt(e,256,160,142,60,62,8,34,211,238),Kt(e,256,160,14,90,228,56,15,23,42);for(let i=0;i<6;i++){let r=14+i*11%24;Kt(e,256,160,26+i*22,138-r,14,r,i%2===0?34:29,i%2===0?211:99,i%2===0?238:237)}Kt(e,256,160,166,104,62,6,226,232,240),Kt(e,256,160,166,118,48,6,34,211,238);let n=new Ci(e,256,160,Ze);return n.colorSpace=He,n.needsUpdate=!0,n}function rf(s="it_support"){let t=gs[s],e=ly(t.badgeText,t.badgeBgRgb,t.badgeAccentRgb),n=hy(),i=new rs({name:`CharacterSkin_${s}`,color:new pt(t.skin),roughness:.54,metalness:0,sheen:.25,sheenRoughness:.65,sheenColor:new pt("#FFE4D6")}),r=new Xt({name:`CharacterHair_${s}`,color:new pt(t.hair),roughness:.48,metalness:.06}),o=new rs({name:`CharacterTop_${s}`,color:new pt(t.topPrimary),roughness:.78,metalness:.03,sheen:.34,sheenRoughness:.72,sheenColor:new pt(t.glow)}),a=new Xt({name:`CharacterTopTrim_${s}`,color:new pt(t.topSecondary),roughness:.72,metalness:.08}),l=new Xt({name:`CharacterPants_${s}`,color:new pt(t.pants),roughness:.84,metalness:.02}),c=new Xt({name:`CharacterPantsTrim_${s}`,color:new pt(t.pantsTrim),roughness:.76,metalness:.06}),h=new Xt({name:`CharacterAccent_${s}`,color:new pt(t.accent),roughness:.34,metalness:.24}),u=new Xt({name:`CharacterGlow_${s}`,color:new pt(t.glow),emissive:new pt(t.glow),emissiveIntensity:t.glowIntensity,roughness:.24,metalness:.16}),d=new Xt({name:"PureWhiteTrim",color:new pt(ar.pureWhite),roughness:.38,metalness:.08}),f=new Xt({name:"HeadsetMatteBlack",color:new pt(ar.headsetDark),roughness:.35,metalness:.42}),_=new Xt({name:`GlassesFrame_${s}`,color:new pt(t.glassesFrame),roughness:.25,metalness:.65}),g=new rs({name:"GlassesClearLens",color:new pt("#E0F2FE"),transparent:!0,opacity:.2,roughness:.06,metalness:.05,clearcoat:1,clearcoatRoughness:.05,ior:1.45,depthWrite:!1}),m=new Xt({name:"ChromeSteel",color:new pt(ar.chromeSteel),roughness:.2,metalness:.88}),p=new Xt({name:"EyeScleraWhite",color:new pt("#FFFFFF"),roughness:.24,metalness:.02}),M=new Xt({name:`EyeIris_${s}`,color:new pt(t.iris),roughness:.22,metalness:.08}),E=new Xt({name:"EyePupil",color:new pt(ar.pupilDark),roughness:.15,metalness:.05}),x=new Xt({name:"MouthSmile",color:new pt(ar.lipWarm),roughness:.5,metalness:0}),b=new Xt({name:"TeethWhite",color:new pt("#FFFFFF"),roughness:.28,metalness:0}),T=new Xt({name:`ChestBadge_${s}`,map:e,roughness:.45,metalness:.05,emissive:new pt(t.glow),emissiveMap:e,emissiveIntensity:s==="it_support"?.22:.05}),A=new Xt({name:"LaptopChassisDark",color:new pt(ar.laptopAluminum),roughness:.3,metalness:.72}),R=new Xt({name:"LaptopDisplay",map:n,emissiveMap:n,emissive:new pt("#FFFFFF"),emissiveIntensity:.75,roughness:.2}),y=new Xt({name:"TechnicianBagNylon",color:new pt("#0D1526"),roughness:.72,metalness:.12});return{skin:i,hair:r,hoodieNavy:o,hoodieDeepNavy:a,cargoBlack:l,cargoPocket:c,electricBlue:h,cyanNeon:u,pureWhite:d,headsetDark:f,glassesFrame:_,glassesLens:g,chromeSteel:m,eyeWhite:p,irisBlue:M,pupil:E,mouthSmile:x,teethWhite:b,chestLogo:T,laptopChassis:A,laptopScreen:R,bagNylon:y,badge:T}}var Ot=.165;function of(s,t,e,n={}){let i=n.hairStyle??"swept_tech",r=n.hasEarrings??!1,o=new It;o.name="Neck",o.position.set(0,.175,0),s.add(o);let a=new te(.044,.052,.09,18);e.push(a);let l=new G(a,t.skin);l.position.set(0,.04,0),o.add(l);let c=new It;c.name="Head",c.position.set(0,.072,0),o.add(c);let h=new ge(.162,32,26);e.push(h);let u=new G(h,t.skin);u.position.set(0,Ot,0),u.scale.set(.95,1.05,.96),c.add(u);let d=new ge(.118,24,18);e.push(d);let f=new G(d,t.skin);f.position.set(0,Ot-.055,.022),f.scale.set(1,.85,.88),c.add(f);let _=new ge(.036,16,14);e.push(_);let g=r?new ge(.011,10,8):null;g&&e.push(g),[-1,1].forEach(ot=>{let it=new G(_,t.skin);if(it.name=ot>0?"LeftEar":"RightEar",it.position.set(ot*.152,Ot-.01,-.008),it.scale.set(.42,.78,.6),c.add(it),g){let gt=new G(g,t.pureWhite);gt.position.set(ot*.16,Ot-.032,-.004),c.add(gt)}});let m=new Ae(.015,.014,6,12);e.push(m);let p=new G(m,t.skin);p.name="Nose",p.position.set(0,Ot-.022,.158),p.rotation.x=.25,c.add(p);let M=new It;M.name="SmileGroup",M.position.set(0,Ot-.065,.138);let E=new Le(.028,.0042,8,22,Math.PI*.56);e.push(E);let x=new G(E,t.mouthSmile);x.rotation.z=Math.PI+Math.PI*.22,M.add(x);let b=new ut(.026,.0055,.004);e.push(b);let T=new G(b,t.teethWhite);T.position.set(0,-.014,.002),M.add(T),c.add(M);let A=new ge(.031,20,16);e.push(A);let R=new ge(.0175,16,14);e.push(R);let y=new ge(.0105,14,10);e.push(y);let v=new ge(.0045,10,8);e.push(v);function C(ot){let it=ot?1:-1,gt=new It;gt.name=ot?"LeftEye":"RightEye",gt.position.set(it*.056,Ot+.014,.138),gt.rotation.y=it*.16;let W=new G(A,t.eyeWhite);W.scale.set(.92,1.12,.42),gt.add(W);let j=new It;j.position.set(0,0,.011);let mt=new G(R,t.irisBlue);mt.scale.set(1,1.06,.48),j.add(mt);let at=new G(y,t.pupil);at.position.set(0,0,.004),at.scale.set(1,1.05,.5),j.add(at);let _t=new G(v,t.eyeWhite);return _t.position.set(.006,.008,.009),j.add(_t),gt.add(j),c.add(gt),{eyeGroup:gt,pupilGroup:j}}let D=C(!0),I=C(!1),O=new Ae(.0075,.036,6,12);e.push(O);let V=new G(O,t.hair);V.name="LeftBrow",V.rotation.z=Math.PI/2,V.position.set(.056,Ot+.058,.146),c.add(V);let F=new G(O,t.hair);F.name="RightBrow",F.rotation.z=Math.PI/2,F.position.set(-.056,Ot+.058,.146),c.add(F);let z=new It;z.name="StylizedHair";let B=new ge(.168,28,22,0,Math.PI*2,0,Math.PI*.43),J=new Ae(.03,.088,8,14);e.push(B,J);let et=new G(B,t.hair);if(et.position.set(0,Ot+.024,-.024),et.rotation.x=i==="sleek_bun"?-.22:-.34,et.scale.set(.98,1.02,1.02),z.add(et),i==="swept_tech")[{pos:[-.048,Ot+.155,.065],rot:[.58,.16,.52],scale:[1.05,.96,.7]},{pos:[.028,Ot+.162,.072],rot:[.64,-.1,.36],scale:[1.02,1.04,.68]},{pos:[.095,Ot+.135,.048],rot:[.4,-.38,.2],scale:[.85,.88,.65],highlightMat:t.electricBlue},{pos:[-.112,Ot+.118,.032],rot:[.28,.36,-.18],scale:[.76,.88,.62]},{pos:[-.145,Ot+.042,-.025],rot:[.1,0,.05],scale:[.38,.72,.55]},{pos:[.145,Ot+.042,-.025],rot:[.1,0,-.05],scale:[.38,.72,.55]},{pos:[0,Ot+.032,-.125],rot:[.15,0,0],scale:[2.1,1.32,.92]}].forEach((it,gt)=>{let W=new G(J,it.highlightMat??t.hair);W.name=`HairLock_${gt}`,W.position.set(...it.pos),W.rotation.set(...it.rot),W.scale.set(...it.scale),z.add(W)});else if(i==="casual_crop")[{pos:[-.055,Ot+.15,.088],rot:[.88,-.18,.2],scale:[1.18,.85,.76]},{pos:[.006,Ot+.156,.095],rot:[.92,.08,-.14],scale:[1.22,.82,.76]},{pos:[.068,Ot+.144,.075],rot:[.78,-.22,-.3],scale:[1.05,.78,.7]},{pos:[-.132,Ot+.06,-.005],rot:[.12,0,.08],scale:[.56,.96,.68]},{pos:[.132,Ot+.06,-.005],rot:[.12,0,-.08],scale:[.56,.96,.68]},{pos:[0,Ot+.036,-.122],rot:[.12,0,0],scale:[2.18,1.42,.98]}].forEach((it,gt)=>{let W=new G(J,t.hair);W.name=`HairLock_${gt}`,W.position.set(...it.pos),W.rotation.set(...it.rot),W.scale.set(...it.scale),z.add(W)});else if(i==="executive_part")[{pos:[.032,Ot+.154,.064],rot:[.52,-.22,-.58],scale:[1.18,.98,.66]},{pos:[-.062,Ot+.146,.06],rot:[.46,.24,.68],scale:[.95,.88,.62]},{pos:[-.144,Ot+.045,-.02],rot:[.14,0,.04],scale:[.44,.74,.62],silver:!0},{pos:[.144,Ot+.045,-.02],rot:[.14,0,-.04],scale:[.44,.74,.62],silver:!0},{pos:[0,Ot+.03,-.124],rot:[.14,0,0],scale:[2.05,1.24,.88]}].forEach((it,gt)=>{let W=new G(J,it.silver?t.chromeSteel:t.hair);W.name=`HairLock_${gt}`,W.position.set(...it.pos),W.rotation.set(...it.rot),W.scale.set(...it.scale),z.add(W)});else{[{pos:[-.064,Ot+.14,.068],rot:[.58,.28,.62],scale:[1.05,1.02,.62]},{pos:[.064,Ot+.14,.068],rot:[.58,-.28,-.62],scale:[1.05,1.02,.62]},{pos:[-.135,Ot+.04,-.025],rot:[.22,0,.1],scale:[.46,.92,.65]},{pos:[.135,Ot+.04,-.025],rot:[.22,0,-.1],scale:[.46,.92,.65]},{pos:[0,Ot+.026,-.122],rot:[.18,0,0],scale:[2.05,1.32,.94]}].forEach((mt,at)=>{let _t=new G(J,t.hair);_t.name=`HairLock_${at}`,_t.position.set(...mt.pos),_t.rotation.set(...mt.rot),_t.scale.set(...mt.scale),z.add(_t)});let it=new ge(.072,20,16),gt=new Le(.054,.012,10,20);e.push(it,gt);let W=new G(it,t.hair);W.position.set(0,Ot+.11,-.155),W.scale.set(1,.92,.95),z.add(W);let j=new G(gt,t.electricBlue);j.position.set(0,Ot+.095,-.125),j.rotation.x=.72,z.add(j)}return c.add(z),{neck:o,head:c,leftEyeGroup:D.eyeGroup,rightEyeGroup:I.eyeGroup,leftPupilGroup:D.pupilGroup,rightPupilGroup:I.pupilGroup,leftBrow:V,rightBrow:F}}function af(s,t,e,n={}){let i=n.hasHeadset??!0,r=n.glassesStyle??"tech_rim";if(r!=="none"){let D=new It;D.name="ModernGlasses",D.position.set(0,Ot+.012,.168);let I=new ut(.072,.011,.012),O=new ut(.068,.008,.01),V=new ut(.009,.052,.01),F=new Le(.032,.0055,8,22),z=new ut(.062,.044,.004),B=new ut(.03,.009,.01),J=new ut(.008,.01,.155),et=new ut(.004,.005,.038);e.push(I,O,V,F,z,B,J,et);let ot=new G(B,t.glassesFrame);ot.position.set(0,.008,.002),D.add(ot),[-1,1].forEach(it=>{let gt=new It;if(gt.position.set(it*.056,0,0),gt.rotation.y=it*.12,r==="round_amber"){let mt=new G(F,t.glassesFrame);gt.add(mt)}else{let mt=new G(I,t.glassesFrame);if(mt.position.set(0,.024,0),gt.add(mt),r==="tech_rim"){let at=new G(O,t.glassesFrame);at.position.set(0,-.022,0),gt.add(at);let _t=new G(V,t.glassesFrame);_t.position.set(it*.032,.001,0),gt.add(_t);let qt=new G(V,t.glassesFrame);qt.position.set(-it*.032,.001,0),gt.add(qt)}}let W=new G(z,t.glassesLens);W.position.set(0,.001,-.001),gt.add(W),D.add(gt);let j=new G(J,t.glassesFrame);if(j.position.set(it*.108,.012,-.072),j.rotation.y=it*-.14,D.add(j),r==="tech_rim"){let mt=new G(et,t.cyanNeon);mt.position.set(it*.098,.012,-.024),mt.rotation.y=it*-.14,D.add(mt)}}),s.add(D)}if(!i)return;let o=new It;o.name="ModernHeadset";let a=new Le(.175,.016,12,32,Math.PI*1.06);e.push(a);let l=new G(a,t.headsetDark);l.position.set(0,Ot+.005,-.012),l.rotation.z=-Math.PI*.03,o.add(l);let c=new Le(.184,.005,8,28,Math.PI*.65);e.push(c);let h=new G(c,t.cyanNeon);h.position.set(0,Ot+.005,-.012),h.rotation.z=Math.PI*.175,o.add(h);let u=new Le(.044,.015,12,24),d=new te(.048,.052,.03,24),f=new Le(.036,.0045,8,24),_=new te(.022,.022,.008,16);e.push(u,d,f,_),[-1,1].forEach(D=>{let I=new It;I.name=D>0?"LeftEarcup":"RightEarcup",I.position.set(D*.168,Ot-.008,-.008);let O=new G(u,t.cargoBlack);O.rotation.y=Math.PI/2,I.add(O);let V=new G(d,t.headsetDark);V.rotation.z=Math.PI/2,V.position.set(D*.018,0,0),I.add(V);let F=new G(f,t.cyanNeon);F.rotation.y=Math.PI/2,F.position.set(D*.034,0,0),I.add(F);let z=new G(_,t.electricBlue);z.rotation.z=Math.PI/2,z.position.set(D*.032,0,0),I.add(z),o.add(I)});let g=new ge(.007,10,8),m=new te(.0055,.0055,.088,10),p=new te(.005,.0045,.078,10),M=new Ae(.0105,.016,8,12),E=new ge(.0055,10,8);e.push(g,m,p,M,E);let x=new It;x.name="BoomMicrophone";let b=new N(.175,Ot-.025,.004),T=new N(.145,Ot-.065,.078),A=new N(.075,Ot-.074,.132);function R(D,I,O){let V=D.clone().add(I).multiplyScalar(.5),F=I.clone().sub(D).normalize(),z=new G(O,t.headsetDark);z.position.copy(V),z.quaternion.setFromUnitVectors(new N(0,1,0),F),x.add(z)}R(b,T,m);let y=new G(g,t.headsetDark);y.position.copy(T),x.add(y),R(T,A,p);let v=new G(M,t.cargoBlack);v.position.copy(A),v.rotation.set(Math.PI/2,0,1.1),x.add(v);let C=new G(E,t.cyanNeon);C.position.set(A.x-.012,A.y,A.z+.006),x.add(C),o.add(x),s.add(o)}var Gn={upperArmLength:.225,lowerArmLength:.205};function uy(s,t,e){let n=new It;n.name=s?"LeftHandMesh":"RightHandMesh";let i=s?1:-1,r=new ut(.054,.062,.032);e.push(r);let o=new G(r,t.skin);o.position.set(0,-.034,.004),n.add(o);let a=new Ae(.022,.026,6,12);e.push(a);let l=new G(a,t.skin);l.position.set(0,-.072,.008),l.scale.set(1.15,.9,.68),n.add(l);let c=new Ae(.013,.026,6,10);e.push(c);let h=new G(c,t.skin);return h.position.set(i*-.034,-.028,.018),h.rotation.set(-.3,0,i*.55),n.add(h),n}function lf(s,t,e,n={}){let i=n.outfitStyle??"tech_hoodie",r=new It;r.name="Spine",r.position.set(0,.055,0),s.add(r);let o=new Ae(.118,.14,12,24),a=new te(.128,.132,.055,22);e.push(o,a);let l=new G(o,t.hoodieNavy);l.position.set(0,.11,0),l.scale.set(1.14,1,.88),r.add(l);let c=new G(a,t.hoodieDeepNavy);c.position.set(0,.015,0),c.scale.set(1.14,1,.9),r.add(c);let h=new It;h.name="Chest",h.position.set(0,.165,0),r.add(h);let u=new Ae(.128,.16,14,24);e.push(u);let d=new G(u,t.hoodieNavy);d.position.set(0,.04,0),d.scale.set(1.22,1,.88),h.add(d);let f=new Le(.088,.018,10,24);if(e.push(f),i==="tech_hoodie"){let x=new ut(.012,.34,.01),b=new ut(.005,.34,.012),T=new Ae(.075,.12,10,16),A=new Ae(.0055,.095,6,10),R=new te(.0065,.0065,.018,10),y=new ut(.09,.01,.018);e.push(x,b,T,A,R,y);let v=new G(x,t.hoodieDeepNavy);v.position.set(0,-.02,.114),h.add(v);let C=new G(b,t.cyanNeon);C.position.set(0,-.02,.116),h.add(C);let D=new G(f,t.hoodieDeepNavy);D.rotation.x=Math.PI/2+.14,D.position.set(0,.155,-.008),h.add(D);let I=new G(T,t.hoodieNavy);I.position.set(0,.115,-.105),I.rotation.set(.32,0,Math.PI/2),I.scale.set(.85,1.15,.72),h.add(I),[-1,1].forEach(O=>{let V=new G(A,t.pureWhite);V.position.set(O*.026,.095,.116),V.rotation.z=O*-.06,h.add(V);let F=new G(R,t.cyanNeon);F.position.set(O*.029,.042,.117),h.add(F);let z=new G(y,t.cyanNeon);z.position.set(O*.135,.155,.004),z.rotation.z=O*-.22,h.add(z)})}else if(i==="polo_vest"){let x=new G(f,t.pureWhite);x.rotation.x=Math.PI/2+.14,x.position.set(0,.155,-.004),h.add(x);let b=new ut(.068,.11,.014),T=new ut(.016,.18,.012);e.push(b,T);let A=new G(b,t.pureWhite);A.position.set(0,.102,.112),h.add(A);let R=new G(T,t.electricBlue);R.position.set(-.072,.125,.109),R.rotation.z=.08,h.add(R)}else if(i==="executive_blazer"){let x=new G(f,t.pureWhite);x.rotation.x=Math.PI/2+.12,x.position.set(0,.156,-.004),h.add(x);let b=new ut(.068,.22,.014),T=new ut(.036,.23,.018),A=new ut(.028,.2,.018),R=new ut(.036,.018,.01);e.push(b,T,A,R);let y=new G(b,t.pureWhite);y.position.set(0,.045,.11),h.add(y),[-1,1].forEach(D=>{let I=new G(T,t.hoodieDeepNavy);I.position.set(D*.044,.042,.112),I.rotation.z=D*-.18,h.add(I)});let v=new G(A,t.electricBlue);v.position.set(0,.048,.116),h.add(v);let C=new G(R,t.pureWhite);C.position.set(.088,.078,.112),C.rotation.z=.12,h.add(C)}else{let x=new G(f,t.pureWhite);x.rotation.x=Math.PI/2+.14,x.position.set(0,.156,-.002),h.add(x);let b=new ut(.026,.31,.01),T=new ge(.0085,10,8),A=new ut(.015,.16,.01);e.push(b,T,A);let R=new G(b,t.hoodieDeepNavy);R.position.set(0,-.01,.114),h.add(R),[-.08,-.015,.05,.11].forEach(v=>{let C=new G(T,t.pureWhite);C.position.set(0,v,.12),h.add(C)});let y=new G(A,t.hoodieDeepNavy);y.position.set(-.072,.125,.109),h.add(y)}let _=new ut(.088,.036,.008),g=new yn(.084,.032);e.push(_,g);let m=new It;m.name="CharacterChestBadge",m.position.set(-.072,.082,.114),m.rotation.y=-.22;let p=new G(_,t.hoodieDeepNavy);m.add(p);let M=new G(g,t.chestLogo);M.position.set(0,0,.0046),m.add(M),h.add(m);function E(x){let b=x?1:-1,T=x?"Left":"Right",A=new It;A.name=`${T}Shoulder`,A.position.set(b*.178,.128,0),h.add(A);let R=new ge(.056,18,14);e.push(R);let y=new G(R,t.hoodieNavy);A.add(y);let v=new It;v.name=`${T}UpperArm`,A.add(v);let C=new te(.05,.044,Gn.upperArmLength,18);e.push(C);let D=new G(C,t.hoodieNavy);D.position.set(0,-Gn.upperArmLength/2,0),v.add(D);let I=new It;I.name=`${T}Elbow`,I.position.set(0,-Gn.upperArmLength,0),v.add(I);let O=new ge(.044,14,12);e.push(O);let V=new G(O,t.hoodieNavy);I.add(V);let F=new It;F.name=`${T}LowerArm`,I.add(F);let z=new te(.043,.036,Gn.lowerArmLength,18),B=new te(.038,.034,.042,16),J=new Le(.037,.0045,8,20);e.push(z,B,J);let et=new G(z,t.hoodieNavy);et.position.set(0,-Gn.lowerArmLength/2,0),F.add(et);let ot=new G(B,t.hoodieDeepNavy);ot.position.set(0,-Gn.lowerArmLength+.022,0),F.add(ot);let it=new G(J,t.cyanNeon);it.rotation.x=Math.PI/2,it.position.set(0,-Gn.lowerArmLength+.042,0),F.add(it);let gt=new It;gt.name=`${T}Wrist`,gt.position.set(0,-Gn.lowerArmLength,0),F.add(gt);let W=uy(x,t,e);return gt.add(W),{shoulder:A,upperArm:v,elbow:I,lowerArm:F,wrist:gt}}return{spine:r,chest:h,leftArm:E(!0),rightArm:E(!1)}}var cn={hipHeight:.84,upperLegLength:.36,lowerLegLength:.36,footHeight:.1};function dy(s,t,e,n){let i=new It;if(i.name=s?"LeftFootwear":"RightFootwear",n){let p=new ut(.11,.026,.23),M=new Ae(.052,.118,10,18),E=new ut(.108,.016,.028),x=new ut(.034,.012,.014);e.push(p,M,E,x);let b=new G(p,t.headsetDark);b.position.set(0,-.085,.042),i.add(b);let T=new G(M,t.cargoBlack);T.rotation.x=Math.PI/2,T.position.set(0,-.052,.044),T.scale.set(.98,1,.78),i.add(T);let A=new G(E,t.electricBlue);A.position.set(0,-.03,.045),i.add(A);let R=new G(x,t.chromeSteel);return R.position.set(0,-.028,.06),i.add(R),i}let r=new ut(.118,.042,.235),o=new ut(.123,.01,.228),a=new Ae(.056,.115,10,18),l=new ut(.072,.058,.036),c=new ut(.112,.054,.078),h=new ut(.122,.014,.11);e.push(r,o,a,l,c,h);let u=new G(r,t.pureWhite);u.position.set(0,-.078,.042),i.add(u);let d=new G(o,t.cyanNeon);d.position.set(0,-.068,.042),i.add(d);let f=new G(a,t.cargoBlack);f.rotation.x=Math.PI/2,f.position.set(0,-.038,.044),f.scale.set(1.04,1,.86),i.add(f);let _=new G(c,t.electricBlue);_.position.set(0,-.036,-.028),i.add(_);let g=new G(l,t.electricBlue);g.position.set(0,-.01,.035),g.rotation.x=-.35,i.add(g);let m=new G(h,t.pureWhite);return m.position.set(0,-.04,.025),m.rotation.x=-.14,i.add(m),i}function cf(s,t,e,n={}){let i=n.hasCargoPockets??!0,r=n.dressLoafers??!1,o=new It;o.name="Hips",o.position.set(0,cn.hipHeight,0),s.add(o);let a=new te(.132,.144,.115,22),l=new te(.136,.138,.04,22),c=new ut(.062,.044,.024),h=new ut(.036,.016,.026);e.push(a,l,c,h);let u=new G(a,t.cargoBlack);u.scale.set(1.1,1,.86),o.add(u);let d=new G(l,t.headsetDark);d.position.set(0,.042,0),d.scale.set(1.12,1,.88),o.add(d);let f=new G(c,t.chromeSteel);f.position.set(0,.042,.116),o.add(f);let _=new G(h,t.cyanNeon);_.position.set(0,.042,.118),o.add(_);function g(m){let p=m?1:-1,M=m?"Left":"Right",E=new It;E.name=`${M}Hip`,E.position.set(p*.092,-.02,0),o.add(E);let x=new ge(.068,16,12),b=new te(.072,.06,cn.upperLegLength,18),T=new ut(.034,.13,.095),A=new ut(.038,.032,.1),R=new ut(.01,.018,.028);e.push(x,b,T,A,R);let y=new G(x,t.cargoBlack);E.add(y);let v=new G(b,t.cargoBlack);if(v.position.set(0,-cn.upperLegLength/2,0),E.add(v),i){let et=new G(T,t.cargoPocket);et.position.set(p*.068,-.175,.006),E.add(et);let ot=new G(A,t.cargoBlack);ot.position.set(p*.07,-.115,.006),E.add(ot);let it=new G(R,t.cyanNeon);it.position.set(p*.088,-.125,.02),E.add(it)}let C=new It;C.name=`${M}Knee`,C.position.set(0,-cn.upperLegLength,0),E.add(C);let D=new ge(.056,14,12),I=new te(.058,.048,cn.lowerLegLength,18),O=new te(.05,.052,.038,16);e.push(D,I,O);let V=new G(D,t.cargoPocket);C.add(V);let F=new G(I,t.cargoBlack);F.position.set(0,-cn.lowerLegLength/2,0),C.add(F);let z=new G(O,t.hoodieDeepNavy);z.position.set(0,-cn.lowerLegLength+.022,0),C.add(z);let B=new It;B.name=`${M}Ankle`,B.position.set(0,-cn.lowerLegLength,0),C.add(B);let J=dy(m,t,e,r);return B.add(J),{hip:E,knee:C,ankle:B}}return{hips:o,leftLeg:g(!0),rightLeg:g(!1)}}function hf(s,t,e,n,i,r={}){let o=r.hasToolSatchel??!0,a=r.handheldProp??"laptop",l=new It;if(l.name="TechnicianToolBag",o){let u=new ut(.034,.44,.205);i.push(u);let d=new G(u,n.bagNylon);d.name="TechnicianCrossbodyStrap",d.position.set(.012,.005,.002),d.rotation.z=-.56,s.add(d);let f=new ut(.04,.028,.02);i.push(f);let _=new G(f,n.electricBlue);_.position.set(.048,.04,.108),_.rotation.z=-.56,s.add(_),l.position.set(-.185,-.052,.042),l.rotation.set(.06,.44,-.08);let g=new ut(.075,.19,.165),m=new ut(.082,.085,.172),p=new ut(.012,.016,.174),M=new ut(.016,.032,.036);i.push(g,m,p,M);let E=new G(g,n.bagNylon);l.add(E);let x=new G(m,n.hoodieDeepNavy);x.position.set(-.004,.058,0),l.add(x);let b=new G(p,n.cyanNeon);b.position.set(-.042,.02,0),l.add(b);let T=new G(M,n.electricBlue);T.position.set(-.043,.012,0),l.add(T);let A=new It;A.name="PrecisionScrewdriver",A.position.set(-.042,.088,.038),A.rotation.set(.14,0,-.14);let R=new Ae(.015,.075,6,12),y=new te(.016,.016,.012,12),v=new te(.0042,.0042,.095,10),C=new ut(.009,.012,.003);i.push(R,y,v,C);let D=new G(R,n.electricBlue);D.position.set(0,.048,0),A.add(D);let I=new G(y,n.cyanNeon);I.position.set(0,.015,0),A.add(I);let O=new G(v,n.chromeSteel);O.position.set(0,-.045,0),A.add(O);let V=new G(C,n.chromeSteel);V.position.set(0,-.092,0),A.add(V),l.add(A);let F=new It;F.name="USBFlashDrive",F.position.set(-.018,.048,.088),F.rotation.set(.08,.25,-.08);let z=new ut(.016,.058,.024),B=new ut(.012,.02,.018),J=new ut(.018,.012,.01);i.push(z,B,J);let et=new G(z,n.headsetDark);F.add(et);let ot=new G(B,n.chromeSteel);ot.position.set(0,.036,0),F.add(ot);let it=new G(J,n.cyanNeon);it.position.set(-.002,-.01,.004),F.add(it),l.add(F),t.add(l)}let c=new It;c.name="HandheldPropWristAlign",c.position.set(.025,-.072,.048),c.rotation.x=Math.PI/2;let h=new It;if(h.name="WorkPropMount",h.rotation.set(.1,-.26,-.08),c.add(h),a==="laptop"){let u=new ut(.26,.012,.175),d=new ut(.225,.003,.105),f=new ut(.08,.003,.048),_=new ut(.26,.17,.009),g=new yn(.236,.146),m=new ut(.085,.012,.011);i.push(u,d,f,_,g,m);let p=new G(u,n.laptopChassis);h.add(p);let M=new G(d,n.headsetDark);M.position.set(0,.007,-.016),h.add(M);let E=new G(f,n.chromeSteel);E.position.set(0,.007,.056),h.add(E);let x=new It;x.position.set(0,.006,-.084),x.rotation.x=-.34;let b=new G(_,n.laptopChassis);b.position.set(0,.085,0),x.add(b);let T=new G(g,n.laptopScreen);T.position.set(0,.086,.0052),x.add(T);let A=new G(m,n.cyanNeon);A.position.set(0,.086,-.0055),x.add(A),h.add(x)}else if(a==="tablet"){let u=new ut(.2,.012,.25),d=new yn(.176,.224);i.push(u,d);let f=new G(u,n.glassesFrame);f.rotation.x=-.24,h.add(f);let _=new G(d,n.laptopScreen);_.rotation.x=-Math.PI/2-.24,_.position.set(0,.007,0),h.add(_)}else if(a==="coffee_mug"){let u=new te(.05,.044,.115,18),d=new te(.044,.044,.012,16),f=new Le(.028,.008,8,16),_=new te(.052,.052,.016,18);i.push(u,d,f,_);let g=new G(u,n.pureWhite);g.position.set(0,.055,.02),h.add(g);let m=new G(d,n.headsetDark);m.position.set(0,.108,.02),h.add(m);let p=new G(_,n.electricBlue);p.position.set(0,.06,.02),h.add(p);let M=new G(f,n.pureWhite);M.position.set(.052,.056,.02),M.rotation.z=Math.PI/2,h.add(M)}else{let u=new ut(.21,.01,.28),d=new ut(.18,.004,.235),f=new ut(.08,.014,.024),_=new ut(.12,.005,.014);i.push(u,d,f,_);let g=new G(u,n.hoodieDeepNavy);g.rotation.x=-.22,h.add(g);let m=new G(d,n.pureWhite);m.position.set(0,.007,.008),m.rotation.x=-.22,h.add(m);let p=new G(f,n.chromeSteel);p.position.set(0,.026,-.105),p.rotation.x=-.22,h.add(p),[-.04,0,.04].forEach((M,E)=>{let x=new G(_,E===0?n.electricBlue:n.cargoPocket);x.position.set(0,.01,M),x.rotation.x=-.22,h.add(x)})}return e.add(c),{laptopMount:h,bagGroup:l}}var AT={hipHeight:cn.hipHeight,upperLegLength:cn.upperLegLength,lowerLegLength:cn.lowerLegLength,footHeight:cn.footHeight,upperArmLength:Gn.upperArmLength,lowerArmLength:Gn.lowerArmLength,headRadius:.162,totalStandingHeight:1.82};function fy(s){s.traverse(t=>{if(t instanceof G){let e=t.material&&t.material.name==="GlassesClearLens";t.castShadow=!e,t.receiveShadow=!e}})}function co(s="it_support"){let t=gs[s],e=rf(s),n=[],i=new It;i.name=`CharacterRoot_${s}`;let r=cf(i,e,n,{hasCargoPockets:t.hasCargoPockets,dressLoafers:t.dressLoafers}),o=lf(r.hips,e,n,{outfitStyle:t.outfitStyle}),a=of(o.chest,e,n,{hairStyle:t.hairStyle,hasEarrings:t.hasEarrings});af(a.head,e,n,{hasHeadset:t.hasHeadset,glassesStyle:t.glassesStyle});let l=hf(o.chest,r.hips,o.leftArm.wrist,e,n,{hasToolSatchel:t.hasToolSatchel,handheldProp:t.handheldProp});return fy(i),{root:i,hips:r.hips,spine:o.spine,chest:o.chest,neck:a.neck,head:a.head,leftShoulder:o.leftArm.shoulder,leftUpperArm:o.leftArm.upperArm,leftElbow:o.leftArm.elbow,leftLowerArm:o.leftArm.lowerArm,leftWrist:o.leftArm.wrist,rightShoulder:o.rightArm.shoulder,rightUpperArm:o.rightArm.upperArm,rightElbow:o.rightArm.elbow,rightLowerArm:o.rightArm.lowerArm,rightWrist:o.rightArm.wrist,leftHip:r.leftLeg.hip,leftKnee:r.leftLeg.knee,leftAnkle:r.leftLeg.ankle,rightHip:r.rightLeg.hip,rightKnee:r.rightLeg.knee,rightAnkle:r.rightLeg.ankle,leftEyeGroup:a.leftEyeGroup,rightEyeGroup:a.rightEyeGroup,leftPupilGroup:a.leftPupilGroup,rightPupilGroup:a.rightPupilGroup,leftBrow:a.leftBrow,rightBrow:a.rightBrow,laptopMount:l.laptopMount,bagGroup:l.bagGroup,materials:e,dispose:()=>{for(let h of n)h.dispose();let c=new Set;Object.values(e).forEach(h=>{!h||c.has(h)||(c.add(h),h.map&&h.map.dispose(),h.emissiveMap&&h.emissiveMap!==h.map&&h.emissiveMap.dispose(),h.dispose())})}}}function sh(s,t,e){s.hips.position.set(t.hipPosition[0],cn.hipHeight+t.hipPosition[1],t.hipPosition[2]),s.hips.rotation.set(...t.hips),s.spine.rotation.set(...t.spine),s.chest.rotation.set(...t.chest),s.neck.rotation.set(...t.neck),s.head.rotation.set(...t.head),s.leftShoulder.rotation.set(...t.leftShoulder),s.leftUpperArm.rotation.set(...t.leftUpperArm),s.leftElbow.rotation.set(...t.leftElbow),s.leftWrist.rotation.set(...t.leftWrist),s.rightShoulder.rotation.set(...t.rightShoulder),s.rightUpperArm.rotation.set(...t.rightUpperArm),s.rightElbow.rotation.set(...t.rightElbow),s.rightWrist.rotation.set(...t.rightWrist),s.leftHip.rotation.set(...t.leftHip),s.leftKnee.rotation.set(...t.leftKnee),s.leftAnkle.rotation.set(...t.leftAnkle),s.rightHip.rotation.set(...t.rightHip),s.rightKnee.rotation.set(...t.rightKnee),s.rightAnkle.rotation.set(...t.rightAnkle);let n=Math.max(.06,1-t.blinkAmount*.94);s.leftEyeGroup.scale.set(t.leftEyeScale[0],t.leftEyeScale[1]*n,t.leftEyeScale[2]),s.rightEyeGroup.scale.set(t.rightEyeScale[0],t.rightEyeScale[1]*n,t.rightEyeScale[2]),s.leftPupilGroup.position.set(t.pupilOffset[0],t.pupilOffset[1],.011),s.rightPupilGroup.position.set(t.pupilOffset[0],t.pupilOffset[1],.011);let i=Ot+.058;s.leftBrow.position.y=i+t.leftBrowOffsetY,s.rightBrow.position.y=i+t.rightBrowOffsetY,s.leftBrow.rotation.z=Math.PI/2+t.leftBrowTilt,s.rightBrow.rotation.z=Math.PI/2+t.rightBrowTilt,s.laptopMount.visible=e!==void 0?e:t.holdLaptop}function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function xf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hr={duration:.5,overwrite:!1,delay:0},Sh,We,_e,Pn=1e8,ce=1/Pn,dh=Math.PI*2,py=dh/4,my=0,yf=Math.sqrt,gy=Math.cos,_y=Math.sin,Oe=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},_i=function(t){return typeof t=="number"},Cl=function(t){return typeof t>"u"},Qn=function(t){return typeof t=="object"},dn=function(t){return t!==!1},Th=function(){return typeof window<"u"},vl=function(t){return Te(t)||Oe(t)},vf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,fh=/(?:-?\.?\d|\.)+/gi,bh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wh=/[+-]=-?[.\d]+/,Mf=/[^,'"\[\]\s]+/gi,xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Me,Jn,ph,Ah,En={},Tl={},Ef,Sf=function(t){return(Tl=ur(t,En))&&Je},Pl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},go=function(t,e){return!e&&console.warn(t)},Tf=function(t,e){return t&&(En[t]=e)&&Tl&&(Tl[t]=e)||En},_o=function(){return 0},yy={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},vy={suppressEvents:!0},Rh={},Bi=[],mh={},bf,hn={},oh={},uf=30,El=[],Ch="",Ph=function(t){var e=t[0],n,i;if(Qn(e)||Te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(e););n=El[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Uh(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||Ph(In(t))[0]._gsap},Ih=function(t,e,n){return(n=t[e])&&Te(n)?t[e]():Cl(n)&&t.getAttribute&&t.getAttribute(e)||n},nn=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},My=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},bl=function(){var t=Bi.length,e=Bi.slice(0),n,i;for(mh={},Bi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dh=function(t){return!!(t._initted||t._startAt||t.add)},wf=function(t,e,n,i){Bi.length&&!We&&bl(),t.render(e,n,i||!!(We&&e<0&&Dh(t))),Bi.length&&!We&&bl()},Af=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Mf).length<2?e:Oe(t)?t.trim():t},Rf=function(t){return t},Sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ey=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ur=function(t,e){for(var n in e)t[n]=e[n];return t},df=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Qn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},wl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},fo=function(t){var e=t.parent||Me,n=t.keyframes?Ey($e(t.keyframes)):Sn;if(dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Sy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Cf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Il=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ki=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},_s=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ty=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gh=function(t,e,n,i){return t._startAt&&(We?t._startAt.revert(Ml):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},by=function s(t){return!t||t._ts&&s(t.parent)},ff=function(t){return t._repeat?dr(t._tTime,t=t.duration()+t._rDelay)*t:0},dr=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},Al=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Dl=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},Ll=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Dl(t),n._dirty||_s(n,t)),t},Pf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Al(t.rawTime(),e),(!e._dur||vo(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),_s(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},jn=function(t,e,n,i){return e.parent&&ki(e),e._start=Pe((_i(n)?n:n||t!==Me?Cn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Cf(t,e,"_first","_last",t._sort?"_start":0),_h(e)||(t._recent=e),i||Pf(t,e),t._ts<0&&Ll(t,t._tTime),t},If=function(t,e){return(En.ScrollTrigger||Pl("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},Df=function(t,e,n,i,r){if(Oh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!We&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&bf!==un.frame)return Bi.push(t),t._lazy=[r,i],1},wy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},_h=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ay=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&wy(t)&&!(!t._initted&&_h(t))||(t._ts<0||t._dp._ts<0)&&!_h(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=vo(0,t._tDur,e),h=dr(l,a),t._yoyo&&h&1&&(o=1-o),h!==dr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||We||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&Df(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&gh(t,e,n,!0),t._onUpdate&&!n&&Mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ki(t,1),!n&&!We&&(Mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ry=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},fr=function(t,e,n,i){var r=t._repeat,o=Pe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Pe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ll(t,t._tTime=t._tDur*a),t.parent&&Dl(t),n||_s(t.parent,t),t},pf=function(t){return t instanceof Ve?_s(t):fr(t,t._dur)},Cy={_start:0,endTime:_o,totalDuration:_o},Cn=function s(t,e,n){var i=t.labels,r=t._recent||Cy,o=t.duration()>=Pn?r.endTime(!1):t._dur,a,l,c;return Oe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*($e(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},po=function(t,e,n){var i=_i(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Re(e[0],o,e[r+1])},zi=function(t,e){return t||t===0?e(t):e},vo=function(t,e,n){return n<t?t:n>e?e:n},Xe=function(t,e){return!Oe(t)||!(e=xy.exec(t))?"":e[1]},Py=function(t,e,n){return zi(n,function(i){return vo(t,e,i)})},xh=[].slice,Lf=function(t,e){return t&&Qn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Qn(t[0]))&&!t.nodeType&&t!==Jn},Iy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Oe(i)&&!e||Lf(i,1)?(r=n).push.apply(r,In(i)):n.push(i)})||n},In=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Oe(t)&&!n&&(ph||!pr())?xh.call((e||Ah).querySelectorAll(t),0):$e(t)?Iy(t,n):Lf(t)?xh.call(t,0):t?[t]:[]},yh=function(t){return t=In(t)[0]||go("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return In(e,n.querySelectorAll?n:n===t?go("Invalid scope")||Ah.createElement("div"):t)}},Uf=function(t){return t.sort(function(){return .5-Math.random()})},Nf=function(t){if(Te(t))return t;var e=Qn(t)?t:{each:t},n=xs(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Oe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,M,E,x,b,T,A,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Pn])[1],!y){for(A=-Pn;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*h-.5:i%y,M=y===Pn?0:l?g*u/y-.5:i/y|0,A=0,R=Pn,T=0;T<g;T++)E=T%y-p,x=M-(T/y|0),m[T]=b=c?Math.abs(c==="y"?x:E):yf(E*E+x*x),b>A&&(A=b),b<R&&(R=b);i==="random"&&Uf(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Xe(e.amount||e.each)||0,n=n&&g<0?Wf(n):n}return g=(m[d]-m.min)/m.max||0,Pe(m.b+(n?n(g):g)*m.v)+m.u}},vh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(_i(n)?0:Xe(n))}},Ff=function(t,e){var n=$e(t),i,r;return!n&&Qn(t)&&(i=n=t.radius||Pn,t.values?(t=In(t.values),(r=!_i(t[0]))&&(i*=i)):t=vh(t.increment)),zi(e,n?Te(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Pn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||_i(o)?h:h+Xe(o)}:vh(t))},Of=function(t,e,n,i){return zi($e(t)?!e:n===!0?!!(n=0):!i,function(){return $e(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Dy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Ly=function(t,e){return function(n){return t(parseFloat(n))+(e||Xe(n))}},Uy=function(t,e,n){return Hf(t,e,0,1,n)},Bf=function(t,e,n){return zi(n,function(i){return t[~~e(i)]})},Ny=function s(t,e,n){var i=e-t;return $e(t)?Bf(t,s(0,t.length),e):zi(n,function(r){return(i+(r-t)%i)%i+t})},Fy=function s(t,e,n){var i=e-t,r=i*2;return $e(t)?Bf(t,s(0,t.length-1),e):zi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},mr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Mf:fh),n+=t.substr(e,i-e)+Of(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Hf=function(t,e,n,i,r){var o=e-t,a=i-n;return zi(r,function(l){return n+((l-t)/o*a||0)})},Oy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Oe(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ur($e(t)?[]:{},t));if(!h){for(l in e)Nh.call(a,t,l,"get",e[l]);r=function(_){return kh(_,a)||(o?t.p:t)}}}return zi(n,r)},mf=function(t,e,n){var i=t.labels,r=Pn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Mn=function(t,e,n){var i=t.vars,r=i[e],o=_e,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Bi.length&&bl(),a&&(_e=a),h=l?r.apply(c,l):r.call(c),_e=o,h},ho=function(t){return ki(t),t.scrollTrigger&&t.scrollTrigger.kill(!!We),t.progress()<1&&Mn(t,"onInterrupt"),t},cr,kf=[],zf=function(t){if(t)if(t=!t.name&&t.default||t,Th()||t.headless){var e=t.name,n=Te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:_o,render:kh,add:Nh,kill:Qy,modifier:jy,rawVars:0},o={targetTest:0,get:0,getSetter:Ul,aliases:{},register:0};if(pr(),t!==i){if(hn[e])return;Sn(i,Sn(wl(t,r),o)),ur(i.prototype,ur(r,wl(t,o))),hn[i.prop=e]=i,t.targetTest&&(El.push(i),Rh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Tf(e,i),t.register&&t.register(Je,i,sn)}else kf.push(t)},le=255,uo={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},ah=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},Gf=function(t,e,n){var i=t?_i(t)?[t>>16,t>>8&le,t&le]:0:uo.black,r,o,a,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),uo[t])i=uo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(fh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=ah(l+1/3,r,o),i[1]=ah(l,r,o),i[2]=ah(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(bh),n&&i.length<4&&(i[3]=1),i}else i=t.match(fh)||uo.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/le,o=i[1]/le,a=i[2]/le,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Vf=function(t){var e=[],n=[],i=-1;return t.split(gi).forEach(function(r){var o=r.match(vs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},gf=function(t,e,n){var i="",r=(t+i).match(gi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Gf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Vf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gi,"1").split(vs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(gi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},gi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in uo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),By=/hsl[a]?\(/,Lh=function(t){var e=t.join(" "),n;if(gi.lastIndex=0,gi.test(e))return n=By.test(e),t[1]=gf(t[1],n),t[0]=gf(t[0],n,Vf(t[1])),!0},xo,un=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(m){var p=s()-i,M=m===!0,E,x,b,T;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,E=b-o,(E>0||M)&&(T=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,o+=E+(E>=r?4:r-E),x=1),M||(l=c(g)),x)for(f=0;f<a.length;f++)a[f](b,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ef&&(!ph&&Th()&&(Jn=ph=window,Ah=Jn.document||{},En.gsap=Je,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(Je.version),Sf(Tl||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),kf.forEach(zf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},xo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),xo=0,c=_o},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,M){var E=p?function(x,b,T,A){m(x,b,T,A),u.remove(E)}:m;return u.remove(m),a[M?"unshift":"push"](E),pr(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),pr=function(){return!xo&&un.wake()},Yt={},Hy=/^[\d.\-M][\d.\-,\s]/,ky=/["']/g,zy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ky,"").trim():+c,i=l.substr(a+1).trim();return e},Gy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Vy=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[zy(e[1])]:Gy(t).split(",").map(Af)):Yt._CE&&Hy.test(t)?Yt._CE("",t):n},Wf=function(t){return function(e){return 1-t(1-e)}},Xf=function s(t,e){for(var n=t._first,i;n;)n instanceof Ve?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},xs=function(t,e){return t&&(Te(t)?t:Yt[t]||Vy(t))||e},Es=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return nn(t,function(a){Yt[a]=En[a]=r,Yt[o=a.toLowerCase()]=n;for(var l in r)Yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[a+"."+l]=r[l]}),r},Yf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},lh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/dh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*_y((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Yf(a);return r=dh/r,l.config=function(c,h){return s(t,c,h)},l},ch=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Yf(n);return i.config=function(r){return s(t,r)},i};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Es(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Es("Elastic",lh("in"),lh("out"),lh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Es("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Es("Circ",function(s){return-(yf(1-s*s)-1)});Es("Sine",function(s){return s===1?1:-gy(s*py)+1});Es("Back",ch("in"),ch("out"),ch());Yt.SteppedEase=Yt.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ce;return function(a){return((i*vo(0,o,a)|0)+r)*n}}};hr.ease=Yt["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ch+=s+","+s+"Params,"});var Uh=function(t,e){this.id=my++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ih,this.set=e?e.getSetter:Ul},yo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fr(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),xo||un.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,fr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(pr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ll(this,n),!r._dp||r.parent||Pf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ff(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?dr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(vo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Dl(this),Ty(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&jn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Al(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vy);var i=We;return We=n,Dh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),We=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Cn(this,n),dn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i)),this._dur||(this._zTime=-ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ce)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Te(n)?n:Rf,a=function(){var c=i.then;i.then=null,Te(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ho(this)},s})();Sn(yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var Ve=(function(s){xf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),Me&&jn(n.parent||Me,mi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&If(mi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return po(0,arguments,this),this},e.from=function(i,r,o){return po(1,arguments,this),this},e.fromTo=function(i,r,o,a){return po(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,fo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Re(i,r,Cn(this,o),1),this},e.call=function(i,r,o){return jn(this,Re.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Re(i,o,Cn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fo(o).immediateRender=dn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,fo(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Pe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,E,x,b,T,A;if(this!==Me&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,E=this._ts,p=!E,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Pe(h%m),h===l?(g=this._repeat,d=c):(b=Pe(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=dr(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),T&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var R=T&&b&1,y=R===(T&&g&1);if(g<b&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(A?0:Pe(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Xf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ry(this,Pe(a),Pe(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!b&&(Mn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-ce);break}}f=_}else{f=this._last;for(var v=i<0?i:d;f;){if(_=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,r,o||We&&Dh(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=v?-ce:ce);break}}f=_}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-ce)._zTime=d>=a?1:-1,this._ts))return this._start=x,Dl(this),this.render(i,r,o);this._onUpdate&&!r&&Mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ki(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(_i(r)||(r=Cn(this,r,i)),!(i instanceof yo)){if($e(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Oe(i))return this.addLabel(i,r);if(Te(i))i=Re.delayedCall(0,i);else return this}return this!==i?jn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Re?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Oe(i)?this.removeLabel(i):Te(i)?this.killTweensOf(i):(i.parent===this&&Il(this,i),i===this._recent&&(this._recent=this._last),_s(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Cn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Re.delayedCall(0,r||_o,o);return a.data="isPause",this._hasPause=1,jn(this,a,Cn(this,i))},e.removePause=function(i){var r=this._first;for(i=Cn(this,i);r;)r._start===i&&r.data==="isPause"&&ki(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Oi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=In(i),l=this._first,c=_i(r),h;l;)l instanceof Re?My(l._targets,a)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Cn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Re.to(o,Sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ce,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&fr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Sn({startAt:{time:Cn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),mf(this,Cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),mf(this,Cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return _s(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_s(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Pn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;fr(o,o===Me&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Me._ts&&(wf(Me,Al(i,Me)),bf=un.frame),un.frame>=uf){uf+=fn.autoSleep||120;var r=Me._first;if((!r||!r._ts)&&fn.autoSleep&&un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||un.sleep()}}},t})(yo);Sn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wy=function(t,e,n,i,r,o,a){var l=new sn(this._pt,t,e,0,1,Hh,null,r),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=mr(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(rh)||[];u=rh.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ms(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wh.test(i)||p)&&(l.e=0),this._pt=l,l},Nh=function(t,e,n,i,r,o,a,l,c,h){Te(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Te(u)?c?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Te(u)?c?Ky:Kf:Bh,_;if(Oe(i)&&(~i.indexOf("random(")&&(i=mr(i)),i.charAt(1)==="="&&(_=Ms(d,i)+(Xe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Mh)return!isNaN(d*i)&&i!==""?(_=new sn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Jy:$f,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Pl(e,i),Wy.call(this,t,e,d,i,f,l||fn.stringFilter,c))},Xy=function(t,e,n,i,r){if(Te(t)&&(t=mo(t,r,e,n,i)),!Qn(t)||t.style&&t.nodeType||$e(t)||vf(t))return Oe(t)?mo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=mo(t[a],r,e,n,i);return o},Fh=function(t,e,n,i,r,o){var a,l,c,h;if(hn[t]&&(a=new hn[t]).init(r,a.rawVars?e[t]:Xy(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new sn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==cr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Oi,Mh,Oh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Sh,x=t.timeline,b,T,A,R,y,v,C,D,I,O,V,F,z;if(x&&(!d||!r)&&(r="none"),t._ease=xs(r,hr.ease),t._yEase=u?Wf(xs(u===!0?r:u,hr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(D=m[0]?Hi(m[0]).harness:0,F=D&&i[D.prop],b=wl(i,Rh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ml:yy),g._lazy=0),o){if(ki(t._startAt=Re.set(m,Sn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&dn(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We||!a&&!f)&&t._startAt.revert(Ml),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),A=Sn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&dn(l),immediateRender:a,stagger:0,parent:p},b),F&&(A[D.prop]=F),ki(t._startAt=Re.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We?t._startAt.revert(Ml):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&dn(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],C=y._gsap||Ph(m)[T]._gsap,t._ptLookup[T]=O={},mh[C.id]&&Bi.length&&bl(),V=M===m?T:M.indexOf(y),D&&(I=new D).init(y,F||b,t,V,M)!==!1&&(t._pt=R=new sn(t._pt,y,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(B){O[B]=R}),I.priority&&(v=1)),!D||F)for(A in b)hn[A]&&(I=Fh(A,b,t,V,y,M))?I.priority&&(v=1):O[A]=R=Nh.call(t,y,A,"get",b[A],V,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),E&&t._pt&&(Oi=t,Me.killTweensOf(y,O,t.globalTime(e)),z=!t.parent,Oi=0),t._pt&&l&&(mh[C.id]=1)}v&&zh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,d&&e<=0&&x.render(Pn,!0,!0)},Yy=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Mh=1,t.vars[e]="+=0",Oh(t,a),Mh=0,l?go(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=be(n)+Xe(u.e)),u.b&&(u.b=h.s+Xe(u.b))},qy=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=ur({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Zy=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if($e(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},mo=function(t,e,n,i,r){return Te(t)?t.call(e,n,i,r):Oe(t)&&~t.indexOf("random(")?mr(t):t},qf=Ch+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zf={};nn(qf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zf[s]=1});var Re=(function(s){xf(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Me,E=($e(n)||vf(n)?_i(n[0]):"length"in i)?[n]:In(n),x,b,T,A,R,y,v,C;if(a._targets=E.length?Ph(E):go("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||vl(c)||vl(h)){if(i=a.vars,x=a.timeline=new Ve({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:E}),x.kill(),x.parent=x._dp=mi(a),x._start=0,d||vl(c)||vl(h)){if(A=E.length,v=d&&Nf(d),Qn(d))for(R in d)~qf.indexOf(R)&&(C||(C={}),C[R]=d[R]);for(b=0;b<A;b++)T=wl(i,Zf),T.stagger=0,p&&(T.yoyoEase=p),C&&ur(T,C),y=E[b],T.duration=+mo(c,mi(a),b,y,E),T.delay=(+mo(h,mi(a),b,y,E)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),x.to(y,T,v?v(b,y,E):0),x._ease=Yt.none;x.duration()?c=h=0:a.timeline=0}else if(_){fo(Sn(x.vars.defaults,{ease:"none"})),x._ease=xs(_.ease||i.ease||"none");var D=0,I,O,V;if($e(_))_.forEach(function(F){return x.to(E,F,">")}),x.duration();else{T={};for(R in _)R==="ease"||R==="easeEach"||Zy(R,_[R],T,_.easeEach);for(R in T)for(I=T[R].sort(function(F,z){return F.t-z.t}),D=0,b=0;b<I.length;b++)O=I[b],V={ease:O.e,duration:(O.t-(b?I[b-1].t:0))/100*c},V[R]=O.v,x.to(E,V,D),D+=V.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!Sh&&(Oi=mi(a),Me.killTweensOf(E),Oi=0),jn(M,mi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Pe(M._time)&&dn(u)&&by(mi(a))&&M.data!=="nested")&&(a._tTime=-ce,a.render(Math.max(0,-h)||0)),m&&If(mi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ce&&!h?l:i<ce?0:i,d,f,_,g,m,p,M,E,x;if(!c)Ay(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Pe(u%g),u===l?(_=this._repeat,d=c):(m=Pe(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=dr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(E&&this._yEase&&Xf(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Pe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Df(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&u&&!r&&!m&&(Mn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&gh(this,i,r,o),Mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ki(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){xo||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Oh(this,c),h=this._ease(c/this._dur),Yy(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Ll(this,0),this.parent||Cf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!We),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Oi&&Oi.vars.overwrite!==!0)._first||ho(this),this.parent&&o!==this.timeline.totalDuration()&&fr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?In(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&Sy(a,l))return r==="all"&&(this._pt=0),ho(this);for(u=this._op=this._op||[],r!=="all"&&(Oe(r)&&(g={},nn(r,function(M){return g[M]=1}),r=g),r=qy(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Il(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ho(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return po(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return po(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Me.killTweensOf(i,r,o)},t})(yo);Sn(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(s){Re[s]=function(){var t=new Ve,e=xh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Bh=function(t,e,n){return t[e]=n},Kf=function(t,e,n){return t[e](n)},Ky=function(t,e,n,i){return t[e](i.fp,n)},$y=function(t,e,n){return t.setAttribute(e,n)},Ul=function(t,e){return Te(t[e])?Kf:Cl(t[e])&&t.setAttribute?$y:Bh},$f=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Jy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},jy=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Qy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Il(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zh=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},sn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||$f,this.d=l||this,this.set=c||Bh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=tv,this.m=n,this.mt=r,this.tween=i},s})();nn(Ch+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Rh[s]=1});En.TweenMax=En.TweenLite=Re;En.TimelineLite=En.TimelineMax=Ve;Me=new Ve({sortChildren:!1,defaults:hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=Lh;var ys=[],Sl={},ev=[],_f=0,nv=0,hh=function(t){return(Sl[t]||ev).map(function(e){return e()})},Eh=function(){var t=Date.now(),e=[];t-_f>2&&(hh("matchMediaInit"),ys.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Jn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),hh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_f=t,hh("matchMedia"))},Jf=(function(){function s(e,n){this.selector=n&&yh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Te(n)&&(r=i,i=n,n=Te);var o=this,a=function(){var c=_e,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=yh(r)),_e=o,u=i.apply(o,arguments),Te(u)&&o._r.push(u),_e=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Te?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Re)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),iv=(function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Qn(n)||(n={matches:n});var o=new Jf(0,r||this.scope),a=o.conditions={},l,c,h;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Jn.matchMedia(n[c]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Eh):l.addEventListener("change",Eh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Rl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return zf(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return Me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Oe(t)&&(t=In(t)[0]);var r=Hi(t||{}).get,o=n?Rf:Af;return n==="native"&&(n=""),t&&(e?o((hn[e]&&hn[e].get||r)(t,e,n,i)):function(a,l,c){return o((hn[a]&&hn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=In(t),t.length>1){var i=t.map(function(h){return Je.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=hn[e],a=Hi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;cr._pt=0,u.init(t,n?h+n:h,cr,0,[t]),u.render(1,u),cr._pt&&kh(1,cr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Je.to(t,Sn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=xs(t.ease,hr.ease)),df(hr,t||{})},config:function(t){return df(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hn[a]&&!En[a]&&go(e+" effect requires "+a+" plugin.")}),oh[e]=function(a,l,c){return n(In(a),Sn(l||{},r),c)},o&&(Ve.prototype[e]=function(a,l,c){return this.add(oh[e](a,Qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=xs(e)},parseEase:function(t,e){return arguments.length?xs(t,e):Yt},getById:function(t){return Me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,r;for(n.smoothChildTiming=dn(t.smoothChildTiming),Me.remove(n),n._dp=0,n._time=n._tTime=Me._time,i=Me._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Re&&i.vars.onComplete===i._targets[0]))&&jn(n,i,i._start-i._delay),i=r;return jn(Me,n,0),n},context:function(t,e){return t?new Jf(t,e):_e},matchMedia:function(t){return new iv(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Eh()},addEventListener:function(t,e){var n=Sl[t]||(Sl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Sl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ny,wrapYoyo:Fy,distribute:Nf,random:Of,snap:Ff,normalize:Uy,getUnit:Xe,clamp:Py,splitColor:Gf,toArray:In,selector:yh,mapRange:Hf,pipe:Dy,unitize:Ly,interpolate:Oy,shuffle:Uf},install:Sf,effects:oh,ticker:un,updateRoot:Ve.updateRoot,plugins:hn,globalTimeline:Me,core:{PropTween:sn,globals:Tf,Tween:Re,Timeline:Ve,Animation:yo,getCache:Hi,_removeLinkedListItem:Il,reverting:function(){return We},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return Sh=t}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Rl[s]=Re[s]});un.add(Ve.updateRoot);cr=Rl.to({},{duration:0});var sv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=sv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},uh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Oe(r)&&(l={},nn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}rv(a,r)}}}},Je=Rl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)We?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},uh("roundProps",vh),uh("modifiers"),uh("snap",Ff))||Rl;Re.version=Ve.version=Je.version="3.13.0";Ef=1;Th()&&pr();var ov=Yt.Power0,av=Yt.Power1,lv=Yt.Power2,cv=Yt.Power3,hv=Yt.Power4,uv=Yt.Linear,dv=Yt.Quad,fv=Yt.Cubic,pv=Yt.Quart,mv=Yt.Quint,gv=Yt.Strong,_v=Yt.Elastic,xv=Yt.Back,yv=Yt.SteppedEase,vv=Yt.Bounce,Mv=Yt.Sine,Ev=Yt.Expo,Sv=Yt.Circ;var jf,Gi,_r,qh,ws,Tv,Qf,Zh,bv=function(){return typeof window<"u"},yi={},bs=180/Math.PI,xr=Math.PI/180,gr=Math.atan2,tp=1e8,Kh=/([A-Z])/g,wv=/(left|right|width|margin|padding|x)/i,Av=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Iv=function(t,e,n){return t.style[e]=n},Dv=function(t,e,n){return t.style.setProperty(e,n)},Lv=function(t,e,n){return t._gsap[e]=n},Uv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Nv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Fv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ee="transform",pn=Ee+"Origin",Ov=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in yi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ti[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=xi(i,a)}):this.tfm[t]=o.x?o[t]:xi(i,t),t===pn&&(this.tfm.zOrigin=o.zOrigin);else return ti.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ee)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=Ee}(r||e)&&this.props.push(t,e,r[t])},hp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Kh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Zh(),(!r||!r.isStart)&&!n[Ee]&&(hp(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},up=function(t,e){var n={target:t,props:[],revert:Bv,save:Ov};return t._gsap||Je.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},dp,Wh=function(t,e){var n=Gi.createElementNS?Gi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gi.createElement(t);return n&&n.style?n:Gi.createElement(t)},Dn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Kh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,yr(e)||e,1)||""},ep="O,Moz,ms,Ms,Webkit".split(","),yr=function(t,e,n){var i=e||ws,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ep[o]+t in r););return o<0?null:(o===3?"ms":o>=0?ep[o]:"")+t},Xh=function(){bv()&&window.document&&(jf=window,Gi=jf.document,_r=Gi.documentElement,ws=Wh("div")||{style:{}},Tv=Wh("div"),Ee=yr(Ee),pn=Ee+"Origin",ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dp=!!yr("perspective"),Zh=Je.core.reverting,qh=1)},np=function(t){var e=t.ownerSVGElement,n=Wh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),_r.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),_r.removeChild(n),r},ip=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fp=function(t){var e,n;try{e=t.getBBox()}catch{e=np(t),n=1}return e&&(e.width||e.height)||n||(e=np(t)),e&&!e.width&&!e.x&&!e.y?{x:+ip(t,["x","cx","x1"])||0,y:+ip(t,["y","cy","y1"])||0,width:0,height:0}:e},pp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fp(t))},As=function(t,e){if(e){var n=t.style,i;e in yi&&e!==pn&&(e=Ee),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Kh,"-$1").toLowerCase())):n.removeAttribute(e)}},Vi=function(t,e,n,i,r,o){var a=new sn(t._pt,e,n,0,1,o?cp:lp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},sp={deg:1,rad:1,turn:1},Hv={grid:1,flex:1},Wi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ws.style,l=wv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||sp[i]||sp[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&pp(t),(f||o==="%")&&(yi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],be(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Gi||!g.appendChild)&&(g=Gi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===un.time&&!m.uncache)return be(r/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:As(t,e)}else(f||o==="%")&&!Hv[Dn(g,"display")]&&(a.position=Dn(t,"position")),g===t&&(a.position="static"),g.appendChild(ws),_=ws[h],g.removeChild(ws),a.position="absolute";return l&&f&&(m=Hi(g),m.time=un.time,m.width=g[h]),be(d?_*r/u:_&&r?u/_*r:0)},xi=function(t,e,n,i){var r;return qh||Xh(),e in ti&&e!=="transform"&&(e=ti[e],~e.indexOf(",")&&(e=e.split(",")[0])),yi[e]&&e!=="transform"?(r=So(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fl(Dn(t,pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Nl[e]&&Nl[e](t,e,n)||Dn(t,e)||Ih(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wi(t,e,r,n)+n:r},kv=function(t,e,n,i){if(!n||n==="none"){var r=yr(e,t,1),o=r&&Dn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var a=new sn(this._pt,t.style,e,0,1,Hh),l=0,c=0,h,u,d,f,_,g,m,p,M,E,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Dn(t,e)||i,g?t.style[e]=g:As(t,e)),h=[n,i],Lh(h),n=h[0],i=h[1],d=n.match(vs)||[],b=i.match(vs)||[],b.length){for(;u=vs.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+x),p=parseFloat(m),E=m.substr((p+"").length),l=vs.lastIndex-E.length,E||(E=E||fn.units[e]||x,l===i.length&&(i+=E,a.e+=E)),x!==E&&(f=Wi(t,e,g,E)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?cp:lp;return wh.test(i)&&(a.e=0),this._pt=a,a},rp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=rp[n]||n,e[1]=rp[i]||i,e.join(" ")},Gv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],yi[a]&&(l=1,a=a==="transformOrigin"?pn:Ee),As(n,a);l&&(As(n,Ee),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",So(n,1),o.uncache=1,hp(i)))}},Nl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new sn(t._pt,e,n,0,0,Gv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Eo=[1,0,0,1,0,0],mp={},gp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},op=function(t){var e=Dn(t,Ee);return gp(e)?Eo:e.substr(7).match(bh).map(be)},$h=function(t,e){var n=t._gsap||Hi(t),i=t.style,r=op(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Eo:r):(r===Eo&&!t.offsetParent&&t!==_r&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,_r.appendChild(t)),r=op(t),l?i.display=l:As(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):_r.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Yh=function(t,e,n,i,r,o){var a=t._gsap,l=r||$h(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],E=e.split(" "),x=parseFloat(E[0])||0,b=parseFloat(E[1])||0,T,A,R,y;n?l!==Eo&&(A=f*m-_*g)&&(R=x*(m/A)+b*(-g/A)+(g*M-m*p)/A,y=x*(-_/A)+b*(f/A)-(f*M-_*p)/A,x=R,b=y):(T=fp(t),x=T.x+(~E[0].indexOf("%")?x/100*T.width:x),b=T.y+(~(E[1]||E[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(p=x-c,M=b-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[pn]="0px 0px",o&&(Vi(o,a,"xOrigin",c,x),Vi(o,a,"yOrigin",h,b),Vi(o,a,"xOffset",u,a.xOffset),Vi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},So=function(t,e){var n=t._gsap||new Uh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Dn(t,pn)||"0",h,u,d,f,_,g,m,p,M,E,x,b,T,A,R,y,v,C,D,I,O,V,F,z,B,J,et,ot,it,gt,W,j;return h=u=d=g=m=p=M=E=x=0,f=_=1,n.svg=!!(t.getCTM&&pp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ee]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ee]!=="none"?l[Ee]:"")),i.scale=i.rotate=i.translate="none"),A=$h(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Yh(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,T=n.yOrigin||0,A!==Eo&&(C=A[0],D=A[1],I=A[2],O=A[3],h=V=A[4],u=F=A[5],A.length===6?(f=Math.sqrt(C*C+D*D),_=Math.sqrt(O*O+I*I),g=C||D?gr(D,C)*bs:0,M=I||O?gr(I,O)*bs+g:0,M&&(_*=Math.abs(Math.cos(M*xr))),n.svg&&(h-=b-(b*C+T*I),u-=T-(b*D+T*O))):(j=A[6],gt=A[7],et=A[8],ot=A[9],it=A[10],W=A[11],h=A[12],u=A[13],d=A[14],R=gr(j,it),m=R*bs,R&&(y=Math.cos(-R),v=Math.sin(-R),z=V*y+et*v,B=F*y+ot*v,J=j*y+it*v,et=V*-v+et*y,ot=F*-v+ot*y,it=j*-v+it*y,W=gt*-v+W*y,V=z,F=B,j=J),R=gr(-I,it),p=R*bs,R&&(y=Math.cos(-R),v=Math.sin(-R),z=C*y-et*v,B=D*y-ot*v,J=I*y-it*v,W=O*v+W*y,C=z,D=B,I=J),R=gr(D,C),g=R*bs,R&&(y=Math.cos(R),v=Math.sin(R),z=C*y+D*v,B=V*y+F*v,D=D*y-C*v,F=F*y-V*v,C=z,V=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=be(Math.sqrt(C*C+D*D+I*I)),_=be(Math.sqrt(F*F+j*j)),R=gr(V,F),M=Math.abs(R)>2e-4?R*bs:0,x=W?1/(W<0?-W:W):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gp(Dn(t,Ee)),z&&t.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=be(f),n.scaleY=be(_),n.rotation=be(g)+a,n.rotationX=be(m)+a,n.rotationY=be(p)+a,n.skewX=M+a,n.skewY=E+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[pn]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?Wv:dp?_p:Vv,n.uncache=0,n},Fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Gh=function(t,e,n){var i=Xe(e);return be(parseFloat(e)+parseFloat(Wi(t,"x",n+"px",i)))+i},Vv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_p(t,e)},Ss="0deg",Mo="0px",Ts=") ",_p=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,E=n.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(E&&(u!==Ss||h!==Ss)){var T=parseFloat(h)*xr,A=Math.sin(T),R=Math.cos(T),y;T=parseFloat(u)*xr,y=Math.cos(T),o=Gh(M,o,A*y*-E),a=Gh(M,a,-Math.sin(T)*-E),l=Gh(M,l,R*y*-E+E)}m!==Mo&&(x+="perspective("+m+Ts),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(b||o!==Mo||a!==Mo||l!==Mo)&&(x+=l!==Mo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ts),c!==Ss&&(x+="rotate("+c+Ts),h!==Ss&&(x+="rotateY("+h+Ts),u!==Ss&&(x+="rotateX("+u+Ts),(d!==Ss||f!==Ss)&&(x+="skew("+d+", "+f+Ts),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Ts),M.style[Ee]=x||"translate(0, 0)"},Wv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,E=parseFloat(o),x=parseFloat(a),b,T,A,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=xr,c*=xr,b=Math.cos(l)*u,T=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=xr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),A*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,T*=y)),b=be(b),T=be(T),A=be(A),R=be(R)):(b=u,R=d,T=A=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=Wi(f,"x",o,"px"),x=Wi(f,"y",a,"px")),(_||g||m||p)&&(E=be(E+_-(_*b+g*A)+m),x=be(x+g-(_*T+g*R)+p)),(i||r)&&(y=f.getBBox(),E=be(E+i/100*y.width),x=be(x+r/100*y.height)),y="matrix("+b+","+T+","+A+","+R+","+E+","+x+")",f.setAttribute("transform",y),M&&(f.style[Ee]=y)},Xv=function(t,e,n,i,r){var o=360,a=Oe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?bs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*tp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*tp)%o-~~(c/o)*o)),t._pt=d=new sn(t._pt,e,n,i,c,Rv),d.e=h,d.u="deg",t._props.push(n),d},ap=function(t,e){for(var n in e)t[n]=e[n];return t},Yv=function(t,e,n){var i=ap({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ee]=e,a=So(n,1),As(n,Ee),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ee],o[Ee]=e,a=So(n,1),o[Ee]=c);for(l in yi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Xe(c),_=Xe(h),u=f!==_?Wi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new sn(t._pt,a,l,u,d-u,Vh),t._pt.u=_||0,t._props.push(l));ap(a,i)};nn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Nl[t>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return xi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Jh={name:"css",register:Xh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,E,x,b,T,A,R;qh||Xh(),this.styles=this.styles||up(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(hn[g]&&Fh(g,e,n,i,t,r)))){if(f=typeof h,_=Nl[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=mr(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",gi.lastIndex=0,gi.test(c)||(m=Xe(c),p=Xe(h)),p?m!==p&&(c=Wi(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Oe(c)&&~c.indexOf("random(")&&(c=mr(c)),Xe(c+"")||c==="auto"||(c+=fn.units[g]||Xe(xi(t,g))||""),(c+"").charAt(1)==="="&&(c=xi(t,g))):c=xi(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in ti&&(g==="autoAlpha"&&(d===1&&xi(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),Vi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ti[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in yi,E){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Dn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||So(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new sn(this._pt,a,Ee,0,1,b.renderTransform,b,0,-1),x.dep=1),g==="scale")this._pt=new sn(this._pt,b,"scaleY",b.scaleY,(M?Ms(b.scaleY,M+u):u)-b.scaleY||0,Vh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(pn,0,a[pn]),h=zv(h),b.svg?Yh(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&Vi(this,b,"zOrigin",b.zOrigin,p),Vi(this,a,g,Fl(c),Fl(h)));continue}else if(g==="svgOrigin"){Yh(t,h,1,T,0,this);continue}else if(g in mp){Xv(this,b,g,d,M?Ms(d,M+h):h);continue}else if(g==="smoothOrigin"){Vi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){Yv(this,h,t);continue}}else g in a||(g=yr(g)||g);if(E||(u||u===0)&&(d||d===0)&&!Av.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Xe(h)||(g in fn.units?fn.units[g]:m),m!==p&&(d=Wi(t,g,c,p)),this._pt=new sn(this._pt,E?b:a,g,d,(M?Ms(d,M+u):u)-d,!E&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Pv:Vh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Cv);else if(g in a)kv.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,r);else if(g!=="parseTransform"){Pl(g,h);continue}E||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}A&&zh(this)},render:function(t,e){if(e.tween._time||!Zh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xi,aliases:ti,getSetter:function(t,e,n){var i=ti[e];return i&&i.indexOf(",")<0&&(e=i),e in yi&&e!==pn&&(t._gsap.x||xi(t,"x"))?n&&Qf===n?e==="scale"?Uv:Lv:(Qf=n||{})&&(e==="scale"?Nv:Fv):t.style&&!Cl(t.style[e])?Iv:~e.indexOf("-")?Dv:Ul(t,e)},core:{_removeProperty:As,_getMatrix:$h}};Je.utils.checkPrefix=yr;Je.core.getStyleSaver=up;(function(s,t,e,n){var i=nn(s+","+t+","+e,function(r){yi[r]=1});nn(t,function(r){fn.units[r]="deg",mp[r]=1}),ti[i[13]]=s+","+t,nn(n,function(r){var o=r.split(":");ti[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fn.units[s]="px"});Je.registerPlugin(Jh);var jh=Je.registerPlugin(Jh)||Je,FT=jh.core.Tween;function Vn(s,t,e){return s+(t-s)*e}function we(s,t,e){return[Vn(s[0],t[0],e),Vn(s[1],t[1],e),Vn(s[2],t[2],e)]}function qv(){return{hipPosition:[0,0,0],hips:[0,0,0],spine:[0,0,0],chest:[0,0,0],neck:[0,0,0],head:[0,0,0],leftShoulder:[0,0,0],leftUpperArm:[-.22,.14,-.14],leftElbow:[-1.36,0,0],leftWrist:[0,0,0],rightShoulder:[0,0,0],rightUpperArm:[.06,0,-.16],rightElbow:[-.28,0,0],rightWrist:[0,0,0],leftHip:[0,0,.03],leftKnee:[.02,0,0],leftAnkle:[-.02,0,0],rightHip:[0,0,-.03],rightKnee:[.02,0,0],rightAnkle:[-.02,0,0],leftEyeScale:[1,1,1],rightEyeScale:[1,1,1],leftBrowOffsetY:0,rightBrowOffsetY:0,leftBrowTilt:0,rightBrowTilt:0,pupilOffset:[0,0],blinkAmount:0,holdLaptop:!0,alertFactor:0}}function vr(s,t){let e=qv();switch(s){case"idle":{let n=Math.sin(t*2.2),i=Math.sin(t*1.15);e.hipPosition=[0,n*.008,0],e.hips=[0,-.12+i*.03,0],e.spine=[.02,.06,i*.015],e.chest=[n*.018,.05,0],e.head=[n*.025,.04+Math.sin(t*.9)*.05,i*.025],e.leftUpperArm=[-.24,.2,-.18],e.leftElbow=[-1.42+n*.03,0,0],e.leftWrist=[.05,0,0],e.rightUpperArm=[.08+n*.03,0,-.26],e.rightElbow=[-.36+n*.04,0,-.06],e.leftHip=[0,0,.045],e.rightHip=[0,0,-.045],e.holdLaptop=!0;break}case"walking":{let i=t*5.4,r=Math.sin(i),o=Math.abs(Math.cos(i));e.hipPosition=[0,o*.045-.015,0],e.hips=[0,r*.07,0],e.spine=[.06,-r*.05,0],e.head=[-.04,0,0],e.leftHip=[r*.48,0,.03],e.leftKnee=[Math.max(.05,-r*.65),0,0],e.leftAnkle=[-r*.14,0,0],e.rightHip=[-r*.48,0,-.03],e.rightKnee=[Math.max(.05,r*.65),0,0],e.rightAnkle=[r*.14,0,0],e.leftUpperArm=[-.24,.16,-.16],e.leftElbow=[-1.4,0,0],e.rightUpperArm=[r*.42,0,-.15],e.rightElbow=[-.32-Math.max(0,-r*.25),0,0],e.holdLaptop=!0;break}case"running":{let i=t*10.2,r=Math.sin(i),o=Math.abs(Math.sin(i*2));e.hipPosition=[0,o*.08-.03,0],e.spine=[.26,-r*.1,0],e.head=[-.18,0,0],e.leftHip=[r*.85,0,.04],e.leftKnee=[Math.max(.1,-r*1.15),0,0],e.rightHip=[-r*.85,0,-.04],e.rightKnee=[Math.max(.1,r*1.15),0,0],e.leftUpperArm=[-r*.78,0,.16],e.leftElbow=[-1.25,0,0],e.rightUpperArm=[r*.78,0,-.16],e.rightElbow=[-1.25,0,0],e.leftBrowOffsetY=.008,e.rightBrowOffsetY=.008,e.holdLaptop=!1;break}case"sitting":{let n=Math.sin(t*1.5)*.02;e.hipPosition=[0,-.34,-.04],e.spine=[-.04,0,0],e.head=[.05+n,Math.sin(t*.9)*.08,0],e.leftHip=[-1.42,0,.06],e.leftKnee=[1.44,0,0],e.rightHip=[-1.42,0,-.06],e.rightKnee=[1.44,0,0],e.leftUpperArm=[-.25,.16,-.16],e.leftElbow=[-1.35,0,0],e.rightUpperArm=[-.24,-.1,-.12],e.rightElbow=[-1.05,0,0],e.holdLaptop=!0;break}case"typing":{let n=Math.sin(t*18)*.14,i=Math.cos(t*19.5)*.14;e.hipPosition=[0,-.03,0],e.spine=[.18,0,0],e.head=[.22,Math.sin(t*3)*.06,0],e.leftUpperArm=[-.72,.18,.14],e.leftElbow=[-1.1+n,0,0],e.leftWrist=[n*.45,0,0],e.rightUpperArm=[-.72,-.18,-.14],e.rightElbow=[-1.1+i,0,0],e.rightWrist=[i*.45,0,0],e.pupilOffset=[Math.sin(t*4)*.004,-.005],e.holdLaptop=!1;break}case"thinking":{let n=Math.sin(t*2)*.03;e.hips=[0,-.1,0],e.spine=[.03,.06,-.03],e.head=[.08+n,-.12,.08],e.leftUpperArm=[-.24,.18,-.16],e.leftElbow=[-1.4,0,0],e.rightUpperArm=[-1.05,.25,-.14],e.rightElbow=[-1.52,0,0],e.rightWrist=[.18,0,0],e.leftBrowOffsetY=.007,e.rightBrowOffsetY=-.004,e.rightBrowTilt=-.14,e.pupilOffset=[.004,.005],e.holdLaptop=!0;break}case"pointing":{let n=Math.sin(t*5)*.05;e.hips=[0,.16,0],e.spine=[.04,.08,0],e.head=[-.03,-.14,0],e.leftUpperArm=[-.24,.18,-.18],e.leftElbow=[-1.42,0,0],e.rightShoulder=[0,0,-.08],e.rightUpperArm=[-1.32+n,-.25,-.32],e.rightElbow=[-.15,0,0],e.leftBrowOffsetY=.006,e.rightBrowOffsetY=.006,e.pupilOffset=[-.004,.002],e.holdLaptop=!0;break}case"explaining":{let n=Math.sin(t*4.5),i=Math.sin(t*2.4);e.hipPosition=[0,Math.abs(i)*.015,0],e.hips=[0,-.08,0],e.spine=[.02,i*.05,0],e.head=[i*.04,Math.sin(t*1.8)*.08,i*.03],e.leftUpperArm=[-.24,.2,-.18],e.leftElbow=[-1.42,0,0],e.rightUpperArm=[-.52+n*.22,-.2,-.26],e.rightElbow=[-1.05-n*.24,0,0],e.rightWrist=[0,-.25,n*.15],e.leftBrowOffsetY=.005,e.rightBrowOffsetY=.005,e.holdLaptop=!0;break}case"surprised":{let n=Math.sin(t*14)*.02;e.hipPosition=[0,.055,-.04],e.spine=[-.16,0,0],e.head=[-.16,n,0],e.leftUpperArm=[-.28,.2,-.18],e.leftElbow=[-1.52,0,0],e.rightUpperArm=[-1.52,-.28,-.42],e.rightElbow=[-.95,0,0],e.leftKnee=[.16,0,0],e.rightKnee=[.16,0,0],e.leftEyeScale=[1.2,1.24,1],e.rightEyeScale=[1.2,1.24,1],e.leftBrowOffsetY=.016,e.rightBrowOffsetY=.016,e.alertFactor=1,e.holdLaptop=!0;break}case"confused":{let n=Math.sin(t*2.2)*.05;e.spine=[.02,-.08,.06],e.head=[.04,.12,.22+n],e.leftUpperArm=[-.24,.18,-.16],e.leftElbow=[-1.42,0,0],e.rightUpperArm=[-1.45,.28,-.22],e.rightElbow=[-1.85,0,0],e.leftBrowOffsetY=.01,e.rightBrowOffsetY=-.005,e.leftBrowTilt=.2,e.rightBrowTilt=-.15,e.pupilOffset=[.004,.004],e.holdLaptop=!0;break}case"panicking":{let n=Math.sin(t*14)*.35,i=Math.cos(t*14)*.35,r=Math.abs(Math.sin(t*10))*.04;e.hipPosition=[Math.sin(t*8)*.02,r,0],e.spine=[-.08,Math.sin(t*11)*.1,0],e.head=[-.14,Math.sin(t*16)*.14,0],e.leftUpperArm=[-2.2+n,0,.45],e.leftElbow=[-.65,0,0],e.rightUpperArm=[-2.2+i,0,-.45],e.rightElbow=[-.65,0,0],e.leftEyeScale=[1.22,1.24,1],e.rightEyeScale=[1.22,1.24,1],e.leftBrowOffsetY=.016,e.rightBrowOffsetY=.016,e.leftBrowTilt=-.22,e.rightBrowTilt=.22,e.alertFactor=1,e.holdLaptop=!1;break}case"troubleshooting":{let n=Math.sin(t*2.6);e.hips=[0,.1,0],e.spine=[.14,n*.06,0],e.head=[.1,n*.1,-.05],e.leftUpperArm=[-.3,.22,-.16],e.leftElbow=[-1.42,0,0],e.rightUpperArm=[-.88,-.14,-.12],e.rightElbow=[-1.08+Math.sin(t*10)*.08,0,0],e.leftBrowTilt=-.14,e.rightBrowTilt=.14,e.pupilOffset=[n*.004,-.003],e.holdLaptop=!0;break}case"celebrating":{let n=Math.abs(Math.sin(t*7.2)),i=Math.sin(t*7.2);e.hipPosition=[0,n*.095,0],e.hips=[0,i*.1,i*.05],e.spine=[-.06,-i*.08,0],e.head=[-.08,i*.09,0],e.leftHip=[-n*.16,0,.06],e.leftKnee=[n*.3,0,0],e.rightHip=[-n*.16,0,-.06],e.rightKnee=[n*.3,0,0],e.leftUpperArm=[-2.35+n*.14,0,.42],e.leftElbow=[-.28,0,0],e.rightUpperArm=[-2.35+n*.14,0,-.42],e.rightElbow=[-.28,0,0],e.leftEyeScale=[1.1,1.12,1],e.rightEyeScale=[1.1,1.12,1],e.leftBrowOffsetY=.012,e.rightBrowOffsetY=.012,e.leftBrowTilt=.15,e.rightBrowTilt=-.15,e.holdLaptop=!1;break}case"facepalm":{let n=Math.sin(t*2.5);e.hipPosition=[0,-.02+n*.008,0],e.hips=[0,.05,0],e.spine=[.1+n*.03,0,0],e.neck=[.12,0,0],e.head=[.22+n*.03,0,Math.sin(t*4)*.05],e.leftUpperArm=[-.24,.18,-.16],e.leftElbow=[-1.42,0,0],e.rightUpperArm=[-1.62,.34,-.14],e.rightElbow=[-1.95,0,0],e.rightWrist=[.2,0,0],e.leftEyeScale=[1.02,.62,1],e.rightEyeScale=[1.02,.62,1],e.leftBrowOffsetY=-.008,e.rightBrowOffsetY=-.008,e.leftBrowTilt=-.2,e.rightBrowTilt=.2,e.alertFactor=.25,e.holdLaptop=!0;break}case"looking_at_screen":{let n=Math.sin(t*1.9)*.05;e.hips=[0,.16,0],e.spine=[.12,.1,0],e.head=[.06,-.22+n,0],e.leftUpperArm=[-.26,.18,-.16],e.leftElbow=[-1.4,0,0],e.rightUpperArm=[-.4,-.12,-.14],e.rightElbow=[-.85,0,0],e.pupilOffset=[-.005,.002],e.holdLaptop=!0;break}}return e}function Qh(s,t,e){let n=Math.max(0,Math.min(1,e));return{hipPosition:we(s.hipPosition,t.hipPosition,n),hips:we(s.hips,t.hips,n),spine:we(s.spine,t.spine,n),chest:we(s.chest,t.chest,n),neck:we(s.neck,t.neck,n),head:we(s.head,t.head,n),leftShoulder:we(s.leftShoulder,t.leftShoulder,n),leftUpperArm:we(s.leftUpperArm,t.leftUpperArm,n),leftElbow:we(s.leftElbow,t.leftElbow,n),leftWrist:we(s.leftWrist,t.leftWrist,n),rightShoulder:we(s.rightShoulder,t.rightShoulder,n),rightUpperArm:we(s.rightUpperArm,t.rightUpperArm,n),rightElbow:we(s.rightElbow,t.rightElbow,n),rightWrist:we(s.rightWrist,t.rightWrist,n),leftHip:we(s.leftHip,t.leftHip,n),leftKnee:we(s.leftKnee,t.leftKnee,n),leftAnkle:we(s.leftAnkle,t.leftAnkle,n),rightHip:we(s.rightHip,t.rightHip,n),rightKnee:we(s.rightKnee,t.rightKnee,n),rightAnkle:we(s.rightAnkle,t.rightAnkle,n),leftEyeScale:we(s.leftEyeScale,t.leftEyeScale,n),rightEyeScale:we(s.rightEyeScale,t.rightEyeScale,n),leftBrowOffsetY:Vn(s.leftBrowOffsetY,t.leftBrowOffsetY,n),rightBrowOffsetY:Vn(s.rightBrowOffsetY,t.rightBrowOffsetY,n),leftBrowTilt:Vn(s.leftBrowTilt,t.leftBrowTilt,n),rightBrowTilt:Vn(s.rightBrowTilt,t.rightBrowTilt,n),pupilOffset:[Vn(s.pupilOffset[0],t.pupilOffset[0],n),Vn(s.pupilOffset[1],t.pupilOffset[1],n)],blinkAmount:Vn(s.blinkAmount,t.blinkAmount,n),holdLaptop:n>=.5?t.holdLaptop:s.holdLaptop,alertFactor:Vn(s.alertFactor,t.alertFactor,n)}}function xp(s,t="power2.inOut"){let e=Math.max(0,Math.min(1,s)),n=jh.parseEase(t);return n?n(e):e}function Zv(s){let e=(s%3.4+3.4)%3.4,n=1.6,i=.16;if(e>=n&&e<=n+i){let r=(e-n)/i;return Math.sin(r*Math.PI)}return 0}function tu(s,t){let e=t.speed??1,n=s*e,i;if(t.cues&&t.cues.length>0){let c=[...t.cues].sort((f,_)=>f.fromSec-_.fromSec),h=0;for(let f=0;f<c.length;f++)s>=c[f].fromSec&&(h=f);let u=c[h],d=vr(u.animation,n);if(h>0){let f=c[h-1],_=u.blendSec??.28,g=s-u.fromSec;if(g<_&&_>0){let m=vr(f.animation,n),p=g/_,M=xp(p,"power2.inOut");i=Qh(m,d,M)}else i=d}else i=d}else if(t.previousAnimation&&t.transitionProgress!==void 0&&t.transitionProgress<1){let c=vr(t.previousAnimation,n),h=vr(t.animation,n),u=xp(t.transitionProgress,"power2.inOut");i=Qh(c,h,u)}else i=vr(t.animation,n);let r=Zv(s),o=i.alertFactor>.7?0:Math.max(i.blinkAmount,r),a=t.headYaw??0,l=t.headPitch??0;return{...i,blinkAmount:o,holdLaptop:t.holdLaptop!==void 0?t.holdLaptop:i.holdLaptop,head:[i.head[0]+l,i.head[1]+a,i.head[2]]}}function Kv(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,256*.08,256/2,256/2,256*.48);n.addColorStop(0,"rgba(6, 12, 26, 0.55)"),n.addColorStop(.55,"rgba(15, 23, 42, 0.22)"),n.addColorStop(1,"rgba(15, 23, 42, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);let i=new Xr(t);return i.needsUpdate=!0,i}function $v(s){let t=new It;t.name="FuturisticServerRoom";let e=new yn(24,24),n=new Xt({color:"#0C1528",roughness:.42,metalness:.28}),i=new G(e,n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let r=new Qr(20,20,"#1D63ED","#162442");r.position.y=.002,r.material.transparent=!0,r.material.opacity=.28,t.add(r);let o=new te(.95,1.02,.035,48),a=new Xt({color:"#14223F",roughness:.45,metalness:.35}),l=new G(o,a);l.position.set(0,.0175,0),l.receiveShadow=!0,t.add(l);let c=new Le(.96,.012,10,64),h=new Xt({color:"#22D3EE",emissive:"#06B6D4",emissiveIntensity:1.15,roughness:.2}),u=new G(c,h);u.rotation.x=Math.PI/2,u.position.set(0,.036,0),t.add(u);let d=Kv(),f=new yn(1.1,1.1),_=new ui({map:d,transparent:!0,depthWrite:!1}),g=new G(f,_);g.rotation.x=-Math.PI/2,g.position.set(0,.037,.02),t.add(g);let m=[],p=new ut(.86,2.55,.72),M=new Xt({color:"#0F172A",roughness:.48,metalness:.35}),E=new ut(.92,2.7,.08),x=new Xt({color:"#E2E8F0",roughness:.55,metalness:.14}),b=new ut(.018,2.38,.02),T=new ut(.72,.24,.024),A=new Xt({color:"#1E293B",roughness:.4,metalness:.4}),R=new ut(.055,.018,.014),y=[-.62,-.32,0,.32,.62],v=3.8;return y.forEach((C,D)=>{let I=new It,O=Math.sin(C)*v,V=-Math.cos(C)*v+.3;I.position.set(O,0,V),I.rotation.y=-C;let F=new G(E,x);F.position.set(0,1.35,-.38),I.add(F);let z=new G(p,M);z.position.set(0,1.275,0),z.castShadow=!0,z.receiveShadow=!0,I.add(z),[-.4,.4].forEach(B=>{let J=new G(b,h);J.position.set(B,1.28,.362),I.add(J)}),[.45,.85,1.25,1.65,2.05].forEach((B,J)=>{let et=new G(T,A);et.position.set(0,B,.365),I.add(et);let ot=new Xt({color:"#22D3EE",emissive:J%2===0?"#06B6D4":"#1D63ED",emissiveIntensity:.9}),it=new G(R,ot);it.position.set(-.24+D%2*.08,B,.38),it.userData={phase:D*1.1+J*.7},m.push(it),I.add(it)}),t.add(I)}),s.add(t),{floorMat:n,floorGrid:r,update:C=>{for(let D of m){let I=D.material,O=.45+.55*Math.sin(C*3.2+(D.userData.phase??0));I.emissiveIntensity=.3+O*.95}}}}function Jv(){let s=document.getElementById("canvas-mount"),t=new ss;t.background=new pt("#0A1326"),t.fog=new is("#0A1326",6.5,15.5);let e=new ke(36,window.innerWidth/window.innerHeight,.1,50);e.position.set(.55,1.32,2.95);let n=new ml({antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Ma,n.toneMapping=Ca,n.toneMappingExposure=1.08,s.appendChild(n.domElement);let i=new sr(n);t.environment=i.fromScene(new yl,.04).texture,t.environmentIntensity=.45;let r=new Jr("#E0F2FE",.72);t.add(r);let o=new Zr("#F8FAFC","#0F172A",.65);t.add(o);let a=new ls("#FFFFFF",2.15);a.position.set(2.8,5.2,3.8),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=.5,a.shadow.camera.far=14,a.shadow.camera.left=-2.2,a.shadow.camera.right=2.2,a.shadow.camera.top=2.6,a.shadow.camera.bottom=-.5,a.shadow.bias=-5e-4,a.shadow.radius=4,t.add(a);let l=new ls("#38BDF8",.85);l.position.set(-3.2,2.4,2.5),t.add(l);let c=new ls("#22D3EE",1.75);c.position.set(-1.8,3.4,-3.4),t.add(c);let h=$v(t),u=new It;t.add(u);let d={it_support:co("it_support"),office_worker:co("office_worker"),manager:co("manager"),finance_staff:co("finance_staff")};Object.values(d).forEach(z=>u.add(z.root));let f=new xl(e,n.domElement);f.target.set(0,.98,0),f.enableDamping=!0,f.dampingFactor=.06,f.minDistance=1.65,f.maxDistance=6.2,f.maxPolarAngle=Math.PI*.49,f.minPolarAngle=Math.PI*.14,f.autoRotate=!1,f.autoRotateSpeed=1.25,f.update();let _="it_support",g=!1,m="idle",p="idle",M=-10,E,x=-1,b=!1,T=document.getElementById("viewer-char-title");function A(){g?(d.it_support.root.visible=!0,d.it_support.root.position.set(.32,.035,.08),d.it_support.root.rotation.set(0,-.34,0),d.office_worker.root.visible=!0,d.office_worker.root.position.set(-.34,.035,.14),d.office_worker.root.rotation.set(0,.38,0),d.manager.root.visible=!0,d.manager.root.position.set(-.78,.035,-.26),d.manager.root.rotation.set(0,.56,0),d.finance_staff.root.visible=!0,d.finance_staff.root.position.set(.76,.035,-.24),d.finance_staff.root.rotation.set(0,-.52,0),T&&(T.textContent="INTERAKSI TIM KANTOR (4 KARAKTER 3D)")):(Object.keys(d).forEach(z=>{let B=d[z];B.root.visible=z===_,B.root.position.set(0,.035,0),B.root.rotation.set(0,0,0)}),T&&(T.textContent=`${gs[_].displayName.toUpperCase()} 3D`))}A();let R=new jr,y={it_support:"explaining",office_worker:"panicking",manager:"confused",finance_staff:"pointing"};function v(){requestAnimationFrame(v);let z=R.getElapsedTime();if(g)Object.keys(d).forEach((B,J)=>{let et=tu(z+J*.45,{animation:y[B],holdLaptop:E});if(z<x){let ot=1-(x-z)/.18;et.blinkAmount=Math.sin(ot*Math.PI)}sh(d[B],et,E)});else{let B=z-M,J=M>0?Math.min(1,B/.35):1,et=tu(z,{animation:m,previousAnimation:p,transitionProgress:J,holdLaptop:E});if(z<x){let ot=1-(x-z)/.18;et.blinkAmount=Math.sin(ot*Math.PI)}sh(d[_],et,E)}h.update(z),f.update(),n.render(t,e)}v(),document.querySelectorAll("[data-role]").forEach(z=>{z.addEventListener("click",()=>{let B=z.dataset.role;!B||!gs[B]||(g=!1,_=B,A(),e.position.set(.55,1.32,2.95),f.target.set(0,.98,0),f.update(),document.querySelectorAll("[data-role]").forEach(J=>J.classList.remove("active")),z.classList.add("active"),document.getElementById("btn-interaction")?.classList.remove("active"))})});let C=document.getElementById("btn-interaction");C?.addEventListener("click",()=>{g=!g,A(),C.classList.toggle("active",g),g?(e.position.set(.35,1.56,3.85),f.target.set(0,.98,0),f.update()):(e.position.set(.55,1.32,2.95),f.target.set(0,.98,0),f.update())}),document.querySelectorAll("[data-anim]").forEach(z=>{z.addEventListener("click",()=>{let B=z.dataset.anim;!B||B===m||(p=m,m=B,M=R.getElapsedTime(),document.querySelectorAll("[data-anim]").forEach(J=>J.classList.remove("active")),z.classList.add("active"))})});let D=document.getElementById("btn-autorotate");D?.addEventListener("click",()=>{f.autoRotate=!f.autoRotate,D.classList.toggle("active",f.autoRotate)}),document.getElementById("btn-blink")?.addEventListener("click",()=>{x=R.getElapsedTime()+.18});let O=document.getElementById("btn-laptop");O?.addEventListener("click",()=>{E=E===void 0?!1:!E,O.textContent=E===!1?"Prop: Off":"Prop: Auto"});let V=document.getElementById("btn-theme");V?.addEventListener("click",()=>{b=!b,b?(t.background=new pt("#EDF2F8"),t.fog=new is("#EDF2F8",6.5,16),h.floorMat.color.set("#DCE5F0"),r.intensity=1.05,o.intensity=.95,V.textContent="Server Room: Bright"):(t.background=new pt("#0A1326"),t.fog=new is("#0A1326",6.5,15.5),h.floorMat.color.set("#0C1528"),r.intensity=.72,o.intensity=.65,V.textContent="Server Room: Futuristic")}),document.getElementById("btn-reset")?.addEventListener("click",()=>{e.position.set(g?.35:.55,g?1.56:1.32,g?3.85:2.95),f.target.set(0,.98,0),f.update()}),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)})}Jv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
