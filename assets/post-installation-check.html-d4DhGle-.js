import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c,a,d as s,b as e,w as t,f as p}from"./app-C7nDDXNs.js";const i="/assets/tidb-dashboard-vQCtOypr.png",d="/assets/tidb-dashboard-status-Bggse4YD.png",u="/assets/grafana-overview-C4hZb5qH.png",k={},m=a("h1",{id:"验证集群运行状态",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#验证集群运行状态"},[a("span",null,"验证集群运行状态")])],-1),b=p(`<h2 id="通过-tiup-检查集群状态" tabindex="-1"><a class="header-anchor" href="#通过-tiup-检查集群状态"><span>通过 TiUP 检查集群状态</span></a></h2><p>检查集群状态的命令是 <code>tiup cluster display &lt;cluster-name&gt;</code>，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tiup cluster display tidb-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期结果输出：各节点 Status 状态信息为 <code>Up</code> 说明集群状态正常。</p><h2 id="通过-tidb-dashboard-和-grafana-检查集群状态" tabindex="-1"><a class="header-anchor" href="#通过-tidb-dashboard-和-grafana-检查集群状态"><span>通过 TiDB Dashboard 和 Grafana 检查集群状态</span></a></h2>`,5),v=p('<h3 id="查看-tidb-dashboard-检查-tidb-集群状态" tabindex="-1"><a class="header-anchor" href="#查看-tidb-dashboard-检查-tidb-集群状态"><span>查看 TiDB Dashboard 检查 TiDB 集群状态</span></a></h3><ol><li><p>通过 <code>{pd-ip}:{pd-port}/dashboard</code> 登录 TiDB Dashboard，登录用户和口令为 TiDB 数据库 <code>root</code> 用户和口令。如果你修改过数据库的 <code>root</code> 密码，则以修改后的密码为准，默认密码为空。</p><figure><img src="'+i+'" alt="TiDB-Dashboard" tabindex="0" loading="lazy"><figcaption>TiDB-Dashboard</figcaption></figure></li><li><p>主页面显示 TiDB 集群中节点信息</p><figure><img src="'+d+'" alt="TiDB-Dashboard-status" tabindex="0" loading="lazy"><figcaption>TiDB-Dashboard-status</figcaption></figure></li></ol><h3 id="查看-grafana-监控-overview-页面检查-tidb-集群状态" tabindex="-1"><a class="header-anchor" href="#查看-grafana-监控-overview-页面检查-tidb-集群状态"><span>查看 Grafana 监控 Overview 页面检查 TiDB 集群状态</span></a></h3><ul><li><p>通过 <code>{Grafana-ip}:3000</code> 登录 Grafana 监控，默认用户名及密码为 <code>admin</code>/<code>admin</code>。</p></li><li><p>点击 <strong>Overview</strong> 监控页面检查 TiDB 端口和负载监控信息。</p><figure><img src="'+u+'" alt="Grafana-overview" tabindex="0" loading="lazy"><figcaption>Grafana-overview</figcaption></figure></li></ul><h2 id="登录数据库执行简单-dml-ddl-操作和查询-sql-语句" tabindex="-1"><a class="header-anchor" href="#登录数据库执行简单-dml-ddl-操作和查询-sql-语句"><span>登录数据库执行简单 DML/DDL 操作和查询 SQL 语句</span></a></h2><blockquote><p><strong>注意：</strong></p><p>登录数据库前，你需要安装 MySQL 客户端。</p></blockquote><p>执行以下命令登录数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-h</span> <span class="token variable">${tidb_server_host_IP_address}</span> <span class="token parameter variable">-P</span> <span class="token number">4000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',8),h=a("code",null,"${tidb_server_host_IP_address}",-1),g=a("code",null,"tidb_servers",-1),y=a("code",null,"10.0.1.7",-1),T=p(`<p>输出下列信息表示登录成功：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>Welcome <span class="token keyword">to</span> the MySQL monitor<span class="token punctuation">.</span>  Commands <span class="token keyword">end</span> <span class="token keyword">with</span> <span class="token punctuation">;</span> <span class="token operator">or</span> \\g<span class="token punctuation">.</span>
Your MySQL connection id <span class="token operator">is</span> <span class="token number">3</span>
Server version: <span class="token number">5.7</span><span class="token number">.25</span><span class="token operator">-</span>TiDB<span class="token operator">-</span>v7<span class="token punctuation">.</span><span class="token number">3.0</span> TiDB Server <span class="token punctuation">(</span>Apache License <span class="token number">2.0</span><span class="token punctuation">)</span> Community Edition<span class="token punctuation">,</span> MySQL <span class="token number">5.7</span> compatible

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2015</span><span class="token punctuation">,</span> Oracle <span class="token operator">and</span><span class="token operator">/</span><span class="token operator">or</span> its affiliates<span class="token punctuation">.</span> <span class="token keyword">All</span> rights reserved<span class="token punctuation">.</span>

Oracle <span class="token operator">is</span> a registered trademark <span class="token keyword">of</span> Oracle Corporation <span class="token operator">and</span><span class="token operator">/</span><span class="token operator">or</span> its
affiliates<span class="token punctuation">.</span> Other names may be trademarks <span class="token keyword">of</span> their respective
owners<span class="token punctuation">.</span>

<span class="token keyword">Type</span> <span class="token string">&#39;help;&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help<span class="token punctuation">.</span> <span class="token keyword">Type</span> <span class="token string">&#39;\\c&#39;</span> <span class="token keyword">to</span> clear the <span class="token keyword">current</span> input statement<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作"><span>数据库操作</span></a></h3><ul><li><p>检查 TiDB 版本</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> tidb_version<span class="token punctuation">(</span><span class="token punctuation">)</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期结果输出：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
tidb_version<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token keyword">Release</span> Version: v5<span class="token punctuation">.</span><span class="token number">0.0</span>
Edition: Community
Git <span class="token keyword">Commit</span> <span class="token keyword">Hash</span>: <span class="token number">689</span>a6b6439ae7835947fcaccf329a3fc303986cb
Git Branch: HEAD
UTC Build <span class="token keyword">Time</span>: <span class="token number">2020</span><span class="token operator">-</span><span class="token number">05</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span>:<span class="token number">09</span>:<span class="token number">45</span>
GoVersion: go1<span class="token punctuation">.</span><span class="token number">13.4</span>
Race Enabled: <span class="token boolean">false</span>
TiKV Min Version: v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">60965</span>b006877ca7234adaced7890d7b029ed1306
<span class="token keyword">Check</span> <span class="token keyword">Table</span> Before <span class="token keyword">Drop</span>: <span class="token boolean">false</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建 PingCAP database</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> pingcap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.10</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> pingcap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">Database</span> changed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建 <code>tab_tidb</code> 表</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>tab_tidb<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>age<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>version<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_age<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>age<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.11</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>插入数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token identifier"><span class="token punctuation">\`</span>tab_tidb<span class="token punctuation">\`</span></span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;TiDB&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;TiDB-v5.0.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>Query OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看 <code>tab_tidb</code> 结果</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tab_tidb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">----+------+-----+-------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> version     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+-------------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> TiDB <span class="token operator">|</span>   <span class="token number">5</span> <span class="token operator">|</span> TiDB<span class="token operator">-</span>v5<span class="token punctuation">.</span><span class="token number">0.0</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+-------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看 TiKV store 状态、<code>store_id</code>、存储情况以及启动时间</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> STORE_ID<span class="token punctuation">,</span>ADDRESS<span class="token punctuation">,</span>STORE_STATE<span class="token punctuation">,</span>STORE_STATE_NAME<span class="token punctuation">,</span>CAPACITY<span class="token punctuation">,</span>AVAILABLE<span class="token punctuation">,</span>UPTIME <span class="token keyword">from</span> INFORMATION_SCHEMA<span class="token punctuation">.</span>TIKV_STORE_STATUS<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">----------+--------------------+-------------+------------------+----------+-----------+--------------------+</span>
<span class="token operator">|</span> STORE_ID <span class="token operator">|</span> ADDRESS            <span class="token operator">|</span> STORE_STATE <span class="token operator">|</span> STORE_STATE_NAME <span class="token operator">|</span> CAPACITY <span class="token operator">|</span> AVAILABLE <span class="token operator">|</span> UPTIME             <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+--------------------+-------------+------------------+----------+-----------+--------------------+</span>
<span class="token operator">|</span>        <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">10.0</span><span class="token number">.1</span><span class="token number">.1</span>:<span class="token number">20160</span> <span class="token operator">|</span>           <span class="token number">0</span> <span class="token operator">|</span> Up               <span class="token operator">|</span> <span class="token number">49.98</span>GiB <span class="token operator">|</span> <span class="token number">46.3</span>GiB   <span class="token operator">|</span> <span class="token number">5</span>h21m52<span class="token punctuation">.</span><span class="token number">474864026</span>s <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">10.0</span><span class="token number">.1</span><span class="token number">.2</span>:<span class="token number">20160</span> <span class="token operator">|</span>           <span class="token number">0</span> <span class="token operator">|</span> Up               <span class="token operator">|</span> <span class="token number">49.98</span>GiB <span class="token operator">|</span> <span class="token number">46.32</span>GiB  <span class="token operator">|</span> <span class="token number">5</span>h21m52<span class="token punctuation">.</span><span class="token number">522669177</span>s <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token number">5</span> <span class="token operator">|</span> <span class="token number">10.0</span><span class="token number">.1</span><span class="token number">.3</span>:<span class="token number">20160</span> <span class="token operator">|</span>           <span class="token number">0</span> <span class="token operator">|</span> Up               <span class="token operator">|</span> <span class="token number">49.98</span>GiB <span class="token operator">|</span> <span class="token number">45.44</span>GiB  <span class="token operator">|</span> <span class="token number">5</span>h21m52<span class="token punctuation">.</span><span class="token number">713660541</span>s <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+--------------------+-------------+------------------+----------+-----------+--------------------+</span>
<span class="token number">3</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>预期输出</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>Bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,4);function f(q,w){const n=l("RouteLink");return r(),c("div",null,[m,a("p",null,[s("在部署完一套 TiDB 集群后，需要检查集群是否正常运行。本文介绍如何通过 TiUP 命令、"),e(n,{to:"/dashboard/dashboard-intro.html"},{default:t(()=>[s("TiDB Dashboard")]),_:1}),s(" 和 Grafana 检查集群状态，以及如何登录 TiDB 数据库执行简单的 SQL 操作。")]),b,a("p",null,[s("本节介绍如何通过 "),e(n,{to:"/dashboard/dashboard-intro.html"},{default:t(()=>[s("TiDB Dashboard")]),_:1}),s(" 和 Grafana 检查集群状态。")]),v,a("p",null,[s("其中，"),h,s(" 是在"),e(n,{to:"/production-deployment-using-tiup.html#%E7%AC%AC-3-%E6%AD%A5%E5%88%9D%E5%A7%8B%E5%8C%96%E9%9B%86%E7%BE%A4%E6%8B%93%E6%89%91%E6%96%87%E4%BB%B6"},{default:t(()=>[s("初始化集群拓扑文件")]),_:1}),s("时为 "),g,s(" 配置的 IP 地址之一，例如 "),y,s("。")]),T])}const B=o(k,[["render",f],["__file","post-installation-check.html.vue"]]),E=JSON.parse('{"path":"/guide/database/tidb/deployments/post-installation-check.html","title":"验证集群运行状态","lang":"zh-CN","frontmatter":{"title":"验证集群运行状态","summary":"介绍如何验证集群运行状态。","aliases":["/docs-cn/dev/post-installation-check/"],"description":"验证集群运行状态 在部署完一套 TiDB 集群后，需要检查集群是否正常运行。本文介绍如何通过 TiUP 命令、 和 Grafana 检查集群状态，以及如何登录 TiDB 数据库执行简单的 SQL 操作。 通过 TiUP 检查集群状态 检查集群状态的命令是 tiup cluster display <cluster-name>，例如： 预期结果输出：各节...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/tidb/deployments/post-installation-check.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"验证集群运行状态"}],["meta",{"property":"og:description","content":"验证集群运行状态 在部署完一套 TiDB 集群后，需要检查集群是否正常运行。本文介绍如何通过 TiUP 命令、 和 Grafana 检查集群状态，以及如何登录 TiDB 数据库执行简单的 SQL 操作。 通过 TiUP 检查集群状态 检查集群状态的命令是 tiup cluster display <cluster-name>，例如： 预期结果输出：各节..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"验证集群运行状态\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"通过 TiUP 检查集群状态","slug":"通过-tiup-检查集群状态","link":"#通过-tiup-检查集群状态","children":[]},{"level":2,"title":"通过 TiDB Dashboard 和 Grafana 检查集群状态","slug":"通过-tidb-dashboard-和-grafana-检查集群状态","link":"#通过-tidb-dashboard-和-grafana-检查集群状态","children":[{"level":3,"title":"查看 TiDB Dashboard 检查 TiDB 集群状态","slug":"查看-tidb-dashboard-检查-tidb-集群状态","link":"#查看-tidb-dashboard-检查-tidb-集群状态","children":[]},{"level":3,"title":"查看 Grafana 监控 Overview 页面检查 TiDB 集群状态","slug":"查看-grafana-监控-overview-页面检查-tidb-集群状态","link":"#查看-grafana-监控-overview-页面检查-tidb-集群状态","children":[]}]},{"level":2,"title":"登录数据库执行简单 DML/DDL 操作和查询 SQL 语句","slug":"登录数据库执行简单-dml-ddl-操作和查询-sql-语句","link":"#登录数据库执行简单-dml-ddl-操作和查询-sql-语句","children":[{"level":3,"title":"数据库操作","slug":"数据库操作","link":"#数据库操作","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"guide/database/tidb/deployments/post-installation-check.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"\\n<p>在部署完一套 TiDB 集群后，需要检查集群是否正常运行。本文介绍如何通过 TiUP 命令、<a href=\\"/dashboard/dashboard-intro.html\\" target=\\"_blank\\">TiDB Dashboard</a> 和 Grafana 检查集群状态，以及如何登录 TiDB 数据库执行简单的 SQL 操作。</p>\\n<h2>通过 TiUP 检查集群状态</h2>\\n<p>检查集群状态的命令是 <code>tiup cluster display &lt;cluster-name&gt;</code>，例如：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>tiup cluster display tidb-test\\n</code></pre></div>"}');export{B as comp,E as data};