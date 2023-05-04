// JavaScript Document//=======================================================
// (C) 2020 YouChalice
// RandomWords.js  2020/10/6
// The MIT License (MIT)
//=============================================================================
// Version
// 1.0.0 2020/05/14 初版公開
// ----------------------------------------------------------------------------
// [Twitter]: https://twitter.com/YouEucharis
//=============================================================================
/*:

 * @plugindesc ランダムワードプラグイン
 * @author YouChalice
 *
 * @help プラグインコマンドで登録した単語をランダムで選んで表示するプラグインです。
 * 
 * ■使い方
 * 変化させたい単語が含まれる文章イベントの前に
 * 当プラグインのプラグインコマンドをお使いください。
 * プラグインコマンドを実行するタイミングで単語を変化させることが出来ます。
 * 会話の度に単語を変える、マップの切替時に単語を変えるなど、
 * 用途に合わせてお使いください。
 * 
 * ■プラグインコマンド詳細
 * RW_Table [単語を入れる変数番号] [登録する単語1] [登録する単語2] ... [登録する単語n]
 *
 * 【使用例】
 * RW_Table 1 ブリ スズキ ハマチ ボラ
 * (変数1に「ブリ」「スズキ」「ハマチ」「ボラ」のいずれかの単語を代入します。
 *
 * ■注意点
 * 登録する単語と単語の間は必ず半角スペースで開けるようにしてください。 
 *
 * ■利用規約
 * 作者に無断で改変、再配布が可能です。
 * いかなる利用形態（商用、18禁利用等）にもお使いいただけます。
 * 作者名の表記も特に必要ありません。
 */
 
 var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		 _Game_Interpreter_pluginCommand.apply(this, arguments);
		var OutputId, Words;
		if (command == 'RW_Table' ){
			var WordTable = [];
			for (i=1; i < args.length; i++){
				WordTable.push(args[i])
			};
			OutputId = args[0];
			Words = WordTable[Math.floor(Math.random() * WordTable.length)];
			$gameVariables.setValue(OutputId,Words);
		};
	};