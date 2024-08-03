import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as b,b as l,w as s,a,f as p,d as n}from"./app-C7nDDXNs.js";const u={},d=a("h2",{id:"基于centos环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基于centos环境"},[a("span",null,"基于CentOS环境")])],-1),v=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"rpm"),n(),a("span",{class:"token parameter variable"},"-Uvh"),n(` https://repo.zabbix.com/zabbix/6.0/rhel/6/x86_64/zabbix-release-6.0-4.el6.noarch.rpm

`),a("span",{class:"token function"},"sed"),n(),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token string"},"'s/repo.zabbix.com/mirrors.aliyun.com\\/zabbix/g'"),n(` /etc/yum.repos.d/zabbix.repo
yum `),a("span",{class:"token function"},"install"),n(` zabbix-agent2 zabbix-agent2-plugin-*
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),k=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# rpm -Uvh https://repo.zabbix.com/zabbix/6.4/rhel/7/x86_64/zabbix-release-6.4-1.el7.noarch.rpm "),n(`
`),a("span",{class:"token function"},"rpm"),n(),a("span",{class:"token parameter variable"},"-Uvh"),n(` https://mirrors.aliyun.com/zabbix/zabbix/6.4/rhel/7/x86_64/zabbix-release-6.4-1.el7.noarch.rpm
`),a("span",{class:"token function"},"sed"),n(),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token string"},"'s/repo.zabbix.com/mirrors.aliyun.com\\/zabbix/g'"),n(` /etc/yum.repos.d/zabbix.repo
yum `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-y"),n(` zabbix-agent2 zabbix-agent2-plugin-*
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),m=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# rpm -Uvh https://repo.zabbix.com/zabbix/6.4/rhel/8/x86_64/zabbix-release-6.4-1.el8.noarch.rpm"),n(`
`),a("span",{class:"token function"},"rpm"),n(),a("span",{class:"token parameter variable"},"-Uvh"),n(` https://mirrors.aliyun.com/zabbix/zabbix/6.4/rhel/8/x86_64/zabbix-release-6.4-1.el8.noarch.rpm
dnf clean all
`),a("span",{class:"token function"},"sed"),n(),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token string"},"'s/repo.zabbix.com/mirrors.aliyun.com\\/zabbix/g'"),n(` /etc/yum.repos.d/zabbix.repo

dnf `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-y"),n(` zabbix-agent2 zabbix-agent2-plugin-*
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),g=a("h2",{id:"基于ubuntu环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基于ubuntu环境"},[a("span",null,"基于ubuntu环境")])],-1),h=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# wget https://repo.zabbix.com/zabbix/6.4/ubuntu/pool/main/z/zabbix-release/zabbix-release_6.4-1+ubuntu22.04_all.deb"),n(`
`),a("span",{class:"token function"},"wget"),n(` https://mirrors.aliyun.com/zabbix/6.4/ubuntu/pool/main/z/zabbix-release/zabbix-release_6.4-1+ubuntu22.04_all.deb

dpkg `),a("span",{class:"token parameter variable"},"-i"),n(` zabbix-release_6.4-1+ubuntu22.04_all.deb

`),a("span",{class:"token function"},"sed"),n(),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token string"},"'s/repo.zabbix.com/mirrors.aliyun.com\\/zabbix/g'"),n(` /etc/apt/sources.list.d/zabbix.list 
`),a("span",{class:"token comment"},"# apt update"),n(`

