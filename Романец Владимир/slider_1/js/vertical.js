!function (){

	window.onload = function (){
		var li = document.getElementsByTagName('li');
		var nextButton = document.getElementById('next');
		var previusButton = document.getElementById('previus');
		var keyPress = document.body;
		window.list=[];

		nextButton.addEventListener('click', nav.next.bind(nav), false);
		previusButton.addEventListener('click', nav.previus.bind(nav), false);
		keyPress.addEventListener('keydown', nav.pressKey.bind(nav), false);

		li = Array.prototype.slice.call(li);
		for(var i = 0; i < li.length; i++){
			if (!li[i].hasAttribute('id')){
				list.push(li[i]);
			}
		}

		nav.createPaginator(); //Вызов метода создания пагинаторов
		var selectPage = document.getElementById('paging');
		selectPage.addEventListener('click', nav.selectSlide.bind(nav), false);
	}


	Navigation.prototype = {
		constructor: Navigation,
		position: 0,
		paginator: [],
		//Прокручиваем слайды вправа и влево, выделяем в пагинаторе кнопочку соответствующую данному слайду
		move: function(prevPos){
			var offset = this.position;
			list[0].style.marginLeft = offset * (-607) - offset + 'px';
			this.paginator[prevPos].className = '';
			this.paginator[offset].className = 'current';
		},
	};


	var nav = new Navigation();


	function Navigation(){
		var content = document.createElement('UL');
		var prevPos = pos = 0;
		var paginator;
		var selectPage;
		this.pressKey = function(){
			if (event.keyCode == 39) this.next();
			if (event.keyCode == 37) this.previus();
		}
		//Листаем вправо
		this.next = function(){
			prevPos = pos;
			pos = Navigation.prototype.position += pos == list.length-1 ? -(list.length-1) : 1;
			this.move(prevPos);
		};
		//Листаем влево
		this.previus = function(){
			prevPos = pos;
			pos = Navigation.prototype.position -= pos > 0 ? 1 : -(list.length-1);
			this.move(prevPos);
		};
		//Метод отображает слайд выбранный спомощью пагинатора
		this.selectSlide = function(){
			selectPage = event.target || event.srcElement;
			prevPos = pos;
			for (var i = 0; i < paginator.length; i++){
				if (selectPage === paginator[i]){
					pos = Navigation.prototype.position = i;
					this.move(prevPos);
				}
			}
		};
		//Создание пагинаторов в зависимости от количества картинок
		this.createPaginator = function (){
			var lengthList = list.length;
			content.id = 'paging';
			while(lengthList--){
				content.innerHTML += (list.length == lengthList+1)? '<li class=\'current\'></li>' : '<li class=\'\'></li>';
			}
			document.getElementById('slider').appendChild(content);
			paginator = document.getElementById('paging').children;
			Navigation.prototype.paginator = paginator;
		};
	};

}();

