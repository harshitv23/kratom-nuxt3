export default ({ app }) => {
    if (!process.client) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-88635737-1';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "UA-88635737-1",{ "cookie_domain":"auto"});

    const script2 = document.createElement('script');
    script2.src = 'https://cdn01.basis.net/assets/up.js?um=1';
    script2.async = true;
    
    /* const script3 = document.createElement('script');
    script3.src = 'https://aggle.net/js?publisher=herb.co&pid=K8HMCIDM';
    script3.async = true;
    document.head.appendChild(script3); */

    /* const script4 = document.createElement('script');
    script4.src = 'https://tags.cnna.io/?segmentId=REdC8qDMbPnk8ERtU5o5tg&appId=3e4a12dc-2ba1-4061-88e3-95d397eb2cbf&environment=yotpo';
    document.head.appendChild(script4); */

    script2.onload = function() {  
      cntrUpTag.track("cntrData", "1002bc32bada5173");  
    };

    document.head.appendChild(script2);

    //OMNISEND-SNIPPET-SOURCE-CODE-V1
    window.omnisend = window.omnisend || [];
					omnisend.push(["accountID", "636a9f5fe67810becfd76425"]);
					//omnisend.push(["track", "$pageViewed"]);
					!function () {
						var e = document.createElement("script");
						e.type = "text/javascript", e.async = !0, e.src = "https://omnisnippet1.com/inshop/launcher-v2.js";
						var t = document.getElementsByTagName("script")[0];
						t.parentNode.insertBefore(e, t)
					}();
    
    /* window.omnisend = window.omnisend || [];
    omnisend.push(["accountID", "636a9f5fe67810becfd76425"]);
    omnisend.push(["track", "$pageViewed"]);
    console.log(omnisend);
    !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(); */

    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "gs7b5g7gzr");

}