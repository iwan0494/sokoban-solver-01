import f from"node:fs"
let e=process.env,I=e.MAKEFUN_INPUT_DIR,U=e.MAKEFUN_OUTPUT_DIR
let S=t=>{
let W=t.indexOf("\n")+1,N=t.length,a=new Uint8Array(N),g=[],b=[],p=0,o=[-W,W,-1,1],O=new Uint8Array(N),P=new Int32Array(N),C=[]
for(let i=0;i<N;i++){let c=t[i];if(c!=35&&c!=10){a[i]=1;if(c>41&&c<47)g.push(i);if(c>35&&c<43)b.push(i);if(c==43||c==64)p=i}}
let R=F=>{P.fill(0);let l=F,q=[F];P[F]=F;for(let i=0;q[i];i++){let x=q[i];if(x<l)l=x;for(let k=4;k--;){let y=x+o[k];if(a[y]&&!O[y]&&!P[y]){P[y]=x;C[y]="udlr"[k];q.push(y)}}}return l}
let B=(G,X,pl)=>{
let Q=[[X,pl,""]],M=new Set([R(pl)+":"+X])
for(let h=0;Q[h];h++){
let[B2,P2,m]=Q[h]
if(B2.every(x=>G.includes(x)))return[m,P2]
B2.forEach(x=>O[x]=1)
R(P2)
for(let b2 of B2)
for(let k=4;k--;){let d=o[k],tt=b2+d
if(!P[b2-d]||!a[tt]||O[tt])continue
let w2="",u=b2-d;for(;u!=P2;){w2=C[u]+w2;u=P[u]}
O[b2]=0;O[tt]=1
let X2=B2.map(x=>x==b2?tt:x).sort((x,y)=>x-y)
let key=R(b2)+":"+X2
O[tt]=0;O[b2]=1
R(P2)
if(M.has(key))continue
if(Q[25e4])return 0
M.add(key)
Q.push([X2,b2,m+w2+"UDLR"[k]])}
B2.forEach(x=>O[x]=0)}
return 0}
let H=x=>(x/W>8?2:0)+((x%W-1)/7|0)
let m="",pl=p
for(let x of b)O[x]=1
for(let i=4;i--;){let X=b.filter(x=>H(x)==i),G=g.filter(x=>H(x)==i);if(!X.length)continue;let r=B(G,X,pl);if(!r)return"";m+=r[0];pl=r[1];G.forEach(x=>O[x]=1)}
return m}
for(let k=6;--k;){let i="i00"+k,n=S(f.readFileSync(I+"/"+i+"/level.txt"));f.mkdirSync(U+"/"+i,{recursive:!0});f.writeFileSync(U+"/"+i+"/solution.txt",n)}
