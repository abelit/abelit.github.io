import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as a}from"./app-C7nDDXNs.js";const i={},l=a(`<h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h2><h3 id="kubernetes-节点信息-旧" tabindex="-1"><a class="header-anchor" href="#kubernetes-节点信息-旧"><span>Kubernetes 节点信息（旧）</span></a></h3><table><thead><tr><th>主机名称</th><th>IP 地址</th><th>用途</th><th>组件</th><th>版本</th></tr></thead><tbody><tr><td>node-010010013100</td><td>10.10.13.100</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013103</td><td>10.10.13.103</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013104</td><td>10.10.13.104</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013105</td><td>10.10.13.105</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr></tbody></table><h3 id="kubernetes-节点信息-新" tabindex="-1"><a class="header-anchor" href="#kubernetes-节点信息-新"><span>Kubernetes 节点信息（新）</span></a></h3><table><thead><tr><th>主机名称</th><th>IP 地址</th><th>用途</th><th>组件</th><th>版本</th></tr></thead><tbody><tr><td>node-010010013100</td><td>10.10.13.100, 10.10.13.200 (vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,haproxy</td><td>v1.22.17</td></tr><tr><td>node-010010013103</td><td>10.10.13.103</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013104</td><td>10.10.13.104</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013105</td><td>10.10.13.105</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.22.17</td></tr><tr><td>node-010010013101</td><td>10.10.13.101, 10.10.13.200 (vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,haproxy</td><td>v1.22.17</td></tr><tr><td>node-010010013102</td><td>10.10.13.102, 10.10.13.200 (vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,haproxy</td><td>v1.22.17</td></tr></tbody></table><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份"><span>备份</span></a></h2><h3 id="etcd备份" tabindex="-1"><a class="header-anchor" href="#etcd备份"><span>etcd备份</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kubernetes备份" tabindex="-1"><a class="header-anchor" href="#kubernetes备份"><span>kubernetes备份</span></a></h3><blockquote><p>master节点+worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-rf</span> /etc/kubernetes /etc/backup-kubernetes-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主机配置" tabindex="-1"><a class="header-anchor" href="#主机配置"><span>主机配置</span></a></h2><h3 id="配置主机名称" tabindex="-1"><a class="header-anchor" href="#配置主机名称"><span>配置主机名称</span></a></h3><blockquote><p>master 节点2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl set-hostname node-010010013101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>master 节点3</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl set-hostname node-010010013102
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h3><blockquote><p>master节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/hosts /etc/hosts-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>

<span class="token function">cat</span>  <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
10.10.13.100 node-010010013100
10.10.13.103 node-010010013103
10.10.13.104 node-010010013104
10.10.13.105 node-010010013105

# new master
10.10.13.101 node-010010013101
10.10.13.102 node-010010013102

# vip
10.10.13.200 lb-k8s-vip
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置源" tabindex="-1"><a class="header-anchor" href="#配置源"><span>配置源</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/yum.repos.d/backup
<span class="token function">cp</span> /etc/yum.repos.d/*.* /etc/yum.repos.d/backup/

<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-selinux-和防火墙" tabindex="-1"><a class="header-anchor" href="#关闭-selinux-和防火墙"><span>关闭 selinux 和防火墙</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
setenforce <span class="token number">0</span>
sestatus

systemctl stop firewalld.service
systemctl disable firewalld.service
firewall-cmd <span class="token parameter variable">--state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-swap" tabindex="-1"><a class="header-anchor" href="#关闭-swap"><span>关闭 swap</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
swapoff <span class="token parameter variable">-a</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节点间免密登录-可选" tabindex="-1"><a class="header-anchor" href="#节点间免密登录-可选"><span>节点间免密登录（可选）</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-N</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-f</span> ~/.ssh/id_rsa <span class="token operator">&lt;&lt;&lt;</span> y
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@node-010010013100
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@node-010010013103
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@node-010010013104
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@node-010010013105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内核参数设置" tabindex="-1"><a class="header-anchor" href="#内核参数设置"><span>内核参数设置</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/sysctl.d/kubernetes.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
user.max_user_namespaces=28633
vm.swappiness=0
EOF</span>

<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/kubernetes.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网桥配置" tabindex="-1"><a class="header-anchor" href="#网桥配置"><span>网桥配置</span></a></h3><p>转发 IPv4 并让 iptables 看到桥接流量</p><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/modules-load.d/containerd.conf</span>
overlay
br_netfilter
EOF</span>

modprobe overlay
modprobe br_netfilter

lsmod <span class="token operator">|</span> <span class="token function">grep</span> overlay
lsmod <span class="token operator">|</span> <span class="token function">grep</span> br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-ipset-与-ipvsaddm" tabindex="-1"><a class="header-anchor" href="#配置-ipset-与-ipvsaddm"><span>配置 ipset 与 ipvsaddm</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ipset ipvsadm

<span class="token comment">#配置ipvsadm模块加载方式.添加需要加载的模块</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/sysconfig/modules/ipvs.module</span>
modprobe -- ip_vs
modprobe -- ip_vs_sh
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- nf_conntrack
EOF</span>

<span class="token comment"># 授权、运行、检查是否加载</span>
<span class="token function">chmod</span> <span class="token number">755</span> /etc/sysconfig/modules/ipvs.module
/etc/sysconfig/modules/ipvs.module
lsmod <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> ip_vs <span class="token parameter variable">-e</span> nf_conntrack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器运行时" tabindex="-1"><a class="header-anchor" href="#容器运行时"><span>容器运行时</span></a></h2><h3 id="cgoup-驱动" tabindex="-1"><a class="header-anchor" href="#cgoup-驱动"><span>cgoup 驱动</span></a></h3><p>为了实现 docker 使用的 cgroupdriver 与 kubelet 使用的 cgroup 的一致性，建议修改如下文件内容。</p><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysconfig/kubelet</span>
KUBELET_EXTRA_ARGS=&quot;--cgroup-driver=systemd&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-engine" tabindex="-1"><a class="header-anchor" href="#docker-engine"><span>Docker Engine</span></a></h3><blockquote><p>new master节点</p></blockquote><h4 id="安装-docker-engine" tabindex="-1"><a class="header-anchor" href="#安装-docker-engine"><span>安装 Docker Engine</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token function">wget</span>
<span class="token function">wget</span>  <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># yum list docker-ce --showduplicates | sort -r</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce

<span class="token comment"># 容器镜像加速</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/docker/daemon.json</span>
{
    &quot;registry-mirrors&quot;: [
      &quot;https://uwtwp6l0.mirror.aliyuncs.com&quot;,
      &quot;https://registry.cn-hangzhou.aliyuncs.com&quot;,
      &quot;https://docker.mirrors.ustc.edu.cn&quot;,
      &quot;http://hub-mirror.c.163.com&quot;
    ],
    &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]
}
EOF</span>

<span class="token comment"># 启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> docker.service
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装-cri-dockerd" tabindex="-1"><a class="header-anchor" href="#安装-cri-dockerd"><span>安装 cri-dockerd</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> cri-dockerd-0.3.1.amd64.tgz <span class="token string">&quot;https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.1/cri-dockerd-0.3.1.amd64.tgz&quot;</span>

<span class="token function">tar</span> <span class="token parameter variable">-xf</span> cri-dockerd-0.3.1.amd64.tgz
<span class="token function">cp</span> cri-dockerd/cri-dockerd /usr/bin/
<span class="token function">chmod</span> +x /usr/bin/cri-dockerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-cri-dockerd-启动文件" tabindex="-1"><a class="header-anchor" href="#配置-cri-dockerd-启动文件"><span>配置 cri-dockerd 启动文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /usr/lib/systemd/system/cri-docker.service</span>
[Unit]
Description=CRI Interface for Docker Application Container Engine
Documentation=https://docs.mirantis.com
After=network-online.target firewalld.service docker.service
Wants=network-online.target
Requires=cri-docker.socket

[Service]
Type=notify

ExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7

ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
TimeoutSec=0
RestartSec=2
Restart=always

StartLimitBurst=3

StartLimitInterval=60s

LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

TasksMax=infinity
Delegate=yes
KillMode=process

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成-cri-dockerd-的-socket-文件" tabindex="-1"><a class="header-anchor" href="#生成-cri-dockerd-的-socket-文件"><span>生成 cri-dockerd 的 socket 文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /usr/lib/systemd/system/cri-docker.socket</span>
[Unit]
Description=CRI Docker Socket for the API
PartOf=cri-docker.service

[Socket]
ListenStream=%t/cri-dockerd.sock
SocketMode=0660
SocketUser=root
SocketGroup=docker

[Install]
WantedBy=sockets.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动-cri-docker-并设置开机自动启动" tabindex="-1"><a class="header-anchor" href="#启动-cri-docker-并设置开机自动启动"><span>启动 cri-docker 并设置开机自动启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> cri-docker <span class="token parameter variable">--now</span>
systemctl is-active cri-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cotainerd" tabindex="-1"><a class="header-anchor" href="#cotainerd"><span>Cotainerd</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token function">wget</span>
<span class="token function">wget</span>  <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> containerd.io

<span class="token function">sudo</span> <span class="token function">mv</span> /etc/containerd/config.toml /etc/containerd/config.toml.bak
containerd config default <span class="token operator">&gt;</span> /etc/containerd/config.toml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SystemdCgroup = false/SystemdCgroup = true/g&#39;</span> /etc/containerd/config.toml
<span class="token function">grep</span> SystemdCgroup /etc/containerd/config.toml
<span class="token function">sudo</span> systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">更改沙箱镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#sandbox_image = &quot;registry.k8s.io/pause:3.6&quot;#sandbox_image = &quot;registry.aliyuncs.com/google_containers/pause:3.6&quot;#g&#39;</span> /etc/containerd/config.toml
<span class="token function">grep</span> <span class="token string">&#39;sandbox_image&#39;</span> /etc/containerd/config.toml

systemctl daemon-reload
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="cri-o" tabindex="-1"><a class="header-anchor" href="#cri-o"><span>CRI-O</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">OS</span><span class="token operator">=</span>CentOS_7
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">1.24</span>.4
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/devel:kubic:libcontainers:stable.repo https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/<span class="token variable">$OS</span>/devel:kubic:libcontainers:stable.repo
<span class="token comment"># curl -L -o /etc/yum.repos.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.repo https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/devel:kubic:libcontainers:stable:cri-o:$VERSION.repo</span>

<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/devel:kubic:libcontainers:stable:cri-o:1.24.4.repo https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/1.24:/1.24.4/CentOS_7/devel:kubic:libcontainers:stable:cri-o:1.24:1.24.4.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> cri-o

systemctl <span class="token builtin class-name">enable</span> crio.service
systemctl start crio.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">更改沙箱镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/# pause_image = &quot;registry.k8s.io\\/pause:3.6&quot;/pause_image = &quot;registry.aliyuncs.com\\/google_containers\\/pause:3.6&quot;/g&#39;</span> /etc/crio/crio.conf
<span class="token function">grep</span> pause_image /etc/crio/crio.conf

systemctl daemon-reload
systemctl restart crio.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="安装-kubernetes" tabindex="-1"><a class="header-anchor" href="#安装-kubernetes"><span>安装 Kubernetes</span></a></h2><h3 id="配置-kubernetes-源" tabindex="-1"><a class="header-anchor" href="#配置-kubernetes-源"><span>配置 kubernetes 源</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
        http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

yum clean all <span class="token operator">&amp;&amp;</span> yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-kubernetes-工具-kubeadmin-kubectl-kubelet" tabindex="-1"><a class="header-anchor" href="#安装-kubernetes-工具-kubeadmin-kubectl-kubelet"><span>安装 Kubernetes 工具（kubeadmin, kubectl, kubelet）</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum list kubeadm kubelet kubectl <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubeadm-1.22.17  kubelet-1.22.17 kubectl-1.22.17

kubeadm version


systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet
systemctl restart kubelet
systemctl is-active kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-kubernetes-集群镜像依赖源-可选" tabindex="-1"><a class="header-anchor" href="#修改-kubernetes-集群镜像依赖源-可选"><span>修改 kubernetes 集群镜像依赖源（可选）</span></a></h3><blockquote><p>new master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubeadm config images list
kubeadm config print init-defaults <span class="token operator">&gt;</span> kubernetes-config.yaml

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s#imageRepository: registry.k8s.io#imageRepository: registry.aliyuncs.com/google_containers#g&quot;</span> kubernetes-config.yaml

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/disabled_plugins/# disabled_plugins/g&#39;</span>  /etc/containerd/config.toml
systemctl restart containerd

kubeadm config images pull <span class="token parameter variable">--config</span> ./kubernetes-config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keepalived和haproxy" tabindex="-1"><a class="header-anchor" href="#keepalived和haproxy"><span>KeepAlived和HaProxy</span></a></h2><h3 id="安装与配置haproxy" tabindex="-1"><a class="header-anchor" href="#安装与配置haproxy"><span>安装与配置haproxy</span></a></h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h4><ul><li>所有master节点使用相同配置 编辑<code>/etc/haproxy/haproxy.cfg</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /etc/haproxy/haproxy.cfg</span>
<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># Global settings</span>
<span class="token comment">#---------------------------------------------------------------------</span>
global
    log /dev/log local0
    log /dev/log local1 notice
    daemon

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># common defaults that all the &#39;listen&#39; and &#39;backend&#39; sections will</span>
<span class="token comment"># use if not designated in their block</span>
<span class="token comment">#---------------------------------------------------------------------</span>
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except <span class="token number">127.0</span>.0.0/8
    option                  redispatch
    retries                 <span class="token number">1</span>
    <span class="token function">timeout</span> http-request    10s
    <span class="token function">timeout</span> queue           20s
    <span class="token function">timeout</span> connect         5s
    <span class="token function">timeout</span> client          20s
    <span class="token function">timeout</span> server          20s
    <span class="token function">timeout</span> http-keep-alive 10s
    <span class="token function">timeout</span> check           10s

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># apiserver frontend which proxys to the control plane nodes</span>
<span class="token comment">#---------------------------------------------------------------------</span>
frontend apiserver
    <span class="token builtin class-name">bind</span> *:16443
    mode tcp
    option tcplog
    default_backend apiserver

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># round robin balancing for apiserver</span>
<span class="token comment">#---------------------------------------------------------------------</span>
backend apiserver
    option httpchk GET /healthz
    http-check <span class="token function">expect</span> status <span class="token number">200</span>
    mode tcp
    option ssl-hello-chk
    balance     roundrobin
        server node-010010013100 <span class="token number">10.10</span>.13.100:6443 check
        server node-010010013101 <span class="token number">10.10</span>.13.101:6443 check
        server node-010010013102 <span class="token number">10.10</span>.13.102:6443 check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start haproxy
systemctl <span class="token builtin class-name">enable</span> haproxy
systemctl status haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装与配置keepalived" tabindex="-1"><a class="header-anchor" href="#安装与配置keepalived"><span>安装与配置keepalived</span></a></h3><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> conntrack-tools libseccomp libtool-ltdl
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1"><span>配置</span></a></h4><ul><li>master节点1 node-010010013100 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state MASTER
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">100</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200/24
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点2 node-010010013101 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">60</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200/24
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点3 node-010010013102 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">50</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200/24
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>健康检查脚本</li></ul><blockquote><p>所有master节点 编辑<code>/etc/keepalived/check_apiserver.sh</code>,添加如下内容：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/keepalived/check_apiserver.sh <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
#!/bin/sh

APISERVER_VIP=10.10.13.200
APISERVER_DEST_PORT=16443

errorExit() {
    echo &quot;*** $*&quot; 1&gt;&amp;2
    exit 1
}

curl --silent --max-time 2 --insecure https://localhost:\${APISERVER_DEST_PORT}/ -o /dev/null || errorExit &quot;Error GET https://localhost:\${APISERVER_DEST_PORT}/&quot;
if ip addr | grep -q \${APISERVER_VIP}; then
    curl --silent --max-time 2 --insecure https://\${APISERVER_VIP}:\${APISERVER_DEST_PORT}/ -o /dev/null || errorExit &quot;Error GET https://\${APISERVER_VIP}:\${APISERVER_DEST_PORT}/&quot;
fi
EOF</span>

<span class="token function">chmod</span> a+x /etc/keepalived/check_apiserver.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>\${APISERVER_VIP}是集群主机之间协商的虚拟IP地址keepalived。</li><li>\${APISERVER_DEST_PORT}Kubernetes 将通过其与 API 服务器通信的端口。</li></ul></div><h4 id="启动-1" tabindex="-1"><a class="header-anchor" href="#启动-1"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start keepalived.service
systemctl <span class="token builtin class-name">enable</span> keepalived.service
systemctl status keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubernetes-master高可用配置" tabindex="-1"><a class="header-anchor" href="#kubernetes-master高可用配置"><span>Kubernetes Master高可用配置</span></a></h2><h3 id="更新kubeadm配置" tabindex="-1"><a class="header-anchor" href="#更新kubeadm配置"><span>更新kubeadm配置</span></a></h3><ul><li>获取kubeadm的configmap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get cm kubeadm-config <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-oyaml</span> <span class="token operator">&gt;</span> bakup-kubeadm-config-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>编辑kubeadm的configmap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl edit cm kubeadm-config <span class="token parameter variable">-n</span> kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>变更后的kubeadmin的配置如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: v1
data:
  ClusterConfiguration: <span class="token operator">|</span>
    apiServer:
      certSANs:
        - lb-k8s-vip
        - node-010010013100
        - node-010010013101
        - node-010010013102
        - <span class="token number">10.10</span>.13.200
        - <span class="token number">10.10</span>.13.100
        - <span class="token number">10.10</span>.13.101
        - <span class="token number">10.10</span>.13.102 
      extraArgs:
        authorization-mode: Node,RBAC
      timeoutForControlPlane: 4m0s
    apiVersion: kubeadm.k8s.io/v1beta3
    certificatesDir: /etc/kubernetes/pki
    clusterName: kubernetes
    controlPlaneEndpoint: lb-k8s-vip:16443 <span class="token comment"># abelit</span>
    controllerManager: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    dns: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    etcd:
      local:
        dataDir: /var/lib/etcd
    imageRepository: registry.aliyuncs.com/google_containers
    kind: ClusterConfiguration
    kubernetesVersion: v1.22.17
    networking:
      dnsDomain: cluster.local
      podSubnet: <span class="token number">10.244</span>.0.0/16
      serviceSubnet: <span class="token number">10.96</span>.0.0/16
    scheduler: <span class="token punctuation">{</span><span class="token punctuation">}</span>
kind: ConfigMap
metadata:
  creationTimestamp: <span class="token string">&quot;2024-08-02T11:32:25Z&quot;</span>
  name: kubeadm-config
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;196&quot;</span>
  uid: c548713a-8394-4b69-b986-0a794e5df76a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新apiserver证书" tabindex="-1"><a class="header-anchor" href="#更新apiserver证书"><span>更新apiServer证书</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 导出kubeadm配置</span>
kubectl <span class="token parameter variable">-n</span> kube-system get configmap kubeadm-config <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.data.ClusterConfiguration}&#39;</span> <span class="token operator">&gt;</span> kubeadm.yaml
 
<span class="token comment"># 查看配置</span>
<span class="token function">cat</span> kubeadm.yaml
 
<span class="token comment"># 备份和移除apiserver证书</span>
<span class="token function">mkdir</span> /root/abelit-k8s
<span class="token function">mv</span> /etc/kubernetes/pki/apiserver.<span class="token punctuation">{</span>crt,key<span class="token punctuation">}</span> /root/abelit-k8s/
 
<span class="token comment"># 创建新的apiserver证书</span>
kubeadm init phase certs apiserver <span class="token parameter variable">--config</span> kubeadm.yaml 
 
<span class="token comment"># 查看证书包含的域名和IP </span>
openssl x509 <span class="token parameter variable">-in</span> /etc/kubernetes/pki/apiserver.crt <span class="token parameter variable">-text</span> <span class="token operator">|</span><span class="token function">grep</span> DNS
 
<span class="token comment"># 重启apiserver生效</span>
<span class="token comment"># docker ps |awk &#39;/kube-apiserver/{print $1}&#39; |xargs docker restart</span>
<span class="token comment"># docker restart \`docker ps | grep kube-apiserver | grep -v pause | awk &#39;{print $1}&#39;</span>
kubectl <span class="token parameter variable">-n</span> kube-system delete pod kube-apiserver-node-010010013100
<span class="token comment"># kubectl -n kube-system delete pod kube-apiserver-node-010010013101</span>
<span class="token comment"># kubectl -n kube-system delete pod kube-apiserver-node-010010013102</span>

<span class="token comment"># 保存新证书</span>
kubeadm init phase upload-config kubeadm <span class="token parameter variable">--config</span> kubeadm.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新api-server地址</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sed -i &quot;s/oldapiservername/newapiservername/g&quot; \`grep oldapiservername -rl /etc/kubernetes\`</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/10.10.13.100:6443/lb-k8s-vip:16443/g&quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&quot;10.10.13.100:6443&quot;</span> <span class="token parameter variable">-rl</span> /etc/kubernetes<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改默认配置文件中的api-server地址</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> ~/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重启服务生效</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># docker ps |awk &#39;/k8s_kube-|etcd/{print $1}&#39; |xargs docker restart
kubectl -n kube-system delete pod  kube-apiserver-node-010010013100
kubectl -n kube-system delete pod  kube-scheduler-node-010010013100 
kubectl -n kube-system delete pod  kube-controller-manager-node-010010013100
kubectl -n kube-system delete pod  etcd-node-010010013100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新kubernetes证书有效期(可选)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#查看有效期</span>
kubeadm certs check-expiration
 
<span class="token comment">#更新有效期</span>
kubeadm certs renew all 
 
<span class="token comment">#重启服务生效</span>
<span class="token comment"># docker ps |awk &#39;/k8s_kube-|etcd/{print $1}&#39; |xargs docker restart</span>
kubectl <span class="token parameter variable">-n</span> kube-system delete pod  kube-apiserver-node-010010013100
kubectl <span class="token parameter variable">-n</span> kube-system delete pod  kube-scheduler-node-010010013100 
kubectl <span class="token parameter variable">-n</span> kube-system delete pod  kube-controller-manager-node-010010013100
kubectl <span class="token parameter variable">-n</span> kube-system delete pod  etcd-node-010010013100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看节点信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新cluster-info" tabindex="-1"><a class="header-anchor" href="#更新cluster-info"><span>更新cluster-info</span></a></h3><ul><li>获取原有cluster-info命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> kube-public get cm cluster-info <span class="token parameter variable">-oyaml</span> <span class="token operator">&gt;</span> backup-cluster-info-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新cluster-info命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> kube-public edit cm cluster-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: v1
data:
  jws-kubeconfig-5urdh2: eyJhbGciOiJIUzI1NiIsImtpZCI6IjV1cmRoMiJ9<span class="token punctuation">..</span>U6H-rqzgh0aihVL7hDhGuMQUazqsXIMdInQQ67yV-pw
  kubeconfig: <span class="token operator">|</span>
    apiVersion: v1
    clusters:
    - cluster:
        certificate-authority-data: <span class="token assign-left variable">LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJME1EZ3dNakV4TXpJeE5Wb1hEVE0wTURjek1URXhNekl4TlZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTWpFCngydzNscDhsc2l1dDRBK3NCekhpdFBuZlBuOW5iMlZ2OGxZZUs3STFkNThOS1R6cXM0bFkyZmZBdmVhY2kzTE0KNlpBSWprM1VqUDZyelJWbXNpOGcyUTNLdWdyam12cWVtaHRCV2hxY2hUVEhBS3doZ08raDZDbUFaeExMWFUvbgppNXBScFpEcWtsRVJMUkMyVGF5UlZpblJSYW1lalV4b2JlMGhjOVpMcHQ1ZmdTTy9sMVZNdVpweEs0NUxKZXQ1CjV2RFlmdXJFeGs2VktSdndhWHpNaDNQaTJ4dktlY3pQM2RJRXVOSEs3Y0IyN0M4RzZDM0RvNm1uNkRXS28zWUgKeHV3cFFMOWJJRjloREM4MW5EUTg4QkhzN0hPYXg1aEp4SjRPQkI3QmMrcmRHR1k0SjZWM2dRNEppZDMyYTFXTAoySG5rTmN5dGJnMFk0em1tRnFFQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZMSjVSM0V5MnBmeVZ5NlhBdHJkWWJIcTFtY3RNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBSi9SMXlkQUs3QlZROGw5OGJxVgozbmhCK3V6T3BqcFNHRkV6NUpEbHc0Y1RBTVFTQjVvVGQ5dDlLdHMvZHpxemI3cXllN1BlK05wZmFCZlZ1VnA2CnFnbXk1UDFFR29Fc0Rrcm8yOU8rR1lrL1pxZ0xtMEtEVjBzRGFiTFQ3dStCdlZoaDFkSEZQRlVXODBHUU9tbjIKUlkyTEdnUlV6MUtpYk5qSksvZVVoWEFsYnBBREc4QW9qZHhxYVlDS2ZtbkpPd0pSdmtMMjQ5dWJ4K0NPalB5TApCMFQ1OW1JOGNIT0dBQi94YWpIL3NJaE9Vd0JwZG5MRzUzZzZSL1RRNFppWktLYmJwZmowUjJVUVRwS2FkelRsCm5iYXhBWEJkTHhzRi9yVEdjNUhLWXFjN3JpNEhaeUcyUVhYSG9RTHJ5ZzlNMVdkUnorM1JQdUVyZHNZUWhlR2IKV2ZnPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg</span><span class="token operator">==</span>
        server: https://lb-k8s-vip:16443 <span class="token comment"># abelit</span>
      name: <span class="token string">&quot;&quot;</span>
    contexts: null
    current-context: <span class="token string">&quot;&quot;</span>
    kind: Config
    preferences: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    users: null
kind: ConfigMap
metadata:
  creationTimestamp: <span class="token string">&quot;2024-08-02T11:32:26Z&quot;</span>
  name: cluster-info
  namespace: kube-public
  resourceVersion: <span class="token string">&quot;407&quot;</span>
  uid: 82db22b0-6f42-4b2f-a20b-1184d9398088
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl cluster-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新kubelet配置" tabindex="-1"><a class="header-anchor" href="#更新kubelet配置"><span>更新kubelet配置</span></a></h3><blockquote><p>master节点+worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 更改server为VIP地址端口</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/10.10.13.100:6443/lb-k8s-vip:16443/g&#39;</span> /etc/kubernetes/kubelet.conf
 
<span class="token comment"># 重启kubelet服务</span>
systemctl restart kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新controller-manager配置-可选" tabindex="-1"><a class="header-anchor" href="#更新controller-manager配置-可选"><span>更新controller-manager配置（可选）</span></a></h3><blockquote><p>master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 更改server为VIP地址端口</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/10.10.13.100:6443/lb-k8s-vip:16443/g&#39;</span> /etc/kubernetes/controller-manager.conf
 
<span class="token comment"># 重启controller-manager服务</span>
kubectl delete pod <span class="token parameter variable">-n</span> kube-system kube-controller-manager-node-010010013100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新scheduler配置-可选" tabindex="-1"><a class="header-anchor" href="#更新scheduler配置-可选"><span>更新scheduler配置（可选）</span></a></h3><blockquote><p>master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 更改server为VIP地址端口</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/10.10.13.100:6443/lb-k8s-vip:16443/g&#39;</span> /etc/kubernetes/scheduler.conf
 
<span class="token comment"># 重启scheduler服务</span>
kubectl delete pod <span class="token parameter variable">-n</span> kube-system kube-scheduler-node-010010013100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新kube-proxy配置" tabindex="-1"><a class="header-anchor" href="#更新kube-proxy配置"><span>更新kube-proxy配置</span></a></h3><ul><li>查看kube-proxy配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get cm kube-proxy <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-oyaml</span> <span class="token operator">&gt;</span> backup-kube-proxy-<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span>.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新kube-proxy配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl edit cm kube-proxy <span class="token parameter variable">-n</span> kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更改后的值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: v1
data:
  config.conf: <span class="token operator">|</span>-
    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    bindAddress: <span class="token number">0.0</span>.0.0
    bindAddressHardFail: <span class="token boolean">false</span>
    clientConnection:
      acceptContentTypes: <span class="token string">&quot;&quot;</span>
      burst: <span class="token number">0</span>
      contentType: <span class="token string">&quot;&quot;</span>
      kubeconfig: /var/lib/kube-proxy/kubeconfig.conf
      qps: <span class="token number">0</span>
    clusterCIDR: <span class="token number">10.244</span>.0.0/16
    configSyncPeriod: 0s
    conntrack:
      maxPerCore: null
      min: null
      tcpCloseWaitTimeout: null
      tcpEstablishedTimeout: null
    detectLocalMode: <span class="token string">&quot;&quot;</span>
    enableProfiling: <span class="token boolean">false</span>
    healthzBindAddress: <span class="token string">&quot;&quot;</span>
    hostnameOverride: <span class="token string">&quot;&quot;</span>
    iptables:
      masqueradeAll: <span class="token boolean">false</span>
      masqueradeBit: null
      minSyncPeriod: 0s
      syncPeriod: 0s
    ipvs:
      excludeCIDRs: null
      minSyncPeriod: 0s
      scheduler: <span class="token string">&quot;&quot;</span>
      strictARP: <span class="token boolean">false</span>
      syncPeriod: 0s
      tcpFinTimeout: 0s
      tcpTimeout: 0s
      udpTimeout: 0s
    kind: KubeProxyConfiguration
    metricsBindAddress: <span class="token string">&quot;&quot;</span>
    mode: <span class="token string">&quot;&quot;</span>
    nodePortAddresses: null
    oomScoreAdj: null
    portRange: <span class="token string">&quot;&quot;</span>
    showHiddenMetricsForVersion: <span class="token string">&quot;&quot;</span>
    udpIdleTimeout: 0s
    winkernel:
      enableDSR: <span class="token boolean">false</span>
      networkName: <span class="token string">&quot;&quot;</span>
      sourceVip: <span class="token string">&quot;&quot;</span>
  kubeconfig.conf: <span class="token operator">|</span>-
    apiVersion: v1
    kind: Config
    clusters:
    - cluster:
        certificate-authority: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        server: https://lb-k8s-vip:16443
      name: default
    contexts:
    - context:
        cluster: default
        namespace: default
        user: default
      name: default
    current-context: default
    users:
    - name: default
      user:
        tokenFile: /var/run/secrets/kubernetes.io/serviceaccount/token
kind: ConfigMap
metadata:
  annotations:
    kubeadm.kubernetes.io/component-config.hash: sha256:d7096cfe50184cb160f1d0c57ff4194d97aabc39990169943c2e2c637809733f
  creationTimestamp: <span class="token string">&quot;2024-08-02T11:32:26Z&quot;</span>
  labels:
    app: kube-proxy
  name: kube-proxy
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;226&quot;</span>
  uid: 08ad0e8f-b19d-40fc-a64c-b569b1d318f6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启kube-proxy的pod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># for i in \`kubectl get pod -n kube-system | grep kube-proxy| awk &#39;{print $1}&#39;\`;do kubectl delete pod $i -n kube-system;done</span>
kubectl rollout restart daemonset kube-proxy <span class="token parameter variable">-n</span> kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新kubeconfig" tabindex="-1"><a class="header-anchor" href="#更新kubeconfig"><span>更新kubeconfig</span></a></h3><p>更改<code>~/.kube/config 和 /etc/kubernetes/admin.conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加master" tabindex="-1"><a class="header-anchor" href="#添加master"><span>添加master</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#创建join token.Create join token</span>
kubeadm token create --print-join-command
 
<span class="token comment">#创建用于添加master节点的证书.</span>
kubeadm init phase upload-certs --upload-certs
 
<span class="token comment">#添加master节点，使用上面生成的tocken+cert，添加--control-plane --certificate-key拼接</span>
kubeadm <span class="token function">join</span> lb-k8s-vip:16443 <span class="token parameter variable">--token</span> lg7qf6.fob8a38f8fqfnew9 --discovery-token-ca-cert-hash sha256:bd28875c6816c548111d22e2bacc8556d5a7aea59eb5adf952645bb0a80df48e --control-plane --certificate-key 1f99ad52caece5dcef3d87924328c7f8913bc6f245f6544eac01869504adc211

<span class="token comment"># 添加kubeconfig</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重新加入集群" tabindex="-1"><a class="header-anchor" href="#重新加入集群"><span>重新加入集群</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubeadm reset <span class="token parameter variable">--force</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/cni/net.d/
ipvsadm <span class="token parameter variable">--clear</span>
iptables <span class="token parameter variable">-F</span>
iptables <span class="token parameter variable">-X</span>
iptables <span class="token parameter variable">-S</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> .kube/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="haishi" tabindex="-1"><a class="header-anchor" href="#haishi"><span>haishi</span></a></h2><h3 id="backup" tabindex="-1"><a class="header-anchor" href="#backup"><span>backup</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /filebak
<span class="token function">mount</span> <span class="token number">10.81</span>.248.184:/unity400-nfs-test /filebak

<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /etc/kubernetes /filebak/k8s-backup/kubernetes-<span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,159),t=[l];function r(d,c){return n(),s("div",null,t)}const u=e(i,[["render",r],["__file","migrate-single-master-to-multi-master.html.vue"]]),v=JSON.parse('{"path":"/guide/cloudnative/kubernetes/installation/migrate-single-master-to-multi-master.html","title":"Kubernetes Master节点扩容","lang":"zh-CN","frontmatter":{"title":"Kubernetes Master节点扩容","description":"基本信息 Kubernetes 节点信息（旧） Kubernetes 节点信息（新） 备份 etcd备份 kubernetes备份 master节点+worker节点 主机配置 配置主机名称 master 节点2 master 节点3 配置 hosts master节点+worker 节点 配置源 new master节点 关闭 selinux 和防火...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/installation/migrate-single-master-to-multi-master.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Kubernetes Master节点扩容"}],["meta",{"property":"og:description","content":"基本信息 Kubernetes 节点信息（旧） Kubernetes 节点信息（新） 备份 etcd备份 kubernetes备份 master节点+worker节点 主机配置 配置主机名称 master 节点2 master 节点3 配置 hosts master节点+worker 节点 配置源 new master节点 关闭 selinux 和防火..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes Master节点扩容\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"基本信息","slug":"基本信息","link":"#基本信息","children":[{"level":3,"title":"Kubernetes 节点信息（旧）","slug":"kubernetes-节点信息-旧","link":"#kubernetes-节点信息-旧","children":[]},{"level":3,"title":"Kubernetes 节点信息（新）","slug":"kubernetes-节点信息-新","link":"#kubernetes-节点信息-新","children":[]}]},{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[{"level":3,"title":"etcd备份","slug":"etcd备份","link":"#etcd备份","children":[]},{"level":3,"title":"kubernetes备份","slug":"kubernetes备份","link":"#kubernetes备份","children":[]}]},{"level":2,"title":"主机配置","slug":"主机配置","link":"#主机配置","children":[{"level":3,"title":"配置主机名称","slug":"配置主机名称","link":"#配置主机名称","children":[]},{"level":3,"title":"配置 hosts","slug":"配置-hosts","link":"#配置-hosts","children":[]},{"level":3,"title":"配置源","slug":"配置源","link":"#配置源","children":[]},{"level":3,"title":"关闭 selinux 和防火墙","slug":"关闭-selinux-和防火墙","link":"#关闭-selinux-和防火墙","children":[]},{"level":3,"title":"关闭 swap","slug":"关闭-swap","link":"#关闭-swap","children":[]},{"level":3,"title":"节点间免密登录（可选）","slug":"节点间免密登录-可选","link":"#节点间免密登录-可选","children":[]},{"level":3,"title":"内核参数设置","slug":"内核参数设置","link":"#内核参数设置","children":[]},{"level":3,"title":"网桥配置","slug":"网桥配置","link":"#网桥配置","children":[]},{"level":3,"title":"配置 ipset 与 ipvsaddm","slug":"配置-ipset-与-ipvsaddm","link":"#配置-ipset-与-ipvsaddm","children":[]}]},{"level":2,"title":"容器运行时","slug":"容器运行时","link":"#容器运行时","children":[{"level":3,"title":"cgoup 驱动","slug":"cgoup-驱动","link":"#cgoup-驱动","children":[]},{"level":3,"title":"Docker Engine","slug":"docker-engine","link":"#docker-engine","children":[]},{"level":3,"title":"Cotainerd","slug":"cotainerd","link":"#cotainerd","children":[]},{"level":3,"title":"CRI-O","slug":"cri-o","link":"#cri-o","children":[]}]},{"level":2,"title":"安装 Kubernetes","slug":"安装-kubernetes","link":"#安装-kubernetes","children":[{"level":3,"title":"配置 kubernetes 源","slug":"配置-kubernetes-源","link":"#配置-kubernetes-源","children":[]},{"level":3,"title":"安装 Kubernetes 工具（kubeadmin, kubectl, kubelet）","slug":"安装-kubernetes-工具-kubeadmin-kubectl-kubelet","link":"#安装-kubernetes-工具-kubeadmin-kubectl-kubelet","children":[]},{"level":3,"title":"修改 kubernetes 集群镜像依赖源（可选）","slug":"修改-kubernetes-集群镜像依赖源-可选","link":"#修改-kubernetes-集群镜像依赖源-可选","children":[]}]},{"level":2,"title":"KeepAlived和HaProxy","slug":"keepalived和haproxy","link":"#keepalived和haproxy","children":[{"level":3,"title":"安装与配置haproxy","slug":"安装与配置haproxy","link":"#安装与配置haproxy","children":[]},{"level":3,"title":"安装与配置keepalived","slug":"安装与配置keepalived","link":"#安装与配置keepalived","children":[]}]},{"level":2,"title":"Kubernetes Master高可用配置","slug":"kubernetes-master高可用配置","link":"#kubernetes-master高可用配置","children":[{"level":3,"title":"更新kubeadm配置","slug":"更新kubeadm配置","link":"#更新kubeadm配置","children":[]},{"level":3,"title":"更新apiServer证书","slug":"更新apiserver证书","link":"#更新apiserver证书","children":[]},{"level":3,"title":"更新cluster-info","slug":"更新cluster-info","link":"#更新cluster-info","children":[]},{"level":3,"title":"更新kubelet配置","slug":"更新kubelet配置","link":"#更新kubelet配置","children":[]},{"level":3,"title":"更新controller-manager配置（可选）","slug":"更新controller-manager配置-可选","link":"#更新controller-manager配置-可选","children":[]},{"level":3,"title":"更新scheduler配置（可选）","slug":"更新scheduler配置-可选","link":"#更新scheduler配置-可选","children":[]},{"level":3,"title":"更新kube-proxy配置","slug":"更新kube-proxy配置","link":"#更新kube-proxy配置","children":[]},{"level":3,"title":"更新kubeconfig","slug":"更新kubeconfig","link":"#更新kubeconfig","children":[]},{"level":3,"title":"添加master","slug":"添加master","link":"#添加master","children":[]}]},{"level":2,"title":"重新加入集群","slug":"重新加入集群","link":"#重新加入集群","children":[]},{"level":2,"title":"haishi","slug":"haishi","link":"#haishi","children":[{"level":3,"title":"backup","slug":"backup","link":"#backup","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":9.71,"words":2912},"filePathRelative":"guide/cloudnative/kubernetes/installation/migrate-single-master-to-multi-master.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>基本信息</h2>\\n<h3>Kubernetes 节点信息（旧）</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>主机名称</th>\\n<th>IP 地址</th>\\n<th>用途</th>\\n<th>组件</th>\\n<th>版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>node-010010013100</td>\\n<td>10.10.13.100</td>\\n<td>master 节点</td>\\n<td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm</td>\\n<td>v1.22.17</td>\\n</tr>\\n<tr>\\n<td>node-010010013103</td>\\n<td>10.10.13.103</td>\\n<td>worker 节点</td>\\n<td>kube-proxy,kubelet,kubeadm</td>\\n<td>v1.22.17</td>\\n</tr>\\n<tr>\\n<td>node-010010013104</td>\\n<td>10.10.13.104</td>\\n<td>worker 节点</td>\\n<td>kube-proxy,kubelet,kubeadm</td>\\n<td>v1.22.17</td>\\n</tr>\\n<tr>\\n<td>node-010010013105</td>\\n<td>10.10.13.105</td>\\n<td>worker 节点</td>\\n<td>kube-proxy,kubelet,kubeadm</td>\\n<td>v1.22.17</td>\\n</tr>\\n</tbody>\\n</table>"}');export{u as comp,v as data};
