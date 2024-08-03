import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as d,b as t,w as s,a as e,f as r,d as n}from"./app-C7nDDXNs.js";const m={},b=e("h2",{id:"部署nginx和tomcat应用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署nginx和tomcat应用"},[e("span",null,"部署Nginx和Tomcat应用")])],-1),v=e("h3",{id:"创建namespace-deployment-service",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建namespace-deployment-service"},[e("span",null,"创建Namespace,Deployment,Service")])],-1),u=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-nginx.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: v1
kind: Namespace
metadata:
  labels:
    app.kubernetes.io/instance: abelitdev
    app.kubernetes.io/name: abelitdev
  name: abelitdev
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: abelitdev-nginx-deploy
  namespace: abelitdev
spec:
  replicas: 3
  selector:
    matchLabels:
      app: abelitdev-nginx-pod
  template:
    metadata:
      labels:
        app: abelitdev-nginx-pod
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: abelitdev-nginx-service
  namespace: abelitdev
spec:
  selector:
    app: abelitdev-nginx-pod
  type: ClusterIP
  ports:
  - name: http
    port: 80
    targetPort: 80
    protocol: TCP
EOF`),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-tomcat.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: v1
kind: Namespace
metadata:
  labels:
    app.kubernetes.io/instance: abelitdev
    app.kubernetes.io/name: abelitdev
  name: abelitdev
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: abelitdev-tomcat-deploy
  namespace: abelitdev
spec:
  replicas: 3
  selector:
    matchLabels:
      app: abelitdev-tomcat-pod
  template:
    metadata:
      labels:
        app: abelitdev-tomcat-pod
    spec:
      containers:
      - name: tomcat
        image: tomcat:latest
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: abelitdev-tomcat-service
  namespace: abelitdev
spec:
  selector:
    app: abelitdev-tomcat-pod
  type: ClusterIP
  ports:
  - name: http
    port: 8080
    targetPort: 8080
    protocol: TCP
EOF`),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("h2",{id:"配置服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置服务"},[e("span",null,"配置服务")])],-1),h=e("h3",{id:"nodeport",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nodeport"},[e("span",null,"NodePort")])],-1),x=e("ul",null,[e("li",null,"命令行方式创建Delployment")],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n(`kubectl create namespace abelitdev
kubectl create deployment nginx `),e("span",{class:"token parameter variable"},"--image"),e("span",{class:"token operator"},"="),n("nginx:latest "),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev
kubectl expose deployment nginx `),e("span",{class:"token parameter variable"},"--port"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"80"),n(),e("span",{class:"token parameter variable"},"--type"),e("span",{class:"token operator"},"="),n("NodePort "),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev

kubectl get pods,service `),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n(`kubectl create namespace abelitdev
kubectl create deployment tomcat `),e("span",{class:"token parameter variable"},"--image"),e("span",{class:"token operator"},"="),n("tomcat:latest "),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev
kubectl expose deployment tomcat `),e("span",{class:"token parameter variable"},"--port"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"8080"),n(),e("span",{class:"token parameter variable"},"--type"),e("span",{class:"token operator"},"="),n("NodePort "),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev

kubectl get pods,service `),e("span",{class:"token parameter variable"},"-n"),n(` abelitdev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=r(`<h3 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress"><span>Ingress</span></a></h3><ul><li>配置TLS</li></ul><p>如果使用https协议，需配置TLS证书，这里配置自签名的证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成自定义签名证书和私钥</span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.com&quot;</span>
<span class="token assign-left variable">KEY_FILE</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.key&quot;</span>
<span class="token assign-left variable">CERT_FILE</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.crt&quot;</span>
<span class="token assign-left variable">CERT_NAME</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s-tls&quot;</span>
<span class="token assign-left variable">NAMESPACE</span><span class="token operator">=</span><span class="token string">&quot;abelitdev&quot;</span>
openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-keyout</span> <span class="token variable">\${KEY_FILE}</span> <span class="token parameter variable">-out</span> <span class="token variable">\${CERT_FILE}</span> <span class="token parameter variable">-subj</span> <span class="token string">&quot;/CN=<span class="token variable">\${HOST}</span>/O=<span class="token variable">\${HOST}</span>&quot;</span>

<span class="token comment"># 创建Kubernetes集群秘钥</span>
kubectl create secret tls <span class="token variable">\${CERT_NAME}</span> <span class="token parameter variable">--key</span> <span class="token variable">\${KEY_FILE}</span> <span class="token parameter variable">--cert</span> <span class="token variable">\${CERT_FILE}</span> <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span>

<span class="token comment"># 查看Kubernetes集群秘钥</span>
kubectl get secret <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置Nginx和Tomcat的Ingress资源</li></ul>`,5),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-http-ingress.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: abelitdev-http-ingress
  namespace: abelitdev
  annotations:
    kubernetes.io/ingress.class: "nginx"
