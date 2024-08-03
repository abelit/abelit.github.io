import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as l,a as e,d as t,b as o,f as i}from"./app-C7nDDXNs.js";const c={},d=e("h2",{id:"停止调度节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#停止调度节点"},[e("span",null,"停止调度节点")])],-1),p=e("p",null,"将节点标记为不可调度可防止调度程序将新的 Pod 放置到该节点上，同时不会影响该节点上的现有 Pod。作为节点重启或者其他维护之前的准备步骤，这十分有用。",-1),u=e("code",null,"admin",-1),h=e("strong",null,"集群管理",-1),m=e("strong",null,"节点",-1),_=e("strong",null,"集群节点",-1),g=e("strong",null,"停止调度",-1),b=e("code",null,"kubectl cordon $NODENAME",-1),k={href:"https://kubernetes.io/docs/concepts/architecture/nodes/",target:"_blank",rel:"noopener noreferrer"},f=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"守护进程集的 Pod 可以在无法调度的节点上运行。守护进程集通常提供应在节点上运行的本地节点服务，即使正在驱逐工作负载应用程序也不受影响。")],-1),v=e("h2",{id:"删除节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#删除节点"},[e("span",null,"删除节点")])],-1),y={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/multioverview/#1-create-an-example-configuration-file",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/kubesphere/kubekey",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"sample.yaml",-1),P=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`./kk create config --from-cluster
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=i(`<li><p>请确保在该配置文件中提供主机的所有信息，然后运行以下命令以删除节点。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./kk delete <span class="token function">node</span> <span class="token operator">&lt;</span>nodeName<span class="token operator">&gt;</span> <span class="token parameter variable">-f</span> config-sample.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function T(A,z){const n=r("ExternalLinkIcon");return s(),l("div",null,[d,p,e("p",null,[t("以 "),u,t(" 身份登录控制台，访问"),h,t("页面。若要将节点标记为不可调度，从左侧菜单中选择"),m,t("下的"),_,t("，找到想要从集群中删除的节点，点击"),g,t("。或者，直接执行命令 "),b,t("。有关更多详细信息，请参见 "),e("a",k,[t("Kubernetes 节点"),o(n)]),t("。")]),f,v,e("ol",null,[e("li",null,[e("p",null,[t("若要删除节点，您需要首先准备集群的配置文件（即在"),e("a",y,[t("设置集群"),o(n)]),t("时所用的配置文件）。如果您没有该配置文件，请使用 "),e("a",x,[t("KubeKey"),o(n)]),t(" 检索集群信息（将默认创建文件 "),N,t("）。")]),P]),E])])}const V=a(c,[["render",T],["__file","remove-nodes.html.vue"]]),B=JSON.parse('{"path":"/guide/cloudnative/kubesphere/install-on-linux/cluster-operation/remove-nodes.html","title":"删除节点","lang":"zh-CN","frontmatter":{"title":"删除节点","description":"停止调度节点 将节点标记为不可调度可防止调度程序将新的 Pod 放置到该节点上，同时不会影响该节点上的现有 Pod。作为节点重启或者其他维护之前的准备步骤，这十分有用。 以 admin 身份登录控制台，访问集群管理页面。若要将节点标记为不可调度，从左侧菜单中选择节点下的集群节点，找到想要从集群中删除的节点，点击停止调度。或者，直接执行命令 kubect...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubesphere/install-on-linux/cluster-operation/remove-nodes.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"删除节点"}],["meta",{"property":"og:description","content":"停止调度节点 将节点标记为不可调度可防止调度程序将新的 Pod 放置到该节点上，同时不会影响该节点上的现有 Pod。作为节点重启或者其他维护之前的准备步骤，这十分有用。 以 admin 身份登录控制台，访问集群管理页面。若要将节点标记为不可调度，从左侧菜单中选择节点下的集群节点，找到想要从集群中删除的节点，点击停止调度。或者，直接执行命令 kubect..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"删除节点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"停止调度节点","slug":"停止调度节点","link":"#停止调度节点","children":[]},{"level":2,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"guide/cloudnative/kubesphere/install-on-linux/cluster-operation/remove-nodes.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>停止调度节点</h2>\\n<p>将节点标记为不可调度可防止调度程序将新的 Pod 放置到该节点上，同时不会影响该节点上的现有 Pod。作为节点重启或者其他维护之前的准备步骤，这十分有用。</p>\\n<p>以 <code>admin</code> 身份登录控制台，访问<strong>集群管理</strong>页面。若要将节点标记为不可调度，从左侧菜单中选择<strong>节点</strong>下的<strong>集群节点</strong>，找到想要从集群中删除的节点，点击<strong>停止调度</strong>。或者，直接执行命令 <code>kubectl cordon $NODENAME</code>。有关更多详细信息，请参见 <a href=\\"https://kubernetes.io/docs/concepts/architecture/nodes/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kubernetes 节点</a>。</p>"}');export{V as comp,B as data};
