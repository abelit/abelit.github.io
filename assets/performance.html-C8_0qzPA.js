import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as s}from"./app-C7nDDXNs.js";const i="/assets/centos7-os-init.sh-0LMhKwAB.jpg",l={},p=s(`<h2 id="linux内核参数详解和优化" tabindex="-1"><a class="header-anchor" href="#linux内核参数详解和优化"><span>Linux内核参数详解和优化</span></a></h2><blockquote><p>Linux内核参数是操作系统中用于调整和优化系统性能和行为的关键设置。</p></blockquote><p>Linux内核参数可以通过以下几种方式进行查看和修改：</p><ol><li><p>/proc/sys目录：大多数内核参数都可以在/proc/sys目录下找到，使用sysctl命令查看和设置这些参数。</p></li><li><p>sysctl.conf文件：此文件通常位于/etc目录中，可以在系统启动时自动应用内核参数。</p></li><li><p>命令行：在系统启动时通过引导加载程序（如GRUB）传递参数（以 <code>GRUB_CMDLINE_LINUX_DEFAULT</code> 开头的那一行）。</p></li></ol><p>以下是一些常见的内核参数及其优化方法：</p><h3 id="文件系统参数" tabindex="-1"><a class="header-anchor" href="#文件系统参数"><span><strong>文件系统参数</strong></span></a></h3><h4 id="_1-1-fs-file-max" tabindex="-1"><a class="header-anchor" href="#_1-1-fs-file-max"><span>1.1 fs.file-max</span></a></h4><ul><li><p>描述：控制系统中打开文件描述符的数量上限。</p></li><li><p>默认值：通常为65535。</p></li><li><p>优化建议：对于高负载服务器，可以增加此限制，以防止文件句柄耗尽的问题。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> fs.file-max<span class="token operator">=</span><span class="token number">6553560</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-fs-nr-open" tabindex="-1"><a class="header-anchor" href="#_1-2-fs-nr-open"><span>1.2 fs.nr_open</span></a></h4><ul><li><p>描述：定义了每个进程可以打开的文件描述符的最大数量。</p></li><li><p>优化建议：可以根据具体需求进行调整，尤其是对于需要打开大量文件的应用程序。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">fs.nr_open</span><span class="token operator">=</span><span class="token number">1048576</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="内存管理参数" tabindex="-1"><a class="header-anchor" href="#内存管理参数"><span><strong>内存管理参数</strong></span></a></h3><h4 id="_2-1-vm-max-map-count" tabindex="-1"><a class="header-anchor" href="#_2-1-vm-max-map-count"><span>2.1 vm.max_map_count</span></a></h4><ul><li><p>描述：控制单个进程可以拥有的内存映射区域的最大数量。</p></li><li><p>默认值：65536。</p></li><li><p>优化建议：增加此值可以允许更多的内存映射，适用于需要大量内存映射的应用。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">262144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-vm-swappiness" tabindex="-1"><a class="header-anchor" href="#_2-2-vm-swappiness"><span>2.2 vm.swappiness</span></a></h4><ul><li><p>描述：控制系统使用交换空间的倾向。值越高，系统越倾向于使用交换空间。</p></li><li><p>默认值：60。</p></li><li><p>优化建议：对于需要高性能的应用服务器，可以设置为10或更低，以减少交换的频率。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">vm.swappiness</span><span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-vm-dirty-ratio-和-vm-dirty-background-ratio" tabindex="-1"><a class="header-anchor" href="#_2-3-vm-dirty-ratio-和-vm-dirty-background-ratio"><span>2.3 vm.dirty_ratio 和 vm.dirty_background_ratio</span></a></h4><ul><li><p>描述：这两个参数控制内核回写脏页的阈值。</p></li><li><p>优化建议：适当调整这两个参数可以优化磁盘I/O性能。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">vm.dirty_ratio</span><span class="token operator">=</span><span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进程和线程参数" tabindex="-1"><a class="header-anchor" href="#进程和线程参数"><span><strong>进程和线程参数</strong></span></a></h3><h4 id="_3-1-kernel-pid-max" tabindex="-1"><a class="header-anchor" href="#_3-1-kernel-pid-max"><span>3.1 kernel.pid_max</span></a></h4><ul><li><p>描述：控制系统中可以同时存在的进程数量的上限。</p></li><li><p>默认值：32768。</p></li><li><p>优化建议：对于需要启动大量进程的系统中，可以增加此值。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.pid_max</span><span class="token operator">=</span><span class="token number">4194303</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-kernel-threads-max" tabindex="-1"><a class="header-anchor" href="#_3-2-kernel-threads-max"><span>3.2 kernel.threads-max</span></a></h4><ul><li><p>描述：定义了系统中进程数量（包括线程）的最大值。</p></li><li><p>优化建议：对于多线程应用程序，适当增加此值以支持更多的线程。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> kernel.threads-max<span class="token operator">=</span><span class="token number">2097152</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="网络参数" tabindex="-1"><a class="header-anchor" href="#网络参数"><span><strong>网络参数</strong></span></a></h3><h4 id="_4-1-net-ipv4-tcp-max-tw-buckets" tabindex="-1"><a class="header-anchor" href="#_4-1-net-ipv4-tcp-max-tw-buckets"><span>4.1 net.ipv4.tcp_max_tw_buckets</span></a></h4><ul><li><p>描述：控制系统中TIME_WAIT套接字的最大数量。</p></li><li><p>优化建议：增加该值可以减少TIME_WAIT套接字的数量，适用于高并发的服务器。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_max_tw_buckets</span><span class="token operator">=</span><span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-2-net-ipv4-tcp-tw-reuse-和-net-ipv4-tcp-tw-recycle" tabindex="-1"><a class="header-anchor" href="#_4-2-net-ipv4-tcp-tw-reuse-和-net-ipv4-tcp-tw-recycle"><span>4.2 net.ipv4.tcp_tw_reuse 和 net.ipv4.tcp_tw_recycle</span></a></h4><ul><li><p>描述：这两个参数控制TCP TIME-WAIT快速重用。</p></li><li><p>优化建议：开启这些参数可以允许快速重用TIME_WAIT状态的连接。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_tw_reuse</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-3-net-ipv4-tcp-fin-timeout-和-net-ipv4-tcp-keepalive-time" tabindex="-1"><a class="header-anchor" href="#_4-3-net-ipv4-tcp-fin-timeout-和-net-ipv4-tcp-keepalive-time"><span>4.3 net.ipv4.tcp_fin_timeout 和 net.ipv4.tcp_keepalive_time</span></a></h4><ul><li><p>描述：分别控制TCP连接的关闭时限和空闲超时时间。</p></li><li><p>优化建议：适当减少这些时间可以加快资源的回收。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_fin_timeout</span><span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-4-net-ipv4-ip-local-port-range" tabindex="-1"><a class="header-anchor" href="#_4-4-net-ipv4-ip-local-port-range"><span>4.4 net.ipv4.ip_local_port_range</span></a></h4><ul><li><p>描述：定义UDP和TCP连接的本地端口的取值范围。</p></li><li><p>优化建议：扩大端口范围以支持更多的并发连接。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.ip_local_port_range</span><span class="token operator">=</span><span class="token string">&quot;1024 65000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息队列参数" tabindex="-1"><a class="header-anchor" href="#消息队列参数"><span><strong>消息队列参数</strong></span></a></h3><h4 id="_5-1-kernel-msgmnb、kernel-msgmax-和-kernel-msgmni" tabindex="-1"><a class="header-anchor" href="#_5-1-kernel-msgmnb、kernel-msgmax-和-kernel-msgmni"><span>5.1 kernel.msgmnb、kernel.msgmax 和 kernel.msgmni</span></a></h4><ul><li><p>描述：分别控制消息队列的最大长度、单个消息的最大长度和系统中同时运行的消息队列的个数。</p></li><li><p>优化建议：根据具体需求调整这些参数，以优化消息队列的性能。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.msgmnb</span><span class="token operator">=</span><span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="共享内存参数" tabindex="-1"><a class="header-anchor" href="#共享内存参数"><span><strong>共享内存参数</strong></span></a></h3><h4 id="_6-1-kernel-shmmax-和-kernel-shmall" tabindex="-1"><a class="header-anchor" href="#_6-1-kernel-shmmax-和-kernel-shmall"><span>6.1 kernel.shmmax 和 kernel.shmall</span></a></h4><ul><li><p>描述：分别控制单个共享内存段的最大值和系统上可以使用的共享内存的总量。</p></li><li><p>优化建议：在需要大量共享内存的应用中，如数据库服务器，适当增加这些值。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.shmmax</span><span class="token operator">=</span><span class="token number">1800000000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tcp缓冲区参数" tabindex="-1"><a class="header-anchor" href="#tcp缓冲区参数"><span><strong>TCP缓冲区参数</strong></span></a></h3><h4 id="_7-1-net-ipv4-tcp-rmem-和-net-ipv4-tcp-wmem" tabindex="-1"><a class="header-anchor" href="#_7-1-net-ipv4-tcp-rmem-和-net-ipv4-tcp-wmem"><span>7.1 net.ipv4.tcp_rmem 和 net.ipv4.tcp_wmem</span></a></h4><ul><li><p>描述：定义TCP接收和发送缓冲区的大小。</p></li><li><p>优化建议：根据网络带宽和延迟调整这些参数，以优化网络性能。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_rmem</span><span class="token operator">=</span><span class="token string">&quot;10240 87380 12582912&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="套接字监听队列参数" tabindex="-1"><a class="header-anchor" href="#套接字监听队列参数"><span><strong>套接字监听队列参数</strong></span></a></h3><h4 id="_8-1-net-core-somaxconn" tabindex="-1"><a class="header-anchor" href="#_8-1-net-core-somaxconn"><span>8.1 net.core.somaxconn</span></a></h4><ul><li><p>描述：控制套接字监听队列的最大长度。</p></li><li><p>优化建议：对于高并发的Web服务器，增大此值以提高接受连接的能力。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.core.somaxconn</span><span class="token operator">=</span><span class="token number">40960</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="网络设备参数" tabindex="-1"><a class="header-anchor" href="#网络设备参数"><span><strong>网络设备参数</strong></span></a></h3><h4 id="_9-1-net-core-netdev-max-backlog" tabindex="-1"><a class="header-anchor" href="#_9-1-net-core-netdev-max-backlog"><span>9.1 net.core.netdev_max_backlog</span></a></h4><ul><li><p>描述：控制网络设备队列的最大长度。</p></li><li><p>优化建议：适当增大此值可以优化网络吞吐量。</p></li><li><p>设置方法：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.core.netdev_max_backlog</span><span class="token operator">=</span><span class="token number">8096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>这些参数的设置方法通常是通过修改<code>/proc/sys/</code> 下的相应文件或将设置添加到 <code>/etc/sysctl.conf</code>文件中，并使用**<code>sysctl -p</code>**命令使设置生效。</p><p>在调整这些参数时，应根据具体的系统需求和工作负载进行测试和优化。</p><h2 id="linux性能优化经验分享" tabindex="-1"><a class="header-anchor" href="#linux性能优化经验分享"><span>Linux性能优化经验分享</span></a></h2><p>Linux系统的性能是指操作系统完成任务的有效性、稳定性和响应速度。Linux系统管理员可能经常会遇到系统不稳定、响应速度慢等问题，例如在Linux上搭建了一个web服务，经常出现网页无法打开、打开速度慢等现象，而遇到这些问题，就有人会抱怨Linux系统不好，其实这些都是表面现象。</p><p>操作系统完成一个任务时，与系统自身设置、网络拓朴结构、路由设备、路由策略、接入设备、物理线路等多个方面都密切相关，任何一个环节出现问题，都会影响整个系统的性能。因此当Linux应用出现问题时，应当从应用程序、操作系统、服务器硬件、网络环境等方面综合排查，定位问题出现在哪个部分，然后集中解决。</p><p>随着容器时代的普及和AI技术的颠覆，面对越来越复杂的业务和架构，再加上企业的降本增效已提上了日程，因此对Linux的高性能、可靠性提出了更高的要求，Linux性能优化成为运维人员的必备的核心技能。</p><p>例如，主机CPU使用率过高报警，登录Linux上去top完之后，却不知道怎么进一步定位，到底是系统CPU资源太少，还是应用程序导致的问题？这些Linux性能问题一直困扰着我们，哪怕工作多年的资深工程师也不例外。</p><h3 id="_1、影响linux系统性能的因素一般有哪些" tabindex="-1"><a class="header-anchor" href="#_1、影响linux系统性能的因素一般有哪些"><span><strong>1、影响Linux系统性能的因素一般有哪些？</strong></span></a></h3><hr><h3 id="zhaoxiaoyong081-平安科技-资深工程师" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>Linux系统的性能受多个因素的影响。以下是一些常见的影响Linux系统性能的因素：</p><ul><li><p>CPU负载：CPU的利用率和负载水平对系统性能有直接影响。高CPU负载可能导致进程响应变慢、延迟增加和系统变得不稳定。</p></li><li><p>内存使用：内存是系统运行的关键资源。当系统内存不足时，可能会导致进程被终止、交换分区使用过多以及系统性能下降。</p></li><li><p>磁盘I/O：磁盘I/O性能是影响系统响应时间和吞吐量的重要因素。高磁盘I/O负载可能导致延迟增加、响应变慢和系统性能下降。</p></li><li><p>网络负载：网络流量的增加和网络延迟会对系统性能产生影响。高网络负载可能导致网络延迟增加、响应变慢和系统资源竞争。</p></li><li><p>进程调度：Linux系统使用进程调度器来管理和分配CPU资源。调度算法的选择和配置会影响进程的优先级和执行顺序，从而影响系统的响应能力和负载均衡。</p></li><li><p>文件系统性能：文件系统的选择和配置对磁盘I/O性能有影响。不同的文件系统可能在性能方面有所差异，适当的文件系统选项和调整可以改善系统性能。</p></li><li><p>内核参数：Linux内核有许多可调整的参数，可以影响系统的性能和行为。例如，TCP/IP参数、内存管理参数、文件系统缓存等。适当的内核参数调整可以改善系统的性能和资源利用率。</p></li><li><p>资源限制和配额：在多用户环境中，资源限制和配额的设置可以控制每个用户或进程可使用的资源量。适当的资源管理可以避免某些进程耗尽系统资源而导致性能问题。</p></li></ul><p>这些因素之间相互关联，对系统性能产生综合影响。为了优化Linux系统性能，需要综合考虑并适当调整这些因素，以满足特定的需求和使用情况。</p><h3 id="_2、工作中有没有快速排除故障的办法" tabindex="-1"><a class="header-anchor" href="#_2、工作中有没有快速排除故障的办法"><span><strong>2、工作中有没有快速排除故障的办法？</strong></span></a></h3><hr><h3 id="zhaoxiaoyong081-平安科技-资深工程师-1" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-1"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>1.CPU 性能分析</p><p>利用 top、vmstat、pidstat、strace 以及 perf 等几个最常见的工具，获取 CPU 性能指标后，再结合进程与 CPU 的工作原理，就可以迅速定位出 CPU 性能瓶颈的来源。</p><p>比如说，当你收到系统的用户 CPU 使用率过高告警时，从监控系统中直接查询到，导致 CPU 使用率过高的进程；然后再登录到进程所在的 Linux 服务器中，分析该进程的行为。你可以使用 strace，查看进程的系统调用汇总；也可以使用 perf 等工具，找出进程的热点函数；甚至还可以使用动态追踪的方法，来观察进程的当前执行过程，直到确定瓶颈的根源。</p><p>2.内存性能分析</p><p>可以通过 free 和 vmstat 输出的性能指标，确认内存瓶颈；然后，再根据内存问题的类型，进一步分析内存的使用、分配、泄漏以及缓存等，最后找出问题的来源。</p><p>比如说，当你收到内存不足的告警时，首先可以从监控系统中。找出占用内存最多的几个进程。然后，再根据这些进程的内存占用历史，观察是否存在内存泄漏问题。确定出最可疑的进程后，再登录到进程所在的 Linux 服务器中，分析该进程的内存空间或者内存分配，最后弄清楚进程为什么会占用大量内存。</p><p>3.磁盘和文件系统 I/O 性能分析</p><p>当你使用 iostat ，发现磁盘 I/O 存在性能瓶颈（比如 I/O 使用率过高、响应时间过长或者等待队列长度突然增大等）后，可以再通过 pidstat、 vmstat 等，确认 I/O 的来源。接着，再根据来源的不同，进一步分析文件系统和磁盘的使用率、缓存以及进程的 I/O 等，从而揪出 I/O 问题的真凶。</p><p>比如说，当你发现某块磁盘的 I/O 使用率为 100% 时，首先可以从监控系统中，找出 I/O 最多的进程。然后，再登录到进程所在的 Linux 服务器中，借助 strace、lsof、perf 等工具，分析该进程的 I/O 行为。最后，再结合应用程序的原理，找出大量 I/O 的原因。</p><p>4.网络性能分析</p><p>而要分析网络的性能，要从这几个协议层入手，通过使用率、饱和度以及错误数这几类性能指标，观察是否存在性能问题。比如 ：</p><p>在链路层，可以从网络接口的吞吐量、丢包、错误以及软中断和网络功能卸载等角度分析；</p><p>在网络层，可以从路由、分片、叠加网络等角度进行分析；</p><p>在传输层，可以从 TCP、UDP 的协议原理出发，从连接数、吞吐量、延迟、重传等角度进行分析；</p><p>比如，当你收到网络不通的告警时，就可以从监控系统中，查找各个协议层的丢包指标，确认丢包所在的协议层。然后，从监控系统的数据中，确认网络带宽、缓冲区、连接跟踪数等软硬件，是否存在性能瓶颈。最后，再登录到发生问题的 Linux 服务器中，借助 netstat、tcpdump、bcc 等工具，分析网络的收发数据，并且结合内核中的网络选项以及 TCP 等网络协议的原理，找出问题的来源。</p><h3 id="_3、linux环境下-怎么排查os中系统负载过高的原因瓶颈" tabindex="-1"><a class="header-anchor" href="#_3、linux环境下-怎么排查os中系统负载过高的原因瓶颈"><span><strong>3、Linux环境下，怎么排查os中系统负载过高的原因瓶颈？</strong></span></a></h3><hr><h3 id="zhaoxiaoyong081-平安科技-资深工程师-2" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-2"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>在Linux环境下排查系统负载过高的原因和瓶颈，可以采取以下步骤：</p><ul><li><p>使用top或htop命令观察系统整体负载情况。查看load average的值，分别表示系统在1分钟、5分钟和15分钟内的平均负载。如果负载值超过CPU核心数量的70-80%，表示系统负载过高。</p></li><li><p>使用top或htop命令查看CPU占用率。观察哪些进程占用了大量的CPU资源。如果有某个进程持续高CPU占用，可能是引起负载过高的原因之一。</p></li><li><p>使用free命令查看系统内存使用情况。观察内存的使用量和剩余量。如果内存使用量接近或超过物理内存容量，可能导致系统开始使用交换空间（swap），进而影响系统性能。</p></li><li><p>使用iotop命令查看磁盘I/O使用情况。观察磁盘读写速率和占用率。如果磁盘I/O负载过高，可能导致系统响应变慢。</p></li><li><p>使用netstat命令或类似工具查看网络连接情况。观察是否存在大量的网络连接或网络流量。如果网络连接过多或网络流量过大，可能影响系统的性能。</p></li><li><p>检查日志文件。查看系统日志文件（如/var/log/messages、/var/log/syslog）以及应用程序日志，寻找任何异常或错误信息，可能有助于确定导致负载过高的问题。</p></li><li><p>使用perf或strace等工具进行进程级别的性能分析。这些工具可以帮助你跟踪进程的系统调用、函数调用和性能瓶颈，进一步确定导致负载过高的具体原因。</p></li><li><p>检查系统的配置和参数设置。审查相关的配置文件（如/etc/sysctl.conf、/etc/security/limits.conf）和参数设置，确保系统的设置与实际需求相匹配，并进行适当的调整。</p></li></ul><p>综合上述步骤，可以帮助你定位系统负载过高的原因和瓶颈，并进一步采取相应的措施来优化系统性能。</p><h3 id="_4、linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源-cpu-or-内容-or-磁盘-io" tabindex="-1"><a class="header-anchor" href="#_4、linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源-cpu-or-内容-or-磁盘-io"><span><strong>4、Linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源（CPU or 内容 or 磁盘 IO）？</strong></span></a></h3><hr><h3 id="zhaoxiaoyong081-平安科技-资深工程师-3" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-3"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>CPU 使用排名</p><p>ps aux --sort=-%cpu | head -n 5</p><p>内存 使用排名</p><p>ps aux --sort=-%mem | head -n 6</p><p>IO 使用排名</p><p>iotop -oP</p><p>@zwz99999 dcits 系统工程师：</p><p>查看最占用 CPU 的 10 个进程</p><p>#ps aux|grep -v USER|sort +2|tail -n 10</p><p>查看最占用内存的 10 个进程</p><p>#ps aux|grep -v USER|sort +3|tail -n 10</p><p>io</p><p>iostat 1 10看哪个磁盘busy高</p><h3 id="_5、linux的内存计算不准如何解决" tabindex="-1"><a class="header-anchor" href="#_5、linux的内存计算不准如何解决"><span><strong>5、Linux的内存计算不准如何解决？</strong></span></a></h3><hr><h3 id="acdante-hztyyj-技术总监" tabindex="-1"><a class="header-anchor" href="#acdante-hztyyj-技术总监"><span>@Acdante HZTYYJ 技术总监：</span></a></h3><p>free是执行时间的瞬时计数，/proc/memory内存是实时变化的。</p><p>而且free会把缓存和缓冲区内存都计入使用内存，所以会导致看到的可用内存少很多。</p><p>准确值的话，建议结合多种监控指标和命令手段去持续观测内存情况。</p><p>如：htop 、 nmon 、 syssta、top等，可以结合运维软件和平台，而非站在某个时间点，最好是有一定时间的性能数据积累，从整体趋势和具体问题点位去分析。<br> 内存只是一个资源指标，使用内存的调用才是问题根源。</p><h3 id="zhaoxiaoyong081-平安科技-资深工程师-4" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-4"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>在一些情况下，通过ps或top命令查看的内存使用累计值与free命令或/proc/meminfo文件中的内存统计值之间可能存在较大差异。这可以由以下原因导致：</p><ul><li><p>缓存和缓冲区：Linux系统使用缓存和缓冲区来提高文件系统性能。这些缓存和缓冲区占用的内存会被标记为&quot;cached&quot;（缓存）和&quot;buffers&quot;（缓冲区）类型。然而，这些内存并不一定是实际被进程使用的内存，而是被内核保留用于提高IO性能。因此，ps或top命令显示的内存使用累计值可能包括了这些缓存和缓冲区，而free命令或/proc/meminfo中的统计值通常不包括它们。</p></li><li><p>共享内存：共享内存是一种特殊的内存区域，多个进程可以访问和共享它。ps或top命令显示的内存使用累计值可能会包括共享内存的大小，而free命令或/proc/meminfo中的统计值通常不会将其计算在内。</p></li><li><p>内存回收：Linux系统具有内存回收机制，可以在需要时回收未使用的内存。这意味着一些进程释放的内存可能不会立即反映在ps或top命令显示的内存使用累计值中。相比之下，free命令或/proc/meminfo中的统计值通常更及时地反映实际的内存使用情况。</p></li></ul><p>综上所述，ps或top命令显示的内存使用累计值和free命令或/proc/meminfo中的内存统计值之间的差异通常是由于缓存和缓冲区、共享内存以及内存回收等因素造成的。如果你需要更准确地了解进程实际使用的内存，建议参考free命令或/proc/meminfo中的统计值，并结合其他工具和方法进行综合分析</p><p>@wenwen123 项目经理：</p><p>在Linux中，可能会出现内存计算不准确的情况，导致ps、top命令中的内存使用累计值与free命令或/proc/meminfo中的内存统计值之间存在较大差异。这种差异可能由以下原因导致：</p><ul><li><p>共享内存：共享内存是多个进程之间共享的一块内存区域，用于进程间通信。共享内存不会被ps、top等工具计算在内存使用量中，因为它们只统计进程的私有内存使用量。因此，如果进程使用了大量的共享内存，它的内存使用量在工具中显示的数值可能较低。</p></li><li><p>缓存和缓冲区：Linux系统会将一部分内存用于缓存和缓冲区，以提高文件系统和IO操作的性能。这些缓存和缓冲区的内存在ps、top等工具中被视为可回收的，因此它们通常不计入进程的内存使用量中。但是，在free命令或/proc/meminfo中，这些缓存和缓冲区的内存会被纳入统计。</p></li><li><p>内存回收机制：Linux内核具有内存回收机制，根据需要自动回收和分配内存。这可能导致在ps、top等工具显示的内存使用量和free命令或/proc/meminfo中的统计值之间存在差异。这种差异通常是正常的，并且Linux会动态管理内存以满足系统的需求。</p></li></ul><p>针对内存计算不准确的问题，关注共享内存是合理的。共享内存的使用可能对进程的内存使用量造成影响，但不会被ps、top等工具计算在内存使用量中。如果需要更准确地了解进程的内存使用情况，可以使用专门的工具，如pmap、smem等，这些工具可以提供更详细和准确的内存统计信息。</p><p>需要注意的是，Linux内存计算的准确性也取决于内核版本、系统配置和使用的工具等因素。在排查内存计算不准确的问题时，建议使用多个工具进行对比，并结合具体场景和需求进行分析和判断。</p><h3 id="_6、swap现在的应用场景还有哪些" tabindex="-1"><a class="header-anchor" href="#_6、swap现在的应用场景还有哪些"><span><em><strong>6、</strong></em><strong>Swap现在的应用场景还有哪些？</strong></span></a></h3><hr><h3 id="zhaoxiaoyong081-平安科技-资深工程师-5" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-5"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>虽然现代计算机的内存容量越来越大，但交换分区（swap）仍然在某些场景下具有重要的应用。以下是一些使用交换分区的常见场景：</p><ul><li><p>内存不足：交换分区作为内存不足时的后备机制，用于将不经常使用或暂时不需要的内存页面转移到磁盘上。当物理内存（RAM）不足以容纳所有活动进程和数据时，交换分区可以提供额外的虚拟内存空间，以避免系统发生内存耗尽错误（Out of Memory）。</p></li><li><p>休眠/睡眠模式：交换分区在某些操作系统中用于支持休眠（hibernation）或睡眠（suspend）模式。当计算机进入休眠或睡眠状态时，系统的内存状态会被保存到交换分区中，以便在唤醒时恢复到先前的状态。</p></li><li><p>虚拟化环境：在虚拟化环境中，交换分区可以用于虚拟机的内存管理。当宿主机的物理内存不足时，虚拟机的内存页面可以被交换到宿主机的交换分区，以提供额外的内存空间。</p></li><li><p>内存回收和页面置换：交换分区可以用于内存回收和页面置换算法。当操作系统需要释放物理内存以满足更紧急的需求时，它可以将不活动的内存页面置换到交换分区中，以便将物理内存分配给更重要的任务或进程。</p></li></ul><p>尽管交换分区在上述场景中发挥作用，但需要注意的是，过度依赖交换分区可能会导致性能下降。频繁的交换操作可能会增加I/O负载，并导致响应时间延迟。因此，在现代系统中，通常建议合理配置物理内存，以尽量减少对交换分区的依赖，并保持足够的内存可用性。</p><h3 id="_7、在linux-tcp方面有什么调优经验或案例" tabindex="-1"><a class="header-anchor" href="#_7、在linux-tcp方面有什么调优经验或案例"><span><strong>7、在Linux tcp方面有什么调优经验或案例？</strong></span></a></h3><hr><h3 id="zhanxuechao-数字研究院-咨询专家" tabindex="-1"><a class="header-anchor" href="#zhanxuechao-数字研究院-咨询专家"><span>@zhanxuechao 数字研究院 咨询专家：</span></a></h3><p>centos7-os-init.sh <img src="`+i+'" alt="" loading="lazy"></p><h3 id="zhaoxiaoyong081-平安科技-资深工程师-6" tabindex="-1"><a class="header-anchor" href="#zhaoxiaoyong081-平安科技-资深工程师-6"><span>@zhaoxiaoyong081 平安科技 资深工程师：</span></a></h3><p>TCP 优化，分三类情况详细说明：</p><p>第一类，在请求数比较大的场景下，你可能会看到大量处于 TIME_WAIT 状态的连接，它们会占用大量内存和端口资源。这时，我们可以优化与 TIME_WAIT 状态相关的内核选项，比如采取下面几种措施。</p><p>增大处于 TIME_WAIT 状态的连接数量 net.ipv4.tcp_max_tw_buckets ，并增大连接跟踪表的大小 net.netfilter.nf_conntrack_max。</p><p>减小 net.ipv4.tcp_fin_timeout 和 net.netfilter.nf_conntrack_tcp_timeout_time_wait ，让系统尽快释放它们所占用的资源。</p><p>开启端口复用 net.ipv4.tcp_tw_reuse。这样，被 TIME_WAIT 状态占用的端口，还能用到新建的连接中。</p><p>增大本地端口的范围 net.ipv4.ip_local_port_range 。这样就可以支持更多连接，提高整体的并发能力。</p><p>增加最大文件描述符的数量。你可以使用 fs.nr_open 和 fs.file-max ，分别增大进程和系统的最大文件描述符数；或在应用程序的 systemd 配置文件中，配置 LimitNOFILE ，设置应用程序的最大文件描述符数。</p><p>第二类，为了缓解 SYN FLOOD 等，利用 TCP 协议特点进行攻击而引发的性能问题，你可以考虑优化与 SYN 状态相关的内核选项，比如采取下面几种措施。</p><p>增大 TCP 半连接的最大数量 net.ipv4.tcp_max_syn_backlog ，或者开启 TCP SYN Cookies net.ipv4.tcp_syncookies ，来绕开半连接数量限制的问题（注意，这两个选项不可同时使用）。</p><p>减少 SYN_RECV 状态的连接重传 SYN+ACK 包的次数 net.ipv4.tcp_synack_retries。</p><p>第三类，在长连接的场景中，通常使用 Keepalive 来检测 TCP 连接的状态，以便对端连接断开后，可以自动回收。但是，系统默认的 Keepalive 探测间隔和重试次数，一般都无法满足应用程序的性能要求。所以，这时候你需要优化与 Keepalive 相关的内核选项，比如：</p><p>缩短最后一次数据包到 Keepalive 探测包的间隔时间 net.ipv4.tcp_keepalive_time；</p><p>缩短发送 Keepalive 探测包的间隔时间 net.ipv4.tcp_keepalive_intvl；</p><p>减少 Keepalive 探测失败后，一直到通知应用程序前的重试次数 net.ipv4.tcp_keepalive_probes。</p><p><strong>总结</strong></p><p>企业linux 性能优化从来不是一件容易的事，对于运维工程师来说是绕不过去的坎，这也是运维知识体系中最底层并且最难的一部分。想要学习好性能分析和优化，需要建立整体系统性能的全局观，需要理解CPU、内存、磁盘、网络的原理，掌握需要收集哪些监控的指标，以及熟练使用各种工具来分析和追踪以及定位问题。</p>',159),t=[p];function o(r,c){return e(),n("div",null,t)}const u=a(l,[["render",o],["__file","performance.html.vue"]]),m=JSON.parse('{"path":"/guide/os/linux/administration/performance.html","title":"Linux性能优化","lang":"zh-CN","frontmatter":{"title":"Linux性能优化","description":"Linux内核参数详解和优化 Linux内核参数是操作系统中用于调整和优化系统性能和行为的关键设置。 Linux内核参数可以通过以下几种方式进行查看和修改： /proc/sys目录：大多数内核参数都可以在/proc/sys目录下找到，使用sysctl命令查看和设置这些参数。 sysctl.conf文件：此文件通常位于/etc目录中，可以在系统启动时自动...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/os/linux/administration/performance.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Linux性能优化"}],["meta",{"property":"og:description","content":"Linux内核参数详解和优化 Linux内核参数是操作系统中用于调整和优化系统性能和行为的关键设置。 Linux内核参数可以通过以下几种方式进行查看和修改： /proc/sys目录：大多数内核参数都可以在/proc/sys目录下找到，使用sysctl命令查看和设置这些参数。 sysctl.conf文件：此文件通常位于/etc目录中，可以在系统启动时自动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T08:57:34.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-08-03T08:57:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux性能优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T08:57:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"Linux内核参数详解和优化","slug":"linux内核参数详解和优化","link":"#linux内核参数详解和优化","children":[{"level":3,"title":"文件系统参数","slug":"文件系统参数","link":"#文件系统参数","children":[]},{"level":3,"title":"内存管理参数","slug":"内存管理参数","link":"#内存管理参数","children":[]},{"level":3,"title":"进程和线程参数","slug":"进程和线程参数","link":"#进程和线程参数","children":[]},{"level":3,"title":"网络参数","slug":"网络参数","link":"#网络参数","children":[]},{"level":3,"title":"消息队列参数","slug":"消息队列参数","link":"#消息队列参数","children":[]},{"level":3,"title":"共享内存参数","slug":"共享内存参数","link":"#共享内存参数","children":[]},{"level":3,"title":"TCP缓冲区参数","slug":"tcp缓冲区参数","link":"#tcp缓冲区参数","children":[]},{"level":3,"title":"套接字监听队列参数","slug":"套接字监听队列参数","link":"#套接字监听队列参数","children":[]},{"level":3,"title":"网络设备参数","slug":"网络设备参数","link":"#网络设备参数","children":[]}]},{"level":2,"title":"Linux性能优化经验分享","slug":"linux性能优化经验分享","link":"#linux性能优化经验分享","children":[{"level":3,"title":"1、影响Linux系统性能的因素一般有哪些？","slug":"_1、影响linux系统性能的因素一般有哪些","link":"#_1、影响linux系统性能的因素一般有哪些","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师","link":"#zhaoxiaoyong081-平安科技-资深工程师","children":[]},{"level":3,"title":"2、工作中有没有快速排除故障的办法？","slug":"_2、工作中有没有快速排除故障的办法","link":"#_2、工作中有没有快速排除故障的办法","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-1","link":"#zhaoxiaoyong081-平安科技-资深工程师-1","children":[]},{"level":3,"title":"3、Linux环境下，怎么排查os中系统负载过高的原因瓶颈？","slug":"_3、linux环境下-怎么排查os中系统负载过高的原因瓶颈","link":"#_3、linux环境下-怎么排查os中系统负载过高的原因瓶颈","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-2","link":"#zhaoxiaoyong081-平安科技-资深工程师-2","children":[]},{"level":3,"title":"4、Linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源（CPU or 内容 or 磁盘 IO）？","slug":"_4、linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源-cpu-or-内容-or-磁盘-io","link":"#_4、linux怎么找出占用负载top5的进程及主要瓶颈在哪个资源-cpu-or-内容-or-磁盘-io","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-3","link":"#zhaoxiaoyong081-平安科技-资深工程师-3","children":[]},{"level":3,"title":"5、Linux的内存计算不准如何解决？","slug":"_5、linux的内存计算不准如何解决","link":"#_5、linux的内存计算不准如何解决","children":[]},{"level":3,"title":"@Acdante HZTYYJ 技术总监：","slug":"acdante-hztyyj-技术总监","link":"#acdante-hztyyj-技术总监","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-4","link":"#zhaoxiaoyong081-平安科技-资深工程师-4","children":[]},{"level":3,"title":"6、Swap现在的应用场景还有哪些？","slug":"_6、swap现在的应用场景还有哪些","link":"#_6、swap现在的应用场景还有哪些","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-5","link":"#zhaoxiaoyong081-平安科技-资深工程师-5","children":[]},{"level":3,"title":"7、在Linux tcp方面有什么调优经验或案例？","slug":"_7、在linux-tcp方面有什么调优经验或案例","link":"#_7、在linux-tcp方面有什么调优经验或案例","children":[]},{"level":3,"title":"@zhanxuechao 数字研究院 咨询专家：","slug":"zhanxuechao-数字研究院-咨询专家","link":"#zhanxuechao-数字研究院-咨询专家","children":[]},{"level":3,"title":"@zhaoxiaoyong081 平安科技 资深工程师：","slug":"zhaoxiaoyong081-平安科技-资深工程师-6","link":"#zhaoxiaoyong081-平安科技-资深工程师-6","children":[]}]}],"git":{"createdTime":1722675454000,"updatedTime":1722675454000,"contributors":[{"name":"abelit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":21.53,"words":6458},"filePathRelative":"guide/os/linux/administration/performance.md","localizedDate":"2024年8月3日","autoDesc":true,"excerpt":"<h2>Linux内核参数详解和优化</h2>\\n<blockquote>\\n<p>Linux内核参数是操作系统中用于调整和优化系统性能和行为的关键设置。</p>\\n</blockquote>\\n<p>Linux内核参数可以通过以下几种方式进行查看和修改：</p>\\n<ol>\\n<li>\\n<p>/proc/sys目录：大多数内核参数都可以在/proc/sys目录下找到，使用sysctl命令查看和设置这些参数。</p>\\n</li>\\n<li>\\n<p>sysctl.conf文件：此文件通常位于/etc目录中，可以在系统启动时自动应用内核参数。</p>\\n</li>\\n<li>\\n<p>命令行：在系统启动时通过引导加载程序（如GRUB）传递参数（以 <code>GRUB_CMDLINE_LINUX_DEFAULT</code> 开头的那一行）。</p>\\n</li>\\n</ol>"}');export{u as comp,m as data};