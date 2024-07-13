document.addEventListener('keydown', (event) => {
    var keyName = event.code;
    switch (keyName) {
        case "ArrowDown":
            //  alert("down key.")
            //  当たり判定
            if ( maze[mainX][mainY+1] == MazeWall){
                break
            }
            //  移動
            maze[mainX][mainY + 1] = MazeMarker
            maze[mainX][mainY] = MazeStreet
            mainY = mainY + 1
            break
        case "ArrowUp":
            //alert("Up key.")
            // 壁に当たったら、何もしない（break）

            //
            maze[mainX][mainY - 1] = 2
            maze[mainX][mainY] = MazeStreet
            mainY = mainY - 1
            break
        case "ArrowLeft":
            //alert("Left key.")
            // 壁に当たったら、何もしない（break）
            
            //
            maze[mainX - 1][mainY] = 2
            maze[mainX][mainY] = MazeStreet
            mainX = mainX - 1
            break
        case "ArrowRight":
            //alert("Right key.")
            // 壁に当たったら、何もしない（break）
            
            //
            maze[mainX + 1][mainY] = 2
            maze[mainX][mainY] = MazeStreet
            mainX = mainX + 1
            break
        default:


    }
drawMaze()
})

function translateX(param) {

}
function translateY(param) {

}
// Global variable
var maze;
var MazeSize = 51
var MazeWall = 1
var MazeStreet = 0
var MazeMarker = 2
var ScaleSize = 10
var mainX, mainY

function random4() {
    var houkou = Math.floor(Math.random() * 4 + 1)
    // 戻り値は１から４
    return houkou
}
function init() {
    // alert( "makedata...")
    // 迷路の二次元配列を作る
    maze = new Array(MazeSize)
    for (var i = 0; i < MazeSize; i++) {
        maze[i] = new Array(MazeSize)
    }
    // 全て道にする
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            maze[i][j] = MazeStreet
        }
    }
    // 外周部を壁にする
    for (var i = 0; i < 51; i++) {
        maze[0][i] = MazeWall
        // 上側の壁を作る

        // 右側の壁を作る

        // 左側の壁を作る
        maze[i][MazeSize - 1] = MazeWall

    }
    //  通れない壁を設定する
    // i = 2, 4, 6,..., 48

        // j = 2, 4, 6,..., 48

            maze[i][j] = 1
            maze[10][10] = 1
        // 閉じかっこ

    //　閉じかっこ
    // 壁を作る
    for (var i = 2; i < 51 - 2; i += 2) {
        for (var j = 2; j < 51 - 2; j += 2) {
            var houkou = random4()
            switch (houkou) {
                case 1:
                    
                    break;
                case 2:
                    
                    break;
                case 3:
                    
                    break;
                case 4:
                    
                    break;

                default:
                    alert("error")
            }
        }
    }
    maze[0][0] = maze[1][0] = maze[1][1] = maze[0][1] = 0
    maze[51 - 1][51 - 1] = maze[51 - 1 - 1][51 - 1] = maze[51 - 1][51 - 1 - 1] = maze[51 - 1 - 1][51 - 1 - 1] = 0

    // 自分のキャラ位置を設定
    mainX = mainY = 0
    maze[mainX][mainY] = 2

    dumpMaze()

    // イベント初期化
    var element = document.getElementById("myCanvas")
    element.onkeydown = function (event) {
        var keyEvent = event || window.event;

        alert(keyEvent.keyCode);

        // charCodeは存在する？ (IE9より前はcharCodeをサポートしない)
        if ('charCode' in keyEvent) {
            alert(keyEvent.charCode);
        }
    }
}

function drawBlock(x, y) {
    var item = document.getElementById("myCanvas")
    var context = item.getContext("2d")
    if (item.getContext) {
        switch (maze[x][y]) {
            case 1:
                context.fillStyle = "rgb(0, 0, 0)";
                context.fillRect(10 * x, 10 * y, 10, 10)
                break;
            case 0:
                context.fillStyle = "rgb(255, 255, 255)";
                context.fillRect(10 * x, 10 * y, 10, 10)

                break
            case 2:
                context.fillStyle = "rgb(255, 0, 0)";
                context.fillRect(10 * x, 10 * y, 10, 10)

                break
            default:

        }
    }
}
function dumpMaze() {
    var str = ""
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            str = str + maze[i][j]
        }
        str = str + "\n"
    }
    console.log(str)
}
function drawMaze() {
    for (var i = 0; i < 51; i++) {
        for (var j = 0; j < 51; j++) {
            drawBlock(i, j)
        }
    }

}
function hitkey() {
    var item = window.event.keyCode

}