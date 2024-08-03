import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,b as d,w as a,f as i,d as s,a as n}from"./app-C7nDDXNs.js";const u={},v=i('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><code>crictl</code> 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 <code>cri-tools</code> 代码库。</p><h2 id="安装-crictl" tabindex="-1"><a class="header-anchor" href="#安装-crictl"><span>安装 crictl</span></a></h2><p>下载：https://github.com/kubernetes-sigs/cri-tools/releases</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p><p>crictl 默认连接到 unix:///var/run/dockershim.sock。 对于其他的运行时，你可以用多种不同的方法设置端点：</p><ul><li>通过设置参数 --runtime-endpoint 和 --image-endpoint</li><li>通过设置环境变量 CONTAINER_RUNTIME_ENDPOINT 和 IMAGE_SERVICE_ENDPOINT</li><li>通过在配置文件中设置端点 --config=/etc/crictl.yaml</li><li>你还可以在连接到服务器并启用或禁用调试时指定超时值，方法是在配置文件中指定 timeout 或 debug 值，或者使用 --timeout 和 --debug 命令行参数。</li></ul><p>要查看或编辑当前配置，请查看或编辑 /etc/crictl.yaml 的内容。</p>',9),b=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml","data-title":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[s(`cat /etc/crictl.yaml
`),n("span",{class:"token key atrule"},"runtime-endpoint"),n("span",{class:"token punctuation"},":"),s(" unix"),n("span",{class:"token punctuation"},":"),s(`///var/run/dockershim.sock
`),n("span",{class:"token key atrule"},"image-endpoint"),n("span",{class:"token punctuation"},":"),s(" unix"),n("span",{class:"token punctuation"},":"),s(`///var/run/dockershim.sock
`),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token key atrule"},"debug"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml","data-title":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[s(`touch /etc/crictl.yaml 
cat `),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">"),s(` /etc/crictl.yaml <<'EOF'
`),n("span",{class:"token key atrule"},"runtime-endpoint"),n("span",{class:"token punctuation"},":"),s(" unix"),n("span",{class:"token punctuation"},":"),s(`///run/containerd/containerd.sock
`),n("span",{class:"token key atrule"},"image-endpoint"),n("span",{class:"token punctuation"},":"),s(" unix"),n("span",{class:"token punctuation"},":"),s(`///run/containerd/containerd.sock
`),n("span",{class:"token key atrule"},"timeout"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token key atrule"},"debug"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
EOF
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=i(`<p>通过命令配置runtime-endpoint</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl config runtime-endpoint unix:///var/run/containerd/containerd.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><p>如果使用 crictl 在正在运行的 Kubernetes 集群上创建 Pod 沙盒或容器， kubelet 最终将删除它们。 crictl 不是一个通用的工作流工具，而是一个对调试有用的工具。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ crictl pods
POD ID              CREATED              STATE               NAME                         NAMESPACE           ATTEMPT
926f1b5a1d33a       About a minute ago   Ready               sh-84d7dcf559-4r2gq          default             <span class="token number">0</span>
4dccb216c4adb       About a minute ago   Ready               nginx-65899c769f-wv2gp       default             <span class="token number">0</span>
a86316e96fa89       <span class="token number">17</span> hours ago         Ready               kube-proxy-gblk4             kube-system         <span class="token number">0</span>
919630b8f81f1       <span class="token number">17</span> hours ago         Ready               nvidia-device-plugin-zgbbv   kube-system  

<span class="token comment">#打印某个固定pod</span>
$ crictl pods <span class="token parameter variable">--name</span> nginx-65899c769f-wv2gp
POD ID              CREATED             STATE               NAME                     NAMESPACE           ATTEMPT
4dccb216c4adb       <span class="token number">2</span> minutes ago       Ready               nginx-65899c769f-wv2gp   default             <span class="token number">0</span>


<span class="token comment">#根据标签筛选pod</span>
$ crictl pods <span class="token parameter variable">--label</span> <span class="token assign-left variable">run</span><span class="token operator">=</span>nginx
POD ID              CREATED             STATE               NAME                     NAMESPACE           ATTEMPT
4dccb216c4adb       <span class="token number">2</span> minutes ago       Ready               nginx-65899c769f-wv2gp   default             <span class="token number">0</span>



