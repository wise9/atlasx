// いいんちょ+
// http://9leap.net/games/577

プレイヤー読み込み();
友達読み込み();

enchant.nineleap.memory.LocalStorage.GAME_ID = 564;
enchant.nineleap.memory.LocalStorage.DEBUG_MODE = false;

はじめに = function(){
	台詞("オレの名前は"+プレイヤーの名前);
	一時停止();
	台詞("ナインリープ高校の1年生だ");
	一時停止();
	台詞("中学時代は正直パッとしなかった");
	一時停止();
	台詞("勉強はそこそこ、体育もそこそこ");
	一時停止();
	台詞("得意なのはパソコンをいじることくらい");
	一時停止();
	台詞("だけど、そんなオレにも転機が訪れた");
	一時停止();
	台詞("オレの前に天使が降りて来たんだ");
	一時停止();
	次へ(委員長初登場);
}
	
委員長初登場 = function(){
	キャラ("i3.png",100,19);
	テキストデフォルトY=140;
	台詞("この子が僕の天使");
	一時停止();
	台詞("我がクラスの委員長");
	一時停止();
	台詞("恥ずかしくって名前で呼んだことはない");
	一時停止();
	台詞("みんなも先生も委員長って呼ぶんだ");
	一時停止();
	台詞("恥ずかしながら入学式で一目惚れ");
	一時停止();
	台詞("それでどうしたかって?");
	一時停止();
	台詞("決まってるだろ");
	次へ(告白玉砕シーン);
}
	
告白玉砕シーン = function(){
	画像("school.png");
	委員長=キャラ("i1.png",100,59);
	テキストデフォルトY=220;
	台詞("委員長「どうしたの?"+プレイヤーの名前+"くん」");
	一時停止();
	台詞("オレ「じ、実は聞いてほしいことがあるんだ」");
	一時停止();
	台詞("委員長「なに?」");
	一時停止();
	台詞("オレ「一目惚れでした!つ、つきあって下さい!」");
	一時停止();
	クリア();
	委員長.変更("i5.png");
	台詞("委員長「え・・・・」");
	一時停止();
	台詞("オレ(・・・ヤバい・・やっちまったか?)");
	一時停止();
	台詞("オレ(けっこういい雰囲気だと思ってたのに・・・)");
	一時停止();
	台詞("オレ(顔色変わっちゃってるし)");
	一時停止();
	台詞("オレ(完全「お断り」モードだな・・・)");
	一時停止();
	クリア();
	台詞("委員長「わたしと、付き合いたいの・・・?」");
	一時停止();
	台詞("オレ「う、うん・・・」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「それともわたしに、付き合いたいの・・・?」");
	一時停止();
	台詞("オレ「う、うん・・・・・うん?」");
	一時停止();
	クリア();
	台詞("委員長「どっち?」");
	一時停止();
	台詞("オレ「と、とにかく付き合えるんならなんでも・・・」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「そう・・・・なんだ・・・」");
	一時停止();
	台詞("オレ(あ、アレ?なんかおかしな感じになって来たな)");
	一時停止();
	クリア();
	委員長.変更("i5.png");
	台詞("委員長「でも、私、けっこうワガママだよ」");
	一時停止();
	台詞("オレ「そんな!委員長のワガママなら大歓迎だよ」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「ホントに私でいいの?」");
	一時停止();
	台詞("オレ「も、もちろんだよ!!」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「ふーん」");
	一時停止();
	台詞("オレ(あ、あれ?いま雰囲気変わったような)");
	一時停止();
	クリア();
	台詞("委員長「じゃあ今からアンタのこと、ポチって呼ぶわ」");
	一時停止();
	台詞("オレ「えっえっ?」");
	一時停止();
	クリア();
	台詞("委員長「おいポチ、人間様の言葉喋ってんじゃねえよ」");
	一時停止();
	台詞("オレ「えっえっえっ?」");
	一時停止();
	クリア();
	台詞("委員長「生意気だっつってんだよ!」");
	一時停止();
//	台詞("ガスッ!!");
	画像("kick.png");
	委員長.消す();
	一時停止();
	台詞("委員長の鋭いケリがオレのミゾオチに入る");
	一時停止();
	台詞("オレ「ぐぼっ」");
	一時停止();
	クリア();
	画像("school.png");
	委員長.出現();
	台詞("委員長「ったく今週入って10人目かよ」");
	一時停止();
	台詞("!!!!!???");
	クリア();
	台詞("委員長「おまえらマジでおめでたいよな」");
	一時停止();
	台詞("委員長「中身とかどうでもいいんだろオマエ」");
	一時停止();
	台詞("委員長「なにが一目惚れだよ。笑わせるよな」");
	一時停止();
	台詞("委員長「外見しか見てねえんだろどうせ」");
	一時停止();
	クリア();
	台詞("告白したとたん、委員長の雰囲気が変わった");
	一時停止();
	台詞("まさか猫かぶってたなんて・・・");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	台詞("今度は鋭いパンチがみぞおちに入った。");
	一時停止();
	クリア();
	画像("school.png");
	委員長.出現();
	台詞("委員長「オマエいま、猫被ってるとか思っただろ?」");
	一時停止();
	台詞("オレ「そ、そんなことは・・・(図星です)」");
	一時停止();
	クリア();
	台詞("委員長「あたしに付き合うんだろ?ア?」");
	一時停止();
	台詞("委員長「キッチリ付き合ってもらうよ」");
	一時停止();
	クリア();
	台詞("オレ「えーと、具体的にはなにをすれば・・・」");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	クリア();
	画像("school.png");
	委員長.出現();
	台詞("委員長「人間様の言葉喋んなっつったろ!」");
	一時停止();
	台詞("委員長「ポチ、ご主人様を喜ばせないとなあ」");
	一時停止();
	クリア();
	台詞("オレ「よ、悦ばせる・・・・?」");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	画像("school.png");
	委員長.出現();
	クリア();
	台詞("オレ「っつてええ!!!!指折れる・・折れます・・」");
	一時停止();
	クリア();
	台詞("委員長「いまヤラシイこと考えただろ」");
	一時停止();
	クリア();
	台詞("オレ「滅相もございません!!!」");
	一時停止();
	クリア();
	台詞("委員長「バレてんだよ!!!犬なんだからワンと鳴けよホラ」");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	画像("school.png");
	委員長.出現();
	クリア();
	台詞("オレ「っつてええ!!!ごめんなさい!!ワン!!」");
	一時停止();
	クリア();
	台詞("委員長「ヨシ!おいポチ、貢ぎ物を持って来い」");
	一時停止();
	台詞("オレ「え?」");
	一時停止();
	クリア();
	台詞("委員長「テキトーに街とかうろついて」");
	一時停止();
	台詞("委員長「ご主人様が喜びそうなものもってくるんだよ」");
	一時停止();
	台詞("オレ「ワ?・・・ワ、ワン!!」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「まぁ、いい返事」");
	一時停止();
	台詞("委員長「それじゃ、お願いね、ポチ"+(乱数(100)+434)+"号」");
	一時停止();
	台詞("オレ「えっ!?えっ・・・ポチそんなに居るの?」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「・・・・・ア゛?」");
	一時停止();
	台詞("オレ「ヒィィ・・・ワ、ワン!!」");
	一時停止();
	フラグ.ゲーム進行度=1;
	次へ(ゲーム説明);
}
	
