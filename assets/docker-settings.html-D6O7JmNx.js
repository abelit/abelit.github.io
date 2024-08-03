import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as t}from"./app-C7nDDXNs.js";const i={},a=t(`<h2 id="设置容器默认ip地址段" tabindex="-1"><a class="header-anchor" href="#设置容器默认ip地址段"><span>设置容器默认IP地址段</span></a></h2><p>通过<code>default-address-pools</code>选项设置Docker容器默认使用地址段。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop docker.socket
systemctl stop <span class="token function">docker</span>

<span class="token function">ip</span> <span class="token function">link</span> delete docker0

<span class="token comment"># ip link add docker0 type bridge</span>
<span class="token comment"># ip addr add 172.20.0.0/16 dev docker0</span>
<span class="token comment"># ip link set docker0 up</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/docker/daemon.json <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
{
    &quot;runtimes&quot;: {
        &quot;nvidia&quot;: {
            &quot;args&quot;: [],
            &quot;path&quot;: &quot;nvidia-container-runtime&quot;
        }
    },
    &quot;default-address-pools&quot;: [{
          &quot;base&quot;: &quot;172.100.0.0/16&quot;,
          &quot;size&quot;: 24
    }],
    &quot;default-ulimits&quot;: {
        &quot;nofile&quot;: {
            &quot;Hard&quot;: 64000,
            &quot;Name&quot;: &quot;nofile&quot;,
            &quot;Soft&quot;: 64000
        }
    }
}
EOF</span>

systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置docker资源使用限制" tabindex="-1"><a class="header-anchor" href="#设置docker资源使用限制"><span>设置Docker资源使用限制</span></a></h2><p>通过<code>default-ulimits</code>选项限制Docker使用资源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/docker/daemon.json <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://lpmhaf33.mirror.aliyuncs.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;,
    &quot;https://hub-mirror.c.163.com&quot;,
    &quot;https://mirror.baidubce.com&quot;,
    &quot;https://registry.hub.docker.com&quot;
  ],
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;10m&quot;,
    &quot;max-file&quot;: &quot;3&quot;
  },
  &quot;storage-driver&quot;: &quot;overlay2&quot;,
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;default-ulimits&quot;: {
    &quot;nofile&quot;: {
      &quot;Hard&quot;: 64000,
      &quot;Name&quot;: &quot;nofile&quot;,
      &quot;Soft&quot;: 6400
    }
  }
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速"><span>镜像加速</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://lpmhaf33.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[a];function d(l,c){return n(),s("div",null,o)}const p=e(i,[["render",d],["__file","docker-settings.html.vue"]]),m=JSON.parse(`{"path":"/guide/cloudnative/docker/docker-settings.html","title":"Docker设置","lang":"zh-CN","frontmatter":{"title":"Docker设置","description":"设置容器默认IP地址段 通过default-address-pools选项设置Docker容器默认使用地址段。 设置Docker资源使用限制 通过default-ulimits选项限制Docker使用资源 镜像加速","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/docker/docker-settings.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Docker设置"}],["meta",{"property":"og:description","content":"设置容器默认IP地址段 通过default-address-pools选项设置Docker容器默认使用地址段。 设置Docker资源使用限制 通过default-ulimits选项限制Docker使用资源 镜像加速"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker设置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"设置容器默认IP地址段","slug":"设置容器默认ip地址段","link":"#设置容器默认ip地址段","children":[]},{"level":2,"title":"设置Docker资源使用限制","slug":"设置docker资源使用限制","link":"#设置docker资源使用限制","children":[]},{"level":2,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.6,"words":181},"filePathRelative":"guide/cloudnative/docker/docker-settings.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>设置容器默认IP地址段</h2>\\n<p>通过<code>default-address-pools</code>选项设置Docker容器默认使用地址段。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>systemctl stop docker.socket\\nsystemctl stop <span class=\\"token function\\">docker</span>\\n\\n<span class=\\"token function\\">ip</span> <span class=\\"token function\\">link</span> delete docker0\\n\\n<span class=\\"token comment\\"># ip link add docker0 type bridge</span>\\n<span class=\\"token comment\\"># ip addr add 172.20.0.0/16 dev docker0</span>\\n<span class=\\"token comment\\"># ip link set docker0 up</span>\\n\\n<span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&gt;</span>/etc/docker/daemon.json <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">'EOF'\\n{\\n    \\"runtimes\\": {\\n        \\"nvidia\\": {\\n            \\"args\\": [],\\n            \\"path\\": \\"nvidia-container-runtime\\"\\n        }\\n    },\\n    \\"default-address-pools\\": [{\\n          \\"base\\": \\"172.100.0.0/16\\",\\n          \\"size\\": 24\\n    }],\\n    \\"default-ulimits\\": {\\n        \\"nofile\\": {\\n            \\"Hard\\": 64000,\\n            \\"Name\\": \\"nofile\\",\\n            \\"Soft\\": 64000\\n        }\\n    }\\n}\\nEOF</span>\\n\\nsystemctl start <span class=\\"token function\\">docker</span>\\n</code></pre></div>"}`);export{p as comp,m as data};
