
enchant();

enchant.nineleap.memory.HttpRequest.SERVER_URL = 'http://9leap.net/api/';


デフォルトのアイコン = 4*16+7;
ハートのアイコン = 11;
ドクロのアイコン = 12;
サイコロのアイコン = 2*16+3;
アイコンを設定 = function(icon){
	novel.screen.promptIcon.frame = icon;
}

//ノベルシステム全体
Novel =  enchant.Class.create(enchant.Scene,{
		initialize: function() {
			enchant.Scene.call(this);
			this.promptIcon = new Sprite(16,16);
			this.promptIcon.image = game.assets["misc/icon0.gif"];
			this.promptIcon.x=100;
			this.promptIcon.y=1000;
			this.promptIcon.frame=デフォルトのアイコン;
			this.screen=null;
			this.addChild(this.promptIcon);
			this.nextFunc =null;
			this.addEventListener('touchend',function(e){
				novel.promptHide();
			});
			this.promptIcon.addEventListener('enterframe',function(e){
				if(game.frame%2==0)this.y = -this.y-100;
			});
		},
		prompt:function(obj,func){
			game.pushScene(this);
			this.nextObj =obj
			this.nextFunc =func;
		},
		promptHide:function(){
			if(this.nextFunc){
				game.popScene();
				var x =this.nextFunc;
				this.nextFunc=null;
				x.call(this.nextObj);
			}
		},
		hide:function(){
			game.popScene();
		},
		jump:function(nextScene,str){
			nextScene.call(this,str);
		},
		next:function(){
			if(this.nextScene){
				this.nextScene.call(this);
			}
		}
	});
	
テキストデフォルトX=10;
テキストデフォルトY=10;
	
//ノベルが表示されるスクリーン
Screen =  enchant.Class.create(enchant.Scene,{
		initialize: function() {
			enchant.Scene.call(this);
			this.image = new Label("");
			this.image.x =10;
			this.image.y =10;
			this.addChild(this.image);
			this.front = new Group();
			this.front.x =0;
			this.front.y =0;
			this.addChild(this.front);
			this.labels = new Array();
			this.queue = new Array();
			this.count=0;
			this.cursor=0;
			this.selectCursor=0;
			this.color="#ffffff";
		
		},
		clear:function(){
			for(var i=0;i<this.labels.length;i++){
				this.labels[i].y = -100;
				this.removeChild(this.labels[i]);
			}
			this.labels = new Array();
			this.cursor=0;
			this.selectCursor=0;
			this.color="#ffffff";
		
		},
		show: function(){
			game.popScene();
			game.pushScene(this);
		},
		
		add:function(){
			var arg =new Array();
			for(var i=0;i<arguments.length;i++)
				arg.push(arguments[i]);
			
			var func =arg.shift();
			this.queue.push(function(){ return func.apply(this,arg);});
		},
		waitForPrompt:function(){
			return false;
		},
		setImage:function(file,opt){
			if(opt == undefined)
				opt="width=100%";
			this.image.text = "<img src="+file+" "+opt+" >";
			return true;
		},
		writeLine:function(str,col){
			var label = new Label("");
			if(col == undefined)
				label.text = "<font color="+this.color+">"+str+"<BR>";
			else
				label.text = "<font color="+col+">"+str+"<BR>";
			label.x = テキストデフォルトX;
			label.y = 20*this.cursor+テキストデフォルトY;
			this.addChild(label);
			this.labels.push(label);
			novel.promptIcon.x = 10+str.length*12;
			novel.promptIcon.y = 20*this.cursor+テキストデフォルトY;
			this.cursor++;
			return true;
		},
		soundEffect:function(se){
			game.assets[se].play();
			return true;
		},
		selector:function(){
			var arg =new Array();
			for(var i=0;i<arguments.length;i++)
				arg.push(arguments[i]);
			
			var str =arg.shift();
			var func =arg.shift();
			var selector = new Label("");
			selector.text = str;
			selector._element.setAttribute("class","selector");
			selector.touchEnabled=true;
			selector.x = 5;
			selector.y = 320-33*(this.selectCursor+1);
			this.selectCursor++;
			selector.addEventListener("touchend",function(){
							シーン開始();
							if(typeof arg[2]=='function'){
								arg[2].call(this);
							}else
							if(arg[2]){
								eval(arg[2]);
							}
							func.apply(this,arg);
							シーン終了();});
			this.addChild(selector);
			this.cursor++;
			return true;
		},
		next:function(scene){
			シーン開始();
			scene.call();
			シーン終了();
		},
		changeColor:function(col){
			this.color =col;
			return true;
		},
		start: function(){
			if(this.count == this.queue.length)return;
			var result;
			while(result= this.queue[this.count++].call(this)){
				if(this.count == this.queue.length)break;
			}
			if(this.count == this.queue.length){
//				novel.prompt(this,this.end);
				return;
			}
			novel.prompt(this,this.start);
		},
		
		progress: function(){
			if( typeof this.scriptBody[this.cursor] == "string"){
				this.label.text += "<font color=white>"+this.scriptBody[this.cursor]+"<BR>";
				novel.promptIcon.x = 10+this.scriptBody[this.cursor].length*12;
				novel.promptIcon.y = 16*this.cursor+10;
				this.cursor++;
				if(this.cursor == this.scriptBody.length){
				//					novel.prompt(this,this.end);
				}else{
					novel.prompt(this,this.progress);
				}
			}else{
				//文字列じゃなかったらコマンド実行
				this.scriptBody[this.cursor].call(null,
									this.scriptBody[this.cursor+1]);
				this.cursor+=2;
			}
		},
		end:function(){
			game.popScene();
		}
	});
	
