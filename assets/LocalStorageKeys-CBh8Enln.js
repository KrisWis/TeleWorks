var e=(E=>(E.UPDATE="update",E.GET="get",E.DELETE="delete",E))(e||{});const I=(E,R,T)=>{if(E==e.UPDATE)localStorage.setItem(R,JSON.stringify(T));else if(E==e.GET){const t=localStorage.getItem(R);return t&&t!=="undefined"?JSON.parse(t):!1}else E==e.DELETE&&localStorage.removeItem(R);return!0};var _=(E=>(E.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM="CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM",E.CREATE_ORDER_STEP="CREATE_ORDER_STEP",E.USER_EDIT_GENERAL="USER_EDIT_GENERAL",E.USER_EDIT_ABOUT="USER_EDIT_ABOUT",E))(_||{});export{_ as L,I as U,e as a};