<span class="token comment">#打印镜像</span>
$ crictl images
IMAGE                                     TAG                 IMAGE ID            SIZE
busybox                                   latest              8c811b4aec35f       <span class="token number">1</span>.15MB
k8s-gcrio.azureedge.net/hyperkube-amd64   v1.10.3             e179bbfe5d238       665MB
k8s-gcrio.azureedge.net/pause-amd64       <span class="token number">3.1</span>                 da86e6ba6ca19       742kB
nginx                                     latest              cd5239a0906a6       109MB



<span class="token comment">#打印某个镜像</span>
$ crictl images nginx
IMAGE               TAG                 IMAGE ID            SIZE
nginx               latest              cd5239a0906a6       109MB



<span class="token comment">#只打印镜像 ID：</span>
$ crictl images <span class="token parameter variable">-q</span>
sha256:8c811b4aec35f259572d0f79207bc0678df4c736eeec50bc9fec37ed936a472a
sha256:e179bbfe5d238de6069f3b03fccbecc3fb4f2019af741bfff1233c4d7b2970c5
sha256:da86e6ba6ca197bf6bc5e9d900febd906b133eaa4750e6bed647b0fbe50ed43e
sha256:cd5239a0906a6ccf0562354852fae04bc5b52d72a2aff9a871ddb6bd57553569


<span class="token comment">#打印容器清单</span>
$ crictl <span class="token function">ps</span> <span class="token parameter variable">-a</span>
CONTAINER ID        IMAGE                                                                                                             CREATED             STATE               NAME                       ATTEMPT
1f73f2d81bf98       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">7</span> minutes ago       Running             <span class="token function">sh</span>                         <span class="token number">1</span>
9c5951df22c78       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">8</span> minutes ago       Exited              <span class="token function">sh</span>                         <span class="token number">0</span>
87d3992f84f74       nginx@sha256:d0a8828cccb73397acb0073bf34f4d7d8aa315263f1e7806bf8c55d8ac139d5f                                     <span class="token number">8</span> minutes ago       Running             nginx                      <span class="token number">0</span>
1941fb4da154f       k8s-gcrio.azureedge.net/hyperkube-amd64@sha256:00d814b1f7763f4ab5be80c58e98140dfc69df107f2



<span class="token comment">#打印正在运行的容器清单：</span>
$ crictl <span class="token function">ps</span>
CONTAINER ID        IMAGE                                                                                                             CREATED             STATE               NAME                       ATTEMPT
1f73f2d81bf98       busybox@sha256:141c253bc4c3fd0a201d32dc1f493bcf3fff003b6df416dea4f41046e0f37d47                                   <span class="token number">6</span> minutes ago       Running             <span class="token function">sh</span>                         <span class="token number">1</span>
87d3992f84f74       nginx@sha256:d0a8828cccb73397acb0073bf34f4d7d8aa315263f1e7806bf8c55d8ac139d5f                                     <span class="token number">7</span> minutes ago       Running             nginx                      <span class="token number">0</span>
1941fb4da154f       k8s-gcrio.azureedge.net/hyperkube-amd64@sha256:00d814b1f7763f4ab5be80c58e98140dfc69df107f2


<span class="token comment">#容器上执行命令</span>
$ crictl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> 1f73f2d81bf98 <span class="token function">ls</span>
bin   dev   etc   home  proc  root  sys   tmp   usr   var



<span class="token comment">#获取容器的所有日志：</span>
$ crictl logs 87d3992f84f74
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:49 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:50 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:51 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>



