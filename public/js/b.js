    var alljson={"nodes":[], "links":[],"categories":[{
        "name": "hosts"
      },
      {
        "name": "switch"
      },
      {
        "name": "控制器"
      }]};
    var nodestype=
    {
        "id": "0",
        "name": "Myriel",
        "symbolSize":100,
        "value":"暂无",
        "category": 0,
        "symbol":"image://a.png" 
    }
    var linkstype=
      {
        "source": "1",
        "target": "0"
      }
    var categoriestype=
      {
        "name": "类目0"
      }
    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();
    function Get(a,b,c){
        $.ajaxSettings.async=false;
        var A={};
        A=Object.assign({},nodestype);
        A.id="control";
        A.name="control";
        A.symbol=links_image
        A.category=2;
        alljson.nodes.push(A);
        $.getJSON(a, function (graph) {
            for (var i in graph) {
                var n={}
                var l={}
                n=Object.assign({},nodestype);
                l=Object.assign({},linkstype);
                n.id=graph[i].ipv4;
                n.name="host"+i;
                n.category=0;
                n.value=graph[i].mac;
                n.symbol=hosts_image;
                l.source=graph[i].ipv4;
                l.target=graph[i].port.dpid;
                alljson.nodes.push(n);
                alljson.links.push(l);
            }
            // console.log(alljson);
        });
        $.getJSON(b, function (graph) {
            for (var i in graph) {
                var n={}
                var l={}
                n=Object.assign({},nodestype);
                l=Object.assign({},linkstype);
                n.id=graph[i].dpid;
                n.name="switch"+i;
                n.category=1;
                // n.value=graph[i].ports.hw_addr;
                n.symbol=switches_image;
                l.source=A.id;
                l.target=graph[i].dpid;
                alljson.nodes.push(n);
                alljson.links.push(l);
            }
        });
        $.getJSON(c, function (graph) {
            for (var i in graph) {
                var l={}
                l=Object.assign({},linkstype);
                l.source=graph[i].src.dpid;
                l.target=graph[i].dst.dpid;
                alljson.links.push(l);
            }
            // console.log(hosts);
        });
        for (var i in alljson.links) {
            for (var j in alljson.links) {
                var fixed1=alljson.links[i].source;
                var fixed2=alljson.links[i].target;
                if(fixed1==alljson.links[j].target){  
                    if(fixed2==alljson.links[j].source){
                        alljson.links.splice(j,1);
                    }
                }
            }
        }
        myChart.hideLoading();
    }
    Get(hosts,switches,links);
    console.log(alljson);
// console.log(hosts);
option = {
       
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data:alljson.categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {    
                // symbol:"image://a.png",
                symbolSize:1,
                // name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                draggable: true,
                data: alljson.nodes,
                links: alljson.links,
                categories: alljson.categories,
                roam: true,
                force: {
                edgeLength: 600,
                repulsion: 700,
                gravity: 0.3
            },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.25,
                    width: 7
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 20
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
myChart.on('click',{element: 'control1'},function (params) {
    alert(params.name);
});