spec:
  rules:
    - host: tomcat.abelitk8s.com
      http:
        paths:
          - path: "/"
            pathType: Prefix
            backend:
              service:
                name: abelitdev-tomcat-service
                port:
                  number: 8080
    - host: nginx.abelitk8s.com
      http:
        paths:
          - path: "/"
            pathType: Prefix
            backend:
              service:
                name: abelitdev-nginx-service
                port:
                  number: 80
EOF`),n(`

kubectl apply `),e("span",{class:"token parameter variable"},"-f"),n(` abelitdev-http-ingress.yaml
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-https-ingress.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: abelitdev-https-ingress
  namespace: abelitdev
  annotations:
    #nginx.ingress.kubernetes.io/ssl-redirect: "false"
    #nginx.ingress.kubernetes.io/backend-protocol: https
    kubernetes.io/ingress.class: nginx
spec:
  tls:
    - hosts:
        - tomcat.abelitk8s.com
        - nginx.abelitk8s.com
      secretName: abelitk8s-tls
  rules:
    - host: tomcat.abelitk8s.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: abelitdev-tomcat-service
                port:
                  number: 8080
    - host: nginx.abelitk8s.com
      http:
        paths:
          - path: / 
            pathType: Prefix
            backend:
              service:
                name: abelitdev-nginx-service
                port:
                  number: 80
EOF`),n(`