var screen;

クリア = function(){
	novel.screen.queue.push(function(){ novel.screen.clear();return true;});
	
}
シーン開始 =function (){
	novel.screen =new Screen();
	novel.screen.show();
};
台詞 = function(){
	var arg =new Array();
	for(var i=0;i<arguments.length;i++)
				arg.push(arguments[i]);
	novel.screen.queue.push(function(){ return novel.screen.writeLine.apply(this,arg);});
};

占う = function(str,num){
	var r=0;
	for(var i=0;i<str.length;i++)
		r+=str.charCodeAt(i);
	運命シード=r;
	if(num)
		return r%num;
	else
		return r;
}

画像 = function(file){
	var arg =new Array();
	for(var i=0;i<arguments.length;i++)
				arg.push(arguments[i]);
				novel.screen.queue.push(function(){ return novel.screen.setImage.call(this,file);});
};

キャラ = function(file,x,y){
	var img = new Label("<img src="+file+">");
	novel.screen.queue.push(function(){
			if(x == undefined){
				img.x=100;img.y=100;
			}else{
				img.x=x;img.y=y;
			}
			novel.screen.front.addChild(img);
			return true;
		});
	img.変更 = function(file){
		novel.screen.queue.push(function(){img.text = "<img src="+file+">";return true;});
	};
	img.消す = function(){
		novel.screen.queue.push(function(){
			img.ty = img.y;
			img.y = -1000;
			return true;
		});
	}
	img.出現 = function(){
		novel.screen.queue.push(function(){
			img.y = img.ty;
			return true;
		});
	}
	return img;
};

一時停止 = function(){
	novel.screen.add(novel.screen.waitForPrompt);
};
選択肢 = function(str,jumpTo,option){
	novel.screen.add(novel.screen.selector,str,novel.jump,jumpTo,str,option);
};
次へ = function(jumpTo,option){
	novel.screen.add(novel.screen.selector,"次へ",novel.jump,jumpTo,"次へ",option);
};


