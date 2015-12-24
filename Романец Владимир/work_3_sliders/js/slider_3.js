!function (){
	var list=[];

	window.onload = function (){
		nav.init();
	}


	function Navigation(){
		var prevPos = position = 0;
		var paginator = [];
		var selectPage, width;
		var nav = this;
		var canIUse = true;
		setInterval(function(){return canIUse = true}, 1000);
		//Метод инициализации слайдера
		nav.init =function (){
			var li = document.getElementById('items').getElementsByTagName('li');
			list = Array.prototype.slice.call(li);
			nav.createPaginator(); //Вызов метода создания пагинаторов
			document.getElementById('next').addEventListener('click', this.next, false);
			document.getElementById('previus').addEventListener('click', this.previus, false);
			document.getElementById('paging').addEventListener('click', this.selectSlide, false);
			document.body.addEventListener('keydown', this.pressKey, false);
		}
		//Листаем вправо
		this.next = function(){
			if (canIUse){
				prevPos = position;
				position += (position == list.length - 1) ? -(list.length-1) : 1;
				nav.move(prevPos);
				canIUse = false;
			}
		};
		//Листаем влево
		this.previus = function(){
			if (canIUse){
				prevPos = position;
				position -= position > 0 ? 1 : -(list.length-1);
				nav.move(prevPos);
				canIUse = false;
			}
		};
		//Добавляем возможноть управление слайдером с клавиатуры
		this.pressKey = function(e){
			e = e || window.event;
			if (e.keyCode == 39) nav.next();
			if (e.keyCode == 37) nav.previus();
		}
		//Создание пагинаторов в зависимости от количества картинок
		this.createPaginator = function (){
			var content = document.createElement('ul');
			var i = list.length;
			content.id = 'paging';
			content.innerHTML += '<li id=\'previus\'></li><li id=\'next\'></li>';
			while(i--){
				content.innerHTML += (list.length - 1 == i) ? '<li class=\'current\'></li>' : '<li class=\'\'></li>';
			}
			document.getElementById('slider').appendChild(content);
			for (var j = 2; j <= list.length + 1; j++){
				paginator.push(document.getElementById('paging').children[j]);
			}
		};


		//Прокручиваем слайды вправо и влево, выделяем в пагинаторе кнопочку соответствующую данному слайду
		this.move = function(prevPos){
			var direction = getComputedStyle(list[position]).left.match(/.\d+/)[0];
			direction = (direction > 0) ? -1 : 1;
			if (direction > 0){ //при нажатии на previus
				if (position == 0) {
					list[list.length - 1].removeAttribute('class');
					list[list.length - 1].style.left = -610 + 'px';
				}
				else{
					list[position - 1].removeAttribute('class');
					list[position - 1].style.left = -610 + 'px';
				}
			}
			else{				//при нажатии на next
				if (position == list.length - 1) {
					list[0].removeAttribute('class');
					list[0].style.left = 610 + 'px';
				}
				else{
					list[position + 1].removeAttribute('class');
					list[position + 1].style.left = 610 + 'px';
				}
			}	
			list[prevPos].style.left = direction * 610 + 'px';
			list[position].style.left = 0 + 'px';
			list[prevPos].className = 'moving';
			list[position].className = 'moving';

			paginator[prevPos].removeAttribute('class');
			paginator[position].className = 'current';
		};


		//Метод отображает слайд выбранный спомощью пагинатора
		this.selectSlide = function(e){
			e = e || window.event;
			selectPage = e.target || e.srcElement;
			prevPos = position;
			for (var i = 0; i < paginator.length; i++){
				if (selectPage === paginator[i]){
					position = i;
					nav.move(prevPos);
				};
			};
		};
	};

	var nav = new Navigation();
}();