import{_ as C,G as M,r as g,H as Q,I as k,P as A,L as t,K as s,R as I,M as e,S as n,T as c,Q as m,U as S,J as z,V as O,y as P,W as T,X as B}from"./index.e9352deb.js";import{S as E,u as q,Q as U,a as f,b as j,c as u,d,e as r,f as R,g as $,h as b,i as V,j as D}from"./Support.73da04e9.js";import{u as N}from"./main.8958c106.js";import{s as J}from"./pinia.4a1e1afe.js";const L=M({name:"IndexPage",components:{Support:E},setup(){const l=q(),a=P(),v=N(),p=g(1),w=g("slide_1"),y=g(""),_=g(""),{isSupportModalOpen:i,isTelegramModalOpen:h,isDiscordModalOpen:x}=J(v);return{step:p,slide:w,email:y,wallet:_,isSupportModalOpen:i,isTelegramModalOpen:h,isDiscordModalOpen:x,stepClick:()=>{p.value===1?a.refs.emailRef.validate()?a.refs.stepper.next():l.notify("Please enter a valid email address"):p.value===2&&(a.refs.walletRef.validate()?a.refs.stepper.next():l.notify("Please enter a valid wallet address")),p.value===3&&l.notify("Congratulations! You have subscribed to the newsletter.")},onSendQuestion:()=>{i.value=!1,h.value=!1,x.value=!1}}}}),o=l=>(T("data-v-935234ce"),l=l(),B(),l),Y={class:"c-container"},F=o(()=>e("div",{style:{height:"40px"}},null,-1)),W=o(()=>e("p",{class:"text-h3",style:{color:"#e6e1e5"}},"Upcomings events:",-1)),G={class:"row"},H={class:"col-6"},K={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},X=o(()=>e("img",{src:"icons/arch.ico"},null,-1)),Z=o(()=>e("br",null,null,-1)),ee=o(()=>e("p",{class:"text-weight-bolder"},"CoinList ARCH distribution",-1)),te=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Event registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jul 25, 12:00 AM")],-1)),se={class:"row"},le={class:"col-6"},oe={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},ae=o(()=>e("img",{src:"icons/coinbase.png"},null,-1)),ie=o(()=>e("br",null,null,-1)),ne=o(()=>e("p",{class:"text-weight-bolder"},"Coinbase's Base Mainnet launch",-1)),de=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Event registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 5, 08:00 AM")],-1)),re={class:"row"},ce={class:"col-6"},ue={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},pe=o(()=>e("img",{src:"icons/shiba.png"},null,-1)),_e=o(()=>e("br",null,null,-1)),he=o(()=>e("p",{class:"text-weight-bolder"},"Shiba Inu-Based Shibarium Blockchain expected to go live in August",-1)),ge=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Event registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jul 28, 10:00 AM")],-1)),me={class:"row"},fe={class:"col-6"},be={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},ve=o(()=>e("img",{src:"icons/scroll.ico"},null,-1)),we=o(()=>e("br",null,null,-1)),ye=o(()=>e("p",{class:"text-weight-bolder"},"Mainnet launch in early August",-1)),xe=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Event registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 10, 10:00 AM")],-1)),ke={class:"row"},Se={class:"col-6"},Ve={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},Ce=o(()=>e("img",{src:"icons/zklink.ico"},null,-1)),Me=o(()=>e("br",null,null,-1)),Qe=o(()=>e("p",{class:"text-weight-bolder"},"zkLink Odyssey, an incentivized campaign, to be launched in August",-1)),Ae=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Event registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jun 18, 02:00 AM")],-1)),Ie={class:"row"},ze={class:"col-6"},Oe={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},Pe=o(()=>e("img",{src:"icons/joexyz.png"},null,-1)),Te=o(()=>e("br",null,null,-1)),Be=o(()=>e("p",{class:"text-weight-bolder"},"Lending & leveraged trading to be launched August",-1)),Ee=o(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 25, 03:00 AM")],-1)),qe=o(()=>e("div",{style:{height:"50px"}},null,-1)),Ue=o(()=>e("p",{class:"text-weight-bolder"},"Register now for a chance to earn money by participating in Airdrop or Play2Earn project.",-1)),je=o(()=>e("p",null,"This website provides information about different giveaways and P2E projects. We have a list of top P2E blockchain games that offer users a rich gaming experience along with multiple opportunities to earn money. If you want to earn money and immerse yourself in the world of blockchain leave an application below and we will contact you via mail. ",-1)),Re=o(()=>e("p",{class:"text-h6",style:{color:"#8c4545"}},"ATTENTION: the initial testing of most GameFi projects (alpha and beta versions) is carried out on the Windows OS",-1)),$e=o(()=>e("div",{style:{height:"30px"}},null,-1)),De=o(()=>e("div",{class:"row justify-center"},[e("p",{class:"text-h4 text-weight-bolder",style:{color:"#e6e1e5"}},"To participate in our projects, leave the following details:")],-1)),Ne={class:"row justify-center"},Je={class:"row flex-center"},Le=o(()=>e("br",null,null,-1)),Ye=o(()=>e("div",{class:"row flex-center"},[e("p",{class:"text-h4",style:{color:"#e6e1e5"}},"Done!")],-1));function Fe(l,a,v,p,w,y){const _=Q("Support");return k(),A(I,null,[t(U,{class:"c-page"},{default:s(()=>[e("div",Y,[F,W,t(j,{modelValue:l.slide,"onUpdate:modelValue":a[0]||(a[0]=i=>l.slide=i),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",infinite:"",padding:"",autoplay:"",height:"200px",class:"bg-primary text-white shadow-1 rounded-borders"},{default:s(()=>[t(u,{name:"slide_1",class:"column no-wrap"},{default:s(()=>[e("div",G,[e("div",H,[t(d,{class:"c-card",style:{background:"rgba(178,91,43,0.9) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",K,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[X]),_:1}),c(" Archway")]),Z,ee]),_:1})]),_:1})]),te])]),_:1}),t(u,{name:"slide_2",class:"column no-wrap"},{default:s(()=>[e("div",se,[e("div",le,[t(d,{class:"c-card",style:{background:"rgba(52, 87, 204, 0.904) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",oe,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[ae]),_:1}),c(" Base")]),ie,ne]),_:1})]),_:1})]),de])]),_:1}),t(u,{name:"slide_3",class:"column no-wrap"},{default:s(()=>[e("div",re,[e("div",ce,[t(d,{class:"c-card",style:{background:"rgba(238,84,56,0.9) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",ue,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[pe]),_:1}),c(" Shiba Ibu")]),_e,he]),_:1})]),_:1})]),ge])]),_:1}),t(u,{name:"slide_4",class:"column no-wrap"},{default:s(()=>[e("div",me,[e("div",fe,[t(d,{class:"c-card",style:{background:"rgb(157,157,77) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",be,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[ve]),_:1}),c(" Scroll")]),we,ye]),_:1})]),_:1})]),xe])]),_:1}),t(u,{name:"slide_5",class:"column no-wrap"},{default:s(()=>[e("div",ke,[e("div",Se,[t(d,{class:"c-card",style:{background:"rgb(50,115,83) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",Ve,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[Ce]),_:1}),c(" zkLink ")]),Me,Qe]),_:1})]),_:1})]),Ae])]),_:1}),t(u,{name:"slide_6",class:"column no-wrap"},{default:s(()=>[e("div",Ie,[e("div",ze,[t(d,{class:"c-card",style:{background:"rgb(68,56,115) !important"}},{default:s(()=>[t(r,null,{default:s(()=>[e("div",Oe,[t(n,{class:"text-dark",size:"lg"},{default:s(()=>[Pe]),_:1}),c(" Trader Joe ")]),Te,Be]),_:1})]),_:1})]),Ee])]),_:1})]),_:1},8,["modelValue"]),qe,t(d,{class:"c-card-2"},{default:s(()=>[t(r,null,{default:s(()=>[Ue,je,Re]),_:1})]),_:1}),$e,De,e("div",Ne,[t(R,{style:{width:"100%",background:"#26232a",height:"240px"},modelValue:l.step,"onUpdate:modelValue":a[4]||(a[4]=i=>l.step=i),ref:"stepper","done-color":"red-4","active-color":"deep-purple-3","inactive-color":"red-3",animated:""},{navigation:s(()=>[t($,null,{default:s(()=>[t(m,{onClick:l.stepClick,color:"primary",label:l.step===2?"Finish":"Continue",style:S(l.step===3?"visibility: hidden":"")},null,8,["onClick","label","style"]),l.step>1?(k(),z(m,{key:0,flat:"",color:"primary",onClick:a[3]||(a[3]=i=>l.$refs.stepper.previous()),label:"Back",class:"q-ml-sm",style:S(l.step===3?"visibility: hidden":"")},null,8,["style"])):O("",!0)]),_:1})]),default:s(()=>[t(b,{name:1,title:"Your email",icon:"mail",done:l.step>1},{default:s(()=>[t(V,{ref:"emailRef",rules:[(i,h)=>h.email(i)||"Please enter a valid email address"],dark:"",standout:"bg-deep-purple-4 text-white",modelValue:l.email,"onUpdate:modelValue":a[1]||(a[1]=i=>l.email=i),label:"email",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"])]),_:1},8,["done"]),t(b,{name:2,title:"Your wallet",icon:"wallet",done:l.step>2},{default:s(()=>[t(V,{ref:"walletRef",rules:[i=>i.length>=10||"Minimum 10 characters"],dark:"",standout:"bg-deep-purple-4 text-white",modelValue:l.wallet,"onUpdate:modelValue":a[2]||(a[2]=i=>l.wallet=i),label:"wallet",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"])]),_:1},8,["done"]),t(b,{name:3,title:"Done",icon:"recommend"},{default:s(()=>[e("div",Je,[t(n,{color:"pink-1",name:"done",size:"5em"}),Le]),Ye]),_:1})]),_:1},8,["modelValue"])])]),t(D,{position:"bottom-right",offset:[18,18]},{default:s(()=>[t(m,{onClick:a[5]||(a[5]=i=>l.isSupportModalOpen=!0),fab:"",icon:"help",color:"primary"})]),_:1})]),_:1}),t(f,{modelValue:l.isSupportModalOpen,"onUpdate:modelValue":a[6]||(a[6]=i=>l.isSupportModalOpen=i),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:s(()=>[t(_,{onSendquestion:l.onSendQuestion,title:"Send us your question",type:"support"},null,8,["onSendquestion"])]),_:1},8,["modelValue"]),t(f,{modelValue:l.isTelegramModalOpen,"onUpdate:modelValue":a[7]||(a[7]=i=>l.isTelegramModalOpen=i),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:s(()=>[t(_,{onSendquestion:l.onSendQuestion,title:"Your Telegram for communication",type:"telegram"},null,8,["onSendquestion"])]),_:1},8,["modelValue"]),t(f,{modelValue:l.isDiscordModalOpen,"onUpdate:modelValue":a[8]||(a[8]=i=>l.isDiscordModalOpen=i),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:s(()=>[t(_,{onSendquestion:l.onSendQuestion,title:"Your Discord for communication",type:"discord"},null,8,["onSendquestion"])]),_:1},8,["modelValue"])],64)}var et=C(L,[["render",Fe],["__scopeId","data-v-935234ce"]]);export{et as default};