現在位置を取得して次へ = function(next){
	現在位置取得後のシーン = next;
	novel.screen.add(function(){
		navigator.geolocation.getCurrentPosition(function(pos){
			現在の緯度 = pos.coords.latitude;
			現在の経度 = pos.coords.longitude;
			現在の高度 = pos.coords.altitude;
			位置情報の正確さ= pos.coords.altitudeAccuracy;
			現在の向き = pos.coords.heading;
			現在の移動速度 = pos.coords.speed;
			位置情報を取得した時間 = pos.timestamp;
			現在位置が取得できた = YES;
			現在位置情報 = {};
			現在位置情報 = pos;
			novel.screen.next(next);
		},function(e){
			現在位置が取得できた = NO;
			位置情報を取得した時間 = 0;
			novel.screen.next(next);
		});
	});
}


シーン終了 = function (){
	novel.screen.start();
}


	
乱数 = function(max){
	return Math.floor(Math.random()*max);
	
}

効果音 =function(){
	var arg =new Array();
	for(var i=0;i<arguments.length;i++)
				arg.push(arguments[i]);
	novel.screen.queue.push(function(){ return novel.screen.soundEffect.apply(this,arg);});
}

運命シード=false;
運命オフセット=0;
どれか =function(arg){
	if(運命シード){
		運命オフセット++;
		return arg[(運命オフセット+運命シード)%arg.length];
	}
	return arg[Math.floor(Math.random()*arg.length)];
};
	
シャッフル = function(src){
	var dst = [];
	for(i=0;i<src.length;i++){
		dst.push(src[i]);
	}
	for(i=0;i<dst.length;i++){
		tmp = dst[i];
		idx = 乱数(dst.length);
		dst[i] = dst[idx];
		dst[idx]=tmp;
	}
	return dst;
}

誰か = function(){
	return Math.floor(Math.random()* 友達の名前.length);
}
	
YES = true;
NO = false;
はい =true;
いいえ = false;
そう =true;
まだ =false;




セーブ = function(scene){
	game.memory.player.data.scene = scene;
	game.memory.update();
}


window.onload = function() {
	game = new Game(320, 320);
	game.preload('se1.wav','se2.wav','se3.wav',"misc/icon0.gif");
    game.fps = 15;
    game.memory.player.preload();

	game.onload = function() {
        
        if(プレイヤー読み込み === true){
           var obj = game.twitterAssets['account/verify_credentials'][0];
           プレイヤー = obj;
           プレイヤーの名前 = obj.name;
           プレイヤーのユーザID = obj.screen_name;
           プレイヤーのアイコン = obj.profile_image_url;
           プレイヤーのフォロワー数 = obj.followers_count;
           player_name = obj.name
        }
        
        if(友達読み込み === true){
            var obj = game.twitterAssets['statuses/friends'];
		    for(var i in obj){
			    var m = 乱数(obj.length);
			    var tmp =obj[m];
			    obj[m] = obj[i];
			    obj[i] = tmp;
			}
            友達 = obj;
            友達の名前 = [];
            友達のユーザID = [];
            友達のアイコン = [];
            友達のフォロワー数 = [];
            for(var i in obj){
                game.preload(obj[i].profile_image_url)
                友達の名前.push(obj[i].name);
                友達のユーザID.push(obj[i].screen_name);
                友達のアイコン.push(obj[i].profile_image_url);
                友達のフォロワー数.push(obj[i].followers_count);
			}
        }
        
		フラグ = game.memory.player.data;
//		if(フラグ == null)フラグ={};
		novel = new Novel();
		game.rootScene.backgroundColor="#000";

		シーン開始();
		if(game.memory.player.data.scene){
			window[game.memory.player.data.scene].call(window);
		}else{
			プロローグ();
		}
		シーン終了();
	};


    
    if(プレイヤー読み込み === true){
        game.twitterRequest("account/verify_credentials");
    }
    
    if(友達読み込み === true){
        game.twitterRequest("statuses/friends");
    }
    
    game.start();
};


/* TwitterAPI */

友達読み込み = function (){
    友達読み込み = true;
}

プレイヤー読み込み = function (){
    プレイヤー読み込み = true;
}

