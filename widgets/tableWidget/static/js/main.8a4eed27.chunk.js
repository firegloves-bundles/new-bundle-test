(window["webpackJsonppoint-2-d-table-widget"]=window["webpackJsonppoint-2-d-table-widget"]||[]).push([[0],{112:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"notAuthenticated":"User is not authenticated.","loadingMore":"Loading more...","download":"Download file","dataDeleted":"Point2D successfully deleted","yes":"Yes","no":"No","delete":""},"pagination":{"ariaLabels":{"firstPage":"first page","previousPage":"previous page","nextPage":"next page","lastPage":"last page"}},"filters":{"field":"Field","value":"Value","addFilter":"Add filter","clearFilters":"Clear filters","filter":"Filter","operator":"Operator","operators":{"equals":"equals","in":"in","specified":"specified","unspecified":"unspecified","contains":"contains"}},"entities":{"point2D":{"deleteDialog":{"title":"Delete point2D","description":"Are you sure?"},"noItems":"No point2DS available","id":"entities.point2D.id","name1":"entities.point2D.name1","name2":"entities.point2D.name2"}}}')},113:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"notAuthenticated":"L\'utente non \xe8 autenticato.","loadingMore":"Caricamento in corso...","download":"Scarica file","dataDeleted":"Point2D eliminato/a con successo","yes":"Si","no":"No","delete":""},"pagination":{"ariaLabels":{"firstPage":"prima pagina","previousPage":"pagina precedente","nextPage":"pagina successiva","lastPage":"ultima pagina"}},"filters":{"field":"Campo","value":"Valore","addFilter":"Aggiungi filtro","clearFilters":"Rimuovi filtri","filter":"Filtro","operator":"Operatore","operators":{"equals":"\xe8 uguale a","in":"in","specified":"specificato","unspecified":"non specificato","contains":"contiene"}},"entities":{"point2D":{"deleteDialog":{"title":"Elimina point2D","description":"Sei sicuro/a?"},"noItems":"Nessun point2DS disponibile","id":"entit\xe0.point2D.id","name1":"entit\xe0.point2D.name1","name2":"entit\xe0.point2D.name2"}}}')},130:function(e,t,a){e.exports=a(151)},151:function(e,t,a){"use strict";a.r(t);var n=a(23),i=a(24),r=a(25),o=a(27),c=a(115),l=a(6),s=a(0),u=a.n(s),d=a(11),p=a.n(d),f=a(93),m=a.n(f),b=a(215),h=a(114),g=a(220),v=a(214),O=a(15),E=u.a.createContext(null),j=a(14),y=[5,10,25],k={currentPage:0,itemsPerPage:y[y.length-1]},C=u.a.createContext({pagination:k}),D=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;Object(n.a)(this,a),i=t.call(this,e);var r="pagination"===e.paginationMode?y[0]:y[y.length-1];return i.state={pagination:Object(l.a)(Object(l.a)({},k),{},{itemsPerPage:r})},i.onChangeItemsPerPage=i.onChangeItemsPerPage.bind(Object(j.a)(i)),i.onChangeCurrentPage=i.onChangeCurrentPage.bind(Object(j.a)(i)),i}return Object(i.a)(a,[{key:"onChangeItemsPerPage",value:function(e){var t=e.target.value,a=parseInt(t,10);this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{itemsPerPage:a,currentPage:0})})}))}},{key:"onChangeCurrentPage",value:function(e){var t=parseInt(e,10);this.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{currentPage:t})})}))}},{key:"render",value:function(){var e=this.state.pagination,t=this.props.children;return u.a.createElement(C.Provider,{value:Object(l.a)(Object(l.a)({},e),{},{onChangeCurrentPage:this.onChangeCurrentPage,onChangeItemsPerPage:this.onChangeItemsPerPage})},t)}}]),a}(u.a.Component);D.defaultProps={paginationMode:""};var w=a(22),P=a.n(w),F=a(18),x=a(45),R=a(19),S=a(213),I=a(201),N=a(76),A=a.n(N),M=a(4),L=a(111),T=a.n(L),U=a(5),z=a.n(U),W=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),a(77));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);var H=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?t:null},q=function(e){var t=e.children,a=e.keycloak;return a.initialized&&a.authenticated?null:t},K=a(200),X=a(219),J=a(199),V=a(197),G=a(198),Y=a(196),B=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={open:!1},i.handleOpen=i.handleOpen.bind(Object(j.a)(i)),i.discard=i.discard.bind(Object(j.a)(i)),i.confirm=i.confirm.bind(Object(j.a)(i)),i}return Object(i.a)(a,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(a.DISCARD)}},{key:"confirm",value:function(){this.handleClose(a.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,a=t.dialog,n=a.title,i=a.description,r=a.confirmLabel,o=a.discardLabel,c=t.Renderer;return u.a.createElement("div",null,u.a.createElement(c,{onClick:this.handleOpen}),u.a.createElement(X.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},u.a.createElement(Y.a,{id:"confirmation-dialog-title"},n),u.a.createElement(V.a,null,u.a.createElement(G.a,{id:"confirmation-dialog-description"},i)),u.a.createElement(J.a,null,u.a.createElement(K.a,{onClick:this.discard,autoFocus:!0},o),u.a.createElement(K.a,{onClick:this.confirm,color:"primary"},r))))}}]),a}(s.PureComponent);B.CONFIRM="CONFIRM",B.DISCARD="DISCARD";var Q=a(102),Z=a(217);function $(e){var t=function(t){Object(r.a)(c,t);var a=Object(o.a)(c);function c(){var t;Object(n.a)(this,c);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=a.call.apply(a,[this].concat(r))).renderWrappedComponent=function(a){var n=t.props,i=n.forwardedRef,r=Object(W.a)(n,["forwardedRef"]);return u.a.createElement(e,Object.assign({},r,{ref:i,pagination:a}))},t}return Object(i.a)(c,[{key:"render",value:function(){return u.a.createElement(C.Consumer,null,this.renderWrappedComponent)}}]),c}(s.Component);return t.defaultProps={forwardedRef:null},Object(s.forwardRef)((function(e,a){return u.a.createElement(t,Object.assign({},e,{forwardedRef:a}))}))}var _=a(103),ee=a.n(_),te=a(104),ae=a.n(te),ne=a(105),ie=a.n(ne),re=a(106),oe=a.n(re),ce=Object(R.b)()(Object(M.a)({root:{flexShrink:0,marginLeft:"5px"}})((function(e){var t=e.classes,a=e.count,n=e.page,i=e.rowsPerPage,r=e.onChangePage,o=e.t;return u.a.createElement("div",{className:t.root},u.a.createElement(I.a,{onClick:function(){r(0)},disabled:0===n,"aria-label":o("pagination.ariaLabels.firstPage")},u.a.createElement(ee.a,null)),u.a.createElement(I.a,{onClick:function(){r(n-1)},disabled:0===n,"aria-label":o("pagination.ariaLabels.previousPage")},u.a.createElement(ae.a,null)),u.a.createElement(I.a,{onClick:function(){r(n+1)},disabled:n>=Math.ceil(a/i)-1,"aria-label":o("pagination.ariaLabels.nextPage")},u.a.createElement(ie.a,null)),u.a.createElement(I.a,{onClick:function(){r(Math.max(0,Math.ceil(a/i)-1))},disabled:n>=Math.ceil(a/i)-1,"aria-label":o("pagination.ariaLabels.lastPage")},u.a.createElement(oe.a,null)))}))),le=(z.a.shape({id:z.a.number,name1:z.a.string,name2:z.a.string}),Object(R.b)()($((function(e){var t=e.children,a=e.pagination,n=e.paginationMode,i=e.items,r=e.count,o=e.t;return"infinite-scroll"===n?u.a.createElement(Q.a,{dataLength:i.length,next:function(){return a.onChangeCurrentPage(a.currentPage+1)},hasMore:i.length<r,loader:u.a.createElement("div",null,o("common.loadingMore"))},t):"pagination"===n?u.a.createElement(u.a.Fragment,null,t,r>0&&u.a.createElement(Z.a,{component:"div",rowsPerPageOptions:y,count:r,rowsPerPage:a.itemsPerPage,page:a.currentPage,SelectProps:{native:!0},onChangePage:a.onChangeCurrentPage,onChangeRowsPerPage:a.onChangeItemsPerPage,ActionsComponent:ce})):t})))),se=a(153),ue=a(48),de=a(216),pe=a(206),fe=a(223),me=a(207),be=a(222),he=(z.a.shape({field:z.a.string,operator:z.a.string,value:z.a.string}),["specified","unspecified"]),ge=["equals","in"].concat(he),ve=["contains"],Oe=[{value:"greaterThan",title:">"},{value:"lessThan",title:"<"},{value:"greaterOrEqualThan",title:">="},{value:"lessOrEqualThan",title:"<="}],Ee=["name1","name2"],je=[],ye=["id"],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.filter((function(e){return e.field&&e.operator})).reduce((function(e,t){switch(t.operator){case"specified":return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=true")]);case"unspecified":return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".specified")),"=false")])}return[].concat(Object(F.a)(e),["".concat(encodeURIComponent("".concat(t.field,".").concat(t.operator)),"=").concat(encodeURIComponent(t.value))])}),[]).join("&"):""},Ce=Object(M.a)((function(){return{formControl:{minWidth:120,width:"90%"},icon:{color:"rgba(0, 0, 0, 0.54)"}}}),{withTheme:!0})(Object(R.b)()((function(e){var t,a=e.filter,n=e.t,i=e.update,r=e.remove,o=e.filterId,c=e.classes,l=(t=a.field,[].concat(Object(F.a)(ge),Object(F.a)(Ee.includes(t)?ve:[]),Object(F.a)(je.includes(t)?Oe:[]),Object(F.a)(ye.includes(t)?Oe:[]))),s=function(e){i(o,Object(ue.a)({},e.target.name,e.target.value))};return u.a.createElement(pe.a,{container:!0},u.a.createElement(pe.a,{item:!0,xs:5},u.a.createElement(me.a,{className:c.formControl},u.a.createElement(be.a,{id:"".concat(o,"-field-label")},n("filters.field")),u.a.createElement(de.a,{native:!0,labelId:"".concat(o,"-field-label"),id:"".concat(o,"-field"),name:"field",value:a.field,onChange:s},u.a.createElement("option",{value:""}),u.a.createElement("option",{value:"id"},n("entities.point2D.id")),u.a.createElement("option",{value:"name1"},n("entities.point2D.name1")),u.a.createElement("option",{value:"name2"},n("entities.point2D.name2"))))),u.a.createElement(pe.a,{item:!0,xs:3},!!a.field&&u.a.createElement(me.a,{className:c.formControl},u.a.createElement(be.a,{id:"".concat(o,"-operator-label")},n("filters.operator")),u.a.createElement(de.a,{native:!0,labelId:"".concat(o,"-operator-label"),id:"".concat(o,"-operator"),name:"operator",value:a.operator,onChange:s},u.a.createElement("option",{value:""}),l.map((function(e){return"string"!==typeof e?u.a.createElement("option",{key:e.value,value:e.value},e.title):u.a.createElement("option",{key:e,value:e},n("filters.operators.".concat(e)))}))))),u.a.createElement(pe.a,{item:!0,xs:3},!!a.operator&&!he.includes(a.operator)&&u.a.createElement(me.a,{className:c.formControl},u.a.createElement(fe.a,{disabled:!a.field,id:"standard-required",name:"value",value:a.value,onChange:s,margin:"normal"}))),u.a.createElement(pe.a,{item:!0,xs:1},u.a.createElement(I.a,{"aria-label":"Remove filter",className:c.icon,onClick:function(){r(o)}},u.a.createElement(A.a,null))))}))),De=function(e){var t=e.classes,a=e.filters,n=e.applyFilter,i=e.update,r=e.remove,o=e.clear,c=e.add,l=e.t,s=e.error,d=a.length>0;return u.a.createElement(se.a,{className:t.root},u.a.createElement(K.a,{variant:"contained",className:t.button,onClick:c,"data-testid":"button-add-filter"},l("filters.addFilter")),d&&u.a.createElement(K.a,{className:t.button,onClick:o},l("filters.clearFilters")),a.map((function(e,t){var a="".concat(e.field).concat(e.operator).concat(t);return u.a.createElement(Ce,{key:a,update:i,remove:r,filterId:t,filter:e})})),d&&u.a.createElement(K.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){var e=d&&a.map((function(e){return e.field&&e.operator&&!he.includes(e.operator)?e.value?"":"missing filter parameters":""})).filter((function(e){return!!e}));e&&e.length>0?s(e[0]):n()}},l("filters.filter")))};De.defaultProps={applyFilter:function(){},add:function(){},update:function(){},remove:function(){},clear:function(){},error:function(){}};var we=Object(M.a)({root:{flexGrow:1,padding:"5px",marginRight:"65px"},paper:{padding:"5px",textAlign:"center",height:"30px"},icon:{padding:"5px",color:"#555555","&:hover":{color:"#000000"}},button:{margin:"5px"}})(Object(R.b)()(De)),Pe=a(209),Fe=a(210),xe=a(211),Re=a(202),Se=a(208),Ie=function(e){var t=e.items,a=e.onSelect,n=e.classes,i=e.t,r=e.Actions,o=t.map((function(e){return u.a.createElement(Se.a,{hover:!0,className:n.rowRoot,key:e.id,onClick:function(){return a(e)}},u.a.createElement(Re.a,null,u.a.createElement("span",null,e.id)),u.a.createElement(Re.a,null,u.a.createElement("span",null,e.name1)),u.a.createElement(Re.a,null,u.a.createElement("span",null,e.name2)),r&&u.a.createElement(Re.a,null,u.a.createElement(r,{item:e})))}));return t.length?u.a.createElement(Pe.a,{className:n.tableRoot,stickyHeader:!0},u.a.createElement(Fe.a,null,u.a.createElement(Se.a,null,u.a.createElement(Re.a,null,u.a.createElement("span",null,i("entities.point2D.id"))),u.a.createElement(Re.a,null,u.a.createElement("span",null,i("entities.point2D.name1"))),u.a.createElement(Re.a,null,u.a.createElement("span",null,i("entities.point2D.name2"))),r&&u.a.createElement(Re.a,null))),u.a.createElement(xe.a,null,o)):u.a.createElement("div",{className:n.noItems},i("entities.point2D.noItems"))};Ie.defaultProps={onSelect:function(){},Actions:null};var Ne=Object(M.a)({tableRoot:{marginTop:"10px"},rowRoot:{cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},noItems:{margin:"15px"}})(Object(R.b)()(Ie)),Ae=a(3),Me=a(224),Le=a(212),Te=a(78),Ue=a(108),ze=a.n(Ue),We=a(109),He=a.n(We),qe=a(107),Ke=a.n(qe),Xe=a(110),Je=a.n(Xe),Ve={success:Ke.a,error:ze.a,info:He.a},Ge={success:3e3,error:null,info:5e3},Ye=function e(t){var a=t.className,n=t.classes,i=t.status,r=t.message,o=t.onClose,c=!!r,l=i||e.INFO,s=Ve[l],d=Ge[l],p=u.a.createElement("span",{className:n.message},u.a.createElement(s,{className:Object(Ae.a)(n.icon,n.iconStatus)}),r);return u.a.createElement(Me.a,{open:c,onClose:o,autoHideDuration:d},u.a.createElement(Le.a,{className:Object(Ae.a)(n[l],a),message:p,action:[u.a.createElement(I.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},u.a.createElement(Je.a,{className:n.icon}))]}))};Ye.SUCCESS="success",Ye.ERROR="error",Ye.INFO="info",Ye.defaultProps={message:null,status:null,className:"",onClose:function(){}};var Be=Object(M.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:Te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(Ye),Qe=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},Ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=!(!t&&!a),i="".concat(t).concat(t?"&":"").concat(a);return"".concat(e).concat(n?"?".concat(i):"")},$e=function(){var e=Object(x.a)(P.a.mark((function e(t,a){var n,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:if(n=e.sent,i=Object(l.a)({},n.headers.has("X-Total-Count")?{"X-Total-Count":parseInt(n.headers.get("X-Total-Count"),10)}:{}),204!==n.status){e.next=6;break}return e.abrupt("return",{point2DS:""});case 6:if(!(n.status>=200&&n.status<300)){e.next=14;break}return e.next=9,n.json();case 9:e.t1=e.sent,e.t2=i,e.t0={point2DS:e.t1,headers:e.t2},e.next=15;break;case 14:e.t0=Promise.reject(new Error(n.statusText||n.status));case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_e=function(){var e=Object(x.a)(P.a.mark((function e(t,a){var n,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/").concat("api/point-2-ds","/").concat(a),i=Object(l.a)(Object(l.a)({},Qe()),{},{method:"DELETE"}),e.abrupt("return",$e(n,i));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),et=function(){var e=Object(x.a)(P.a.mark((function e(t,a){var n,i,r,o,c,s,u,d;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filters,i=void 0===n?[]:n,r=a.pagination,o=a.mode,c=ke(i),s=r?"page=".concat(r.page,"&size=").concat(r.rowsPerPage):"",u=Ze("".concat(t,"/").concat("api/point-2-ds").concat("count"===o?"/count":""),c,s),d=Object(l.a)(Object(l.a)({},Qe()),{},{method:"GET"}),e.abrupt("return",$e(u,d));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),tt={formUpdate:"point2D.form.update",formCreate:"point2D.form.create",formDelete:"point2D.form.delete"},at="point2D.table.select",nt="point2D.table.add",it="point2D.table.error",rt="point2D.table.delete",ot="point2D-filter/addFilter",ct="point2D-filter/updateFilter",lt="point2D-filter/deleteFilter",st="point2D-filter/clearFilters",ut="point2D-table/readAll",dt="point2D-table/clearErrors",pt="point2D-table/clearItems",ft="point2D-table/create",mt="point2D-table/update",bt="point2D-table/delete",ht={filters:[],items:[],count:0,notificationMessage:null,notificationStatus:null,loading:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ot:return Object(l.a)(Object(l.a)({},e),{},{filters:[].concat(Object(F.a)(e.filters),[{field:"",operator:"",value:""}])});case ct:return Object(l.a)(Object(l.a)({},e),{},{filters:e.filters.map((function(e,a){return a===t.payload.filterId?Object(l.a)(Object(l.a)({},e),t.payload.values):e}))});case lt:return Object(l.a)(Object(l.a)({},e),{},{items:ht.items,count:ht.count,filters:e.filters.filter((function(e,a){return a!==t.payload.filterId}))});case st:return Object(l.a)(Object(l.a)({},e),{},{items:ht.items,count:ht.count,filters:ht.filters});case pt:return Object(l.a)(Object(l.a)({},e),{},{items:ht.items,count:ht.count});case ut:return Object(l.a)(Object(l.a)({},e),{},{items:t.payload.items,count:t.payload.count});case"point2D-table/error":return Object(l.a)(Object(l.a)({},e),{},{notificationMessage:t.payload.message,notificationStatus:t.payload.status});case dt:return Object(l.a)(Object(l.a)({},e),{},{notificationMessage:null});case ft:case tt.formCreate:return Object(l.a)(Object(l.a)({},e),{},{items:[].concat(Object(F.a)(e.items),[t.payload])});case mt:case tt.formUpdate:var a=e.items.findIndex((function(e){return e.id===t.payload.id})),n=Object(F.a)(e.items);return n[a]=t.payload,Object(l.a)(Object(l.a)({},e),{},{items:n});case bt:case tt.formDelete:return Object(l.a)(Object(l.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.id}))});default:return e}},vt=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state=ht,i.handleDelete=i.handleDelete.bind(Object(j.a)(i)),i.handleError=i.handleError.bind(Object(j.a)(i)),i.closeNotification=i.closeNotification.bind(Object(j.a)(i)),i.fetchData=i.fetchData.bind(Object(j.a)(i)),i.updateFilter=i.updateFilter.bind(Object(j.a)(i)),i.addFilter=i.addFilter.bind(Object(j.a)(i)),i.removeFilter=i.removeFilter.bind(Object(j.a)(i)),i.clearFilters=i.clearFilters.bind(Object(j.a)(i)),i.applyFilters=i.applyFilters.bind(Object(j.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.keycloak,n=t.paginationMode,i=t.pagination,r=a.initialized&&a.authenticated,o=e.keycloak.authenticated!==r,c=["pagination","infinite-scroll"].includes(n)&&(e.pagination.currentPage!==i.currentPage||e.pagination.itemsPerPage!==i.itemsPerPage);r&&(o||c)&&this.fetchData()}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState((function(t){return gt(t,e)}),t)}},{key:"fetchData",value:function(){var e=Object(x.a)(P.a.mark((function e(){var t,a,n,i,r,o,c,s,u,d,p,f,m;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.filters,n=t.items,i=this.props,r=i.keycloak,o=i.paginationMode,c=i.pagination,s=i.serviceUrl,!(r.initialized&&r.authenticated)){e.next=18;break}return e.prev=4,u=Object(l.a)({filters:a},""===o?{}:{pagination:{page:c.currentPage,rowsPerPage:c.itemsPerPage}}),e.next=8,et(s,u);case 8:d=e.sent,p=d.point2DS,f=d.headers,m=f&&f["X-Total-Count"]||0,this.dispatch({type:ut,payload:{items:"infinite-scroll"===o?[].concat(Object(F.a)(n),Object(F.a)(p)):p,count:m}}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),this.handleError(e.t0);case 18:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateFilter",value:function(e,t){this.dispatch({type:ct,payload:{values:t,filterId:e}})}},{key:"addFilter",value:function(){this.dispatch({type:ot})}},{key:"removeFilter",value:function(e){this.dispatch({type:lt,payload:{filterId:e}},this.fetchData)}},{key:"clearFilters",value:function(){this.dispatch({type:st},this.fetchData)}},{key:"applyFilters",value:function(){this.dispatch({type:pt},this.fetchData)}},{key:"closeNotification",value:function(){this.dispatch({type:dt})}},{key:"handleError",value:function(e){var t=this.props,a=t.onError,n=t.t;a(e),this.dispatch({type:"point2D-table/error",payload:{message:n("error.dataLoading"),status:Be.ERROR}})}},{key:"handleDelete",value:function(){var e=Object(x.a)(P.a.mark((function e(t){var a,n,i,r,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.t,i=a.onDelete,r=a.keycloak,o=a.serviceUrl,!(r.initialized&&r.authenticated)){e.next=14;break}return e.prev=3,e.next=6,_e(o,t.id);case 6:i(t),this.dispatch({type:bt,payload:{id:t.id}}),this.setState({notificationMessage:n("common.dataDeleted"),notificationStatus:Be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleConfirmationDialogAction",value:function(e,t){switch(e){case B.CONFIRM:this.handleDelete(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.count,i=t.notificationMessage,r=t.notificationStatus,o=t.filters,c=this.props,l=c.classes,s=c.onSelect,d=c.onAdd,p=c.onDelete,f=c.t,m=c.keycloak,b=c.paginationMode,h=void 0===b?"":b,g=f("common.delete");return u.a.createElement(u.a.Fragment,null,u.a.createElement(q,{keycloak:m},f("common.notAuthenticated")),u.a.createElement(H,{keycloak:m},u.a.createElement(S.a,{color:"primary","aria-label":"add",className:l.fab,onClick:d},u.a.createElement(T.a,null)),u.a.createElement(we,{applyFilter:this.applyFilters,add:this.addFilter,update:this.updateFilter,remove:this.removeFilter,clear:this.clearFilters,filters:o,error:this.handleError}),u.a.createElement(le,{items:a,paginationMode:h,count:n},u.a.createElement("div",{className:l.tableWrapper},u.a.createElement(Ne,{items:a,onSelect:s,Actions:function(t){var a=t.item;return p?u.a.createElement(B,{onCloseDialog:function(t){return e.handleConfirmationDialogAction(t,a)},dialog:{title:f("entities.point2D.deleteDialog.title"),description:f("entities.point2D.deleteDialog.description"),confirmLabel:f("common.yes"),discardLabel:f("common.no")},Renderer:function(e){var t=e.onClick;return u.a.createElement(I.a,{"aria-label":g,title:g,onClick:t},u.a.createElement(A.a,null))}}):""}})))),u.a.createElement(Be,{status:r,message:i,onClose:this.closeNotification}))}}]),a}(s.Component);vt.defaultProps={onAdd:function(){},onDelete:function(){},onError:function(){},onSelect:function(){},paginationMode:"",pagination:null,serviceUrl:""};var Ot=function(e){var t=function(t){Object(r.a)(c,t);var a=Object(o.a)(c);function c(){var t;Object(n.a)(this,c);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=a.call.apply(a,[this].concat(r))).renderWrappedComponent=function(a){var n=t.props,i=n.forwardedRef,r=Object(W.a)(n,["forwardedRef"]);return u.a.createElement(e,Object.assign({},r,{ref:i,keycloak:a}))},t}return Object(i.a)(c,[{key:"render",value:function(){return u.a.createElement(E.Consumer,null,this.renderWrappedComponent)}}]),c}(s.Component);return t.defaultProps={forwardedRef:function(){}},Object(s.forwardRef)((function(e,a){return u.a.createElement(t,Object.assign({},e,{forwardedRef:a}))}))}(Object(M.a)({fab:{float:"right"},tableWrapper:{width:"100%",overflowX:"auto",overflowY:"hidden"}})(Object(R.b)(void 0,{withRef:!0})($(vt)))),Et=a(85),jt={en:a(112),it:a(113)},yt=Object.keys(jt).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(ue.a)({},t,Object(ue.a)({},"translation",jt[t])))}),{}),kt=(Et.a.t,function(e){!function(e,t){Et.a.use(R.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:yt,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")}),Ct=function(e){return function(t){return function(e,t){var a=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(a)}(e,t)}},Dt=function(){return window&&window.entando&&window.entando.keycloak&&Object(l.a)(Object(l.a)({},window.entando.keycloak),{},{initialized:!0})||{initialized:!1}},wt={hidden:"hidden",locale:"locale",paginationMode:"pagination-mode",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Pt=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).keycloak=Dt(),e.onAdd=Ct(nt),e.onError=Ct(it),e.onSelect=Ct(at),e.onDelete=Ct(rt),e.reactRootRef=u.a.createRef(),e}return Object(i.a)(a,[{key:"attributeChangedCallback",value:function(e,t,a){if(this.container&&t!==a){if(!Object.values(wt).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===wt.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,a,n=this.attachShadow({mode:"open"});n.appendChild(this.container),this.jss=Object(O.b)(Object(l.a)(Object(l.a)({},Object(b.a)()),{},{insertionPoint:this.container})),this.muiTheme=Object(h.a)({props:{MuiDialog:{container:this.mountPoint}}}),this.keycloak=Object(l.a)(Object(l.a)({},Dt()),{},{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",a=function(){e.keycloak=Object(l.a)(Object(l.a)({},Dt()),{},{initialized:!0}),e.render()},window.addEventListener(t,a),function(){window.removeEventListener(t,a)}),this.onToggleDisableDefaultEvent(),this.render(),m()(n)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var a=function(e){var t=e.type,a=e.detail;return{type:t,payload:a.payload,error:a.error,meta:a.meta}}(t);e.reactRootRef.current.dispatch(a)}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,a="true"===this.getAttribute(wt.disableDefaultEventHandler);if(a!==this.defaultEventHandlerDisabled){if(a)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var n=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(tt),t=n,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=a}}},{key:"render",value:function(){if(!("true"===this.getAttribute(wt.hidden))){var e=this.getAttribute(wt.locale);kt(e);var t=this.getAttribute(wt.paginationMode)||"",a=this.getAttribute(wt.serviceUrl)||"";p.a.render(u.a.createElement(E.Provider,{value:this.keycloak},u.a.createElement(g.b,{jss:this.jss},u.a.createElement(v.a,{theme:this.muiTheme},u.a.createElement(D,{paginationMode:t},u.a.createElement(Ot,{ref:this.reactRootRef,onAdd:this.onAdd,onDelete:this.onDelete,onSelect:this.onSelect,onError:this.onError,paginationMode:t,serviceUrl:a}))))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(wt)}}]),a}(Object(c.a)(HTMLElement));customElements.define("point-2-d-table",Pt)}},[[130,1,2]]]);
//# sourceMappingURL=main.8a4eed27.chunk.js.map