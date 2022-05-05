(function(){"use strict";var e={489:function(e,t,r){var a=r(9242),s=r(3396);const i={id:"app"},l=(0,s._)("a",{class:"navbar-brand",href:"/"},"E-Commerce",-1),o={class:"collapse navbar-collapse",id:"navbarSupportedContent"},n={class:"navbar-nav ml-auto",id:"navbarHeader"},d=(0,s.uE)('<li class="nav-item active"><a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/products">Products</a></li>',2),c={key:0,class:"nav-item"},u=(0,s._)("a",{class:"nav-link",href:"/profile"},"Account",-1),p=[u],m={key:1,class:"nav-item"},v=(0,s._)("a",{class:"nav-link",href:"/login"},"Log-In",-1),h=[v],f={key:2,class:"nav-item"},_=(0,s._)("a",{class:"nav-link",href:"/cart"},"Cart",-1),g=[_],w={key:3,class:"nav-item"},y=(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),b=(0,s.uE)('<footer><div class="footer row bg-dark text-light"><div class="text-center col-lg-6 offset-lg-3"><br><p><h4>Samuel Son</h4></p></div><div><div class="container"><div class="footerSocial"><div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal"><a href="https://www.linkedin.com/in/samuel-son-68078a234/"><h4 class="linked">linkedin</h4></a></div><div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal"><a href="https://github.com/Son-Daehan"><h4 class="linked">Github</h4></a></div></div></div></div></div></footer>',1);function k(e,t,r,a,u,v){const _=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("header",null,[((0,s.wg)(),(0,s.iD)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",key:e.$route.fullPath},[l,(0,s._)("div",o,[(0,s._)("ul",n,[d,v.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",c,p)):(0,s.kq)("",!0),v.isNotLoggedIn()?((0,s.wg)(),(0,s.iD)("li",m,h)):(0,s.kq)("",!0),v.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",f,g)):(0,s.kq)("",!0),v.isLoggedIn()?((0,s.wg)(),(0,s.iD)("li",w,[(0,s._)("a",{class:"nav-link",href:"/login",onClick:t[0]||(t[0]=(...e)=>v.logOut&&v.logOut(...e))},"Log Out")])):(0,s.kq)("",!0)])]),y]))]),(0,s.Wm)(_),b])}var C={data:function(){return{}},methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")},isNotLoggedIn:function(){return!localStorage.getItem("jwt")},logOut:function(){localStorage.removeItem("jwt")}}},D=r(89);const P=(0,D.Z)(C,[["render",k]]);var E=P,N=r(678);const S={class:"home"},U=(0,s._)("div",{id:"myCarousel"},[(0,s._)("div",{class:"carousel-inner"},[(0,s._)("div",{class:"carousel-item active"},[(0,s._)("img",{class:"imageHome d-block w-100",src:"https://res.cloudinary.com/daehan/image/upload/v1651708093/Ecommerce%20App/sale-tag-online-shopping_prxtco.jpg",alt:"ecommerce image"})])])],-1),z=[U];function H(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",S,z)}var x=r(6265),I=r.n(x),O={data:function(){return{message:"Welcome to Vue.js!",products:[]}},created:function(){I().get("/api/products").then((e=>{this.products=e.data,console.log(this.products)}))},methods:{}};const A=(0,D.Z)(O,[["render",H]]);var T=A,$=r(7139);const K={id:"productmain"},V={class:"products"},W={class:"btnCategoryContainer"},F={class:"wrapperProduct",id:"product-wrapper"},j={class:"card",id:"product-nested"},Y=["src","alt"],L={class:"price"};function R(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("div",V,[(0,s._)("div",W,[(0,s._)("button",{class:(0,$.C_)(["btnCategory",{active:"all"==e.productFilterKey}]),onClick:t[0]||(t[0]=t=>e.productFilterKey="all")}," All ",2),(0,s._)("button",{class:(0,$.C_)(["btnCategory",{active:"mens clothing"==e.productFilterKey}]),onClick:t[1]||(t[1]=t=>e.productFilterKey="menClothing")}," Men's Clothing ",2),(0,s._)("button",{class:(0,$.C_)(["btnCategory",{active:"womens clothing"==e.productFilterKey}]),onClick:t[2]||(t[2]=t=>e.productFilterKey="womenClothing")}," Women's Clothing ",2),(0,s._)("button",{class:(0,$.C_)(["btnCategory",{active:"jewelery"==e.productFilterKey}]),onClick:t[3]||(t[3]=t=>e.productFilterKey="jewelery")}," Jewelery ",2),(0,s._)("button",{class:(0,$.C_)(["btnCategory",{active:"electronics"==e.productFilterKey}]),onClick:t[4]||(t[4]=t=>e.productFilterKey="electronics")}," Electronics ",2)]),(0,s._)("div",F,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.productFilter,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",j,[(0,s._)("div",null,[(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:t+1}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.image_url,id:"product-image",alt:e.title},null,8,Y)])),_:2},1032,["to"])]),(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:t+1}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(e.title),1)])),_:2},1032,["to"]),(0,s._)("div",L,"$"+(0,$.zw)(e.price),1)])])))),128))])])])}var Z={data:function(){return{products:[],productFilterKey:"all"}},created:function(){I().get("/api/products").then((e=>{this.products=e.data,console.log(this.products)}))},computed:{productFilter(){return this[this.productFilterKey]},all(){return this.products},electronics(){return this.products.filter((e=>"electronics"==e.category))},menClothing(){return this.products.filter((e=>"men's clothing"==e.category))},womenClothing(){return this.products.filter((e=>"women's clothing"==e.category))},jewelery(){return this.products.filter((e=>"jewelery"==e.category))}}};const G=(0,D.Z)(Z,[["render",R]]);var q=G;const B={class:"login"},M=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Log-In")],-1),Q={class:"form-group"},J=(0,s._)("label",{for:"inputEmail"},"Email address",-1),X=(0,s._)("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.",-1),ee={class:"form-group"},te=(0,s._)("label",{for:"inputPassword"},"Password",-1),re=(0,s.uE)('<div class="form-group form-check"><input type="checkbox" class="form-check-input" id="inputRemember"><label class="form-check-label" for="inputRemember">Remember Me</label></div><input id="logInSubmit" type="submit" class="btn btn-primary" value="Submit"><a href="/signup" class="btn btn-primary">Sign-Up</a>',3);function ae(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("form",{id:"login",onSubmit:t[2]||(t[2]=(0,a.iM)((e=>o.submit()),["prevent"]))},[M,(0,s._)("div",Q,[J,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t)},null,512),[[a.nr,e.email]]),X]),(0,s._)("div",ee,[te,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t)},null,512),[[a.nr,e.password]])]),re],32)])}var se={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e={email:this.email,password:this.password};I().post("/api/sessions",e).then((e=>{I().defaults.headers.common.Authorization="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),this.$router.push("/")})).catch((e=>{this.errors=["Invalid email or password."],this.email="",this.password=""}))}}};const ie=(0,D.Z)(se,[["render",ae]]);var le=ie;const oe={id:"signup"},ne={class:"signup"},de=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Create Account")],-1),ce={class:"form-group"},ue=(0,s._)("label",{for:"inputEmail"},"Your name",-1),pe={class:"form-group"},me=(0,s._)("label",{for:"inputEmail"},"Email address",-1),ve={class:"form-group"},he=(0,s._)("label",{for:"inputPassword"},"Password",-1),fe=(0,s._)("small",{id:"emailHelp",class:"form-text text-muted"},"Password must be at least 6 characters.",-1),_e={class:"form-group"},ge=(0,s._)("label",{for:"inputPassword"},"Confirm password",-1),we=(0,s._)("input",{type:"submit",class:"btn btn-primary",value:"Submit"},null,-1);function ye(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",oe,[(0,s._)("div",ne,[(0,s._)("form",{id:"login",onSubmit:t[4]||(t[4]=(0,a.iM)((e=>o.submit()),["prevent"]))},[de,(0,s._)("div",ce,[ue,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,512),[[a.nr,e.name]])]),(0,s._)("div",pe,[me,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email","onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t)},null,512),[[a.nr,e.email]])]),(0,s._)("div",ve,[he,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t)},null,512),[[a.nr,e.password]]),fe]),(0,s._)("div",_e,[ge,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=t=>e.passwordConfirmation=t)},null,512),[[a.nr,e.passwordConfirmation]])]),we,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.errors,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"text-danger",key:e},(0,$.zw)(e),1)))),128))])],32)])])}var be={data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};I().post("/api/users",e).then((e=>{this.$router.push("/login")})).catch((e=>{this.errors=e.response.data.errors}))}}};const ke=(0,D.Z)(be,[["render",ye]]);var Ce=ke;const De={id:"productdetailmain"},Pe={class:"singleProduct"},Ee={class:"wrapper",id:"product-detail-wrapper"},Ne={class:"cardImage"},Se=["src","alt"],Ue={class:"productStyle cardDetail",id:"productDetailNested"},ze={id:"individualProductTitle"},He={class:"qty-changer"},xe=(0,s.Uk)(" Quantity ");function Ie(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",De,[(0,s._)("div",Pe,[(0,s._)("div",Ee,[(0,s._)("div",Ne,[(0,s._)("img",{src:e.product.image_url,id:"productDetailImage",alt:e.product.title},null,8,Se)]),(0,s._)("div",Ue,[(0,s._)("div",ze,(0,$.zw)(e.product.title),1),(0,s._)("div",null,(0,$.zw)(e.product.description),1),(0,s._)("div",null,"$ "+(0,$.zw)(e.product.price),1),(0,s._)("div",He,[xe,(0,s.wy)((0,s._)("input",{class:"qty-input form-group",type:"number","onUpdate:modelValue":t[0]||(t[0]=t=>e.newCartedProductQuantity=t)},null,512),[[a.nr,e.newCartedProductQuantity]])]),(0,s._)("button",{onClick:t[1]||(t[1]=e=>o.createCartedProducts()),type:"button",class:"btn btn-primary product-button"}," Add to Cart ")])])])])}var Oe={data:function(){return{product:[],carted_products:[],newCartedProductQuantity:""}},created:function(e){I().get("/api/products/"+this.$route.params.id).then((e=>{this.product=e.data,console.log(this.product)}))},methods:{createCartedProducts:function(){var e={user_id:1,product_id:this.$route.params.id,quantity:this.newCartedProductQuantity,status:"Carted"};I().post("/api/carted_products",e).then((e=>{console.log("Success",e.data),this.carted_products.push(e.data)})).catch((e=>{console.log(e)}))}}};const Ae=(0,D.Z)(Oe,[["render",Ie]]);var Te=Ae;const $e={class:"cart"},Ke=(0,s._)("div",{class:"cart-title"},[(0,s._)("h1",null,"Shopping Cart")],-1),Ve={key:0,class:"wrapper",id:"wholeWrapper"},We={class:"wrapper",id:"cartWrapper"},Fe={class:"nested",id:"cartNested"},je=["src","alt"],Ye={id:"cartNestedFurther"},Le={class:"computedDetail"},Re=["onClick"],Ze={class:"cardCartedTwo"},Ge={class:"button"},qe=(0,s.Uk)(" Checkout "),Be={key:1,id:"emptyCartGrid"},Me=(0,s._)("div",{class:"emptyCart"},"Shopping cart is empty.",-1),Qe=(0,s.Uk)("Continue Shopping");function Je(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",$e,[Ke,l.isEmpty?((0,s.wg)(),(0,s.iD)("div",Be,[Me,(0,s.Wm)(o,{class:"emptyCart",to:{name:"products"}},{default:(0,s.w5)((()=>[Qe])),_:1})])):((0,s.wg)(),(0,s.iD)("div",Ve,[(0,s._)("div",We,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"cardCarted",key:t},[(0,s._)("div",Fe,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.product.image,id:"product-image",alt:e.product.title},null,8,je)])),_:2},1032,["to"]),(0,s._)("div",Ye,[(0,s._)("div",null,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(e.product.title),1)])),_:2},1032,["to"])]),(0,s._)("div",null,(0,$.zw)(e.product.description),1)]),(0,s._)("div",Le,[(0,s._)("div",null,"Quantity: "+(0,$.zw)(e.quantity),1),(0,s._)("div",null,"Price: $"+(0,$.zw)(e.product.price),1),(0,s._)("button",{class:"button",onClick:t=>l.destroyCartedProduct(e)}," Delete ",8,Re)])])])))),128))]),(0,s._)("div",Ze,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",null,[(0,s.Uk)(" Subtotal: $"+(0,$.zw)(e.subtotal)+" ",1),(0,s._)("button",Ge,[(0,s.Wm)(o,{to:"/checkout"},{default:(0,s.w5)((()=>[qe])),_:1})])])])))),128))])]))])}var Xe={data:function(){return{cartedProducts:[]}},created:function(){I().get("/api/carted_products").then((e=>{this.cartedProducts=e.data,console.log(this.cartedProducts)}))},methods:{destroyCartedProduct:function(e){I()["delete"]("/api/carted_products/"+e.id).then((e=>{console.log("Carted product has been destroyed",e),this.$router.go()}))}},computed:{isEmpty:({cartedProducts:e})=>0===e.length}};const et=(0,D.Z)(Xe,[["render",Je]]);var tt=et;const rt={class:"checkout"},at=(0,s._)("div",{class:"checkout-title"},[(0,s._)("h1",null,"Checkout")],-1),st={class:"wrapper",id:"checkoutWholeWrapper"},it={class:"firstRowWrapper"},lt={key:0,class:"wrapper addressCard",id:"firstNested"},ot=(0,s._)("div",null,"Shipping Method",-1),nt=(0,s._)("br",null,null,-1),dt=(0,s.Uk)("Change"),ct=(0,s._)("div",null,[(0,s._)("div",{class:"wrapper billingCard",id:"secondNested"},[(0,s._)("div",null,[(0,s._)("div",null,"Payment Method")]),(0,s._)("div",null,[(0,s._)("div",null,"test")]),(0,s._)("div",null,[(0,s._)("div",null,"test")])])],-1),ut={class:"wrapper",id:"thirdNested"},pt={class:"productOrderCard"},mt={id:"checkoutThirdNestedFurther"},vt=["src","alt"],ht={class:"checkoutProductCardNested"},ft={class:"productOrderTitle"},_t={class:"productOrderDescription"},gt={class:"productQuantityPrice"},wt=(0,s._)("hr",{width:"100%"},null,-1),yt={class:"orderCard"},bt=(0,s._)("div",{id:"summaryTitle"},"Order Summary",-1),kt={class:"orderCardWrapper"},Ct={class:"orderCardLeft",id:"fourthNested"},Dt=(0,s._)("div",{class:"summaryDetail"},"Shipping and Handling:",-1),Pt={class:"orderCardRight",id:"fourthNested"},Et=(0,s._)("div",{class:"summaryDetail"},"$0.00",-1);function Nt(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",rt,[at,(0,s._)("div",st,[(0,s._)("div",it,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.activeAddress,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[0!=e.ship_to?((0,s.wg)(),(0,s.iD)("div",lt,[ot,(0,s._)("div",null,[(0,s.Uk)((0,$.zw)(e.street_name)+", ",1),nt,(0,s.Uk)(" "+(0,$.zw)(e.city)+", "+(0,$.zw)(e.region)+", "+(0,$.zw)(e.postal_code),1)]),(0,s.Wm)(o,{class:"button addressChangeButton",to:{path:"/profile/addresses"}},{default:(0,s.w5)((()=>[dt])),_:1})])):(0,s.kq)("",!0)])))),128)),ct]),(0,s._)("div",ut,[(0,s._)("div",pt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",mt,[(0,s._)("div",null,[(0,s.Wm)(o,{class:"routerLink",to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.product.image,id:"product-image",alt:e.product.title},null,8,vt)])),_:2},1032,["to"])]),(0,s._)("div",ht,[(0,s._)("div",ft,[(0,s.Wm)(o,{to:{name:"singleProduct",params:{id:e.product.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(e.product.title),1)])),_:2},1032,["to"])]),(0,s._)("div",_t,(0,$.zw)(e.product.description),1),(0,s._)("div",gt,[(0,s._)("div",null,"Quantity: "+(0,$.zw)(e.quantity),1),(0,s._)("div",null," Total Product Price: $"+(0,$.zw)(e.product.price*e.quantity),1)])])]),wt])))),128))]),(0,s._)("div",yt,[bt,(0,s._)("div",kt,[(0,s._)("div",Ct,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Subtotal: ")))),128)),Dt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Total Before Tax: ")))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," Estimated Tax: ")))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryTotal",key:t}," Order Total: ")))),128))]),(0,s._)("div",Pt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,$.zw)(e.subtotal),1)))),128)),Et,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,$.zw)(e.subtotal),1)))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryDetail",key:t}," $"+(0,$.zw)(e.estimated_tax),1)))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cartedProducts.slice(0,1),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"summaryTotal",key:t}," $"+(0,$.zw)(e.total_order_price),1)))),128))])]),(0,s._)("button",{onClick:t[0]||(t[0]=e=>l.createOrder()),type:"button",class:"btn btn-primary"}," Create Order ")])])])])}var St={data:function(){return{cartedProducts:[],addresses:[],errors:[],order:[],taxes:[]}},methods:{createOrder:function(e){var t={};I().post("/api/orders",t).then((e=>{console.log("Success",e.data),this.order.push(e.data),this.orderId=e.data.id,this.$router.push({name:"order",params:{id:this.orderId}})})).catch((e=>{console.log(e)}))}},created:function(){I().get("/api/carted_products").then((e=>{this.cartedProducts=e.data,console.log(this.cartedProducts)})),I().get("/api/user_addresses").then((e=>{this.addresses=e.data,console.log(this.addresses)})),I().get("/api/taxes").then((e=>{this.taxes=e.data,console.log(this.taxes)}))},computed:{activeAddress:function(){return this.addresses.filter((function(e){return e.ship_to}))}}};const Ut=(0,D.Z)(St,[["render",Nt]]);var zt=Ut;const Ht={class:"order"},xt={class:"wrapper",id:"orderWrapper"},It=(0,s._)("div",{class:"order-title"},[(0,s._)("h1",null,"Order")],-1),Ot={class:"orderNested"},At=(0,s._)("div",{class:"orderNestedLeft"},[(0,s._)("div",null,"Order ID:"),(0,s._)("div",null,"Subtotal:"),(0,s._)("div",null,"Total Tax:"),(0,s._)("div",null,"Total:")],-1),Tt={class:"orderNestedRight"};function $t(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",Ht,[(0,s._)("div",xt,[It,(0,s._)("div",Ot,[At,(0,s._)("div",Tt,[(0,s._)("div",null,(0,$.zw)(e.order.id),1),(0,s._)("div",null,"$"+(0,$.zw)(e.order.subtotal),1),(0,s._)("div",null,"$"+(0,$.zw)(e.order.tax),1),(0,s._)("div",null,"$"+(0,$.zw)(e.order.total),1)])])])])}var Kt={data:function(){return{order:[]}},created:function(e){I().get("/api/orders/"+this.$route.params.id).then((e=>{this.order=e.data,console.log(this.order)}))}};const Vt=(0,D.Z)(Kt,[["render",$t]]);var Wt=Vt;const Ft={id:"profilemain"},jt={class:"profile"},Yt=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Lt={key:0,class:"wrapper",id:"profileGrid"},Rt={class:"profileCard"},Zt={id:"profileNestedGrid"},Gt={key:1,class:"wrapper profileCard",id:"profileEditGrid"},qt={id:"profileEditNestedGrid"},Bt=(0,s._)("div",null,"Name:",-1),Mt=(0,s._)("div",null,"Email:",-1),Qt=(0,s._)("div",null,"Phone Number:",-1),Jt=(0,s._)("div",null,"Password:",-1),Xt=(0,s._)("div",null,"Password Confirmation:",-1),er=(0,s.Uk)(),tr=(0,s._)("br",null,null,-1),rr=(0,s._)("input",{class:"btnEditProfile",type:"submit",Value:"Submit"},null,-1);function ar(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",Ft,[(0,s._)("div",jt,[Yt,e.isEditing?((0,s.wg)(),(0,s.iD)("form",Gt,[(0,s._)("div",null,[(0,s._)("form",{onSubmit:t[6]||(t[6]=(0,a.iM)((t=>o.updateUser(e.user)),["prevent"]))},[(0,s._)("div",qt,[Bt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.user.name=t)},null,512),[[a.nr,e.user.name]]),Mt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.user.email=t)},null,512),[[a.nr,e.user.email]]),Qt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.user.phone_number=t)},null,512),[[a.nr,e.user.phone_number]]),Jt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.user.password=t)},null,512),[[a.nr,e.user.password]]),Xt,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=t=>e.user.password_confirmation=t)},null,512),[[a.nr,e.user.password_confirmation]]),er,tr]),rr],32)]),(0,s._)("button",{class:"btnEditProfile",onClick:t[7]||(t[7]=(...e)=>o.toggleToItemEditForm&&o.toggleToItemEditForm(...e))}," Cancel ")])):((0,s.wg)(),(0,s.iD)("div",Lt,[(0,s._)("div",Rt,[(0,s._)("div",Zt,[(0,s._)("div",null,[(0,s._)("div",null,(0,$.zw)(e.user.name),1),(0,s._)("div",null,(0,$.zw)(e.user.phone_number),1),(0,s._)("div",null,(0,$.zw)(e.user.email),1)]),(0,s._)("button",{class:"btnProfile",onClick:t[0]||(t[0]=(...e)=>o.toggleToItemEditForm&&o.toggleToItemEditForm(...e))}," Edit ")])])]))])])}var sr={data:function(){return{user:{},isEditing:!1,isDone:this.done}},created:function(){I().get("/api/users").then((e=>{this.user=e.data[0],console.log(this.user)}))},methods:{toggleToItemEditForm(){this.isEditing=!0},updateUser:function(e){var t={name:e.name,email:e.email,phone_number:e.phone_number,password:e.password,password_confirmation:e.password_confirmation};I().patch("/api/users/"+e.user_id,t).then((e=>{console.log("user update",e),this.$router.push("/profile"),this.isEditing=!1}))}}};const ir=(0,D.Z)(sr,[["render",ar]]);var lr=ir;const or={class:"profile"},nr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),dr={class:"wrapper addressViewCard",id:"addressGrid"},cr={id:"addressNestedGrid"},ur=(0,s._)("div",null,"Active Shipping Address",-1),pr={id:"addressStyling"},mr=(0,s._)("br",null,null,-1),vr=(0,s.Uk)(" Edit "),hr={key:0},fr=(0,s.Uk)("Create New Address ");function _r(e,t,r,a,i,l){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",or,[nr,(0,s._)("div",null,[(0,s._)("div",dr,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.addresses,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",cr,[ur,(0,s._)("div",pr,[(0,s.Uk)((0,$.zw)(e.street_name)+", ",1),mr,(0,s.Uk)((0,$.zw)(e.city)+", "+(0,$.zw)(e.region)+" "+(0,$.zw)(e.postal_code),1)]),(0,s.Wm)(o,{to:{name:"address-edit",params:{id:e.address_id}},id:"addressEditStyling"},{default:(0,s.w5)((()=>[vr])),_:2},1032,["to"])])])))),128)),0==e.addresses.length?((0,s.wg)(),(0,s.iD)("div",hr,[(0,s.Wm)(o,{to:{path:"/profile/addresses/new"}},{default:(0,s.w5)((()=>[fr])),_:1})])):(0,s.kq)("",!0)])])])}var gr={data:function(){return{addresses:[]}},created:function(){I().get("/api/user_addresses").then((e=>{this.addresses=e.data,console.log(this.addresses)}))}};const wr=(0,D.Z)(gr,[["render",_r]]);var yr=wr;const br={class:"profile"},kr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Cr=(0,s._)("div",{class:"form-group",id:"form-header"},[(0,s._)("h1",null,"Create Account")],-1),Dr={class:"form-group"},Pr=(0,s._)("label",{for:"inputStreetName"},"Your street name",-1),Er={class:"form-group"},Nr=(0,s._)("label",{for:"inputCity"},"City",-1),Sr={class:"form-group"},Ur=(0,s._)("label",{for:"inputRegion"},"region",-1),zr={class:"form-group"},Hr=(0,s._)("label",{for:"inputPostalCode"},"Postal Code",-1),xr={class:"form-group"},Ir=(0,s._)("label",{for:"inputCountry"},"Country",-1),Or={class:"form-group"},Ar=(0,s._)("label",{for:"shipTo"},"Is this the shipping address?",-1),Tr=(0,s._)("input",{type:"submit",class:"btn btn-primary",value:"Submit"},null,-1);function $r(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",br,[kr,(0,s._)("form",{id:"createNewAddress",onSubmit:t[6]||(t[6]=(0,a.iM)((e=>o.submit()),["prevent"]))},[Cr,(0,s._)("div",Dr,[Pr,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"inputStreetName","aria-describedby":"streetNameHelp",placeholder:"Enter street name","onUpdate:modelValue":t[0]||(t[0]=t=>e.streetName=t)},null,512),[[a.nr,e.streetName]])]),(0,s._)("div",Er,[Nr,(0,s.wy)((0,s._)("input",{type:"city",class:"form-control",id:"inputCity","aria-describedby":"cityHelp",placeholder:"Enter city","onUpdate:modelValue":t[1]||(t[1]=t=>e.city=t)},null,512),[[a.nr,e.city]])]),(0,s._)("div",Sr,[Ur,(0,s.wy)((0,s._)("input",{type:"region",class:"form-control",id:"inputRegion",placeholder:"Region","onUpdate:modelValue":t[2]||(t[2]=t=>e.region=t)},null,512),[[a.nr,e.region]])]),(0,s._)("div",zr,[Hr,(0,s.wy)((0,s._)("input",{type:"postalCode",class:"form-control",id:"inputPostalCode",placeholder:"Postal Code","onUpdate:modelValue":t[3]||(t[3]=t=>e.postalCode=t)},null,512),[[a.nr,e.postalCode]])]),(0,s._)("div",xr,[Ir,(0,s.wy)((0,s._)("input",{type:"country",class:"form-control",id:"inputCountry",placeholder:"Country","onUpdate:modelValue":t[4]||(t[4]=t=>e.country=t)},null,512),[[a.nr,e.country]])]),(0,s._)("div",Or,[Ar,(0,s.wy)((0,s._)("input",{type:"shipTo",class:"form-control",id:"shipTo",placeholder:"Ship To","onUpdate:modelValue":t[5]||(t[5]=t=>e.shipTo=t)},null,512),[[a.nr,e.shipTo]])]),Tr,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.errors,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"text-danger",key:e},(0,$.zw)(e),1)))),128))])],32)])}var Kr={data:function(){return{streetName:"",city:"",region:"",country:"",postalCode:"",shipTo:"",errors:[]}},methods:{submit:function(){var e={street_name:this.streetName,city:this.city,region:this.region,country:this.country,postal_code:this.postalCode};I().post("/api/user_addresses",e).then((e=>{this.$router.push("/profile/addresses")})).catch((e=>{this.errors=e.response.data.errors}))}}};const Vr=(0,D.Z)(Kr,[["render",$r]]);var Wr=Vr;const Fr={class:"profile"},jr=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),Yr={class:"wrapper",id:"addressDetailGrid"},Lr={class:"addressUpdateCard"},Rr=(0,s.Uk)(" Street Name: "),Zr=(0,s._)("br",null,null,-1),Gr=(0,s.Uk)(" City: "),qr=(0,s._)("br",null,null,-1),Br=(0,s.Uk)(" Region: "),Mr=(0,s._)("br",null,null,-1),Qr=(0,s.Uk)(" Postal Code: "),Jr=(0,s._)("br",null,null,-1),Xr=(0,s._)("input",{class:"btnAddress",type:"submit",Value:"Submit"},null,-1),ea=(0,s.Uk)("Cancel");function ta(e,t,r,i,l,o){const n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Fr,[jr,(0,s._)("div",Yr,[(0,s._)("div",Lr,[(0,s._)("form",{onSubmit:t[5]||(t[5]=(0,a.iM)((t=>o.updateAddress(e.address)),["prevent"]))},[(0,s._)("div",null,[Rr,Zr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.address.street_name=t)},null,512),[[a.nr,e.address.street_name]])]),(0,s._)("div",null,[Gr,qr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.address.city=t)},null,512),[[a.nr,e.address.city]])]),(0,s._)("div",null,[Br,Mr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.address.region=t)},null,512),[[a.nr,e.address.region]])]),(0,s._)("div",null,[Qr,Jr,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.address.postal_code=t)},null,512),[[a.nr,e.address.postal_code]])]),(0,s._)("div",null,[Xr,(0,s._)("button",{onClick:t[4]||(t[4]=t=>o.destroyAddress(e.address)),class:"btnAddress"}," Delete "),(0,s.Wm)(n,{to:{name:"addresses"},class:"btnAddress"},{default:(0,s.w5)((()=>[ea])),_:1})])],32)])])])}var ra={data:function(){return{address:{}}},created:function(){I().get("/api/user_addresses/"+this.$route.params.id).then((e=>{this.address=e.data,console.log(this.address)}))},methods:{destroyAddress:function(e){I()["delete"]("/api/user_addresses/"+this.$route.params.id).then((e=>{console.log("address destroy",e),this.$router.push("/profile/addresses")}))},updateAddress:function(e){var t={street_name:e.street_name,city:e.city,region:e.region,postal_code:e.postal_code};I().patch("/api/user_addresses/"+this.$route.params.id,t).then((e=>{console.log("address update",e),this.$router.push("/profile/addresses")}))}}};const aa=(0,D.Z)(ra,[["render",ta]]);var sa=aa;const ia={},la=ia;var oa=la;const na={class:"profile"},da=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),ca=[da];function ua(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",na,ca)}var pa={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e={email:this.email,password:this.password};I().post("/api/sessions",e).then((e=>{I().defaults.headers.common.Authorization="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),this.$router.push("/")})).catch((e=>{this.errors=["Invalid email or password."],this.email="",this.password=""}))}}};const ma=(0,D.Z)(pa,[["render",ua]]);var va=ma;const ha={class:"profile"},fa=(0,s.uE)('<nav class="navbar-custom"><div id="profileNavbar"><ul class="list-unstyled" id="profileNavbarNested"><li class="nav-item active"><a class="nav-link" href="/profile">Account Information <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/profile/addresses">Addresses</a></li><li class="nav-item"><a class="nav-link" href="/profile/billing">Billing</a></li><li class="nav-item"><a class="nav-link" href="/profile/order-history">Order-History</a></li></ul></div></nav>',1),_a={class:"wrapper",id:"orderHistoryGrid"},ga={class:"orderHistoryWrapper"},wa={class:"orderHistoryHeader"},ya=(0,s._)("div",null,"ORDER PLACED",-1),ba=(0,s._)("div",null,"TOTAL",-1),ka=(0,s._)("div",null,"SHIP TO",-1),Ca=(0,s._)("div",null,null,-1),Da={id:"orderHistoryHeader2"},Pa=(0,s._)("div",null,null,-1),Ea=(0,s._)("div",null,"View Order Details",-1),Na=(0,s._)("div",null,"View Invoice",-1),Sa={id:"orderNestedGrid"},Ua=(0,s._)("div",{id:"orderHistorySupport"},[(0,s._)("div",null,"Track Package"),(0,s._)("div",null,"Get Product Support"),(0,s._)("div",null,"Return or Replace Items"),(0,s._)("div",null,"Share Gift Receipt"),(0,s._)("div",null,"Leave Seller Feedback")],-1);function za(e,t,r,a,i,l){return(0,s.wg)(),(0,s.iD)("div",ha,[fa,(0,s._)("div",_a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orders,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",ga,[(0,s._)("div",wa,[ya,ba,ka,Ca,(0,s._)("div",null,"ORDER #"+(0,$.zw)(e.id),1)]),(0,s._)("div",Da,[(0,s._)("div",null,(0,$.zw)(e.date_created),1),(0,s._)("div",null,"$"+(0,$.zw)(e.total),1),Pa,Ea,Na]),(0,s._)("div",Sa,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{id:"orderList",key:t},[(0,s._)("div",null,(0,$.zw)(e.title),1),(0,s._)("div",null,(0,$.zw)(e.description),1),(0,s._)("div",null,"Price: $"+(0,$.zw)(e.price),1)])))),128))]),Ua])])])))),128))])])}var Ha={data:function(){return{orders:[],products:[]}},created:function(){I().get("/api/orders").then((e=>{this.orders=e.data,console.log(this.orders)}))}};const xa=(0,D.Z)(Ha,[["render",za]]);var Ia=xa;const Oa=[{path:"/",name:"home",component:T},{path:"/products",name:"products",component:q},{path:"/login",name:"login",component:le},{path:"/signup",name:"signup",component:Ce},{path:"/products/:id",name:"singleProduct",component:Te},{path:"/cart",name:"cart",component:tt},{path:"/checkout",name:"checkout",component:zt},{path:"/order/:id",name:"order",component:Wt},{path:"/profile",name:"profile",component:lr},{path:"/profile/addresses",name:"addresses",component:yr},{path:"/profile/addresses/new",name:"addresses-new",component:Wr},{path:"/profile/addresses/:id",name:"address-edit",component:sa},{path:"/profile/billing",name:"billing",component:va},{path:"/profile/order-history",name:"order-history",component:Ia},{path:"/profile/account-information",name:"account-information",component:oa}],Aa=(0,N.p7)({history:(0,N.PO)("/"),routes:Oa});var Ta=Aa,$a=localStorage.getItem("jwt");$a&&(I().defaults.headers.common.Authorization="Bearer "+$a),I().defaults.baseURL="/",(0,a.ri)(E).use(Ta).mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],i=e[c][2];for(var o=!0,n=0;n<a.length;n++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(o=!1,i<l&&(l=i));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,l=a[0],o=a[1],n=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(n)var c=n(r)}for(t&&t(a);d<l.length;d++)i=l[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunkecommerce_vue_app"]=self["webpackChunkecommerce_vue_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(489)}));a=r.O(a)})();
//# sourceMappingURL=app.966ccf78.js.map