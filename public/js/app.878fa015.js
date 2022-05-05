(function(){"use strict";var e={5919:function(e,t,r){var a=r(9242),s=r(3396);const i={id:"app"},l=(0,s._)("a",{class:"navbar-brand",href:"/"},"E-Commerce",-1),o={class:"collapse navbar-collapse",id:"navbarSupportedContent"},n={class:"navbar-nav ml-auto",id:"navbarHeader"},d=(0,s._)("li",{class:"nav-item active"},[(0,s._)("a",{class:"nav-link",href:"/"},[(0,s.Uk)("Home "),(0,s._)("span",{class:"sr-only"},"(current)")])],-1),c={class:"nav-item"},u=(0,s.Uk)("Products"),p={key:0,class:"nav-item"},m=(0,s._)("a",{class:"nav-link",href:"/profile"},"Account",-1),v=[m],h={key:1,class:"nav-item"},f=(0,s._)("a",{class:"nav-link",href:"/login"},"Log-In",-1),_=[f],g={key:2,class:"nav-item"},w=(0,s._)("a",{class:"nav-link",href:"/cart"},"Cart",-1),y=[w],b={key:3,class:"nav-item"},k=(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),C=(0,s.uE)('<footer><div class="footer row bg-dark text-light"><div class="text-center col-lg-6 offset-lg-3"><h4>Samuel Son</h4></div><div><div class="container"><div class="footerSocial"><div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal"><a href="https://www.linkedin.com/in/samuel-son-68078a234/"><h4 class="linked">linkedin</h4></a></div><div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal"><a href="https://github.com/Son-Daehan"><h4 class="linked">Github</h4></a></div></div></div></div></div></footer>',1);function D(e,t,r,a,m,f){const w=(0,s.up)("router-link"),D=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("header",null,[((0,s.wg)(),(0,s.iD)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",key:e.$route.fullPath},[l,(0,s._)("div",o,[(0,s._)("ul",n,[d,(0,s._)("li",c,[(0,s.Wm)(w,{class:"nav-link",to:{path:"/products"}},{default:(0,s.w5)((()=>[u])),_:1})]),f.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",p,v)):(0,s.kq)("",!0),f.isNotLoggedIn()?((0,s.wg)(),(0,s.iD)("li",h,_)):(0,s.kq)("",!0),f.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",g,y)):(0,s.kq)("",!0),f.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",b,[(0,s._)("a",{class:"nav-link",href:"/login",onClick:t[0]||(t[0]=(...e)=>f.logOut&&f.logOut(...e))},"Log Out")])):(0,s.kq)("",!0)])]),k]))]),(0,s.Wm)(D),C])}var P={data:function(){return{}},methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")},isNotLoggedIn:function(){return!localStorage.getItem("jwt")},logOut:function(){localStorage.removeItem("jwt")}}},N=r(89);const S=(0,N.Z)(P,[["render",D]]);var U=S,E=r(678);const z={class:"home"},H=(0,s._)("div",{id:"myCarousel"},[(0,s._)("div",{class:"carousel-inner"},[(0,s._)("div",{class:"carousel-item active"},[(0,s._)("img",{class:"imageHome d-block w-100",src:"https://res.cloudinary.com/daehan/image/upload/v1651708093/Ecommerce%20App/sale-tag-online-shopping_prxtco.jpg",alt:"ecommerce image"})])])],-1),x=[H];function I(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",z,x)}var O=r(6265),A=r.n(O),T={data:function(){return{message:"Welcome to Vue.js!",products:[]}},created:function(){A().get("/api/products").then((e=>{this.products=e.data,console.log(this.products)}))},methods:{}};const $=(0,N.Z)(T,[["render",I]]);var K=$,V=r(7139);const W={id:"productmain"},F={class:"products"},j={class:"btnCategoryContainer"},Y={class:"wrapperProduct",id:"product-wrapper"},L={class:"card",id:"product-nested"},R=["src","alt"],Z={class:"price"};function G(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",F,[(0,s._)("div",j,[(0,s._)("button",{class:(0,V.C_)(["btnCategory",{active:"all"==e.productFilterKey}]),onClick:t[0]||(t[0]=t=>e.productFilterKey="all")}," All ",2),(0,s._)("button",{class:(0,V.C_)(["btnCategory",{active:"mens clothing"==e.productFilterKey}]),onClick:t[1]||(t[1]=t=>e.productFilterKey="menClothing")}," Men's Clothing ",2),(0,s._)("button",{class:(0,V.C_)(["btnCategory",{active:"womens clothing"==e.productFilterKey}]),onClick:t[2]||(t[2]=t=>e.productFilterKey="womenClothing")}," Women's Clothing ",2),(0,s._)("button",{class:(0,V.C_)(["btnCategory",{active:"jewelery"==e.productFilterKey}]),onClick:t[3]||(t[3]=t=>e.productFilterKey="jewelery")}," Jewelery ",2),(0,s._)("button",{class:(0,V.C_)(["btnCategory",{active:"electronics"==e.productFilterKey}]),onClick:t[4]||(t[4]=t=>e.productFilterKey="electronics")}," Electronics ",2)]),(0,s._)("div",Y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.productFilter,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",L,[(0,s._)("div",null,[(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:t+1}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.image_url,id:"product-image",alt:e.title},null,8,R)])),_:2},1032,["to"])]),(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:t+1}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,V.zw)(e.title),1)])),_:2},1032,["to"]),(0,s._)("div",Z,"$"+(0,V.zw)(e.price),1)])])))),128))])])])}var q={data:function(){return{products:[],productFilterKey:"all"}},created:function(){A().get("/api/products").then((e=>{this.products=e.data,console.log(this.products)}))},computed:{productFilter(){return this[this.productFilterKey]},all(){return this.products},electronics(){return this.products.filter((e=>"electronics"==e.category))},menClothing(){return this.products.filter((e=>"men's clothing"==e.category))},womenClothing(){return this.products.filter((e=>"women's clothing"==e.category))},jewelery(){return this.products.filter((e=>"jewelery"==e.category))}}};const B=(0,N.Z)(q,[["render",G]]);var M=B;const Q={class:"login"},J=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Log-In")],-1),X={class:"form-group"},ee=(0,s._)("label",{for:"inputEmail"},"Email address",-1),te=(0,s._)("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.",-1),re={class:"form-group"},ae=(0,s._)("label",{for:"inputPassword"},"Password",-1),se=(0,s.uE)('<div class="form-group form-check"><input type="checkbox" class="form-check-input" id="inputRemember"><label class="form-check-label" for="inputRemember">Remember Me</label></div><input id="logInSubmit" type="submit" class="btn btn-primary" value="Submit"><a href="/signup" class="btn btn-primary">Sign-Up</a>',3);function ie(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("form",{id:"login",onSubmit:t[2]||(t[2]=(0,a.iM)((e=>o.submit()),["prevent"]))},[J,(0,s._)("div",X,[ee,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t)},null,512),[[a.nr,e.email]]),te]),(0,s._)("div",re,[ae,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t)},null,512),[[a.nr,e.password]])]),se],32)])}var le={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e={email:this.email,password:this.password};A().post("/api/sessions",e).then((e=>{A().defaults.headers.common.Authorization="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),this.$router.push("/")})).catch((e=>{this.errors=["Invalid email or password."],this.email="",this.password=""}))}}};const oe=(0,N.Z)(le,[["render",ie]]);var ne=oe;const de={id:"signup"},ce={class:"signup"},ue=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Create Account")],-1),pe={class:"form-group"},me=(0,s._)("label",{for:"inputEmail"},"Your name",-1),ve={class:"form-group"},he=(0,s._)("label",{for:"inputEmail"},"Email address",-1),fe={class:"form-group"},_e=(0,s._)("label",{for:"inputPassword"},"Password",-1),ge=(0,s._)("small",{id:"emailHelp",class:"form-text text-muted"},"Password must be at least 6 characters.",-1),we={class:"form-group"},ye=(0,s._)("label",{for:"inputPassword"},"Confirm password",-1),be=(0,s._)("input",{type:"submit",class:"btn btn-primary",value:"Submit"},null,-1);function ke(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("div",ce,[(0,s._)("form",{id:"login",onSubmit:t[4]||(t[4]=(0,a.iM)((e=>o.submit()),["prevent"]))},[ue,(0,s._)("div",pe,[me,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,512),[[a.nr,e.name]])]),(0,s._)("div",ve,[he,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t)},null,512),[[a.nr,e.email]])]),(0,s._)("div",fe,[_e,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t)},null,512),[[a.nr,e.password]]),ge]),(0,s._)("div",we,[ye,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=t=>e.passwordConfirmation=t)},null,512),[[a.nr,e.passwordConfirmation]])]),be,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.errors,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"text-danger",key:e},(0,V.zw)(e),1)))),128))])],32)])])}var Ce={data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};A().post("/api/users",e).then((e=>{this.$router.push("/login")})).catch((e=>{this.errors=e.response.data.errors}))}}};const De=(0,N.Z)(Ce,[["render",ke]]);var Pe=De;const Ne={id:"productdetailmain"},Se={class:"singleProduct"},Ue={class:"wrapper",id:"product-detail-wrapper"},Ee={class:"cardImage"},ze=["src","alt"],He={class:"productStyle cardDetail",id:"productDetailNested"},xe={id:"individualProductTitle"},Ie={class:"qty-changer"},Oe=(0,s.Uk)(" Quantity ");function Ae(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",Ne,[(0,s._)("div",Se,[(0,s._)("div",Ue,[(0,s._)("div",Ee,[(0,s._)("img",{src:e.product.image_url,id:"productDetailImage",alt:e.product.title},null,8,ze)]),(0,s._)("div",He,[(0,s._)("div",xe,(0,V.zw)(e.product.title),1),(0,s._)("div",null,(0,V.zw)(e.product.description),1),(0,s._)("div",null,"$ "+(0,V.zw)(e.product.price),1),(0,s._)("div",Ie,[Oe,(0,s.wy)((0,s._)("input",{class:"qty-input form-group",type:"number","onUpdate:modelValue":t[0]||(t[0]=t=>e.newCartedProductQuantity=t)},null,512),[[a.nr,e.newCartedProductQuantity]])]),(0,s._)("button",{onClick:t[1]||(t[1]=e=>o.createCartedProducts()),type:"button",class:"btn btn-primary product-button"}," Add to Cart ")])])])])}var Te={data:function(){return{product:[],carted_products:[],newCartedProductQuantity:""}},created:function(e){A().get("/api/products/"+this.$route.params.id).then((e=>{this.product=e.data,console.log(this.product)}))},methods:{createCartedProducts:function(){var e={user_id:1,product_id:this.$route.params.id,quantity:this.newCartedProductQuantity,status:"Carted"};A().post("/api/carted_products",e).then((e=>{console.log("Success",e.data),this.carted_products.push(e.data)})).catch((e=>{console.log(e)}))}}};const $e=(0,N.Z)(Te,[["render",Ae]]);var Ke=$e;const Ve={class:"cart"},We=(0,s._)("div",{class:"cart-title"},[(0,s._)("h1",null,"Shopping Cart")],-1),Fe={key:0,class:"wrapper",id:"wholeWrapper"},je={class:"wrapper",id:"cartWrapper"},Ye={class:"nested",id:"cartNested"},Le=["src","alt"],Re={id:"cartNestedFurther"},Ze={class:"computedDetail"},Ge=["onClick"],qe={class:"cardCartedTwo"},Be={class:"button"},Me=(0,s.Uk)(" Checkout "),Qe={key:1,id:"emptyCartGrid"},Je=(0,s._)("div",{class:"emptyCart"},"Shopping cart is empty.",-1),Xe=(0,s.Uk)("Continue Shopping");function et(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Ve,[We,l.isEmpty?((0,s.wg)(),(0,s.iD)("div",Qe,[Je,(0,s.Wm)(o,{class:"emptyCart",to:{name:"products"}},{default:(0,s.w5)((()=>[Xe])),_:1})])):((0,s.wg)(),(0,s.iD)("div",Fe,[(0,s._)("div",je,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"cardCarted",key:t},[(0,s._)("div",Ye,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.product.image,id:"product-image",alt:e.product.title},null,8,Le)])),_:2},1032,["to"]),(0,s._)("div",Re,[(0,s._)("div",null,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,V.zw)(e.product.title),1)])),_:2},1032,["to"])]),(0,s._)("div",null,(0,V.zw)(e.product.description),1)]),(0,s._)("div",Ze,[(0,s._)("div",null,"Quantity: "+(0,V.zw)(e.quantity),1),(0,s._)("div",null,"Price: $"+(0,V.zw)(e.product.price),1),(0,s._)("button",{class:"button",onClick:t=>l.destroyCartedProduct(e)}," Delete ",8,Ge)])])])))),128))]),(0,s._)("div",qe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",null,[(0,s.Uk)(" Subtotal: $"+(0,V.zw)(e.subtotal)+" ",1),(0,s._)("button",Be,[(0,s.Wm)(o,{to:"/checkout"},{default:(0,s.w5)((()=>[Me])),_:1})])])])))),128))])]))])}var tt={data:function(){return{cartedProducts:[]}},created:function(){A().get("/api/carted_products").then((e=>{this.cartedProducts=e.data,console.log(this.cartedProducts)}))},methods:{destroyCartedProduct:function(e){A()["delete"]("/api/carted_products/"+e.id).then((e=>{console.log("Carted product has been destroyed",e),this.$router.go()}))}},computed:{isEmpty:({cartedProducts:e})=>0===e.length}};const rt=(0,N.Z)(tt,[["render",et]]);var at=rt;const st={class:"checkout"},it=(0,s._)("div",{class:"checkout-title"},[(0,s._)("h1",null,"Checkout")],-1),lt={class:"wrapper",id:"checkoutWholeWrapper"},ot={class:"firstRowWrapper"},nt={key:0,class:"wrapper addressCard",id:"firstNested"},dt=(0,s._)("div",null,"Shipping Method",-1),ct=(0,s._)("br",null,null,-1),ut=(0,s.Uk)("Change"),pt=(0,s._)("div",null,[(0,s._)("div",{class:"wrapper billingCard",id:"secondNested"},[(0,s._)("div",null,[(0,s._)("div",null,"Payment Method")]),(0,s._)("div",null,[(0,s._)("div",null,"test")]),(0,s._)("div",null,[(0,s._)("div",null,"test")])])],-1),mt={class:"wrapper",id:"thirdNested"},vt={class:"productOrderCard"},ht={id:"checkoutThirdNestedFurther"},ft=["src","alt"],_t={class:"checkoutProductCardNested"},gt={class:"productOrderTitle"},wt={class:"productOrderDescription"},yt={class:"productQuantityPrice"},bt=(0,s._)("hr",{width:"100%"},null,-1),kt={class:"orderCard"},Ct=(0,s._)("div",{id:"summaryTitle"},"Order Summary",-1),Dt={class:"orderCardWrapper"},Pt={class:"orderCardLeft",id:"fourthNested"},Nt=(0,s._)("div",{class:"summaryDetail"},"Shipping and Handling:",-1),St={class:"orderCardRight",id:"fourthNested"},Ut=(0,s._)("div",{class:"summaryDetail"},"$0.00",-1);function Et(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",st,[it,(0,s._)("div",lt,[(0,s._)("div",ot,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.activeAddress,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[0!=e.ship_to?((0,s.wg)(),(0,s.iD)("div",nt,[dt,(0,s._)("div",null,[(0,s.Uk)((0,V.zw)(e.street_name)+", ",1),ct,(0,s.Uk)(" "+(0,V.zw)(e.city)+", "+(0,V.zw)(e.region)+", "+(0,V.zw)(e.postal_code),1)]),(0,s.Wm)(o,{class:"button addressChangeButton",to:{path:"/profile/addresses"}},{default:(0,s.w5)((()=>[ut])),_:1})])):(0,s.kq)("",!0)])))),128)),pt]),(0,s._)("div",mt,[(0,s._)("div",vt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",ht,[(0,s._)("div",null,[(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.product.image,id:"product-image",alt:e.product.title},null,8,ft)])),_:2},1032,["to"])]),(0,s._)("div",_t,[(0,s._)("div",gt,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,V.zw)(e.product.title),1)])),_:2},1032,["to"])]),(0,s._)("div",wt,(0,V.zw)(e.product.description),1),(0,s._)("div",yt,[(0,s._)("div",null,"Quantity: "+(0,V.zw)(e.quantity),1),(0,s._)("div",null," Total Product Price: $"+(0,V.zw)(e.product.price*e.quantity),1)])])]),bt])))),128))]),(0,s._)("div",kt,[Ct,(0,s._)("div",Dt,[(0,s._)("div",Pt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Subtotal: ")))),128)),Nt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Total Before Tax: ")))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Estimated Tax: ")))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryTotal",key:t}," Order Total: ")))),128))]),(0,s._)("div",St,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,V.zw)(e.subtotal),1)))),128)),Ut,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,V.zw)(e.subtotal),1)))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,V.zw)(e.estimated_tax),1)))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryTotal",key:t}," $"+(0,V.zw)(e.total_order_price),1)))),128))])]),(0,s._)("button",{onClick:t[0]||(t[0]=e=>l.createOrder()),type:"button",class:"btn btn-primary"}," Create Order ")])])])])}var zt={data:function(){return{cartedProducts:[],addresses:[],errors:[],order:[],taxes:[]}},methods:{createOrder:function(e){var t={};A().post("/api/orders",t).then((e=>{console.log("Success",e.data),this.order.push(e.data),this.orderId=e.data.id,this.$router.push({name:"order",params:{id:this.orderId}})})).catch((e=>{console.log(e)}))}},created:function(){A().get("/api/carted_products").then((e=>{this.cartedProducts=e.data,console.log(this.cartedProducts)})),A().get("/api/user_addresses").then((e=>{this.addresses=e.data,console.log(this.addresses)})),A().get("/api/taxes").then((e=>{this.taxes=e.data,console.log(this.taxes)}))},computed:{activeAddress:function(){return this.addresses.filter((function(e){return e.ship_to}))}}};const Ht=(0,N.Z)(zt,[["render",Et]]);var xt=Ht;const It={class:"order"},Ot={class:"wrapper",id:"orderWrapper"},At=(0,s._)("div",{class:"order-title"},[(0,s._)("h1",null,"Order")],-1),Tt={class:"orderNested"},$t=(0,s._)("div",{class:"orderNestedLeft"},[(0,s._)("div",null,"Order ID:"),(0,s._)("div",null,"Subtotal:"),(0,s._)("div",null,"Total Tax:"),(0,s._)("div",null,"Total:")],-1),Kt={class:"orderNestedRight"};function Vt(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",It,[(0,s._)("div",Ot,[At,(0,s._)("div",Tt,[$t,(0,s._)("div",Kt,[(0,s._)("div",null,(0,V.zw)(e.order.id),1),(0,s._)("div",null,"$"+(0,V.zw)(e.order.subtotal),1),(0,s._)("div",null,"$"+(0,V.zw)(e.order.tax),1),(0,s._)("div",null,"$"+(0,V.zw)(e.order.total),1)])])])])}var Wt={data:function(){return{order:[]}},created:function(e){A().get("/api/orders/"+this.$route.params.id).then((e=>{this.order=e.data,console.log(this.order)}))}};const Ft=(0,N.Z)(Wt,[["render",Vt]]);var jt=Ft;const Yt={id:"profilemain"},Lt={class:"profile"},Rt=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Zt={key:0,class:"wrapper",id:"profileGrid"},Gt={class:"profileCard"},qt={id:"profileNestedGrid"},Bt={key:1,class:"wrapper profileCard",id:"profileEditGrid"},Mt={id:"profileEditNestedGrid"},Qt=(0,s._)("div",null,"Name:",-1),Jt=(0,s._)("div",null,"Email:",-1),Xt=(0,s._)("div",null,"Phone Number:",-1),er=(0,s._)("div",null,"Password:",-1),tr=(0,s._)("div",null,"Password Confirmation:",-1),rr=(0,s.Uk)(),ar=(0,s._)("br",null,null,-1),sr=(0,s._)("input",{class:"btnEditProfile",type:"submit",Value:"Submit"},null,-1);function ir(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",Yt,[(0,s._)("div",Lt,[Rt,e.isEditing?((0,s.wg)(),(0,s.iD)("form",Bt,[(0,s._)("div",null,[(0,s._)("form",{onSubmit:t[6]||(t[6]=(0,a.iM)((t=>o.updateUser(e.user)),["prevent"]))},[(0,s._)("div",Mt,[Qt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.user.name=t)},null,512),[[a.nr,e.user.name]]),Jt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.user.email=t)},null,512),[[a.nr,e.user.email]]),Xt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.user.phone_number=t)},null,512),[[a.nr,e.user.phone_number]]),er,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.user.password=t)},null,512),[[a.nr,e.user.password]]),tr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=t=>e.user.password_confirmation=t)},null,512),[[a.nr,e.user.password_confirmation]]),rr,ar]),sr],32)]),(0,s._)("button",{class:"btnEditProfile",onClick:t[7]||(t[7]=(...e)=>o.toggleToItemEditForm&&o.toggleToItemEditForm(...e))}," Cancel ")])):((0,s.wg)(),(0,s.iD)("div",Zt,[(0,s._)("div",Gt,[(0,s._)("div",qt,[(0,s._)("div",null,[(0,s._)("div",null,(0,V.zw)(e.user.name),1),(0,s._)("div",null,(0,V.zw)(e.user.phone_number),1),(0,s._)("div",null,(0,V.zw)(e.user.email),1)]),(0,s._)("button",{class:"btnProfile",onClick:t[0]||(t[0]=(...e)=>o.toggleToItemEditForm&&o.toggleToItemEditForm(...e))}," Edit ")])])]))])])}var lr={data:function(){return{user:{},isEditing:!1,isDone:this.done}},created:function(){A().get("/api/users").then((e=>{this.user=e.data[0],console.log(this.user)}))},methods:{toggleToItemEditForm(){this.isEditing=!0},updateUser:function(e){var t={name:e.name,email:e.email,phone_number:e.phone_number,password:e.password,password_confirmation:e.password_confirmation};A().patch("/api/users/"+e.user_id,t).then((e=>{console.log("user update",e),this.$router.push("/profile"),this.isEditing=!1}))}}};const or=(0,N.Z)(lr,[["render",ir]]);var nr=or;const dr={class:"profile"},cr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),ur={class:"wrapper addressViewCard",id:"addressGrid"},pr={id:"addressNestedGrid"},mr=(0,s._)("div",null,"Active Shipping Address",-1),vr={id:"addressStyling"},hr=(0,s._)("br",null,null,-1),fr=(0,s.Uk)(" Edit "),_r={key:0},gr=(0,s.Uk)("Create New Address ");function wr(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",dr,[cr,(0,s._)("div",null,[(0,s._)("div",ur,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.addresses,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",pr,[mr,(0,s._)("div",vr,[(0,s.Uk)((0,V.zw)(e.street_name)+", ",1),hr,(0,s.Uk)((0,V.zw)(e.city)+", "+(0,V.zw)(e.region)+" "+(0,V.zw)(e.postal_code),1)]),(0,s.Wm)(o,{to:{name:"address-edit",params:{id:e.address_id}},id:"addressEditStyling"},{default:(0,s.w5)((()=>[fr])),_:2},1032,["to"])])])))),128)),0==e.addresses.length?((0,s.wg)(),(0,s.iD)("div",_r,[(0,s.Wm)(o,{to:{path:"/profile/addresses/new"}},{default:(0,s.w5)((()=>[gr])),_:1})])):(0,s.kq)("",!0)])])])}var yr={data:function(){return{addresses:[]}},created:function(){A().get("/api/user_addresses").then((e=>{this.addresses=e.data,console.log(this.addresses)}))}};const br=(0,N.Z)(yr,[["render",wr]]);var kr=br;const Cr={class:"profile"},Dr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Pr=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Create Account")],-1),Nr={class:"form-group"},Sr=(0,s._)("label",{for:"inputStreetName"},"Your street name",-1),Ur={class:"form-group"},Er=(0,s._)("label",{for:"inputCity"},"City",-1),zr={class:"form-group"},Hr=(0,s._)("label",{for:"inputRegion"},"region",-1),xr={class:"form-group"},Ir=(0,s._)("label",{for:"inputPostalCode"},"Postal Code",-1),Or={class:"form-group"},Ar=(0,s._)("label",{for:"inputCountry"},"Country",-1),Tr={class:"form-group"},$r=(0,s._)("label",{for:"shipTo"},"Is this the shipping address?",-1),Kr=(0,s._)("input",{type:"submit",class:"btn btn-primary",value:"Submit"},null,-1);function Vr(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",Cr,[Dr,(0,s._)("form",{id:"createNewAddress",onSubmit:t[6]||(t[6]=(0,a.iM)((e=>o.submit()),["prevent"]))},[Pr,(0,s._)("div",Nr,[Sr,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputStreetName","aria-describedby":"streetNameHelp",placeholder:"Enter street name","onUpdate:modelValue":t[0]||(t[0]=t=>e.streetName=t)},null,512),[[a.nr,e.streetName]])]),(0,s._)("div",Ur,[Er,(0,s.wy)((0,s._)("input",{type:"city",class:"form-control",id:"inputCity","aria-describedby":"cityHelp",placeholder:"Enter city","onUpdate:modelValue":t[1]||(t[1]=t=>e.city=t)},null,512),[[a.nr,e.city]])]),(0,s._)("div",zr,[Hr,(0,s.wy)((0,s._)("input",{type:"region",class:"form-control",id:"inputRegion",placeholder:"Region","onUpdate:modelValue":t[2]||(t[2]=t=>e.region=t)},null,512),[[a.nr,e.region]])]),(0,s._)("div",xr,[Ir,(0,s.wy)((0,s._)("input",{type:"postalCode",class:"form-control",id:"inputPostalCode",placeholder:"Postal Code","onUpdate:modelValue":t[3]||(t[3]=t=>e.postalCode=t)},null,512),[[a.nr,e.postalCode]])]),(0,s._)("div",Or,[Ar,(0,s.wy)((0,s._)("input",{type:"country",class:"form-control",id:"inputCountry",placeholder:"Country","onUpdate:modelValue":t[4]||(t[4]=t=>e.country=t)},null,512),[[a.nr,e.country]])]),(0,s._)("div",Tr,[$r,(0,s.wy)((0,s._)("input",{type:"shipTo",class:"form-control",id:"shipTo",placeholder:"Ship To","onUpdate:modelValue":t[5]||(t[5]=t=>e.shipTo=t)},null,512),[[a.nr,e.shipTo]])]),Kr,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.errors,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"text-danger",key:e},(0,V.zw)(e),1)))),128))])],32)])}var Wr={data:function(){return{streetName:"",city:"",region:"",country:"",postalCode:"",shipTo:"",errors:[]}},methods:{submit:function(){var e={street_name:this.streetName,city:this.city,region:this.region,country:this.country,postal_code:this.postalCode};A().post("/api/user_addresses",e).then((e=>{this.$router.push("/profile/addresses")})).catch((e=>{this.errors=e.response.data.errors}))}}};const Fr=(0,N.Z)(Wr,[["render",Vr]]);var jr=Fr;const Yr={class:"profile"},Lr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Rr={class:"wrapper",id:"addressDetailGrid"},Zr={class:"addressUpdateCard"},Gr=(0,s.Uk)(" Street Name: "),qr=(0,s._)("br",null,null,-1),Br=(0,s.Uk)(" City: "),Mr=(0,s._)("br",null,null,-1),Qr=(0,s.Uk)(" Region: "),Jr=(0,s._)("br",null,null,-1),Xr=(0,s.Uk)(" Postal Code: "),ea=(0,s._)("br",null,null,-1),ta=(0,s._)("input",{class:"btnAddress",type:"submit",Value:"Submit"},null,-1),ra=(0,s.Uk)("Cancel");function aa(e,t,r,i,l,o){const n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Yr,[Lr,(0,s._)("div",Rr,[(0,s._)("div",Zr,[(0,s._)("form",{onSubmit:t[5]||(t[5]=(0,a.iM)((t=>o.updateAddress(e.address)),["prevent"]))},[(0,s._)("div",null,[Gr,qr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.address.street_name=t)},null,512),[[a.nr,e.address.street_name]])]),(0,s._)("div",null,[Br,Mr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.address.city=t)},null,512),[[a.nr,e.address.city]])]),(0,s._)("div",null,[Qr,Jr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.address.region=t)},null,512),[[a.nr,e.address.region]])]),(0,s._)("div",null,[Xr,ea,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.address.postal_code=t)},null,512),[[a.nr,e.address.postal_code]])]),(0,s._)("div",null,[ta,(0,s._)("button",{onClick:t[4]||(t[4]=t=>o.destroyAddress(e.address)),class:"btnAddress"}," Delete "),(0,s.Wm)(n,{to:{name:"addresses"},class:"btnAddress"},{default:(0,s.w5)((()=>[ra])),_:1})])],32)])])])}var sa={data:function(){return{address:{}}},created:function(){A().get("/api/user_addresses/"+this.$route.params.id).then((e=>{this.address=e.data,console.log(this.address)}))},methods:{destroyAddress:function(e){A()["delete"]("/api/user_addresses/"+this.$route.params.id).then((e=>{console.log("address destroy",e),this.$router.push("/profile/addresses")}))},updateAddress:function(e){var t={street_name:e.street_name,city:e.city,region:e.region,postal_code:e.postal_code};A().patch("/api/user_addresses/"+this.$route.params.id,t).then((e=>{console.log("address update",e),this.$router.push("/profile/addresses")}))}}};const ia=(0,N.Z)(sa,[["render",aa]]);var la=ia;const oa={},na=oa;var da=na;const ca={class:"profile"},ua=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),pa=[ua];function ma(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",ca,pa)}var va={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e={email:this.email,password:this.password};A().post("/api/sessions",e).then((e=>{A().defaults.headers.common.Authorization="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),this.$router.push("/")})).catch((e=>{this.errors=["Invalid email or password."],this.email="",this.password=""}))}}};const ha=(0,N.Z)(va,[["render",ma]]);var fa=ha;const _a={class:"profile"},ga=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),wa={class:"wrapper",id:"orderHistoryGrid"},ya={class:"orderHistoryWrapper"},ba={class:"orderHistoryHeader"},ka=(0,s._)("div",null,"ORDER PLACED",-1),Ca=(0,s._)("div",null,"TOTAL",-1),Da=(0,s._)("div",null,"SHIP TO",-1),Pa=(0,s._)("div",null,null,-1),Na={id:"orderHistoryHeader2"},Sa=(0,s._)("div",null,null,-1),Ua=(0,s._)("div",null,"View Order Details",-1),Ea=(0,s._)("div",null,"View Invoice",-1),za={id:"orderNestedGrid"},Ha=(0,s._)("div",{id:"orderHistorySupport"},[(0,s._)("div",null,"Track Package"),(0,s._)("div",null,"Get Product Support"),(0,s._)("div",null,"Return or Replace Items"),(0,s._)("div",null,"Share Gift Receipt"),(0,s._)("div",null,"Leave Seller Feedback")],-1);function xa(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",_a,[ga,(0,s._)("div",wa,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orders,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",ya,[(0,s._)("div",ba,[ka,Ca,Da,Pa,(0,s._)("div",null,"ORDER #"+(0,V.zw)(e.id),1)]),(0,s._)("div",Na,[(0,s._)("div",null,(0,V.zw)(e.date_created),1),(0,s._)("div",null,"$"+(0,V.zw)(e.total),1),Sa,Ua,Ea]),(0,s._)("div",za,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{id:"orderList",key:t},[(0,s._)("div",null,(0,V.zw)(e.title),1),(0,s._)("div",null,(0,V.zw)(e.description),1),(0,s._)("div",null,"Price: $"+(0,V.zw)(e.price),1)])))),128))]),Ha])])])))),128))])])}var Ia={data:function(){return{orders:[],products:[]}},created:function(){A().get("/api/orders").then((e=>{this.orders=e.data,console.log(this.orders)}))}};const Oa=(0,N.Z)(Ia,[["render",xa]]);var Aa=Oa;const Ta=[{path:"/",name:"home",component:K},{path:"/products",name:"products",component:M},{path:"/login",name:"login",component:ne},{path:"/signup",name:"signup",component:Pe},{path:"/products/:id",name:"singleProduct",component:Ke},{path:"/cart",name:"cart",component:at},{path:"/checkout",name:"checkout",component:xt},{path:"/order/:id",name:"order",component:jt},{path:"/profile",name:"profile",component:nr},{path:"/profile/addresses",name:"addresses",component:kr},{path:"/profile/addresses/new",name:"addresses-new",component:jr},{path:"/profile/addresses/:id",name:"address-edit",component:la},{path:"/profile/billing",name:"billing",component:fa},{path:"/profile/order-history",name:"order-history",component:Aa},{path:"/profile/account-information",name:"account-information",component:da}],$a=(0,E.p7)({history:(0,E.PO)("/"),routes:Ta});var Ka=$a,Va=localStorage.getItem("jwt");Va&&(A().defaults.headers.common.Authorization="Bearer "+Va),A().defaults.baseURL="/",(0,a.ri)(U).use(Ka).mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],i=e[c][2];for(var o=!0,n=0;n<a.length;n++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(o=!1,i<l&&(l=i));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,l=a[0],o=a[1],n=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(n)var c=n(r)}for(t&&t(a);d<l.length;d++)i=l[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunkecommerce_vue_app"]=self["webpackChunkecommerce_vue_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5919)}));a=r.O(a)})();
//# sourceMappingURL=app.878fa015.js.map