ゲーム説明 = function(){
	テキストデフォルトY=10;
	台詞("こうしてオレは、憧れの委員長のペットになった");
	一時停止();
	台詞("とりあえず街に出たら、彼女の好きそうなものがないか");
	一時停止();
	台詞("キョロキョロ探している");
	一時停止();
	台詞("街の噂によると「ポチ」は百人以上は居るらしい");
	一時停止();
	台詞("オレはこんなことじゃ諦めない");
	一時停止();
	台詞("委員長は間違ってる");
	一時停止();
	台詞("オレの愛で、いつか委員長の心を開いてやる!");
	一時停止();
	台詞("そのためには、貢ぎ物を集めて、ポチの頂点に立つんだ!!");
	一時停止();
	台詞(" ");
	台詞("このゲームではGPSを使って");
	台詞("実際に移動して周囲を調べることで");
	台詞("委員長への貢ぎ物を手に入れます");
	台詞("頑張って真実の愛を手に入れて下さい");
	次へ(プロローグ);
}

第二章イベント=function(){
	画像("station.png");	
	委員長=キャラ("station.png",100,59);
	委員長.消す();
	テキストデフォルトY=220;
	台詞("うーん、なにかいいもの落ちてないかな");
	一時停止();
	台詞("へんなもの拾ったらまた怒られるしなあ");
	一時停止();
	台詞("委員長にも困ったもんだよ・・・");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	委員長.出現();
	台詞("委員長「おいポチ、なにしてんだ?」");
	一時停止();
	台詞("オレ「ゲ、委員長・・・」");
	一時停止();
	台詞("委員長「アァん??」");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	クリア();
	画像("station.png");	
	委員長.出現();
	台詞("委員長「文句あるのか!?」");
	一時停止();
	台詞("オレ「滅相もございません」");
	一時停止();
	クリア();
	台詞("オレ「委員長、お買い物?」");
	一時停止();
	クリア();
	画像("kick.png");
	委員長.消す();
	一時停止();
	クリア();
	画像("station.png");	
	委員長.出現();
	台詞("委員長「馴れ馴れしいんだよ!下僕の分際で」");
	一時停止();
	台詞("オレ「ひぃっ!すみません!」");
	一時停止();
	次へ(プロローグ);	
}


第三章イベント=function(){
	画像("station.png");	
	友達=キャラ("station.png",20,102);
	友達.消す();
	テキストデフォルトY=220;
	台詞("うーん、しかし委員長って");
	台詞("どうしてあんな性格なのかなあ");
	一時停止();
	台詞("顔は天使みたいに可愛いのに");
	一時停止();
	台詞("なんか知らないけど凶悪なんだよなー");
	一時停止();
	クリア();
	友達.変更("classmate.png");
	友達.出現();
	台詞("シュウ「お、"+プレイヤーの名前+"じゃねえか」");
	一時停止();
	台詞("アス「あ、ほんとだ。なにやってんの?こんなとこで」");
	一時停止();
	台詞("オレ「あ、おまえら・・・」");
	一時停止();
	クリア();
	台詞("シュウ「なにやってんだよ下向いてさー」");
	一時停止();
	台詞("アス「もしかしてこいつもアレかな?」");
	一時停止();
	台詞("シュウ「もしかするかも!?」");
	一時停止();
	台詞("オレ「アレって?・・・」");
	一時停止();
	クリア();
	台詞("シュウ「おまえ、委員長にコクらなかった?」");
	一時停止();
	台詞("オレ「ドキッ!!!」");
	一時停止();
	台詞("アス「おいおい図星だよ」");
	一時停止();
	台詞("シュウ「やれやれお前もポチかよ」");
	一時停止();
	クリア();
	台詞("シュウ「有名なんだよな、アレ」");
	一時停止();
	台詞("オレ「有名って?」");
	一時停止();
	台詞("アス「なんかコクってきた奴全員、奴隷にされてる」");
	一時停止();
	台詞("シュウ「学年の1/3くらい奴隷になってるんじゃね?」");
	一時停止();
	クリア();
	台詞("シュウ「中学では普通だったみたいだけど」");
	一時停止();
	台詞("アス「なんかよっぽどのことがあったのかもねえ」");
	一時停止();
	台詞("シュウ「ありゃー、アレだな。男性不信ってやつ」");
	一時停止();
	クリア();
	台詞("いったい、委員長に過去、なにがあったんだ・・・");
	次へ(プロローグ);	
}


