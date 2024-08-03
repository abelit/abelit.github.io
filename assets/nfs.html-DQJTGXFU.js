import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,f as s}from"./app-C7nDDXNs.js";const t={},i=s(`<h2 id="nfs安装部署" tabindex="-1"><a class="header-anchor" href="#nfs安装部署"><span>NFS安装部署</span></a></h2><h3 id="_1-nfs-server" tabindex="-1"><a class="header-anchor" href="#_1-nfs-server"><span>1.NFS Server</span></a></h3><ul><li>Install nfs and rpcbind</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nfs-utils rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Config</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># [root@nfs ~]# more /etc/exports</span>
/data <span class="token number">10.10</span>.12.123/24<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
/data <span class="token number">10.10</span>.12.124/24<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
/data <span class="token number">10.10</span>.12.125/24<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Start NFS Service</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nfs
systemctl start nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Config Firewall</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-port<span class="token operator">=</span><span class="token number">111</span>/tcp <span class="token parameter variable">--zone</span><span class="token operator">=</span>public <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">2049</span>/tcp <span class="token parameter variable">--zone</span><span class="token operator">=</span>public <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-nfs-client" tabindex="-1"><a class="header-anchor" href="#_2-nfs-client"><span>2.NFS Client</span></a></h3><ul><li>Install nfs and rpcbind</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nfs-utils rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Mount NFS Path</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mount -t nfs 10.10.12.126:/data /NFS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Add mount item in <code>/etc/fstab</code></li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[root@hadoop124 ~]# cat /etc/fstab 

#
# /etc/fstab
# Created by anaconda on Wed Jun 15 09:33:54 2022
#
# Accessible filesystems, by reference, are maintained under &#39;/dev/disk&#39;
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/centos-root /                       xfs     defaults        0 0
UUID=34ee554d-ac89-41e8-848b-fdac1d9a13f5 /boot                   xfs     defaults        0 0
/dev/mapper/centos-home /home                   xfs     defaults        0 0
/dev/mapper/centos-swap swap                    swap    defaults        0 0
/dev/vg-data/lv-data /data/                     ext4    defaults        0 0
10.10.12.126:/data /NFS nfs4 (rw,relatime,vers=4.1,rsize=1048576,wsize=1048576,namlen=255,hard,proto=tcp,timeo=600,retrans=2,sec=sys,clientaddr=10.10.12.124,local_lock=none,addr=10.10.12.126)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-nfs-parameter" tabindex="-1"><a class="header-anchor" href="#_3-nfs-parameter"><span>3.NFS Parameter</span></a></h3><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>rw                # 客户端对共享的目录可读写
ro                # 客户端对共享的目录只读不可写
sync              # 同步模式，也就是把内存的数据实时写入硬盘，但这样会降低磁盘效率
async             # 非同步模式，也就是每隔一段时间才会把内存的数据写入硬盘，能保证磁盘效率，但当异常宕机/断电时，会丢失内存里的数据
no_root_squash    # 客户端挂载NFS共享目录后，客户端上的root用户不受这些挂载选项的限制，权限很大
root_squash       # 跟no_root_squash相反，客户端上的root用户受到这些挂载选项的限制，被当成普通用户
all_squash        # 客户端上的所有用户在使用NFS共享目录时都被限定为一个普通用户
anonuid           # 上面的几个squash用于把客户端的用户限定为普通用户，而anouid用于限定这个普通用户的uid，这个uid与服务端的/etc/passwd文件相对应，如：anouid=1000
                  # 比如我客户端用xiaoming这个用户去创建文件，那么服务端同步这个文件的时候，文件的属主会变成服务端的uid(1000)所对应的用户
anongid           # 同上，用于限定这个普通用户的gid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[i];function d(r,c){return e(),a("div",null,l)}const p=n(t,[["render",d],["__file","nfs.html.vue"]]),m=JSON.parse('{"path":"/guide/os/linux/administration/nfs.html","title":"NFS","lang":"zh-CN","frontmatter":{"title":"NFS","description":"NFS安装部署 1.NFS Server Install nfs and rpcbind Config Start NFS Service Config Firewall 2.NFS Client Install nfs and rpcbind Mount NFS Path Add mount item in /etc/fstab 3.NFS Para...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/os/linux/administration/nfs.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"NFS"}],["meta",{"property":"og:description","content":"NFS安装部署 1.NFS Server Install nfs and rpcbind Config Start NFS Service Config Firewall 2.NFS Client Install nfs and rpcbind Mount NFS Path Add mount item in /etc/fstab 3.NFS Para..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NFS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"NFS安装部署","slug":"nfs安装部署","link":"#nfs安装部署","children":[{"level":3,"title":"1.NFS Server","slug":"_1-nfs-server","link":"#_1-nfs-server","children":[]},{"level":3,"title":"2.NFS Client","slug":"_2-nfs-client","link":"#_2-nfs-client","children":[]},{"level":3,"title":"3.NFS Parameter","slug":"_3-nfs-parameter","link":"#_3-nfs-parameter","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"guide/os/linux/administration/nfs.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>NFS安装部署</h2>\\n<h3>1.NFS Server</h3>\\n<ul>\\n<li>Install nfs and rpcbind</li>\\n</ul>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> nfs-utils rpcbind\\n</code></pre></div><ul>\\n<li>Config</li>\\n</ul>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># [root@nfs ~]# more /etc/exports</span>\\n/data <span class=\\"token number\\">10.10</span>.12.123/24<span class=\\"token punctuation\\">(</span>rw,sync,no_root_squash<span class=\\"token punctuation\\">)</span>\\n/data <span class=\\"token number\\">10.10</span>.12.124/24<span class=\\"token punctuation\\">(</span>rw,sync,no_root_squash<span class=\\"token punctuation\\">)</span>\\n/data <span class=\\"token number\\">10.10</span>.12.125/24<span class=\\"token punctuation\\">(</span>rw,sync,no_root_squash<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}');export{p as comp,m as data};
