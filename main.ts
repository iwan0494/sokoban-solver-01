import f from"fs"
let e=process.env,I=e.MAKEFUN_INPUT_DIR,O=e.MAKEFUN_OUTPUT_DIR,i,k
let S=t=>{let W=t.indexOf(10)+1,a=[],g=[],b=[],p=0,o=[-W,W,-1,1],m="",r
t.forEach((c,i)=>{if(c%5){if(c%6==0)b.push(i);else a[i]=1;if(c>41&&c<47)g.push(i);if(c%21==1)p=i}})
g.sort()
let H=x=>2*(x/W>8)+((x%W-1)/7|0),B=(G,X)=>{let A=[[X,p,""]],N=[],M={},C=0,y
while(A.length){for(let[B2,P2,m]of A){if(B2+""==G)return p=P2,m
if(++C>3e6)return 0
for(let k=4;k--;){let q=P2+o[k]
if(!a[q])continue
let X2=B2
if(B2.includes(q)){let v=q+o[k];if(!a[v]||B2.includes(v)||!(a[v-W]*a[v+W]||a[v-1]*a[v+1]||G.includes(v)))continue;X2=B2.map(x=>x-q?x:v).sort()}if(M[y=X2+":"+q])continue
M[y]=1;(X2!=B2?N:A).push([X2,q,m+"udlr"[k]])}}A=N;N=[]}return 0};for(i=4;i--;){let F=A=>A.filter(x=>H(x)==i),X=F(b),G=F(g);X.map(x=>a[x]=1);if((r=B(G,X))===0)return"";m+=r;G.map(x=>a[x]=0)}return m};for(k=6;--k;){i="i00"+k;f.mkdirSync(O+"/"+i);f.writeFileSync(O+"/"+i+"/solution.txt",S(f.readFileSync(I+"/"+i+"/level.txt")))}