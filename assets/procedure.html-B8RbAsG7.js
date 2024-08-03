import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,f as n}from"./app-C7nDDXNs.js";const t={},o=n(`<h2 id="存储过程查询" tabindex="-1"><a class="header-anchor" href="#存储过程查询"><span>存储过程查询</span></a></h2><ul><li>查询存储过程中包含的内容</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">distinct</span> name <span class="token keyword">from</span> dba_source <span class="token keyword">where</span> owner<span class="token operator">=</span><span class="token string">&#39;BDPF&#39;</span> <span class="token operator">and</span> upper<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">)</span> <span class="token operator">like</span> <span class="token string">&#39;%SET%PREAMOUNT%&#39;</span>
<span class="token keyword">intersect</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> name <span class="token keyword">from</span> dba_source <span class="token keyword">where</span> owner<span class="token operator">=</span><span class="token string">&#39;BDPF&#39;</span> <span class="token operator">and</span> upper<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">)</span> <span class="token operator">like</span> <span class="token string">&#39;%GL_CUSTOM%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function r(c,l){return a(),e("div",null,p)}const k=s(t,[["render",r],["__file","procedure.html.vue"]]),u=JSON.parse(`{"path":"/guide/database/oracle/sql/procedure.html","title":"存储过程","lang":"zh-CN","frontmatter":{"title":"存储过程","description":"存储过程查询 查询存储过程中包含的内容","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/sql/procedure.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"存储过程"}],["meta",{"property":"og:description","content":"存储过程查询 查询存储过程中包含的内容"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"存储过程查询","slug":"存储过程查询","link":"#存储过程查询","children":[]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.17,"words":52},"filePathRelative":"guide/database/oracle/sql/procedure.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>存储过程查询</h2>\\n<ul>\\n<li>查询存储过程中包含的内容</li>\\n</ul>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">distinct</span> name <span class=\\"token keyword\\">from</span> dba_source <span class=\\"token keyword\\">where</span> owner<span class=\\"token operator\\">=</span><span class=\\"token string\\">'BDPF'</span> <span class=\\"token operator\\">and</span> upper<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">text</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">like</span> <span class=\\"token string\\">'%SET%PREAMOUNT%'</span>\\n<span class=\\"token keyword\\">intersect</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">distinct</span> name <span class=\\"token keyword\\">from</span> dba_source <span class=\\"token keyword\\">where</span> owner<span class=\\"token operator\\">=</span><span class=\\"token string\\">'BDPF'</span> <span class=\\"token operator\\">and</span> upper<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">text</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">like</span> <span class=\\"token string\\">'%GL_CUSTOM%'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{k as comp,u as data};
