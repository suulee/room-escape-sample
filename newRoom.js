room = game.createRoom("room", "배경-1.png") // 방 생성

//문생성
room.door = room.createObject("door", "문-오른쪽-닫힘.png") 
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

//문 상태
room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}


//키패드
room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("올해는 몇 년도?")
	showKeypad("number", "2019" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}



//메모지 생성
room.postit = room.createObject("postit", "포스트잇.png")
room.postit.setWidth(50)
room.locateObject(room.postit, 800, 550)
room.postit.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}



//칠판 생성
room.board = room.createObject("board", "초록색칠판-왼쪽.png")
room.board.setWidth(120)
room.locateObject(room.board, 170, 200)
room.board.onClick = function() {
	showImageViewer("종이.png", "비밀번호.txt"); // 이미지 출력
}


//옷장
room.closet = room.createObject("closet", "옷장-1-닫힘.png")
room.closet.setWidth(300)
room.locateObject(room.closet, 250, 305)


//옷장이동
room.closet.move = true // 플래그 변수
room.closet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room.closet.move){ // 오른쪽으로 드래그 했으면
		printMessage("옷장을 밀어버렸다!")
		room.closet.moveX(200) // X 방향으로 200 이동
		room.closet.moveY(-40) // Y 방향으로 -40 이동
		room.closet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("열리지 않는다.")
	}
}






game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력
