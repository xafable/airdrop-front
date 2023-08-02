import{_ as A,D as V,r,v as f,E as Q,z as t,y as s,F as S,A as e,G as c,H as u,Q as g,I as x,x as k,J as z,K as R,g as I,L as M,M as P}from"./index.6b28001f.js";import{u as q,Q as B,a as E,b as U,c as p,d,e as n,f as $,g as j,h as b,i as m,j as J,k as O,l as D,m as L,C as N}from"./use-quasar.65bac7fe.js";import"./scroll.0ef8e61e.js";const T=V({name:"IndexPage",setup(){const o=q(),i=I(),h=r(1),w=r("slide_1"),y=r(""),v=r(""),a=r(!1),_=r(""),C=r("");return{step:h,slide:w,email:y,wallet:v,isModalOpen:a,emailQuestion:_,question:C,stepClick:()=>{h.value===1?i.refs.emailRef.validate()?i.refs.stepper.next():o.notify("Please enter a valid email address"):h.value===2&&(i.refs.walletRef.validate()?i.refs.stepper.next():o.notify("Please enter a valid wallet address")),h.value===3&&o.notify("Congratulations! You have subscribed to the newsletter.")},questionClick:()=>{i.refs.questionRef.validate()&&i.refs.emailQuestionRef.validate()&&(o.notify("Your message has been sent. We will contact you."),a.value=!1)}}}}),l=o=>(M("data-v-d3a608f8"),o=o(),P(),o),F={class:"c-container"},Y=l(()=>e("div",{style:{height:"40px"}},null,-1)),W=l(()=>e("p",{class:"text-h3",style:{color:"#e6e1e5"}},"Upcomings events:",-1)),G={class:"row"},H={class:"col-6"},K={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},X=l(()=>e("img",{src:"icons/arch.ico"},null,-1)),Z=l(()=>e("br",null,null,-1)),ee=l(()=>e("p",{class:"text-weight-bolder"},"CoinList ARCH distribution",-1)),te=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jul 25, 12:00 AM")],-1)),se=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 5 days")],-1)),le={class:"row"},oe={class:"col-6"},ae={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},ie=l(()=>e("img",{src:"icons/coinbase.png"},null,-1)),ne=l(()=>e("br",null,null,-1)),de=l(()=>e("p",{class:"text-weight-bolder"},"Coinbase's Base Mainnet launch",-1)),re=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 5, 08:00 AM")],-1)),ce=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 25 days")],-1)),ue={class:"row"},pe={class:"col-6"},he={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},_e=l(()=>e("img",{src:"icons/shiba.png"},null,-1)),ge=l(()=>e("br",null,null,-1)),me=l(()=>e("p",{class:"text-weight-bolder"},"Shiba Inu-Based Shibarium Blockchain expected to go live in August",-1)),fe=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jul 28, 10:00 AM")],-1)),be=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 56 days")],-1)),we={class:"row"},ye={class:"col-6"},ve={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},xe=l(()=>e("img",{src:"icons/scroll.ico"},null,-1)),ke=l(()=>e("br",null,null,-1)),Ce=l(()=>e("p",{class:"text-weight-bolder"},"Mainnet launch in early August",-1)),Ae=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 10, 10:00 AM")],-1)),Ve=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 90 days")],-1)),Qe={class:"row"},Se={class:"col-6"},ze={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},Re=l(()=>e("img",{src:"icons/zklink.ico"},null,-1)),Ie=l(()=>e("br",null,null,-1)),Me=l(()=>e("p",{class:"text-weight-bolder"},"zkLink Odyssey, an incentivized campaign, to be launched in August",-1)),Pe=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Jun 18, 02:00 AM")],-1)),qe=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 12 days")],-1)),Be={class:"row"},Ee={class:"col-6"},Ue={class:"text-h3 text-weight-bolder",style:{color:"#e6e1e5"}},$e=l(()=>e("img",{src:"icons/joexyz.png"},null,-1)),je=l(()=>e("br",null,null,-1)),Je=l(()=>e("p",{class:"text-weight-bolder"},"Lending & leveraged trading to be launched August",-1)),Oe=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Airdrop registration start:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Aug 25, 03:00 AM")],-1)),De=l(()=>e("div",{class:"col-3"},[e("p",{class:"text-weight-bolder"},"Registration ends:"),e("p",{class:"text-h5 text-weight-bolder",style:{color:"#e6e1e5"}},"Ends in 120 days")],-1)),Le=l(()=>e("div",{style:{height:"50px"}},null,-1)),Ne=l(()=>e("p",{class:"text-weight-bolder"},"Register now for a chance to earn money by participating in Airdrop or Play2Earn project.",-1)),Te=l(()=>e("p",null,"This website provides information about different giveaways and P2E projects. We have a list of top P2E blockchain games that offer users a rich gaming experience along with multiple opportunities to earn money. If you want to earn money and immerse yourself in the world of blockchain leave an application below and we will contact you via mail. Attention: the initial testing of most GameFi projects (alpha and beta versions) is carried out on the Windows OS",-1)),Fe=l(()=>e("div",{style:{height:"30px"}},null,-1)),Ye=l(()=>e("div",{class:"row justify-center"},[e("p",{class:"text-h4 text-weight-bolder",style:{color:"#e6e1e5"}},"To Join this Airdrop you''ll need:")],-1)),We={class:"row justify-center"},Ge={class:"row flex-center"},He=l(()=>e("br",null,null,-1)),Ke=l(()=>e("div",{class:"row flex-center"},[e("p",{class:"text-h4",style:{color:"#e6e1e5"}},"Done!")],-1)),Xe=l(()=>e("div",{class:"text-h6"},"Send us your question",-1)),Ze=l(()=>e("br",null,null,-1)),et=l(()=>e("br",null,null,-1));function tt(o,i,h,w,y,v){return f(),Q(S,null,[t(B,{class:"c-page"},{default:s(()=>[e("div",F,[Y,W,t(U,{modelValue:o.slide,"onUpdate:modelValue":i[0]||(i[0]=a=>o.slide=a),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",infinite:"",padding:"",autoplay:"",height:"200px",class:"bg-primary text-white shadow-1 rounded-borders"},{default:s(()=>[t(p,{name:"slide_1",class:"column no-wrap"},{default:s(()=>[e("div",G,[e("div",H,[t(d,{class:"c-card",style:{background:"rgba(178,91,43,0.9) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",K,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[X]),_:1}),u(" Archway")]),Z,ee]),_:1})]),_:1})]),te,se])]),_:1}),t(p,{name:"slide_2",class:"column no-wrap"},{default:s(()=>[e("div",le,[e("div",oe,[t(d,{class:"c-card",style:{background:"rgba(52, 87, 204, 0.904) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",ae,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[ie]),_:1}),u(" Base")]),ne,de]),_:1})]),_:1})]),re,ce])]),_:1}),t(p,{name:"slide_3",class:"column no-wrap"},{default:s(()=>[e("div",ue,[e("div",pe,[t(d,{class:"c-card",style:{background:"rgba(238,84,56,0.9) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",he,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[_e]),_:1}),u(" Shiba Ibu")]),ge,me]),_:1})]),_:1})]),fe,be])]),_:1}),t(p,{name:"slide_4",class:"column no-wrap"},{default:s(()=>[e("div",we,[e("div",ye,[t(d,{class:"c-card",style:{background:"rgb(157,157,77) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",ve,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[xe]),_:1}),u(" Scroll")]),ke,Ce]),_:1})]),_:1})]),Ae,Ve])]),_:1}),t(p,{name:"slide_5",class:"column no-wrap"},{default:s(()=>[e("div",Qe,[e("div",Se,[t(d,{class:"c-card",style:{background:"rgb(50,115,83) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",ze,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[Re]),_:1}),u(" zkLink ")]),Ie,Me]),_:1})]),_:1})]),Pe,qe])]),_:1}),t(p,{name:"slide_6",class:"column no-wrap"},{default:s(()=>[e("div",Be,[e("div",Ee,[t(d,{class:"c-card",style:{background:"rgb(68,56,115) !important"}},{default:s(()=>[t(n,null,{default:s(()=>[e("div",Ue,[t(c,{class:"text-dark",size:"lg"},{default:s(()=>[$e]),_:1}),u(" Trader Joe ")]),je,Je]),_:1})]),_:1})]),Oe,De])]),_:1})]),_:1},8,["modelValue"]),Le,t(d,{class:"c-card-2"},{default:s(()=>[t(n,null,{default:s(()=>[Ne,Te]),_:1})]),_:1}),Fe,Ye,e("div",We,[t($,{style:{width:"100%",background:"#26232a",height:"240px"},modelValue:o.step,"onUpdate:modelValue":i[4]||(i[4]=a=>o.step=a),ref:"stepper","done-color":"red-4","active-color":"deep-purple-3","inactive-color":"red-3",animated:""},{navigation:s(()=>[t(j,null,{default:s(()=>[t(g,{onClick:o.stepClick,color:"primary",label:o.step===2?"Finish":"Continue",style:x(o.step===3?"visibility: hidden":"")},null,8,["onClick","label","style"]),o.step>1?(f(),k(g,{key:0,flat:"",color:"primary",onClick:i[3]||(i[3]=a=>o.$refs.stepper.previous()),label:"Back",class:"q-ml-sm",style:x(o.step===3?"visibility: hidden":"")},null,8,["style"])):z("",!0)]),_:1})]),default:s(()=>[t(b,{name:1,title:"Your email",icon:"mail",done:o.step>1},{default:s(()=>[t(m,{ref:"emailRef",rules:[(a,_)=>_.email(a)||"Please enter a valid email address"],dark:"",standout:"bg-deep-purple-4 text-white",modelValue:o.email,"onUpdate:modelValue":i[1]||(i[1]=a=>o.email=a),label:"email",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"])]),_:1},8,["done"]),t(b,{name:2,title:"Your wallet",icon:"wallet",done:o.step>2},{default:s(()=>[t(m,{ref:"walletRef",rules:[a=>a.length>=10||"Minimum 10 characters"],dark:"",standout:"bg-deep-purple-4 text-white",modelValue:o.wallet,"onUpdate:modelValue":i[2]||(i[2]=a=>o.wallet=a),label:"wallet",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"])]),_:1},8,["done"]),t(b,{name:3,title:"Done",icon:"recommend"},{default:s(()=>[e("div",Ge,[t(c,{color:"pink-1",name:"done",size:"5em"}),He]),Ke]),_:1})]),_:1},8,["modelValue"])])]),t(J,{position:"bottom-right",offset:[18,18]},{default:s(()=>[t(g,{onClick:i[5]||(i[5]=a=>o.isModalOpen=!0),fab:"",icon:"help",color:"primary"})]),_:1})]),_:1}),t(E,{modelValue:o.isModalOpen,"onUpdate:modelValue":i[8]||(i[8]=a=>o.isModalOpen=a),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:s(()=>[t(d,{class:"text-white",style:{width:"50%",background:"#26232a"}},{default:s(()=>[t(O,null,{default:s(()=>[t(D),R((f(),k(g,{dense:"",flat:"",icon:"close"},{default:s(()=>[t(L,{class:"bg-white text-primary"},{default:s(()=>[u("Close")]),_:1})]),_:1})),[[N]])]),_:1}),t(n,null,{default:s(()=>[Xe]),_:1}),t(n,{class:"q-pt-none"},{default:s(()=>[t(m,{ref:"questionRef",rules:[a=>a.length>=10||"Minimum 10 characters"],"lazy-rules":"ondemand",dark:"",standout:"bg-deep-purple-4 text-white",modelValue:o.question,"onUpdate:modelValue":i[6]||(i[6]=a=>o.question=a),label:"question",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"]),Ze,t(m,{ref:"emailQuestionRef",rules:[(a,_)=>_.email(a)||"Please enter a valid email address"],"lazy-rules":"ondemand",dark:"",standout:"bg-deep-purple-4 text-white",modelValue:o.emailQuestion,"onUpdate:modelValue":i[7]||(i[7]=a=>o.emailQuestion=a),label:"email",color:"grey-3","label-color":"pink-1"},null,8,["rules","modelValue"]),et,t(g,{onClick:o.questionClick,color:"deep-purple-3",label:"Send"},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var nt=A(T,[["render",tt],["__scopeId","data-v-d3a608f8"]]);export{nt as default};