var E=Uint8Array,P=Uint16Array,yr=Int32Array,ur=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tr=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zr=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tr=function(r,a){for(var n=new P(31),e=0;e<31;++e)n[e]=a+=1<<r[e-1];for(var v=new yr(n[30]),e=1;e<30;++e)for(var f=n[e];f<n[e+1];++f)v[f]=f-n[e]<<5|e;return{b:n,r:v}},Cr=Tr(ur,2),Er=Cr.b,Mr=Cr.r;Er[28]=258,Mr[258]=28;var Ur=Tr(tr,0),Or=Ur.b,Fr=Ur.r,br=new P(32768);for(var g=0;g<32768;++g){var _=(g&43690)>>1|(g&21845)<<1;_=(_&52428)>>2|(_&13107)<<2,_=(_&61680)>>4|(_&3855)<<4,br[g]=((_&65280)>>8|(_&255)<<8)>>1}var X=function(r,a,n){for(var e=r.length,v=0,f=new P(a);v<e;++v)r[v]&&++f[r[v]-1];var o=new P(a);for(v=1;v<a;++v)o[v]=o[v-1]+f[v-1]<<1;var h;if(n){h=new P(1<<a);var w=15-a;for(v=0;v<e;++v)if(r[v])for(var y=v<<4|r[v],i=a-r[v],l=o[r[v]-1]++<<i,t=l|(1<<i)-1;l<=t;++l)h[br[l]>>w]=y}else for(h=new P(e),v=0;v<e;++v)r[v]&&(h[v]=br[o[r[v]-1]++]>>15-r[v]);return h},j=new E(288);for(var g=0;g<144;++g)j[g]=8;for(var g=144;g<256;++g)j[g]=9;for(var g=256;g<280;++g)j[g]=7;for(var g=280;g<288;++g)j[g]=8;var fr=new E(32);for(var g=0;g<32;++g)fr[g]=5;var Gr=X(j,9,0),Hr=X(j,9,1),Jr=X(fr,5,0),Kr=X(fr,5,1),hr=function(r){for(var a=r[0],n=1;n<r.length;++n)r[n]>a&&(a=r[n]);return a},V=function(r,a,n){var e=a/8|0;return(r[e]|r[e+1]<<8)>>(a&7)&n},wr=function(r,a){var n=a/8|0;return(r[n]|r[n+1]<<8|r[n+2]<<16)>>(a&7)},kr=function(r){return(r+7)/8|0},Dr=function(r,a,n){return(n==null||n>r.length)&&(n=r.length),new E(r.subarray(a,n))},Nr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(r,a,n){var e=new Error(a||Nr[r]);if(e.code=r,Error.captureStackTrace&&Error.captureStackTrace(e,N),!n)throw e;return e},Ir=function(r,a,n,e){var v=r.length,f=0;if(!v||a.f&&!a.l)return n||new E(0);var o=!n,h=o||a.i!=2,w=a.i;o&&(n=new E(v*3));var y=function(ar){var nr=n.length;if(ar>nr){var d=new E(Math.max(nr*2,ar));d.set(n),n=d}},i=a.f||0,l=a.p||0,t=a.b||0,z=a.l,U=a.d,M=a.m,s=a.n,R=v*8;do{if(!z){i=V(r,l,1);var G=V(r,l+1,3);if(l+=3,G)if(G==1)z=Hr,U=Kr,M=9,s=5;else if(G==2){var q=V(r,l,31)+257,A=V(r,l+10,15)+4,c=q+V(r,l+5,31)+1;l+=14;for(var u=new E(c),S=new E(19),k=0;k<A;++k)S[zr[k]]=V(r,l+k*3,7);l+=A*3;for(var I=hr(S),$=(1<<I)-1,H=X(S,I,1),k=0;k<c;){var B=H[V(r,l,$)];l+=B&15;var F=B>>4;if(F<16)u[k++]=F;else{var T=0,b=0;for(F==16?(b=3+V(r,l,3),l+=2,T=u[k-1]):F==17?(b=3+V(r,l,7),l+=3):F==18&&(b=11+V(r,l,127),l+=7);b--;)u[k++]=T}}var O=u.subarray(0,q),C=u.subarray(q);M=hr(O),s=hr(C),z=X(O,M,1),U=X(C,s,1)}else N(1);else{var F=kr(l)+4,m=r[F-4]|r[F-3]<<8,D=F+m;if(D>v){w&&N(0);break}h&&y(t+m),n.set(r.subarray(F,D),t),a.b=t+=m,a.p=l=D*8,a.f=i;continue}if(l>R){w&&N(0);break}}h&&y(t+131072);for(var rr=(1<<M)-1,Q=(1<<s)-1,Y=l;;Y=l){var T=z[wr(r,l)&rr],J=T>>4;if(l+=T&15,l>R){w&&N(0);break}if(T||N(2),J<256)n[t++]=J;else if(J==256){Y=l,z=null;break}else{var K=J-254;if(J>264){var k=J-257,x=ur[k];K=V(r,l,(1<<x)-1)+Er[k],l+=x}var W=U[wr(r,l)&Q],L=W>>4;W||N(3),l+=W&15;var C=Or[L];if(L>3){var x=tr[L];C+=wr(r,l)&(1<<x)-1,l+=x}if(l>R){w&&N(0);break}h&&y(t+131072);var p=t+K;if(t<C){var lr=f-C,or=Math.min(C,p);for(lr+t<0&&N(3);t<or;++t)n[t]=e[lr+t]}for(;t<p;++t)n[t]=n[t-C]}}a.l=z,a.p=Y,a.b=t,a.f=i,z&&(i=1,a.m=M,a.d=U,a.n=s)}while(!i);return t!=n.length&&o?Dr(n,0,t):n.subarray(0,t)},Z=function(r,a,n){n<<=a&7;var e=a/8|0;r[e]|=n,r[e+1]|=n>>8},er=function(r,a,n){n<<=a&7;var e=a/8|0;r[e]|=n,r[e+1]|=n>>8,r[e+2]|=n>>16},gr=function(r,a){for(var n=[],e=0;e<r.length;++e)r[e]&&n.push({s:e,f:r[e]});var v=n.length,f=n.slice();if(!v)return{t:qr,l:0};if(v==1){var o=new E(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(D,q){return D.f-q.f}),n.push({s:-1,f:25001});var h=n[0],w=n[1],y=0,i=1,l=2;for(n[0]={s:-1,f:h.f+w.f,l:h,r:w};i!=v-1;)h=n[n[y].f<n[l].f?y++:l++],w=n[y!=i&&n[y].f<n[l].f?y++:l++],n[i++]={s:-1,f:h.f+w.f,l:h,r:w};for(var t=f[0].s,e=1;e<v;++e)f[e].s>t&&(t=f[e].s);var z=new P(t+1),U=xr(n[i-1],z,0);if(U>a){var e=0,M=0,s=U-a,R=1<<s;for(f.sort(function(q,A){return z[A.s]-z[q.s]||q.f-A.f});e<v;++e){var G=f[e].s;if(z[G]>a)M+=R-(1<<U-z[G]),z[G]=a;else break}for(M>>=s;M>0;){var F=f[e].s;z[F]<a?M-=1<<a-z[F]++-1:++e}for(;e>=0&&M;--e){var m=f[e].s;z[m]==a&&(--z[m],++M)}U=a}return{t:new E(z),l:U}},xr=function(r,a,n){return r.s==-1?Math.max(xr(r.l,a,n+1),xr(r.r,a,n+1)):a[r.s]=n},Ar=function(r){for(var a=r.length;a&&!r[--a];);for(var n=new P(++a),e=0,v=r[0],f=1,o=function(w){n[e++]=w},h=1;h<=a;++h)if(r[h]==v&&h!=a)++f;else{if(!v&&f>2){for(;f>138;f-=138)o(32754);f>2&&(o(f>10?f-11<<5|28690:f-3<<5|12305),f=0)}else if(f>3){for(o(v),--f;f>6;f-=6)o(8304);f>2&&(o(f-3<<5|8208),f=0)}for(;f--;)o(v);f=1,v=r[h]}return{c:n.subarray(0,e),n:a}},vr=function(r,a){for(var n=0,e=0;e<a.length;++e)n+=r[e]*a[e];return n},mr=function(r,a,n){var e=n.length,v=kr(a+2);r[v]=e&255,r[v+1]=e>>8,r[v+2]=r[v]^255,r[v+3]=r[v+1]^255;for(var f=0;f<e;++f)r[v+f+4]=n[f];return(v+4+e)*8},Sr=function(r,a,n,e,v,f,o,h,w,y,i){Z(a,i++,n),++v[256];for(var l=gr(v,15),t=l.t,z=l.l,U=gr(f,15),M=U.t,s=U.l,R=Ar(t),G=R.c,F=R.n,m=Ar(M),D=m.c,q=m.n,A=new P(19),c=0;c<G.length;++c)++A[G[c]&31];for(var c=0;c<D.length;++c)++A[D[c]&31];for(var u=gr(A,7),S=u.t,k=u.l,I=19;I>4&&!S[zr[I-1]];--I);var $=y+5<<3,H=vr(v,j)+vr(f,fr)+o,B=vr(v,t)+vr(f,M)+o+14+3*I+vr(A,S)+2*A[16]+3*A[17]+7*A[18];if(w>=0&&$<=H&&$<=B)return mr(a,i,r.subarray(w,w+y));var T,b,O,C;if(Z(a,i,1+(B<H)),i+=2,B<H){T=X(t,z,0),b=t,O=X(M,s,0),C=M;var rr=X(S,k,0);Z(a,i,F-257),Z(a,i+5,q-1),Z(a,i+10,I-4),i+=14;for(var c=0;c<I;++c)Z(a,i+3*c,S[zr[c]]);i+=3*I;for(var Q=[G,D],Y=0;Y<2;++Y)for(var J=Q[Y],c=0;c<J.length;++c){var K=J[c]&31;Z(a,i,rr[K]),i+=S[K],K>15&&(Z(a,i,J[c]>>5&127),i+=J[c]>>12)}}else T=Gr,b=j,O=Jr,C=fr;for(var c=0;c<h;++c){var x=e[c];if(x>255){var K=x>>18&31;er(a,i,T[K+257]),i+=b[K+257],K>7&&(Z(a,i,x>>23&31),i+=ur[K]);var W=x&31;er(a,i,O[W]),i+=C[W],W>3&&(er(a,i,x>>5&8191),i+=tr[W])}else er(a,i,T[x]),i+=b[x]}return er(a,i,T[256]),i+b[256]},Pr=new yr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),qr=new E(0),Qr=function(r,a,n,e,v,f){var o=f.z||r.length,h=new E(e+o+5*(1+Math.ceil(o/7e3))+v),w=h.subarray(e,h.length-v),y=f.l,i=(f.r||0)&7;if(a){i&&(w[0]=f.r>>3);for(var l=Pr[a-1],t=l>>13,z=l&8191,U=(1<<n)-1,M=f.p||new P(32768),s=f.h||new P(U+1),R=Math.ceil(n/3),G=2*R,F=function(cr){return(r[cr]^r[cr+1]<<R^r[cr+2]<<G)&U},m=new yr(25e3),D=new P(288),q=new P(32),A=0,c=0,u=f.i||0,S=0,k=f.w||0,I=0;u+2<o;++u){var $=F(u),H=u&32767,B=s[$];if(M[H]=B,s[$]=H,k<=u){var T=o-u;if((A>7e3||S>24576)&&(T>423||!y)){i=Sr(r,w,0,m,D,q,c,S,I,u-I,i),S=A=c=0,I=u;for(var b=0;b<286;++b)D[b]=0;for(var b=0;b<30;++b)q[b]=0}var O=2,C=0,rr=z,Q=H-B&32767;if(T>2&&$==F(u-Q))for(var Y=Math.min(t,T)-1,J=Math.min(32767,u),K=Math.min(258,T);Q<=J&&--rr&&H!=B;){if(r[u+O]==r[u+O-Q]){for(var x=0;x<K&&r[u+x]==r[u+x-Q];++x);if(x>O){if(O=x,C=Q,x>Y)break;for(var W=Math.min(Q,x-2),L=0,b=0;b<W;++b){var p=u-Q+b&32767,lr=M[p],or=p-lr&32767;or>L&&(L=or,B=p)}}}H=B,B=M[H],Q+=H-B&32767}if(C){m[S++]=268435456|Mr[O]<<18|Fr[C];var ar=Mr[O]&31,nr=Fr[C]&31;c+=ur[ar]+tr[nr],++D[257+ar],++q[nr],k=u+O,++A}else m[S++]=r[u],++D[r[u]]}}for(u=Math.max(u,k);u<o;++u)m[S++]=r[u],++D[r[u]];i=Sr(r,w,y,m,D,q,c,S,I,u-I,i),y||(f.r=i&7|w[i/8|0]<<3,i-=7,f.h=s,f.p=M,f.i=u,f.w=k)}else{for(var u=f.w||0;u<o+y;u+=65535){var d=u+65535;d>=o&&(w[i/8|0]=y,d=o),i=mr(w,i+1,r.subarray(u,d))}f.i=o}return Dr(h,0,e+kr(i)+v)},Rr=function(){for(var r=new Int32Array(256),a=0;a<256;++a){for(var n=a,e=9;--e;)n=(n&1&&-306674912)^n>>>1;r[a]=n}return r}(),Vr=function(){var r=-1;return{p:function(a){for(var n=r,e=0;e<a.length;++e)n=Rr[n&255^a[e]]^n>>>8;r=n},d:function(){return~r}}},sr=function(){var r=1,a=0;return{p:function(n){for(var e=r,v=a,f=n.length|0,o=0;o!=f;){for(var h=Math.min(o+2655,f);o<h;++o)v+=e+=n[o];e=(e&65535)+15*(e>>16),v=(v&65535)+15*(v>>16)}r=e,a=v},d:function(){return r%=65521,a%=65521,(r&255)<<24|(r&65280)<<8|(a&255)<<8|a>>8}}},Br=function(r,a,n,e,v){if(!v&&(v={l:1},a.dictionary)){var f=a.dictionary.subarray(-32768),o=new E(f.length+r.length);o.set(f),o.set(r,f.length),r=o,v.w=f.length}return Qr(r,a.level==null?6:a.level,a.mem==null?v.l?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):20:12+a.mem,n,e,v)},ir=function(r,a,n){for(;n;++a)r[a]=n,n>>>=8},Wr=function(r,a){var n=a.filename;if(r[0]=31,r[1]=139,r[2]=8,r[8]=a.level<2?4:a.level==9?2:0,r[9]=3,a.mtime!=0&&ir(r,4,Math.floor(new Date(a.mtime||Date.now())/1e3)),n){r[3]=8;for(var e=0;e<=n.length;++e)r[e+10]=n.charCodeAt(e)}},Xr=function(r){(r[0]!=31||r[1]!=139||r[2]!=8)&&N(6,"invalid gzip data");var a=r[3],n=10;a&4&&(n+=(r[10]|r[11]<<8)+2);for(var e=(a>>3&1)+(a>>4&1);e>0;e-=!r[n++]);return n+(a&2)},Yr=function(r){var a=r.length;return(r[a-4]|r[a-3]<<8|r[a-2]<<16|r[a-1]<<24)>>>0},Zr=function(r){return 10+(r.filename?r.filename.length+1:0)},$r=function(r,a){var n=a.level,e=n==0?0:n<6?1:n==9?3:2;if(r[0]=120,r[1]=e<<6|(a.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,a.dictionary){var v=sr();v.p(a.dictionary),ir(r,2,v.d())}},_r=function(r,a){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&N(6,"invalid zlib data"),(r[1]>>5&1)==+!a&&N(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function pr(r,a){a||(a={});var n=Vr(),e=r.length;n.p(r);var v=Br(r,a,Zr(a),8),f=v.length;return Wr(v,a),ir(v,f-8,n.d()),ir(v,f-4,e),v}function dr(r,a){var n=Xr(r);return n+8>r.length&&N(6,"invalid gzip data"),Ir(r.subarray(n,-8),{i:2},new E(Yr(r)),a)}function ra(r,a){a||(a={});var n=sr();n.p(r);var e=Br(r,a,a.dictionary?6:2,4);return $r(e,a),ir(e,e.length-4,n.d()),e}function aa(r,a){return Ir(r.subarray(_r(r,a),-4),{i:2},a,a)}var jr=typeof TextDecoder<"u"&&new TextDecoder,Lr=0;try{jr.decode(qr,{stream:!0}),Lr=1}catch{}export{dr as a,pr as g,aa as u,ra as z};