第四章イベント=function(){
	画像("station.png");	
	委員長=キャラ("station.png",100,59);
	委員長.消す();
	テキストデフォルトY=220;
	台詞("うーん、なにかいいもの落ちてないかな");
	一時停止();
	台詞("へんなもの拾ったらまた機嫌悪くなるしなあ");
	一時停止();
	台詞("どうしたものか・・・");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	委員長.出現();
	台詞("委員長「あら、ポチじゃない」");
	一時停止();
	台詞("オレ「あ、委員長・・・」");
	一時停止();
	クリア();
	台詞("委員長「アァん??慣れ慣れしくねえか?」");
	委員長.変更("i4.png");
	一時停止();
	台詞("オレ「ご、ごめん・・・」");
	台詞("とっさに防御態勢をとるオレ");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「ま、いっか」");
	一時停止();
	台詞("オレ「エッ?」");
	一時停止();
	クリア();
	台詞("委員長「ポチ401号には、お世話になってるしね」");
	一時停止();
	台詞("オレ「オレ、401号だったっけ?」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「なんか文句あるの?」");
	一時停止();
	台詞("オレ「あ、ありません」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「ま、いいわ」");
	一時停止();
	台詞("委員長「今日は忙しいから、またね」");
	一時停止();
	クリア();
	台詞("いま、またね・・・って言った?");
	次へ(プロローグ);	
}



第五章イベント=function(){
	画像("station.png");	
	友達=キャラ("station.png",20,102);
	友達.消す();
	テキストデフォルトY=220;
	友達.変更("classmate.png");
	友達.出現();
	台詞("シュウ「お、"+プレイヤーの名前+"じゃねえか」");
	一時停止();
	台詞("アス「まだポチやってんか」");
	一時停止();
	台詞("オレ「あ、おまえら・・・」");
	一時停止();
	クリア();
	台詞("シュウ「やめとけやめとけ。ポチなんかさ」");
	一時停止();
	台詞("アス「他にかわいい子いくらでもいるだろ」");
	一時停止();
	台詞("オレ「な、なんでそんなこと言えるんだよ」");
	一時停止();
	一時停止();
	クリア();
	台詞("シュウ「だって委員長、ジョブ山とつきあってんぜ」");
	一時停止();
	台詞("オレ「エッッ!!!(やっぱり!!)」");
	一時停止();
	台詞("アス「それってマジなん?」");
	一時停止();
	台詞("シュウ「あちこちで噂になってる。知らないのか?」");
	一時停止();
	クリア();
	台詞("シュウ「あっちは金も力もある先公」");
	一時停止();
	台詞("オレ「・・・」");
	一時停止();
	台詞("シュウ「お前はなんの力もないただのガキ」");
	一時停止();
	台詞("オレ「・・・」");
	一時停止();
	クリア();
	台詞("シュウ「勝負になんねえべ?」");
	一時停止();
	台詞("アス「まあ性格も悪いしねえ」");
	一時停止();
	台詞("オレ「そ、そんなことないよ!性格いいよ」");
	一時停止();
	クリア();
	台詞("アス「性格いいやつがポチとか呼ぶか?」");
	一時停止();
	台詞("オレ「・・・・」");
	次へ(プロローグ);	
}

第六章イベント=function(){
	画像("station.png");	
	委員長=キャラ("cafe.png",100,59);
	委員長.消す();
	テキストデフォルトY=220;
	台詞("うーん、最近おれ、ずっと下見てるなー");
	一時停止();
	台詞("委員長はムカつくこともあるけど");
	一時停止();
	台詞("たまーに見せる笑顔がやっぱ憎めないんだよな");
	一時停止();
	クリア();
	台詞("我ながら、オレ、ぞっこんだなあ");
	一時停止();
	台詞("ん・・・なんかシャレオツなカフェがあるぞ");
	一時停止();
	画像("cafe.png");	
	クリア();
	台詞("こんなところで委員長とデートできたらなあ・・・");
	一時停止();
	台詞("って・・・あれ?あれは委員長じゃないか!?");
	一時停止();
	台詞("一緒に居るのは・・・え、えええっ!?");
	一時停止();
	クリア();
	委員長.変更("job.png");
	委員長.出現();
	台詞("ジョブ山「・・・・」");
	一時停止();
	台詞("オレ「あ・・・」");
	一時停止();
	クリア();
	委員長.消す();
	台詞("私服だからオレに気づかなかったのか");
	一時停止();
	台詞("それにしても、委員長・・・");
	一時停止();
	台詞("ジョブ山と二人で喫茶店なんて・・・");
	一時停止();
	台詞("一体、なにを話していたんだろう");
	一時停止();
	クリア();
	台詞("今日のところは退散しよう・・・");
	次へ(プロローグ);	
}

