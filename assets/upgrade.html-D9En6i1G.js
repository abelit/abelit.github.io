import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c,b as p,w as n,f as m,d as a,a as e}from"./app-C7nDDXNs.js";const u={},d=m('<h2 id="内核升级" tabindex="-1"><a class="header-anchor" href="#内核升级"><span>内核升级</span></a></h2><h3 id="centos内核升级" tabindex="-1"><a class="header-anchor" href="#centos内核升级"><span>CentOS内核升级</span></a></h3><h4 id="通过预编译rpm包进行升级" tabindex="-1"><a class="header-anchor" href="#通过预编译rpm包进行升级"><span>通过预编译RPM包进行升级</span></a></h4>',3),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Ubuntu忽略，CentOS执行"),a(`
 
`),e("span",{class:"token comment"},"# 安装最新的内核"),a(`
`),e("span",{class:"token comment"},"# 我这里选择的是稳定版kernel-ml   如需更新长期维护版本kernel-lt  "),a(`
yum `),e("span",{class:"token parameter variable"},"-y"),a(),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),a("elrepo-kernel  "),e("span",{class:"token function"},"install"),a(`  kernel-ml
 
`),e("span",{class:"token comment"},"# 查看已安装那些内核"),a(`
`),e("span",{class:"token function"},"rpm"),a(),e("span",{class:"token parameter variable"},"-qa"),a(),e("span",{class:"token operator"},"|"),a(),e("span",{class:"token function"},"grep"),a(` kernel
 
`),e("span",{class:"token comment"},"# 查看默认内核"),a(`
grubby --default-kernel
 
`),e("span",{class:"token comment"},"# 若不是最新的使用命令设置"),a(`
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),a(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),a(),e("span",{class:"token function"},"grep"),a(" elrepo"),e("span",{class:"token variable"},")")]),a(`
 
`),e("span",{class:"token comment"},"# 重启生效"),a(`
`),e("span",{class:"token function"},"reboot"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 离线版本 "),a(`
yum `),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-y"),a(` /root/cby/kernel-lt-*-1.el7.elrepo.x86_64.rpm 
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),a(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),a(),e("span",{class:"token function"},"grep"),a(" elrepo"),e("span",{class:"token variable"},")")]),a(` 
grubby --default-kernel 
`),e("span",{class:"token function"},"reboot"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# v7 整合命令为："),a(`
yum `),e("span",{class:"token function"},"install"),a(" https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm "),e("span",{class:"token parameter variable"},"-y"),a(` 
`),e("span",{class:"token function"},"sed"),a(),e("span",{class:"token parameter variable"},"-i"),a(),e("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),a(` /etc/yum.repos.d/elrepo.repo 
`),e("span",{class:"token function"},"sed"),a(),e("span",{class:"token parameter variable"},"-i"),a(),e("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),a(` /etc/yum.repos.d/elrepo.repo 
yum  `),e("span",{class:"token parameter variable"},"--disablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"*"'),a("  "),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"elrepo-kernel"'),a("  list  available "),e("span",{class:"token parameter variable"},"-y"),a(` 
yum  `),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),a("elrepo-kernel  "),e("span",{class:"token function"},"install"),a("  kernel-lt "),e("span",{class:"token parameter variable"},"-y"),a(` 
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),a(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),a(),e("span",{class:"token function"},"grep"),a(" elrepo"),e("span",{class:"token variable"},")")]),a(` 
grubby --default-kernel 
`),e("span",{class:"token function"},"reboot"),a(` 
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# v8 整合命令为："),a(`
yum `),e("span",{class:"token function"},"install"),a(" https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm "),e("span",{class:"token parameter variable"},"-y"),a(` 
`),e("span",{class:"token function"},"sed"),a(),e("span",{class:"token parameter variable"},"-i"),a(),e("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),a(` /etc/yum.repos.d/elrepo.repo
`),e("span",{class:"token function"},"sed"),a(),e("span",{class:"token parameter variable"},"-i"),a(),e("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),a(` /etc/yum.repos.d/elrepo.repo
yum  `),e("span",{class:"token parameter variable"},"--disablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"*"'),a("  "),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"elrepo-kernel"'),a("  list  available "),e("span",{class:"token parameter variable"},"-y"),a(`
yum  `),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),a("elrepo-kernel  "),e("span",{class:"token function"},"install"),a(" kernel-lt "),e("span",{class:"token parameter variable"},"-y"),a(` 
grubby --default-kernel
`),e("span",{class:"token function"},"reboot"),a(` 
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function g(f,y){const l=i("CodeTabs");return o(),c("div",null,[d,p(l,{id:"9",data:[{id:"通用"},{id:"离线"},{id:"CentOS 7.x"},{id:"CentOS 8.x"}],active:0},{title0:n(({value:s,isActive:t})=>[a("通用")]),title1:n(({value:s,isActive:t})=>[a("离线")]),title2:n(({value:s,isActive:t})=>[a("CentOS 7.x")]),title3:n(({value:s,isActive:t})=>[a("CentOS 8.x")]),tab0:n(({value:s,isActive:t})=>[b]),tab1:n(({value:s,isActive:t})=>[v]),tab2:n(({value:s,isActive:t})=>[k]),tab3:n(({value:s,isActive:t})=>[h]),_:1})])}const C=r(u,[["render",g],["__file","upgrade.html.vue"]]),S=JSON.parse('{"path":"/guide/os/linux/administration/upgrade.html","title":"更新与升级","lang":"zh-CN","frontmatter":{"title":"更新与升级","description":"内核升级 CentOS内核升级 通过预编译RPM包进行升级","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/os/linux/administration/upgrade.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"更新与升级"}],["meta",{"property":"og:description","content":"内核升级 CentOS内核升级 通过预编译RPM包进行升级"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更新与升级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"内核升级","slug":"内核升级","link":"#内核升级","children":[{"level":3,"title":"CentOS内核升级","slug":"centos内核升级","link":"#centos内核升级","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"guide/os/linux/administration/upgrade.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>内核升级</h2>\\n<h3>CentOS内核升级</h3>\\n<h4>通过预编译RPM包进行升级</h4>\\n\\n"}');export{C as comp,S as data};
