// Instruction Button Code

const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});




// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
        instance.addEndPoint(4.2, 'board', 'row1', 'r1', [0, 0, 0, -1, 59, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r2', [0, 0, 0, -1, 72.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r4', [0, 0, 0, -1, 99.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r5', [0, 0, 0, -1, 113, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r3', [0, 0, 0, -1, 86, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r9', [0, 0, 0, -1, 180.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r11', [0, 0, 0, -1, 221, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r8', [0, 0, 0, -1, 167, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r6', [0, 0, 0, -1, 140, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r10', [0, 0, 0, -1, 194, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r15', [0, 0, 0, -1, 275, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r7', [0, 0, 0, -1, 153.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r16', [0, 0, 0, -1, 302, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r20', [0, 0, 0, -1, 356, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r18', [0, 0, 0, -1, 329, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r21', [0, 0, 0, -1, 383, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r13', [0, 0, 0, -1, 248, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r22', [0, 0, 0, -1, 396.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r23', [0, 0, 0, -1, 410, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r25', [0, 0, 0, 0, 437, 26], 'blue');



        instance.addEndPoint(4.2, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r33', [0, 0, 0, 1, 167, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r50', [0, 0, 0, 0, 437, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 39.5], 'blue');



        instance.addEndPoint(4.2, 'board', 'row3', 'r51', [0, 0, 0, 0, 478, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r71', [0, 0, 0, -1, 802, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 26], 'blue');



        instance.addEndPoint(4.2, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 39.5], 'blue');


        instance.addEndPoint(4.2, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 269], 'blue');



        instance.addEndPoint(4.2, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 282.5], 'blue');



        instance.addEndPoint(4.2, 'board', 'row7', 'r151', [0, 0, 0, 0, 478, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r172', [0, 0, 0, -1, 814.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 269], 'blue');


        instance.addEndPoint(4.2, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 282.5], 'blue');
    }
}

function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');

    supply.addEndPoint(7, 'supply', 'VCC', 'VCC', [0, 0, -1, 0, 40, 45], 'blue','red');
    supply.addEndPoint(7, 'supply', 'GND', 'GND', [0, 0, 1, 0, 80, 45], 'red','black');
}

function cro(){
    var x = document.getElementById("cro");
    x.style.visibility = "visible";

   var cro = new BoardController();
    cro.setJsPlumbInstance(jsPlumb);
    cro.setCircuitContainer('cro');

    cro.addEndPoint(9, 'cro', 'cro_A', 'cro_A', [0, 0, 0, 0, 235, 158], 'red');
    cro.addEndPoint(9, 'cro', 'cro_B', 'cro_B', [0, 0, 0, 0, 270, 158], 'red');
  
}

function c(){
    var x = document.getElementById("c");
    x.style.visibility = "visible";

    var y= document.getElementById("c_label");
    y.style.visibility = "visible";
    var c = new BoardController();
    c.setJsPlumbInstance(jsPlumb);
    c.setCircuitContainer('mid');

    c.addEndPoint(4.2, 'c', 'c_A', 'c_A01', [0, 0, 0, 1, 8, 111], 'red');
    c.addEndPoint(4.2, 'c', 'c_A', 'c_A02', [0, 0, 0, 1, 8, 124.5], 'red');
    c.addEndPoint(4.2, 'c', 'c_A', 'c_A03', [0, 0, 0, 1, 8, 138], 'red');
    c.addEndPoint(4.2, 'c', 'c_A', 'c_A04', [0, 0, 0, 1, 8, 151.5], 'red');

    c.addEndPoint(4.2, 'c', 'c_B', 'c_B01', [0, 0, 0, 1, 35, 111], 'red');
    c.addEndPoint(4.2, 'c', 'c_B', 'c_B02', [0, 0, 0, 1, 35, 124.5], 'red');
    c.addEndPoint(4.2, 'c', 'c_B', 'c_B03', [0, 0, 0, 1, 35, 138], 'red');
    c.addEndPoint(4.2, 'c', 'c_B', 'c_B04', [0, 0, 0, 1, 35, 151.5], 'red');
}

function r1(){
    var x = document.getElementById("r1");
    x.style.visibility = "visible";
    var y= document.getElementById("r11_label");
    y.style.visibility = "visible";
    var z= document.getElementById("r12_label");
    z.style.visibility = "visible";
    var r1 = new BoardController();
    r1.setJsPlumbInstance(jsPlumb);
    r1.setCircuitContainer('mid');

    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A01', [0, 0, -1, 0, 8, 4], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A02', [0, 0, -1, 0, 8, 17.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A03', [0, 0, -1, 0, 8, 31], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_A', 'r1_A04', [0, 0, -1, 0, 8, 44.5], 'red');

    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B01', [0, 0, 0, 1, 8, 111.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B02', [0, 0, 0, 1, 8, 125], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B03', [0, 0, 0, 1, 8, 138.5], 'red');
    r1.addEndPoint(4.2, 'r1', 'r1_B', 'r1_B04', [0, 0, 0, 1, 8, 152], 'red');
}

function ic7400() {
    var x = document.getElementById("ic7400");
    x.style.visibility = "visible";

    var ic7400 = new BoardController();
    ic7400.setJsPlumbInstance(jsPlumb);
    ic7400.setCircuitContainer('mid');

    {
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_VCC', 'ic7400_VCC01', [0, 0, 1, -1, 9, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_VCC', 'ic7400_VCC02', [0, 0, 1, -1, 9, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_VCC', 'ic7400_VCC03', [0, 0, 1, -1, 9, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_VCC', 'ic7400_VCC04', [0, 0, 1, -1, 9, 44.5], 'red');
        

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4A', 'ic7400_4A01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4A', 'ic7400_4A02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4A', 'ic7400_4A03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4A', 'ic7400_4A04', [0, 0, 1, -1, 22.5, 44.5], 'red');
       

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4B', 'ic7400_4B01', [0, 0, 1, -1, 36, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4B', 'ic7400_4B02', [0, 0, 1, -1, 36, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4B', 'ic7400_4B03', [0, 0, 1, -1, 36, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4B', 'ic7400_4B04', [0, 0, 1, -1, 36, 44.5], 'red');
     

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4Y', 'ic7400_4Y01', [0, 0, 1, -1, 49.5, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4Y', 'ic7400_4Y02', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4Y', 'ic7400_4Y03', [0, 0, 1, -1, 49.5, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_4Y', 'ic7400_4Y04', [0, 0, 1, -1, 49.5, 44.5], 'red');
      

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3A', 'ic7400_3A01', [0, 0, 1, -1, 63, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3A', 'ic7400_3A02', [0, 0, 1, -1, 63, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3A', 'ic7400_3A03', [0, 0, 1, -1, 63, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3A', 'ic7400_3A04', [0, 0, 1, -1, 63, 44.5], 'red');
     

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3B', 'ic7400_3B01', [0, 0, 1, -1, 76.5, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3B', 'ic7400_3B02', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3B', 'ic7400_3B03', [0, 0, 1, -1, 76.5, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3B', 'ic7400_3B04', [0, 0, 1, -1, 76.5, 44.5], 'red');
      

        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3Y', 'ic7400_3Y01', [0, 0, 1, -1, 90, 4], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3Y', 'ic7400_3Y02', [0, 0, 1, -1, 90, 17.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3Y', 'ic7400_3Y03', [0, 0, 1, -1, 90, 31], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_3Y', 'ic7400_3Y04', [0, 0, 1, -1, 90, 44.5], 'red');
      

      
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1A', 'ic7400_1A02', [0, 0, 1, -1, 9, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1A', 'ic7400_1A03', [0, 0, 1, -1, 9, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1A', 'ic7400_1A04', [0, 0, 1, -1, 9, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1A', 'ic7400_1A05', [0, 0, 1, -1, 9, 152], 'red');

        
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1B', 'ic7400_1B02', [0, 0, 1, -1, 22.5, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1B', 'ic7400_1B03', [0, 0, 1, -1, 22.5, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1B', 'ic7400_1B04', [0, 0, 1, -1, 22.5, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1B', 'ic7400_1B05', [0, 0, 1, -1, 22.5, 152], 'red');

      
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1Y', 'ic7400_1Y02', [0, 0, 1, -1, 36, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1Y', 'ic7400_1Y03', [0, 0, 1, -1, 36, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1Y', 'ic7400_1Y04', [0, 0, 1, -1, 36, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_1Y', 'ic7400_1Y05', [0, 0, 1, -1, 36, 152], 'red');

       
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2A', 'ic7400_2A02', [0, 0, 1, -1, 49.5, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2A', 'ic7400_2A03', [0, 0, 1, -1, 49.5, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2A', 'ic7400_2A04', [0, 0, 1, -1, 49.5, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2A', 'ic7400_2A05', [0, 0, 1, -1, 49.5, 152], 'red');

      
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2B', 'ic7400_2B02', [0, 0, 1, -1, 63, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2B', 'ic7400_2B03', [0, 0, 1, -1, 63, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2B', 'ic7400_2B04', [0, 0, 1, -1, 63, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2B', 'ic7400_2B05', [0, 0, 1, -1, 63, 152], 'red');

      
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2Y', 'ic7400_2Y02', [0, 0, 1, -1, 76.5, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2Y', 'ic7400_2Y03', [0, 0, 1, -1, 76.5, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2Y', 'ic7400_2Y04', [0, 0, 1, -1, 76.5, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_2Y', 'ic7400_2Y05', [0, 0, 1, -1, 76.5, 152], 'red');

     
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_GND', 'ic7400_GND02', [0, 0, 1, -1, 90, 111.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_GND', 'ic7400_GND03', [0, 0, 1, -1, 90, 125], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_GND', 'ic7400_GND04', [0, 0, 1, -1, 90, 138.5], 'red');
        ic7400.addEndPoint(4.2, 'ic7400', 'ic7400_GND', 'ic7400_GND05', [0, 0, 1, -1, 90, 152], 'red');
    }

}



