{
    var component = {
        name: 'button',
        version: [ 1, 0, 0 ],
        ccm: {
            url: 'https://ccmjs.github.io/ccm/versions/ccm-16.6.1.js',
            integrity: 'sha384-zCsUcQEg4NqpF91vJatXIU7aDUcYENcTCchNCwisDiA1ZzTR+ShsqJtmYIHG120k',
            crossorigin: 'anonymous'
        },
        Instance: function () {
            this.start = callback => {
                let btn = document.createElement("button");
                btn.addEventListener("click",() => {
                    let textNode = document.createTextNode(String.fromCharCode(9733));
                    this.element.appendChild(textNode);
                });

                let textNode = document.createTextNode("Click me");
                btn.appendChild(textNode);
                this.element.appendChild(btn);

                callback && callback();
            }
        }
    };
    function p(){window.ccm[v].component(component)}const f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{const n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{const e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
}