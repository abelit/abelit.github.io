import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,f as n}from"./app-C7nDDXNs.js";const t={},p=n(`<h2 id="iops" tabindex="-1"><a class="header-anchor" href="#iops"><span>IOPS</span></a></h2><h3 id="fio-flexible-i-o" tabindex="-1"><a class="header-anchor" href="#fio-flexible-i-o"><span>FIO (Flexible I/O)</span></a></h3><h4 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h4><p>存储性能测试。IOPS（Input/Output Operations per second）是数据存储系统每秒执行的输入输出操作数（它可以是单个磁盘、RAID阵列或外部存储设备中的LUN）。通常，IOPS 是指可以从介质读取或写入介质的块数。</p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> fio <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试iops" tabindex="-1"><a class="header-anchor" href="#测试iops"><span>测试IOPS</span></a></h4><ul><li>随机读写操作测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>fio <span class="token parameter variable">--randrepeat</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--ioengine</span><span class="token operator">=</span>libaio <span class="token parameter variable">--direct</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--gtod_reduce</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>fiotest <span class="token parameter variable">--filename</span><span class="token operator">=</span>testfio <span class="token parameter variable">--bs</span><span class="token operator">=</span>4k <span class="token parameter variable">--iodepth</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">--size</span><span class="token operator">=</span>8G <span class="token parameter variable">--readwrite</span><span class="token operator">=</span>randrw <span class="token parameter variable">--rwmixread</span><span class="token operator">=</span><span class="token number">75</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>随机读操作测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>fio <span class="token parameter variable">--randrepeat</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--ioengine</span><span class="token operator">=</span>libaio <span class="token parameter variable">--direct</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--gtod_reduce</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>fiotest <span class="token parameter variable">--filename</span><span class="token operator">=</span>testfio <span class="token parameter variable">--bs</span><span class="token operator">=</span>4k <span class="token parameter variable">--iodepth</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">--size</span><span class="token operator">=</span>8G <span class="token parameter variable">--readwrite</span><span class="token operator">=</span>randread
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>随机写操作测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>fio <span class="token parameter variable">--randrepeat</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--ioengine</span><span class="token operator">=</span>libaio <span class="token parameter variable">--direct</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--gtod_reduce</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>fiotest <span class="token parameter variable">--filename</span><span class="token operator">=</span>fiotest <span class="token parameter variable">--bs</span><span class="token operator">=</span>4k <span class="token parameter variable">--iodepth</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">--size</span><span class="token operator">=</span>8G <span class="token parameter variable">--readwrite</span><span class="token operator">=</span>randwrite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="io-ping" tabindex="-1"><a class="header-anchor" href="#io-ping"><span>IO Ping</span></a></h3><h4 id="用途-1" tabindex="-1"><a class="header-anchor" href="#用途-1"><span>用途</span></a></h4><p>磁盘延迟测试。延迟是一种输入/输出请求延迟，它决定了访问存储的时间（以毫秒为单位）。延迟越高，您的应用程序必须等待的时间越长，直到它从您的磁盘获取数据。典型数据存储系统的延迟值超过 20 毫秒被认为很差。</p><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> ioping <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试延迟" tabindex="-1"><a class="header-anchor" href="#测试延迟"><span>测试延迟</span></a></h4><ul><li>延迟测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ioping <span class="token parameter variable">-c</span> <span class="token number">20</span> /tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>-c: 测试请求数量</p></blockquote>`,22),r=[p];function l(i,o){return e(),s("div",null,r)}const m=a(t,[["render",l],["__file","io.html.vue"]]),b=JSON.parse('{"path":"/guide/os/linux/administration/io.html","title":"IO","lang":"zh-CN","frontmatter":{"title":"IO","description":"IOPS FIO (Flexible I/O) 用途 存储性能测试。IOPS（Input/Output Operations per second）是数据存储系统每秒执行的输入输出操作数（它可以是单个磁盘、RAID阵列或外部存储设备中的LUN）。通常，IOPS 是指可以从介质读取或写入介质的块数。 安装 测试IOPS 随机读写操作测试 随机读操作测试 ...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/os/linux/administration/io.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"IO"}],["meta",{"property":"og:description","content":"IOPS FIO (Flexible I/O) 用途 存储性能测试。IOPS（Input/Output Operations per second）是数据存储系统每秒执行的输入输出操作数（它可以是单个磁盘、RAID阵列或外部存储设备中的LUN）。通常，IOPS 是指可以从介质读取或写入介质的块数。 安装 测试IOPS 随机读写操作测试 随机读操作测试 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"IOPS","slug":"iops","link":"#iops","children":[{"level":3,"title":"FIO (Flexible I/O)","slug":"fio-flexible-i-o","link":"#fio-flexible-i-o","children":[]},{"level":3,"title":"IO Ping","slug":"io-ping","link":"#io-ping","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"guide/os/linux/administration/io.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>IOPS</h2>\\n<h3>FIO (Flexible I/O)</h3>\\n<h4>用途</h4>\\n<p>存储性能测试。IOPS（Input/Output Operations per second）是数据存储系统每秒执行的输入输出操作数（它可以是单个磁盘、RAID阵列或外部存储设备中的LUN）。通常，IOPS 是指可以从介质读取或写入介质的块数。</p>\\n<h4>安装</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> epel-release <span class=\\"token parameter variable\\">-y</span>\\nyum <span class=\\"token function\\">install</span> fio <span class=\\"token parameter variable\\">-y</span>\\n</code></pre></div>"}');export{m as comp,b as data};
