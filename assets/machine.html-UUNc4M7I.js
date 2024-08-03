import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,f as n}from"./app-C7nDDXNs.js";const s={},i=n(`<h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu"><span>CPU</span></a></h2><h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存"><span>内存</span></a></h2><h3 id="获取内存插槽情况" tabindex="-1"><a class="header-anchor" href="#获取内存插槽情况"><span>获取内存插槽情况</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode<span class="token operator">|</span><span class="token function">grep</span>  <span class="token parameter variable">-P</span>  <span class="token parameter variable">-A5</span>  <span class="token string">&quot;Memory\\s+Device&quot;</span><span class="token operator">|</span><span class="token function">grep</span> Size<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> Range
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取最大内存支持容量" tabindex="-1"><a class="header-anchor" href="#获取最大内存支持容量"><span>获取最大内存支持容量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token string">&#39;Maximum\\s+Capacity&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>部分发行版使用<code>smbiosDump</code>命令查询</p></div><h2 id="磁盘" tabindex="-1"><a class="header-anchor" href="#磁盘"><span>磁盘</span></a></h2>`,8),o=[i];function r(p,c){return a(),t("div",null,o)}const h=e(s,[["render",r],["__file","machine.html.vue"]]),m=JSON.parse('{"path":"/guide/os/linux/administration/machine.html","title":"硬件信息","lang":"zh-CN","frontmatter":{"title":"硬件信息","description":"CPU 内存 获取内存插槽情况 获取最大内存支持容量 提示 部分发行版使用smbiosDump命令查询 磁盘","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/os/linux/administration/machine.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"硬件信息"}],["meta",{"property":"og:description","content":"CPU 内存 获取内存插槽情况 获取最大内存支持容量 提示 部分发行版使用smbiosDump命令查询 磁盘"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"硬件信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":2,"title":"内存","slug":"内存","link":"#内存","children":[{"level":3,"title":"获取内存插槽情况","slug":"获取内存插槽情况","link":"#获取内存插槽情况","children":[]},{"level":3,"title":"获取最大内存支持容量","slug":"获取最大内存支持容量","link":"#获取最大内存支持容量","children":[]}]},{"level":2,"title":"磁盘","slug":"磁盘","link":"#磁盘","children":[]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"guide/os/linux/administration/machine.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>CPU</h2>\\n<h2>内存</h2>\\n<h3>获取内存插槽情况</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>dmidecode<span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span>  <span class=\\"token parameter variable\\">-P</span>  <span class=\\"token parameter variable\\">-A5</span>  <span class=\\"token string\\">\\"Memory\\\\s+Device\\"</span><span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span> Size<span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-v</span> Range\\n</code></pre></div>"}');export{h as comp,m as data};
