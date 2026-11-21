import f from"node:fs"
let e=process.env,I=e.MAKEFUN_INPUT_DIR,U=e.MAKEFUN_OUTPUT_DIR
let S=t=>{let W=t.indexOf("\n")+1,N=t.length,a=new Uint8Array(N),g=[],b=[],p=0,o=[-W,W,-1,1]
for(let i=0;i<N;i++){let c=t[i];if(c!=35&&c!=10){a[i]=1;if(c>41&&c<47)g.push(i);if(c>35&&c<43)b.push(i);if(c==43||c>63)p=i}}
let B=(G,X,pl)=>{let Q=[[[X,pl,""]]],M=new Set([X+":"+pl])
for(let d=0;d<Q.length;d++){let A=Q[d]
for(let h=0;h<A.length;h++){let[B2,P2,m]=A[h]
if(B2.every(x=>G.includes(x)))return[m,P2]
if(M.size>3e6)return 0
for(let k=4;k--;){let e=o[k],q=P2+e,nd=d
if(!a[q])continue
let X2=B2
if(B2.includes(q)){let t=q+e;if(!a[t]||B2.includes(t)||!(a[t-W]&&a[t+W])&&!(a[t-1]&&a[t+1])&&!G.includes(t))continue;X2=B2.map(x=>x-q?x:t).sort();nd++}
let y=X2+":"+q;if(M.has(y))continue;M.add(y)
if(!Q[nd])Q[nd]=[];Q[nd].push([X2,q,m+"udlrUDLR"[k+(nd-d)*4]])}}}
return 0}
let H=x=>(x/W>8?2:0)+((x%W-1)/7|0),m="",pl=p
b.forEach(x=>a[x]=0)
for(let i=4;i--;){let X=b.filter(x=>H(x)==i),G=g.filter(x=>H(x)==i);X.forEach(x=>a[x]=1);let r=B(G,X,pl);if(!r)return"";m+=r[0];pl=r[1];G.forEach(x=>a[x]=0)}
return m}
for(let k=6;--k;){let i="i00"+k,n=S(f.readFileSync(I+"/"+i+"/level.txt"));f.mkdirSync(U+"/"+i,{recursive:!0});f.writeFileSync(U+"/"+i+"/solution.txt",n)}
