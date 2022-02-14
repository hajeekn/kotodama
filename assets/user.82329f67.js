import{v as P,w as F,Q as x,T as A,x as r,q as p,r as f,y as l,C as t,A as a,D as $,z as B,G as U,s as h,R as D,X as H,Y as N,B as R,L as V,_ as q}from"./vendor.a61334ed.js";import{$ as M,a as G,_ as I}from"./app.3dee77a8.js";import{u as L}from"./validate.a60ae09d.js";import{a as T,_ as Y}from"./helper.99864996.js";async function E(v){return M.put("/user",v)}async function Q(){return M.get("/token")}const S=P({setup(v){const{t:o}=F(),i=x(!1),e=x(),n=A({password:"",checkPass:""}),{validatePass:d,validatePass2:s}=L(e,n),g={pass:[{validator:d,trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"}]},c=()=>{e.value.validate(async _=>{if(_)i.value=!0,await E({password:n.password}).then(u=>{u.errno===0&&U.success({message:o("message.update_success"),showClose:!0})}),i.value=!1;else return U.error({message:"\u8BF7\u68C0\u67E5\u5BC6\u7801\u662F\u5426\u4E00\u81F4\uFF01",showClose:!0}),!1})};return(_,u)=>{const y=r("el-input"),b=r("el-form-item"),k=r("el-button"),C=r("el-form");return p(),f("div",null,[l(C,{ref_key:"pwdFormRef",ref:e,model:a(n),rules:g},{default:t(()=>[l(b,{prop:"pass",required:""},{default:t(()=>[l(y,{modelValue:a(n).pass,"onUpdate:modelValue":u[0]||(u[0]=w=>a(n).pass=w),type:"password",autocomplete:"off",placeholder:a(o)("user.password")},null,8,["modelValue","placeholder"])]),_:1}),l(b,{prop:"checkPass",required:""},{default:t(()=>[l(y,{modelValue:a(n).checkPass,"onUpdate:modelValue":u[1]||(u[1]=w=>a(n).checkPass=w),type:"password",autocomplete:"off",placeholder:a(o)("user.confirm_password")},null,8,["modelValue","placeholder"])]),_:1}),l(b,null,{default:t(()=>[l(k,{type:"primary",class:"w-full",loading:i.value,onClick:c},{default:t(()=>[$(B(a(o)("user.update_password")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}}),X={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},j=h("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"},null,-1),J=[j];function K(v,o){return p(),f("svg",X,J)}var O={name:"ri-mail-line",render:K};const W={m:"4"},Z=["src"],ee=["href"],le={key:0,text:"blue-500",class:"mx-1"},te={key:1,text:"green-600",class:"mx-1"},ae={key:2},oe=["href"],se=["href","target","title"],ne=P({setup(v){const{t:o}=F(),i=x(!0),e=x({email:"",github:"",type:"administrator",url:"",display_name:""});D(async()=>{const{data:d}=await Q();e.value=d,i.value=!1});const n=()=>{E({display_name:e.value.display_name,url:e.value.url,github:e.value.github}).then(d=>{d.errno===0&&U.success({message:o("message.update_success"),showClose:!0})})};return(d,s)=>{const g=O,c=r("el-icon"),_=r("el-input"),u=r("el-form-item"),y=G,b=I,k=Y,C=r("el-button"),w=r("el-form"),z=H("loading");return p(),f(q,null,[h("div",W,[h("img",{m:"auto",p:"1",class:"rounded-full shadow-lg w-25 h-25",src:a(T)(e.value.email,100)},null,8,Z)]),N((p(),R(w,{model:e.value},{default:t(()=>[l(u,null,{default:t(()=>[l(_,{modelValue:e.value.email,"onUpdate:modelValue":s[0]||(s[0]=m=>e.value.email=m),placeholder:"E-Mail",disabled:"",style:{"--el-disabled-color-base":"#666"}},{prefix:t(()=>[h("a",{class:V(["el-input__icon",e.value.email&&"text-black"]),href:"mailto:"+e.value.email,target:"_blank",title:"GitHub"},[l(c,null,{default:t(()=>[l(g)]),_:1})],10,ee)]),_:1},8,["modelValue"])]),_:1}),l(u,null,{default:t(()=>[l(_,{modelValue:e.value.display_name,"onUpdate:modelValue":s[1]||(s[1]=m=>e.value.display_name=m),placeholder:a(o)("user.name")},{prefix:t(()=>[l(c,{class:V(["el-input__icon",e.value.display_name&&"text-black"])},{default:t(()=>[l(y)]),_:1},8,["class"])]),suffix:t(()=>[e.value.type==="administrator"?(p(),f("span",le,"\u7BA1\u7406\u5458")):e.value.type==="guest"?(p(),f("span",te,"\u5BBE\u5BA2")):(p(),f("span",ae,B(e.value.type),1))]),_:1},8,["modelValue","placeholder"])]),_:1}),l(u,null,{default:t(()=>[l(_,{modelValue:e.value.github,"onUpdate:modelValue":s[2]||(s[2]=m=>e.value.github=m),placeholder:a(o)("user.github")},{prefix:t(()=>[h("a",{class:V(["el-input__icon",e.value.github&&"text-black"]),href:"https://github.com/"+e.value.github,target:"_blank",title:"GitHub"},[l(c,null,{default:t(()=>[l(b)]),_:1})],10,oe)]),_:1},8,["modelValue","placeholder"])]),_:1}),l(u,null,{default:t(()=>[l(_,{modelValue:e.value.url,"onUpdate:modelValue":s[3]||(s[3]=m=>e.value.url=m),placeholder:a(o)("user.url")},{prefix:t(()=>[h("a",{class:V(["el-input__icon",e.value.url&&"text-black"]),href:e.value.url||"#",target:e.value.url&&"_blank",title:a(o)("user.url")},[l(c,null,{default:t(()=>[l(k)]),_:1})],10,se)]),_:1},8,["modelValue","placeholder"])]),_:1}),l(u,null,{default:t(()=>[l(C,{type:"primary",class:"w-full",onClick:n},{default:t(()=>[$(B(a(o)("user.update_profile")),1)]),_:1})]),_:1})]),_:1},8,["model"])),[[z,i.value]])],64)}}}),ue={class:"shadow bg-white p-5 max-w-100 m-auto"},ce=P({setup(v){const{t:o}=F(),i="profile";return(e,n)=>{const d=ne,s=r("el-tab-pane"),g=S,c=r("el-tabs");return p(),f("div",ue,[l(c,{modelValue:i,"onUpdate:modelValue":n[0]||(n[0]=_=>i=_)},{default:t(()=>[l(s,{label:a(o)("title.profile"),name:"profile"},{default:t(()=>[l(d)]),_:1},8,["label"]),l(s,{label:a(o)("title.password"),name:"password"},{default:t(()=>[l(g)]),_:1},8,["label"])]),_:1})])}}});export{ce as default};