ドロ沢登場イベント=function(){
	画像("station.png");	
	友達=キャラ("station.png",80,65);
	友達.消す();
	テキストデフォルトY=220;
	台詞("けっこう貢いだつもりだけど");
	一時停止();
	台詞("委員長って相変わらず冷たいよなあ");
	一時停止();
	台詞("うーん・・・");
	一時停止();
	クリア();
	友達.変更("d1.png");
	友達.出現();
	台詞("ドロ沢「おい、お前」");
	一時停止();
	台詞("オレ「ん・・・・キミは・・・?」");
	一時停止();
	クリア();
	台詞("ドロ沢「オレはグル高の総番、ドロ沢ってもんだ」");
	一時停止();
	台詞("オレ「ドロ沢さん、ね・・・」");
	一時停止();
	クリア();
	台詞("ドロ沢「で、ナインリープ高校ってどっちだ?」");
	一時停止();
	台詞("オレ「あ、ああ。あっちだけど・・・」");
	一時停止();
	クリア();
	台詞("ドロ沢「そうか。ありがとよ・・・」");
	一時停止();
	台詞("オレ「・・・」");
	一時停止();
	クリア();
	台詞("変わった奴だなあ");
	一時停止();
	次へ(プロローグ);	
}

修羅場イベント=function(){
	画像("school.png");	
	ドロ沢=キャラ("station.png",140,65);
	委員長=キャラ("station.png",20,59);
	ドロ沢.消す();
	委員長.消す();
	テキストデフォルトY=220;
	台詞("「キャアーーーー!!!」");
	一時停止();
	台詞("ん!?なんだ?悲鳴が聞こえたぞ!?");
	一時停止();
	クリア();
	ドロ沢.変更("d1.png");
	ドロ沢.出現();
	台詞("ドロ沢「おい委員長さんよー、そりゃねえだろ」");
	一時停止();
	台詞("オレ「あ、あいつは・・・それに、委員長!」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	委員長.出現();
	台詞("委員長「ア゛?なによ?」");
	一時停止();
	台詞("ドロ沢「忘れちまったのかよ〜まさかな」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「わ、忘れたわよ。あんたのことなんか」");
	一時停止();
	台詞("ドロ沢「そりゃないだろ?せっかく帰ってきたのによお」");
	一時停止();
	クリア();
	台詞("委員長「う、うるさいわね!あ、ポチ401号」");
	委員長.変更("i3.png");
	一時停止();
	台詞("オレ「!?」");
	一時停止();
	クリア();
	ドロ沢.変更("d3.png");
	台詞("ドロ沢「おいお前こいつのなんなんだよ!!!」");
	一時停止();
	委員長.変更("i1.png");
	台詞("オレ「・・・ポチです」");
	一時停止();
	クリア();
	ドロ沢.変更("d1.png");
	台詞("ドロ沢「ふざけやがって」");
	一時停止();
	台詞("オレ「いや、ふざけてないふざけてない!」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「ほんとやめて!」");
	一時停止();
	台詞("委員長「そういうとこ、ホント嫌い!」");
	一時停止();
	クリア();
	ドロ沢.変更("d3.png");
	台詞("ドロ沢「お前に言い寄る男は俺がぶっ殺す!」");
	一時停止();
	クリア();
	ドロ沢.変更("d1.png");
	台詞("ドロ沢「前みたいにな・・・」");
	一時停止();
	クリア();
	委員長.変更("i5.png");
	台詞("委員長「ごめん、もう無理。あんたとは」");
	一時停止();
	クリア();
	ドロ沢.変更("d1.png");
	台詞("ドロ沢「・・・マジで言ってんのかよ」");
	一時停止();
	台詞("委員長「うん、マジ。もう昔の私じゃないから」");
	一時停止();
	クリア();
	ドロ沢.変更("d2.png");
	台詞("ドロ沢「・・・そうか」");
	一時停止();
	委員長.変更("i3.png");
	台詞("委員長「ゴメン」");
	一時停止();
	クリア();
	台詞("委員長「それに私、今好きな人居るから」");
	一時停止();
	クリア();
	ドロ沢.変更("d1.png");
	台詞("ドロ沢「・・・マジかよ・・・」");
	一時停止();
	台詞("え、ほんと・・・・?");
	一時停止();
	クリア();
	台詞("ドロ沢「わかった。俺も男だ。すっぱりあきらめる!」");
	一時停止();
	クリア();
	台詞("ドロ沢「邪魔したな!」");
	一時停止();
	ドロ沢.消す();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「で、ポチ401号、貢ぎ物?」");
	一時停止();
	台詞("オレ「あ、いや・・・・」");
	一時停止();
	クリア();
	台詞("委員長「でもごめん。今無理、気分じゃない」");
	一時停止();
	台詞("オレ「う、うん・・・・ごめん」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「なんで謝ってんのよ?」");
	一時停止();
	クリア();
	台詞("委員長、好きな人、居るんだ・・・");
	一時停止();
	台詞("やっぱり委員長はジョブ山と・・・");
	一時停止();
	台詞("な、なんでだ!?やっぱり金か!金なのか!?");
	一時停止();
	次へ(プロローグ);	
}


ジョブ山イベント=function(){
	画像("station.png");	
	委員長=キャラ("cafe.png",100,59);
	委員長.消す();
	テキストデフォルトY=220;
	台詞("うーん、なんかいいものないかな");
	一時停止();
	台詞("毎度毎度、あれだけど");
	一時停止();
	台詞("なんでオレはこんなことしてんだろ");
	一時停止();
	クリア();
	台詞("そもそもこれって恋愛の形として");
	台詞("正しいのだろうか");
	一時停止();
	委員長.変更("job.png");
	委員長.出現();
	台詞("ジョブ山「"+プレイヤーの名前+"君じゃないか」");
	一時停止();
	台詞("オレ「ジョブ山先生!」");
	一時停止();
	クリア();
	台詞("ジョブ山「なんか浮かない顔をしてるな」");
	一時停止();
	台詞("オレ「いや・・・ちょっと悩んでて」");
	一時停止();
	クリア();
	台詞("ジョブ山「どうした?恋の悩みか?」");
	一時停止();
	台詞("オレ「ドキッ!!」");
	一時停止();
	クリア();
	台詞("ジョブ山「図星のようだな」");
	一時停止();
	台詞("ジョブ山「先生に話してみろ」");
	一時停止();
	台詞("オレ「いや・・・いいです」");
	一時停止();
	クリア();
	台詞("ジョブ山「遠慮するな。学校の外のことは」");
	一時停止();
	台詞("ジョブ山「先生とキミだけの秘密だ」");
	一時停止();
	クリア();
	台詞("オレ「うーん・・・・」");
	一時停止();
	クリア();
	台詞("ジョブ山「なんでも聞いてみろ?ん?」");
	一時停止();
	台詞("オレ「先生、好きな人のワガママって」");
	一時停止();
	台詞("オレ「どこまでつきあえばいいんですか?」");
	一時停止();
	クリア();
	台詞("ジョブ山「わはは。焼け付くような恋をしてるか」");
	一時停止();
	台詞("オレ「先生・・・頼みますよ」");
	一時停止();
	クリア();
	台詞("ジョブ山「すまんすまん。そうだな・・・」");
	一時停止();
	台詞("ジョブ山はちょっと考えているようだった");
	一時停止();
	クリア();
	台詞("ジョブ山「ワガママを言う女の子は・・・・」");
	一時停止();
	台詞("ジョブ山「実は寂しいんだよ」");
	一時停止();
	台詞("オレ「寂しい・・・???」");
	一時停止();
	クリア();
	台詞("ジョブ山「自分に自信が持てないんだ」");
	一時停止();
	台詞("ジョブ山「だからワガママをどれだけ聞いてくれるか」");
	一時停止();
	クリア();
	台詞("ジョブ山「そうやって相手を試すのさ」");
	一時停止();
	台詞("オレ「難しいですね」");
	一時停止();
	クリア();
	台詞("ジョブ山「ハッハッハ!悩みたまえ少年!」");
	一時停止();
	台詞("ジョブ山は高笑いしながら去って行った");
	一時停止();
	次へ(プロローグ);	
}


最終イベント=function(){
	画像("station.png");	
	ジョブ山=キャラ("cafe.png",140,59);
	委員長=キャラ("cafe.png",20,59);
	委員長.消す();
	ジョブ山.消す();
	テキストデフォルトY=220;
	台詞("うーん、委員長の元カレ");
	一時停止();
	台詞("ヤンキーだけど、いい奴っぽかったなあ");
	一時停止();
	台詞("委員長ってほんとモテるなあ");
	一時停止();
	クリア();
	台詞("それにしても");
	一時停止();
	台詞("なんで委員長がジョブ山なんかと");
	一時停止();
	台詞("あ・・・");
	一時停止();
	画像("cafe.png");	
	クリア();
	台詞("あのカフェだ");
	一時停止();
	台詞("また二人で居たりして・・・・");
	一時停止();
	台詞("って・・・え、え、え???居るよ!");
	一時停止();
	クリア();
	ジョブ山.変更("job.png");
	ジョブ山.出現();
	台詞("ジョブ山「・・・・」");
	一時停止();
	台詞("オレ「あ・・・」");
	一時停止();
	台詞("ジョブ山「"+プレイヤーの名前+"くんじゃないか」");
	一時停止();
	台詞("オレ「こ、こんにちは・・・」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	委員長.出現();
	台詞("委員長「そこでなにしてんのよ!」");
	一時停止();
	台詞("オレ「あ・・・・委員長」");
	一時停止();
	台詞("委員長「まさかのぞいてた?!」");
	一時停止();
	台詞("オレ「あ・・・・いや、オレはその・・」");
	一時停止();
	クリア();
	委員長.変更("i5.png");
	台詞("委員長「うわー、サイテー」");
	一時停止();
	台詞("オレ「あ・・・・いや・・・あの」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「ちょっといいなって思ってたのに」");
	一時停止();
	台詞("オレ「えっ?・・今なんて?」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「うるさい!なんでもない!死ね!」");
	一時停止();
	委員長.消す();
	台詞("委員長はどこかに行ってしまった");
	一時停止();
	クリア();
	台詞("ジョブ山「やれやれ、彼女の意中の相手は君だったか」");
	一時停止();
	台詞("オレ「・・・えっ!?」");
	一時停止();
	クリア();
	台詞("ジョブ山「最近ずっと恋愛相談をされていてね」");
	一時停止();
	台詞("オレ「そうだったんだ・・・」");
	一時停止();
	台詞("そういえばオレも相談にのってもらったことがあった");
	一時停止();
	クリア();
	台詞("ジョブ山「彼女、強がってるけど実はナイーブなんだ」");
	一時停止();
	台詞("ジョブ山「なかなか素直になれないってね」");
	一時停止();
	クリア();
	台詞("オレ「す、素直になればいいじゃないですか」");
	一時停止();
	クリア();
	台詞("ジョブ山「少年、それが一番難しいことなんだ」");
	一時停止();
	台詞("オレ「・・・・・」");
	一時停止();
	クリア();
	台詞("ジョブ山「彼女は前カレを君に見られたのが」");
	一時停止();
	台詞("ジョブ山「よほどショックだったみたいだね」");
	一時停止();
	クリア();
	台詞("オレ「じゃあ・・・オレ、どうすれば・・・」");
	一時停止();
	クリア();
	台詞("ジョブ山「もうアドバイスは必要ない。だろ?少年」");
	次へ(エンディング);	
}

エンディング = function(){
	テキストデフォルトY=10;
	台詞("オレは走り出していた");
	一時停止();
	台詞("委員長の去って行った方向へと");
	一時停止();
	台詞("とにかく夢中だった");
	一時停止();
	台詞("委員長を探して町中走り回った");
	一時停止();
	台詞("気がつくとあたりはすっかり暗くなっていた");
	次へ(エンディング2);
}

エンディング2 = function(){
	
	テキストデフォルトY=220;
	画像("night.png");
	委員長=キャラ("i4.png",100,59);
	委員長.消す();
	台詞("オレ「はあ・・・はあ・・・」");
	一時停止();
	クリア();
	台詞("オレ「委員長、どこに居るんだ」");
	一時停止();
	クリア();
	台詞("オレ「畜生!」");
	一時停止();
	クリア();
	台詞("委員長「さっきからここに居るわよ」");
	一時停止();
	委員長.出現();
	台詞("オレ「エッ・・・!?」");
	一時停止();
	クリア();
	台詞("委員長「もうポチとかやんなくていいわよ」");
	一時停止();
	クリア();
	台詞("委員長「私ってサイテー。見たでしょ元カレ」");
	一時停止();
	台詞("オレ「うん・・・」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「あんなやつのこと好きだったのよ」");
	一時停止();
	台詞("オレ「でもいい奴だと思うよ」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「あんたの意見なんか聞いてない」");
	一時停止();
	台詞("オレ「ごめん・・・」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「ま、いーや。肩肘張っちゃってバカみたい」");
	一時停止();
	台詞("オレ「そんなことないよ」");
	一時停止();
	クリア();
	台詞("オレ「委員長はいつも一所懸命で、勉強もできて・・」");
	一時停止();
	台詞("委員長「あなた私にペット扱いされてたのよ」");
	一時停止();
	クリア();
	台詞("オレ「・・・それでもオレ、委員長のことが・・・」");
	一時停止();
	委員長.変更("i5.png");
	台詞("委員長「あきれた」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「私のどこがいいの?」");
	一時停止();
	台詞("オレ「・・・・まじめなところ」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「・・・・ウソクサい」");
	一時停止();
	台詞("オレ「ほんとだよ。まじめで一生懸命なところ」");
	一時停止();
	台詞("オレ「最初は確かに可愛いなって思った。それだけだった」");
	一時停止();
	クリア();
	台詞("オレ「けど、なんかポチとかやって」");
	一時停止();
	クリア();
	台詞("オレ「委員長がたまにだけど、嬉しそうにしてくれると」");
	一時停止();
	クリア();
	台詞("オレ「オレもなんか凄く嬉しくなって・・・」");
	一時停止();
	クリア();
	台詞("委員長「ほんとかなあ・・・」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「でもまあいいや」");
	一時停止();
	クリア();
	台詞("委員長「今日ジョブ山先生に言われたんだ」");
	一時停止();
	台詞("オレ「え、なんて?」");
	一時停止();
	クリア();
	台詞("委員長「一回くらい、素直になってみろってさ」");
	一時停止();
	台詞("オレ「素直に・・・ねえ」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「なによ?」");
	一時停止();
	台詞("オレ「い、いやなんでも・・・」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「あははは」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「私、"+プレイヤーの名前+"くんのこと、ちょっと好きかも」");
	一時停止();
	台詞("オレ「ちょっと・・・?」");
	一時停止();
	クリア();
	委員長.変更("i3.png");
	台詞("委員長「ちょっとだよ、ちょっと」");
	一時停止();
	台詞("オレ「オレは・・・委員長のこと・・・・」");
	一時停止();
	クリア();
	委員長.変更("i4.png");
	台詞("委員長「委員長じゃなくて名前で呼びなさいよ」");
	一時停止();
	台詞("オレ「え、いいの・・・・?」");
	一時停止();
	クリア();
	委員長.変更("i1.png");
	台詞("委員長「告白ってそういうもんでしょ?」");
	一時停止();
	台詞("オレ「そ、そうか・・・」");
	クリア();
	委員長.変更("i3.png");
	台詞("オレ「オレが好きなのは・・・」");
	一時停止();
	次へ(エンディング3);
}

エンディング3 = function(){
	テキストデフォルトY=10;
	台詞("そのまま夜が更けて行った");
	一時停止();
	台詞("そのあとどうなったかって?");
	一時停止();
	台詞("それはオレと委員長・・・彼女と二人だけの秘密");
	一時停止();
	台詞("それからポチと呼ばれる男達はいなくなった。");
	一時停止();
	台詞("オレ以外はね");
	一時停止();
	台詞(" ");
	台詞(" ");
	台詞(" ");
	台詞("HAPPY END");
}

プロローグ = function(){
	手に入れるアイテム=false;
	if(!フラグ.ゲーム進行度){
		フラグ.ゲーム進行度=0;
		フラグ.points = [];
		はじめに();
		return;
	}
	if(!フラグ.c)フラグ.c=0;
	if(!フラグ.ラブ度)フラグ.ラブ度=0;
	if(!フラグ.親密度)フラグ.親密度=0;
	if(!フラグ.運動)フラグ.運動=0;
	if(!フラグ.体力)フラグ.体力=0;
	テキストデフォルトY=10;

//最終イベント();
//ジョブ山イベント();
//return;
//	フラグ.ゲーム進行度=1;
/*	フラグ.ラブ度=0;
	フラグ.親密度=0;
	フラグ.運動=0;
*/	switch(フラグ.ゲーム進行度){
		case 0:
			フラグ.points = [];
			はじめに();
			return;
			break;	//本来あり得ない
		case 1:			
			if(フラグ.親密度>10){
				フラグ.ゲーム進行度=2;
				セーブ("プロローグ");
				第二章イベント();
				return;
			}
			break;
		case 2:			
			if(フラグ.親密度>20){
				if(フラグ.ラブ度>10){
					フラグ.ゲーム進行度=3;
					セーブ("プロローグ");
					第三章イベント();
					return;
				}
			}
			break;
		case 3:			
			if(フラグ.親密度>40){
				if(フラグ.ラブ度>20){
					if(フラグ.運動>10){
						フラグ.ゲーム進行度=4;
						セーブ("プロローグ");
						ジョブ山イベント();
						return;
					}
				}
			}
			break;
		case 4:			
			if(フラグ.親密度>50){
				if(フラグ.ラブ度>30){
					if(フラグ.運動>30){
						フラグ.ゲーム進行度=5;
						セーブ("プロローグ");
						ドロ沢登場イベント();
						return;
					}
				}
			}
			break;
		case 5:			
			if(フラグ.親密度>60){
				if(フラグ.ラブ度>40){
					if(フラグ.運動>40){
						フラグ.ゲーム進行度=6;
						セーブ("プロローグ");
						第四章イベント();
						return;
					}
				}
			}
			break;
		case 6:			
			if(フラグ.親密度>70){
				if(フラグ.ラブ度>60){
					if(フラグ.運動>50){
						フラグ.ゲーム進行度=7;
						セーブ("プロローグ");
						第五章イベント();
						return;
					}
				}
			}
			break;
		case 7:			
			if(フラグ.親密度>80){
				if(フラグ.ラブ度>70){
					if(フラグ.運動>50){
						フラグ.ゲーム進行度=8;
						セーブ("プロローグ");
						第六章イベント();
						return;
					}
				}
			}
			break;
		case 8:			
			if(フラグ.親密度>90){
				if(フラグ.ラブ度>90){
					if(フラグ.運動>60){
						フラグ.ゲーム進行度=9;
						セーブ("プロローグ");
						修羅場イベント();
						return;
					}
				}
			}
			break;
		case 9:			
			if(フラグ.親密度>100){
				if(フラグ.ラブ度>90){
					if(フラグ.運動>70){
						フラグ.ゲーム進行度=10;
						セーブ("プロローグ");
						最終イベント();
						return;
					}
				}
			}
			break;
		
	}

	台詞("オレ「さて、どうするか」");

	台詞("<font color=#ff3333>ラブ度:"+フラグ.ラブ度+"</font>");
	台詞("<font color=#33ff33>親密度:"+フラグ.親密度+"</font>");
	台詞("<font color=#33aaff>　運動:"+フラグ.運動+"</font>");

	選択肢("周囲を調べる(GPS)",周囲を調べる);
	選択肢("委員長とのなれそめを思い出す",はじめに);
};

周囲を調べる = function(){
	if(乱数(100)<10){
		画像("outdoor.png");
		ジョブ山 = キャラ("job.png",100,60);
		テキストデフォルトY=220;
		台詞("ジョブ山「やあ、"+プレイヤーの名前+"君じゃないか」");
		一時停止();
		台詞("オレ「あ、ジョブ山先生!」");
		一時停止();
		クリア();
		台詞("ジョブ山「最近頑張ってるみたいだな。これをやろう」");
		一時停止();
		台詞("オレ「あ、ありがとうございます!」");
		一時停止();
		クリア();
		手に入れるアイテム = どれか(レアアイテム);
		台詞("<font color=cyan>"+手に入れるアイテム.name+"</font>を手に入れた!");

		選択肢("やめておく",プロローグ);
		選択肢("委員長に貢ぐ",委員長に貢ぐ);

		return;
	}
	現在位置を取得して次へ(位置情報を表示);
}

アイテム = [
	{name:"木の棒",love:-1,secret:0,sports:0,response:0},
	{name:"石ころ",love:-1,secret:0,sports:0,response:0},
	{name:"雑草",love:-1,secret:0, sports:0,response:0},
	{name:"使用済みティッシュ",love:-1,secret:0,sports:0,response:0},
	{name:"テレクラのティッシュ",love:-1,secret:0,sports:0,response:0},
	{name:"フリーペーパーR15",love:-1,secret:0, sports:0,response:0},
	{name:"四葉のクローバー",love:1,secret:0,sports:0,response:1},
	{name:"鉄アレイ",love:0,secret:0,sports:1,response:0},
	{name:"ヘヴィメタルのCD",love:-1,secret:1,sports:0,response:1},
	{name:"DebianのCD-ROM",love:-1,secret:1,sports:0,response:1},
	{name:"テニスシューズ",love:0,secret:0,sports:1,response:1},
	{name:"8GB USBメモリ",love:0,secret:1,sports:0,response:1},
	{name:"タンポポの花",love:-1,secret:1,sports:0,response:1},
	{name:"メイド服",love:1,secret:1,sports:0,response:1},
	{name:"テニス服",love:0,secret:0,sports:1,response:1},
	{name:"ドロイド君人形",love:1,secret:1,sports:0,response:2},
	{name:"電脳なをさん",love:1,secret:1,sports:0,response:2},
	{name:"週刊アスキー今週号",love:1,secret:0,sports:0,response:2},
];

レアアイテム = [
	{name:"偽ドロイド君人形",love:2,secret:1,sports:0,response:2},
	{name:"wise9バッヂ",love:2,secret:0,sports:0,response:2},
	{name:"電脳なをさん愛憎版",love:2,secret:1,sports:0,response:2},
	{name:"週刊アスキー2045年特別号",love:2,secret:0,sports:0,response:2},
	{name:"初音ミクのフィギュア",love:2,secret:0,sports:0,response:2},
	{name:"SIMMモジュール",love:2,secret:0,sports:0,response:2},
	{name:"黄金の鉄アレイ",love:0,secret:0,sports:2,response:0},
	{name:"64GB USBメモリ",love:0,secret:1,sports:0,response:1}
];


位置情報を表示 = function(){

	if(現在位置が取得できた){
/*		台詞("現在の緯度:"+現在の緯度);
		台詞("現在の経度:"+現在の経度);
		台詞("現在の高度:"+現在の高度);
		台詞("現在の移動速度:"+現在の移動速度);
*/
		var t = false;
		for(i=0;i<フラグ.points.length;i++){
			if( (フラグ.points[i].coords.latitude == 現在位置情報.coords.latitude)&&
				(フラグ.points[i].coords.longitude == 現在位置情報.coords.longitude)){
					t=true;
				}
		}t=false;
		if(t){
			台詞("うーん、このあたりはもう探し尽くしたな");
			次へ(ゲーム中断);

		}else{
			フラグ.points[フラグ.c]=現在位置情報;
			フラグ.c++;
			セーブ("プロローグ");
			if(フラグ.c >3)フラグ.c=0;
			台詞("ふう、こんなんみつかったぞ");
			Item1 = どれか(アイテム);
			選択肢(Item1.name,委員長に貢ぐ,function(){手に入れるアイテム=Item1;});
			Item2 = どれか(アイテム);
			選択肢(Item2.name,委員長に貢ぐ,function(){手に入れるアイテム=Item2;});
			Item3 = どれか(アイテム);
			選択肢(Item3.name,委員長に貢ぐ,function(){手に入れるアイテム=Item3;});
		}
		
	}else{
		台詞("現在位置取得失敗");
	}
/*
	台詞("------------");
	台詞("C:"+フラグ.c);
	for(i=0;i<フラグ.points.length;i++){
		台詞(i+":"	+フラグ.points[i].coords.latitude+","
					+フラグ.points[i].coords.longitude);
	}
*///	選択肢("現在位置を更新",プロローグ);
}

貢いだ=false;
委員長に貢ぐ = function(){
	テキストデフォルトY=220;
	Item=手に入れるアイテム;
	貢いだ=Item;
	台詞("オレは<font color=cyan>"+Item.name+"</font>を持って");
	台詞("委員長に会いに行った");
	一時停止();
	クリア();
	画像("school.png");
	委員長=キャラ("i1.png",100,59);
	台詞("委員長「あ、"+プレイヤーの名前+"くん・・・」");
	一時停止();
	クリア();
	台詞("オレ「委員長、貢ぎ物を持って来たんだ」");
	一時停止();
	台詞("オレは<font color=cyan>"+Item.name+"</font>を渡した");
	一時停止();
	クリア();
	switch(Item.response){
		case 0:
			画像("kick.png");
			委員長.消す();
			一時停止();
			画像("school.png");
			委員長.変更("i4.png");
			委員長.出現();
			台詞("委員長「"+
				どれか([	"おいポチ、こりゃなんのマネだ?・・ア゛?",
						"・・・殺されたいらしいな・・・",
						"・・・いっぺん死んでみるか?",
						"・・・いい加減にしろよ",
						"・・・帰れ",
			])
			+"」");
			一時停止();
			クリア();
			委員長.変更("i4.png");
			台詞("委員長「次も変なもんもって来たら殺すぞ」");
		break;
		case 1:
			委員長.変更("i5.png");
			台詞("委員長「"+
				どれか([	"ふん・・・"+Item.name+"か。まあまあだな",
						"・・・なにこれ?",
						"・・・もうちょっといいものなかった?",
						"・・・・・・・",
						"・・・もっと頑張ってね♪",
			])
			+"」");
			一時停止();
			クリア();
			委員長.変更("i3.png");
			台詞("委員長「もうちょっと・・・かな」");
		break;
		case 2:
			委員長.変更("i2.png");
			台詞("委員長「"+
				どれか([	"えっ!? "+Item.name+"!?。どこで手に入れたの!?",
						"わぁ! "+Item.name+"だ!",
						"エッ!?まさか"+Item.name+"!?",
						"これ、手に入れるの大変じゃなかった?",
						"♪♪♪♪♪♪",
			])
			+"」");
			一時停止();
			クリア();
			委員長.変更("i3.png");
			台詞("委員長「その調子でおねがいね、ポチ」");
		break;
	}
	一時停止();
	if(Item.love!=0){
			x = 乱数(10)*Item.love;
			台詞("<font color=#ff3333>ラブ度:"+Math.abs(x)+(Item.love>0 ? "↑" : "↓")+"</font>");
			フラグ.ラブ度 += x;
	}
	if(Item.secret!=0){
			x = 乱数(10)*Item.secret;
			台詞("<font color=#33ff33>親密度:"+Math.abs(x)+(Item.secret>0 ? "↑" : "↓")+"</font>");
			フラグ.親密度 +=x;
	}
	if(Item.sports!=0){
			x = 乱数(10)*Item.sports;
			台詞("<font color=#33aaff>　運動:"+Math.abs(x)+(Item.sports>0 ? "↑" : "↓")+"</font>");
			フラグ.運動 +=x;
	}
	セーブ("プロローグ");
	次へ(プロローグ);
}

ゲーム中断 = function(){
	if(貢いだ){
		Item=貢いだ;
		if(Item){
			game.end(フラグ.ゲーム進行度,"委員長に"+Item.name+"を貢いだ");
		}else
			game.end(フラグ.ゲーム進行度,"委員長のペットとしてがんばり中");
	}else
			game.end(フラグ.ゲーム進行度,"委員長のペットとして散策中");
}
