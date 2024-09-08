import{r as a,j as _}from"./react-e8hmi6Ay.js";import{F as k,U as x}from"./index-SlVSPAgj.js";import{C,L as b,a as B}from"./chart.js-DKcZzhFa.js";import{L as P}from"./react-chartjs-2-DLbkYb6X.js";import{A as L}from"./Avatar_types-DVdqtjDQ.js";var l=(s=>(s.MEDIUM="medium",s.SMALL="small",s))(l||{});const j="_stats__item_y27fm_1",A="_stats__item__small_y27fm_11",v="_stats__item__stats_y27fm_15",y="_stats__item__stats__chart_y27fm_19",$="_stats__item__stats__chart__small_y27fm_24",N="_stats__item__stats__chartImg_y27fm_29",R="_stats__item__stats__chartImg__small_y27fm_34",G="_stats__item__stats__caption_y27fm_38",M="_stats__item__stats__caption__small_y27fm_45",S="_stats__item__stats__dates_y27fm_49",E="_stats__item__stats__amount_y27fm_57",I="_stats__item__stats__amount__small_y27fm_64",H="_stats__item__stats__amount__subscribers_y27fm_68",w="_stats__item__stats__amount__subscribers__small_y27fm_75",V="_stats__item__stats__amount__subscribers__grow_y27fm_79",Z="_stats__item__stats__amount__subscribers__shrink_y27fm_82",U="_stats__item__stats__date_y27fm_49",q="_stats__item__stats__date_text_y27fm_89",D="_stats__item__stats__date_text__small_y27fm_98",F="_stats__item__stats__date_text__postfix_y27fm_101",W="_stats__item__stats__graphics_y27fm_106",z="_stats__item__stats__graphics__caption_y27fm_110",T="_stats__item__stats__graphics__caption__small_y27fm_118",t={stats__item:j,stats__item__small:A,stats__item__stats:v,stats__item__stats__chart:y,stats__item__stats__chart__small:$,stats__item__stats__chartImg:N,stats__item__stats__chartImg__small:R,stats__item__stats__caption:G,stats__item__stats__caption__small:M,stats__item__stats__dates:S,stats__item__stats__amount:E,stats__item__stats__amount__small:I,stats__item__stats__amount__subscribers:H,stats__item__stats__amount__subscribers__small:w,stats__item__stats__amount__subscribers__grow:V,stats__item__stats__amount__subscribers__shrink:Z,stats__item__stats__date:U,stats__item__stats__date_text:q,stats__item__stats__date_text__small:D,stats__item__stats__date_text__postfix:F,stats__item__stats__graphics:W,stats__item__stats__graphics__caption:z,stats__item__stats__graphics__caption__small:T};C.register(b,B);const J=a.memo(({chartDataSets:s,className:c})=>{const i=a.useRef("var(--white-color)"),[o,u]=a.useState({labels:s.map(e=>e.label),datasets:[{data:s.map(e=>e.value),tension:0,backgroundColor:i.current,borderColor:"#35EC17",pointBorderColor:"transparent",pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f55",pointHoverBorderColor:"var(--white-color)",pointRadius:10,fill:!0}]}),[m,g]=a.useState(!1);return a.useEffect(()=>{if(!m){const e=document.getElementById("InterpolationLineChartSecondaryCanvas");e&&(i.current=e.getContext("2d").createLinearGradient(0,0,0,400),i.current.addColorStop(0,"rgba(53, 236, 23, 0)"),i.current.addColorStop(1,"rgba(53, 236, 23, 1)"),u({labels:o.labels,datasets:[{...o.datasets[0],backgroundColor:i.current}]}),g(!0))}},[o.datasets,o.labels,m]),_.jsx(P,{id:"InterpolationLineChartSecondaryCanvas",className:c,options:{responsive:!0,spanGaps:!0,interaction:{mode:"index",intersect:!1},elements:{line:{fill:!1}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},data:o})}),C_=a.memo(({amount:s,amounts__subscribers:c,amounts:i,stats:o,caption:u,graphic_imgURL:m,graphicChart:g,type:e=l.MEDIUM})=>_.jsxs("div",{className:`${t.stats__item} ${e==l.SMALL?t.stats__item__small:""} Page__GrayBorderWrapper`,children:[_.jsxs(k,{align:"start",justify:"between",children:[_.jsx("span",{className:`${t.stats__item__stats__caption} ${e==l.SMALL?t.stats__item__stats__caption__small:""}`,children:s}),_.jsx("h4",{className:`${t.stats__item__stats__graphics__caption} ${e==l.SMALL?t.stats__item__stats__graphics__caption__small:""}`,children:u})]}),_.jsxs("div",{className:t.stats__item__stats__graphics,children:[_.jsx("div",{className:t.stats__item__stats__dates,children:c?c.map((r,n)=>_.jsxs("div",{className:t.stats__item__stats__date,children:[_.jsx("span",{className:`${t.stats__item__stats__amount__subscribers} 
                      ${e==l.SMALL?t.stats__item__stats__amount__subscribers__small:""} ${r.prefix=="+"?t.stats__item__stats__amount__subscribers__grow:t.stats__item__stats__amount__subscribers__shrink}`,children:r.prefix+String(r.number)}),_.jsxs("span",{className:`${t.stats__item__stats__date_text} ${e==l.SMALL?t.stats__item__stats__date_text__small:""}`,children:[o[n].stat,o[n].postfix&&_.jsx("span",{className:t.stats__item__stats__date_text__postfix,children:o[n].postfix})]})]},n)):i==null?void 0:i.map((r,n)=>_.jsxs("div",{className:t.stats__item__stats__date,children:[_.jsx("span",{className:`${t.stats__item__stats__amount} ${e==l.SMALL?t.stats__item__stats__amount__small:""}`,children:r}),_.jsxs("span",{className:t.stats__item__stats__date_text,children:[o[n].stat,o[n].postfix&&_.jsx("span",{className:t.stats__item__stats__date_text__postfix,children:o[n].postfix})]})]},n))}),m?_.jsx("img",{className:`${t.stats__item__stats__chartImg} ${e==l.SMALL?t.stats__item__stats__chartImg__small:""}`,src:m,alt:"Изображение графика"}):g&&_.jsx(J,{className:`${t.stats__item__stats__chart} ${e==l.SMALL?t.stats__item__stats__chart__small:""}`,chartDataSets:g})]})]})),K="_ProfileAvatar_c4s71_1",O={ProfileAvatar:K},b_=a.memo(({src:s,className:c,size:i})=>_.jsx("div",{className:`${O.ProfileAvatar} ${c}`,children:_.jsx(L,{imgURL:s,imgSize:i})})),Q="_ProfileChannelRating_hbx41_1",X="_ProfileChannelRating__background_hbx41_8",Y="_ProfileChannelRating__text_hbx41_14",__="_ProfileChannelRating__svg_hbx41_22",d={ProfileChannelRating:Q,ProfileChannelRating__background:X,ProfileChannelRating__text:Y,ProfileChannelRating__svg:__},t_=s=>a.createElement("svg",{width:23,height:24,viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},a.createElement("path",{d:"M14.3156 10.6868H9.07942C8.71412 10.6868 8.41797 10.9829 8.41797 11.3482V22.5329C8.41797 22.8982 8.71412 23.1943 9.07942 23.1943H14.3156C14.6809 23.1943 14.977 22.8982 14.977 22.5329V11.3482C14.977 10.9829 14.6809 10.6868 14.3156 10.6868Z",fill:"black"}),a.createElement("path",{d:"M22.3052 16.3959H16.9573C16.5921 16.3959 16.2959 16.692 16.2959 17.0573V22.533C16.2959 22.8983 16.5921 23.1944 16.9573 23.1944H22.3052C22.6704 23.1944 22.9666 22.8983 22.9666 22.533V17.0573C22.9666 16.692 22.6704 16.3959 22.3052 16.3959Z",fill:"black"}),a.createElement("path",{d:"M6.44578 13.755H1.09797C0.732676 13.755 0.436523 14.0512 0.436523 14.4165V22.5327C0.436523 22.898 0.732676 23.1942 1.09797 23.1942H6.44578C6.81108 23.1942 7.10723 22.898 7.10723 22.5327V14.4165C7.10723 14.0512 6.81112 13.755 6.44578 13.755Z",fill:"black"}),a.createElement("path",{d:"M11.7045 5.00989H11.6921C10.1909 5.00989 8.96973 6.23114 8.96973 7.73223V8.21875C8.96973 8.66267 9.33088 9.02386 9.77484 9.02386H13.6217C14.0657 9.02386 14.4268 8.66271 14.4268 8.21875V7.73223C14.4268 6.23114 13.2056 5.00989 11.7045 5.00989Z",fill:"black"}),a.createElement("path",{d:"M11.6984 3.68717C12.5493 3.68717 13.2415 2.99856 13.2415 2.15209C13.1568 0.115663 10.2396 0.11628 10.1553 2.15209C10.1553 2.99856 10.8475 3.68717 11.6984 3.68717Z",fill:"black"}),a.createElement("path",{d:"M3.77819 8.17517H3.7658C2.26467 8.17517 1.04346 9.39642 1.04346 10.8975V11.384C1.04346 11.828 1.40461 12.1891 1.84857 12.1891H5.69547C6.13938 12.1891 6.50058 11.828 6.50058 11.384V10.8975C6.50058 9.39642 5.27933 8.17517 3.77819 8.17517Z",fill:"black"}),a.createElement("path",{d:"M3.77163 6.85246C4.62252 6.85246 5.31474 6.16385 5.31474 5.31737C5.23008 3.28095 2.31283 3.28156 2.22852 5.31737C2.22852 6.16385 2.92074 6.85246 3.77163 6.85246Z",fill:"black"}),a.createElement("path",{d:"M19.6371 10.4307H19.6247C18.1236 10.4307 16.9023 11.6519 16.9023 13.1531V13.6396C16.9023 14.0835 17.2635 14.4447 17.7075 14.4447H21.5544C21.9983 14.4447 22.3595 14.0835 22.3595 13.6396V13.1531C22.3595 11.6519 21.1382 10.4307 19.6371 10.4307Z",fill:"black"}),a.createElement("path",{d:"M19.631 9.10766C20.4819 9.10766 21.1741 8.41905 21.1741 7.57262C21.0895 5.5362 18.1722 5.53681 18.0879 7.57262C18.0878 8.41905 18.7801 9.10766 19.631 9.10766Z",fill:"black"})),B_=a.memo(({backgroundIsVisible:s,rating:c})=>_.jsxs("div",{className:`${d.ProfileChannelRating} ${s?d.ProfileChannelRating__background:""}`,children:[_.jsx(t_,{className:d.ProfileChannelRating__svg}),_.jsx("span",{className:d.ProfileChannelRating__text,children:c.toFixed(1)})]})),s_="_GeoLanguageBlock_4q5y5_1",a_="_GeoLanguageBlock__img_4q5y5_13",e_="_GeoLanguageBlock__caption_4q5y5_17",o_="_GeoLanguageBlock__desc_4q5y5_24",h={GeoLanguageBlock:s_,GeoLanguageBlock__img:a_,GeoLanguageBlock__caption:e_,GeoLanguageBlock__desc:o_},P_=a.memo(({geoLanguage:s})=>_.jsxs("div",{className:h.GeoLanguageBlock,children:[_.jsx("img",{className:h.GeoLanguageBlock__img,src:`${x}/ProfilePage/icons/profile__footer/geo.png`,alt:"Иконка гео"}),_.jsx("h3",{className:h.GeoLanguageBlock__caption,children:"Гео / Язык"}),_.jsx("span",{className:h.GeoLanguageBlock__desc,children:s})]}));var i_=(s=>(s.RUSSIAN="Россия / Русский",s))(i_||{});const l_="_AgeBlock_1f8u2_1",n_="_AgeBlock__img_1f8u2_13",c_="_AgeBlock__caption_1f8u2_17",m_="_AgeBlock__desc_1f8u2_24",p={AgeBlock:l_,AgeBlock__img:n_,AgeBlock__caption:c_,AgeBlock__desc:m_},L_=a.memo(({age:s})=>_.jsxs("div",{className:p.AgeBlock,children:[_.jsx("img",{className:p.AgeBlock__img,src:`${x}/ProfilePage/icons/profile__footer/age.png`,alt:"Иконка возраста"}),_.jsx("h3",{className:p.AgeBlock__caption,children:"Возраст"}),_.jsx("span",{className:p.AgeBlock__desc,children:s})]})),r_="_PostsBlock_bt2lj_1",g_="_PostsBlock__img_bt2lj_13",d_="_PostsBlock__caption_bt2lj_17",h_="_PostsBlock__desc_bt2lj_24",f={PostsBlock:r_,PostsBlock__img:g_,PostsBlock__caption:d_,PostsBlock__desc:h_},j_=a.memo(({postsAmount:s})=>_.jsxs("div",{className:f.PostsBlock,children:[_.jsx("img",{className:f.PostsBlock__img,src:`${x}/ProfilePage/icons/profile__footer/posts.png`,alt:"Иконка постов"}),_.jsx("h3",{className:f.PostsBlock__caption,children:"Постов"}),_.jsx("span",{className:f.PostsBlock__desc,children:s})]}));export{L_ as A,P_ as G,b_ as P,C_ as S,B_ as a,i_ as b,j_ as c,l as d};
