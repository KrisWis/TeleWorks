import{r as t,j as _}from"./react-GnO0LmOb.js";import{A as s,a as r}from"./@szhsin-CwhS27Qv.js";import{B as d,a as m}from"./app-routes-JBChVfWH.js";const u="_FAQ_accordion__accordion_1enwf_1",b="_FAQ_accordion__wrapper_1enwf_6",i={FAQ_accordion__accordion:u,FAQ_accordion__wrapper:b},f="_faqTab__accordion__item_wu2qu_1",p="_faqTab__accordion__item__active_wu2qu_7",q="_faqTab__accordion__item__btn_wu2qu_10",l="_faqTab__accordion__itemContent_wu2qu_27",T="_faqTab__accordion__itemContent__active_wu2qu_31",A="_faqTab__accordion__item__chevron_wu2qu_34",Q="_faqTab__accordion__item__btnExpanded_wu2qu_39",k="_faqTab__accordion__itemPanel_wu2qu_42",v="_faqTab__accordion__itemHeading_wu2qu_52",h="_faqTab__accordion__itemHeading__active_wu2qu_56",a={faqTab__accordion__item:f,faqTab__accordion__item__active:p,faqTab__accordion__item__btn:q,faqTab__accordion__itemContent:l,faqTab__accordion__itemContent__active:T,faqTab__accordion__item__chevron:A,faqTab__accordion__item__btnExpanded:Q,faqTab__accordion__itemPanel:k,faqTab__accordion__itemHeading:v,faqTab__accordion__itemHeading__active:h},x=o=>t.createElement("svg",{width:16,height:35,viewBox:"0 0 16 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.540722 34.3314C-0.180241 33.44 -0.180241 31.9947 0.540722 31.1033L11.5429 17.5L0.540722 3.8965C-0.180241 3.00506 -0.180241 1.56001 0.540722 0.668575C1.26169 -0.222858 2.43053 -0.222858 3.15151 0.668575L15.4593 15.886C16.1802 16.7774 16.1802 18.2225 15.4593 19.1139L3.15151 34.3314C2.43053 35.2229 1.26169 35.2229 0.540722 34.3314Z",fill:"#001A72"})),w=({header:o,...n})=>_.jsx(s,{...n,header:_.jsxs(_.Fragment,{children:[o,_.jsx(x,{className:a.faqTab__accordion__item__chevron})]}),className:({isEnter:e})=>`${a.faqTab__accordion__item} ${e?a.faqTab__accordion__item__active:""}`,buttonProps:{className:({isEnter:e})=>`${a.faqTab__accordion__item__btn} ${e?a.faqTab__accordion__item__btnExpanded:""}`},contentProps:{className:({isEnter:e})=>`${a.faqTab__accordion__itemContent} ${e?a.faqTab__accordion__itemContent__active:""}`},panelProps:{className:a.faqTab__accordion__itemPanel},headingProps:{className:({isEnter:e})=>`${a.faqTab__accordion__itemHeading} Page__SirineWrapper ${e?a.faqTab__accordion__itemHeading__active:""}`}}),B=t.memo(({FAQ_accordion_items:o})=>_.jsx("div",{className:`${i.FAQ_accordion__wrapper} Page__BoxShadowWrapper`,children:_.jsx(r,{className:i.FAQ_accordion__accordion,transition:!0,transitionTimeout:250,children:o.map(n=>_.jsx(w,{header:n.title,children:n.desc},n.title))})})),g="_AskQuestion_1i5fc_1",j="_AskQuestion__caption_1i5fc_10",C="_AskQuestion__desc_1i5fc_17",N="_AskQuestion__desc__red_1i5fc_25",$="_AskQuestion__desc__support_1i5fc_29",P="_AskQuestion__button_1i5fc_32",c={AskQuestion:g,AskQuestion__caption:j,AskQuestion__desc:C,AskQuestion__desc__red:N,AskQuestion__desc__support:$,AskQuestion__button:P},S=t.memo(({className:o})=>_.jsxs("div",{className:`${c.AskQuestion} Page__BoxShadowWrapper ${o}`,children:[_.jsx("span",{className:c.AskQuestion__caption,children:"Не нашли ответ на ваш вопрос?"}),_.jsxs("p",{className:c.AskQuestion__desc,children:["Свяжитесь с нами, наша"," ",_.jsx("span",{className:c.AskQuestion__desc__support,children:"тех.поддержка"})," ","решит ваш вопрос, мы на связи"," ",_.jsx("span",{className:c.AskQuestion__desc__red,children:"24/7"})]}),_.jsx(d,{className:c.AskQuestion__button,to:"https://t.me/TeleWorksSupportbot",text:"Задать вопрос",type:m.RED})]}));export{S as A,B as F};
