(this["webpackJsonpweb-solution"]=this["webpackJsonpweb-solution"]||[]).push([[0],{117:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_TOTALSUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPauseStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipRevealStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"chosenAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"setMaxxQtPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},215:function(e,t,n){},232:function(e,t){},234:function(e,t){},236:function(e,t){},240:function(e,t){},266:function(e,t){},268:function(e,t){},283:function(e,t){},285:function(e,t){},317:function(e,t){},319:function(e,t){},408:function(e,t){},409:function(e,t){},502:function(e,t,n){},510:function(e,t,n){"use strict";n.r(t);var s=n(113),a=n.n(s),i=(n(79),n(15)),c=n(2),l=(n(215),n(0));var r=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(i.a)(a,2),o=r[0],d=r[1],p=Object(c.useState)(0),b=Object(i.a)(p,2),j=b[0],u=b[1],m=Object(c.useState)(0),h=Object(i.a)(m,2),x=h[0],O=h[1],y=Object(c.useState)(!0),v=Object(i.a)(y,2),f=v[0],g=v[1],w=function(){var e=new Date("March 15, 2022 16:00:00").getTime()-(new Date).getTime(),t=6e4,n=60*t,a=24*n,i=Math.floor(e/a),c=Math.floor(e%a/n),l=Math.floor(e%n/t),r=Math.floor(e%t/1e3);c=(c=c<1?0:c)<10?"0"+c:c,l=(l=l<1?0:l)<10?"0"+l:l,r=(r=r<1?0:r)<10?"0"+r:r,s(i=(i=i<1?0:i)<10?"0"+i:i),d(c),u(l),O(r)};return Object(c.useEffect)((function(){var e=setInterval(w,1e3);return g(!1),function(){return clearInterval(e)}}),[]),Object(l.jsx)(l.Fragment,{children:f?Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("div",{className:"spinner"})}):Object(l.jsx)("section",{className:"counter-color ",children:Object(l.jsx)("div",{className:"counter-container container-fluid py-5",children:Object(l.jsxs)("div",{className:"countdown",children:[Object(l.jsxs)("article",{children:[Object(l.jsx)("p",{children:n}),Object(l.jsx)("h3",{className:"text-white",children:"Days"})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("p",{children:o}),Object(l.jsx)("h3",{className:"text-white",children:"Hours"})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("p",{children:j}),Object(l.jsx)("h3",{className:"text-white",children:"Minutes"})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("p",{children:x}),Object(l.jsx)("h3",{className:"text-white",children:"Seconds"})]})]})})})})};n(22),n(116),n(117),n(78),n(118);n(497).config();var o=n.p+"static/media/Discord.0c358a7b.webp",d=n.p+"static/media/FB.c83bca6c.webp",p=n.p+"static/media/Instgram.9c505d5e.webp",b=n.p+"static/media/twitter.f5f5f33c.webp";n(204),n(500),n(502);var j=function(){return Object(l.jsx)("div",{class:"container-fluid maindiv m-0 p-0",children:Object(l.jsx)("div",{class:"row row1",children:Object(l.jsxs)("div",{class:"col-6 middlediv",children:[Object(l.jsx)("p",{className:"fonts  websitename",children:"            Billionaire Sheep club"}),Object(l.jsx)("h1",{className:"fonts  comingsoontext",children:"Coming Soon! "})]})})})};var u=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("nav",{class:"navbar navbar-expand-lg  navbar-light bg-transparent navbardivnav",children:[Object(l.jsx)("button",{class:"navbar-toggler custom-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{class:"navbar-toggler-icon navbar-toggler"})}),Object(l.jsx)("div",{class:"collapse navbar-collapse navbardivnav122",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{class:"navbar-nav mr-auto ",children:[Object(l.jsx)("li",{class:"nav-item active",children:Object(l.jsxs)("a",{class:"nav-link links",href:"#",children:["Home ",Object(l.jsx)("span",{class:"sr-only"})]})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link links",href:"#about",children:"About"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link links",href:"#mint",children:"Mint"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link links",href:"#roadmap",children:"Roadmap"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link links",href:"/breeding",children:"Breeding "})})]})}),Object(l.jsx)("div",{className:"navbardivnav12",children:Object(l.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12 ",children:[Object(l.jsxs)("li",{class:"nav-item links",children:[Object(l.jsx)("a",{href:"https://discord.gg/kzyctCBTC8",children:Object(l.jsx)("img",{className:"socialicon",src:o})}),"                    "]}),Object(l.jsxs)("li",{class:"nav-item links",children:[Object(l.jsx)("a",{href:"https://twitter.com/BillionaireShe1",children:Object(l.jsx)("img",{className:"socialicon",src:b})}),"                    "]}),Object(l.jsxs)("li",{class:"nav-item links",children:["                      ",Object(l.jsx)("a",{href:"https://www.facebook.com/Billionaire-Sheep-Club-104094652177728",children:Object(l.jsx)("img",{className:"socialicon",src:d})})]}),Object(l.jsxs)("li",{class:"nav-item links",children:[Object(l.jsx)("a",{href:"https://www.instagram.com/billionairesheepclub/",children:Object(l.jsx)("img",{className:"socialicon",src:p})}),"                    "]})]})})]})})},m=n.p+"static/media/placeholder.c9f4ad06.webp",h=n.p+"static/media/bandana.3c73aaf4.png",x=n.p+"static/media/spray.01984b5b.png",O=n.p+"static/media/oslogo.11cc3611.webp",y=n.p+"static/media/sagi.358b14cb.png",v=n.p+"static/media/moar.d6004244.png",f=(n(503),n(25)),g=n.n(f);n(507);var w=function(){return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"margindist  text-center pb-5 mb-2",children:"Billionaire Sheep club"}),Object(l.jsx)(r,{})]})]}),Object(l.jsxs)("div",{className:" pt-5 container",children:[Object(l.jsxs)("div",{className:"row mb-5 pb-5",children:[Object(l.jsx)("div",{className:"col-md-7",children:Object(l.jsxs)("div",{className:"intro mb-5 pt-5",id:"mint",children:[Object(l.jsx)("h1",{className:"titletext1 tex t-center",children:"Welcome to the Billionaire Sheep club"}),Object(l.jsx)("p",{className:"text-white text-lg t ext-center",children:"Billionaire Sheep Club is a unique collection of 10,000 Sheeps built on the ERC20 network."}),Object(l.jsx)("p",{className:"text-white text-lg te xt-center",children:"Join the billionaire sheep frenzy as we are about to take over the world & fly to the moon!"})]})}),Object(l.jsxs)("div",{className:"col-md-5",children:[Object(l.jsx)("img",{src:m,className:"pb-5 mx-auto d-block rotate imgs"}),Object(l.jsx)("button",{className:"mt-3 mint-btn mx-auto d-block",children:"Mint Coming Very Soon"})]})]}),Object(l.jsxs)("div",{className:"row container maincards ",children:[Object(l.jsxs)("div",{className:"row  cards  ",children:[Object(l.jsxs)("div",{className:"col-md-4 px-2 background",children:[Object(l.jsx)("img",{src:x,className:"d-block mx-auto pb-2   "}),Object(l.jsxs)("p",{className:"text-center  infotext",children:["Get yours now before it\u2019s too late! Many unique benefits and exclusive access for holders & much more to look forward to as we move forward as a community."," "]})]}),Object(l.jsxs)("div",{className:"col-md-4 px-2 background",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",className:"d-block mx-auto pb-3"}),Object(l.jsxs)("p",{className:"text-center e infotext",children:["AI generated sheeps with over 100 unique traits! Variety of expressions and exclusive styles. Each Sheep has its own unique rarity and rank."," "]})]}),Object(l.jsxs)("div",{className:"col-md-4 px-2 background",children:[Object(l.jsx)("img",{src:h,className:"d-block mx-auto pb-3"}),Object(l.jsxs)("p",{className:"text-center  infotext",children:["By owning a Billionaire Sheep, you will be automatically eligible for exclusive giveaways, monthly raffles, whitelists & much more ."," "]})]})]}),Object(l.jsx)("p",{className:"text-center text-white pt-3",children:"By owning a Billionaire Sheep, you will be automatically eligible for exclusive giveaways, monthly raffles, whitelists & much more ."})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row py-5 mt-5  px-5  story",children:Object(l.jsxs)("div",{className:"col-md-12 ",children:[Object(l.jsx)("h1",{className:"titletext text-center py-5",children:"Creator royalty 10% "}),Object(l.jsx)("h2",{className:"titletext2",id:"about",children:"THE STORY..."}),Object(l.jsxs)("p",{className:"  titletext3",children:["They started at an old farm, As ordinary sheeps with big dreams, they always wanted to leave but the owners of the Farm would not let them get away. Until one day they decided they had enough, took over the farm, threw the owners away and started their own business. Now they\u2019re Hi-tech billionaires living on the Ethereum blockchain ."," ","Army of 10,000 Sheeps is going wild all around the world, you can find them at exclusive clubs, around yachts, and flying around in private jets. The billionaire sheeps are known for their lavish money spending life-style, Everyone envies them as they know those sheeps are badass."]})]})}),Object(l.jsxs)("div",{className:"team pt-5 px-5 container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("h1",{className:"titletext text-center pb-5",children:"Team"})})}),Object(l.jsxs)("div",{className:"row justify-content-center ",children:[Object(l.jsxs)("div",{className:"col-md-3 px-4",children:[Object(l.jsx)("img",{src:y,className:"d-block mx-auto teamimg w-100"}),Object(l.jsx)("h3",{className:"teamname pt-4",children:"Sagi Giovanni"}),Object(l.jsx)("p",{className:"text-center text-white",children:"Creative Director / Founder"})]}),Object(l.jsxs)("div",{className:"col-md-3 px-4",children:[Object(l.jsx)("img",{src:v,className:"d-block mx-auto teamimg w-100"}),Object(l.jsx)("h3",{className:"teamname pt-4",children:"Maor Azhari"}),Object(l.jsx)("p",{className:"text-center text-white",children:"Investor / Co-founder"})]})]})]}),Object(l.jsxs)("div",{className:"team pt-5 mt-5 px-5 container text-white",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("h1",{className:"titletext text-center pb-2 roadmap",id:"roadmap",children:"Billionaire Sheep Club Roadmap"}),Object(l.jsxs)("p",{className:"text-white billion text-center text-lg",children:["NFT Disturbiution",Object(l.jsx)("br",{}),"Total sheeps - 10,000 NFT",Object(l.jsx)("br",{}),"Total Cyber Sheeps - 5,000 NFT(GEN2)",Object(l.jsx)("br",{}),"Discord & Twitter Events (100 sheeps)",Object(l.jsx)("br",{}),"Presale to white-listed (900 sheeps)- 0.35 ETH",Object(l.jsx)("br",{}),"Round 1 ( 2000 SHEEPS) - 0.5 ETH",Object(l.jsx)("br",{}),"Round 2 (3000 SHEEPS) - 0.75 ETH",Object(l.jsx)("br",{}),"Round 3 (4000 SHEEPS) - 1 ETH",Object(l.jsx)("br",{}),"Special events airdrop (100 sheeps)",Object(l.jsx)("br",{}),"Discord & Twitter Events (100 sheeps)",Object(l.jsx)("br",{})]})]})}),Object(l.jsxs)("div",{class:"timeline",children:[Object(l.jsxs)("div",{class:"abc left",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"10%"}),Object(l.jsx)("i",{class:"icon fa fa-home"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{left:!0,children:Object(l.jsxs)("p",{className:" ",children:["NFT Designs",Object(l.jsx)("br",{}),"Website Design",Object(l.jsx)("br",{}),"1,000 billionaire sheeps with lavish lifestyles will be minted and introduced to the world."]})})})]}),Object(l.jsxs)("div",{class:"abc right",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"20%"}),Object(l.jsx)("i",{class:"icon fa fa-gift"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{right:!0,children:Object(l.jsxs)("p",{children:["Website Launch Social medias Launch",Object(l.jsx)("br",{}),"Community build up ",Object(l.jsx)("br",{}),"Hyper-Aggressive Marketing and hype generation",Object(l.jsx)("br",{}),"including social + influencers"]})})})]}),Object(l.jsxs)("div",{class:"abc left",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"30%"}),Object(l.jsx)("i",{class:"icon fa fa-user"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{left:!0,children:Object(l.jsx)("p",{children:"Round 2 of Presale- (2000 Sheeps) "})})})]}),Object(l.jsxs)("div",{class:"abc right",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"40%"}),Object(l.jsx)("i",{class:"icon fa fa-running"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{right:!0,children:Object(l.jsx)("p",{children:"Public Sale - 3,000 sheeps "})})})]}),Object(l.jsxs)("div",{class:"abc left",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"50%"}),Object(l.jsx)("i",{class:"icon fa fa-cog"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{left:!0,children:Object(l.jsx)("p",{children:"Open public sale round 2 - (5,000 sheeps) "})})})]}),Object(l.jsxs)("div",{class:"abc right",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"60%"}),Object(l.jsx)("i",{class:"icon fa fa-certificate"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{right:!0,children:Object(l.jsxs)("p",{children:["20% off all profits goes into Staking and generates rewards",Object(l.jsx)("br",{})," for lucky HOLDERS",Object(l.jsx)("br",{}),"Sheep Breeding System trailers"]})})})]}),Object(l.jsxs)("div",{class:"abc left",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"70%"}),Object(l.jsx)("i",{class:"icon fa fa-cog"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{left:!0,children:Object(l.jsxs)("p",{children:["Purchasing land in metaverse to create the \u201cBillionaire sheep club\u201d",Object(l.jsx)("br",{})," which is a club for invited community members only, certain",Object(l.jsx)("br",{})," holders will be able to enter unique events."," "]})})})]}),Object(l.jsxs)("div",{class:"abc right",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"80%"}),Object(l.jsx)("i",{class:"icon fa fa-certificate"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{right:!0,children:Object(l.jsxs)("p",{children:["Sheep Breeding System LAUNCH",Object(l.jsx)("br",{}),"CyberSheeps NFT design reveal"]})})})]}),Object(l.jsxs)("div",{class:"abc left",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"90%"}),Object(l.jsx)("i",{class:"icon fa fa-cog"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{left:!0,children:Object(l.jsxs)("p",{children:["CyberSheep Launch,",Object(l.jsx)("br",{}),"5,000 NFT\u2019s of new 3D Cyber Sheeps will be minted to the world."]})})})]}),Object(l.jsxs)("div",{class:"abc right",children:[Object(l.jsx)("div",{class:"date titletext text-center",children:"100%"}),Object(l.jsx)("i",{class:"icon fa fa-certificate"}),Object(l.jsx)("div",{class:"content",children:Object(l.jsx)(g.a,{right:!0,children:Object(l.jsx)("p",{children:"Multi-Chain Collections."})})})]})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("h1",{className:"supplytext pt-5 pb-2 text-center",children:"Check us out on"}),Object(l.jsx)("a",{href:"https://opensea.io/BillionaireSheepClub",children:Object(l.jsx)("img",{className:"oslogo pt-3",src:O})}),Object(l.jsxs)("span",{className:"socials oslogo pt-3 ",children:[Object(l.jsx)("a",{href:"https://discord.gg/kzyctCBTC8",children:Object(l.jsx)("img",{className:"socialicon ",src:o})}),Object(l.jsx)("a",{href:"https://twitter.com/BillionaireShe1",children:Object(l.jsx)("img",{className:"socialicon",src:b})}),Object(l.jsx)("a",{href:"https://www.facebook.com/Billionaire-Sheep-Club-104094652177728",children:Object(l.jsx)("img",{className:"socialicon",src:d})}),Object(l.jsx)("a",{href:"https://www.instagram.com/billionairesheepclub/",children:Object(l.jsx)("img",{className:"socialicon",src:p})})]})]})})]}),Object(l.jsx)("hr",{className:"mt-4 mb-2"}),Object(l.jsx)("small",{className:"text-white text-center d-block pb-2",children:"\xa9 2022"})]})},T=n(10);var A=function(){return Object(l.jsxs)(T.c,{children:[Object(l.jsx)(T.a,{path:"/",element:Object(l.jsx)(w,{})}),Object(l.jsx)(T.a,{path:"/breeding",element:Object(l.jsx)(j,{})})]})},N=n(115);n(508);a.a.render(Object(l.jsx)(N.a,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[510,1,2]]]);
//# sourceMappingURL=main.3c69d4c2.chunk.js.map