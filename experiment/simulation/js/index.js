var connections = [];

function reload(event) {
    window.location.reload()
}

function BoardController() {
    var jsPlumbInstance = null;
    var endPoints = [];

    this.setJsPlumbInstance = function(instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function(drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function() {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 30 }],
            PaintStyle: { strokeStyle: '#87321b', lineWidth: 4 },
            EndpointStyle: { radius: 3, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#26c947" }
        });

        jsPlumbInstance.bind("beforeDrop", function(params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function(conn) {
            jsPlumb.detach(conn);
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function(conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function(radius, divID, groupName, endPointName, anchorArray, color, stroke) {
        var Stroke;
        if(typeof(stroke)=='undefined'){
            Stroke = '#87321b';
        }
        else{
            Stroke = stroke;
        }
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: 1,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle:{ strokeStyle:Stroke, lineWidth: 4}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function(endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

}


var con;

function checkCircuit() {
    con = false;
    var g = new Graph(30);


    var groups = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'VCC', 'GND', 'c_A', 'c_B', 'r1_A', 'r1_B', 'ic7400_VCC', 'ic7400_GND', 'ic7400_4A', 'ic7400_4B', 'ic7400_4Y', 'ic7400_3A', 'ic7400_3B', 'ic7400_3Y', 'ic7400_2A', 'ic7400_2B', 'ic7400_2Y', 'ic7400_1A', 'ic7400_1B', 'ic7400_1Y', 'cro_A', 'cro_B']

    console.log(groups.length)

    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) { // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }

    if (
              g.isConnected('ic7400_VCC','VCC') && g.isConnected('ic7400_GND','GND') &&  
            (
              g.isConnected('c_A','GND') && 
              (
              g.isConnected('c_B','r1_A')  && 
              (g.isConnected('c_B','ic7400_4A') && g.isConnected('c_B','ic7400_4B') && g.isConnected('r1_B','ic7400_4Y') && (g.isConnected('ic7400_4Y','cro_A') || g.isConnected('ic7400_4Y','cro_B')) ) ||
              (g.isConnected('c_B','ic7400_3A') && g.isConnected('c_B','ic7400_3B') && g.isConnected('r1_B','ic7400_3Y') && (g.isConnected('ic7400_3Y','cro_A') || g.isConnected('ic7400_3Y','cro_B')) ) ||
              (g.isConnected('c_B','ic7400_2A') && g.isConnected('c_B','ic7400_2B') && g.isConnected('r1_B','ic7400_2Y') && (g.isConnected('ic7400_2Y','cro_A') || g.isConnected('ic7400_2Y','cro_B')) ) ||
              (g.isConnected('c_B','ic7400_1A') && g.isConnected('c_B','ic7400_1B') && g.isConnected('r1_B','ic7400_1Y') && (g.isConnected('ic7400_1Y','cro_A') || g.isConnected('ic7400_1Y','cro_B')) ) 
              )||
              (
                g.isConnected('c_B','r1_B')  && 
                (g.isConnected('c_B','ic7400_4A') && g.isConnected('c_B','ic7400_4B') && g.isConnected('r1_A','ic7400_4Y') && (g.isConnected('ic7400_4Y','cro_A') || g.isConnected('ic7400_4Y','cro_B')) ) ||
                (g.isConnected('c_B','ic7400_3A') && g.isConnected('c_B','ic7400_3B') && g.isConnected('r1_A','ic7400_3Y') && (g.isConnected('ic7400_3Y','cro_A') || g.isConnected('ic7400_3Y','cro_B')) ) ||
                (g.isConnected('c_B','ic7400_2A') && g.isConnected('c_B','ic7400_2B') && g.isConnected('r1_A','ic7400_2Y') && (g.isConnected('ic7400_2Y','cro_A') || g.isConnected('ic7400_2Y','cro_B')) ) ||
                (g.isConnected('c_B','ic7400_1A') && g.isConnected('c_B','ic7400_1B') && g.isConnected('r1_A','ic7400_1Y') && (g.isConnected('ic7400_1Y','cro_A') || g.isConnected('ic7400_1Y','cro_B')) ) 
              )
            )||
            (
                g.isConnected('c_B','GND') && 
              (
               g.isConnected('c_A','r1_A')  && 
              (g.isConnected('c_A','ic7400_4A') && g.isConnected('c_A','ic7400_4B') && g.isConnected('r1_B','ic7400_4Y') && (g.isConnected('ic7400_4Y','cro_A') || g.isConnected('ic7400_4Y','cro_B')) ) ||
              (g.isConnected('c_A','ic7400_3A') && g.isConnected('c_A','ic7400_3B') && g.isConnected('r1_B','ic7400_3Y') && (g.isConnected('ic7400_3Y','cro_A') || g.isConnected('ic7400_3Y','cro_B')) ) ||
              (g.isConnected('c_A','ic7400_2A') && g.isConnected('c_A','ic7400_2B') && g.isConnected('r1_B','ic7400_2Y') && (g.isConnected('ic7400_2Y','cro_A') || g.isConnected('ic7400_2Y','cro_B')) ) ||
              (g.isConnected('c_A','ic7400_1A') && g.isConnected('c_A','ic7400_1B') && g.isConnected('r1_B','ic7400_1Y') && (g.isConnected('ic7400_1Y','cro_A') || g.isConnected('ic7400_1Y','cro_B')) ) 
              )||
              (
                 g.isConnected('c_A','r1_B')  && 
                (g.isConnected('c_A','ic7400_4A') && g.isConnected('c_A','ic7400_4B') && g.isConnected('r1_A','ic7400_4Y') && (g.isConnected('ic7400_4Y','cro_A') || g.isConnected('ic7400_4Y','cro_B')) ) ||
                (g.isConnected('c_A','ic7400_3A') && g.isConnected('c_A','ic7400_3B') && g.isConnected('r1_A','ic7400_3Y') && (g.isConnected('ic7400_3Y','cro_A') || g.isConnected('ic7400_3Y','cro_B')) ) ||
                (g.isConnected('c_A','ic7400_2A') && g.isConnected('c_A','ic7400_2B') && g.isConnected('r1_A','ic7400_2Y') && (g.isConnected('ic7400_2Y','cro_A') || g.isConnected('ic7400_2Y','cro_B')) ) ||
                (g.isConnected('c_A','ic7400_1A') && g.isConnected('c_A','ic7400_1B') && g.isConnected('r1_A','ic7400_1Y') && (g.isConnected('ic7400_1Y','cro_A') || g.isConnected('ic7400_1Y','cro_B')) ) 
              )
            )
              
    )

    {
        alert("Right Connections")
        con = true;
        var x = document.getElementById('mydiv');
        x.style.visibility = 'visible';
        x.style.display = "block";
        var y = document.getElementById('right');
        y.style.display = "none";
        var z = document.getElementById('right-check');
        z.style.display = "block";

        if (g.isConnected('r1_A','cro_A') || g.isConnected('r1_B','cro_A')) {
            document.getElementById('channel').value = "a";
            init("a");
        } else if (g.isConnected('r1_A', 'cro_B') || g.isConnected('r1_B', 'cro_B')) {
            document.getElementById('channel').value = "b";
            init("b");
        }

    } else {
        alert("Wrong Connections")
    }
    console.log("executed")
}
