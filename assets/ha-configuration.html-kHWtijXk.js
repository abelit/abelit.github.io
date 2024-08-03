import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as u,c as d,a as n,d as e,b as s,w as l,f as t}from"./app-C7nDDXNs.js";const k="/assets/ha-architecture-CSVVCT99.png",h={},b={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/multioverview/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.haproxy.com/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"本教程演示了在 Linux 上安装 KubeSphere 时，高可用集群的大体配置。",-1),g=n("h2",{id:"架构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#架构"},[n("span",null,"架构")])],-1),y={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/multioverview/#%E6%AD%A5%E9%AA%A41%E5%87%86%E5%A4%87-linux-%E4%B8%BB%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"},_=t('<figure><img src="'+k+'" alt="高可用架构" tabindex="0" loading="lazy"><figcaption>高可用架构</figcaption></figure><h2 id="配置负载均衡器" tabindex="-1"><a class="header-anchor" href="#配置负载均衡器"><span>配置负载均衡器</span></a></h2><p>您必须在您的环境中创建一个负载均衡器来监听（在某些云平台也称作监听器）关键端口。建议监听下表中的端口。</p><table><thead><tr><th>服务</th><th>协议</th><th>端口</th></tr></thead><tbody><tr><td>apiserver</td><td>TCP</td><td>6443</td></tr><tr><td>ks-console</td><td>TCP</td><td>30880</td></tr><tr><td>http</td><td>TCP</td><td>80</td></tr><tr><td>https</td><td>TCP</td><td>443</td></tr></tbody></table>',4),f={class:"hint-container tip"},x=n("p",{class:"hint-container-title"},"提示",-1),K=n("li",null,[n("p",null,"请确保您的负载均衡器至少监听 apiserver 端口。")],-1),w={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/port-firewall/",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,[n("p",null,"在一些云平台上，您可以同时配置内置负载均衡器和外置负载均衡器。为外置负载均衡器分配公共 IP 地址后，您可以使用该 IP 地址来访问集群。")],-1),E=n("li",null,[n("p",null,"有关如何配置负载均衡器的更多信息，请参见“在公有云上安装”中对在主要公有云平台上具体操作步骤的说明。")],-1),S=t(`<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> conntrack socat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载-kubekey" tabindex="-1"><a class="header-anchor" href="#下载-kubekey"><span>下载 KubeKey</span></a></h2>`,3),T={href:"https://github.com/kubesphere/kubekey",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/kubesphere/kubekey/releases",target:"_blank",rel:"noopener noreferrer"},P=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"-sfL"),e(" https://get-kk.kubesphere.io "),n("span",{class:"token operator"},"|"),e(),n("span",{class:"token assign-left variable"},"VERSION"),n("span",{class:"token operator"},"="),e("v3.0.10 "),n("span",{class:"token function"},"sh"),e(` -
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("p",null,null,-1),N=n("p",null,"先执行以下命令以确保您从正确的区域下载 KubeKey。",-1),z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),e(),n("span",{class:"token assign-left variable"},"KKZONE"),n("span",{class:"token operator"},"="),e(`cn
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("p",null,"执行以下命令下载 KubeKey：",-1),G=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"curl"),e(),n("span",{class:"token parameter variable"},"-sfL"),e(" https://get-kk.kubesphere.io "),n("span",{class:"token operator"},"|"),e(),n("span",{class:"token assign-left variable"},"VERSION"),n("span",{class:"token operator"},"="),e("v3.0.10 "),n("span",{class:"token function"},"sh"),e(` -
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),L=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[e("在您下载 KubeKey 后，如果您将其传至新的机器，且访问 Googleapis 同样受限，在您执行以下步骤之前请务必再次执行 "),n("code",null,"export KKZONE=cn"),e(" 命令。")])],-1),V=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行以上命令会下载最新版 KubeKey，您可以修改命令中的版本号下载指定版本。</p></div><p>为 <code>kk</code> 添加可执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x kk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建包含默认配置的示例配置文件。这里使用 Kubernetes v1.26.2 作为示例。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./kk create config --with-kubesphere v3.4.0 --with-kubernetes v1.26.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),H={class:"hint-container tip"},O=n("p",{class:"hint-container-title"},"提示",-1),D={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/kubekey/#%E6%94%AF%E6%8C%81%E7%9F%A9%E9%98%B5",target:"_blank",rel:"noopener noreferrer"},Z=n("li",null,[n("p",null,[e("如果您在这一步的命令中不添加标志 "),n("code",null,"--with-kubesphere"),e("，则不会部署 KubeSphere，只能使用配置文件中的 "),n("code",null,"addons"),e(" 字段安装，或者在您后续使用 "),n("code",null,"./kk create cluster"),e(" 命令时再次添加这个标志。")])],-1),q=n("li",null,[n("p",null,[e("如果您添加标志 "),n("code",null,"--with-kubesphere"),e(" 时不指定 KubeSphere 版本，则会安装最新版本的 KubeSphere。")])],-1),F=t(`<h2 id="部署-kubesphere-和-kubernetes" tabindex="-1"><a class="header-anchor" href="#部署-kubesphere-和-kubernetes"><span>部署 KubeSphere 和 Kubernetes</span></a></h2><p>运行以上命令后，会创建一个配置文件 <code>config-sample.yaml</code>。编辑该文件以添加机器信息、配置负载均衡器和其他内容。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您自定义文件名，文件名称可能会不同。</p></div><h3 id="config-sample-yaml-示例" tabindex="-1"><a class="header-anchor" href="#config-sample-yaml-示例"><span>config-sample.yaml 示例</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> master1<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.2<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.2<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> master2<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.3<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.3<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> master3<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.4<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.4<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> node1<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.5<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.5<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> node2<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.6<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.6<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> node3<span class="token punctuation">,</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 192.168.0.7<span class="token punctuation">,</span> <span class="token key atrule">internalAddress</span><span class="token punctuation">:</span> 192.168.0.7<span class="token punctuation">,</span> <span class="token key atrule">user</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> Testing123<span class="token punctuation">}</span>
  <span class="token key atrule">roleGroups</span><span class="token punctuation">:</span>
    <span class="token key atrule">etcd</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master1
    <span class="token punctuation">-</span> master2
    <span class="token punctuation">-</span> master3
    <span class="token key atrule">control-plane</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master1
    <span class="token punctuation">-</span> master2
    <span class="token punctuation">-</span> master3
    <span class="token key atrule">worker</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node1
    <span class="token punctuation">-</span> node2
    <span class="token punctuation">-</span> node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),R={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/vars/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/multioverview/#2-%E7%BC%96%E8%BE%91%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},M=t(`<h3 id="配置负载均衡器-1" tabindex="-1"><a class="header-anchor" href="#配置负载均衡器-1"><span>配置负载均衡器</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">controlPlaneEndpoint</span><span class="token punctuation">:</span>
    <span class="token comment">##Internal loadbalancer for apiservers</span>
    <span class="token comment">#internalLoadbalancer: haproxy</span>
    
    <span class="token key atrule">domain</span><span class="token punctuation">:</span> lb.kubesphere.local
    <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.0.xx&quot;</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><code>config-sample.yaml</code> 文件中的 <code>address</code> 和 <code>port</code> 应缩进两个空格。</li><li>大多数情况下，您需要在负载均衡器的 <code>address</code> 字段中提供<strong>私有 IP 地址</strong>。但是，不同的云厂商可能对负载均衡器有不同的配置。例如，如果您在阿里云上配置服务器负载均衡器 (SLB)，平台会为 SLB 分配一个公共 IP 地址，所以您需要在 <code>address</code> 字段中指定公共 IP 地址。</li><li>负载均衡器默认的内部访问域名是 <code>lb.kubesphere.local</code>。</li><li>若要使用内置负载均衡器，请将 <code>internalLoadbalancer</code> 字段取消注释。</li></ul></div><h3 id="持久化存储插件配置" tabindex="-1"><a class="header-anchor" href="#持久化存储插件配置"><span>持久化存储插件配置</span></a></h3>`,4),J=n("code",null,"config-sample.yaml",-1),U={href:"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/persistent-storage-configurations/understand-persistent-storage/",target:"_blank",rel:"noopener noreferrer"},W=n("h3",{id:"启用可插拔组件-可选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启用可插拔组件-可选"},[n("span",null,"启用可插拔组件（可选）")])],-1),$=n("p",null,"自 v2.1.0 起，KubeSphere 解耦了一些核心功能组件。您可以在安装之前或者之后启用这些可插拔组件。如果您不启用这些组件，KubeSphere 将默认以最小化安装。",-1),Q={href:"https://kubesphere.io/zh/docs/v3.3/pluggable-components/",target:"_blank",rel:"noopener noreferrer"},X=t(`<h3 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装"><span>开始安装</span></a></h3><p>配置完成后，您可以执行以下命令来开始安装：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./kk create cluster <span class="token parameter variable">-f</span> config-sample.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装"><span>验证安装</span></a></h3><ol><li><p>运行以下命令查看安装日志。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl logs <span class="token parameter variable">-n</span> kubesphere-system <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-n</span> kubesphere-system <span class="token parameter variable">-l</span> <span class="token string">&#39;app in (ks-install, ks-installer)&#39;</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.items[0].metadata.name}&#39;</span><span class="token variable">)</span></span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>若您看到以下信息，您的高可用集群便已创建成功。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#####################################################</span>
<span class="token comment">###              Welcome to KubeSphere!           ###</span>
<span class="token comment">#####################################################</span>

Console: http://192.168.0.3:30880
Account: admin
Password: P@88w0rd

NOTES：
  <span class="token number">1</span>. After you log into the console, please check the
     monitoring status of <span class="token function">service</span> components <span class="token keyword">in</span>
     the <span class="token string">&quot;Cluster Management&quot;</span><span class="token builtin class-name">.</span> If any <span class="token function">service</span> is not
     ready, please <span class="token function">wait</span> patiently <span class="token keyword">until</span> all components
     are up and running.
  <span class="token number">2</span>. Please change the default password after login.

<span class="token comment">#####################################################</span>
https://kubesphere.io             <span class="token number">2020</span>-xx-xx xx:xx:xx
<span class="token comment">#####################################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5);function Y(nn,en){const a=p("ExternalLinkIcon"),c=p("Tabs");return u(),d("div",null,[n("p",null,[e("您可以根据教程"),n("a",b,[e("多节点安装"),s(a)]),e("来创建单主节点 Kubernetes 集群并安装 KubeSphere。大多数情况下，单主节点集群大致足以供开发和测试环境使用。但是，对于生产环境，您需要考虑集群的高可用性。如果关键组件（例如 kube-apiserver、kube-scheduler 和 kube-controller-manager）都在同一个主节点上运行，一旦主节点宕机，Kubernetes 和 KubeSphere 都将不可用。因此，您需要为多个主节点配置负载均衡器，以创建高可用集群。您可以使用任意云负载均衡器或者任意硬件负载均衡器（例如 F5）。此外，也可以使用 Keepalived 和 "),n("a",v,[e("HAproxy"),s(a)]),e("，或者 Nginx 来创建高可用集群。")]),m,g,n("p",null,[e("在您开始操作前，请确保准备了 6 台 Linux 机器，其中 3 台充当主节点，另外 3 台充当工作节点。下图展示了这些机器的详情，包括它们的私有 IP 地址和角色。有关系统和网络要求的更多信息，请参见"),n("a",y,[e("多节点安装"),s(a)]),e("。")]),_,n("div",f,[x,n("ul",null,[K,n("li",null,[n("p",null,[e("根据集群的部署位置，您可能需要在安全组中打开端口以确保外部流量不被屏蔽。有关更多信息，请参见"),n("a",w,[e("端口要求"),s(a)]),e("。")])]),A,E])]),S,n("p",null,[n("a",T,[e("Kubekey"),s(a)]),e(" 是新一代安装程序，可以简单、快速和灵活地安装 Kubernetes 和 KubeSphere。请按照以下步骤下载 KubeKey。")]),s(c,{id:"116",data:[{id:"如果您能正常访问 GitHub 和 Googleapis"},{id:"如果您访问 GitHub 和 Googleapis 受限"}],active:0},{title0:l(({value:i,isActive:o})=>[e("如果您能正常访问 GitHub 和 Googleapis")]),title1:l(({value:i,isActive:o})=>[e("如果您访问 GitHub 和 Googleapis 受限")]),tab0:l(({value:i,isActive:o})=>[n("p",null,[e("从 "),n("a",C,[e("GitHub Release Page"),s(a)]),e(" 下载 KubeKey 或直接使用以下命令。")]),P,B]),tab1:l(({value:i,isActive:o})=>[N,z,I,G,L]),_:1}),V,n("div",H,[O,n("ul",null,[n("li",null,[n("p",null,[e("安装 KubeSphere 3.4 的建议 Kubernetes 版本：v1.20.x、v1.21.x、v1.22.x、v1.23.x、* v1.24.x、* v1.25.x 和 * v1.26.x。带星号的版本可能出现边缘节点部分功能不可用的情况。因此，如需使用边缘节点，推荐安装 v1.23.x。如果不指定 Kubernetes 版本，KubeKey 将默认安装 Kubernetes v1.23.10。有关受支持的 Kubernetes 版本的更多信息，请参见"),n("a",D,[e("支持矩阵"),s(a)]),e("。")])]),Z,q])]),F,n("p",null,[e("有关该配置文件中不同字段的更多信息，请参见 "),n("a",R,[e("Kubernetes 集群配置"),s(a)]),e("和"),n("a",j,[e("多节点安装"),s(a)]),e("。")]),M,n("p",null,[e("在生产环境中，您需要准备持久化存储并在 "),J,e(" 中配置存储插件（例如 CSI），以明确您想使用哪一种存储服务。有关更多信息，请参见"),n("a",U,[e("持久化存储配置"),s(a)]),e("。")]),W,$,n("p",null,[e("您可以根据您的需求来启用任意可插拔组件。强烈建议您安装这些可插拔组件，以便体验 KubeSphere 提供的全栈特性和功能。启用前，请确保您的机器有足够的 CPU 和内存。有关详情请参见"),n("a",Q,[e("启用可插拔组件"),s(a)]),e("。")]),X])}const tn=r(h,[["render",Y],["__file","ha-configuration.html.vue"]]),ln=JSON.parse('{"path":"/guide/cloudnative/kubesphere/install-on-linux/high-availability-configurations/ha-configuration.html","title":"使用负载均衡器创建高可用集群","lang":"zh-CN","frontmatter":{"title":"使用负载均衡器创建高可用集群","description":"您可以根据教程多节点安装来创建单主节点 Kubernetes 集群并安装 KubeSphere。大多数情况下，单主节点集群大致足以供开发和测试环境使用。但是，对于生产环境，您需要考虑集群的高可用性。如果关键组件（例如 kube-apiserver、kube-scheduler 和 kube-controller-manager）都在同一个主节点上运行，...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubesphere/install-on-linux/high-availability-configurations/ha-configuration.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"使用负载均衡器创建高可用集群"}],["meta",{"property":"og:description","content":"您可以根据教程多节点安装来创建单主节点 Kubernetes 集群并安装 KubeSphere。大多数情况下，单主节点集群大致足以供开发和测试环境使用。但是，对于生产环境，您需要考虑集群的高可用性。如果关键组件（例如 kube-apiserver、kube-scheduler 和 kube-controller-manager）都在同一个主节点上运行，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用负载均衡器创建高可用集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"配置负载均衡器","slug":"配置负载均衡器","link":"#配置负载均衡器","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"下载 KubeKey","slug":"下载-kubekey","link":"#下载-kubekey","children":[]},{"level":2,"title":"部署 KubeSphere 和 Kubernetes","slug":"部署-kubesphere-和-kubernetes","link":"#部署-kubesphere-和-kubernetes","children":[{"level":3,"title":"config-sample.yaml 示例","slug":"config-sample-yaml-示例","link":"#config-sample-yaml-示例","children":[]},{"level":3,"title":"配置负载均衡器","slug":"配置负载均衡器-1","link":"#配置负载均衡器-1","children":[]},{"level":3,"title":"持久化存储插件配置","slug":"持久化存储插件配置","link":"#持久化存储插件配置","children":[]},{"level":3,"title":"启用可插拔组件（可选）","slug":"启用可插拔组件-可选","link":"#启用可插拔组件-可选","children":[]},{"level":3,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[]},{"level":3,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":6,"words":1801},"filePathRelative":"guide/cloudnative/kubesphere/install-on-linux/high-availability-configurations/ha-configuration.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<p>您可以根据教程<a href=\\"https://kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/multioverview/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">多节点安装</a>来创建单主节点 Kubernetes 集群并安装 KubeSphere。大多数情况下，单主节点集群大致足以供开发和测试环境使用。但是，对于生产环境，您需要考虑集群的高可用性。如果关键组件（例如 kube-apiserver、kube-scheduler 和 kube-controller-manager）都在同一个主节点上运行，一旦主节点宕机，Kubernetes 和 KubeSphere 都将不可用。因此，您需要为多个主节点配置负载均衡器，以创建高可用集群。您可以使用任意云负载均衡器或者任意硬件负载均衡器（例如 F5）。此外，也可以使用 Keepalived 和 <a href=\\"https://www.haproxy.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HAproxy</a>，或者 Nginx 来创建高可用集群。</p>"}');export{tn as comp,ln as data};