`),a("span",{class:"token function"},"apt"),n(),a("span",{class:"token function"},"install"),n(` zabbix-agent2 zabbix-agent2-plugin-*
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),x=p(`<h2 id="zabbix-agent配置" tabindex="-1"><a class="header-anchor" href="#zabbix-agent配置"><span>Zabbix Agent配置</span></a></h2><h3 id="zabbix-agent2-配置" tabindex="-1"><a class="header-anchor" href="#zabbix-agent2-配置"><span>zabbix_agent2 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">ipaddress</span><span class="token operator">=</span><span class="token string">&#39;10.10.12.26&#39;</span>
<span class="token assign-left variable">zabbix_hostname</span><span class="token operator">=</span><span class="token string">&#39;ysidc-confluence-db-012026&#39;</span>
<span class="token assign-left variable">zabbix_server</span><span class="token operator">=</span><span class="token string">&#39;10.10.12.80,222.85.199.47&#39;</span>

<span class="token function">cp</span> <span class="token parameter variable">-f</span> /etc/zabbix/zabbix_agent2.conf /etc/zabbix/zabbix_agent2.conf.<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%M%d<span class="token variable">\`</span></span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^Server=.*$/Server=<span class="token variable">$zabbix_server</span>/g&quot;</span> /etc/zabbix/zabbix_agent2.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^Hostname=.*$/Hostname=<span class="token variable">$zabbix_hostname</span>/g&quot;</span> /etc/zabbix/zabbix_agent2.conf

<span class="token function">grep</span> <span class="token string">&#39;^Hostname=&#39;</span> /etc/zabbix/zabbix_agent2.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理zabbix-agent服务" tabindex="-1"><a class="header-anchor" href="#管理zabbix-agent服务"><span>管理Zabbix Agent服务</span></a></h3>`,4),f=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"service"),n(` zabbix-agent2 restart
`),a("span",{class:"token function"},"chkconfig"),n(),a("span",{class:"token parameter variable"},"--level"),n(),a("span",{class:"token number"},"35"),n(` zabbix-agent2 on
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),_=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[n(`systemctl restart zabbix-agent2

systemctl `),a("span",{class:"token builtin class-name"},"enable"),n(` zabbix-agent2

systemctl status zabbix-agent2
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),z=a("h3",{id:"防火墙配置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#防火墙配置"},[a("span",null,"防火墙配置")])],-1),A=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[n(`systemctl status firewalld

firewall-cmd `),a("span",{class:"token parameter variable"},"--zone"),a("span",{class:"token operator"},"="),n("public --add-port"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"10050"),n("/tcp "),a("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),a("span",{class:"token parameter variable"},"--reload"),n(`

firewall-cmd --list-ports
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),S=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[n("iptables "),a("span",{class:"token parameter variable"},"-A"),n(" INPUT "),a("span",{class:"token parameter variable"},"-s"),n(),a("span",{class:"token number"},"222.85"),n(".199.47/32 "),a("span",{class:"token parameter variable"},"-p"),n(" tcp "),a("span",{class:"token parameter variable"},"-m"),n(" tcp "),a("span",{class:"token parameter variable"},"--dport"),n(),a("span",{class:"token number"},"10050"),n(),a("span",{class:"token parameter variable"},"-j"),n(` ACCEPT
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),y=p(`<h2 id="安装脚本" tabindex="-1"><a class="header-anchor" href="#安装脚本"><span>安装脚本</span></a></h2><h3 id="centos下安装脚本" tabindex="-1"><a class="header-anchor" href="#centos下安装脚本"><span>CentOS下安装脚本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Author: Abelit</span>
<span class="token comment"># Email: ychenid@live.com</span>
<span class="token comment"># Date: 2022-11-28</span>

<span class="token comment">##### custom config start ######</span>
<span class="token comment"># Zabbix Server IP</span>
<span class="token assign-left variable">ZABBIX_SERVER_IP</span><span class="token operator">=</span><span class="token string">&quot;10.10.12.80,222.85.199.47&quot;</span>

<span class="token comment"># TLS Parameter</span>
<span class="token assign-left variable">PSK</span><span class="token operator">=</span><span class="token string">&quot;d02546452784cb3a2074b14b62ace61224ecb2bc422eb0402f19c03e3a668971&quot;</span>
<span class="token assign-left variable">TLSConnect</span><span class="token operator">=</span>psk
<span class="token assign-left variable">TLSAccept</span><span class="token operator">=</span>psk
<span class="token assign-left variable">TLSPSKFile</span><span class="token operator">=</span>/etc/zabbix/zabbix.psk
<span class="token assign-left variable">TLSPSKIdentity</span><span class="token operator">=</span>PSK0001 
<span class="token comment">##### custom config end ######</span>


<span class="token comment">##### auto config start ######</span>
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">OSVERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /etc/redhat-release <span class="token operator">|</span><span class="token function">grep</span>  <span class="token parameter variable">-o</span> <span class="token string">&#39;[[:digit:]]*&#39;</span><span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">OSRELEASE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /etc/redhat-release<span class="token variable">\`</span></span>
<span class="token assign-left variable">ZABBIX_SERVER_IPLIST</span><span class="token operator">=</span><span class="token variable">\${ZABBIX_SERVER_IP<span class="token operator">/</span><span class="token operator">/</span><span class="token operator">,</span><span class="token operator">/</span> }</span>

<span class="token assign-left variable">ZABBIX_AGENT_CONF</span><span class="token operator">=</span><span class="token string">&quot;/etc/zabbix/zabbix_agent2.conf&quot;</span>
<span class="token comment">##### auto config end ######</span>

<span class="token keyword">function</span> <span class="token function-name function">generate_psk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">PSK</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>openssl rand <span class="token parameter variable">-hex</span> <span class="token number">32</span><span class="token variable">\`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">enable_zbx_agent_psk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$PSK</span> <span class="token operator">&gt;</span> <span class="token variable">$TLSPSKFile</span>
    <span class="token comment"># isTLSAccept=\`grep &quot;^TLSAccept=&quot; /etc/zabbix/zabbix_agent2.conf\`</span>

    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^# TLSConnect=.*$/TLSConnect=<span class="token variable">\${TLSConnect}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^# TLSAccept=.*$/TLSAccept=<span class="token variable">\${TLSAccept}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^# TLSPSKFile=.*$/TLSPSKFile=<span class="token variable">\${TLSPSKFile}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^# TLSPSKIdentity=.*$/TLSPSKIdentity=<span class="token variable">\${TLSPSKIdentity}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">backup_zbx_agent_conf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Backup <span class="token variable">\${ZABBIX_AGENT_CONF}</span> ... &quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">cp</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span><span class="token builtin class-name">.</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y%m%d%H%M%S&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">else</span>
        <span class="token function">cp</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>.origin
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Backup <span class="token variable">\${ZABBIX_AGENT_CONF}</span> successfully! &quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">install_zbx_agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Installing zabbix-agent2 on <span class="token variable">$OSRELEASE</span> ... &quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$OSVERSION</span> <span class="token parameter variable">-eq</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://repo.zabbix.com/zabbix/6.2/rhel/6/x86_64/zabbix-release-6.2-3.el6.noarch.rpm
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-agent2
    <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$OSVERSION</span> <span class="token parameter variable">-eq</span> <span class="token number">7</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://repo.zabbix.com/zabbix/6.2/rhel/7/x86_64/zabbix-release-6.2-3.el7.noarch.rpm
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-agent2
    <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$OSVERSION</span> <span class="token parameter variable">-eq</span> <span class="token number">8</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://repo.zabbix.com/zabbix/6.2/rhel/8/x86_64/zabbix-release-6.2-3.el8.noarch.rpm
        yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-agent2
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;No support this os version.&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Intalled zabbix-agent2 on <span class="token variable">$OSRELEASE</span> successfully!&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">config_zbx_agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Configuring <span class="token variable">\${ZABBIX_AGENT_CONF}</span> ... &quot;</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^Server=.*$/Server=<span class="token variable">\${ZABBIX_SERVER_IP}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^Hostname=.*$/Hostname=<span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span>/g&quot;</span> <span class="token variable">\${ZABBIX_AGENT_CONF}</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Configure <span class="token variable">\${ZABBIX_AGENT_CONF}</span> successfully! &quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function-name function">config_zbx_agent_firewalld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Cofiguring firewalld ... &quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">ip</span> <span class="token keyword">in</span> <span class="token variable">$ZABBIX_SERVER_IPLIST</span>
    <span class="token keyword">do</span>
        iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token variable">$ip</span> <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">10050</span> <span class="token parameter variable">-j</span> ACCEPT
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Configure firewalld successfully!&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function-name function">start_zbx_agent_service</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Enable and start zabbix-agent2 on <span class="token variable">$OSRELEASE</span> ... &quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$OSVERSION</span> <span class="token parameter variable">-eq</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">service</span> zabbix-agent2 restart
        <span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">35</span> zabbix-agent2 on
    <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$OSVERSION</span> <span class="token parameter variable">-eq</span> <span class="token number">7</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        systemctl restart zabbix-agent2
        systemctl <span class="token builtin class-name">enable</span> zabbix-agent2
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;No support this os version.&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Enable and start zabbix-agent2 on <span class="token variable">$OSRELEASE</span> successfully! &quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    install_zbx_agent
    backup_zbx_agent_conf
    config_zbx_agent
    enable_zbx_agent_psk
    <span class="token comment"># config_zbx_agent_firewalld</span>
    start_zbx_agent_service
<span class="token punctuation">}</span>


main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function E(q,T){const i=o("CodeTabs");return r(),b("div",null,[d,l(i,{id:"3",data:[{id:"centos 6.x"},{id:"centos 7.x"},{id:"centos 8.x"}],active:1},{title0:s(({value:e,isActive:t})=>[n("centos 6.x")]),title1:s(({value:e,isActive:t})=>[n("centos 7.x")]),title2:s(({value:e,isActive:t})=>[n("centos 8.x")]),tab0:s(({value:e,isActive:t})=>[v]),tab1:s(({value:e,isActive:t})=>[k]),tab2:s(({value:e,isActive:t})=>[m]),_:1}),g,l(i,{id:"17",data:[{id:"ubuntu 22.04"}]},{title0:s(({value:e,isActive:t})=>[n("ubuntu 22.04")]),tab0:s(({value:e,isActive:t})=>[h]),_:1}),x,l(i,{id:"32",data:[{id:"CentOS 6.x及以下"},{id:"CentOS 7.x及以上"}],active:1},{title0:s(({value:e,isActive:t})=>[n("CentOS 6.x及以下")]),title1:s(({value:e,isActive:t})=>[n("CentOS 7.x及以上")]),tab0:s(({value:e,isActive:t})=>[f]),tab1:s(({value:e,isActive:t})=>[_]),_:1}),z,l(i,{id:"43",data:[{id:"firewalld"},{id:"iptables"}],active:0},{title0:s(({value:e,isActive:t})=>[n("firewalld")]),title1:s(({value:e,isActive:t})=>[n("iptables")]),tab0:s(({value:e,isActive:t})=>[A]),tab1:s(({value:e,isActive:t})=>[S]),_:1}),y])}const $=c(u,[["render",E],["__file","install-zabbix-agent.html.vue"]]),B=JSON.parse(`{"path":"/guide/devops/zabbix/installation/6.4/install-zabbix-agent.html","title":"安装Zabbix Agent","lang":"zh-CN","frontmatter":{"title":"安装Zabbix Agent","description":"基于CentOS环境 基于ubuntu环境 Zabbix Agent配置 zabbix_agent2 配置 管理Zabbix Agent服务 防火墙配置 安装脚本 CentOS下安装脚本","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/devops/zabbix/installation/6.4/install-zabbix-agent.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"安装Zabbix Agent"}],["meta",{"property":"og:description","content":"基于CentOS环境 基于ubuntu环境 Zabbix Agent配置 zabbix_agent2 配置 管理Zabbix Agent服务 防火墙配置 安装脚本 CentOS下安装脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装Zabbix Agent\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"基于CentOS环境","slug":"基于centos环境","link":"#基于centos环境","children":[]},{"level":2,"title":"基于ubuntu环境","slug":"基于ubuntu环境","link":"#基于ubuntu环境","children":[]},{"level":2,"title":"Zabbix Agent配置","slug":"zabbix-agent配置","link":"#zabbix-agent配置","children":[{"level":3,"title":"zabbix_agent2 配置","slug":"zabbix-agent2-配置","link":"#zabbix-agent2-配置","children":[]},{"level":3,"title":"管理Zabbix Agent服务","slug":"管理zabbix-agent服务","link":"#管理zabbix-agent服务","children":[]},{"level":3,"title":"防火墙配置","slug":"防火墙配置","link":"#防火墙配置","children":[]}]},{"level":2,"title":"安装脚本","slug":"安装脚本","link":"#安装脚本","children":[{"level":3,"title":"CentOS下安装脚本","slug":"centos下安装脚本","link":"#centos下安装脚本","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"guide/devops/zabbix/installation/6.4/install-zabbix-agent.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>基于CentOS环境</h2>\\n\\n<h2>基于ubuntu环境</h2>\\n\\n<h2>Zabbix Agent配置</h2>\\n<h3>zabbix_agent2 配置</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token assign-left variable\\">ipaddress</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'10.10.12.26'</span>\\n<span class=\\"token assign-left variable\\">zabbix_hostname</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'ysidc-confluence-db-012026'</span>\\n<span class=\\"token assign-left variable\\">zabbix_server</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'10.10.12.80,222.85.199.47'</span>\\n\\n<span class=\\"token function\\">cp</span> <span class=\\"token parameter variable\\">-f</span> /etc/zabbix/zabbix_agent2.conf /etc/zabbix/zabbix_agent2.conf.<span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">date</span> +%Y%M%d<span class=\\"token variable\\">\`</span></span>\\n<span class=\\"token function\\">sed</span> <span class=\\"token parameter variable\\">-i</span> <span class=\\"token string\\">\\"s/^Server=.*$/Server=<span class=\\"token variable\\">$zabbix_server</span>/g\\"</span> /etc/zabbix/zabbix_agent2.conf\\n<span class=\\"token function\\">sed</span> <span class=\\"token parameter variable\\">-i</span> <span class=\\"token string\\">\\"s/^Hostname=.*$/Hostname=<span class=\\"token variable\\">$zabbix_hostname</span>/g\\"</span> /etc/zabbix/zabbix_agent2.conf\\n\\n<span class=\\"token function\\">grep</span> <span class=\\"token string\\">'^Hostname='</span> /etc/zabbix/zabbix_agent2.conf\\n</code></pre></div>"}`);export{$ as comp,B as data};