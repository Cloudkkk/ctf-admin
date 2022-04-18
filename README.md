# 《基于交换机小程序的加密跳变主动防御系统》
### CTF作品赛项目前端部分
+ 技术栈： React + antd + echart
+ 接口API&虚拟机操作指令
```
startup ovs
export PATH=$PATH:/usr/local/share/openvswitch/scripts
ovs-ctl start
export PATH=$PATH:/usr/local/share/openvswitch/scripts
ovs-ctl --no-ovs-vswitchd start
export PATH=$PATH:/usr/local/share/openvswitch/scripts
ovs-ctl --no--ovsdb-server start
mkdir -p /usr/local/etc/openvswitch
ovsdb-tool create /usr/local/etc/openvswitch/conf.db vswitchd/vswitch.ovsschema
mkdir -p /usr/local/var/run/openvswitch
ovsdb-server --remote=punix:/usr/local/var/run/openvswitch/db.sock --remote=db:Open_vSwitch,Open_vSwitch,manager_options --private-key=db:Open_vSwitch,SSL,private_key --certificate=db:Open_vSwitch,SSL,certificate --bootstrap-ca-cert=db:Open_vSwitch,SSL,ca_cert --pidfile --detach --log-file
ovs-vsctl --no-wait init
ovs-vswitchd --pidfile --detach --log-file
cat /dev/null > /var/log/syslog
ovs-appctl vlog/set ANY:syslog:info
ovs-vsctl show

mn --custom /home/mininet/Projects/ryu/mytopo.py --topo mytopo --controller=remote
##
ryu-manager /home/mininet/Projects/ryu/controller.py /home/mininet/Projects/ryu/ofctl_rest.py --observe-links

#
py s1.attach('s1-eth4')
py s2.attach('s2-eth3')
py s3.attach('s3-eth3')
py s4.attach('s4-eth4')
py net.addLink(s1, c0)
py net.addLink(s2, c0)
py net.addLink(s3, c0)
py net.addLink(s4, c0)
py s1.cmd('ifconfig s1-eth4 10.0.1.1')
py s2.cmd('ifconfig s2-eth3 10.0.1.2')
py s3.cmd('ifconfig s3-eth3 10.0.1.3')
py s4.cmd('ifconfig s4-eth4 10.0.1.4')
pingall
pingall


REST API


Retrieve the switch stats

get the list of all switches
GET /stats/switches

get the desc stats of the switch
GET /stats/desc/<dpid>

get flows desc stats of the switch
GET /stats/flowdesc/<dpid>

get flows desc stats of the switch filtered by the fields
POST /stats/flowdesc/<dpid>

get flows stats of the switch
GET /stats/flow/<dpid>

get flows stats of the switch filtered by the fields
POST /stats/flow/<dpid>

get aggregate flows stats of the switch
GET /stats/aggregateflow/<dpid>

get aggregate flows stats of the switch filtered by the fields
POST /stats/aggregateflow/<dpid>

get table stats of the switch
GET /stats/table/<dpid>

get table features stats of the switch
GET /stats/tablefeatures/<dpid>

get ports stats of the switch
GET /stats/port/<dpid>[/<port>]
Note: Specification of port number is optional

get queues stats of the switch
GET /stats/queue/<dpid>[/<port>[/<queue_id>]]
Note: Specification of port number and queue id are optional
      If you want to omitting the port number and setting the queue id,
      please specify the keyword "ALL" to the port number
      e.g. GET /stats/queue/1/ALL/1

get queues config stats of the switch
GET /stats/queueconfig/<dpid>[/<port>]
Note: Specification of port number is optional

get queues desc stats of the switch
GET /stats/queuedesc/<dpid>[/<port>[/<queue_id>]]
Note: Specification of port number and queue id are optional
      If you want to omitting the port number and setting the queue id,
      please specify the keyword "ALL" to the port number
      e.g. GET /stats/queuedesc/1/ALL/1

get meter features stats of the switch
GET /stats/meterfeatures/<dpid>

get meter config stats of the switch
GET /stats/meterconfig/<dpid>[/<meter_id>]
Note: Specification of meter id is optional

get meter desc stats of the switch
GET /stats/meterdesc/<dpid>[/<meter_id>]
Note: Specification of meter id is optional

get meters stats of the switch
GET /stats/meter/<dpid>[/<meter_id>]
Note: Specification of meter id is optional

get group features stats of the switch
GET /stats/groupfeatures/<dpid>

get groups desc stats of the switch
GET /stats/groupdesc/<dpid>[/<group_id>]
Note: Specification of group id is optional (OpenFlow 1.5 or later)

get groups stats of the switch
GET /stats/group/<dpid>[/<group_id>]
Note: Specification of group id is optional

get ports description of the switch
GET /stats/portdesc/<dpid>[/<port_no>]
Note: Specification of port number is optional (OpenFlow 1.5 or later)

Update the switch stats

add a flow entry
POST /stats/flowentry/add

modify all matching flow entries
POST /stats/flowentry/modify

modify flow entry strictly matching wildcards and priority
POST /stats/flowentry/modify_strict

delete all matching flow entries
POST /stats/flowentry/delete

delete flow entry strictly matching wildcards and priority
POST /stats/flowentry/delete_strict

delete all flow entries of the switch
DELETE /stats/flowentry/clear/<dpid>

add a meter entry
POST /stats/meterentry/add

modify a meter entry
POST /stats/meterentry/modify

delete a meter entry
POST /stats/meterentry/delete

add a group entry
POST /stats/groupentry/add

modify a group entry
POST /stats/groupentry/modify

delete a group entry
POST /stats/groupentry/delete

modify behavior of the physical port
POST /stats/portdesc/modify

modify role of controller
POST /stats/role


send a experimeter message
POST /stats/experimenter/<dpid>

上传小程序，body中存放小程序
PUT /stats/program/<dpid>/<name>
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

删除小程序
DELETE /stats/program/<dpid>/<name>
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

查询当前所有小程序及其信息
GET /stats/program/<dpid>
成功返回 {"code": 0, "msg": [[名称,创建时间,大小],...[名称,创建时间,大小]]}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

上传配置文件，body中存放配置文件的json数据
PUT /stats/config/<dpid>/<id>
数据格式 {"name": "小程序名称", "parameter": "小程序参数"}
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

删除配置文件
DELETE /stats/config/<dpid>/<id>
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

查询当前所有配置文件及其信息
GET /stats/config/<dpid>
成功返回 {"code": 0, "msg": [[名称,创建时间,大小],...[名称,创建时间,大小]]}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

查询所有用户信息
GET /stats/user/<dpid>
成功返回 {"code": 0, "msg": [[用户名称,uid],...[用户名称,uid]]}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

上传文件，向ovs中发送文件
POST /stats/file/<dpid>
数据格式 {"path": "", "file": }
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

下载文件，从ovs中获取文件，path为要获取的ovs中的文件路径
GET /stats/file/<dpid>
数据格式 {"path": ""}
成功返回 文件数据
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

执行 shell 命令，body中存放shell命令
PUT /stats/shell/<dpid>
成功返回 {"code": 0, "msg": "执行结果信息"}，执行结果信息为原信息即shell原生结果
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

以上功能均需要与ovs进行通信，请勿频繁调用


获取所有交换机信息
GET /stats/net/switches
成功返回 {"code": 0, "msg":[
		{
			"dpid": "0000000000000008",
			"ports": [
				{
					"dpid": "0000000000000008",
					"port_no": "00000002",
					"hw_addr": "da:83:d7:e9:32:bb",
					"name": "s8-eth2"
				}
			]
		}
  ]
失败返回 {"code": 0, "msg": []},

获取所有主机信息
GET /stats/net/hosts
成功返回 {"code": 0, "msg":[
		{
			"mac": "22:8a:68:a5:ae:87",
			"ipv4": [
				"10.0.0.1"
			],
			"ipv6": [],
			"port": {
				"dpid": "0000000000000001",
				"port_no": "00000001",
				"hw_addr": "16:b6:49:eb:3b:bb",
				"name": "s1-eth1"
			}
		}
  ]
失败返回 {"code": 0, "msg": []},

获取所有链路信息
GET /stats/net/links
成功返回 {"code": 0, "msg":[
		{
			"src": {
				"dpid": "0000000000000007",
				"port_no": "00000003",
				"hw_addr": "12:4f:ca:47:20:a0",
				"name": "s7-eth3"
			},
			"dst": {
				"dpid": "0000000000000008",
				"port_no": "00000002",
				"hw_addr": "da:83:d7:e9:32:bb",
				"name": "s8-eth2"
			}
		}
  ]
失败返回 {"code": 0, "msg": []},

获取当前正在使用的算法和密钥
GET /stats/net/program
成功返回 {"code": 0, "msg": {"dpid": {("name", "parameter"),}}}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

获取所有小程序的运行身份
GET /stats/net/config
成功返回 {"code": 0, "msg": {"name": uid}}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

设置小程序运行身份，name为小程序名称，uid为运行身份
POST /stats/net/config/<name>/<uid>
成功返回 {"code": 0, "msg": "OK"}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0

获取所有源和目的交换机的 dpid
GET /stats/net/edge
成功返回 {"code": 0, "msg": ["0000000000000001",...]}
失败返回 {"code": x, "msg": "错误信息"},x为错误码，非0
```