<span class="token comment">#获取最近的 N 行日志：</span>
crictl logs <span class="token parameter variable">--tail</span><span class="token operator">=</span><span class="token number">1</span> 87d3992f84f74
<span class="token number">10.240</span>.0.96 - - <span class="token punctuation">[</span>06/Jun/2018:02:45:51 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.47.0&quot;</span> <span class="token string">&quot;-&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行-pod-沙盒" tabindex="-1"><a class="header-anchor" href="#运行-pod-沙盒"><span>运行 Pod 沙盒</span></a></h3><p>用 crictl 运行 Pod 沙盒对容器运行时排错很有帮助。 在运行的 Kubernetes 集群中，沙盒会随机地被 kubelet 停止和删除。</p><p>编写下面的 JSON 文件：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nginx-sandbox&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attempt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdishd83djaidwnduwk28bcsb&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;logDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 crictl runp 命令应用 JSON 文件并运行沙盒。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl runp pod-config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器"><span>创建容器</span></a></h3><p>用 crictl 创建容器对容器运行时排错很有帮助。 在运行的 Kubernetes 集群中，沙盒会随机的被 kubelet 停止和删除。</p><p>拉取 busybox 镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl pull busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 Pod 和容器的配置：</p><p>Pod 配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nginx-sandbox&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attempt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdishd83djaidwnduwk28bcsb&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;log_directory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;busybox&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;busybox&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;top&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log_path&quot;</span><span class="token operator">:</span><span class="token string">&quot;busybox.log&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建容器，传递先前创建的 Pod 的 ID、容器配置文件和 Pod 配置文件。返回容器的 ID。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl create f84dd361f8dc51518ed291fbadd6db537b0496536c1d2d6c05ff943ce8c9a54f contai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询所有容器并确认新创建的容器状态为 Created。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器 要启动容器，要将容器 ID 传给 crictl start：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl start 3e025dd50a72d956c4f14881fbb5b1080c9275674e95fb67f965f6478a957d60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确认容器的状态为 Running。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="containerd镜像加速" tabindex="-1"><a class="header-anchor" href="#containerd镜像加速"><span>containerd镜像加速</span></a></h2><h3 id="containerd镜像加速脚本containerd-mirrors-sh" tabindex="-1"><a class="header-anchor" href="#containerd镜像加速脚本containerd-mirrors-sh"><span>containerd镜像加速脚本<code>containerd_mirrors.sh</code></span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment"># author: liy</span>
<span class="token comment"># file: containerd_mirrors.sh</span>
<span class="token comment">#</span>
 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS4</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\e[35m\\]+ $(basename $0):\${FUNCNAME}:$LINENO: \\[\\e[0m\\]&#39;</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$debug</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;true&quot;</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$debug</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;yes&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>
 
<span class="token assign-left variable">config_file</span><span class="token operator">=</span><span class="token string">&quot;/etc/containerd/config.toml&quot;</span>
<span class="token assign-left variable">config_path</span><span class="token operator">=</span><span class="token string">&#39;/etc/containerd/certs.d&#39;</span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">\${config_file}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${config_file<span class="token operator">%</span><span class="token operator">/</span>*}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${config_file<span class="token operator">%</span><span class="token operator">/</span>*}</span>
    <span class="token assign-left variable">lineno</span><span class="token operator">=</span><span class="token string">&quot;$(containerd config default | grep -n -A 1 -P &#39;(?&lt;=\\[plugins.&quot;)io.containerd.grpc.v1.cri(?=&quot;</span>.registry<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token string">&#39;|tail -1)&quot;
    lineno=\${lineno/-*}
    containerd config default | sed -e &quot;\${lineno}s@config.*@config_path = \\&quot;\${config_path}\\&quot;@&quot; |sed &#39;</span>/SystemdCgroup/s/false/true/<span class="token string">&#39; &gt; $config_file
fi
 
[ ! -d &quot;\${config_path}&quot; ] &amp;&amp; mkdir -p \${config_path}
params=&quot;\${@:-registry.k8s.io:k8s.m.daocloud.io docker.io:docker.m.daocloud.io gcr.io:gcr.m.daocloud.io k8s.gcr.io:k8s.m.daocloud.io quay.io:quay.m.daocloud.io}&quot;
 
function content(){
    printf &#39;</span>server <span class="token operator">=</span> <span class="token string">&quot;https://%s&quot;</span><span class="token punctuation">\\</span>n<span class="token string">&#39;  &quot;\${registry}&quot;
    printf &#39;</span><span class="token punctuation">[</span>host.<span class="token string">&quot;https://%s&quot;</span><span class="token punctuation">]</span><span class="token punctuation">\\</span>n<span class="token string">&#39; &quot;\${proxy_server}&quot;
    printf &#39;</span>  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;pull&quot;</span>, <span class="token string">&quot;resolve&quot;</span><span class="token punctuation">]</span>&#39;
<span class="token punctuation">}</span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token variable">\${params}</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">registry</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${param<span class="token operator">/</span><span class="token operator">:</span>*<span class="token operator">/</span>}</span>&quot;</span>
    <span class="token assign-left variable">proxy_server</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${param<span class="token operator">/</span>*<span class="token operator">:</span><span class="token operator">/</span>}</span>&quot;</span>
    <span class="token assign-left variable">hosts_path</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$config_path</span>/<span class="token variable">$registry</span>&quot;</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$hosts_path</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${hosts_path}</span>
    content <span class="token operator">&gt;</span> <span class="token variable">$hosts_path</span>/hosts.toml
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###　配置<code>containerd</code>加速</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 默认加速 registry.k8s.io, docker.io, gcr.io, k8s.gcr.io</span>
<span class="token function">cp</span> /etc/containerd/config.toml /etc/containerd/config.toml.<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>
<span class="token assign-left variable">debug</span><span class="token operator">=</span>true <span class="token function">bash</span> containerd_mirrors.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="crictl通过daocloud加速" tabindex="-1"><a class="header-anchor" href="#crictl通过daocloud加速"><span>crictl通过daocloud加速</span></a></h3><ul><li>拉取calico镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl describe pods <span class="token parameter variable">-n</span> calico-system <span class="token operator">|</span> <span class="token function">grep</span> Image: <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span><span class="token function">uniq</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span>kubectl describe pods <span class="token parameter variable">-n</span> calico-system <span class="token operator">|</span> <span class="token function">grep</span> Image: <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span><span class="token function">uniq</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;crictl pull m.daocloud.io/<span class="token variable">$item</span>&quot;</span><span class="token punctuation">;</span><span class="token keyword">done</span>

crictl pull m.daocloud.io/docker.io/calico/cni:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/csi:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/kube-controllers:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/node-driver-registrar:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/node:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/pod2daemon-flexvol:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/typha:v3.25.0
crictl pull m.daocloud.io/docker.io/calico/apiserver:v3.25.0


crictl pull docker.io/calico/cni:v3.25.0
crictl pull docker.io/calico/csi:v3.25.0
crictl pull docker.io/calico/kube-controllers:v3.25.0
crictl pull docker.io/calico/node-driver-registrar:v3.25.0
crictl pull docker.io/calico/node:v3.25.0
crictl pull docker.io/calico/pod2daemon-flexvol:v3.25.0
crictl pull docker.io/calico/typha:v3.25.0
crictl pull docker.io/calico/apiserver:v3.25.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function g(h,f){const l=o("CodeTabs");return p(),r("div",null,[v,d(l,{id:"46",data:[{id:"dockershim"},{id:"containerd"}],active:0},{title0:a(({value:e,isActive:t})=>[s("dockershim")]),title1:a(({value:e,isActive:t})=>[s("containerd")]),tab0:a(({value:e,isActive:t})=>[b]),tab1:a(({value:e,isActive:t})=>[m]),_:1}),k])}const x=c(u,[["render",g],["__file","crictl.html.vue"]]),T=JSON.parse('{"path":"/guide/cloudnative/kubernetes/crictl.html","title":"crictl管理工具","lang":"zh-CN","frontmatter":{"title":"crictl管理工具","description":"介绍 crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。 安装 crictl 下载：https://github.com/kubernetes-sigs/cri-tools/releases 配置 crictl...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/crictl.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"crictl管理工具"}],["meta",{"property":"og:description","content":"介绍 crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。 安装 crictl 下载：https://github.com/kubernetes-sigs/cri-tools/releases 配置 crictl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"crictl管理工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装 crictl","slug":"安装-crictl","link":"#安装-crictl","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[{"level":3,"title":"运行 Pod 沙盒","slug":"运行-pod-沙盒","link":"#运行-pod-沙盒","children":[]},{"level":3,"title":"创建容器","slug":"创建容器","link":"#创建容器","children":[]}]},{"level":2,"title":"containerd镜像加速","slug":"containerd镜像加速","link":"#containerd镜像加速","children":[{"level":3,"title":"containerd镜像加速脚本containerd_mirrors.sh","slug":"containerd镜像加速脚本containerd-mirrors-sh","link":"#containerd镜像加速脚本containerd-mirrors-sh","children":[]},{"level":3,"title":"crictl通过daocloud加速","slug":"crictl通过daocloud加速","link":"#crictl通过daocloud加速","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":4.31,"words":1292},"filePathRelative":"guide/cloudnative/kubernetes/crictl.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p><code>crictl</code> 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 <code>cri-tools</code> 代码库。</p>\\n<h2>安装 crictl</h2>\\n<p>下载：https://github.com/kubernetes-sigs/cri-tools/releases</p>\\n<h2>配置</h2>\\n<p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p>"}');export{x as comp,T as data};
