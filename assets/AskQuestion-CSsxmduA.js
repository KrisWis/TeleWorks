import{r as n,j as _}from"./react-GnO0LmOb.js";import{A as s,a as r}from"./@szhsin-CwhS27Qv.js";import{c as d,d as p}from"./index-CCNimua0.js";const m="_FAQ_accordion__accordion_1enwf_1",b="_FAQ_accordion__wrapper_1enwf_6",i={FAQ_accordion__accordion:m,FAQ_accordion__wrapper:b},u="_faqTab__accordion__item_1pktp_1",f="_faqTab__accordion__item__active_1pktp_7",l="_faqTab__accordion__item__btn_1pktp_10",T="_faqTab__accordion__itemContent_1pktp_27",q="_faqTab__accordion__itemContent__active_1pktp_31",A="_faqTab__accordion__item__chevron_1pktp_34",k="_faqTab__accordion__item__btnExpanded_1pktp_39",Q="_faqTab__accordion__itemPanel_1pktp_42",h="_faqTab__accordion__itemHeading_1pktp_52",v="_faqTab__accordion__itemHeading__active_1pktp_56",a={faqTab__accordion__item:u,faqTab__accordion__item__active:f,faqTab__accordion__item__btn:l,faqTab__accordion__itemContent:T,faqTab__accordion__itemContent__active:q,faqTab__accordion__item__chevron:A,faqTab__accordion__item__btnExpanded:k,faqTab__accordion__itemPanel:Q,faqTab__accordion__itemHeading:h,faqTab__accordion__itemHeading__active:v},x=o=>n.createElement("svg",{width:16,height:35,viewBox:"0 0 16 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.540722 34.3314C-0.180241 33.44 -0.180241 31.9947 0.540722 31.1033L11.5429 17.5L0.540722 3.8965C-0.180241 3.00506 -0.180241 1.56001 0.540722 0.668575C1.26169 -0.222858 2.43053 -0.222858 3.15151 0.668575L15.4593 15.886C16.1802 16.7774 16.1802 18.2225 15.4593 19.1139L3.15151 34.3314C2.43053 35.2229 1.26169 35.2229 0.540722 34.3314Z",fill:"#001A72"})),w=({header:o,...c})=>_.jsx(s,{...c,header:_.jsxs(_.Fragment,{children:[o,_.jsx(x,{className:a.faqTab__accordion__item__chevron})]}),className:({isEnter:e})=>`${a.faqTab__accordion__item} ${e?a.faqTab__accordion__item__active:""}`,buttonProps:{className:({isEnter:e})=>`${a.faqTab__accordion__item__btn} ${e?a.faqTab__accordion__item__btnExpanded:""}`},contentProps:{className:({isEnter:e})=>`${a.faqTab__accordion__itemContent} ${e?a.faqTab__accordion__itemContent__active:""}`},panelProps:{className:a.faqTab__accordion__itemPanel},headingProps:{className:({isEnter:e})=>`${a.faqTab__accordion__itemHeading} Page__SirineWrapper ${e?a.faqTab__accordion__itemHeading__active:""}`}}),S=n.memo(({FAQ_accordion_items:o})=>_.jsx("div",{className:`${i.FAQ_accordion__wrapper} Page__BoxShadowWrapper`,children:_.jsx(r,{className:i.FAQ_accordion__accordion,transition:!0,transitionTimeout:250,children:o.map(c=>_.jsx(w,{header:c.title,children:c.desc},c.title))})})),g="_AskQuestion_1ehwu_1",j="_AskQuestion__caption_1ehwu_9",C="_AskQuestion__desc_1ehwu_16",N="_AskQuestion__desc__red_1ehwu_24",$="_AskQuestion__desc__support_1ehwu_28",P="_AskQuestion__button_1ehwu_31",t={AskQuestion:g,AskQuestion__caption:j,AskQuestion__desc:C,AskQuestion__desc__red:N,AskQuestion__desc__support:$,AskQuestion__button:P},y=n.memo(({className:o})=>_.jsxs("div",{className:`${t.AskQuestion} Page__BoxShadowWrapper ${o}`,children:[_.jsx("span",{className:t.AskQuestion__caption,children:"Не нашли ответ на ваш вопрос?"}),_.jsxs("p",{className:t.AskQuestion__desc,children:["Свяжитесь с нами, наша"," ",_.jsx("span",{className:t.AskQuestion__desc__support,children:"тех.поддержка"})," ","решит ваш вопрос, мы на связи"," ",_.jsx("span",{className:t.AskQuestion__desc__red,children:"24/7"})]}),_.jsx(d,{className:t.AskQuestion__button,to:"https://t.me/TeleWorksSupportbot",text:"Задать вопрос",type:p.RED})]}));export{y as A,S as F};