kubectl apply `),e("span",{class:"token parameter variable"},"-f"),n(` abelitdev-https-ingress.yaml
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=r(`<div class="hint-container warning"><p class="hint-container-title">温馨提示：</p><p>集群需要提前配置Ingress Controller，本文主要介绍Ingress Nginx方式。</p></div><ul><li>配置访问</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;10.10.12.212 nginx.abelitk8s.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
<span class="token builtin class-name">echo</span> <span class="token string">&quot;10.10.12.212 tomcat.abelitk8s.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function A(C,S){const i=o("CodeTabs");return p(),d("div",null,[b,v,t(i,{id:"6",data:[{id:"Nginx"},{id:"Tomcat"}],active:0},{title0:s(({value:a,isActive:l})=>[n("Nginx")]),title1:s(({value:a,isActive:l})=>[n("Tomcat")]),tab0:s(({value:a,isActive:l})=>[u]),tab1:s(({value:a,isActive:l})=>[k]),_:1}),g,h,x,t(i,{id:"27",data:[{id:"nginx"},{id:"tomcat"}],active:0},{title0:s(({value:a,isActive:l})=>[n("nginx")]),title1:s(({value:a,isActive:l})=>[n("tomcat")]),tab0:s(({value:a,isActive:l})=>[_]),tab1:s(({value:a,isActive:l})=>[y]),_:1}),E,t(i,{id:"56",data:[{id:"http"},{id:"https"}],active:0},{title0:s(({value:a,isActive:l})=>[n("http")]),title1:s(({value:a,isActive:l})=>[n("https")]),tab0:s(({value:a,isActive:l})=>[T]),tab1:s(({value:a,isActive:l})=>[N]),_:1}),f])}const L=c(m,[["render",A],["__file","demo.html.vue"]]),F=JSON.parse('{"path":"/guide/cloudnative/kubernetes/demo.html","title":"部署应用示例","lang":"zh-CN","frontmatter":{"title":"部署应用示例","description":"部署Nginx和Tomcat应用 创建Namespace,Deployment,Service 配置服务 NodePort 命令行方式创建Delployment Ingress 配置TLS 如果使用https协议，需配置TLS证书，这里配置自签名的证书。 配置Nginx和Tomcat的Ingress资源 温馨提示： 集群需要提前配置Ingress Co...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/demo.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"部署应用示例"}],["meta",{"property":"og:description","content":"部署Nginx和Tomcat应用 创建Namespace,Deployment,Service 配置服务 NodePort 命令行方式创建Delployment Ingress 配置TLS 如果使用https协议，需配置TLS证书，这里配置自签名的证书。 配置Nginx和Tomcat的Ingress资源 温馨提示： 集群需要提前配置Ingress Co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署应用示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"部署Nginx和Tomcat应用","slug":"部署nginx和tomcat应用","link":"#部署nginx和tomcat应用","children":[{"level":3,"title":"创建Namespace,Deployment,Service","slug":"创建namespace-deployment-service","link":"#创建namespace-deployment-service","children":[]}]},{"level":2,"title":"配置服务","slug":"配置服务","link":"#配置服务","children":[{"level":3,"title":"NodePort","slug":"nodeport","link":"#nodeport","children":[]},{"level":3,"title":"Ingress","slug":"ingress","link":"#ingress","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.88,"words":564},"filePathRelative":"guide/cloudnative/kubernetes/demo.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>部署Nginx和Tomcat应用</h2>\\n<h3>创建Namespace,Deployment,Service</h3>\\n\\n<h2>配置服务</h2>\\n<h3>NodePort</h3>\\n<ul>\\n<li>命令行方式创建Delployment</li>\\n</ul>\\n\\n<h3>Ingress</h3>\\n<ul>\\n<li>配置TLS</li>\\n</ul>\\n<p>如果使用https协议，需配置TLS证书，这里配置自签名的证书。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 生成自定义签名证书和私钥</span>\\n<span class=\\"token assign-left variable\\">HOST</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"abelitk8s.com\\"</span>\\n<span class=\\"token assign-left variable\\">KEY_FILE</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"abelitk8s.key\\"</span>\\n<span class=\\"token assign-left variable\\">CERT_FILE</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"abelitk8s.crt\\"</span>\\n<span class=\\"token assign-left variable\\">CERT_NAME</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"abelitk8s-tls\\"</span>\\n<span class=\\"token assign-left variable\\">NAMESPACE</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"abelitdev\\"</span>\\nopenssl req <span class=\\"token parameter variable\\">-x509</span> <span class=\\"token parameter variable\\">-nodes</span> <span class=\\"token parameter variable\\">-days</span> <span class=\\"token number\\">365</span> <span class=\\"token parameter variable\\">-newkey</span> rsa:2048 <span class=\\"token parameter variable\\">-keyout</span> <span class=\\"token variable\\">${KEY_FILE}</span> <span class=\\"token parameter variable\\">-out</span> <span class=\\"token variable\\">${CERT_FILE}</span> <span class=\\"token parameter variable\\">-subj</span> <span class=\\"token string\\">\\"/CN=<span class=\\"token variable\\">${HOST}</span>/O=<span class=\\"token variable\\">${HOST}</span>\\"</span>\\n\\n<span class=\\"token comment\\"># 创建Kubernetes集群秘钥</span>\\nkubectl create secret tls <span class=\\"token variable\\">${CERT_NAME}</span> <span class=\\"token parameter variable\\">--key</span> <span class=\\"token variable\\">${KEY_FILE}</span> <span class=\\"token parameter variable\\">--cert</span> <span class=\\"token variable\\">${CERT_FILE}</span> <span class=\\"token parameter variable\\">-n</span> <span class=\\"token variable\\">${NAMESPACE}</span>\\n\\n<span class=\\"token comment\\"># 查看Kubernetes集群秘钥</span>\\nkubectl get secret <span class=\\"token parameter variable\\">-n</span> <span class=\\"token variable\\">${NAMESPACE}</span>\\n\\n</code></pre></div>"}');export{L as comp,F as data};
