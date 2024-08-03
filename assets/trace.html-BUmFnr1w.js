import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as e}from"./app-C7nDDXNs.js";const t={},l=e(`<h2 id="oracle诊断分析" tabindex="-1"><a class="header-anchor" href="#oracle诊断分析"><span>Oracle诊断分析</span></a></h2><h3 id="oracle常用诊断事件" tabindex="-1"><a class="header-anchor" href="#oracle常用诊断事件"><span>Oracle常用诊断事件</span></a></h3><ul><li>Oracle 10046事件是用来追踪SQL语句的执行过程，通过生成的trace文件来了解SQL的执行时间，等待事件，绑定变量等信息。Oracle 10046事件有四个级别，分别是1，4，8，12，表示不同的追踪信息。 <ul><li>Level 1 等同于SQL_TRACE的功能，跟踪sql语句，包括解析、执行、提取、提交和回滚等。</li><li>Level 4 在Level 1的基础上增加收集绑定变量的信息。</li><li>Level 8 在Level 1的基础上增加等待事件的信息。</li><li>Level 12 等同于Level 4+Level 8，即同时收集绑定变量信息和等待事件信息。</li></ul></li></ul><p>Oracle 10046事件生成的trace文件可以用tkprof工具来处理，得到更易读的格式。</p><ul><li>Oracle 10053事件是用来诊断优化器如何估算成本和选择执行计划的，通过生成的trace文件来了解Oracle如何选择执行计划，为什么会得到这样的执行计划信息。Oracle 10053事件有两个级别，分别是1，2，表示不同的优化器信息。 <ul><li><p>Level 1 包含如下内容：</p><ul><li>Column statistics</li><li>Single Access Paths</li><li>Join Costs</li><li>Table Joins Considered</li><li>Join Methods Considered (NL/MS/HA)</li><li>Parameters used by the optimizer</li><li>Index statistics</li></ul></li><li><p>Level 2 包含如下内容：</p><ul><li>Column statistics</li><li>Single Access Paths</li><li>Join Costs</li><li>Table Joins Considered</li><li>Join Methods Considered (NL/MS/HA)</li></ul></li></ul></li></ul><p>Oracle 10053事件生成的trace文件不能用tkprof工具来处理，只能直接阅读原始文件。</p><h3 id="_10053事件分析" tabindex="-1"><a class="header-anchor" href="#_10053事件分析"><span>10053事件分析</span></a></h3><ul><li>查询SPID</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> spid <span class="token keyword">from</span> v$process 
<span class="token keyword">where</span> addr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">select</span> paddr <span class="token keyword">from</span> v$<span class="token keyword">session</span> <span class="token keyword">where</span> sid<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">select</span> sid <span class="token keyword">from</span> v$mystat <span class="token keyword">where</span> rownum <span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
SPID
<span class="token comment">------------------------------------------------</span>
<span class="token number">33651</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启对指定会话的跟踪</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>sqlplus <span class="token operator">/</span> <span class="token keyword">as</span> sysdba
<span class="token comment">--设置OS PID</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> oradebug setospid <span class="token number">33651</span>
Oracle pid: <span class="token number">21</span><span class="token punctuation">,</span> Unix process pid: <span class="token number">33651</span><span class="token punctuation">,</span> image: oracle<span class="token variable">@dream</span> <span class="token punctuation">(</span>TNS V1<span class="token operator">-</span>V3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不限制跟踪文件大小</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> oradebug unlimit<span class="token punctuation">;</span>
Statement processed<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启10053事件跟踪</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> oradebug event <span class="token number">10053</span> trace name context forever<span class="token punctuation">,</span><span class="token keyword">level</span> <span class="token number">1</span>
Statement processed<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行需要跟踪的相关SQL</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> myTestTable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭跟踪</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> oradebug event <span class="token number">10053</span> trace name context <span class="token keyword">off</span><span class="token punctuation">;</span>
Statement processed<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示跟踪文件路径</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> oradebug tracefile_name
<span class="token operator">/</span>oracle<span class="token operator">/</span>app<span class="token operator">/</span>oracle<span class="token operator">/</span>diag<span class="token operator">/</span>rdbms<span class="token operator">/</span>ora11g<span class="token operator">/</span>ora11g<span class="token operator">/</span>trace<span class="token operator">/</span>ora11g_ora_33651_10053<span class="token punctuation">.</span>trc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>诊断脚本：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">set</span> linesize <span class="token number">1000</span>
<span class="token keyword">set</span> pagesize <span class="token number">1000</span>
<span class="token keyword">set</span> head <span class="token keyword">off</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> verify <span class="token keyword">off</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> termout <span class="token keyword">off</span><span class="token punctuation">;</span>
 
<span class="token keyword">column</span> u new_value us noprint<span class="token punctuation">;</span>
<span class="token keyword">column</span> n new_value ns noprint<span class="token punctuation">;</span>
 
<span class="token keyword">select</span> name n <span class="token keyword">from</span> v$<span class="token keyword">database</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">user</span> u <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">set</span> sqlprompt <span class="token operator">&amp;</span>ns:<span class="token operator">&amp;</span>us<span class="token operator">&gt;</span>

<span class="token keyword">set</span> head <span class="token keyword">on</span>
<span class="token keyword">set</span> echo <span class="token keyword">on</span>
<span class="token keyword">set</span> termout <span class="token keyword">on</span>

spool <span class="token operator">&amp;</span>ns<span class="token punctuation">.</span>trace<span class="token punctuation">.</span>log

<span class="token keyword">drop</span> <span class="token keyword">table</span> test<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> blah<span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> test <span class="token punctuation">(</span>a number<span class="token punctuation">,</span>b number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> blah <span class="token punctuation">(</span>b number<span class="token punctuation">,</span>c number<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> test <span class="token keyword">select</span> blocks<span class="token punctuation">,</span>blocks <span class="token keyword">from</span> dba_tables<span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> blah <span class="token keyword">select</span> blocks<span class="token punctuation">,</span>blocks <span class="token keyword">from</span> dba_tables<span class="token punctuation">;</span>

<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">index</span> testindex <span class="token keyword">on</span> test<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> blahindex <span class="token keyword">on</span> blah<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">execute</span> dbms_stats<span class="token punctuation">.</span>gather_table_stats<span class="token punctuation">(</span><span class="token string">&#39;MYUSER&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;TEST&#39;</span><span class="token punctuation">,</span><span class="token keyword">cascade</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">execute</span> dbms_stats<span class="token punctuation">.</span>gather_table_stats<span class="token punctuation">(</span><span class="token string">&#39;MYUSER&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;BLAH&#39;</span><span class="token punctuation">,</span><span class="token keyword">cascade</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 10053 trace won&#39;t work if plan is already in shared pool.</span>
<span class="token comment">-- on my laptop flush shared pool.  On unix box alter a table in the sql or modify the sql</span>
<span class="token comment">-- slightly.</span>
<span class="token comment">-- alter system flush shared_pool;</span>
<span class="token comment">-- alter table test nomonitoring;</span>
<span class="token comment">-- alter table test monitoring;</span>

<span class="token keyword">alter</span> <span class="token keyword">session</span> <span class="token keyword">set</span> max_dump_file_size <span class="token operator">=</span> unlimited<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> tracefile_identifier <span class="token operator">=</span> <span class="token string">&#39;bobbydurrett&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> EVENTS <span class="token string">&#39;10053 trace name context forever, level 1&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- set to 12 if you want bind variables</span>

<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> EVENTS <span class="token string">&#39;10046 trace name context forever, level 8&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> c <span class="token keyword">from</span> test<span class="token punctuation">,</span>blah <span class="token keyword">where</span> a<span class="token operator">=</span><span class="token number">100</span> <span class="token operator">and</span> test<span class="token punctuation">.</span>b<span class="token operator">=</span>blah<span class="token punctuation">.</span>b<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> EVENTS <span class="token string">&#39;10053 trace name context OFF&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> EVENTS <span class="token string">&#39;10046 trace name context OFF&#39;</span><span class="token punctuation">;</span>

spool <span class="token keyword">off</span>
<span class="token keyword">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oracle跟踪文件分析工具" tabindex="-1"><a class="header-anchor" href="#oracle跟踪文件分析工具"><span>Oracle跟踪文件分析工具</span></a></h2><h3 id="tkprof" tabindex="-1"><a class="header-anchor" href="#tkprof"><span>tkprof</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tkprof MYDB_ora_26324.trc tkprofout.txt <span class="token assign-left variable">waits</span><span class="token operator">=</span>yes <span class="token string">&quot;sort=(PRSELA,EXEELA,FCHELA)&quot;</span> <span class="token assign-left variable">SYS</span><span class="token operator">=</span>YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="跟踪文件清理" tabindex="-1"><a class="header-anchor" href="#跟踪文件清理"><span>跟踪文件清理</span></a></h2><p>主要清理trace和alert文件。</p><h3 id="自动清理" tabindex="-1"><a class="header-anchor" href="#自动清理"><span>自动清理</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">---- trace and alert file, default is unlimited</span>
<span class="token keyword">show</span> parameter max_dump_file_size<span class="token punctuation">;</span>

<span class="token keyword">alter</span> system <span class="token keyword">set</span> max_dump_file_size<span class="token operator">=</span><span class="token string">&#39;10G&#39;</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动清理" tabindex="-1"><a class="header-anchor" href="#手动清理"><span>手动清理</span></a></h3><ul><li>查看跟踪日志路径</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> prameter background_dump_dest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>清理跟踪文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># find &lt;path&gt; -name &quot;*.trc&quot; -mtime &lt;+no of days&gt; -exec rm {} \\;</span>
<span class="token function">find</span> /u01/app/oracle/diag/rdbms/testdb/testdb/trace <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trc&quot;</span> <span class="token parameter variable">-mtime</span> +30 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token function">find</span> /u01/app/oracle/diag/rdbms/testdb/testdb/alert <span class="token parameter variable">-name</span> <span class="token string">&quot;*.xml&quot;</span> <span class="token parameter variable">-mtime</span> +30 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token function">tail</span> <span class="token parameter variable">-2000</span> /u01/app/oracle/diag/rdbms/testdb/testdb/trace/alert_<span class="token variable">\${ORACLE_SID}</span>.log <span class="token operator">&gt;</span> /u01/app/oracle/diag/rdbms/testdb/testdb/trace/alert_<span class="token variable">\${ORACLE_SID}</span>.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动清理脚本" tabindex="-1"><a class="header-anchor" href="#手动清理脚本"><span>手动清理脚本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">############ Author begin ##################################################</span>
<span class="token comment">## Author: Ableit</span>
<span class="token comment">## Date: 2022-07-20</span>
<span class="token comment">## Desc: Clean oracle trace file and log</span>
<span class="token comment">## Env: RHEL/CentOS x.x</span>
<span class="token comment">## crontab: 0 0 * * * /home/oracle/dba/scripts/ora_clean_trace.sh</span>
<span class="token comment">############ Author end ####################################################</span>

<span class="token comment">############ Env &amp; Virables begin ##########################################</span>
<span class="token comment">####### begin custom settings #######</span>
<span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>xjmtx
<span class="token assign-left variable">TRACE_RETENTION_DAYS</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">ALERT_RETENTION_LINES</span><span class="token operator">=</span><span class="token number">5000</span>

<span class="token assign-left variable">LISTENER_TRACE_PATH</span><span class="token operator">=</span>/oracle/db/diag/tnslsnr/xj-mtx/listener/trace
<span class="token assign-left variable">LISTENER_ALERT_PATH</span><span class="token operator">=</span>/oracle/db/diag/tnslsnr/xj-mtx/listener/alert

<span class="token assign-left variable">RDBMS_TRACE_PATH</span><span class="token operator">=</span>/oracle/db/diag/rdbms/xjmtx/xjmtx/trace
<span class="token assign-left variable">RDBMS_ALERT_PATH</span><span class="token operator">=</span>/oracle/db/diag/rdbms/xjmtx/xjmtx/alert
<span class="token assign-left variable">RDBMS_INCIDENT_PATH</span><span class="token operator">=</span>/oracle/db/diag/rdbms/xjmtx/xjmtx/incident
<span class="token comment">####### end custom settings #######</span>
<span class="token comment">############ Env &amp; Virables end ##########################################</span>

<span class="token keyword">function</span> <span class="token function-name function">CleanTraceLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># find &lt;path&gt; -name &quot;*.trc&quot; -mtime &lt;+no of days&gt; -exec rm {} \\;</span>
    <span class="token function">find</span> <span class="token variable">$LISTENER_TRACE_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trc&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$LISTENER_TRACE_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trm&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$LISTENER_ALERT_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.xml&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

    <span class="token function">find</span> <span class="token variable">$RDBMS_TRACE_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trc&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$RDBMS_TRACE_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trm&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$RDBMS_ALERT_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.xml&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$RDBMS_INCIDENT_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trc&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
    <span class="token function">find</span> <span class="token variable">$RDBMS_INCIDENT_PATH</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.trm&quot;</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$TRACE_RETENTION_DAYS</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

    <span class="token function">tail</span> -<span class="token variable">$ALERT_RETENTION_LINES</span> <span class="token variable">$RDBMS_TRACE_PATH</span>/alert_<span class="token variable">\${ORACLE_SID}</span>.log <span class="token operator">&gt;</span><span class="token variable">$RDBMS_TRACE_PATH</span>/alert_<span class="token variable">\${ORACLE_SID}</span>.log
<span class="token punctuation">}</span>

CleanTraceLog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),p=[l];function o(i,c){return n(),a("div",null,p)}const u=s(t,[["render",o],["__file","trace.html.vue"]]),k=JSON.parse('{"path":"/guide/database/oracle/trace.html","title":"跟踪文件","lang":"zh-CN","frontmatter":{"title":"跟踪文件","description":"Oracle诊断分析 Oracle常用诊断事件 Oracle 10046事件是用来追踪SQL语句的执行过程，通过生成的trace文件来了解SQL的执行时间，等待事件，绑定变量等信息。Oracle 10046事件有四个级别，分别是1，4，8，12，表示不同的追踪信息。 Level 1 等同于SQL_TRACE的功能，跟踪sql语句，包括解析、执行、提取、...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/trace.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"跟踪文件"}],["meta",{"property":"og:description","content":"Oracle诊断分析 Oracle常用诊断事件 Oracle 10046事件是用来追踪SQL语句的执行过程，通过生成的trace文件来了解SQL的执行时间，等待事件，绑定变量等信息。Oracle 10046事件有四个级别，分别是1，4，8，12，表示不同的追踪信息。 Level 1 等同于SQL_TRACE的功能，跟踪sql语句，包括解析、执行、提取、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跟踪文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"Oracle诊断分析","slug":"oracle诊断分析","link":"#oracle诊断分析","children":[{"level":3,"title":"Oracle常用诊断事件","slug":"oracle常用诊断事件","link":"#oracle常用诊断事件","children":[]},{"level":3,"title":"10053事件分析","slug":"_10053事件分析","link":"#_10053事件分析","children":[]}]},{"level":2,"title":"Oracle跟踪文件分析工具","slug":"oracle跟踪文件分析工具","link":"#oracle跟踪文件分析工具","children":[{"level":3,"title":"tkprof","slug":"tkprof","link":"#tkprof","children":[]}]},{"level":2,"title":"跟踪文件清理","slug":"跟踪文件清理","link":"#跟踪文件清理","children":[{"level":3,"title":"自动清理","slug":"自动清理","link":"#自动清理","children":[]},{"level":3,"title":"手动清理","slug":"手动清理","link":"#手动清理","children":[]},{"level":3,"title":"手动清理脚本","slug":"手动清理脚本","link":"#手动清理脚本","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":3.38,"words":1014},"filePathRelative":"guide/database/oracle/trace.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>Oracle诊断分析</h2>\\n<h3>Oracle常用诊断事件</h3>\\n<ul>\\n<li>Oracle 10046事件是用来追踪SQL语句的执行过程，通过生成的trace文件来了解SQL的执行时间，等待事件，绑定变量等信息。Oracle 10046事件有四个级别，分别是1，4，8，12，表示不同的追踪信息。\\n<ul>\\n<li>Level 1 等同于SQL_TRACE的功能，跟踪sql语句，包括解析、执行、提取、提交和回滚等。</li>\\n<li>Level 4 在Level 1的基础上增加收集绑定变量的信息。</li>\\n<li>Level 8 在Level 1的基础上增加等待事件的信息。</li>\\n<li>Level 12 等同于Level 4+Level 8，即同时收集绑定变量信息和等待事件信息。</li>\\n</ul>\\n</li>\\n</ul>"}');export{u as comp,k as data};