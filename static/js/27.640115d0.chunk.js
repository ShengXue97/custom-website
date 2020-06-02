(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[27],{1433:function(e,a,t){"use strict";var l=t(21),r=t(33),n=t(34),i=t(49),o=t(50),s=t(51),c=t(0),m=t.n(c),d=t(79),u=t(1329),p=t(1488),v=t(1330),b=t(1525),h=t(1337),f=t(1331),g=t(1334),E=t(1395),x=t(1960),y=t(1523),N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",firstName:"",email:"",date:new Date,creditCard:"",mobile:"",password:"",confirmPassword:"",gender:"",agreement:""},t.handleSubmit=function(e){},t.handleChange=function(e){e.persist(),t.setState(Object(l.a)({},e.target.name,e.target.value))},t.handleDateChange=function(e){t.setState({date:e})},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.ValidatorForm.addValidationRule("isPasswordMatch",(function(a){return a===e.state.password}))}},{key:"componentWillUnmount",value:function(){d.ValidatorForm.removeValidationRule("isPasswordMatch")}},{key:"render",value:function(){var e=this.state,a=e.username,t=e.firstName,l=e.creditCard,r=e.mobile,n=e.password,i=e.confirmPassword,o=e.gender,s=e.date,c=e.email;return m.a.createElement("div",null,m.a.createElement(d.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:function(e){return null}},m.a.createElement(u.a,{container:!0,spacing:6},m.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:this.handleChange,type:"text",name:"username",value:a,validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:this.handleChange,type:"text",name:"firstName",value:t,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:this.handleChange,type:"email",name:"email",value:c,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),m.a.createElement(E.a,{utils:y.a},m.a.createElement(x.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:s,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}})),m.a.createElement(d.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:this.handleChange,type:"number",name:"creditCard",value:l,validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),m.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:this.handleChange,type:"text",name:"mobile",value:r,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:this.handleChange,name:"password",type:"password",value:n,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:this.handleChange,name:"confirmPassword",type:"password",value:i,validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),m.a.createElement(p.a,{className:"mb-4",value:o,name:"gender",onChange:this.handleChange,row:!0},m.a.createElement(v.a,{value:"Male",control:m.a.createElement(b.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),m.a.createElement(v.a,{value:"Female",control:m.a.createElement(b.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),m.a.createElement(v.a,{value:"Others",control:m.a.createElement(b.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),m.a.createElement(v.a,{control:m.a.createElement(h.a,null),label:"I have read and agree to the terms of service."}))),m.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},m.a.createElement(g.a,null,"send"),m.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}}]),a}(c.Component);a.a=N},1963:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(1433),i=t(69),o=t(2),s=t(5),c=(t(4),t(7)),m=t(9),d=t(253),u=l.forwardRef((function(e,a){var t=e.active,r=e.alternativeLabel,n=void 0!==r&&r,i=e.classes,m=e.className,d=e.completed,u=e.disabled,p=(e.index,e.orientation),v=void 0===p?"horizontal":p,b=Object(s.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(o.a)({className:Object(c.a)(i.root,i[v],m,n&&i.alternativeLabel,t&&i.active,d&&i.completed,u&&i.disabled),ref:a},b),l.createElement("span",{className:Object(c.a)(i.line,"vertical"===v?i.lineVertical:i.lineHorizontal)}))})),p=Object(m.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(u),v=l.createElement(p,null),b=l.forwardRef((function(e,a){var t=e.activeStep,r=void 0===t?0:t,n=e.alternativeLabel,i=void 0!==n&&n,m=e.children,u=e.classes,p=e.className,b=e.connector,h=void 0===b?v:b,f=e.nonLinear,g=void 0!==f&&f,E=e.orientation,x=void 0===E?"horizontal":E,y=Object(s.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),N=l.isValidElement(h)?l.cloneElement(h,{orientation:x}):null,C=l.Children.toArray(m),L=C.map((function(e,a){var t={alternativeLabel:i,connector:h,last:a+1===C.length,orientation:x},n={index:a,active:!1,completed:!1,disabled:!1};return r===a?n.active=!0:!g&&r>a?n.completed=!0:!g&&r<a&&(n.disabled=!0),[!i&&N&&0!==a&&l.cloneElement(N,Object(o.a)({key:a},n)),l.cloneElement(e,Object(o.a)({},t,{},n,{},e.props))]}));return l.createElement(d.a,Object(o.a)({square:!0,elevation:0,className:Object(c.a)(u.root,u[x],p,i&&u.alternativeLabel),ref:a},y),L)})),h=Object(m.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(b),f=(t(110),l.forwardRef((function(e,a){var t=e.active,r=void 0!==t&&t,n=e.alternativeLabel,i=e.children,m=e.classes,d=e.className,u=e.completed,p=void 0!==u&&u,v=e.connector,b=e.disabled,h=void 0!==b&&b,f=e.expanded,g=void 0!==f&&f,E=e.index,x=e.last,y=e.orientation,N=Object(s.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]);return l.createElement("div",Object(o.a)({className:Object(c.a)(m.root,m[y],d,n&&m.alternativeLabel,p&&m.completed),ref:a},N),v&&n&&0!==E&&l.cloneElement(v,{orientation:y,alternativeLabel:n,index:E,active:r,completed:p,disabled:h}),l.Children.map(i,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(o.a)({active:r,alternativeLabel:n,completed:p,disabled:h,expanded:g,last:x,icon:E+1,orientation:y},e.props)):null})))}))),g=Object(m.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(f),E=t(1280),x=t(89),y=Object(x.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),N=Object(x.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),C=t(338),L=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),j=l.forwardRef((function(e,a){var t=e.completed,r=void 0!==t&&t,n=e.icon,i=e.active,o=void 0!==i&&i,s=e.error,m=void 0!==s&&s,d=e.classes;if("number"===typeof n||"string"===typeof n){var u=Object(c.a)(d.root,o&&d.active,m&&d.error,r&&d.completed);return m?l.createElement(N,{className:u,ref:a}):r?l.createElement(y,{className:u,ref:a}):l.createElement(C.a,{className:u,ref:a},L,l.createElement("text",{className:d.text,x:"12",y:"16",textAnchor:"middle"},n))}return n})),O=Object(m.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(j),w=l.forwardRef((function(e,a){var t=e.active,r=void 0!==t&&t,n=e.alternativeLabel,i=void 0!==n&&n,m=e.children,d=e.classes,u=e.className,p=e.completed,v=void 0!==p&&p,b=e.disabled,h=void 0!==b&&b,f=e.error,g=void 0!==f&&f,x=(e.expanded,e.icon),y=(e.last,e.optional),N=e.orientation,C=void 0===N?"horizontal":N,L=e.StepIconComponent,j=e.StepIconProps,w=Object(s.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),q=L;return x&&!q&&(q=O),l.createElement("span",Object(o.a)({className:Object(c.a)(d.root,d[C],u,h&&d.disabled,i&&d.alternativeLabel,g&&d.error),ref:a},w),x||q?l.createElement("span",{className:Object(c.a)(d.iconContainer,i&&d.alternativeLabel)},l.createElement(q,Object(o.a)({completed:v,active:r,error:g,icon:x},j))):null,l.createElement("span",{className:d.labelContainer},l.createElement(E.a,{variant:"body2",component:"span",className:Object(c.a)(d.label,i&&d.alternativeLabel,v&&d.completed,r&&d.active,g&&d.error),display:"block"},m),y))}));w.muiName="StepLabel";var q=Object(m.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(w),S=t(1331);function M(){var e=r.a.useState(0),a=Object(i.a)(e,2),t=a[0],l=a[1],n=["Select master blaster campaign settings","Create an ad group","Create an ad"];return r.a.createElement("div",null,r.a.createElement(h,{activeStep:t,alternativeLabel:!0},n.map((function(e){return r.a.createElement(g,{key:e},r.a.createElement(q,null,e))}))),r.a.createElement("div",null,t===n.length?r.a.createElement("div",null,r.a.createElement(E.a,null,"All steps completed"),r.a.createElement(S.a,{className:"mt-4",variant:"contained",color:"secondary",onClick:function(){l(0)}},"Reset")):r.a.createElement("div",null,r.a.createElement(E.a,null,function(e){switch(e){case 0:return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt velit. Quisque laoreet, lectus id tincidunt fringilla, eros est bibendum felis, sit amet lobortis ante sem non diam. Donec viverra a nisi eu eleifend. Mauris vel leo tempor, commodo felis in, sollicitudin velit. Nullam eu sem id lacus venenatis commodo nec a lacus. Donec in egestas justo. Quisque elementum diam felis. In a ullamcorper leo. In lorem urna, mollis in feugiat sed, aliquet nec diam. Mauris tempus dui at gravida pharetra. Etiam nec lectus metus. In dapibus placerat consequat. Quisque ornare ut lacus ac tempus. Pellentesque sed ornare tellus. Curabitur dictum turpis quam, at feugiat mi elementum a.";case 1:return"Integer euismod dapibus sapien, a interdum augue blandit eget. Donec pellentesque, sapien iaculis dignissim sagittis, risus nulla auctor eros, sed suscipit eros mauris id lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor mauris egestas consequat molestie. Nam egestas iaculis malesuada. Praesent sagittis venenatis finibus. Praesent porttitor ipsum et sapien cursus, eu mattis augue ornare.";case 2:return"In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.";default:return"Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit."}}(t)),r.a.createElement("div",{className:"pt-4"},r.a.createElement(S.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:function(){l((function(e){return e-1}))}},"Back"),r.a.createElement(S.a,{className:"ml-4",variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))}},t===n.length-1?"Finish":"Next")))))}var k=t(337);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(k.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Form"}]})),r.a.createElement(k.j,{title:"Simple Form"},r.a.createElement(n.a,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(k.j,{title:"stepper form"},r.a.createElement(M,null)))}}}]);
//# sourceMappingURL=27.640115d0.chunk.js.map