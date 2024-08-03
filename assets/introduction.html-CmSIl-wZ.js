import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as r,a as e,d as t}from"./app-C7nDDXNs.js";const b={},n=e("h2",{id:"zabbix采集数据模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zabbix采集数据模式"},[e("span",null,"Zabbix采集数据模式")])],-1),o=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"被动模式"),t("：被动模式就是由zabbix server向zabbix agent发出指令获取数据， 即zabbixagent被动的去获取数据并返回给zabbix server， zabbix server周期性的向agent 索取数据， 这总模式的最大问题就是会加大zabbix server的工作量， 在数百台服务器的环境下zabbix server不能及时获取到最新数据， 但这也是默认的工作方式。")])]),e("li",null,[e("p",null,[e("strong",null,"主动模式"),t("：主动模式是有zabbix agent主动采集数据并返回给zabbix server， 不再需要zabbix serve进行干预， 因此主动模式在一定程度上可减轻zabbix server的压力。")])])],-1),s=[n,o];function l(c,x){return i(),r("div",null,s)}const z=a(b,[["render",l],["__file","introduction.html.vue"]]),m=JSON.parse('{"path":"/guide/devops/zabbix/introduction.html","title":"Zabbix概念","lang":"zh-CN","frontmatter":{"title":"Zabbix概念","description":"Zabbix采集数据模式 被动模式：被动模式就是由zabbix server向zabbix agent发出指令获取数据， 即zabbixagent被动的去获取数据并返回给zabbix server， zabbix server周期性的向agent 索取数据， 这总模式的最大问题就是会加大zabbix server的工作量， 在数百台服务器的环境下zab...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/devops/zabbix/introduction.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Zabbix概念"}],["meta",{"property":"og:description","content":"Zabbix采集数据模式 被动模式：被动模式就是由zabbix server向zabbix agent发出指令获取数据， 即zabbixagent被动的去获取数据并返回给zabbix server， zabbix server周期性的向agent 索取数据， 这总模式的最大问题就是会加大zabbix server的工作量， 在数百台服务器的环境下zab..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Zabbix概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"Zabbix采集数据模式","slug":"zabbix采集数据模式","link":"#zabbix采集数据模式","children":[]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"guide/devops/zabbix/introduction.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>Zabbix采集数据模式</h2>\\n<ul>\\n<li>\\n<p><strong>被动模式</strong>：被动模式就是由zabbix server向zabbix agent发出指令获取数据， 即zabbixagent被动的去获取数据并返回给zabbix server， zabbix server周期性的向agent 索取数据， 这总模式的最大问题就是会加大zabbix server的工作量， 在数百台服务器的环境下zabbix server不能及时获取到最新数据， 但这也是默认的工作方式。</p>\\n</li>\\n<li>\\n<p><strong>主动模式</strong>：主动模式是有zabbix agent主动采集数据并返回给zabbix server， 不再需要zabbix serve进行干预， 因此主动模式在一定程度上可减轻zabbix server的压力。</p>\\n</li>\\n</ul>"}');export{z as comp,m as data};