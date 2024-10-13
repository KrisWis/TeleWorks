import{r as a,j as _}from"./react-GnO0LmOb.js";import{F as f}from"./index-D4bZW8M2.js";import{C as x,L as C,a as B}from"./chart.js-DKcZzhFa.js";import{L as b}from"./react-chartjs-2-C2kzdvfa.js";import{A as P}from"./Avatar_types-CT3lO-Gd.js";import{U as u}from"./app-routes-CmLnHQ2b.js";var n=(t=>(t.MEDIUM="medium",t.SMALL="small",t))(n||{});const L="_stats__item_q7kcz_3",v="_stats__item__small_q7kcz_13",A="_stats__item__stats_q7kcz_23",j="_stats__item__stats__chart_q7kcz_27",$="_stats__item__stats__chart__small_q7kcz_32",N="_stats__item__stats__caption_q7kcz_54",R="_stats__item__stats__caption__small_q7kcz_62",q="_stats__item__stats__dates_q7kcz_72",G="_stats__item__stats__amount_q7kcz_85",z="_stats__item__stats__amount__small_q7kcz_92",M="_stats__item__stats__amount__subscribers_q7kcz_102",S="_stats__item__stats__amount__subscribers__small_q7kcz_109",E="_stats__item__stats__amount__subscribers__grow_q7kcz_119",H="_stats__item__stats__amount__subscribers__shrink_q7kcz_122",w="_stats__item__stats__date_q7kcz_72",y="_stats__item__stats__date_text_q7kcz_129",V="_stats__item__stats__date_text__small_q7kcz_138",I="_stats__item__stats__date_text__postfix_q7kcz_146",Z="_stats__item__stats__graphics_q7kcz_156",U="_stats__item__stats__graphics__caption_q7kcz_160",D="_stats__item__stats__graphics__caption__small_q7kcz_168",s={stats__item:L,stats__item__small:v,stats__item__stats:A,stats__item__stats__chart:j,stats__item__stats__chart__small:$,stats__item__stats__caption:N,stats__item__stats__caption__small:R,stats__item__stats__dates:q,stats__item__stats__amount:G,stats__item__stats__amount__small:z,stats__item__stats__amount__subscribers:M,stats__item__stats__amount__subscribers__small:S,stats__item__stats__amount__subscribers__grow:E,stats__item__stats__amount__subscribers__shrink:H,stats__item__stats__date:w,stats__item__stats__date_text:y,stats__item__stats__date_text__small:V,stats__item__stats__date_text__postfix:I,stats__item__stats__graphics:Z,stats__item__stats__graphics__caption:U,stats__item__stats__graphics__caption__small:D};x.register(C,B);const F=a.memo(({chartDataSets:t,className:r})=>{const i=a.useRef("var(--white-color)"),[e,k]=a.useState({labels:t.map(o=>o.label),datasets:[{data:t.map(o=>o.value),tension:0,backgroundColor:i.current,borderColor:"#35EC17",pointBorderColor:"transparent",pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f55",pointHoverBorderColor:"var(--white-color)",pointRadius:10,fill:!0}]}),[m,c]=a.useState(!1);return a.useEffect(()=>{if(!m){const o=document.getElementById("InterpolationLineChartSecondaryCanvas");o&&(i.current=o.getContext("2d").createLinearGradient(0,0,0,400),i.current.addColorStop(0,"rgba(53, 236, 23, 0)"),i.current.addColorStop(1,"rgba(53, 236, 23, 1)"),k({labels:e.labels,datasets:[{...e.datasets[0],backgroundColor:i.current}]}),c(!0))}},[e.datasets,e.labels,m]),_.jsx(b,{id:"InterpolationLineChartSecondaryCanvas",className:r,options:{responsive:!0,spanGaps:!0,interaction:{mode:"index",intersect:!1},elements:{line:{fill:!1}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},data:e})}),f_=a.memo(({amount:t,amounts__subscribers:r,amounts:i,stats:e,caption:k,graphicChart:m,type:c=n.MEDIUM})=>_.jsxs("div",{className:`${s.stats__item} ${c==n.SMALL?s.stats__item__small:""} Page__GrayBorderWrapper`,children:[_.jsxs(f,{align:"start",justify:"between",children:[_.jsx("span",{className:`${s.stats__item__stats__caption} ${c==n.SMALL?s.stats__item__stats__caption__small:""}`,children:t}),_.jsx("h4",{className:`${s.stats__item__stats__graphics__caption} ${c==n.SMALL?s.stats__item__stats__graphics__caption__small:""}`,children:k})]}),_.jsxs("div",{className:s.stats__item__stats__graphics,children:[_.jsx("div",{className:s.stats__item__stats__dates,children:r?r.map((o,l)=>_.jsxs("div",{className:s.stats__item__stats__date,children:[_.jsx("span",{className:`${s.stats__item__stats__amount__subscribers} 
                      ${c==n.SMALL?s.stats__item__stats__amount__subscribers__small:""} ${o.prefix=="+"?s.stats__item__stats__amount__subscribers__grow:s.stats__item__stats__amount__subscribers__shrink}`,children:o.prefix+String(o.number)}),_.jsxs("span",{className:`${s.stats__item__stats__date_text} ${c==n.SMALL?s.stats__item__stats__date_text__small:""}`,children:[e[l].stat,e[l].postfix&&_.jsx("span",{className:s.stats__item__stats__date_text__postfix,children:e[l].postfix})]})]},l)):i==null?void 0:i.map((o,l)=>_.jsxs("div",{className:s.stats__item__stats__date,children:[_.jsx("span",{className:`${s.stats__item__stats__amount} ${c==n.SMALL?s.stats__item__stats__amount__small:""}`,children:o}),_.jsxs("span",{className:s.stats__item__stats__date_text,children:[e[l].stat,e[l].postfix&&_.jsx("span",{className:s.stats__item__stats__date_text__postfix,children:e[l].postfix})]})]},l))}),m&&_.jsx(F,{className:`${s.stats__item__stats__chart} ${c==n.SMALL?s.stats__item__stats__chart__small:""}`,chartDataSets:m})]})]})),W="_ProfileAvatar_f9gib_3",T={ProfileAvatar:W},x_=a.memo(({src:t,className:r,size:i})=>_.jsx("div",{className:`${T.ProfileAvatar} ${r}`,children:_.jsx(P,{imgURL:t,imgSize:i})})),J="_ProfileChannelRating_v65c8_3",K="_ProfileChannelRating__background_v65c8_16",O="_ProfileChannelRating__text_v65c8_22",Q="_ProfileChannelRating__svg_v65c8_35",g={ProfileChannelRating:J,ProfileChannelRating__background:K,ProfileChannelRating__text:O,ProfileChannelRating__svg:Q},X=t=>a.createElement("svg",{width:23,height:24,viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M14.3156 10.6868H9.07942C8.71412 10.6868 8.41797 10.9829 8.41797 11.3482V22.5329C8.41797 22.8982 8.71412 23.1943 9.07942 23.1943H14.3156C14.6809 23.1943 14.977 22.8982 14.977 22.5329V11.3482C14.977 10.9829 14.6809 10.6868 14.3156 10.6868Z",fill:"black"}),a.createElement("path",{d:"M22.3052 16.3959H16.9573C16.5921 16.3959 16.2959 16.692 16.2959 17.0573V22.533C16.2959 22.8983 16.5921 23.1944 16.9573 23.1944H22.3052C22.6704 23.1944 22.9666 22.8983 22.9666 22.533V17.0573C22.9666 16.692 22.6704 16.3959 22.3052 16.3959Z",fill:"black"}),a.createElement("path",{d:"M6.44578 13.755H1.09797C0.732676 13.755 0.436523 14.0512 0.436523 14.4165V22.5327C0.436523 22.898 0.732676 23.1942 1.09797 23.1942H6.44578C6.81108 23.1942 7.10723 22.898 7.10723 22.5327V14.4165C7.10723 14.0512 6.81112 13.755 6.44578 13.755Z",fill:"black"}),a.createElement("path",{d:"M11.7045 5.00989H11.6921C10.1909 5.00989 8.96973 6.23114 8.96973 7.73223V8.21875C8.96973 8.66267 9.33088 9.02386 9.77484 9.02386H13.6217C14.0657 9.02386 14.4268 8.66271 14.4268 8.21875V7.73223C14.4268 6.23114 13.2056 5.00989 11.7045 5.00989Z",fill:"black"}),a.createElement("path",{d:"M11.6984 3.68717C12.5493 3.68717 13.2415 2.99856 13.2415 2.15209C13.1568 0.115663 10.2396 0.11628 10.1553 2.15209C10.1553 2.99856 10.8475 3.68717 11.6984 3.68717Z",fill:"black"}),a.createElement("path",{d:"M3.77819 8.17517H3.7658C2.26467 8.17517 1.04346 9.39642 1.04346 10.8975V11.384C1.04346 11.828 1.40461 12.1891 1.84857 12.1891H5.69547C6.13938 12.1891 6.50058 11.828 6.50058 11.384V10.8975C6.50058 9.39642 5.27933 8.17517 3.77819 8.17517Z",fill:"black"}),a.createElement("path",{d:"M3.77163 6.85246C4.62252 6.85246 5.31474 6.16385 5.31474 5.31737C5.23008 3.28095 2.31283 3.28156 2.22852 5.31737C2.22852 6.16385 2.92074 6.85246 3.77163 6.85246Z",fill:"black"}),a.createElement("path",{d:"M19.6371 10.4307H19.6247C18.1236 10.4307 16.9023 11.6519 16.9023 13.1531V13.6396C16.9023 14.0835 17.2635 14.4447 17.7075 14.4447H21.5544C21.9983 14.4447 22.3595 14.0835 22.3595 13.6396V13.1531C22.3595 11.6519 21.1382 10.4307 19.6371 10.4307Z",fill:"black"}),a.createElement("path",{d:"M19.631 9.10766C20.4819 9.10766 21.1741 8.41905 21.1741 7.57262C21.0895 5.5362 18.1722 5.53681 18.0879 7.57262C18.0878 8.41905 18.7801 9.10766 19.631 9.10766Z",fill:"black"})),C_=a.memo(({backgroundIsVisible:t,rating:r})=>_.jsxs("div",{className:`${g.ProfileChannelRating} ${t?g.ProfileChannelRating__background:""}`,children:[_.jsx(X,{className:g.ProfileChannelRating__svg}),_.jsx("span",{className:g.ProfileChannelRating__text,children:r.toFixed(1)})]})),Y="_GeoLanguageBlock_1yxx9_3",__="_GeoLanguageBlock__img_1yxx9_21",t_="_GeoLanguageBlock__caption_1yxx9_32",s_="_GeoLanguageBlock__desc_1yxx9_45",d={GeoLanguageBlock:Y,GeoLanguageBlock__img:__,GeoLanguageBlock__caption:t_,GeoLanguageBlock__desc:s_},B_=a.memo(({geoLanguage:t})=>_.jsxs("div",{className:d.GeoLanguageBlock,children:[_.jsx("img",{className:d.GeoLanguageBlock__img,src:`${u}/ProfilePage/icons/profile__footer/geo.png`,alt:"Иконка гео"}),_.jsx("h3",{className:d.GeoLanguageBlock__caption,children:"Гео / Язык"}),_.jsx("span",{className:d.GeoLanguageBlock__desc,children:t})]}));var a_=(t=>(t.RUSSIAN="Россия / Русский",t))(a_||{});const e_="_AgeBlock_181qf_3",o_="_AgeBlock__img_181qf_21",i_="_AgeBlock__caption_181qf_32",c_="_AgeBlock__desc_181qf_45",p={AgeBlock:e_,AgeBlock__img:o_,AgeBlock__caption:i_,AgeBlock__desc:c_},b_=a.memo(({age:t})=>_.jsxs("div",{className:p.AgeBlock,children:[_.jsx("img",{className:p.AgeBlock__img,src:`${u}/ProfilePage/icons/profile__footer/age.png`,alt:"Иконка возраста"}),_.jsx("h3",{className:p.AgeBlock__caption,children:"Возраст"}),_.jsx("span",{className:p.AgeBlock__desc,children:t})]})),l_="_PostsBlock_d2fi7_3",n_="_PostsBlock__img_d2fi7_21",r_="_PostsBlock__caption_d2fi7_32",m_="_PostsBlock__desc_d2fi7_45",h={PostsBlock:l_,PostsBlock__img:n_,PostsBlock__caption:r_,PostsBlock__desc:m_},P_=a.memo(({postsAmount:t})=>_.jsxs("div",{className:h.PostsBlock,children:[_.jsx("img",{className:h.PostsBlock__img,src:`${u}/ProfilePage/icons/profile__footer/posts.png`,alt:"Иконка постов"}),_.jsx("h3",{className:h.PostsBlock__caption,children:"Постов"}),_.jsx("span",{className:h.PostsBlock__desc,children:t})]}));export{b_ as A,B_ as G,x_ as P,f_ as S,C_ as a,a_ as b,P_ as c,n as d};