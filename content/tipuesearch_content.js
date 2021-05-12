var tipuesearch = {"pages": [{'title': 'About', 'text': '小組個人成員倉儲/ 小組個人成員網頁 \n 40823211 /40823211 \xa0陳昱愷 \n 40823214 / 40823214 \xa0 林厚宇 \n 40823216 /40823216 \xa0 陳弘勛 \n 40823218 /40823218 \xa0 陳致文 \n 40823225 /40823225 \xa0 徐誠隆 \n 40823238 /40823238 \xa0 吳容輝 \n 40823247 /40823247 \xa0 許力右 \n 40823248 /40823248 \xa0 劉彥廷 \n', 'tags': '', 'url': 'About.html'}, {'title': '機械手臂', 'text': '原本我們的主題，是在我們原本在stage2-bg6所做的腳踏車衝擊測試機跟機械手臂在做選擇，但考慮到 腳踏車衝擊測試機的零件數過多及他所會遇到的力學相關的問題，所以我們最後討論出來的結果是，將主題訂為機械手臂。 \n', 'tags': '', 'url': '機械手臂.html'}, {'title': '繪圖成果', 'text': '\n', 'tags': '', 'url': '繪圖成果.html'}, {'title': '程式模擬', 'text': '', 'tags': '', 'url': '程式模擬.html'}, {'title': 'W10', 'text': '上網找的資料顯示coppeliasim上有一個編輯程式的選項 \n 參考資料: https://zhuanlan.zhihu.com/p/105960079 \n 4/27(二)因為繪圖部分還沒畫好，今天暫時用coppeliasim裡的機械手臂模型來模擬。 \n 設定的主體上連結每個零件，各零件之間有可以旋轉的軸，以及連結的命令區塊 \n 下圖為參考的機械手臂: \n \n 這是機械手臂的零件圖: \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '根據上網找的資料，發現COPPELIASIM的程式編譯語言為LUA，但仍可透過改變設定，來使用其他語言編譯。 \n \n 以下為參考資料: \n https://blog.csdn.net/qq_29696095/article/details/104406971 https://blog.csdn.net/qq_29696095/article/details/104474081 https://www.coppeliarobotics.com/helpFiles/en/inverseKinematicsTutorial.htm \n http://mde.tw/cd2021/downloads/V-REP%20Lecture.pdf http://hades.mech.northwestern.edu/index.php/CoppeliaSim_Introduction https://www.coppeliarobotics.com/helpFiles/index.html http://mde.tw/cd2021/content/V-rep.html \n 先叫出一個簡單的軸 \n 第一次使用coppeliaSim 模擬 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W11-2', 'text': '第一次模擬 \n 使用coppeliaSim\xa0先叫出一個簡單的軸 \n 來進行模擬控制 \n \n \n 第二次模擬\xa0 \n 將所有物件控制後直接進行模擬，檢測是否有異樣 \n \n \n 第三次模擬 \n 嘗試使用程式控制 \n 但是還是會亂跑 \n \n \n \n 第四次模擬 \n \n \n 勉強可以控制路徑了(預先設定 \n \n 第五次模擬 \n 可以透過程式來進行路徑的預先規劃 \n \n \n', 'tags': '', 'url': 'W11-2.html'}, {'title': 'CoppliaSim圖檔', 'text': '', 'tags': '', 'url': 'CoppliaSim圖檔.html'}, {'title': '尋找控制代碼', 'text': 'coppeliasim中 \n simGetSimulatorMessage()為讀取鍵盤狀態的指令 \n 但是我們不知道指令是甚麼，所以寫了一段程式來檢測看每一個按鍵的指令是什麼 \n 所以寫了這一支程式來檢測每一個按鈕的值 \n 在coppeliaSim中叫出一個物件，然後對那個物件編寫程式如下 \n 開始模擬後按下鍵盤鍵即可在下方視窗顯示對應的按鍵 \n \n \n', 'tags': '', 'url': '尋找控制代碼.html'}, {'title': '控制解說', 'text': '方向鍵上,下，控制大臂的上下移動 \n 方向鍵左,右，控制底座的旋轉 \n 小鍵盤2,8 控制小臂上下移動 \n 小鍵盤4,6 控制小臂的旋轉 \n 小鍵盤1,3 控制手腕的轉動 \n 小鍵盤0 控制小臂是否與大臂連動 \n \n \n', 'tags': '', 'url': '控制解說.html'}, {'title': 'Programming in Lua on multiple program', 'text': '圖檔下載 \n programming in Lua in multiple program.ttt \n 簡介: \n 最基本的控制 \n 在單一軸上對單一軸做程式控制 \n 優點: 程式簡單，變數少 \n 缺顛: 要修改程式不易，有幾個程式就需要修改幾次 \n \n \n \n \n \n', 'tags': '', 'url': 'Programming in Lua on multiple program.html'}, {'title': 'Programming in Lua in One program', 'text': '圖檔 \n programming in Lua in One program.ttt \n 簡介 \n 使用單一程式進行控制 \n 優點: 程式只有一個，所以可以在編寫上比較輕鬆 \n 缺點: 程式較長，尋找特定函式較不易，變數較多程式控制還多，命名上須留意 \n \n \n \n', 'tags': '', 'url': 'Programming in Lua in One program.html'}, {'title': 'Programming in C++', 'text': '圖檔: \n programmingl in C++ Unclear.ttt \n 簡介: \n 目前還尚未寫出(5/11)，在編譯上還有問題，問題跟"remoteAPI in C++"中的問題一樣 \n 並且尚未確定是否能直些在CoppliaSim中運行C++程式 \n \n \n \n', 'tags': '', 'url': 'Programming in C++.html'}, {'title': '教學影片', 'text': '\n', 'tags': '', 'url': '教學影片.html'}, {'title': 'remoteAPI', 'text': '', 'tags': '', 'url': 'remoteAPI.html'}, {'title': 'remoteAPI in C++', 'text': '', 'tags': '', 'url': 'remoteAPI in C++.html'}, {'title': '5月11', 'text': '嘗試以C++最為remoteAPI控制的語言 \n 進行修改後還是出現問題 \n simxGetObjectHandle(clientID, "joint1", &joint01, simx_opmode_oneshot_wait); \n 上程式片段中 \n simx_opmode_oneshot_wait \n 此定義一直出現error，內容如下 \n error: \'simx_opmode_oneshot_wait\' was not declared in this scope \n 中譯:\xa0 simx_opmode_oneshot_wait 定義不明 \n 但是在尋找網路上的範例，寫法也都是如我程式中一樣，目前還在尋找解決方法 \n \n 附上程式 \n #include <Windows.h>\n#include <iostream>\n#include <stdio.h>\n#include <stdlib.h>\n#include <math.h>\n\n\nextern "C" {\n    #include "remoteAPI/extApi.h"\n}\n\n\n\nusing namespace std;\n\nint main(){\n    int clientID = 0;\n    simxFinish(-1);\n    clientID = simxStart((simxChar*)"127.0.0.1", 19997, true, true, 5000, 5);\n    Sleep(1);\n    if (clientID != -1)\n    {\n        int joint01;\n        int joint02;\n        int joint03;\n        int joint04;\n        int joint05;\n        simxGetObjectHandle(clientID, "joint1", &joint01, simx_opmode_oneshot_wait);//setting\n        simxGetObjectHandle(clientID, "joint2", &joint02, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint3", &joint03, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint4", &joint04, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint5", &joint05, simx_opmode_oneshot_wait);\n\n\n        float degset01=-11.9;\n        float degset02=34.69;\n        float degset03=-20.2;\n        float degset04=-11.9;\n        float degset05=-11.9;\n        float dif=1;\n\n        //angle set0\n        simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n        bool balance_contral=true;\n\n\n        clientID,auxiliaryData=simGetSimulatorMessage();\n\n\n        while (clientID!=-1) {\n            if (clientID==simxmessage_keypress) {\n                if (auxiliaryData[1]==2009) { //up Key\n                    degset01=degset01+dif;\n                    simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2010) { //down key\n                    degset01=degset01-dif;\n                    simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2007) { //left key\n                    degset02=degset02+dif;\n                    simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2008) {  //right key\n                    degset02=degset02-dif;\n                    simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==56) { //num8 key\n                    degset03=degset03+dif;\n                    simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==50) { //num2 key\n                    degset03=degset03-dif;\n                    simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n\n                }\n                if (auxiliaryData[1]==54) { //num6 key\n                    degset04=degset04+dif;\n                    simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==52) { //num4 key\n                    degset04=degset04-dif;\n                    simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==49) { //mun1 key\n                    degset05=degset05+dif;\n                    simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==51) { //num3 key\n                    degset05=degset05-dif;\n                    simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n                }\n\n\n\n\n                if  (auxiliaryData[1]==48){ //setting auto Balance at num0 key\n                    if (balance_contral==true){\n                        balance_contral=false;\n                    }else{\n                        balance_contral=true;\n                    }\n                }\n                if (balance_contral==true) {\n                    if (auxiliaryData[1]==2007) {\n                        degset03=degset03+dif ;\n                        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                    }\n                    if (auxiliaryData[1]==2008) {\n                        degset03=degset03-dif;\n                        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                        }\n                    }\n                }\n        clientID,auxiliaryData=simGetSimulatorMessage();\n        }\n    }\n    simxFinish(clientID);\n    return clientID;\n}\n \n \n', 'tags': '', 'url': '5月11.html'}, {'title': 'remoteAPI in python', 'text': '', 'tags': '', 'url': 'remoteAPI in python.html'}, {'title': '0513', 'text': '嘗試用remoteAPI鍵盤控制機械手臂，不過手臂上段模擬時出現甩動問題，因此只展示下半部分。 \n \n \n 程式碼 \n # File created by Thibaut Royer, Epitech school\n# thibaut1.royer@epitech.eu\n# It intends to be an example program for the "Two wheels, one arm" educative project.\n\nimport sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.0.4\', 19997, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823218",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n    # Communication operating mode with the remote API : wait for its answer before continuing (blocking mode)\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiConstants.htm\n    opmode = vrep.simx_opmode_oneshot_wait\n    STREAMING = vrep.simx_opmode_streaming\n\n    # Try to retrieve motors and robot handlers\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm#simxGetObjectHandle\n    vrep.simxStartSimulation(clientID, opmode)\n    ret,base_handle=vrep.simxGetObjectHandle(clientID,"joint1_",opmode)\n    ret,bottom_handle=vrep.simxGetObjectHandle(clientID,"joint2_",opmode)\n    ret,top_handle=vrep.simxGetObjectHandle(clientID,"joint3_",opmode)\n    ret,rotate_handle=vrep.simxGetObjectHandle(clientID,"joint4_",opmode)\n    ret,wrist_handle=vrep.simxGetObjectHandle(clientID,"joint5_",opmode)\n    while True:\n        #Clockwise\n        if keyboard.is_pressed("a"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,0.1,opmode)\n        #anti-Clockwise \n        if keyboard.is_pressed("f"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,-0.1,opmode)\n        #bottom_handle up\n        if keyboard.is_pressed ("w"):\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,0.1,opmode)\n        #bottom_handle down\n        if keyboard.is_pressed ("s"):\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,-0.1,opmode)\n         #top_handle up\n        if keyboard.is_pressed ("e"):\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,0.1,opmode)\n         #top_handle down\n        if keyboard.is_pressed ("d"):\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,-0.1,opmode)\n         #rotate\n        if keyboard.is_pressed ("r"):\n         vrep.simxSetJointTargetVelocity(clientID,rotate_handle,0.1,opmode)\n         #wrist_handle left\n        if keyboard.is_pressed ("j"):\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,0.1,opmode)\n         #wrist_handle right\n        if keyboard.is_pressed ("k"):\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,-0.1,opmode)\n         #stop\n        if keyboard.is_pressed ("space"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,rotate_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,0,opmode)\n\n\nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\')\n \n', 'tags': '', 'url': '0513.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': '每周進度影片', 'text': '', 'tags': '', 'url': '每周進度影片.html'}, {'title': '第九周', 'text': '\n', 'tags': '', 'url': '第九周.html'}, {'title': '第十周', 'text': '無 \n', 'tags': '', 'url': '第十周.html'}, {'title': 'task', 'text': '', 'tags': '', 'url': 'task.html'}, {'title': 'task1', 'text': '無 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '無 \n', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '無 \n', 'tags': '', 'url': 'task3.html'}, {'title': '討論', 'text': '', 'tags': '', 'url': '討論.html'}, {'title': 'discord', 'text': '', 'tags': '', 'url': 'discord.html'}, {'title': '第一次討論', 'text': '4/27 \n \n \n', 'tags': '', 'url': '第一次討論.html'}, {'title': '第二次討論', 'text': '\n \n \n', 'tags': '', 'url': '第二次討論.html'}]};