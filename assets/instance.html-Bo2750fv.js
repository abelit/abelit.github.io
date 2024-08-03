import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as p,b as r,w as n,f as d,d as a,a as s}from"./app-C7nDDXNs.js";const u={},k=d(`<h2 id="实例名称" tabindex="-1"><a class="header-anchor" href="#实例名称"><span>实例名称</span></a></h2><p>一个数据库至少有一个实例。一个实例由称为系统全局区 (SGA) 的内存区域和 Oracle 后台进程组成。实例的内存和进程有效地管理关联数据库的数据并为数据库用户提供服务。实例由实例名称标识,实例名称默认为数据库实例的 Oracle 系统标识符 (SID)。</p><h3 id="修改实例名称" tabindex="-1"><a class="header-anchor" href="#修改实例名称"><span>修改实例名称</span></a></h3><p>修改oracle实例的名称相对比较简单，只需要修改环境变量ORACLE_ID，口令文件及参数文件的名称即可。</p><ol><li>关闭数据库</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">shutdown</span> immediate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改环境变量<code>ORACLE_SID</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>neworcl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>修改口令文件和参数文件的名称</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mv</span> <span class="token variable">$ORACLE_HOME</span>/dbs/orapworcl <span class="token variable">$ORACLE_HOME</span>/dbs/orapwneworcl
<span class="token function">mv</span> <span class="token variable">$ORACLE_HOME</span>/dbs/spfileorcl.ora <span class="token variable">$ORACLE_HOME</span>/dbs/spfileneworcl.ora
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动数据库</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>startup<span class="token punctuation">;</span>

<span class="token keyword">show</span> parameter name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏参数" tabindex="-1"><a class="header-anchor" href="#隐藏参数"><span>隐藏参数</span></a></h2><h3 id="隐藏参数查询" tabindex="-1"><a class="header-anchor" href="#隐藏参数查询"><span>隐藏参数查询</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
COL parameter FORMAT A50
COL <span class="token string">&quot;session value&quot;</span> FORMAT A20
COL <span class="token string">&quot;instance value&quot;</span> FORMAT A20

<span class="token keyword">SELECT</span>
    x<span class="token punctuation">.</span>ksppinm  <span class="token string">&quot;Parameter&quot;</span><span class="token punctuation">,</span>
    y<span class="token punctuation">.</span>ksppstvl <span class="token string">&quot;Session Value&quot;</span><span class="token punctuation">,</span>
    z<span class="token punctuation">.</span>ksppstvl <span class="token string">&quot;Instance Value&quot;</span>
<span class="token keyword">FROM</span>
    x$ksppi  x<span class="token punctuation">,</span>
    x$ksppcv y<span class="token punctuation">,</span>
    x$ksppsv z
<span class="token keyword">WHERE</span>
    x<span class="token punctuation">.</span>indx <span class="token operator">=</span> y<span class="token punctuation">.</span>indx
    <span class="token operator">AND</span> x<span class="token punctuation">.</span>indx <span class="token operator">=</span> z<span class="token punctuation">.</span>indx
    <span class="token operator">AND</span> x<span class="token punctuation">.</span>ksppinm <span class="token operator">LIKE</span> <span class="token string">&#39;/_optimizer_distinct_agg_transform%&#39;</span> <span class="token keyword">ESCAPE</span> <span class="token string">&#39;/&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    x<span class="token punctuation">.</span>ksppinm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏参数设置" tabindex="-1"><a class="header-anchor" href="#隐藏参数设置"><span>隐藏参数设置</span></a></h3>`,16),m=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"ALTER"),a(" system "),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_complex_view_merging"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token keyword"},"ALTER"),a(" system "),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_replace_virtual_columns"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token keyword"},"ALTER"),a(" system "),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_optimizer_distinct_agg_transform"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"ALTER"),a(),s("span",{class:"token keyword"},"SESSION"),a(),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_complex_view_merging"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token keyword"},"ALTER"),a(),s("span",{class:"token keyword"},"SESSION"),a(),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_replace_virtual_columns"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token keyword"},"ALTER"),a(),s("span",{class:"token keyword"},"SESSION"),a(),s("span",{class:"token keyword"},"SET"),a(),s("span",{class:"token string"},'"_optimizer_distinct_agg_transform"'),s("span",{class:"token operator"},"="),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},";"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function b(g,h){const l=o("CodeTabs");return c(),p("div",null,[k,r(l,{id:"54",data:[{id:"实例级"},{id:"会话级"}],active:0},{title0:n(({value:e,isActive:t})=>[a("实例级")]),title1:n(({value:e,isActive:t})=>[a("会话级")]),tab0:n(({value:e,isActive:t})=>[m]),tab1:n(({value:e,isActive:t})=>[v]),_:1})])}const E=i(u,[["render",b],["__file","instance.html.vue"]]),w=JSON.parse('{"path":"/guide/database/oracle/instance.html","title":"实例","lang":"zh-CN","frontmatter":{"title":"实例","description":"实例名称 一个数据库至少有一个实例。一个实例由称为系统全局区 (SGA) 的内存区域和 Oracle 后台进程组成。实例的内存和进程有效地管理关联数据库的数据并为数据库用户提供服务。实例由实例名称标识,实例名称默认为数据库实例的 Oracle 系统标识符 (SID)。 修改实例名称 修改oracle实例的名称相对比较简单，只需要修改环境变量ORACLE...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/instance.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"实例"}],["meta",{"property":"og:description","content":"实例名称 一个数据库至少有一个实例。一个实例由称为系统全局区 (SGA) 的内存区域和 Oracle 后台进程组成。实例的内存和进程有效地管理关联数据库的数据并为数据库用户提供服务。实例由实例名称标识,实例名称默认为数据库实例的 Oracle 系统标识符 (SID)。 修改实例名称 修改oracle实例的名称相对比较简单，只需要修改环境变量ORACLE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"实例名称","slug":"实例名称","link":"#实例名称","children":[{"level":3,"title":"修改实例名称","slug":"修改实例名称","link":"#修改实例名称","children":[]}]},{"level":2,"title":"隐藏参数","slug":"隐藏参数","link":"#隐藏参数","children":[{"level":3,"title":"隐藏参数查询","slug":"隐藏参数查询","link":"#隐藏参数查询","children":[]},{"level":3,"title":"隐藏参数设置","slug":"隐藏参数设置","link":"#隐藏参数设置","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"guide/database/oracle/instance.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>实例名称</h2>\\n<p>一个数据库至少有一个实例。一个实例由称为系统全局区 (SGA) 的内存区域和 Oracle 后台进程组成。实例的内存和进程有效地管理关联数据库的数据并为数据库用户提供服务。实例由实例名称标识,实例名称默认为数据库实例的 Oracle 系统标识符 (SID)。</p>\\n<h3>修改实例名称</h3>\\n<p>修改oracle实例的名称相对比较简单，只需要修改环境变量ORACLE_ID，口令文件及参数文件的名称即可。</p>\\n<ol>\\n<li>关闭数据库</li>\\n</ol>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">shutdown</span> immediate<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{E as comp,w as data};