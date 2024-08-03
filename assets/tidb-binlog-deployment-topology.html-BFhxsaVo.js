import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as s,c as g,a as t,d as e,b as l,w as o,f as a}from"./app-C7nDDXNs.js";const c={},p=t("h1",{id:"tidb-binlog-部署拓扑",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tidb-binlog-部署拓扑"},[t("span",null,"TiDB Binlog 部署拓扑")])],-1),b=a('<h2 id="拓扑信息" tabindex="-1"><a class="header-anchor" href="#拓扑信息"><span>拓扑信息</span></a></h2><table><thead><tr><th style="text-align:left;">实例</th><th style="text-align:left;">个数</th><th style="text-align:left;">物理机配置</th><th style="text-align:left;">IP</th><th style="text-align:left;">配置</th></tr></thead><tbody><tr><td style="text-align:left;">TiDB</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32 GB</td><td style="text-align:left;">10.0.1.1 <br> 10.0.1.2 <br> 10.0.1.3</td><td style="text-align:left;">默认端口配置；<br>开启 enable_binlog； <br> 开启 ignore-error</td></tr><tr><td style="text-align:left;">PD</td><td style="text-align:left;">3</td><td style="text-align:left;">4 VCore 8 GB</td><td style="text-align:left;">10.0.1.4 <br> 10.0.1.5 <br> 10.0.1.6</td><td style="text-align:left;">默认端口配置</td></tr><tr><td style="text-align:left;">TiKV</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32 GB</td><td style="text-align:left;">10.0.1.7 <br> 10.0.1.8 <br> 10.0.1.9</td><td style="text-align:left;">默认端口配置</td></tr><tr><td style="text-align:left;">Pump</td><td style="text-align:left;">3</td><td style="text-align:left;">8 VCore 16GB</td><td style="text-align:left;">10.0.1.1 <br> 10.0.1.7 <br> 10.0.1.8</td><td style="text-align:left;">默认端口配置； <br> 设置 GC 时间 7 天</td></tr><tr><td style="text-align:left;">Drainer</td><td style="text-align:left;">1</td><td style="text-align:left;">8 VCore 16GB</td><td style="text-align:left;">10.0.1.12</td><td style="text-align:left;">默认端口配置；<br> 设置默认初始化 commitTS -1 为最近的时间戳 <br> 配置下游目标 TiDB 10.0.1.12:4000</td></tr></tbody></table><h3 id="拓扑模版" tabindex="-1"><a class="header-anchor" href="#拓扑模版"><span>拓扑模版</span></a></h3>',3),y={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/simple-tidb-binlog.yaml",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/simple-file-binlog.yaml",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/complex-tidb-binlog.yaml",target:"_blank",rel:"noopener noreferrer"},m=t("h3",{id:"关键参数介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#关键参数介绍"},[t("span",null,"关键参数介绍")])],-1),B=t("p",null,"拓扑配置模版的关键参数如下：",-1),x=a("<li><p><code>server_configs.tidb.binlog.enable: true</code></p><p>开启 TiDB Binlog 服务，默认为 false。</p></li><li><p><code>server_configs.tidb.binlog.ignore-error: true</code></p><p>高可用场景建议开启，如果设置为 true，发生错误时，TiDB 会停止写入 TiDB Binlog，并且在监控项 <code>tidb_server_critical_error_total</code> 上计数加 1；如果设置为 false，一旦写入 TiDB Binlog 失败，会停止整个 TiDB 的服务。</p></li><li><p><code>drainer_servers.config.syncer.db-type</code></p><p>TiDB Binlog 的下游类型，目前支持 <code>mysql</code>、<code>tidb</code>、<code>kafka</code> 和 <code>file</code>。</p></li>",3),u=t("p",null,[t("code",null,"drainer_servers.config.syncer.to")],-1),_=t("code",null,"db-type",-1),T=t("blockquote",null,[t("p",null,[t("strong",null,"注意：")]),t("ul",null,[t("li",null,"编辑配置文件模版时，如无需自定义端口或者目录，仅修改 IP 即可。"),t("li",null,[e("无需手动创建配置文件中的 "),t("code",null,"tidb"),e(" 用户，TiUP cluster 组件会在目标主机上自动创建该用户。可以自定义用户，也可以和中控机的用户保持一致。")]),t("li",null,"如果部署目录配置为相对路径，会部署在用户的 Home 目录下。")])],-1);function D(k,v){const n=d("RouteLink"),i=d("ExternalLinkIcon");return s(),g("div",null,[p,t("p",null,[e("本文介绍在部署最小拓扑集群的基础上，同时部署 "),l(n,{to:"/tidb-binlog/tidb-binlog-overview.html"},{default:o(()=>[e("TiDB Binlog")]),_:1}),e("。TiDB Binlog 是目前广泛使用的增量同步组件，可提供准实时备份和同步功能。")]),b,t("p",null,[t("a",y,[e("简单 TiDB Binlog 配置模板（下游为 MySQL）"),l(i)])]),t("p",null,[t("a",f,[e("简单 TiDB Binlog 配置模板（下游为 file）"),l(i)])]),t("p",null,[t("a",h,[e("详细 TiDB Binlog 配置模板"),l(i)])]),t("p",null,[e("以上 TiDB 集群拓扑文件中，详细的配置项说明见"),l(n,{to:"/tiup/tiup-cluster-topology-reference.html"},{default:o(()=>[e("通过 TiUP 部署 TiDB 集群的拓扑文件配置")]),_:1}),e("。")]),m,B,t("ul",null,[x,t("li",null,[u,t("p",null,[e("TiDB Binlog 的下游配置。根据 "),_,e(" 的不同，该选项可配置下游数据库的连接参数、Kafka 的连接参数、文件保存路径。详细说明可参见 "),l(n,{to:"/tidb-binlog/tidb-binlog-configuration-file.html#syncerto"},{default:o(()=>[e("TiDB Binlog 配置说明")]),_:1}),e("。")])])]),T])}const G=r(c,[["render",D],["__file","tidb-binlog-deployment-topology.html.vue"]]),P=JSON.parse('{"path":"/guide/database/tidb/deployments/topology/tidb-binlog-deployment-topology.html","title":"TiDB Binlog 部署拓扑","lang":"zh-CN","frontmatter":{"title":"TiDB Binlog 部署拓扑","description":"TiDB Binlog 部署拓扑 本文介绍在部署最小拓扑集群的基础上，同时部署 。TiDB Binlog 是目前广泛使用的增量同步组件，可提供准实时备份和同步功能。 拓扑信息 拓扑模版 简单 TiDB Binlog 配置模板（下游为 MySQL） 简单 TiDB Binlog 配置模板（下游为 file） 详细 TiDB Binlog 配置模板 以上 ...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/tidb/deployments/topology/tidb-binlog-deployment-topology.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"TiDB Binlog 部署拓扑"}],["meta",{"property":"og:description","content":"TiDB Binlog 部署拓扑 本文介绍在部署最小拓扑集群的基础上，同时部署 。TiDB Binlog 是目前广泛使用的增量同步组件，可提供准实时备份和同步功能。 拓扑信息 拓扑模版 简单 TiDB Binlog 配置模板（下游为 MySQL） 简单 TiDB Binlog 配置模板（下游为 file） 详细 TiDB Binlog 配置模板 以上 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TiDB Binlog 部署拓扑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"拓扑信息","slug":"拓扑信息","link":"#拓扑信息","children":[{"level":3,"title":"拓扑模版","slug":"拓扑模版","link":"#拓扑模版","children":[]},{"level":3,"title":"关键参数介绍","slug":"关键参数介绍","link":"#关键参数介绍","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"guide/database/tidb/deployments/topology/tidb-binlog-deployment-topology.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"\\n<p>本文介绍在部署最小拓扑集群的基础上，同时部署 <a href=\\"/tidb-binlog/tidb-binlog-overview.html\\" target=\\"_blank\\">TiDB Binlog</a>。TiDB Binlog 是目前广泛使用的增量同步组件，可提供准实时备份和同步功能。</p>\\n<h2>拓扑信息</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">实例</th>\\n<th style=\\"text-align:left\\">个数</th>\\n<th style=\\"text-align:left\\">物理机配置</th>\\n<th style=\\"text-align:left\\">IP</th>\\n<th style=\\"text-align:left\\">配置</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">TiDB</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">16 VCore 32 GB</td>\\n<td style=\\"text-align:left\\">10.0.1.1 <br> 10.0.1.2 <br> 10.0.1.3</td>\\n<td style=\\"text-align:left\\">默认端口配置；<br>开启 enable_binlog； <br> 开启 ignore-error</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">PD</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">4 VCore 8 GB</td>\\n<td style=\\"text-align:left\\">10.0.1.4 <br> 10.0.1.5 <br> 10.0.1.6</td>\\n<td style=\\"text-align:left\\">默认端口配置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">TiKV</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">16 VCore 32 GB</td>\\n<td style=\\"text-align:left\\">10.0.1.7 <br> 10.0.1.8 <br> 10.0.1.9</td>\\n<td style=\\"text-align:left\\">默认端口配置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">Pump</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">8 VCore 16GB</td>\\n<td style=\\"text-align:left\\">10.0.1.1 <br> 10.0.1.7 <br> 10.0.1.8</td>\\n<td style=\\"text-align:left\\">默认端口配置； <br> 设置 GC 时间 7 天</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">Drainer</td>\\n<td style=\\"text-align:left\\">1</td>\\n<td style=\\"text-align:left\\">8 VCore 16GB</td>\\n<td style=\\"text-align:left\\">10.0.1.12</td>\\n<td style=\\"text-align:left\\">默认端口配置；<br> 设置默认初始化 commitTS -1 为最近的时间戳 <br> 配置下游目标 TiDB 10.0.1.12:4000</td>\\n</tr>\\n</tbody>\\n</table>"}');export{G as comp,P as data};
